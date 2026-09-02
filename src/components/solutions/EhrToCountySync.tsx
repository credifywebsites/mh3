"use client";

import React from "react";
import Link from "next/link";
import styles from "./EhrToCountySync.module.css";

const cx = (...classes: (string | boolean | undefined | null)[]) => 
  classes.filter(Boolean).join(" ");

export function EhrToCountySync() {
  return (
    <main className={styles.main}>
      {/* HERO */}
      <header className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroInner}>
            <div>
              <div className={cx(styles.pill, styles.pillDark)}>
                <span className={styles.pillDot}></span>
                Built for Behavioral Health Operations
              </div>
              <h1>Streamlining mental health documentation & <em>county billing</em> with AI.</h1>
              <p className={styles.heroSub}>
                End the dual-entry burden. Clinicians write notes once — AI structures, aligns, and prepares them for every downstream system, from the EHR to county submissions.
              </p>
              <div className={styles.heroCtas}>
                <Link href="/contact#contact-form" className={cx(styles.btn, styles.btnLight)} target="_blank" rel="noopener noreferrer">
                  Book a free demo
                  {/* <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg> */}
                </Link>
                {/* <Link href="/ehr-to-county/how-it-works" className={cx(styles.btn, styles.btnOutlineLight)}>See how it works</Link> */}
              </div>
              <div className={styles.heroMeta}>
                <div className={styles.heroMetaItem}>
                  <div className={styles.val}><em>~60%</em></div>
                  <div className={styles.lbl}>Less duplicate entry</div>
                </div>
                <div className={styles.heroMetaItem}>
                  <div className={styles.val}><em>2×</em></div>
                  <div className={styles.lbl}>Faster billing turnaround</div>
                </div>
                <div className={styles.heroMetaItem}>
                  <div className={styles.val}><em>HIPAA</em></div>
                  <div className={styles.lbl}>Aligned by design</div>
                </div>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.mock}>
                <div className={styles.mockHeader}>
                  <div className={styles.mockTitle}>Documentation Sync</div>
                  <div className={styles.mockStatus}>Active</div>
                </div>
                <div className={styles.mockFlow}>
                  <div className={styles.mockPanel}>
                    <div className={styles.mockPanelLabel}>EHR Note</div>
                    <div className={cx(styles.mockLine, styles.w90)}></div>
                    <div className={cx(styles.mockLine, styles.w80)}></div>
                    <div className={cx(styles.mockLine, styles.w60)}></div>
                    <div className={cx(styles.mockLine, styles.w80)}></div>
                  </div>
                  <div className={styles.mockArrow}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                  <div className={styles.mockPanel}>
                    <div className={styles.mockPanelLabel}>County System</div>
                    <div className={cx(styles.mockLine, styles.lineGreen, styles.w90)}></div>
                    <div className={cx(styles.mockLine, styles.lineGreen, styles.w80)}></div>
                    <div className={cx(styles.mockLine, styles.lineGreen, styles.w60)}></div>
                    <div className={cx(styles.mockLine, styles.lineGreen, styles.w80)}></div>
                  </div>
                </div>
                <div className={styles.mockFooter}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                  Services, codes & outcomes auto-mapped in real time
                </div>
              </div>
              <div className={cx(styles.floatingCard, styles.topRight)}>
                <div className={styles.fcIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                </div>
                <div className={styles.fcText}>
                  <strong>4.2 hrs saved</strong>
                  <span>per clinician / week</span>
                </div>
              </div>
              <div className={cx(styles.floatingCard, styles.bottomLeft)}>
                <div className={styles.fcIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                </div>
                <div className={styles.fcText}>
                  <strong>Zero re-entry</strong>
                  <span>Data flows automatically</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* PROBLEM */}
      <section className={cx(styles.section, styles.problem)} id="problem">
        <div className={styles.container}>
          <div className={styles.problemGrid}>
            <div className={styles.problemContent}>
              <div className={styles.pill}>The Hidden Burden</div>
              <h2>Documentation has become a <em>second job</em> competing with patient care.</h2>
              <p>Many mental health agencies operate under dual documentation requirements. Clinical notes must be entered into the EHR — and the same data re-entered into county billing or compliance systems. The result: duplicated work, reduced clinical time, and steady staff fatigue.</p>
              <p>In many agencies, clinicians and staff spend hours re-entering the same information across platforms — time that belongs with clients.</p>
            </div>
            <div className={styles.impactList}>
              {[
                { icon: <path d="M3 12l2-2 4 4 8-8 4 4"/>, text: "Inefficient workflows across disconnected systems" },
                { icon: <><path d="M12 9v4M12 17h.01"/><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></>, text: "Higher risk of data entry errors" },
                { icon: <><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></>, text: "Delays in billing submission and reimbursement" },
                { icon: <><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></>, text: "Reduced time spent with clients" },
                { icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>, text: "Staff burnout from repetitive administrative tasks" }
              ].map((item, i) => (
                <div className={styles.impactItem} key={i}>
                  <div className={styles.impactIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      {item.icon}
                    </svg>
                  </div>
                  <div className={styles.impactText}>{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGE */}
      <section className={cx(styles.section, styles.challenge)}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <div className={styles.pill}>The Challenge</div>
            <h2>Duplicate work. <em>Fragmented systems.</em></h2>
            <p>Most EHRs and county systems do not communicate with each other. Even when the data already exists, it cannot move freely between platforms — forcing teams into repetitive manual workflows.</p>
          </div>
          <div className={styles.challengeVisual}>
            <div className={styles.challengeFlow}>
              <div className={styles.sysCard}>
                <div className={styles.sysHeader}>
                  <div className={styles.sysIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>
                  </div>
                  <div className={styles.sysTitle}>EHR System</div>
                </div>
                <div className={styles.sysBars}>
                  <div className={styles.barRow}><span className={styles.barDot}></span><div className={cx(styles.barLine, styles.w90)}></div></div>
                  <div className={styles.barRow}><span className={styles.barDot}></span><div className={cx(styles.barLine, styles.w80)}></div></div>
                  <div className={styles.barRow}><span className={styles.barDot}></span><div className={cx(styles.barLine, styles.w50)}></div></div>
                </div>
              </div>
              <div className={styles.gapZone}>
                <div className={styles.gapLabel}>The Gap</div>
                <div className={styles.gapArrows}>
                  <svg viewBox="0 0 48 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3"><path d="M2 8h44M46 8l-4-3M46 8l-4 3M46 16H2M2 16l4-3M2 16l4 3"/></svg>
                </div>
                <div className={styles.gapNote}>Manual copy, reformat, re-check</div>
              </div>
              <div className={styles.sysCard}>
                <div className={styles.sysHeader}>
                  <div className={styles.sysIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                  </div>
                  <div className={styles.sysTitle}>County System</div>
                </div>
                <div className={styles.sysBars}>
                  <div className={styles.barRow}><span className={styles.barDot}></span><div className={cx(styles.barLine, styles.w80)}></div></div>
                  <div className={styles.barRow}><span className={styles.barDot}></span><div className={cx(styles.barLine, styles.w90)}></div></div>
                  <div className={styles.barRow}><span className={styles.barDot}></span><div className={cx(styles.barLine, styles.w50)}></div></div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.challengeCta}>
            <div className={styles.challengeCtaLabel}>See the difference, live.</div>
            <Link href="/ehr-to-county/how-it-works" className={styles.btnSpotlight}>
              See how it works
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className={cx(styles.section, styles.solution)} id="solution">
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <div className={cx(styles.pill, styles.pillDark)}>The Solution</div>
            <h2>AI-powered documentation <em>sync.</em></h2>
            <p>We use AI to bridge the gap between systems. Clinical context is captured once and intelligently routed wherever it needs to go — no double entry, no reformatting by hand.</p>
          </div>
          <div className={styles.solutionGrid}>
            {[
              { 
                title: "Extract once, use everywhere", 
                desc: "Capture clinical documentation from the EHR and automatically structure it for county billing systems. One note. Every format.",
                icon: <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
              },
              { 
                title: "Eliminate duplicate entry", 
                desc: "Reduce repetitive typing by reusing existing clinical notes and transforming them into the exact formats each system requires.",
                icon: <><path d="M3 6h18M3 12h18M3 18h18"/><path d="M20 4l-4 4M20 20l-4-4"/></>
              },
              { 
                title: "Consistency across systems", 
                desc: "Keep EHR records and county submissions aligned automatically — with minimal effort and dramatically fewer discrepancies.",
                icon: <><path d="M9 12l2 2 4-4"/><path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c1.66 0 3.22.45 4.56 1.24"/></>
              },
              { 
                title: "Support staff — don't replace them", 
                desc: "AI works as a documentation assistant. Your team stays in control, completing required tasks faster and more accurately.",
                icon: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></>
              }
            ].map((feat, i) => (
              <div className={styles.featureCard} key={i}>
                <div className={styles.featIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {feat.icon}
                  </svg>
                </div>
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className={cx(styles.section, styles.how)} id="how">
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <div className={styles.pill}>How It Works</div>
            <h2>Four steps. <em>No workflow changes.</em></h2>
            <p>Clinicians keep working the way they already do. The AI handles the translation between systems in the background.</p>
          </div>
          <div className={styles.steps}>
            {[
              { num: "01", title: "Clinician writes the note", desc: "Documentation happens in the EHR exactly as it does today. No new interface. No retraining." },
              { num: "02", title: "AI extracts structure", desc: "Key elements — services, codes, time, interventions, outcomes — are identified automatically." },
              { num: "03", title: "Data gets formatted", desc: "The system prepares everything for county submission requirements, pre-mapped to the right fields." },
              { num: "04", title: "Staff reviews & submits", desc: "A quick review replaces re-entry. Submission happens in a fraction of the time it used to take." }
            ].map((step, i) => (
              <div className={styles.stepCard} key={i}>
                <div className={styles.stepNum}>{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
          <div className={styles.howNote}>
            No change in clinical workflow. No switching between systems.
            <strong>Just faster, cleaner documentation.</strong>
          </div>
          <div className={styles.challengeCta}>
            <div className={styles.challengeCtaLabel}>See the difference, live.</div>
            <Link href="/ehr-to-county/how-it-works" className={styles.btnSpotlight}>
              See how it works
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* DATA FLOW */}
      <section className={cx(styles.section, styles.dataflow)}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <div className={cx(styles.pill, styles.pillDark)}>Data Flow</div>
            <h2>Your data flows <em>seamlessly.</em> Nothing gets left behind.</h2>
            <p>Clinical notes written in your EHR are intelligently structured by AI and prepared for county submission — while your EHR stays the source of truth. No duplicate entry, no lost context.</p>
          </div>

          <div className={styles.flowDiagram}>
            {/* Node 1: EHR */}
            <div className={cx(styles.flowNode, styles.ehrNode)}>
              <div className={cx(styles.nodeIconWrap, styles.nodeIconWrapGreen)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2.5"/><path d="M7 8h10M7 12h10M7 16h6"/>
                </svg>
              </div>
              <div className={styles.nodeLabel}>Step 1</div>
              <div className={styles.nodeTitle}>Your EHR</div>
              <div className={styles.nodeDesc}>Clinician writes the note as usual. Existing workflows — untouched.</div>
            </div>

            {/* Arrow 1: bidirectional */}
            <div className={styles.flowArrow}>
              <div className={styles.arrowTrack}>
                <div className={styles.arrowLine}>
                  <div className={styles.dashLine}></div>
                  <div className={cx(styles.arrowhead, styles.arrowheadRight)}></div>
                </div>
                <div className={styles.arrowLine}>
                  <div className={cx(styles.arrowhead, styles.arrowheadLeft)}></div>
                  <div className={cx(styles.dashLine, styles.dashLineReverse)}></div>
                </div>
              </div>
              <div className={styles.arrowTags}>
                <span className={cx(styles.arrowTag, styles.arrowTagGreen)}>Extract</span>
                <span className={cx(styles.arrowTag, styles.arrowTagGreen)}>Sync back</span>
              </div>
            </div>

            {/* Node 2: AI Engine */}
            <div className={cx(styles.flowNode, styles.coreNode)}>
              <div className={cx(styles.nodeIconWrap, styles.nodeIconWrapGreen)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/>
                </svg>
              </div>
              <div className={styles.nodeLabel}>Step 2</div>
              <div className={styles.nodeTitle}>AI Sync Engine</div>
              <div className={styles.nodeDesc}>Services, codes, time, interventions & outcomes automatically structured.</div>
            </div>

            {/* Arrow 2: to county */}
            <div className={styles.flowArrow}>
              <div className={styles.arrowTrack}>
                <div className={styles.arrowLine}>
                  <div className={cx(styles.dashLine, styles.dashLineAmber)}></div>
                  <div className={cx(styles.arrowhead, styles.arrowheadRight, styles.arrowheadRightAmber)}></div>
                </div>
              </div>
              <div className={styles.arrowTags}>
                <span className={cx(styles.arrowTag, styles.arrowTagAmber)}>Formatted</span>
                <span className={cx(styles.arrowTag, styles.arrowTagAmber)}>Encrypted</span>
              </div>
            </div>

            {/* Node 3: County System */}
            <div className={cx(styles.flowNode, styles.countyNode)}>
              <div className={cx(styles.nodeIconWrap, styles.nodeIconWrapAmber)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2.5"/><path d="M16 2v4M8 2v4M3 10h18"/><path d="M9 15l2 2 4-4"/>
                </svg>
              </div>
              <div className={styles.nodeLabel}>Step 3</div>
              <div className={styles.nodeTitle}>County System</div>
              <div className={styles.nodeDesc}>Submission-ready data, mapped to each county's required fields.</div>
              <div className={styles.complianceBadge}>
                <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 1L2 3v3c0 2.5 1.8 4.5 4 5 2.2-.5 4-2.5 4-5V3L6 1z"/></svg>
                HIPAA Aligned
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className={cx(styles.section, styles.impact)} id="impact">
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <div className={styles.pill}>The Impact</div>
            <h2>Measurable results <em>agencies can feel</em> — from day one.</h2>
            <p>Agencies using AI-assisted documentation workflows see meaningful improvements across every operational dimension.</p>
          </div>
          <div className={styles.statsGrid}>
            {[
              { title: "Lower admin workload", desc: "Significant reduction in repetitive entry time", icon: <><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-5"/></> },
              { title: "Faster billing", desc: "Quicker turnaround from service to submission", icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/> },
              { title: "Improved accuracy", desc: "Consistent data across EHR and county systems", icon: <><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></> },
              { title: "More client time", desc: "Clinical hours returned to direct care", icon: <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z"/> },
              { title: "Less staff fatigue", desc: "Fewer repetitive tasks across the day", icon: <><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></> }
            ].map((stat, i) => (
              <div className={styles.statCard} key={i}>
                <div className={styles.statIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{stat.icon}</svg>
                </div>
                <h4>{stat.title}</h4>
                <p>{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUILT FOR */}
      <section className={cx(styles.section, styles.built)}>
        <div className={styles.container}>
          <div className={styles.builtGrid}>
            <div className={styles.builtContent}>
              <div className={styles.pill}>Purpose Built</div>
              <h2>Designed for behavioral health <em>agency realities.</em></h2>
              <p>This approach is built specifically for mental health agencies working under county contracts — where compliance, accuracy, and time efficiency all matter at once.</p>
              <p>Instead of forcing staff to adapt to fragmented systems, we bring the systems together through intelligent automation.</p>
              <div className={styles.builtChecks}>
                {[
                  "Aligned with county contract compliance requirements",
                  "Integrates with your existing EHR — no replacement needed",
                  "Clinician-first design with human review in the loop",
                  "HIPAA-aligned architecture and audit trails"
                ].map((check, i) => (
                  <div className={styles.checkItem} key={i}>
                    <div className={styles.checkIcon}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg></div>
                    {check}
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.builtVisual}>
              <div className={styles.reportHead}>
                <div className={styles.reportTitle}>Submission Readiness</div>
                <div className={styles.reportTag}>Live</div>
              </div>
              {[
                { label: "Service codes mapped", value: "Complete", check: true },
                { label: "Session time validated", value: "52 min", check: true },
                { label: "Interventions captured", value: "4 / 4", check: true },
                { label: "Outcomes documented", value: "Verified", check: true },
                { label: "County format ready", value: "Ready to submit", check: false, color: "var(--brand-primary)" }
              ].map((row, i) => (
                <div className={styles.reportRow} key={i}>
                  <span className={styles.label}>{row.label}</span>
                  <span className={styles.value} style={row.color ? { color: row.color } : {}}>
                    {row.check && <svg className={styles.valueCheck} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>}
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={cx(styles.section, styles.finalCta)}>
        <div className={cx(styles.pill, styles.pillDark)}>Get Started</div>
        <h2>Bring your documentation and billing systems <em>together.</em></h2>
        <p>See how AI-assisted workflows can reduce administrative burden, speed up reimbursement, and give your clinicians their time back.</p>
        <div className={styles.ctaButtons}>
          <Link href="/contact#contact-form" className={cx(styles.btn, styles.btnLight)} target="_blank" rel="noopener noreferrer">
            Book a free demo
            {/* <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg> */}
          </Link>
        </div>
      </section>
    </main>
  );
}
