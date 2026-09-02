/*
  QA battery for the Credify EHR home + Solutions pages, ported from
  task/CREDIFY_TWOFILE_QA_08-28.mjs so it drives the Next.js routes
  (/ and /solutions) instead of the two standalone HTML files.

  It verifies the same behaviour end to end:
   - a Home card navigates to /solutions?m=<module>
   - the Solutions page spotlights that module's pill and centres its stage row
   - the pill then scrolls to the module; the floating Sections control jumps
     around; the jiggle fires

  Run against a server you have already started:
    npm run build && npx next start -p 3111
    node scripts/qa-ehr-site.mjs                     (defaults to :3111)
    node scripts/qa-ehr-site.mjs http://localhost:3000
*/
import { chromium } from "playwright";

const BASE = (process.argv[2] || "http://localhost:3111").replace(/\/$/, "");
const HOME = `${BASE}/`;
const SOLUTIONS = `${BASE}/solutions`;

const CARDS = [
  ["website", "acquire"], ["crm", "acquire"], ["frontdesk", "acquire"],
  ["portal", "intake"], ["formshub", "intake"],
  ["calendar", "schedule"], ["reminders", "schedule"],
  ["ehr", "treat"], ["treatment", "treat"], ["ainotes", "treat"], ["messaging", "treat"],
  ["rcm", "get-paid"], ["credentialing", "get-paid"],
  ["reports", "run-the-business"], ["hr", "run-the-business"], ["accounting", "run-the-business"],
];

/* CSS Modules hash the class names, so match on the un-hashed suffix. */
const card = (id) => `a[class*="feature-card"][href$="?m=${id}"]`;
const chip = (id) => `a[class*="mi-chip"][href="#${id}"]`;

let pass = 0, fail = 0;
const ok = (condition, message) => {
  if (condition) { pass++; console.log("PASS", message); }
  else { fail++; console.log("FAIL", message); }
};

const hasClass = async (page, selector, cls, timeout = 4000) => {
  const end = Date.now() + timeout;
  while (Date.now() < end) {
    const value = await page.locator(selector).getAttribute("class").catch(() => null);
    if (value && value.includes(cls)) return true;
    await page.waitForTimeout(80);
  }
  return false;
};

/* Scrolling is smooth, so poll until the animation settles rather than
   sampling once on the frame after the click. */
const settlesInView = async (page, selector, { needsScroll = true } = {}, timeout = 4000) => {
  const end = Date.now() + timeout;
  while (Date.now() < end) {
    const hit = await page.locator(selector).evaluate(
      (el, scrolled) => {
        const rect = el.getBoundingClientRect();
        return rect.top < (window.innerHeight || 900) && rect.bottom > 0 &&
          (!scrolled || window.scrollY > 300);
      },
      needsScroll,
    );
    if (hit) return true;
    await page.waitForTimeout(80);
  }
  return false;
};

