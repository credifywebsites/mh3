"use client";

import React from "react";
import Link from "next/link";
import styles from "./KeepYourEhr.module.css";

export function KeepYourEhr() {
  return (
    <main className={styles.main}>
      {/* 1st SECTION: HERO (Hero_Optomized_Fonts_Theme_Standardized.html) */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroLeft}>
            <div className={styles.heroEyebrow}>Keep Your EHR</div>
            <h1 className={styles.heroTitle}>
              Fix the 15% that's<br />holding your agency back.
              <em>Without replacing your EHR.</em>
            </h1>
            <p className={styles.heroBodyCopy}>
              Your EHR handles <strong>80–90% of your operations</strong> just fine.
              But the gaps—missing fields, missing forms, missing billing logic—force your team
              into spreadsheets, sticky notes, and manual workarounds.<br /><br />
              We don't replace your EHR—we make it work the way it should.
              Custom fields, forms, alerts, and billing rules—fully integrated.
            </p>
            <Link href="#how-it-works" className={styles.seeItLink}>
              See it in action
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </Link>

            <div className={styles.heroCtas}>
              <Link href="/contact#contact-form" className={styles.btnFreeTrial} target="_blank" rel="noopener noreferrer">
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 7l3 3 6-6"/></svg>
                Free trial
              </Link>
              <Link href="/contact#contact-form" className={styles.btnBookDemo} target="_blank" rel="noopener noreferrer">Book a Demo</Link>
            </div>

            <div className={styles.trustBar}>
              <div className={styles.trustItem}>
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="8" r="7"/><path d="M5 8l2 2 4-4"/></svg>
                No migration
              </div>
              <div className={styles.trustItem}>
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="8" r="7"/><path d="M5 8l2 2 4-4"/></svg>
                No retraining
              </div>
              <div className={styles.trustItem}>
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="8" r="7"/><path d="M5 8l2 2 4-4"/></svg>
                No disruption
              </div>
              <div className={styles.trustItem}>
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="8" r="7"/><path d="M5 8l2 2 4-4"/></svg>
                Same login &amp; workflows
              </div>
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.heroCard}>
              <div className={styles.cardHead}>
                <div className={styles.cardHeadLabel}>What your agency looks like now</div>
              </div>

              <div className={styles.diagRows}>
                <div className={styles.drow}>
                  <div className={`${styles.drowIcon} ${styles.icTeal}`}>
                    <svg viewBox="0 0 16 16" fill="none" stroke="#22a87e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="12" height="10" rx="1.5"/><path d="M5 7h6M5 10h4"/></svg>
                  </div>
                  <div className={styles.drowText}>
                    <div className={styles.drowSub}>Your EHR covers</div>
                    <div className={`${styles.drowVal} ${styles.vTeal}`}>80–90% of operations</div>
                  </div>
                </div>
                <div className={styles.drow}>
                  <div className={`${styles.drowIcon} ${styles.icOrange}`}>
                    <svg viewBox="0 0 16 16" fill="none" stroke="#d97706" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2L1.5 13h13L8 2z"/><path d="M8 6v4M8 11.5v.5"/></svg>
                  </div>
                  <div className={styles.drowText}>
                    <div className={styles.drowSub}>The remaining 10–15% causes</div>
                    <div className={`${styles.drowVal} ${styles.vOrange}`}>Daily friction &amp; compliance risk</div>
                  </div>
                </div>
                <div className={styles.drow}>
                  <div className={`${styles.drowIcon} ${styles.icRed}`}>
                    <svg viewBox="0 0 16 16" fill="none" stroke="#c0392b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="12" height="9" rx="1.5"/><path d="M5 4V3a1 1 0 011-1h4a1 1 0 011 1v1M6 8h4"/></svg>
                  </div>
                  <div className={styles.drowText}>
                    <div className={styles.drowSub}>Billing errors</div>
                    <div className={`${styles.drowVal} ${styles.vRed}`}>Revenue lost to no automation causing claim errors &amp; missed charges</div>
                  </div>
                </div>
                <hr className={styles.cardDivider} />
                <div className={styles.drow}>
                  <div className={`${styles.drowIcon} ${styles.icRed}`}>
                    <svg viewBox="0 0 16 16" fill="none" stroke="#c0392b" strokeWidth="1.8" strokeLinecap="round"><path d="M4 4l8 8M12 4l-8 8"/></svg>
                  </div>
                  <div className={styles.drowText}>
                    <div className={styles.drowSub}>The old solution</div>
                    <div className={`${styles.drowVal} ${styles.vRed}`}>Replace EHR — disruptive, expensive</div>
                  </div>
                </div>
                <div className={styles.drow} style={{ borderBottom: "none" }}>
                  <div className={`${styles.drowIcon} ${styles.icTeal}`}>
                    <svg viewBox="0 0 16 16" fill="none" stroke="#22a87e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 8l4 4 7-7"/></svg>
                  </div>
                  <div className={styles.drowText}>
                    <div className={styles.drowSub}>The Credify solution</div>
                    <div className={`${styles.drowVal} ${styles.vTeal}`}>Layer on top — zero disruption</div>
                  </div>
                </div>
              </div>

              <div className={styles.cardBottom}>
                <p className={styles.closingCopy}>
                  We close those gaps <strong>inside your existing system.</strong>
                  Same EHR. Same login. Same workflows.
                  Just the pieces that were missing from the start.
                </p>

                <div>
                  <p className={styles.ctaLabel}>See it in action — pick a form:</p>
                  <div className={styles.btnStack}>
                    <Link href="/billing-form" className={styles.btnP} target="_blank">
                      <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="14" height="9" rx="1.5"/><path d="M1 7h14"/><path d="M4 10.5h2"/></svg>
                      See Billing Form With Fields Added
                    </Link>
                    <Link href="/intake-form" className={styles.btnS} target="_blank">
                      <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="1" width="10" height="14" rx="1.5"/><path d="M6 5h4M6 8h4M6 11h2"/></svg>
                      See Intake Form With Fields Added
                    </Link>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2nd SECTION: PROBLEM STRIP (credify-keep-your-ehr.html) */}
      <div className={styles.problemStrip}>
        <div className={styles.problemGrid}>
          <div className={styles.problemItem}>
            <div className={`${styles.problemPct} ${styles.pctGreen}`}>80–90%</div>
            <div className={styles.problemDesc}>of your operations already work fine in your current EHR</div>
          </div>
          <div className={styles.problemItem}>
            <div className={`${styles.problemPct} ${styles.pctAmber}`}>10–20%</div>
            <div className={styles.problemDesc}>billing errors, workarounds, missed data, and compliance exposure</div>
          </div>
          <div className={styles.problemItem}>
            <div className={`${styles.problemPct} ${styles.pctRed}`}>0 disruption</div>
            <div className={styles.problemDesc}>required when Credify fills those gaps — same EHR, same workflows</div>
          </div>
        </div>
      </div>

      {/* 3rd SECTION: DATA FLOW (Credify_Data_Flow_Visualization.html) */}
      <section className={styles.flowSection} id="how-it-works">
        <div className={styles.flowContainer}>
          <div className={styles.flowHeader}>
            <div className={styles.flowEyebrow}>How it works</div>
            <h2>Your data flows seamlessly.<br />Nothing gets left behind.</h2>
            <p>We auto-populate our forms with your existing EHR data, and push new entries back into your EHR where fields are available.</p>
          </div>

          <div className={styles.flowDiagram}>
            <div className={`${styles.flowNode} ${styles.ehrNode}`}>
              <div className={`${styles.nodeIcon} ${styles.tealBg}`}>
                <svg viewBox="0 0 26 26" fill="none" stroke="#2dc98a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="20" height="20" rx="3"/><path d="M8 9h10M8 13h10M8 17h6"/>
                </svg>
              </div>
              <div className={styles.nodeLabel}>Step 1</div>
              <div className={styles.nodeTitle}>Your EHR</div>
              <div className={styles.nodeDesc}>Your existing patient data — untouched.</div>
            </div>

            <div className={styles.flowArrow}>
              <div className={styles.arrowTrack}>
                <div className={styles.arrowLine}><div className={styles.dashLine}></div><div className={`${styles.arrowhead} ${styles.right}`}></div></div>
                <div className={styles.arrowLine}><div className={`${styles.arrowhead} ${styles.left}`}></div><div className={`${styles.dashLine} ${styles.reverse}`}></div></div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px", alignItems: "center" }}>
                <span className={`${styles.arrowTag} ${styles.teal}`}>Auto-populate</span>
                <span className={`${styles.arrowTag} ${styles.teal}`}>Push back</span>
              </div>
            </div>

            <div className={`${styles.flowNode} ${styles.credifyNode}`}>
              <div className={`${styles.nodeIcon} ${styles.tealBg}`}>
                <svg viewBox="0 0 26 26" fill="none" stroke="#2dc98a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="13" cy="13" r="10"/><path d="M9 13l3 3 5-5"/>
                </svg>
              </div>
              <div className={styles.nodeLabel}>Step 2</div>
              <div className={styles.nodeTitle}>Credify Platform</div>
              <div className={styles.nodeDesc}>Custom fields and forms layered inside your EHR.</div>
            </div>

            <div className={styles.flowArrow}>
              <div className={styles.arrowTrack}>
                <div className={styles.arrowLine}><div className={`${styles.dashLine} ${styles.blue}`}></div><div className={`${styles.arrowhead} ${styles.right} ${styles.blue}`}></div></div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px", alignItems: "center" }}>
                <span className={`${styles.arrowTag} ${styles.blue}`}>Encrypted data</span>
              </div>
            </div>

            <div className={`${styles.flowNode} ${styles.hipaaNode}`}>
              <div className={`${styles.nodeIcon} ${styles.blueBg}`}>
                <svg viewBox="0 0 26 26" fill="none" stroke="#4a9fd4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="4" width="18" height="18" rx="3"/><path d="M13 9v4l3 2"/><circle cx="13" cy="13" r="1" fill="#4a9fd4"/>
                </svg>
              </div>
              <div className={styles.nodeLabel}>Step 3</div>
              <div className={styles.nodeTitle}>HIPAA Servers</div>
              <div className={styles.nodeDesc}>Data stored securely, powering what your EHR can't.</div>
              <div className={styles.hipaaBadge}>
                <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 1L2 3v3c0 2.5 1.8 4.5 4 5 2.2-.5 4-2.5 4-5V3L6 1z"/></svg>
                HIPAA Compliant
              </div>
            </div>
          </div>

          <div className={styles.powersGrid}>
            <div className={styles.powerCard}>
              <div className={styles.powerIcon}>
                <svg viewBox="0 0 18 18" fill="none" stroke="#4a9fd4" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="14" height="11" rx="1.5"/><path d="M5 7h8M5 10h5"/><path d="M2 6h14"/></svg>
              </div>
              <div className={styles.powerTitle}>Automated Billing</div>
              <div className={styles.powerDesc}>Claims submitted automatically — no manual entry.</div>
            </div>
            <div className={styles.powerCard}>
              <div className={styles.powerIcon}>
                <svg viewBox="0 0 18 18" fill="none" stroke="#4a9fd4" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M9 2v4M9 12v4M2 9h4M12 9h4"/><circle cx="9" cy="9" r="3"/></svg>
              </div>
              <div className={styles.powerTitle}>Real-Time Alerts</div>
              <div className={styles.powerDesc}>Instant notifications triggered by clinical flags.</div>
            </div>
            <div className={styles.powerCard}>
              <div className={styles.powerIcon}>
                <svg viewBox="0 0 18 18" fill="none" stroke="#4a9fd4" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="14" height="14" rx="1.5"/><path d="M5 12l3-4 3 2 3-5"/></svg>
              </div>
              <div className={styles.powerTitle}>Reporting &amp; Visibility</div>
              <div className={styles.powerDesc}>Leadership dashboards built from structured data.</div>
            </div>
            <div className={styles.powerCard}>
              <div className={styles.powerIcon}>
                <svg viewBox="0 0 18 18" fill="none" stroke="#4a9fd4" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M9 2a5 5 0 010 10M9 12v4M6 15h6"/><path d="M9 7v2l1.5 1.5"/></svg>
              </div>
              <div className={styles.powerTitle}>Compliance Guardrails</div>
              <div className={styles.powerDesc}>Documentation rules enforced before moving forward.</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
