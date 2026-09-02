"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import styles from "./NoShowCalculator.module.css";

/* ─── constants ─────────────────────────────────────────────── */
const CREDIFY_FEE_RATE = 0.2;
const CLIENT_NET_RATE = 1 - CREDIFY_FEE_RATE;
const STORAGE_KEY = "credify-prospect-calc-v1";

/* ─── helpers ───────────────────────────────────────────────── */
const fmt = (n: number) => "$" + Math.round(n).toLocaleString("en-US");
const fmtDecimal = (n: number) =>
  "$" +
  n.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
const fmtPct = (n: number) => n.toFixed(0) + "%";

/* ─── calculation ───────────────────────────────────────────── */
function calculate(
  providers: number,
  sessions: number,
  days: number,
  commercialPct: number,
  revenueCommercial: number,
  revenueGov: number,
  baseline: number,
  target: number
) {
  const govPct = 100 - commercialPct;
  const totalSessions = providers * sessions * days;
  const sessionsCommercial = totalSessions * (commercialPct / 100);
  const sessionsGov = totalSessions * (govPct / 100);

  const baselineNoShowsCommercial = sessionsCommercial * (baseline / 100);
  const baselineNoShowsGov = sessionsGov * (baseline / 100);
  const baselineNoShowsTotal = baselineNoShowsCommercial + baselineNoShowsGov;

  const targetNoShowsCommercial = sessionsCommercial * (target / 100);
  const targetNoShowsGov = sessionsGov * (target / 100);
  const targetNoShowsTotal = targetNoShowsCommercial + targetNoShowsGov;

  const preventedCommercial = Math.max(
    0,
    baselineNoShowsCommercial - targetNoShowsCommercial
  );
  const preventedGov = Math.max(0, baselineNoShowsGov - targetNoShowsGov);
  const preventedTotal = preventedCommercial + preventedGov;

  const recoveredCommercial = preventedCommercial * revenueCommercial;
  const recoveredGov = preventedGov * revenueGov;
  const recoveredTotal = recoveredCommercial + recoveredGov;

  const feeCommercial = recoveredCommercial * CREDIFY_FEE_RATE;
  const feeGov = recoveredGov * CREDIFY_FEE_RATE;
  const feeTotal = recoveredTotal * CREDIFY_FEE_RATE;

  const netCommercial = recoveredCommercial * CLIENT_NET_RATE;
  const netGov = recoveredGov * CLIENT_NET_RATE;
  const netTotal = recoveredTotal * CLIENT_NET_RATE;

  const lostCommercial = baselineNoShowsCommercial * revenueCommercial;
  const lostGov = baselineNoShowsGov * revenueGov;
  const lostTotal = lostCommercial + lostGov;

  const blendedRevenue =
    (commercialPct / 100) * revenueCommercial + (govPct / 100) * revenueGov;

  return {
    totalSessions,
    sessionsCommercial,
    sessionsGov,
    baselineNoShowsTotal,
    targetNoShowsTotal,
    preventedCommercial,
    preventedGov,
    preventedTotal,
    recoveredCommercial,
    recoveredGov,
    recoveredTotal,
    feeCommercial,
    feeGov,
    feeTotal,
    netCommercial,
    netGov,
    netTotal,
    lostTotal,
    blendedRevenue,
    annualSessions: totalSessions * 12,
    annualRecovered: recoveredTotal * 12,
    annualFee: feeTotal * 12,
    annualNet: netTotal * 12,
  };
}

/* ─── Slider ────────────────────────────────────────────────── */
function Slider({
  id,
  min,
  max,
  step,
  value,
  onChange,
}: {
  id: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (v: number) => void;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className={styles.sliderWrap}>
      <input
        type="range"
        id={id}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        style={{ "--pct": `${pct}%` } as React.CSSProperties}
        className={styles.slider}
      />
    </div>
  );
}

