/*
  Behaviour for the Credify homepage, ported from the inline scripts of
  HOMEPAGE_MOCK_B_11-10-V142.html:
    - the "See what you keep" calculator
    - the sample-practice charts, their hover tip and the "See the numbers" table
    - the screenshot lightbox
    - the [data-tip] hover notes (mouse) and the tappable "i" notes (touch)
    - the "Why 90 days free?" toggles
    - the * / ** footnote buttons (keyboard focus on desktop, tap on touch)
  Left out on purpose: the mock's own header menu (the site Navbar is used) and
  its in-file page switcher (Pricing is a real route here).

  Every document/window listener is tied to one AbortController so the page can
  be left and re-entered through client-side navigation without piling up.
*/

const MONTHLY_MINIMUM_TIP =
  "A monthly minimum applies based on the number of providers who need credentialing and the services you select. We determine the amount with each agency individually, and as a family-owned company, we keep the pricing fair and reasonable.\n\nServices and pricing models are subject to applicable federal and state laws. In states where percentage-based billing is restricted or prohibited by law (including fee-splitting and Medicaid regulations), services are billed via an alternative compliant structure, such as a fixed flat fee per claim. Credify does not provide legal advice and does not participate in patient referral or steering activities.";

function escapeAttr(value: string) {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/\n/g, "&#10;");
}

const byId = <T extends HTMLElement = HTMLElement>(id: string) =>
  document.getElementById(id) as T | null;

const finePointer = () => matchMedia("(hover:hover) and (pointer:fine)").matches;

/* ---------------- Calculator ---------------- */

