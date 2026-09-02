"use client";

import React from "react";
import Link from "next/link";
import siteConfig from "@/config/site";
import styles from "./ProviderEngagement.module.css";

export function ProviderEngagement() {
  return (
    <main className={styles.main}>
      {/* HERO */}
      <header className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div>
              <div className={styles.heroEyebrow}>
                <span className={styles.liveDot}></span>
                Provider Engagement Engine
              </div>
              <h1 className={styles.heroTitle}>
                Providers stay compliant.<br />
                Supervisors stay free.<br />
                <em>Nothing falls through.</em>
              </h1>
              <p className={styles.heroSub}>
                Automated SMS, email, and AI calling that chases unsigned notes, overdue treatment plan reviews, incomplete assessments, and co-signature requirements — completely on autopilot. You set the rules. We enforce them forever.
              </p>
              <div className={styles.heroStatRow}>
                <div className={styles.heroStat}>
                  <div className={styles.heroStatNum}>0</div>
                  <div className={styles.heroStatDesc}>staff hours spent chasing provider paperwork</div>
                </div>
                <div className={styles.heroStatDivider}></div>
                <div className={styles.heroStat}>
                  <div className={styles.heroStatNum}>100%</div>
                  <div className={styles.heroStatDesc}>documentation tasks tracked and escalated automatically</div>
                </div>
                <div className={styles.heroStatDivider}></div>
                <div className={styles.heroStat}>
                  <div className={styles.heroStatNum}>3×</div>
                  <div className={styles.heroStatDesc}>channels — SMS, email, AI call — before supervisor is looped in</div>
                </div>
              </div>
              <div className={styles.heroBtns}>
                <Link href="/contact#contact-form" className={styles.btnPrimary} target="_blank" rel="noopener noreferrer">
                  Book a demo
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M2 6.5h9M7 2.5l4 4-4 4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                {/* <Link href="/pricing" className={styles.btnOutlineWhite}>View pricing →</Link> */}
              </div>
            </div>

            <div className={styles.heroQueue}>
              <div className={styles.queueLabel}>Live compliance queue — all automated</div>
              <div className={styles.queueCard}>
                <div className={styles.queueCardHeader}>
                  <div className={styles.queueCardTitle}>Session notes unsigned — Dr. Patel · 3 sessions</div>
                  <span className={`${styles.queueBadge} ${styles.badgeRed}`}>3 days overdue</span>
                </div>
                <div className={styles.queueItem}>
                  <div className={styles.queueDot} style={{ background: "#3dbd94" }}></div>
                  <div className={styles.queueText}>SMS sent × 2 — no response</div>
                  <div className={styles.queueStatus} style={{ color: "var(--brand400)" }}>✓ Sent</div>
                </div>
                <div className={styles.queueItem}>
                  <div className={styles.queueDot} style={{ background: "#3dbd94" }}></div>
                  <div className={styles.queueText}>Email sent with direct sign-off link</div>
                  <div className={styles.queueStatus} style={{ color: "var(--brand400)" }}>✓ Sent</div>
                </div>
                <div className={styles.queueItem}>
                  <div className={styles.queueDot} style={{ background: "#fbbf24" }}></div>
                  <div className={styles.queueText}>AI call scheduled 9am tomorrow</div>
                  <div className={styles.queueStatus} style={{ color: "#fbbf24" }}>Scheduled</div>
                </div>
                <div className={styles.queueItem}>
                  <div className={styles.queueDot} style={{ background: "#f87171" }}></div>
                  <div className={styles.queueText}>Supervisor alert if no action by EOD</div>
                  <div className={styles.queueStatus} style={{ color: "#f87171" }}>Pending</div>
                </div>
              </div>
              <div className={styles.queueCard}>
                <div className={styles.queueCardHeader}>
                  <div className={styles.queueCardTitle}>Treatment plan review — Therapist Chen</div>
                  <span className={`${styles.queueBadge} ${styles.badgeAmber}`}>Due in 24hrs</span>
                </div>
                <div className={styles.queueItem}>
                  <div className={styles.queueDot} style={{ background: "#3dbd94" }}></div>
                  <div className={styles.queueText}>First SMS + email reminder sent</div>
                  <div className={styles.queueStatus} style={{ color: "var(--brand400)" }}>✓ Sent</div>
                </div>
                <div className={styles.queueItem}>
                  <div className={styles.queueDot} style={{ background: "#fbbf24" }}></div>
                  <div className={styles.queueText}>AI call scheduled if not complete by 3pm</div>
                  <div className={styles.queueStatus} style={{ color: "#fbbf24" }}>Watching</div>
                </div>
              </div>
              <div className={styles.queueCard}>
                <div className={styles.queueCardHeader}>
                  <div className={styles.queueCardTitle}>Intake assessment co-signed — Dr. Williams</div>
                  <span className={`${styles.queueBadge} ${styles.badgeGreen}`}>Resolved</span>
                </div>
                <div className={styles.queueItem}>
                  <div className={styles.queueDot} style={{ background: "#3dbd94" }}></div>
                  <div className={styles.queueText}>Completed after 2 automated reminders · 18hrs early</div>
                  <div className={styles.queueStatus} style={{ color: "var(--brand400)" }}>✓ Done</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* WHAT WE AUTOMATE */}
      <section className={styles.automate}>
        <div className={styles.container}>
          <div className={styles.sectionTag}>What we automate</div>
          <h2 className={styles.sectionH2}>Every documentation requirement.<br />Every provider. Every day.</h2>
          <p className={styles.sectionSub} style={{ maxWidth: "580px" }}>
            You define the rules for your practice. We enforce every single one — automatically, across SMS, email, and AI calling — without a single staff member having to chase anyone.
          </p>

          <div className={styles.automateGrid}>
            {[
              {
                title: "Session note sign-off",
                desc: "Notes not signed within your window (24hrs, 48hrs — you decide)? Reminders fire automatically until they're done. Repeated failure escalates to supervisor.",
                channels: ["SMS", "Email", "AI Call"],
                icon: (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect x="3" y="3" width="14" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.4"/>
                    <path d="M7 7h6M7 10h6M7 13h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                  </svg>
                )
              },
              {
                title: "Treatment plan reviews",
                desc: "90-day and annual treatment plan reviews triggered automatically on schedule. Providers reminded, supervisors looped in for co-sign, deadlines never missed.",
                channels: ["SMS", "Email", "AI Call"],
                icon: (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 3l1.5 3.5H17l-4.5 3.2 1.5 4.3-4.5-3-4.5 3 1.5-4.3L3 6.5h5.5L10 3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                title: "Co-signature routing",
                desc: "When a provider completes a document requiring supervisor co-signature, it's routed automatically. Supervisor reminded on schedule until signed.",
                channels: ["SMS", "Email"],
                icon: (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.4"/>
                    <path d="M4 17c0-3.31 2.69-6 6-6s6 2.69 6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                  </svg>
                )
              },
              {
                title: "Assessment completion",
                desc: "Intake assessments, diagnostic summaries, clinical evaluations — if a provider has an incomplete assessment, every channel fires until it's done.",
                channels: ["SMS", "Email", "AI Call"],
                icon: (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect x="3" y="4" width="14" height="13" rx="2" stroke="currentColor" strokeWidth="1.4"/>
                    <path d="M7 2v3M13 2v3M3 10h14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                  </svg>
                )
              },
              {
                title: "Discharge documentation",
                desc: "Discharge summaries, aftercare plans, and transition documents chased automatically. Nothing slips through at the end of a clinical episode.",
                channels: ["SMS", "Email"],
                icon: (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10h12M13 6l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                title: "Compliance audit trail",
                desc: "Every reminder sent, every response received, every escalation triggered — fully logged with timestamps. Audit-ready at all times, no manual record-keeping.",
                channels: ["Auto-logged"],
                isSpecial: true,
                icon: (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect x="3" y="7" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
                    <path d="M7 7V5.5a3 3 0 016 0V7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                  </svg>
                )
              }
            ].map((item, i) => (
              <div className={styles.automateCard} key={i}>
                <div className={styles.automateIcon}>{item.icon}</div>
                <div className={styles.automateTitle}>{item.title}</div>
                <div className={styles.automateDesc}>{item.desc}</div>
                <div className={styles.automateChannels}>
                  {item.channels.map((ch, j) => (
                    <span key={j} className={`${styles.chTag} ${item.isSpecial ? styles.chSpecial : styles[`ch${ch.replace(" ", "")}`]}`}>
                      {ch}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESCALATION SEQUENCE */}
      <section className={styles.escalation}>
        <div className={styles.container}>
          <div className={styles.sectionTag}>How escalation works</div>
          <h2 className={styles.sectionH2}>Supervisors are the last resort.<br />Not the first call.</h2>
          <p className={styles.sectionSub} style={{ maxWidth: "560px" }}>
            We exhaust every automated channel before a human is involved. Your supervisors only step in when a provider has genuinely ignored multiple reminders — not as a default workflow.
          </p>

          <div className={styles.escalationGrid}>
            <div className={styles.escalationSteps}>
              {[
                { num: "1", title: "Automated SMS — immediate", desc: "First reminder fires automatically the moment a task becomes due. Direct link to complete it. One tap — done.", tags: ["SMS"], theme: "green" },
                { num: "2", title: "Email with direct action link", desc: "Email follows within the hour with a deep link directly to the task — no navigating, no login hunting. One click to the right page.", tags: ["Email"], theme: "green" },
                { num: "3", title: "Second SMS — escalating urgency", desc: "If still not complete after your defined window, a second SMS fires with increased urgency and deadline language.", tags: ["SMS"], theme: "amber" },
                { num: "4", title: "AI voice call", desc: "AI calls the provider directly. Natural conversation — confirms what's outstanding, walks through completion, or documents the reason for delay.", tags: ["AI Call"], theme: "amber" },
                { num: "!", title: "Supervisor notified — only at this point", desc: "Only after all automated channels have been exhausted does a supervisor get looped in. Notification includes full history of what was sent and when — no detective work required.", tags: ["Supervisor alert"], theme: "red" }
              ].map((step, i) => (
                <div className={styles.escStep} key={i}>
                  <div className={`${styles.escNum} ${styles[`esc${step.theme.charAt(0).toUpperCase() + step.theme.slice(1)}`]}`}>{step.num}</div>
                  <div className={styles.escContent}>
                    <div className={styles.escTitle}>{step.title}</div>
                    <div className={styles.escDesc}>{step.desc}</div>
                    <div className={styles.escTags}>
                      {step.tags.map((tag, j) => (
                        <span key={j} className={`${styles.escTag} ${tag === "Supervisor alert" ? styles.escTagRed : styles[`ch${tag.replace(" ", "")}`]}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.impactCard}>
              <div className={styles.impactInner}>
                <div className={styles.impactHeadline}>Compliance impact — at a glance</div>
                <div className={styles.impactSub}>What happens when provider documentation is automated vs. manual</div>
                <div className={styles.impactStats}>
                  <div className={styles.impactStat}>
                    <span className={styles.impactStatLabel}>Average supervisor time on documentation chasing</span>
                    <span className={styles.impactStatVal}>~0 hrs/wk</span>
                  </div>
                  <div className={styles.impactStat}>
                    <span className={styles.impactStatLabel}>Note signing compliance rate</span>
                    <span className={styles.impactStatVal}>97%+</span>
                  </div>
                  <div className={styles.impactStat}>
                    <span className={styles.impactStatLabel}>Treatment plan reviews completed on time</span>
                    <span className={styles.impactStatVal}>100%</span>
                  </div>
                  <div className={styles.impactDivider}></div>
                  <div className={styles.impactStat}>
                    <span className={styles.impactStatLabel}>Audit findings from documentation gaps</span>
                    <span className={styles.impactStatVal} style={{ color: "#4ade80" }}>Zero</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TREATMENT PLANS */}
      <section className={styles.treatment}>
        <div className={styles.container}>
          <div className={styles.treatmentInner}>
            <div className={styles.sectionTag}>Treatment plan automation</div>
            <h2 className={styles.sectionH2}>Reviews triggered, routed,<br />and co-signed — automatically.</h2>
            <p className={styles.sectionSub}>90-day and annual reviews are one of the most commonly missed compliance requirements in behavioral health. We eliminate the miss entirely — every review is triggered on schedule, no exceptions.</p>

            <div className={styles.treatmentGrid}>
              {[
                { title: "Scheduled review triggers", desc: "Reviews are triggered automatically based on the admission date — 30 days out, 7 days out, and day-of. No one has to remember. No one has to set a reminder.", hl: "Zero missed review cycles" },
                { title: "Provider completion chase", desc: "When a review is due, the assigned provider is automatically reminded via SMS, email, and AI call until the review is complete and submitted for co-signature.", hl: "All 3 channels until complete" },
                { title: "Automatic supervisor routing", desc: "Once the provider completes the review, it's automatically routed to the appropriate supervisor for co-signature — with a reminder sequence that runs until they sign.", hl: "Auto-routed to right supervisor" },
                { title: "Full audit trail", desc: "Every step is logged — who was reminded, when, how many times, who completed it, when it was co-signed. One click to pull a full compliance record for any client.", hl: "Audit-ready at all times" }
              ].map((item, i) => (
                <div className={styles.treatmentCard} key={i}>
                  <div className={styles.treatmentCardTitle}>{item.title}</div>
                  <div className={styles.treatmentCardDesc}>{item.desc}</div>
                  <div className={styles.treatmentHighlight}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <circle cx="6" cy="6" r="5.5" stroke="#3dbd94" strokeWidth="1.2"/>
                      <path d="M3.5 6l2 2 3-3" stroke="#3dbd94" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {item.hl}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SUPERVISOR IMPACT */}
      <section className={styles.supervisor}>
        <div className={styles.container}>
          <div className={styles.sectionTag}>Supervisor impact</div>
          <h2 className={styles.sectionH2}>Give your supervisors their<br />time back — for real supervision.</h2>
          <p className={styles.sectionSub} style={{ maxWidth: "560px" }}>In most behavioral health organizations, supervisors spend 30–40% of their time on documentation management rather than clinical oversight. We eliminate that entirely.</p>

          <div className={styles.supervisorGrid}>
            <div>
              <div className={styles.supervisorBeforeAfter}>
                <div className={styles.beforeCard}>
                  <div className={`${styles.baLabel} ${styles.red}`}>Before {siteConfig.name}</div>
                  <div className={`${styles.baItem} ${styles.bad}`}><span>✕</span> Manually reviewing who's behind on notes</div>
                  <div className={`${styles.baItem} ${styles.bad}`}><span>✕</span> Texting/calling providers to complete tasks</div>
                  <div className={`${styles.baItem} ${styles.bad}`}><span>✕</span> Tracking treatment plan review dates in spreadsheets</div>
                  <div className={`${styles.baItem} ${styles.bad}`}><span>✕</span> Scrambling before audits to find documentation</div>
                  <div className={`${styles.baItem} ${styles.bad}`}><span>✕</span> Being the "bad guy" who chases paperwork</div>
                </div>
                <div className={styles.afterCard}>
                  <div className={`${styles.baLabel} ${styles.green}`}>With {siteConfig.name}</div>
                  <div className={`${styles.baItem} ${styles.good}`}><span style={{ color: "var(--brand600)" }}>✓</span> System chases providers automatically</div>
                  <div className={`${styles.baItem} ${styles.good}`}><span style={{ color: "var(--brand600)" }}>✓</span> Supervisor only looped in as last resort</div>
                  <div className={`${styles.baItem} ${styles.good}`}><span style={{ color: "var(--brand600)" }}>✓</span> Treatment plan cycles enforced automatically</div>
                  <div className={`${styles.baItem} ${styles.good}`}><span style={{ color: "var(--brand600)" }}>✓</span> Audit trail always ready, no prep needed</div>
                  <div className={`${styles.baItem} ${styles.good}`}><span style={{ color: "var(--brand600)" }}>✓</span> Focused entirely on clinical supervision</div>
                </div>
              </div>
            </div>

            <div className={styles.supervisorRight}>
              <h3>Supervisors are for clinical leadership. Not paperwork management.</h3>
              <p>When supervisors spend their hours chasing notes and reminding providers to complete forms, they have less time for the clinical oversight that actually improves care outcomes and protects your license.</p>
              <p>We take the administrative burden completely off their plate — so they supervise clinically, not administratively.</p>
              <div className={styles.timeSaved}>
                <div className={styles.timeSavedNum}>8–12</div>
                <div className={styles.timeSavedLabel}>hours per week returned to supervisors who previously managed documentation compliance manually</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PERFORMANCE REPORTING */}
      <section className={styles.perf}>
        <div className={styles.container}>
          <div className={styles.sectionTag}>Provider performance reporting</div>
          <h2 className={styles.sectionH2}>Know exactly who your best providers are.<br />Reward them. Replace the rest.</h2>
          <p className={styles.sectionSub} style={{ maxWidth: "620px" }}>Full performance reporting ranked by sessions, profitability, note compliance, and any metric you define. Pay incentives based on contribution. Identify financial or operational drains before they cost you more than you can afford to lose.</p>

          <div className={styles.perfGrid}>
            <div className={styles.perfTableCard}>
              <div className={styles.perfTableHeader}>
                <div className={styles.perfTableTitle}>Provider Performance Dashboard — Monthly</div>
                <div className={styles.perfTableBadge}>Live reporting</div>
              </div>
              <div style={{ overflowX: "auto" }}>
                <table className={styles.perfTable}>
                  <thead>
                    <tr>
                      <th>Rank</th>
                      <th>Provider</th>
                      <th>Sessions</th>
                      <th>Notes on-time</th>
                      <th>Net revenue</th>
                      <th>Incentive</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><span className={`${styles.rankBadge} ${styles.rank1}`}>1</span></td>
                      <td><strong>Dr. S. Martinez</strong><br /><span style={{ fontSize: "11px", color: "var(--ink4)" }}>Outpatient · IOP</span></td>
                      <td><span className={styles.perfValGreen}>94</span></td>
                      <td><span className={styles.perfValGreen}>100%</span></td>
                      <td><span className={styles.perfValGreen}>$18,400</span></td>
                      <td><span className={`${styles.incentiveTag} ${styles.incGreen}`}>+$1,200 bonus</span></td>
                    </tr>
                    <tr>
                      <td><span className={`${styles.rankBadge} ${styles.rank2}`}>2</span></td>
                      <td><strong>J. Chen, LCSW</strong><br /><span style={{ fontSize: "11px", color: "var(--ink4)" }}>PHP · Outpatient</span></td>
                      <td>88</td>
                      <td><span className={styles.perfValGreen}>97%</span></td>
                      <td><span className={styles.perfValGreen}>$16,100</span></td>
                      <td><span className={`${styles.incentiveTag} ${styles.incGreen}`}>+$800 bonus</span></td>
                    </tr>
                    <tr>
                      <td><span className={`${styles.rankBadge} ${styles.rank3}`}>3</span></td>
                      <td><strong>Dr. R. Patel</strong><br /><span style={{ fontSize: "11px", color: "var(--ink4)" }}>Outpatient</span></td>
                      <td>71</td>
                      <td><span className={styles.perfValAmber}>78%</span></td>
                      <td>$12,600</td>
                      <td><span className={`${styles.incentiveTag} ${styles.incAmber}`}>On watch</span></td>
                    </tr>
                    <tr>
                      <td><span className={`${styles.rankBadge} ${styles.rankWarn}`}>!</span></td>
                      <td><strong>T. Williams, LMFT</strong><br /><span style={{ fontSize: "11px", color: "var(--ink4)" }}>IOP</span></td>
                      <td><span className={styles.perfValRed}>42</span></td>
                      <td><span className={styles.perfValRed}>54%</span></td>
                      <td><span className={styles.perfValRed}>$4,100</span></td>
                      <td><span className={`${styles.incentiveTag} ${styles.incRed}`}>Under review</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className={styles.perfTableFooter}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="6.5" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M4.5 7l2 2 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>You define every metric, threshold, and incentive amount. We report the data. You make the decisions.</span>
              </div>
            </div>

            <div className={styles.perfRight}>
              <div className={`${styles.perfMetricCard} ${styles.highlightMetric}`}>
                <div className={styles.perfMetricInner}>
                  <div className={`${styles.perfMetricLabel} ${styles.whiteText}`}>You define — we measure</div>
                  <div className={`${styles.perfMetricTitle} ${styles.whiteText}`}>Incentive structure is entirely yours</div>
                  <div className={`${styles.perfMetricDesc} ${styles.whiteText}`}>Dollar bonuses, percentage of collections, tiered pay bands, session-count thresholds — any compensation model you can describe, we can track and report.</div>
                  <div className={styles.perfMetricOptions}>
                    <span className={`${styles.perfOpt} ${styles.perfOptDark}`}>$ flat bonus</span>
                    <span className={`${styles.perfOpt} ${styles.perfOptDark}`}>% of revenue</span>
                    <span className={`${styles.perfOpt} ${styles.perfOptDark}`}>Tiered bands</span>
                    <span className={`${styles.perfOpt} ${styles.perfOptDark}`}>Session targets</span>
                    <span className={`${styles.perfOpt} ${styles.perfOptDark}`}>Custom formula</span>
                  </div>
                </div>
              </div>

              <div className={styles.perfMetricCard}>
                <div className={styles.perfMetricLabel}>Performance metrics tracked</div>
                <div className={styles.perfMetricOptions}>
                  <span className={`${styles.perfOpt} ${styles.perfOptGreen}`}>Sessions completed</span>
                  <span className={`${styles.perfOpt} ${styles.perfOptGreen}`}>Note sign-off rate</span>
                  <span className={`${styles.perfOpt} ${styles.perfOptGreen}`}>Net revenue generated</span>
                  <span className={`${styles.perfOpt} ${styles.perfOptGreen}`}>No-show rate</span>
                  <span className={`${styles.perfOpt} ${styles.perfOptGreen}`}>Treatment plan compliance</span>
                  <span className={`${styles.perfOpt} ${styles.perfOptGreen}`}>Client retention</span>
                  <span className={`${styles.perfOpt} ${styles.perfOptGreen}`}>Payer mix profitability</span>
                  <span className={`${styles.perfOpt} ${styles.perfOptGreen}`}>Cost per session</span>
                  <span className={`${styles.perfOpt} ${styles.perfOptGreen}`}>Documentation timeliness</span>
                </div>
              </div>

              <div className={styles.perfMetricCard}>
                <div className={styles.perfMetricLabel}>What this tells you</div>
                <div className={styles.perfMetricTitle}>Who to reward. Who to replace.</div>
                <div className={styles.perfMetricDesc}>A provider billing 90 sessions a month with 100% note compliance and $18K in net revenue is a different asset than one billing 40 sessions with 54% compliance and a net drain on operations. Now you have the data to act on that difference — not just feel it.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RULES */}
      <section className={styles.rules}>
        <div className={styles.container}>
          <div className={styles.rulesInner}>
            <div className={styles.rulesTag}>How it works</div>
            <h2>You set the compliance rules.<br /><em>We enforce them — completely.</em></h2>
            <p>Define your documentation windows, review cycles, co-signature requirements, and escalation paths once. The engine runs them forever across every provider, every task, every day.</p>
            <div className={styles.rulesGrid}>
              <div className={styles.ruleCard}>
                <div className={styles.ruleIcon}>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M11 3l2 5h5l-4 3 1.5 5L11 13l-4.5 3 1.5-5L4 8h5L11 3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className={styles.ruleTitle}>You configure the rules</div>
                <div className={styles.ruleDesc}>Note signing windows, review cycles, co-sig requirements, escalation paths — set once, enforced always.</div>
              </div>
              <div className={styles.ruleCard}>
                <div className={styles.ruleIcon}>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <circle cx="11" cy="11" r="8.5" stroke="currentColor" strokeWidth="1.4"/>
                    <path d="M8 11l2.5 2.5 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className={styles.ruleTitle}>We enforce them automatically</div>
                <div className={styles.ruleDesc}>SMS, email, and AI calls fire on your defined schedule. No human triggers needed. No tasks fall through.</div>
              </div>
              <div className={styles.ruleCard}>
                <div className={styles.ruleIcon}>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <circle cx="11" cy="11" r="8.5" stroke="currentColor" strokeWidth="1.4"/>
                    <path d="M7.5 11h7M11 7.5v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className={styles.ruleTitle}>Supervisors only when needed</div>
                <div className={styles.ruleDesc}>Escalation is the last step. Supervisors are notified only after all automated channels have been exhausted.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.finalCta}>
        <div className={styles.container}>
          <div className={styles.finalCtaTag}>Provider Engagement Engine</div>
          <h2 className={styles.finalCtaTitle}>Stop losing supervisor hours to documentation —<br />and start knowing who your best providers are.</h2>
          <p className={styles.finalCtaSub}>Automated compliance, full performance reporting, and incentive tracking — all in one engine. Know who to reward, who to develop, and who is a drain on your operations.</p>
          <div className={styles.finalBtns}>
            <Link href="/contact#contact-form" className={styles.btnWhite} target="_blank" rel="noopener noreferrer">
              Book a demo
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7.5 2.5l4 4.5-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href={`tel:${siteConfig.phoneRaw}`} className={styles.btnGhost}>{siteConfig.phoneLabel}: {siteConfig.phoneDisplay}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