/* ─── Main component ────────────────────────────────────────── */
export function NoShowCalculator() {
  const [providers, setProviders] = useState(10);
  const [sessions, setSessions] = useState(5);
  const [days, setDays] = useState(20);
  const [commercialPct, setCommercialPct] = useState(75);
  const [revenueCommercial, setRevenueCommercial] = useState(150);
  const [revenueGov, setRevenueGov] = useState(75);
  const [baseline, setBaseline] = useState(15);
  const [target, setTarget] = useState(5);

  // Restore from localStorage on mount
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      if (saved.providers) setProviders(parseFloat(saved.providers));
      if (saved.sessions) setSessions(parseFloat(saved.sessions));
      if (saved.days) setDays(parseFloat(saved.days));
      if (saved["commercial-pct"])
        setCommercialPct(parseFloat(saved["commercial-pct"]));
      if (saved["revenue-commercial"])
        setRevenueCommercial(parseFloat(saved["revenue-commercial"]));
      if (saved["revenue-gov"])
        setRevenueGov(parseFloat(saved["revenue-gov"]));
      if (saved.baseline) setBaseline(parseFloat(saved.baseline));
      if (saved.target) setTarget(parseFloat(saved.target));
    } catch {
      /* no-op */
    }
  }, []);

  // Save to localStorage (debounced)
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const save = useCallback(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          providers,
          sessions,
          days,
          "commercial-pct": commercialPct,
          "revenue-commercial": revenueCommercial,
          "revenue-gov": revenueGov,
          baseline,
          target,
        })
      );
    } catch {
      /* no-op */
    }
  }, [
    providers,
    sessions,
    days,
    commercialPct,
    revenueCommercial,
    revenueGov,
    baseline,
    target,
  ]);

  useEffect(() => {
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(save, 400);
  }, [save]);

  // Clamp target <= baseline
  const handleBaselineChange = (v: number) => {
    setBaseline(v);
    if (target > v) setTarget(v);
  };

  const govPct = 100 - commercialPct;

  // Disable revenue inputs when pct is 0
  const commercialDisabled = commercialPct === 0;
  const govDisabled = govPct === 0;

  const r = calculate(
    providers,
    sessions,
    days,
    commercialPct,
    commercialDisabled ? 0 : revenueCommercial,
    govDisabled ? 0 : revenueGov,
    baseline,
    target
  );

  /* ── scenario table ── */
  const range = baseline - target;
  const scenarioRates = [1, 2, 3, 4].map((s) =>
    Math.max(0, baseline - (range * s) / 4)
  );

  const scenarioRows = scenarioRates.map((rate) => {
    const cNS = r.sessionsCommercial * (rate / 100);
    const gNS = r.sessionsGov * (rate / 100);
    const pC = Math.max(0, r.preventedCommercial - (cNS - (r.sessionsCommercial * (target / 100))));
    // Simpler direct calculation
    const preventC = Math.max(0, r.sessionsCommercial * ((baseline - rate) / 100));
    const preventG = Math.max(0, r.sessionsGov * ((baseline - rate) / 100));
    const monthlyGross =
      preventC * revenueCommercial + preventG * revenueGov;
    const monthlyFee = monthlyGross * CREDIFY_FEE_RATE;
    const monthlyNet = monthlyGross * CLIENT_NET_RATE;
    const annualNet = monthlyNet * 12;
    const isTarget = Math.abs(rate - target) < 0.5;
    return { rate, monthlyGross, monthlyFee, monthlyNet, annualNet, isTarget };
  });

  /* ── breakdown table rows ── */
  const breakdownRows = [
    ["Total Sessions", Math.round(r.totalSessions).toLocaleString(), Math.round(r.annualSessions).toLocaleString()],
    ["Commercial Sessions", Math.round(r.sessionsCommercial).toLocaleString(), Math.round(r.sessionsCommercial * 12).toLocaleString()],
    ["Gov't Sessions", Math.round(r.sessionsGov).toLocaleString(), Math.round(r.sessionsGov * 12).toLocaleString()],
    ["Current No-Shows", Math.round(r.baselineNoShowsTotal).toLocaleString(), Math.round(r.baselineNoShowsTotal * 12).toLocaleString()],
    ["Target No-Shows", Math.round(r.targetNoShowsTotal).toLocaleString(), Math.round(r.targetNoShowsTotal * 12).toLocaleString()],
    ["No-Shows Prevented", Math.round(r.preventedTotal).toLocaleString(), Math.round(r.preventedTotal * 12).toLocaleString()],
    ["Gross Recovered — Commercial", fmt(r.recoveredCommercial), fmt(r.recoveredCommercial * 12)],
    ["Gross Recovered — Gov't", fmt(r.recoveredGov), fmt(r.recoveredGov * 12)],
  ];

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        {/* HEADER */}
        <header className={styles.header}>
          <span className={styles.pill}>Credify · Revenue Recovery Calculator</span>
          <h1>See How Much You&rsquo;re Losing to No-Shows</h1>
          <p>
            Model the revenue your practice can recover by reducing no-shows.
            Simple pricing: we charge 20% of the revenue we help you recover —
            you keep the other 80%.
          </p>
        </header>

        {/* LAYOUT */}
        <div className={styles.layout}>
          {/* ── INPUTS ── */}
          <section className={styles.card}>
            <div className={styles.cardHead}>
              <div className={styles.cardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                </svg>
              </div>
              <div>
                <h2>Your Practice</h2>
                <div className={styles.cardSub}>Tell us about your operations</div>
              </div>
            </div>

            {/* Practice Size */}
            <div className={styles.sectionDivider}><span>Practice Size</span></div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="providers">
                Number of Providers <span className={styles.val}>{providers}</span>
              </label>
              <Slider id="providers" min={1} max={100} step={1} value={providers} onChange={setProviders} />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="sessions">
                Sessions per Provider per Day <span className={styles.val}>{sessions}</span>
              </label>
              <Slider id="sessions" min={1} max={20} step={1} value={sessions} onChange={setSessions} />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="days">
                Working Days per Month <span className={styles.val}>{days}</span>
              </label>
              <Slider id="days" min={15} max={26} step={1} value={days} onChange={setDays} />
            </div>

            {/* Payer Mix */}
            <div className={styles.sectionDivider}><span>Payer Mix</span></div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="commercial-pct">
                Commercial % of Total Sessions <span className={styles.val}>{fmtPct(commercialPct)}</span>
              </label>
              <Slider id="commercial-pct" min={0} max={100} step={5} value={commercialPct} onChange={setCommercialPct} />
            </div>

            {/* Payer mix bar */}
            <div className={styles.payerMixBar}>
              <div
                className={`${styles.barSegment} ${styles.commercial}`}
                style={{ flex: commercialPct || 0.01 }}
              >
                {commercialPct >= 20
                  ? `${commercialPct}% Commercial`
                  : commercialPct > 0
                  ? `${commercialPct}%`
                  : ""}
              </div>
              <div
                className={`${styles.barSegment} ${styles.gov}`}
                style={{ flex: govPct || 0.01 }}
              >
                {govPct >= 20
                  ? `${govPct}% Gov't`
                  : govPct > 0
                  ? `${govPct}%`
                  : ""}
              </div>
            </div>
            <div className={styles.payerLegend}>
              <span className={styles.legCommercial}>
                <span className={styles.dot}></span>
                {commercialPct}% Commercial @ {fmt(revenueCommercial)}/session
              </span>
              <span className={styles.legGov}>
                <span className={styles.dot}></span>
                {govPct}% Gov&rsquo;t @ {fmt(revenueGov)}/session
              </span>
            </div>

            {/* Revenue inputs */}
            <div className={styles.payerRevenueGrid} style={{ marginTop: 14 }}>
              <div className={`${styles.field} ${commercialDisabled ? styles.disabled : ""}`} style={{ marginBottom: 0 }}>
                <label className={styles.label}>Commercial / Session</label>
                <div className={styles.inputGroup}>
                  <span className={styles.prefix}>$</span>
                  <input
                    type="number"
                    value={commercialDisabled ? 0 : revenueCommercial}
                    min={0}
                    step={1}
                    disabled={commercialDisabled}
                    onChange={(e) => setRevenueCommercial(parseFloat(e.target.value) || 0)}
                    className={styles.numInput}
                  />
                </div>
              </div>
              <div className={`${styles.field} ${govDisabled ? styles.disabled : ""}`} style={{ marginBottom: 0 }}>
                <label className={styles.label}>Gov&rsquo;t / Session</label>
                <div className={styles.inputGroup}>
                  <span className={styles.prefix}>$</span>
                  <input
                    type="number"
                    value={govDisabled ? 0 : revenueGov}
                    min={0}
                    step={1}
                    disabled={govDisabled}
                    onChange={(e) => setRevenueGov(parseFloat(e.target.value) || 0)}
                    className={styles.numInput}
                  />
                </div>
              </div>
            </div>

            <div className={styles.blendedDisplay}>
              <span className={styles.blendedLabel}>Blended Revenue / Session</span>
              <span className={styles.blendedValue}>{fmtDecimal(r.blendedRevenue)}</span>
            </div>

            {/* No-Show Performance */}
            <div className={styles.sectionDivider}><span>No-Show Performance</span></div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="baseline">
                Current No-Show Rate <span className={styles.val}>{fmtPct(baseline)}</span>
              </label>
              <Slider id="baseline" min={5} max={50} step={1} value={baseline} onChange={handleBaselineChange} />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="target">
                Target No-Show Rate <span className={styles.val}>{fmtPct(target)}</span>
              </label>
              <Slider id="target" min={0} max={baseline} step={1} value={target} onChange={setTarget} />
            </div>

            <div className={styles.formulaNote}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 16v-4"/>
                <path d="M12 8h.01"/>
              </svg>
              <div>
                <strong>How it works:</strong> No-show rates are applied to each payer
                group separately, so commercial and government sessions are valued at
                your actual contracted rates. Credify charges <strong>20%</strong> of
                the recovered revenue — you keep <strong>80%</strong>.
              </div>
            </div>
          </section>

          {/* ── RESULTS ── */}
          <section>
            {/* Hero stat */}
            <div className={styles.heroStat}>
              <div className={styles.heroStatLabel}>
                <span className={styles.liveIndicator}>
                  <span className={styles.liveDot}></span>Live
                </span>{" "}
                Your Net Annual Revenue Recovered
              </div>
              <div className={styles.heroStatValue}>{fmt(r.annualNet)}</div>
              <div className={styles.heroStatSub}>
                What you keep after the 20% Credify fee — reducing no-shows from{" "}
                {baseline}% to {target}%
              </div>
            </div>

            {/* Pricing callout */}
            <div className={styles.pricingCallout}>
              <div className={styles.pcBadge}>20%</div>
              <div className={styles.pcContent}>
                <div className={styles.pcTitle}>Simple, Performance-Based Pricing</div>
                <div className={styles.pcBody}>
                  Credify charges{" "}
                  <strong>20% of the revenue we help you recover</strong> — calculated
                  on the difference between your current no-show rate and the rate we
                  achieve together. <strong>You keep 80%.</strong> No setup fees, no
                  monthly minimums, no surprises.
                </div>
              </div>
            </div>

            {/* Stat grid */}
            <div className={styles.statGrid}>
              <div className={styles.stat}>
                <div className={styles.statLabel}>Gross Revenue Recovered / Mo</div>
                <div className={`${styles.statValue} ${styles.positive}`}>{fmt(r.recoveredTotal)}</div>
                <div className={styles.statSub}>{Math.round(r.preventedTotal).toLocaleString()} sessions × blended rate</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statLabel}>Credify Fee / Mo (20%)</div>
                <div className={`${styles.statValue} ${styles.fee}`}>{fmt(r.feeTotal)}</div>
                <div className={styles.statSub}>20% of {fmt(r.recoveredTotal)} recovered</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statLabel}>Your Net Revenue / Mo</div>
                <div className={`${styles.statValue} ${styles.net}`}>{fmt(r.netTotal)}</div>
                <div className={styles.statSub}>80% of recovered revenue</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statLabel}>No-Shows Prevented / Mo</div>
                <div className={`${styles.statValue} ${styles.positive}`}>{Math.round(r.preventedTotal).toLocaleString()}</div>
                <div className={styles.statSub}>From {Math.round(r.baselineNoShowsTotal).toLocaleString()} current monthly no-shows</div>
              </div>
            </div>

            {/* Payer breakdown */}
            <div className={styles.payerBreakdown}>
              <div className={`${styles.payerCard} ${styles.payerCommercial}`}>
                <div className={styles.payerCardHead}>
                  <span className={styles.payerCardName}>Commercial</span>
                  <span className={styles.payerCardShare}>{commercialPct}% mix</span>
                </div>
                <div className={styles.payerCardRow}><span>Sessions / mo</span><span>{Math.round(r.sessionsCommercial).toLocaleString()}</span></div>
                <div className={styles.payerCardRow}><span>No-shows prevented</span><span>{Math.round(r.preventedCommercial).toLocaleString()}</span></div>
                <div className={styles.payerCardRow}><span>Gross recovered</span><span>{fmt(r.recoveredCommercial)}</span></div>
                <div className={`${styles.payerCardRow} ${styles.payerCardRowTotal}`}><span>Your net (80%)</span><span>{fmt(r.netCommercial)}</span></div>
              </div>
              <div className={`${styles.payerCard} ${styles.payerGov}`}>
                <div className={styles.payerCardHead}>
                  <span className={styles.payerCardName}>Government</span>
                  <span className={styles.payerCardShare}>{govPct}% mix</span>
                </div>
                <div className={styles.payerCardRow}><span>Sessions / mo</span><span>{Math.round(r.sessionsGov).toLocaleString()}</span></div>
                <div className={styles.payerCardRow}><span>No-shows prevented</span><span>{Math.round(r.preventedGov).toLocaleString()}</span></div>
                <div className={styles.payerCardRow}><span>Gross recovered</span><span>{fmt(r.recoveredGov)}</span></div>
                <div className={`${styles.payerCardRow} ${styles.payerCardRowTotal}`}><span>Your net (80%)</span><span>{fmt(r.netGov)}</span></div>
              </div>
            </div>

            {/* Detailed Breakdown table */}
            <div className={`${styles.card} ${styles.tableCard}`}>
              <div className={styles.cardHead}>
                <div className={styles.cardIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10"/>
                    <line x1="12" y1="20" x2="12" y2="4"/>
                    <line x1="6" y1="20" x2="6" y2="14"/>
                  </svg>
                </div>
                <div>
                  <h2>Detailed Breakdown</h2>
                  <div className={styles.cardSub}>Monthly &amp; annual figures for your practice</div>
                </div>
              </div>

              <div className={styles.breakdown}>
                <table>
                  <thead>
                    <tr>
                      <th>Metric</th>
                      <th className={styles.right}>Monthly</th>
                      <th className={styles.right}>Annual</th>
                    </tr>
                  </thead>
                  <tbody>
                    {breakdownRows.map(([label, m, a]) => (
                      <tr key={label}>
                        <td>{label}</td>
                        <td className={styles.right}>{m}</td>
                        <td className={styles.right}>{a}</td>
                      </tr>
                    ))}
                    <tr>
                      <td><strong>Gross Revenue Recovered</strong></td>
                      <td className={styles.right}><strong>{fmt(r.recoveredTotal)}</strong></td>
                      <td className={styles.right}><strong>{fmt(r.annualRecovered)}</strong></td>
                    </tr>
                    <tr className={styles.feeRow}>
                      <td>− Credify Fee (20%)</td>
                      <td className={styles.right}>−{fmt(r.feeTotal)}</td>
                      <td className={styles.right}>−{fmt(r.annualFee)}</td>
                    </tr>
                    <tr className={styles.netRow}>
                      <td>Your Net Revenue Recovered</td>
                      <td className={styles.right}>{fmt(r.netTotal)}</td>
                      <td className={styles.right}>{fmt(r.annualNet)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recovery Scenarios table */}
            <div className={`${styles.card} ${styles.tableCard}`}>
              <div className={styles.cardHead}>
                <div className={styles.cardIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3v18h18"/>
                    <path d="m19 9-5 5-4-4-3 3"/>
                  </svg>
                </div>
                <div>
                  <h2>Recovery Scenarios</h2>
                  <div className={styles.cardSub}>Revenue recovered at different no-show rate reductions</div>
                </div>
              </div>

              <div className={`${styles.breakdown} ${styles.overflowScroll}`}>
                <table>
                  <thead>
                    <tr>
                      <th>Achieved No-Show Rate</th>
                      <th className={styles.right}>Gross Recovered / Mo</th>
                      <th className={styles.right}>Credify Fee (20%)</th>
                      <th className={styles.right}>Your Net / Mo</th>
                      <th className={styles.right}>Your Net / Yr</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scenarioRows.map(({ rate, monthlyGross, monthlyFee, monthlyNet, annualNet, isTarget }) => (
                      <tr key={rate} className={isTarget ? styles.total : undefined}>
                        <td style={{ whiteSpace: "nowrap" }}>
                          {rate.toFixed(1)}%
                          {isTarget && (
                            <span className={styles.targetTag}> · target</span>
                          )}
                        </td>
                        <td className={styles.right}>{fmt(monthlyGross)}</td>
                        <td className={`${styles.right} ${styles.muted}`}>−{fmt(monthlyFee)}</td>
                        <td className={`${styles.right} ${styles.greenBold}`}>{fmt(monthlyNet)}</td>
                        <td className={`${styles.right} ${styles.greenBold}`}>{fmt(annualNet)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className={styles.scrollHint}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/>
                  <path d="m12 5 7 7-7 7"/>
                </svg>
                Swipe to see all columns
              </div>
            </div>
          </section>
        </div>

        <div className={styles.footerNote}>CREDIFY · BEHAVIORAL HEALTH GROWTH PLATFORM</div>
      </div>
    </div>
  );
}