function initCalculator(signal: AbortSignal) {
  const $ = (id: string) => byId<HTMLInputElement>(id)!;
  if (!byId("i_prov")) return;
  const f0 = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

  function n(id: string) {
    const e = $(id);
    let v = parseFloat(e.value);
    if (isNaN(v)) v = 0;
    const lo = parseFloat(e.min);
    const hi = parseFloat(e.max);
    if (!isNaN(lo) && v < lo) v = lo;
    if (!isNaN(hi) && v > hi) v = hi;
    return v;
  }
  /* Percents stay 0 to 100, session rate at least $1; a typed value outside the limits snaps back on blur. */
  function fix(id: string) {
    const e = $(id);
    if (e.type !== "number") return;
    const v = n(id);
    if (e.value === "" || parseFloat(e.value) !== v) e.value = String(v);
  }
  const money = (v: number) => (v < 0 ? "-" : "") + f0.format(Math.abs(Math.round(v)));
  const count = (v: number) => Math.round(v).toLocaleString("en-US");
  const text = (id: string, value: string | number) => {
    $(id).textContent = String(value);
  };

  function calc() {
    const prov = n("i_prov");
    const appts = n("i_appts");
    const mins = n("i_mins");
    const rate = Math.max(0, n("i_rate"));
    const bill = $("i_bill").checked;
    text("o_prov", prov);
    text("o_appts", appts);
    text("o_mins", mins);
    const nsC = n("r_ns_c") / 100;
    const dnC = n("r_dn_c") / 100;
    const nsK = n("r_ns_k") / 100;
    const dnK = n("r_dn_k") / 100;
    const bs = n("r_bs") / 100;
    const sched = prov * appts;
    // competitors
    const attC = sched * (1 - nsC);
    const colC = attC * rate * (1 - dnC);
    const bsC = bill ? colC * bs : 0;
    const spFee = prov * 79 + attC * 0.39 + sched * 0.15;
    const tnBase = prov <= 1 ? 69 : 79 + 50 * (prov - 1);
    const tnFee = tnBase + attC * 0.28 + sched * 0.14 + sched * 3 * 0.14;
    // credify
    const attK = sched * (1 - nsK);
    const colK = attK * rate * (1 - dnK);
    const feeK = colK * 0.0499;
    const hrs = (attK * mins) / 60;
    /* timeValue = CredifySessions × (MinutesSaved ÷ 60) × AveragePaidPerSession */
    const timeValue = attK * (mins / 60) * rate;
    const netK = colK - feeK + timeValue;
    const netSP = colC - spFee - bsC;
    const netTN = colC - tnFee - bsC;
    const dSP = netK - netSP;
    const dTN = netK - netTN;
    text("w_sp_y", money(dSP * 12));
    text("w_sp_m", money(dSP));
    text("w_tn_y", money(dTN * 12));
    text("w_tn_m", money(dTN));
    /* More collected + fees and billing saved + the value of time back = the monthly total. */
    const tv = `${money(timeValue)} (${count(hrs)} hrs)`;
    const dc = money(colK - colC);
    text("s_sp_col", dc);
    text("s_sp_fee", money(spFee + bsC - feeK));
    text("s_sp_time", tv);
    text("s_tn_col", dc);
    text("s_tn_fee", money(tnFee + bsC - feeK));
    text("s_tn_time", tv);
    const bsLabel = `${+(bs * 100).toFixed(2)}%`;
    text("o_bs", bsLabel);
    const pv = Math.max(1, prov);
    const bsPct = bill ? bsLabel : "Not added";
    const rows: (string | undefined)[][] = [
      ["Sessions attended", count(attK), count(attC), count(attC)],
      ["Collected", money(colK), money(colC), money(colC)],
      ["Software and claim fees", "$0", money(-spFee), money(-tnFee)],
      ["Billing service rate", "0%", bsPct, bsPct],
      ["Billing service", "$0", bill ? money(-bsC) : "Not added", bill ? money(-bsC) : "Not added"],
      [
        `Credify 4.99%<button type="button" class="fn fnt" data-tip="${escapeAttr(
          MONTHLY_MINIMUM_TIP,
        )}" aria-label="Monthly minimum and billing terms">**</button>`,
        money(-feeK),
        "",
        "",
      ],
      ["Time saved", `${money(timeValue)} (${count(hrs)} hrs)`, "", ""],
      ["Total value each month", money(netK), money(netSP), money(netTN), "tot"],
      ["Per provider each month", money(netK / pv), money(netSP / pv), money(netTN / pv), "tot"],
      ["More with Credify each month", "", money(dSP), money(dTN), "more"],
    ];
    byId("tb")!.innerHTML = rows
      .map(
        (r) =>
          `<tr${r[4] ? ` class="${r[4]}"` : ""}><td>${r[0]}</td><td class="us" data-label="Credify">${r[1]}</td><td data-label="SimplePractice">${r[2]}</td><td data-label="TherapyNotes">${r[3]}</td></tr>`,
      )
      .join("");
  }

  ["i_prov", "i_appts", "i_mins", "i_rate", "i_bill", "r_ns_c", "r_dn_c", "r_ns_k", "r_dn_k", "r_bs"].forEach(
    (id) => {
      const el = $(id);
      el.addEventListener("input", calc, { signal });
      el.addEventListener(
        "change",
        () => {
          fix(id);
          calc();
        },
        { signal },
      );
      el.addEventListener("blur", () => fix(id), { signal });
    },
  );
  calc();
}

/* ---------------- Charts, numbers table, lightbox ---------------- */

type ChartKey = "rev" | "ns" | "at";
type HitColumn = { x: number; w: number; h: number; cy: number };

