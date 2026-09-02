"use client";

import React from "react";
import Link from "next/link";
import styles from "./MimoAI.module.css";

export function MimoAI() {
  return (
    <main className={styles.main}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.heroLeftContent}>
            <div className={styles.pillWrap}>
              <span className={`${styles.pill} ${styles.pillWhite}`}>
                <span className={styles.pillDot}></span>
                HIPAA-Compliant · Behavioral Health
              </span>
            </div>
            <h1 className={styles.heroTitle}>
              Documentation that <em>writes itself.</em> Notes that pass.
            </h1>
            <p className={styles.heroSub}>
              Mimo's Agentic AI turns your clinical sessions into audit-ready progress notes — with automated Medicare, Medicaid, and commercial payer compliance built in.
            </p>
            <div className={styles.heroActions}>
              <Link href="https://mimonote.com/contact" className={styles.btnPrimary} target="_blank" rel="noopener noreferrer">Start 15-day free trial</Link>
              <Link href="https://mimonote.com/contact" className={styles.btnWhiteOutline} target="_blank" rel="noopener noreferrer">Schedule Demo →</Link>
            </div>
            <div className={styles.heroTrust}>
              <span className={styles.heroTrustItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                No credit card required
              </span>
              <span className={styles.heroTrustItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                SOC 2 Type II
              </span>
              <span className={styles.heroTrustItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                BAA included
              </span>
            </div>
          </div>
        </div>

        <div className={styles.heroRight}>
          {/* Card 1: recording */}
          <div className={styles.dashCard}>
            <div className={styles.dashHeader}>
              <span className={styles.dashTitle}>Session Recording</span>
              <span className={`${styles.dashPill} ${styles.dashPillLive}`}>● Live</span>
            </div>
            <div className={styles.waveformRow}>
              {[14, 24, 18, 30, 20, 28, 16, 22, 26, 12, 20, 28, 14, 24, 32, 18].map((h, i) => (
                <div 
                  key={i} 
                  className={styles.wform} 
                  style={{ height: `${h}px`, animationDelay: `${i * 0.1}s` }}
                ></div>
              ))}
            </div>
            <div className={styles.dashFooterText}>AI transcription active · end-to-end encrypted</div>
          </div>

          {/* Card 2: AI note draft */}
          <div className={styles.dashCard}>
            <div className={styles.dashHeader}>
              <span className={styles.dashTitle}>AI Draft — Progress Note</span>
              <div className={styles.noteChipRow}>
                <span className={styles.noteChip}>DAP</span>
                <span className={styles.noteChip}>BIRP</span>
                <span className={`${styles.noteChip} ${styles.noteChipActive}`}>SOAP</span>
              </div>
            </div>
            {[
              { label: "Subjective", w: "88%" },
              { label: "Objective", w: "74%" },
              { label: "Assessment", w: "92%" },
              { label: "Plan", w: "60%", animate: true }
            ].map((field, i) => (
              <div className={styles.fieldRow} key={i}>
                <div className={styles.fieldLabel}>{field.label}</div>
                <div className={styles.fieldBar}>
                  <div 
                    className={styles.fieldFill} 
                    style={{ width: field.w, animation: field.animate ? "grow 2.5s ease-in-out infinite" : "none" }}
                  ></div>
                </div>
              </div>
            ))}
            <div className={styles.aiBadgeRow}>
              <div className={styles.aiBadge}><div className={styles.aiDot}></div>Mimo AI drafting…</div>
              <span className={styles.aiTimeRemaining}>~2 min remaining</span>
            </div>
          </div>

          {/* Card 3: compliance */}
          <div className={styles.dashCard}>
            <div className={styles.dashHeader}>
              <span className={styles.dashTitle}>Payer Compliance</span>
              <span className={styles.dashPill}>3 of 4 passed</span>
            </div>
            <div className={styles.payerMiniRow}>
              <span className={`${styles.payerMiniBadge} ${styles.payerPass}`}>Medicare ✓</span>
              <span className={`${styles.payerMiniBadge} ${styles.payerPass}`}>Medicaid ✓</span>
              <span className={`${styles.payerMiniBadge} ${styles.payerWarn}`}>BCBS — 1 flag</span>
              <span className={`${styles.payerMiniBadge} ${styles.payerPass}`}>Aetna ✓</span>
            </div>
            <div className={styles.autoFixBox}>
              <strong>Auto-fix applied:</strong> BCBS session duration added to note body.
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className={styles.statsStrip}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {[
              { val: "70%", lbl: "Less time spent on documentation per session" },
              { val: "98%", lbl: "First-pass payer approval rate across all claims" },
              { val: "4.8★", lbl: "Average rating from 500+ behavioral health clinicians" },
              { val: "60+", lbl: "Commercial and government payers supported" }
            ].map((stat, i) => (
              <div className={styles.statCol} key={i}>
                <div className={styles.statNum}>{stat.val}</div>
                <div className={styles.statLabel}>{stat.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* COMPLIANCE FEATURE */}
      <section className={styles.complianceFeat}>
        <div className={styles.container}>
          <div className={styles.split}>
            <div className={styles.splitVisual}>
              <div className={styles.visualHeader}>
                <span className={styles.visualTitle}>Session — 2024-11-14</span>
                <span className={`${styles.pill} ${styles.pillGreen}`}>2 issues auto-fixed</span>
              </div>
              <div className={styles.payerTable}>
                <div className={styles.payerTableHead}>
                  <span>Payer</span><span>Type</span><span>Status</span>
                </div>
                {[
                  { name: "Medicare", type: "Federal", status: "Passed", cls: styles.badgeOk },
                  { name: "Medicaid CA", type: "State", status: "Passed", cls: styles.badgeOk },
                  { name: "BCBS", type: "Commercial", status: "Fixed ✓", cls: styles.badgeOk },
                  { name: "Aetna", type: "Commercial", status: "Passed", cls: styles.badgeOk },
                  { name: "UnitedHealthcare", type: "Commercial", status: "Passed", cls: styles.badgeOk }
                ].map((row, i) => (
                  <div className={styles.payerRow} key={i}>
                    <span className={styles.payerNameCol}>{row.name}</span>
                    <span className={styles.payerTypeCol}>{row.type}</span>
                    <span className={`${styles.payerStatusBadge} ${row.cls}`}>{row.status}</span>
                  </div>
                ))}
              </div>
              <div className={styles.insightBox}>
                <strong>Mimo AI:</strong> BCBS required explicit session duration for CPT 90837. Added to note body automatically. No action needed before submission.
              </div>
            </div>

            <div className={styles.splitContent}>
              <div className={styles.sectionLabel}><span className={`${styles.pill} ${styles.pillGreen}`}>Compliance engine</span></div>
              <h2 className={styles.sectionHeading}>Payer rules run before you ever sign</h2>
              <p className={styles.sectionSub}>Mimo maintains a live database of documentation requirements across Medicare, Medicaid, and 60+ commercial payers — updated continuously as policies change.</p>
              <ul className={styles.checkList}>
                <li>Automated LCD/NCD criteria matching for Medicare</li>
                <li>State-level Medicaid rule sets across all 50 states</li>
                <li>Commercial payer templates for BCBS, Aetna, UHC, Cigna and more</li>
                <li>Claim denial risk scoring with remediation guidance</li>
                <li>Audit trail separating AI edits from clinician edits</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className={styles.hiw}>
        <div className={styles.container}>
          <div className={styles.hiwHeader}>
            <span className={`${styles.pill} ${styles.pillGreen}`}>How it works</span>
            <h2 className={styles.sectionHeading}>From session to signed note in under 3 minutes</h2>
            <p className={styles.sectionSub}>Capture. Draft. Check. Sign. Mimo handles the full documentation lifecycle so you don't have to.</p>
          </div>

          <div className={styles.hiwFlow}>
            {/* Step 1 */}
            <div className={styles.hiwStep}>
              <div className={styles.hiwNum}>Step 01</div>
              <div className={styles.hiwIconBox}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
              </div>
              <h3>Record or upload</h3>
              <p>Capture your session live in the Mimo app or drop in an existing audio file. Consent management is built in.</p>
              <div className={styles.hiwPreviewBox}>
                <div className={styles.recIndicator}>
                  <div className={styles.recDot}></div>
                  <span>Recording…</span>
                  <span className={styles.recTime}>22:07</span>
                </div>
                <div className={styles.miniBars}>
                  {[10, 20, 14, 26, 18, 30, 16, 22, 12, 20].map((h, i) => (
                    <div key={i} className={styles.mbar} style={{ height: `${h}px`, animationDelay: `${i * 0.1}s` }}></div>
                  ))}
                </div>
                <div className={styles.consentRow}>
                  <div className={styles.consentCheck}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></div>
                  Patient consent recorded
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className={styles.hiwStep}>
              <div className={styles.hiwNum}>Step 02</div>
              <div className={styles.hiwIconBox}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
              </div>
              <h3>AI drafts the note</h3>
              <p>Mimo generates a structured progress note in your preferred format matched to your specialty.</p>
              <div className={styles.hiwPreviewBox}>
                <div className={styles.noteSkelLabel}>Chief Complaint</div>
                <div className={styles.noteSkelLine} style={{ width: "90%" }}></div>
                <div className={styles.noteSkelLine} style={{ width: "72%" }}></div>
                <div className={styles.noteSkelLabel} style={{ marginTop: "10px" }}>Assessment</div>
                <div className={styles.noteSkelLine} style={{ width: "85%" }}></div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <div className={styles.noteSkelLine} style={{ width: "55%", margin: 0 }}></div>
                  <span className={styles.noteSkelCursor}></span>
                </div>
                <div className={styles.formatTags}>
                  <span className={styles.ftag}>DAP</span>
                  <span className={styles.ftag}>BIRP</span>
                  <span className={`${styles.ftag} ${styles.ftagOn}`}>SOAP</span>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className={styles.hiwStep}>
              <div className={styles.hiwNum}>Step 03</div>
              <div className={styles.hiwIconBox}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
              </div>
              <h3>Compliance check & sign</h3>
              <p>Payer rules run automatically. Gaps are flagged with exact remediation guidance. Review and push.</p>
              <div className={styles.hiwPreviewBox}>
                {[
                  { lbl: "Medicare — criteria met", icon: "ok" },
                  { lbl: "Medicaid — criteria met", icon: "ok" },
                  { lbl: "BCBS — auto-fixed ✓", icon: "warn", color: "var(--amber)" }
                ].map((check, i) => (
                  <div className={styles.ccheck} key={i}>
                    <div className={`${styles.ccheckCircle} ${check.icon === 'ok' ? styles.ccheckOk : styles.ccheckWarn}`}>
                      {check.icon === 'ok' ? (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      ) : (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                      )}
                    </div>
                    <span style={{ color: check.color }}>{check.lbl}</span>
                  </div>
                ))}
                <div className={styles.signBtn}>Push to EHR →</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIME SAVINGS */}
      <section className={styles.timeSavings}>
        <div className={styles.container}>
          <div className={styles.split}>
            <div className={styles.splitVisual}>
              <div className={styles.barChart}>
                <div className={styles.barChartDivider}>
                  <div className={styles.barChartDividerLine}></div>
                  <div className={styles.barChartDividerLabel}>Before Mimo</div>
                  <div className={styles.barChartDividerLine}></div>
                </div>
                {[
                  { label: "10 sessions/wk", val: "18 min avg", w: "72%", type: "before" },
                  { label: "20 sessions/wk", val: "18 min avg", w: "90%", type: "before" }
                ].map((row, i) => (
                  <div className={styles.barChartRow} key={i}>
                    <div className={styles.barChartLabel}>{row.label}</div>
                    <div className={styles.barTrack}><div className={`${styles.barFill} ${styles.barBefore}`} style={{ width: row.w }}>{row.val}</div></div>
                  </div>
                ))}
                <div className={styles.barChartDivider} style={{ marginTop: "8px" }}>
                  <div className={styles.barChartDividerLine}></div>
                  <div className={`${styles.barChartDividerLabel} ${styles.barChartDividerLabelGreen}`}>With Mimo</div>
                  <div className={styles.barChartDividerLine}></div>
                </div>
                {[
                  { label: "10 sessions/wk", val: "4 min", w: "22%", type: "after" },
                  { label: "20 sessions/wk", val: "4 min", w: "22%", type: "after" }
                ].map((row, i) => (
                  <div className={styles.barChartRow} key={i}>
                    <div className={styles.barChartLabel}>{row.label}</div>
                    <div className={styles.barTrack}><div className={`${styles.barFill} ${styles.barAfter}`} style={{ width: row.w }}>{row.val}</div></div>
                  </div>
                ))}
              </div>
              <div className={styles.savingCallout}>
                <div className={styles.savingCard}>
                  <div className={styles.savingCardNum}>9.3 hrs</div>
                  <div className={styles.savingCardLabel}>saved/month at 10 sessions/wk</div>
                </div>
                <div className={styles.savingCard}>
                  <div className={styles.savingCardNum}>18.7 hrs</div>
                  <div className={styles.savingCardLabel}>saved/month at 20 sessions/wk</div>
                </div>
              </div>
            </div>

            <div className={styles.splitContent}>
              <div className={styles.sectionLabel}><span className={`${styles.pill} ${styles.pillGreen}`}>Documentation speed</span></div>
              <h2 className={styles.sectionHeading}>70% less time on notes. Every detail intact.</h2>
              <p className={styles.sectionSub}>Clinicians on Mimo average 4 minutes per completed, signed note — down from 18 with traditional documentation. The AI captures clinical nuance, not just keywords.</p>
              <ul className={styles.checkList} style={{ marginTop: "28px" }}>
                <li>Specialty-aware language for psychiatry and therapy</li>
                <li>Custom templates that match your existing style</li>
                <li>Smart carry-forward from previous sessions</li>
                <li>Inline editing with live AI suggestions</li>
                <li>Direct push to Epic, Athena, and more</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PAYER COVERAGE */}
      <section className={styles.payers}>
        <div className={styles.container}>
          <div className={styles.payersHeader}>
            <span className={`${styles.pill} ${styles.pillWhite}`}>Payer coverage</span>
            <h2 className={styles.sectionHeading}>Every major payer. Every state.</h2>
            <p className={styles.sectionSub}>Real-time rule checking for Medicare, Medicaid, and 60+ commercial payers — updated as policies change.</p>
          </div>

          <div className={styles.payersGrid}>
            {[
              { name: "Medicare", type: "Federal — CMS", checks: ["LCD/NCD criteria matching", "Medical necessity language", "Behavioral health CPT codes"], icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg> },
              { name: "Medicaid", type: "State plans — all 50 states", checks: ["State-specific rule sets", "Prior authorization docs", "EPSDT criteria"], icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
              { name: "BCBS", type: "Commercial — all plans", checks: ["Session duration requirements", "Outpatient BH guidelines", "Mental health parity rules"], icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg> }
            ].map((payer, i) => (
              <div className={styles.payerCard} key={i}>
                <div className={styles.payerCardIcon}>{payer.icon}</div>
                <div className={styles.payerCardName}>{payer.name}</div>
                <div className={styles.payerCardType}>{payer.type}</div>
                <div className={styles.payerCardChecks}>
                  {payer.checks.map((check, j) => (
                    <div className={styles.pcheck} key={j}><span className={styles.pcheckDot}></span>{check}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.ctaDark}>
        <div className={styles.ctaDarkInner}>
          <div className={styles.pillWrap}>
            <span className={`${styles.pill} ${styles.pillWhite}`}>Get Started</span>
          </div>
          <h2>Ready for documentation that <em>actually helps?</em></h2>
          <p>Join 500+ clinicians who have reclaimed their nights and weekends with Mimo AI. Start your free trial today.</p>
          <div className={styles.ctaDarkActions}>
            <Link href="https://mimonote.com/contact" className={styles.btnPrimaryLg} target="_blank" rel="noopener noreferrer">Start free trial</Link>
            <Link href="https://mimonote.com/contact" className={styles.btnWhiteOutlineLg} target="_blank" rel="noopener noreferrer">Book a demo</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
