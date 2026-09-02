"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./CredifyCollective.module.css";

export function CredifyCollective() {
  const animRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    animRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addToAnims = (el: HTMLDivElement | null) => {
    if (el && !animRefs.current.includes(el)) {
      animRefs.current.push(el);
    }
  };

  return (
    <main className={styles.main}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroGridBg}></div>
        <div className={styles.heroInner}>
          <div className={styles.heroLeft}>
            <div className={styles.pill}>
              <span className={styles.pillDot}></span>Introducing the Credify Collective
            </div>
            <h1 className={styles.heroH1}>
              Stop managing.<br />
              Start <em>leading</em><br />
              your practice.
            </h1>
            <p className={styles.heroSub}>
              Credify already handles your operations. Now, join a collective of behavioral health agencies that pool resources, negotiate together, and build shared equity — so you're positioned not just for today's demand, but for a future where that demand is only growing.
            </p>
            <div className={styles.heroActions}>
              <Link href="/contact#contact-form" className={styles.btnPrimary} target="_blank" rel="noopener noreferrer">Apply for Membership</Link>
              <Link href="/contact#contact-form" className={styles.btnGhost} target="_blank" rel="noopener noreferrer">Schedule a Conversation</Link>
            </div>
          </div>
          <div className={styles.heroRight}>
            <div className={styles.demandCard}>
              <div className={styles.demandCardLabel}>U.S. Behavioral Health Demand Outlook · 2025–2038</div>
              <div className={styles.demandRow}>
                <div className={styles.dbarLabel}>
                  <span>Total demand growth by 2035</span>
                  <strong>+40–50%</strong>
                </div>
                <div className={styles.dbar}>
                  <div className={`${styles.dbarFill} ${styles.greenFill}`} style={{ width: "82%" }}></div>
                </div>
              </div>
              <div className={styles.demandRow}>
                <div className={styles.dbarLabel}>
                  <span>Psychiatry demand increase by 2038</span>
                  <strong>+40%</strong>
                </div>
                <div className={styles.dbar}>
                  <div className={`${styles.dbarFill} ${styles.amberFill}`} style={{ width: "72%" }}></div>
                </div>
              </div>
              <div className={styles.demandRow}>
                <div className={styles.dbarLabel}>
                  <span>Projected workforce adequacy by 2038</span>
                  <strong style={{ color: "#e05252" }}>~50%</strong>
                </div>
                <div className={styles.dbar}>
                  <div className={`${styles.dbarFill} ${styles.redFill}`} style={{ width: "50%" }}></div>
                </div>
              </div>
              <div className={styles.crisisChips}>
                <div className={styles.crisisChip}>
                  <div className={`${styles.crisisVal} ${styles.up}`}>+50%</div>
                  <div className={styles.crisisChipLabel}>More clients<br />seeking care</div>
                </div>
                <div className={styles.crisisChip}>
                  <div className={`${styles.crisisVal} ${styles.bad}`}>↓</div>
                  <div className={styles.crisisChipLabel}>Clinician<br />supply declining</div>
                </div>
                <div className={styles.crisisChip}>
                  <div className={`${styles.crisisVal} ${styles.warn}`}>½</div>
                  <div className={styles.crisisChipLabel}>Of need may<br />go unmet</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOMENT STRIP */}
      <section className={styles.momentStrip}>
        <div className={styles.container}>
          <div className={styles.sectionPad}>
            <div className={styles.eyebrow}>The Window Is Now</div>
            <h2 className={styles.sectionH2}>
              A perfect storm — and a<br />
              once-in-a-decade <em>opportunity.</em>
            </h2>
            <p className={styles.sectionSub}>
              The agencies that build capacity before demand peaks will define behavioral health access for the next generation. That window is open right now.
            </p>
            <div className={styles.momentGrid}>
              {[
                {
                  stat: "+50%",
                  label: "Demand growth over the next decade",
                  desc: "AI-driven job displacement, post-pandemic mental health trends, and reduced stigma are converging into a sustained demand surge.",
                  type: "green",
                },
                {
                  stat: "~50%",
                  label: "Of psychiatric need projected unmet by 2038",
                  desc: "Workforce adequacy is falling. More clients. Fewer clinicians. Every qualified provider becomes exponentially more valuable.",
                  type: "red",
                },
                {
                  stat: "3–10×",
                  label: "Valuation gap: standalone vs. Collective",
                  desc: "Independent practices trade at 3–4× revenue. Behavioral health portfolios command 7–10×. The difference is scale and leverage.",
                  type: "amber",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  ref={addToAnims}
                  className={`${styles.momentCard} ${styles[`mc-${card.type}`]} ${styles.anim}`}
                >
                  <div className={`${styles.mcStat} ${styles[card.type]}`}>{card.stat}</div>
                  <div className={styles.mcLabel}>{card.label}</div>
                  <div className={styles.mcDesc}>{card.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LESS STRESS / MORE MISSION */}
      <section className={styles.reliefSection}>
        <div className={styles.container}>
          <div className={styles.sectionPad}>
            <div className={styles.reliefSplit}>
              <div>
                <div className={styles.eyebrow}>You Didn't Start an Agency to Do This</div>
                <h2 className={styles.sectionH2}>
                  Less management.<br />
                  More <em>mission.</em>
                </h2>
                <p className={styles.sectionSub} style={{ marginBottom: "40px" }}>
                  With Credify running your operations, the day-to-day stops competing with your leadership. You can focus on growth — and position your agency to absorb the demand wave.
                </p>
                <div className={styles.reliefList}>
                  {[
                    {
                      title: "No more operational fires",
                      desc: "Credify runs your billing, credentialing, and front office. Your attention stays on clinical quality.",
                      icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
                    },
                    {
                      title: "Capacity to scale when demand peaks",
                      desc: "Agencies with clean operations hire faster and onboard providers sooner.",
                      icon: <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />,
                    },
                    {
                      title: "Time back for strategic leadership",
                      desc: "When the practice runs without you managing every detail, you lead — instead of just keeping the lights on.",
                      icon: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
                    },
                    {
                      title: "Clinicians stay — and see more clients",
                      desc: "When clinicians aren't fighting administrative friction, they stay longer and perform better.",
                      icon: <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />,
                    },
                  ].map((item, i) => (
                    <div className={styles.reliefItem} key={i}>
                      <div className={styles.riIcon}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                          {item.icon}
                        </svg>
                      </div>
                      <div>
                        <div className={styles.riTitle}>{item.title}</div>
                        <div className={styles.riDesc}>{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className={styles.stressVisual}>
                  <div className={styles.svHead}>
                    <div className={styles.svHeadLabel}>Before &amp; After the Collective</div>
                    <h3>What changes for your leadership</h3>
                  </div>
                  <div className={styles.svBody}>
                    <div className={styles.svRow}>
                      <div>
                        <div className={`${styles.svColLabel} ${styles.colRed}`}>Without Credify</div>
                        {[
                          "Chasing denied claims daily",
                          "Credentialing delays blocking revenue",
                          "Staff burnout from admin overload",
                          "No bandwidth to plan for growth",
                          "Negotiating alone against payers",
                          "Equity stuck at solo multiples",
                        ].map((txt, i) => (
                          <div className={`${styles.svItem} ${styles.bad}`} key={i}>
                            <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2">
                              <path d="M11 3L3 11M3 3l8 8" strokeLinecap="round" />
                            </svg>
                            {txt}
                          </div>
                        ))}
                      </div>
                      <div>
                        <div className={`${styles.svColLabel} ${styles.colGreen}`}>With the Collective</div>
                        {[
                          "Claims tracked, AR clean daily",
                          "Providers credentialed and billing",
                          "Clinicians focused on clients",
                          "Leadership free for strategy",
                          "Collective leverage with payers",
                          "Equity growing in the portfolio",
                        ].map((txt, i) => (
                          <div className={`${styles.svItem} ${styles.good}`} key={i}>
                            <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2">
                              <path d="M2 7l4 4 6-6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {txt}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className={styles.svFoot}>
                    <strong>The goal:</strong> you show up as the strategic leader your agency needs — not the person putting out today's fire.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI DISPLACEMENT */}
      <section className={styles.aiSection}>
        <div className={styles.container}>
          <div className={styles.sectionPad}>
            <div className={styles.aiHeader}>
              <div className={`${styles.eyebrow} ${styles.eyebrowLt}`}>The Demand Accelerant</div>
              <h2 className={`${styles.sectionH2} ${styles.h2White}`}>
                AI is reshaping work.<br />
                Behavioral health demand is<br />
                <em>the response.</em>
              </h2>
              <p className={`${styles.sectionSub} ${styles.subWhite}`}>
                Job displacement from automation is already creating anxiety, identity disruption, and financial stress at scale. The agencies positioned to meet this wave will be the ones that built capacity before it arrived.
              </p>
            </div>
            <div className={styles.aiCards}>
              {[
                {
                  title: "Displacement-Driven Need",
                  desc: "As AI eliminates roles, the psychological toll creates a new and growing client cohort needing behavioral health support.",
                  tag: "New Client Cohort",
                  icon: <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
                },
                {
                  title: "Demand Outpacing Supply",
                  desc: "Behavioral health demand forecast to grow 30–50%. Workforce adequacy projected to fall to 50% by 2038.",
                  tag: "Supply–Demand Gap",
                  icon: <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />,
                },
                {
                  title: "The Capacity Moat",
                  desc: "Agencies with scalable infrastructure today will be structurally positioned to absorb this demand surge.",
                  tag: "Competitive Moat",
                  icon: <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
                },
              ].map((card, i) => (
                <div key={i} ref={addToAnims} className={`${styles.aiCard} ${styles.anim}`}>
                  <div className={styles.aiCardIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                      {card.icon}
                    </svg>
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                  <span className={styles.aiTag}>{card.tag}</span>
                </div>
              ))}
            </div>
            <div ref={addToAnims} className={`${styles.aiCallout} ${styles.anim}`}>
              <div className={styles.aiCalloutIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4>Half of psychiatric need may go unmet by 2038 — unless agencies like yours scale now.</h4>
                <p>
                  That's not just a public health crisis — it's a market signal. The Collective helps agencies grow into that gap with the operational infrastructure to make it sustainable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className={styles.pillarsSection}>
        <div className={styles.container}>
          <div className={styles.sectionPad}>
            <div className={styles.pillarsHeader}>
              <div className={styles.eyebrow}>How the Collective Works</div>
              <h2 className={styles.sectionH2}>
                Three levers that make<br />
                your practice <em>worth more.</em>
              </h2>
              <p className={styles.sectionSub}>The Collective is opt-in, for Credify agencies ready to grow beyond the solo model.</p>
            </div>
            <div className={styles.pillarsGrid}>
              {[
                {
                  num: "01",
                  title: "Bundled Resources",
                  desc: "Cohort members pool operational expenses — software, staffing, compliance. Access enterprise-grade infrastructure at a fraction of the cost.",
                  tag: "Cost Efficiency",
                  icon: <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />,
                },
                {
                  num: "02",
                  title: "Collective Collections",
                  desc: "Grouped AR volume gives the Collective real negotiating leverage with payers. Better reimbursement rates and faster payment timelines.",
                  tag: "Revenue Advantage",
                  icon: <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />,
                },
                {
                  num: "03",
                  title: "Shared Equity Corporation",
                  desc: "Participate in a holding structure where profitability is consolidated. Your practice is worth more inside the Collective than alone.",
                  tag: "Equity Growth",
                  icon: <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />,
                },
              ].map((pillar, i) => (
                <div key={i} ref={addToAnims} className={`${styles.pillarCard} ${styles.anim}`}>
                  <div className={styles.pillarNum}>{pillar.num}</div>
                  <div className={styles.pillarIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      {pillar.icon}
                    </svg>
                  </div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.desc}</p>
                  <span className={styles.pillarTag}>{pillar.tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BERKSHIRE / EQUITY */}
      <section className={styles.equitySection}>
        <div className={styles.container}>
          <div className={styles.sectionPad}>
            <div className={styles.equitySplit}>
              <div className={styles.equityCopy}>
                <div className={styles.eyebrow}>The Ownership Model</div>
                <h2 className={styles.sectionH2}>
                  Built on a principle<br />
                  Berkshire <em>proved.</em>
                </h2>
                <p>
                  Berkshire Hathaway's enduring insight: independently operated businesses, held under shared ownership, are worth exponentially more as a portfolio than any single entity alone.
                </p>
                <div className={styles.modelQuote}>
                  <p>"Healthy individual practices. Extraordinary collective value."</p>
                  <cite>— The Credify Collective Model</cite>
                </div>
                <p>
                  Each agency keeps its identity and clinical culture. What changes is the financial architecture behind it — unified operations and equity that grows as the portfolio compounds.
                </p>
              </div>
              <div>
                <div className={styles.equityCard}>
                  <div className={styles.eqHead}>
                    <div className={styles.eqHeadLabel}>Illustrative Valuation Comparison</div>
                    <h3>Standalone vs. Collective</h3>
                  </div>
                  <div className={styles.eqBody}>
                    {[
                      { label: "Annual Net Revenue (Agency)", val: "$1.2M" },
                      { label: "Standalone Valuation Multiple", val: "3–4×" },
                      { label: "Standalone Practice Value", val: "$3.6–4.8M" },
                      { label: "Collective Portfolio Multiple", val: "7–10×", highlight: true },
                      { label: "Shared Cost Reduction", val: "↓18–24%", highlight: true },
                      { label: "Negotiated Rate Improvement", val: "↑8–14%", highlight: true },
                    ].map((row, i) => (
                      <div className={styles.eqRow} key={i}>
                        <span className={styles.eqRowLabel}>{row.label}</span>
                        <span className={`${styles.eqRowVal} ${row.highlight ? styles.greenVal : ""}`}>{row.val}</span>
                      </div>
                    ))}
                  </div>
                  <div className={styles.eqFoot}>
                    <span className={styles.eqFootLabel}>Estimated Equity in the Collective</span>
                    <span className={styles.eqFootVal}>$8.4–12M+</span>
                  </div>
                </div>
                <p className={styles.eqDisclaimer}>Illustrative figures only. Actual results depend on agency size and payer mix. Not a guarantee of financial performance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className={styles.howSection}>
        <div className={styles.container}>
          <div className={styles.sectionPadSm}>
            <div className={styles.howHeader}>
              <div className={styles.eyebrow}>Joining the Collective</div>
              <h2 className={styles.sectionH2}>
                From application to<br />
                <em>equity</em> in 30 days.
              </h2>
            </div>
            <div className={styles.howSteps}>
              {[
                { num: "1", title: "Apply", desc: "Tell us about your agency. We assess fit — clinical standing and revenue baseline." },
                { num: "2", title: "Operations Transfer", desc: "If not already on Credify, we onboard your front and back office within 30 days." },
                { num: "3", title: "Enter the Cohort", desc: "Resources are pooled. Collections are grouped. You access collective payer leverage." },
                { num: "4", title: "Build Equity", desc: "Your stake in the holding corporation grows as the portfolio's profitability compounds." },
              ].map((step, i) => (
                <div className={styles.howStep} key={i}>
                  <div className={styles.stepCircle}>{step.num}</div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.sectionPad}>
            <div className={styles.ctaInner}>
              <div className={styles.ctaCopy}>
                <h2>The demand is coming.<br />Will your practice be ready?</h2>
                <p>Join the Credify Collective and build the capacity, leverage, and equity to lead behavioral health in the decade ahead.</p>
              </div>
              <div className={styles.ctaActions}>
                <Link href="/contact#contact-form" className={styles.btnPrimaryLg} target="_blank" rel="noopener noreferrer">Apply for Collective Membership</Link>
                <Link href="/contact#contact-form" className={styles.btnGhostLg} target="_blank" rel="noopener noreferrer">Schedule a Conversation</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