function initCharts(signal: AbortSignal) {
  /* Sample practice data (June to November, Credify starts in August). Labeled Sample data on the page. */
  const M = ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"];
  const START = 2;
  const BEF = "#8ca59a";
  const AFT = "#1a8a66";
  const INK = "#0d1f18";
  const MUT = "#527060";
  const GRID = "#e6eeea";
  const D: Record<ChartKey, number[]> = {
    rev: [34100, 34600, 35900, 37200, 38100, 38900],
    ns: [7.4, 7.0, 5.1, 3.9, 3.5, 3.3],
    at: [368, 372, 381, 392, 398, 404],
  };
  const NAME: Record<ChartKey, string> = {
    rev: "Revenue collected",
    ns: "No-show rate",
    at: "Appointments attended",
  };
  const FMT: Record<ChartKey, (v: number) => string> = {
    rev: (v) => `$${v.toLocaleString("en-US")}`,
    ns: (v) => `${v.toFixed(1)}%`,
    at: (v) => String(v),
  };
  const NS = "http://www.w3.org/2000/svg";

  function S(tag: string, attrs: Record<string, string | number>, txt?: string) {
    const e = document.createElementNS(NS, tag);
    for (const k in attrs) e.setAttribute(k, String(attrs[k]));
    if (txt != null) e.textContent = txt;
    return e;
  }

  const tip = byId("tip");

  function showTip(box: HTMLElement, key: ChartKey, i: number, x: number, y: number) {
    if (!tip) return;
    tip.textContent = "";
    const b = document.createElement("b");
    b.textContent = FMT[key](D[key][i]);
    tip.appendChild(b);
    const s = document.createElement("span");
    const k = document.createElement("i");
    k.style.background = i < START ? BEF : AFT;
    s.appendChild(k);
    s.appendChild(document.createTextNode(`${M[i]}, ${i < START ? "before Credify" : "with Credify"}`));
    tip.appendChild(s);
    tip.classList.add("on");
    const w = tip.offsetWidth;
    const h = tip.offsetHeight;
    const L = Math.min(Math.max(8, x - w / 2), innerWidth - w - 8);
    let T = y - h - 12;
    if (T < 8) T = y + 16;
    tip.style.left = `${L}px`;
    tip.style.top = `${T}px`;
    box.classList.add("hov");
    box.querySelectorAll<SVGElement>(".mk").forEach((m) =>
      m.classList.toggle("on", Number(m.dataset.i) === i),
    );
  }

  function hideTip(box: HTMLElement) {
    tip?.classList.remove("on");
    box.classList.remove("hov");
  }

  /* Hit targets wider than the marks. */
  function hits(svg: SVGElement, box: HTMLElement, key: ChartKey, cols: HitColumn[]) {
    cols.forEach((c, i) => {
      const r = S("rect", {
        x: c.x,
        y: 0,
        width: c.w,
        height: c.h,
        class: "hit",
        tabindex: "0",
        role: "img",
        "aria-label": `${NAME[key]}, ${M[i]}: ${FMT[key](D[key][i])}${
          i < START ? ", before Credify" : ", with Credify"
        }`,
      });
      r.addEventListener("pointermove", (e) => {
        const pe = e as PointerEvent;
        showTip(box, key, i, pe.clientX, pe.clientY);
      });
      r.addEventListener("pointerleave", () => hideTip(box));
      r.addEventListener("focus", () => {
        const bb = r.getBoundingClientRect();
        showTip(box, key, i, bb.left + bb.width / 2, bb.top + c.cy);
      });
      r.addEventListener("blur", () => hideTip(box));
      svg.appendChild(r);
    });
  }

  function area(box: HTMLElement, key: ChartKey) {
    const vals = D[key];
    const W = Math.max(240, box.clientWidth);
    const H = Number(box.dataset.h) || 250;
    const mini = box.dataset.mini;
    const lo = 32000;
    const hi = 40000;
    const L = mini ? 40 : 46;
    const R = W - 14;
    const T = mini ? 10 : 14;
    const B = H - 24;
    const X = (i: number) => L + ((R - L) * i) / (vals.length - 1);
    const Y = (v: number) => B - ((B - T) * (v - lo)) / (hi - lo);
    const svg = S("svg", {
      viewBox: `0 0 ${W} ${H}`,
      width: W,
      height: H,
      role: "group",
      "aria-label": `${NAME[key]}, June to November, sample data`,
    });
    const sx = X(START) - (X(1) - X(0)) / 2;
    svg.appendChild(S("rect", { x: sx, y: T - 6, width: R - sx + 6, height: B - T + 6, fill: "#f4f7f5" }));
    if (!mini)
      svg.appendChild(
        S("text", { x: sx + 8, y: T + 9, "font-size": "12", "font-weight": "600", fill: INK }, "Credify starts"),
      );
    const ticks = mini ? [32000, 36000, 40000] : [32000, 34000, 36000, 38000, 40000];
    ticks.forEach((v) => {
      svg.appendChild(S("line", { x1: L, x2: R, y1: Y(v), y2: Y(v), stroke: GRID, "stroke-width": 1 }));
      svg.appendChild(
        S(
          "text",
          { x: L - 8, y: Y(v) + 4, "text-anchor": "end", "font-size": "11.5", fill: MUT, class: "num" },
          `$${v / 1000}K`,
        ),
      );
    });
    const pts = vals.map((v, i) => `${X(i).toFixed(1)},${Y(v).toFixed(1)}`).join(" ");
    svg.appendChild(
      S("polygon", { points: `${X(0)},${B} ${pts} ${X(vals.length - 1)},${B}`, fill: "#1a8a6614" }),
    );
    /* Before segment gray, with segment green. */
    const p2 = vals
      .slice(START)
      .map((v, j) => `${X(j + START)},${Y(v)}`)
      .join(" ");
    svg.appendChild(
      S("polyline", {
        points: `${vals
          .slice(0, START)
          .map((v, i) => `${X(i)},${Y(v)}`)
          .join(" ")} ${X(START)},${Y(vals[START])}`,
        fill: "none",
        stroke: BEF,
        "stroke-width": 2,
        "stroke-linejoin": "round",
      }),
    );
    svg.appendChild(
      S("polyline", { points: p2, fill: "none", stroke: AFT, "stroke-width": 2, "stroke-linejoin": "round" }),
    );
    vals.forEach((v, i) => {
      svg.appendChild(
        S("circle", {
          cx: X(i),
          cy: Y(v),
          r: 4.5,
          fill: i < START ? BEF : AFT,
          stroke: "#fff",
          "stroke-width": 2,
          class: "mk",
          "data-i": i,
        }),
      );
      svg.appendChild(S("text", { x: X(i), y: B + 18, "text-anchor": "middle", "font-size": "11.5", fill: MUT }, M[i]));
    });
    /* End labels sit at least 10px above the part of the line under them, so they never touch it on phones. */
    const step = X(1) - X(0);
    const yAt = (x: number) => {
      const k = Math.max(0, Math.min(vals.length - 2, Math.floor((x - L) / step)));
      return Y(vals[k]) + ((Y(vals[k + 1]) - Y(vals[k])) * (x - X(k))) / step;
    };
    const labY = (i: number) => {
      const w = 56;
      const a = i ? X(i) - 10 - w : X(i) + 10;
      const b = a + w;
      let y = Y(vals[i]) - 12;
      for (let x = a; x <= b; x += 2) y = Math.min(y, yAt(Math.max(L, Math.min(R, x))) - 10);
      return y;
    };
    if (!mini)
      [0, vals.length - 1].forEach((i) => {
        svg.appendChild(
          S(
            "text",
            {
              x: X(i) + (i ? -10 : 10),
              y: labY(i),
              "text-anchor": i ? "end" : "start",
              "font-size": "12.5",
              "font-weight": "600",
              fill: INK,
              class: "num",
            },
            FMT[key](vals[i]),
          ),
        );
      });
    hits(
      svg,
      box,
      key,
      vals.map((v, i) => ({ x: X(i) - step / 2, w: step, h: H, cy: Y(v) })),
    );
    return svg;
  }

  function bars(box: HTMLElement, key: ChartKey) {
    const vals = D[key];
    const W = Math.max(150, box.clientWidth);
    const Hh = Math.min(Number(box.dataset.h) || 220, innerWidth < 600 ? 160 : 999);
    const H = Hh + 20;
    const n = vals.length;
    const gap = 2;
    const bw = (W - gap * (n - 1)) / n;
    const mx = Math.max(...vals) * 1.15;
    const pad = 22;
    const r = 4;
    const svg = S("svg", {
      viewBox: `0 0 ${W} ${H}`,
      width: W,
      height: H,
      role: "group",
      "aria-label": `${NAME[key]}, June to November, sample data`,
    });
    svg.appendChild(S("line", { x1: 0, x2: W, y1: Hh, y2: Hh, stroke: "#dde8e3", "stroke-width": 1 }));
    const cols: HitColumn[] = [];
    vals.forEach((v, i) => {
      const bh = ((Hh - pad) * v) / mx;
      const x = i * (bw + gap);
      const y = Hh - bh;
      svg.appendChild(
        S("path", {
          d: `M${x},${Hh} V${y + r} Q${x},${y} ${x + r},${y} H${x + bw - r} Q${x + bw},${y} ${x + bw},${y + r} V${Hh} Z`,
          fill: i < START ? BEF : AFT,
          class: "mk",
          "data-i": i,
        }),
      );
      if (i === 0 || i === n - 1)
        svg.appendChild(
          S(
            "text",
            {
              x: x + bw / 2,
              y: y - 6,
              "text-anchor": "middle",
              "font-size": "12",
              "font-weight": "600",
              fill: INK,
              class: "num",
            },
            FMT[key](v),
          ),
        );
      svg.appendChild(
        S("text", { x: x + bw / 2, y: Hh + 15, "text-anchor": "middle", "font-size": "11.5", fill: MUT }, M[i]),
      );
      cols.push({ x: x - gap / 2, w: bw + gap, h: H, cy: y });
    });
    hits(svg, box, key, cols);
    return svg;
  }

  function draw() {
    if (signal.aborted) return;
    document.querySelectorAll<HTMLElement>("#view-home .chart").forEach((box) => {
      const k = box.dataset.chart as ChartKey;
      box.textContent = "";
      box.appendChild(k === "rev" ? area(box, k) : bars(box, k));
    });
  }

  draw();
  let rt: ReturnType<typeof setTimeout> | undefined;
  let lastW = innerWidth;
  addEventListener(
    "resize",
    () => {
      clearTimeout(rt);
      rt = setTimeout(() => {
        if (innerWidth !== lastW) {
          lastW = innerWidth;
          draw();
        }
      }, 120);
    },
    { signal },
  );
  signal.addEventListener("abort", () => clearTimeout(rt));
  document.fonts?.ready.then(draw);

  /* Table view of the same numbers. */
  document.addEventListener(
    "toggle",
    (e) => {
      const d = e.target as HTMLDetailsElement | null;
      if (d?.classList?.contains("nums")) d.closest(".rh")?.classList.toggle("open", d.open);
    },
    { capture: true, signal },
  );
  const tb = byId("numtb");
  if (tb) {
    tb.textContent = "";
    M.forEach((m, i) => {
      const tr = document.createElement("tr");
      [`${m}${i < START ? " (before)" : ""}`, FMT.rev(D.rev[i]), FMT.ns(D.ns[i]), FMT.at(D.at[i])].forEach(
        (t, j) => {
          const c = document.createElement(j ? "td" : "th");
          if (!j) (c as HTMLTableCellElement).scope = "row";
          c.textContent = t;
          tr.appendChild(c);
        },
      );
      tb.appendChild(tr);
    });
  }

  /* Screenshots: full screen viewer. */
  const lb = byId("uilb");
  const im = byId<HTMLImageElement>("uilbimg");
  const title = byId("uilbt");
  const x = byId<HTMLButtonElement>("uilbx");
  if (!lb || !im || !title || !x) return;
  let opener: HTMLElement | null = null;
  const close = () => {
    lb.classList.remove("on");
    document.body.style.overflow = "";
    opener?.focus();
  };
  document.querySelectorAll<HTMLElement>("#ui .uicard").forEach((card) => {
    card.addEventListener(
      "click",
      () => {
        const img = card.querySelector("img");
        if (!img) return;
        im.src = img.src;
        im.alt = img.alt;
        title.textContent = card.dataset.full ?? "";
        opener = card;
        lb.classList.add("on");
        document.body.style.overflow = "hidden";
        x.focus();
      },
      { signal },
    );
  });
  x.addEventListener("click", close, { signal });
  lb.addEventListener("click", (e) => e.target === lb && close(), { signal });
  document.addEventListener(
    "keydown",
    (e) => {
      if (!lb.classList.contains("on")) return;
      if (e.key === "Escape") close();
      if (e.key === "Tab") {
        const first = x;
        const last = lb.querySelector<HTMLElement>(".uilbbar a");
        const active = document.activeElement;
        if (!last) return;
        if (e.shiftKey && active === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    },
    { signal },
  );
  signal.addEventListener("abort", () => {
    document.body.style.overflow = "";
  });
}

/* ---------------- [data-tip] hover notes (mouse only) ---------------- */

function initHoverTips(signal: AbortSignal) {
  if (!finePointer()) return;
  const tip = byId("credify-tip");
  if (!tip) return;
  let cur: Element | null = null;
  const hide = () => {
    tip.classList.remove("on");
    cur = null;
  };
  const show = (el: Element) => {
    cur = el;
    tip.textContent = el.getAttribute("data-tip");
    tip.classList.toggle("wide", (tip.textContent ?? "").includes("\n"));
    tip.style.left = "0px";
    tip.style.top = "0px";
    const r = el.getBoundingClientRect();
    const w = tip.offsetWidth;
    const h = tip.offsetHeight;
    let x = r.left + r.width / 2 - w / 2;
    let y = r.top - h - 8;
    x = Math.max(8, Math.min(x, innerWidth - w - 8));
    if (y < 8) y = r.bottom + 8;
    tip.style.left = `${x}px`;
    tip.style.top = `${y}px`;
    tip.classList.add("on");
  };
  document.addEventListener(
    "mouseover",
    (e) => {
      const target = e.target as Element | null;
      const el = target?.closest?.("#view-home [data-tip]") ?? null;
      if (el && el !== cur) show(el);
      else if (!el && cur) hide();
    },
    { signal },
  );
  addEventListener("scroll", hide, { passive: true, signal });
  signal.addEventListener("abort", hide);
}

/* ---------------- Comparison table notes on touch screens ---------------- */

function initTouchTableNotes() {
  if (finePointer()) return;
  document.querySelectorAll<HTMLElement>("#view-home .cmp td[data-tip]").forEach((td, i) => {
    if (td.querySelector(".ctapi")) return;
    const b = document.createElement("button");
    b.type = "button";
    b.className = "ctapi";
    b.setAttribute("aria-expanded", "false");
    b.setAttribute("aria-controls", `ctapn${i}`);
    b.setAttribute("aria-label", "More info");
    b.innerHTML = '<span aria-hidden="true">i</span>';
    const note = document.createElement("div");
    note.className = "ctapn";
    note.id = `ctapn${i}`;
    note.hidden = true;
    note.textContent = td.getAttribute("data-tip");
    td.appendChild(document.createTextNode(" "));
    td.appendChild(b);
    td.appendChild(note);
    b.addEventListener("click", () => {
      const open = b.getAttribute("aria-expanded") !== "true";
      b.setAttribute("aria-expanded", String(open));
      note.hidden = !open;
    });
  });
}

/* ---------------- "Why 90 days free?" toggles ---------------- */

function initWhyToggles(signal: AbortSignal) {
  document.querySelectorAll<HTMLElement>("#view-home .hwhy").forEach((why) => {
    const panel = byId(why.getAttribute("aria-controls") ?? "");
    if (!panel) return;
    why.addEventListener(
      "click",
      () => {
        const open = why.getAttribute("aria-expanded") !== "true";
        why.setAttribute("aria-expanded", String(open));
        panel.hidden = !open;
      },
      { signal },
    );
  });
}

/* ---------------- * and ** footnote buttons ---------------- */

function initFootnotes(signal: AbortSignal) {
  const fine = finePointer();
  let count = 0;
  const notes = new WeakMap<HTMLElement, HTMLElement>();
  const footnote = (e: Event) => (e.target as Element | null)?.closest?.<HTMLElement>("#view-home button.fnt");

  document.addEventListener(
    "focusin",
    (e) => {
      const b = footnote(e);
      if (b && fine)
        setTimeout(() => {
          if (document.activeElement === b) b.dispatchEvent(new MouseEvent("mouseover", { bubbles: true }));
        }, 80);
    },
    { signal },
  );
  document.addEventListener(
    "focusout",
    (e) => {
      if (fine && footnote(e)) document.body.dispatchEvent(new MouseEvent("mouseover", { bubbles: true }));
    },
    { signal },
  );
  document.addEventListener(
    "click",
    (e) => {
      const b = footnote(e);
      if (!b || fine) return;
      let note = notes.get(b);
      if (!note) {
        let host = b.parentElement;
        while (host && getComputedStyle(host).display.indexOf("inline") === 0) host = host.parentElement;
        if (!host) return;
        note = document.createElement("span");
        note.className = "fnn";
        note.id = `fnn${++count}`;
        note.setAttribute("role", "note");
        note.hidden = true;
        note.textContent = b.getAttribute("data-tip");
        if (/flex|grid/.test(getComputedStyle(host).display)) host.after(note);
        else host.appendChild(note);
        notes.set(b, note);
        b.setAttribute("aria-controls", note.id);
      }
      const open = note.hidden;
      note.hidden = !open;
      b.setAttribute("aria-expanded", String(open));
    },
    { signal },
  );
}

/** Wires up the homepage markup. Returns a cleanup for unmount. */
export function initCredifyHome() {
  const controller = new AbortController();
  const { signal } = controller;
  initCalculator(signal);
  initCharts(signal);
  initHoverTips(signal);
  initTouchTableNotes();
  initWhyToggles(signal);
  initFootnotes(signal);
  return () => controller.abort();
}