const run = async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

  // Warm both routes first: the very first request after a cold start can take
  // longer than Playwright's default navigation timeout.
  for (const url of [HOME, SOLUTIONS]) {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 120000 });
  }

  // 1. every Home card navigates to ?m=<module> and spotlights that pill
  for (const [id, cluster] of CARDS) {
    await page.goto(HOME);
    await page.locator(card(id)).click();
    await page.waitForURL(new RegExp(`/solutions\\?m=${id}$`));
    const focused = await hasClass(page, chip(id), "mi-chip--focus");
    const rowInView = await page.locator(chip(id)).evaluate((el) => {
      const rect = el.getBoundingClientRect();
      return rect.top >= 0 && rect.top < (window.innerHeight || 900);
    });
    ok(focused && rowInView, `card "${id}" -> ?m=${id}, ${cluster} pill spotlighted and in view`);
  }

  // 2. clicking the spotlighted pill scrolls to that module's detail
  await page.goto(HOME);
  await page.locator(card("website")).click();
  await page.waitForURL(/\?m=website$/);
  await hasClass(page, chip("website"), "mi-chip--focus");
  await page.locator(chip("website")).click();
  ok(
    await settlesInView(page, "#website"),
    "clicking the pill scrolls down to the Website module detail",
  );

  // 3. floating Sections control: hidden at top, appears past index, jumps, returns, hides
  await page.goto(SOLUTIONS);
  await page.locator("#cf-jump").waitFor({ state: "hidden", timeout: 3000 });
  ok(true, "Sections control hidden at the top");
  await page.locator("#treat").evaluate((el) => el.scrollIntoView());
  await page.locator("#cf-jump").waitFor({ state: "visible", timeout: 3000 });
  ok(true, "Sections control appears after scrolling past the index");
  await page.locator("#cf-jump-btn").click();
  await page.locator("#cf-jump-menu").waitFor({ state: "visible" });
  await page.locator('[class*="cf-jump-item"][data-target="#get-paid"]').click();
  ok(
    await settlesInView(page, "#get-paid"),
    "Sections menu jumps to the chosen stage (Get paid)",
  );
  await page.locator("#cf-jump-btn").click();
  await page.locator('[class*="cf-jump-all"]').click();
  ok(
    await settlesInView(page, "#cf-allmodules", { needsScroll: false }),
    "All modules returns to the module index",
  );
  await page.locator("#cf-jump").waitFor({ state: "hidden", timeout: 3000 });
  ok(true, "Sections control hides again at the index");

  // 4. jiggle ~3s after the first pill click
  await page.goto(SOLUTIONS);
  await page.locator(chip("website")).click();
  ok(
    await hasClass(page, "#cf-jump-btn", "cf-jump-jiggle", 6000),
    "Sections button jiggles ~3s after the first pill click",
  );

  // 5. every module screenshot actually renders. next/image silently fails a
  //    whole page when a path is missing from images.localPatterns, and the
  //    boxes still lay out correctly because .mod-shot is sized by CSS.
  await page.goto(SOLUTIONS);
  ok(page.url().endsWith("/solutions"), "the Solutions page loads");
  await page.evaluate(async () => {
    document.querySelectorAll("img[loading=lazy]").forEach((img) => { img.loading = "eager"; });
    window.scrollTo(0, document.body.scrollHeight);
  });
  await page.waitForTimeout(1500);
  const shots = await page.evaluate(() =>
    [...document.querySelectorAll('[class*="mod-shot"] img')].map((img) => ({
      src: img.getAttribute("src"),
      ok: img.complete && img.naturalWidth > 0,
    })),
  );
  ok(shots.length === 24, `all 24 module screenshots are on the page (found ${shots.length})`);
  const broken = shots.filter((shot) => !shot.ok);
  ok(broken.length === 0, `every module screenshot renders${broken.length ? ` (broken: ${broken.map((b) => b.src).join(", ")})` : ""}`);

  // 6. the screenshot lightbox opens and closes
  await page.goto(SOLUTIONS);
  await page.locator('[class*="mod-shot"]').first().click();
  await page.locator("#lb").waitFor({ state: "visible", timeout: 3000 });
  ok(true, "clicking a screenshot opens the lightbox");
  await page.keyboard.press("Escape");
  await page.locator("#lb").waitFor({ state: "hidden", timeout: 3000 });
  ok(true, "Escape closes the lightbox");

  // 7. mobile 390px: card -> pill spotlight still works
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(HOME);
  await page.locator(card("reports")).click();
  await page.waitForURL(/\?m=reports$/);
  ok(
    await hasClass(page, chip("reports"), "mi-chip--focus"),
    'mobile 390px: card "reports" spotlights its pill on Solutions',
  );

  await browser.close();
  console.log(`\n================ ${pass} passed, ${fail} failed ================`);
  process.exit(fail ? 1 : 0);
};

run().catch((error) => { console.error("QA ERROR:", error); process.exit(2); });
