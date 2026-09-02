/*
  Pixel-parity harness for the Credify EHR home + Solutions pages.

  Loads the source HTML from task/ and the built Next.js routes side by side at
  three viewports, and compares the box, type and colour of every landmark
  element. Anything more than 1px apart is reported.

  The header is deliberately NOT compared: these pages use the site's shared
  Navbar, not the one the source HTML shipped. Because that Navbar is a
  different height, vertical positions are measured relative to the top of the
  hero rather than the top of the page, so the header height cancels out.

  Run against a server you have already started:
    npm run build && npx next start -p 3111
    node scripts/pixel-parity.mjs                    (defaults to :3111)
    node scripts/pixel-parity.mjs http://localhost:3000
*/
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { chromium } from "playwright";

const BASE = (process.argv[2] || "http://localhost:3111").replace(/\/$/, "");
const SOURCE_DIR = path.resolve("task");

if (!fs.existsSync(path.join(SOURCE_DIR, "credify-index.html"))) {
  console.error(`No source HTML in ${SOURCE_DIR} — nothing to compare against.`);
  process.exit(0);
}

/* Reads the page-absolute box and the type/colour of an element, on both the
   source HTML (plain class names) and the Next build (hashed CSS-module names). */
function probe(name) {
  const strip = (c) => c.replace(/^.*-module__[A-Za-z0-9]+__/, "");
  const named = (root, want) =>
    [...root.querySelectorAll("[class]")].find((n) =>
      String(n.className.baseVal ?? n.className)
        .split(/\s+/)
        .some((c) => strip(c) === want),
    );
  // "hero btn-primary" means the first .btn-primary inside .hero — needed where
  // the same class appears in the header, which these pages no longer share
  // with the source HTML.
  const [outer, inner] = name.split(" ");
  const root = inner
    ? document.querySelector("." + CSS.escape(outer)) || named(document, outer)
    : document;
  if (!root) return null;
  const want = inner || outer;
  const el =
    (root === document ? document.querySelector("." + CSS.escape(want)) : root.querySelector("." + CSS.escape(want))) ||
    named(root === document ? document : root, want);
  if (!el) return null;
  const r = el.getBoundingClientRect();
  const s = getComputedStyle(el);
  const round = (v) => Math.round(v * 10) / 10;
  return {
    x: round(r.left + scrollX),
    y: round(r.top + scrollY),
    w: round(r.width),
    h: round(r.height),
    font: `${s.fontSize}/${s.lineHeight} ${s.fontWeight}`,
    color: s.color,
    bg: s.backgroundColor,
    pad: s.padding,
    radius: s.borderRadius,
    border: s.borderTopWidth + " " + s.borderTopColor,
  };
}

const PAGES = [
  {
    label: "HOME",
    source: pathToFileURL(path.join(SOURCE_DIR, "credify-index.html")).href,
    built: `${BASE}/`,
    probes: ["hero", "hero-in", "hero-copy",
      "pill", "lede", "cta-row", "hero btn-primary", "trust-list", "stat-card", "stat-num",
      "activity-head", "features", "head", "features-grid", "feature-card", "icon-wrap",
      "feature-name", "more-bar", "mb-count", "mb-link", "cta", "foot", "foot-grid",
      "foot-blurb", "foot-base"],
  },
  {
    label: "SOLUTIONS",
    source: pathToFileURL(path.join(SOURCE_DIR, "credify-solutions.html")).href,
    built: `${BASE}/solutions`,
    probes: ["hero", "hero-in", "jump", "modindex", "mi-group", "mi-label",
      "mi-chips", "mi-chip", "stagesec", "stagehd", "stagenum", "mods", "mod", "mod-copy",
      "tag-managed", "mod-link", "mod-shot", "zoomcue", "cta", "foot", "foot-grid"],
  },
];

const VIEWPORTS = [
  { width: 1440, height: 1000, label: "1440" },
  { width: 1024, height: 900, label: "1024" },
  { width: 390, height: 844, label: "390" },
];

const browser = await chromium.launch();
let mismatches = 0;

for (const vp of VIEWPORTS) {
  for (const page of PAGES) {
    const read = async (url) => {
      const tab = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
      // Not networkidle: the sales chat widget on the built pages holds a
      // long-lived connection, so the network never goes quiet.
      await tab.goto(url, { waitUntil: "load" });
      await tab.evaluate(async () => { await document.fonts.ready; });
      await tab.waitForTimeout(800);
      const out = {};
      for (const name of page.probes) out[name] = await tab.evaluate(probe, name);
      await tab.close();
      // Re-base every y on the hero, so the differing header height drops out.
      const origin = out.hero?.y ?? 0;
      for (const box of Object.values(out)) if (box) box.y = Math.round((box.y - origin) * 10) / 10;
      return out;
    };

    const [a, b] = [await read(page.source), await read(page.built)];
    const bad = [];
    for (const name of page.probes) {
      if (!a[name] || !b[name]) { bad.push(`${name}: missing (${!a[name] ? "source" : "built"})`); continue; }
      for (const key of Object.keys(a[name])) {
        const [x, y] = [a[name][key], b[name][key]];
        const near = typeof x === "number" ? Math.abs(x - y) <= 1 : x === y;
        if (!near) bad.push(`${name}.${key}: source ${JSON.stringify(x)} vs built ${JSON.stringify(y)}`);
      }
    }
    mismatches += bad.length;
    console.log(`\n### ${page.label} @ ${vp.label}px — ${bad.length ? bad.length + " differences" : "identical"}`);
    for (const line of bad) console.log("   " + line);
  }
}

await browser.close();
console.log(`\n================ ${mismatches} total differences ================`);
process.exit(mismatches ? 1 : 0);
