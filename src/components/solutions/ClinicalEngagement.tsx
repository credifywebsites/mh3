"use client";

import React from "react";
import Link from "next/link";
import styles from "./ClinicalEngagement.module.css";

export function ClinicalEngagement() {
  return (
    <main className={styles.main}>
      {/* HERO */}
      <header className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div>
              <span className={`${styles.pill} ${styles.onDark} ${styles.heroPill}`}>
                <span className={styles.dot}></span>
                Client Clinical Engagement Engine
              </span>
              <h1 className={styles.heroTitle}>
                Catch <em>decline</em> before it becomes a crisis.
              </h1>
              <p className={styles.heroSub}>
                Forms completed before the session. Screenings tracked automatically. PHQ-9, GAD-7, and PCL-5 scores graphed over time — and supervisors looped in the moment a score moves the wrong way.
              </p>
              <div className={styles.heroCta}>
                <Link href="/contact#contact-form" className={`${styles.btn} ${styles.btnPrimary}`} target="_blank" rel="noopener noreferrer">
                  Book a demo
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                {/* <Link href="#supervisor" className={`${styles.btn} ${styles.btnSecondary} ${styles.btnOnDark}`}>See supervisor alerts</Link> */}
              </div>
              <div className={styles.heroTrust}>
                <span>HIPAA-compliant</span>
                <span className={styles.sep}></span>
                <span>SOC 2 Type II</span>
                <span className={styles.sep}></span>
                <span>Documented for compliance</span>
              </div>
            </div>

            <div>
              <div className={styles.alertStack}>
                <div className={`${styles.alertCard} ${styles.primaryCard}`}>
                  <div className={styles.alertHead}>
                    <div className={styles.alertIcon}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 2L2 17H18L10 2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
                        <path d="M10 8V11M10 14V14.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div>
                      <div className={styles.label}>Clinical alert · auto-flagged</div>
                      <div className={styles.name}>Alex T. — Session 8</div>
                    </div>
                  </div>
                  <div className={styles.alertBody}>
                    <div className={styles.alertStat}>
                      <span className={styles.key}>PHQ-9 score</span>
                      <span className={styles.val}>17</span>
                      <span className={styles.delta}>↑ from 9</span>
                    </div>
                    <div className={styles.alertStat}>
                      <span className={styles.key}>Threshold</span>
                      <span className={styles.val} style={{ color: "var(--ink)", fontStyle: "normal", fontSize: "18px" }}>15</span>
                      <span className={styles.delta}>+89% increase</span>
                    </div>
                  </div>
                  <div className={styles.alertFoot}>
                    <div className={styles.who}>Notified: <b>Marcus Holloway, LCSW (supervisor)</b></div>
                    <span className={styles.statusBadge}>Sent · 2:14pm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <div className={styles.num}><em>100 </em>%</div>
              <div className={styles.lbl}>Of completed screenings graphed automatically — no manual charting.</div>
            </div>
            <div className={styles.heroStat}>
              <div className={styles.num}><em>0 </em>min</div>
              <div className={styles.lbl}>Manual review needed. Supervisors get pulled in only when scores cross your thresholds.</div>
            </div>
            <div className={styles.heroStat}>
              <div className={styles.num}><em>3×</em></div>
              <div className={styles.lbl}>Reminder channels chase forms — SMS, email, and AI voice — until completed.</div>
            </div>
            <div className={styles.heroStat}>
              <div className={styles.num}><em>Any</em></div>
              <div className={styles.lbl}>Screening type — PHQ-9, GAD-7, PCL-5, or custom — supervisor logic the same.</div>
            </div>
          </div>
        </div>
      </header>

      {/* PROBLEM */}
      <section className={styles.problem}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.pill}><span className={styles.dot}></span>The problem</span>
            <h2 className={styles.sectionTitle}>Clinical signal is buried in <em>session notes</em>. Decline gets caught too late.</h2>
            <p className={styles.sectionLede}>Screenings are required, charted inconsistently, and rarely reviewed in time. By the time a supervisor notices a worsening score, the client has already missed three sessions.</p>
          </div>

          <div className={styles.problemGrid}>
            <div className={styles.problemCard}>
              <div className={styles.problemNum}>40<sup>%+</sup></div>
              <h3>Of intake forms incomplete at session start</h3>
              <p>Clinicians spend the first 15 minutes filling them in instead of providing care. Session ends late and short.</p>
            </div>
            <div className={styles.problemCard}>
              <div className={styles.problemNum}>Hours</div>
              <h3>Of manual chart review per week</h3>
              <p>Supervisors digging through notes to find scores that should already be graphed and flagged automatically.</p>
            </div>
            <div className={styles.problemCard}>
              <div className={styles.problemNum}>Days</div>
              <h3>Between a worsening score and a response</h3>
              <p>The window where intervention matters most. Most agencies miss it because the workflow relies on memory.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FORMS */}
      <section className={styles.forms}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.pill}><span className={styles.dot}></span>Forms & screenings</span>
            <h2 className={styles.sectionTitle}>Session time is for <em>care</em>, not paperwork.</h2>
            <p className={styles.sectionLede}>Intake, consent, pre-session screenings — chased automatically across SMS, email, and AI voice until completed. Clinicians walk in prepared, not scrambling.</p>
          </div>

          <div className={styles.formsGrid}>
            <div className={styles.formsPoints}>
              <div className={styles.formsPoint}>
                <h4>Reminders across <em>three channels</em></h4>
                <p>Same engine that handles appointment reminders. SMS at first, email if needed, AI voice call if forms still aren't done before the session.</p>
              </div>
              <div className={styles.formsPoint}>
                <h4>Forms done <em>before</em> the session — not during</h4>
                <p>Set the cutoff window — 24 hours, 48 hours, whatever your workflow needs. The system enforces it without staff intervention.</p>
              </div>
              <div className={styles.formsPoint}>
                <h4>Any screening, any cadence</h4>
                <p>PHQ-9, GAD-7, PCL-5, custom assessments — schedule them by visit type, frequency, or clinician preference. The reminder engine doesn't care which form.</p>
              </div>
              <div className={styles.formsPoint}>
                <h4>Documented for <em>compliance</em></h4>
                <p>Every reminder, every completion, every escalation logged with timestamps. When auditors ask, the trail is already there.</p>
              </div>
            </div>

            <div className={styles.formsVisual}>
              <div className={styles.formsVisualHead}>
                <div className={styles.formsVisualTitle}>Pre-session form queue · today</div>
                <div className={styles.formsVisualComplete}>8 of 12 complete</div>
              </div>
              <div className={styles.formRow}>
                <div className={`${styles.formCheck} ${styles.done}`}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div className={styles.formInfo}>
                  <div className={styles.title}>Maria Chen · PHQ-9</div>
                  <div className={styles.meta}>Tue 2pm · Rachel Whitaker</div>
                </div>
                <span className={`${styles.formStatus} ${styles.doneStatus}`}>Complete</span>
              </div>
              <div className={styles.formRow}>
                <div className={`${styles.formCheck} ${styles.done}`}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div className={styles.formInfo}>
                  <div className={styles.title}>James Robinson · Intake</div>
                  <div className={styles.meta}>Tue 3pm · Daniel Brennan</div>
                </div>
                <span className={`${styles.formStatus} ${styles.doneStatus}`}>Complete</span>
              </div>
              <div className={styles.formRow}>
                <div className={`${styles.formCheck} ${styles.pending}`}></div>
                <div className={styles.formInfo}>
                  <div className={styles.title}>Aisha Williams · GAD-7</div>
                  <div className={styles.meta}>Tue 4pm · Marcus Holloway</div>
                </div>
                <span className={`${styles.formStatus} ${styles.callingStatus}`}>AI calling</span>
              </div>
              <div className={styles.formRow}>
                <div className={`${styles.formCheck} ${styles.pending}`}></div>
                <div className={styles.formInfo}>
                  <div className={styles.title}>David Okafor · Consent</div>
                  <div className={styles.meta}>Wed 10am · Daniel Brennan</div>
                </div>
                <span className={`${styles.formStatus} ${styles.queuedStatus}`}>SMS sent</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCREENINGS */}
      <section className={styles.screenings}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.pill}><span className={styles.dot}></span>Screenings supported</span>
            <h2 className={styles.sectionTitle}>Built around the screenings clinicians <em>actually use</em>.</h2>
            <p className={styles.sectionLede}>Standard validated instruments are pre-configured. Custom screenings drop in with a few minutes of setup. The reminder, completion, graphing, and supervisor logic all work the same way.</p>
          </div>

          <div className={styles.screenGrid}>
            <div className={styles.screenCard}>
              <div className={styles.screenName}>PHQ-9</div>
              <div className={styles.screenDesc}>Patient Health Questionnaire — depression severity, 9 items.</div>
              <div className={styles.screenTag}>Pre-configured</div>
            </div>
            <div className={styles.screenCard}>
              <div className={styles.screenName}>GAD-7</div>
              <div className={styles.screenDesc}>Generalized Anxiety Disorder — anxiety severity, 7 items.</div>
              <div className={styles.screenTag}>Pre-configured</div>
            </div>
            <div className={styles.screenCard}>
              <div className={styles.screenName}>PCL-5</div>
              <div className={styles.screenDesc}>PTSD Checklist — DSM-5 criteria, 20 items.</div>
              <div className={styles.screenTag}>Pre-configured</div>
            </div>
            <div className={styles.screenCard}>
              <div className={styles.screenName}>Custom</div>
              <div className={styles.screenDesc}>Any agency-specific or specialty screening — same workflow.</div>
              <div className={styles.screenTag}>Drop-in setup</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRESS GRAPHING */}
      <section className={styles.progress}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.pill}><span className={styles.dot}></span>Progress tracking</span>
            <h2 className={styles.sectionTitle}>Graph every client's trajectory. <em>Automatically</em>.</h2>
            <p className={styles.sectionLede}>Screening scores aren't just compliance checkboxes — they're clinical signals. We graph them, flag the ones moving the wrong direction, and surface the trend lines clinicians actually need to see.</p>
          </div>

          <div className={styles.progressGrid}>
            <div className={styles.progressPoints}>
              <div className={styles.progressPoint}>
                <div className={styles.icon}>
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <path d="M3 17V8L7 11L11 5L17 9V17H3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4>Automatic score graphing</h4>
                  <p>Every completed screening lands on a visual trend line. No manual charting, no data entry — just a clear picture of where every client is headed.</p>
                </div>
              </div>
              <div className={styles.progressPoint}>
                <div className={styles.icon}>
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M10 6V10L13 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <h4>Trend at a glance</h4>
                  <p>Improving, stable, or declining — color-coded across the entire active caseload. Spot patterns across clients without digging through individual charts.</p>
                </div>
              </div>
              <div className={styles.progressPoint}>
                <div className={styles.icon}>
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <path d="M3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M3 10L5 12M3 10L5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <h4>Historical context</h4>
                  <p>Every session, every score, kept in the trend line forever. Clinicians see the full arc — from intake through current state — without context-switching to the EHR.</p>
                </div>
              </div>
            </div>

            <div className={styles.caseload}>
              <div className={styles.caseloadHead}>
                <div className={styles.caseloadTitle}>PHQ-9 — Active caseload</div>
                <span className={styles.caseloadAlertBadge}>2 alerts active</span>
              </div>
              <div className={styles.caseRow}>
                <div className={styles.who}>
                  <div className={styles.whoName}>Sara W.</div>
                  <div className={styles.whoSession}>Session 14 · was 16 → now 3</div>
                </div>
                <div className={`${styles.caseTrend} ${styles.trendUp}`}>
                  <span className={styles.trendScore}>3</span>
                  <span className={styles.trendArrow}>↑</span>
                  <span className={styles.trendLabel}>Improving</span>
                </div>
              </div>
              <div className={styles.caseRow}>
                <div className={styles.who}>
                  <div className={styles.whoName}>Jamie H.</div>
                  <div className={styles.whoSession}>Session 12 · was 14 → now 6</div>
                </div>
                <div className={`${styles.caseTrend} ${styles.trendUp}`}>
                  <span className={styles.trendScore}>6</span>
                  <span className={styles.trendArrow}>↑</span>
                  <span className={styles.trendLabel}>Improving</span>
                </div>
              </div>
              <div className={styles.caseRow}>
                <div className={styles.who}>
                  <div className={styles.whoName}>Marcus R.</div>
                  <div className={styles.whoSession}>Session 5 · was 12 → now 11</div>
                </div>
                <div className={`${styles.caseTrend} ${styles.trendFlat}`}>
                  <span className={styles.trendScore}>11</span>
                  <span className={styles.trendArrow}>→</span>
                  <span className={styles.trendLabel}>Stable</span>
                </div>
              </div>
              <div className={styles.caseRow}>
                <div className={styles.who}>
                  <div className={styles.whoName}>Alex T.</div>
                  <div className={styles.whoSession}>Session 8 · was 9 → now 17</div>
                </div>
                <div className={`${styles.caseTrend} ${styles.trendDown}`}>
                  <span className={styles.trendScore}>17</span>
                  <span className={styles.trendArrow}>↓</span>
                  <span className={styles.trendLabel}>Declining</span>
                </div>
              </div>
              <div className={styles.caseSupervisor}>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2L2 17H18L10 2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
                  <path d="M10 8V11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
                <span>Supervisor notified — Alex T. PHQ-9 exceeded threshold of 15</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUPERVISOR AUTO-LOOP */}
      <section className={styles.supervisor} id="supervisor">
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={`${styles.pill} ${styles.onDark}`}><span className={styles.dot}></span>Supervisor auto-loop</span>
            <h2 className={styles.sectionTitle}>When a score crosses your threshold, the supervisor knows <em>immediately</em>.</h2>
            <p className={styles.sectionLede}>No waiting for the next chart review. No depending on a clinician to flag it. Out-of-range scores trigger an automatic notification — documented, timestamped, and ready for compliance review.</p>
          </div>

          <div className={styles.superGrid}>
            <div className={styles.superFlow}>
              <div className={styles.superStep}>
                <div className={styles.num}>01</div>
                <div>
                  <h4>You define the thresholds</h4>
                  <p>Per screening, per population. PHQ-9 above 15. PCL-5 spike of 10+ points. Sudden GAD-7 increase across two sessions. You set the rules.</p>
                </div>
              </div>
              <div className={styles.superStep}>
                <div className={styles.num}>02</div>
                <div>
                  <h4>The system watches every score</h4>
                  <p>After every completed screening — passive, automatic, every client, every session. No manual review queue, no missed checkboxes.</p>
                </div>
              </div>
              <div className={styles.superStep}>
                <div className={styles.num}>03</div>
                <div>
                  <h4>Threshold breach triggers a notification</h4>
                  <p>Supervisor gets pinged via SMS, email, or both — on the channels they want, with the context they need. Score, threshold, change, history.</p>
                </div>
              </div>
              <div className={styles.superStep}>
                <div className={styles.num}>04</div>
                <div>
                  <h4>Documented for compliance</h4>
                  <p>Every alert is logged with timestamps and recipients. When auditors or boards ask, the response trail is already there.</p>
                </div>
              </div>
            </div>

            <div className={styles.notifMockup}>
              <div className={styles.notifHead}>
                <div className={styles.notifIcon}>
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2L2 17H18L10 2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
                    <path d="M10 8V11M10 14V14.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <div className={styles.notifLabel}>Threshold breach · auto-alert</div>
                  <div className={styles.notifTitle}>Alex T. — PHQ-9 out of range</div>
                </div>
              </div>
              <div className={styles.notifBody}>
                Score increased from <b>9 → 17</b> over 2 sessions. Threshold of 15 exceeded. Clinical review flagged for supervisor attention.
              </div>
              <div className={styles.notifStats}>
                <div className={styles.notifStat}>
                  <div className={styles.statV}>+8</div>
                  <div className={styles.statL}>Score change</div>
                </div>
                <div className={styles.notifStat}>
                  <div className={styles.statV}>2</div>
                  <div className={styles.statL}>Sessions to breach</div>
                </div>
                <div className={styles.notifStat}>
                  <div className={styles.statV}>15</div>
                  <div className={styles.statL}>Threshold</div>
                </div>
              </div>
              <div className={styles.notifFoot}>
                <span>Sent: SMS + Email</span>
                <span>Logged · 2:14 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className={styles.how}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.pill}><span className={styles.dot}></span>How it works</span>
            <h2 className={styles.sectionTitle}>You make the rules. We <em>enforce them</em>.</h2>
            <p className={styles.sectionLede}>Configure thresholds, channels, and escalation paths once. The engine runs them forever — every client, every screening, every day.</p>
          </div>

          <div className={styles.howGrid}>
            <div className={styles.howCard}>
              <div className={styles.num}>01</div>
              <h3>Configure once</h3>
              <p>Set the form deadlines, screening cadence, threshold scores, and supervisor channels. Change them anytime — adjustments take effect immediately.</p>
            </div>
            <div className={styles.howCard}>
              <div className={styles.num}>02</div>
              <h3>Engine runs continuously</h3>
              <p>Reminders fire on schedule. Scores graph automatically. Thresholds are watched on every submission. No human needs to trigger anything.</p>
            </div>
            <div className={styles.howCard}>
              <div className={styles.num}>03</div>
              <h3>Humans involved only when it matters</h3>
              <p>Supervisors get notified for genuine clinical signal — not paperwork chases or routine chart review. Their attention goes where it counts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className={styles.testimonial}>
        <div className={styles.container}>
          <div className={styles.testCard}>
            <div className={styles.testQuote}>
              We caught a client whose PHQ-9 was climbing across three sessions before any clinician noticed. The supervisor alert went out the same evening the score was submitted. That's not just better documentation — it's better care.
            </div>
            <div className={styles.testAuthor}>
              <div className={styles.testAvatar}>SM</div>
              <div className={styles.testInfo}>
                <div className={styles.name}>Sarah Mitchell, LMFT</div>
                <div className={styles.role}>Clinical Director · Lakeside Wellness Group</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CROSS-LINK */}
      <section className={styles.crossLink}>
        <div className={styles.container}>
          <Link href="/appointment-engagement" className={styles.crossCard}>
            <div>
              <span className={styles.pill}><span className={styles.dot}></span>Also from Credify</span>
              <h3>Looking for appointment engagement?</h3>
              <p>SMS, email, and AI voice reminders — plus the lapsed-client recovery and outbound calling that fill the slots before they go cold. Same engine, revenue side.</p>
            </div>
            <div className={styles.arrow}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 10H17M17 10L11 4M17 10L11 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta} id="cta">
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <span className={`${styles.pill} ${styles.onDark}`}><span className={styles.dot}></span>Better signal · better care</span>
            <h2 className={styles.ctaTitle}>Stop missing the scores that <em>matter</em>.</h2>
            <p className={styles.ctaSub}>Twenty-minute demo. We'll walk through your screening workflow, set thresholds on a real client, and show the supervisor alert in action.</p>
            <div className={styles.ctaRow}>
              <Link href="/contact#contact-form" className={`${styles.btn} ${styles.btnPrimary}`} target="_blank" rel="noopener noreferrer">
                Book a demo
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link href="/pricing" className={`${styles.btn} ${styles.btnSecondary} ${styles.btnOnDark}`}>View pricing</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
