"use client";

import React from "react";
import Link from "next/link";
import siteConfig from "@/config/site";
import styles from "./ClientEngagement.module.css";

export function ClientEngagement() {
  return (
    <main className={styles.main}>
      {/* HERO */}
      <header className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div>
              <div className={styles.heroEyebrow}>
                <span className={styles.liveDot}></span>
                Client Engagement Engine
              </div>
              <h1 className={styles.heroTitle}>
                Every slot filled.<br />
                Every client re-engaged.<br />
                <em>Zero effort from you.</em>
              </h1>
              <p className={styles.heroSub}>
                Automated SMS, email, and AI calling that chases appointment confirmations, re-engages lapsed clients, enforces form completion, and tracks clinical progress — all on autopilot. You set the rules. We run them.
              </p>
              <div className={styles.heroStatRow}>
                <div className={styles.heroStat}>
                  <div className={styles.heroStatNum}>88%+</div>
                  <div className={styles.heroStatDesc}>reduction in no-show rate</div>
                </div>
                <div className={styles.heroStatDivider}></div>
                <div className={styles.heroStat}>
                  <div className={styles.heroStatNum}>3×</div>
                  <div className={styles.heroStatDesc}>outreach channels working simultaneously</div>
                </div>
                <div className={styles.heroStatDivider}></div>
                <div className={styles.heroStat}>
                  <div className={styles.heroStatNum}>100%</div>
                  <div className={styles.heroStatDesc}>automated — no staff effort required</div>
                </div>
              </div>
              <div className={styles.heroBtns}>
                <Link href="/contact#contact-form" className={styles.btnPrimary} target="_blank" rel="noopener noreferrer">
                  See it in action
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M2 6.5h9M7 2.5l4 4-4 4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link href="/pricing" className={styles.btnOutlineWhite}>View pricing →</Link>
              </div>
            </div>

            <div className={styles.heroFlow}>
              <div className={styles.flowCard}>
                <div className={styles.flowCardHeader}>
                  <div className={styles.flowCardIcon} style={{ background: "rgba(61,189,148,0.15)" }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="6" stroke="#3dbd94" strokeWidth="1.3"/>
                      <path d="M5 7l1.5 1.5 2.5-2.5" stroke="#3dbd94" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className={styles.flowCardTitle}>Appointment: Tomorrow 2pm — Dr. Martinez</div>
                  <div className={`${styles.flowCardBadge} ${styles.badgeAuto}`}>LIVE</div>
                </div>
                <div className={styles.flowCardBody}>
                  <div className={styles.flowStep}>
                    <div className={`${styles.flowStepDot} ${styles.dotGreen}`}>1</div>
                    <div className={styles.flowStepText}>SMS reminder sent → no reply after 4hrs</div>
                    <div className={styles.flowStepStatus}>✓ Sent</div>
                  </div>
                  <div className={styles.flowConnector}><div className={styles.flowConnectorLine}></div></div>
                  <div className={styles.flowStep}>
                    <div className={`${styles.flowStepDot} ${styles.dotGreen}`}>2</div>
                    <div className={styles.flowStepText}>Email reminder sent → opened, not confirmed</div>
                    <div className={styles.flowStepStatus}>✓ Opened</div>
                  </div>
                  <div className={styles.flowConnector}><div className={styles.flowConnectorLine}></div></div>
                  <div className={styles.flowStep}>
                    <div className={`${styles.flowStepDot} ${styles.dotAmber}`}>3</div>
                    <div className={styles.flowStepText}>AI call initiated — confirm or reschedule</div>
                    <div className={styles.flowStepStatus} style={{ color: "var(--amber-light)" }}>Calling...</div>
                  </div>
                  <div className={styles.flowConnector}><div className={styles.flowConnectorLine}></div></div>
                  <div className={styles.flowStep}>
                    <div className={`${styles.flowStepDot} ${styles.dotRed}`}>4</div>
                    <div className={styles.flowStepText}>If no confirm → slot opened & backfill triggered</div>
                    <div className={styles.flowStepStatus} style={{ color: "rgba(255,255,255,0.35)" }}>Pending</div>
                  </div>
                </div>
              </div>

              <div className={styles.flowCard}>
                <div className={styles.flowCardHeader}>
                  <div className={styles.flowCardIcon} style={{ background: "rgba(251,191,36,0.12)" }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2v6M7 10v2" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  </div>
                  <div className={styles.flowCardTitle}>Client Re-engagement Triggered</div>
                  <div className={`${styles.flowCardBadge} ${styles.badgeAmber}`}>45 days inactive</div>
                </div>
                <div className={styles.flowCardBody}>
                  <div className={styles.flowStep}>
                    <div className={`${styles.flowStepDot} ${styles.dotAmber}`}>!</div>
                    <div className={styles.flowStepText}>Jamie H. — last session 45 days ago. Threshold exceeded.</div>
                    <div className={styles.flowStepStatus} style={{ color: "var(--amber-light)" }}>Auto-triggered</div>
                  </div>
                  <div className={styles.flowConnector}><div className={styles.flowConnectorLine}></div></div>
                  <div className={styles.flowStep}>
                    <div className={`${styles.flowStepDot} ${styles.dotGreen}`}>→</div>
                    <div className={styles.flowStepText}>SMS + Email + AI call sequence initiated</div>
                    <div className={styles.flowStepStatus}>Running</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.heroBottomBar}>
            <div className={styles.heroBottomItem}><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6.5" stroke="#3dbd94" strokeWidth="1.3"/><path d="M4.5 7l2 2 3-3" stroke="#3dbd94" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg> Works with any EHR</div>
            <div className={styles.heroBottomItem}><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6.5" stroke="#3dbd94" strokeWidth="1.3"/><path d="M4.5 7l2 2 3-3" stroke="#3dbd94" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg> HIPAA-compliant all channels</div>
            <div className={styles.heroBottomItem}><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6.5" stroke="#3dbd94" strokeWidth="1.3"/><path d="M4.5 7l2 2 3-3" stroke="#3dbd94" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg> You set the rules — we enforce them</div>
            <div className={styles.heroBottomItem}><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6.5" stroke="#3dbd94" strokeWidth="1.3"/><path d="M4.5 7l2 2 3-3" stroke="#3dbd94" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg> Zero staff time required</div>
          </div>
        </div>
      </header>

      {/* CHANNELS STRIP */}
      <div className={styles.channels}>
        <div className={styles.container}>
          <div className={styles.channelsInner}>
            <div className={styles.channel}>
              <div className={`${styles.channelIcon} ${styles.sms}`}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4 4h14a2 2 0 012 2v8a2 2 0 01-2 2H7l-4 3V6a2 2 0 012-2z" stroke="#1d4ed8" strokeWidth="1.4" strokeLinejoin="round"/><path d="M8 9h6M8 12h4" stroke="#1d4ed8" strokeWidth="1.4" strokeLinecap="round"/></svg>
              </div>
              <div>
                <div className={styles.channelTitle}>SMS / Text</div>
                <div className={styles.channelDesc}>Instant, high open-rate reminders and confirmations. Clients reply with a single word — confirm, cancel, or reschedule — and the system handles it automatically.</div>
                <div className={styles.smsCalendarPill}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="2" width="12" height="11" rx="2" stroke="currentColor" strokeWidth="1.3"/><path d="M1 6h12M5 2v2M9 2v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/><rect x="4" y="8" width="2.5" height="2.5" rx="0.5" fill="currentColor"/></svg>
                  Every SMS includes a calendar invite — one tap to add to Google, Apple, or Outlook
                </div>
              </div>
            </div>
            <div className={styles.channel}>
              <div className={`${styles.channelIcon} ${styles.email}`}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="3" y="5" width="16" height="12" rx="2" stroke="#1a8a66" strokeWidth="1.4"/><path d="M3 7l8 6 8-6" stroke="#1a8a66" strokeWidth="1.4" strokeLinecap="round"/></svg>
              </div>
              <div>
                <div className={styles.channelTitle}>Email</div>
                <div className={styles.channelDesc}>Branded, personalized emails with one-click confirm links. Sent on your schedule, tracked for opens and clicks, escalated automatically if unanswered.</div>
              </div>
            </div>
            <div className={styles.channel}>
              <div className={`${styles.channelIcon} ${styles.ai}`}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="9" r="4" stroke="#7c3aed" strokeWidth="1.4"/><path d="M4 19c0-3.866 3.134-7 7-7h0c3.866 0 7 3.134 7 7" stroke="#7c3aed" strokeWidth="1.4" strokeLinecap="round"/><path d="M16 6l2-2M6 6L4 4" stroke="#7c3aed" strokeWidth="1.3" strokeLinecap="round"/></svg>
              </div>
              <div>
                <div className={styles.channelTitle}>AI Voice Calls</div>
                <div className={styles.channelDesc}>When SMS and email go unanswered, AI calls the client. Natural conversation — confirm the appointment, reschedule it, or escalate to staff. Never an empty slot by default.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* APPOINTMENT REMINDERS */}
      <section className={styles.reminders}>
        <div className={styles.container}>
          <div className={styles.sectionTag}>Appointment reminders</div>
          <h2 className={styles.sectionH2}>Three reminders sent automatically.<br />AI keeps calling until they confirm.</h2>
          <p className={styles.sectionSub} style={{ maxWidth: "580px" }}>No-shows don't just waste a slot — they waste the time your provider spent preparing, the clinical momentum your client had, and the revenue you already counted on. We eliminate them.</p>

          <div className={styles.remindersGrid}>
            <div className={styles.calendarBanner}>
              <div className={styles.bannerBg}></div>
              <div className={styles.bannerIcon}>
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><rect x="3" y="5" width="20" height="19" rx="3" stroke="#4ade80" strokeWidth="1.8"/><path d="M8 3v4M18 3v4M3 12h20" stroke="#4ade80" strokeWidth="1.8" strokeLinecap="round"/><rect x="8" y="16" width="4" height="4" rx="1" fill="#4ade80"/></svg>
              </div>
              <div className={styles.bannerContent}>
                <div className={styles.bannerTag}>Every reminder includes a Calendar Invite</div>
                <div className={styles.bannerTitle}>Every SMS and email reminder automatically includes a <em style={{ color: "#4ade80" }}>calendar invite.</em></div>
                <div className={styles.bannerDesc}>Clients tap "Add to Calendar" directly from their SMS or email — the appointment lands in Google Calendar, Apple Calendar, or Outlook instantly. No copy-pasting, no forgetting, no excuses. The single biggest reason clients no-show is they simply forgot. We eliminate that entirely.</div>
              </div>
              <div className={styles.bannerStat}>
                <div className={styles.statBox}>
                  <div className={styles.statNum}>#1</div>
                  <div className={styles.statLbl}>reason clients no-show: they forgot</div>
                </div>
                <div className={styles.statFixed}>We fix this.</div>
              </div>
            </div>

            <div className={styles.reminderSequence}>
              {[
                { num: "1", title: "First reminder — 72 hours out", desc: "SMS + Email sent simultaneously. Client taps to confirm in one click. If confirmed, sequence stops.", tags: ["SMS", "Email"], hasCalendar: true, theme: "green" },
                { num: "2", title: "Second reminder — 24 hours out", desc: "If still unconfirmed, second SMS + Email with reschedule option. Urgency increased, tone personalized.", tags: ["SMS", "Email"], hasCalendar: true, theme: "green" },
                { num: "3", title: "Third reminder — 2 hours out", desc: "Final SMS sent. If still no confirmation, AI voice call triggers — natural conversation, confirm or reschedule on the call.", tags: ["SMS", "AI Call"], theme: "amber" },
                { num: "AI", title: "AI keeps calling until confirmed", desc: "If the client doesn't pick up, AI calls back at intervals you define. Once they answer, it handles the full confirmation or rescheduling conversation — no staff needed.", tags: ["All channels"], theme: "ai" }
              ].map((step, i) => (
                <div className={styles.reminderStep} key={i}>
                  <div className={`${styles.reminderStepNum} ${styles[`stepNum${step.theme.charAt(0).toUpperCase() + step.theme.slice(1)}`]}`}>{step.num}</div>
                  <div className={styles.reminderStepContent}>
                    <div className={styles.reminderStepTitle}>{step.title}</div>
                    <div className={styles.reminderStepDesc}>{step.desc}</div>
                    <div className={styles.stepTags}>
                      {step.tags.map((tag, j) => (
                        <span key={j} className={`${styles.stepTag} ${styles[`tag${tag.replace(" ", "")}`]}`}>{tag}</span>
                      ))}
                      {step.hasCalendar && <span className={styles.tagCalendar}>📅 Calendar invite</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.noshowsCard}>
              <div className={styles.noshowsInner}>
                <div className={styles.noshowsHeadline}>Cut no-shows<br />by 88%+</div>
                <div className={styles.noshowsSub}>Industry average no-show rate in BH: 22–30%. With our engagement engine:</div>
                <div className={styles.noshowsPct}>88%+</div>
                <div className={styles.noshowsPctLabel}>reduction</div>
                <div className={styles.noshowsStatDesc}>in no-show and late-cancel rate within 60 days of go-live</div>
                <div className={styles.noshowsCalc}>
                  <div className={styles.calcRow}><span className={styles.calcLabel}>Monthly sessions</span><span className={styles.calcVal}>400</span></div>
                  <div className={styles.calcRow}><span className={styles.calcLabel}>Avg no-show rate before</span><span className={styles.calcVal}>25%</span></div>
                  <div className={styles.calcRow}><span className={styles.calcLabel}>Sessions lost per month</span><span className={styles.calcVal}>100</span></div>
                  <div className={styles.calcDivider}></div>
                  <div className={styles.calcRow}><span className={styles.calcLabel}>Sessions recovered (88%)</span><span className={`${styles.calcVal} ${styles.greenText}`}>88 sessions</span></div>
                  <div className={styles.calcRow}><span className={styles.calcLabel}>Revenue recovered @ $150/session</span><span className={`${styles.calcVal} ${styles.greenText}`}>$13,200/mo</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RE-ENGAGEMENT */}
      <section className={styles.reengage}>
        <div className={styles.container}>
          <div className={styles.sectionTag}>Client re-engagement</div>
          <h2 className={styles.sectionH2}>Lapsed clients are revenue<br />waiting to be recovered.</h2>
          <p className={styles.sectionSub} style={{ maxWidth: "580px" }}>When a client goes quiet — you decide the threshold. We start the re-engagement sequence. No manual follow-up. No clients falling through the cracks.</p>

          <div className={styles.reengageGrid}>
            <div>
              <div className={styles.reengageCard} style={{ marginBottom: "14px" }}>
                <div className={styles.reengageCardHeader}>
                  <div className={styles.reengageCardIcon}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7.5" stroke="currentColor" strokeWidth="1.4"/><path d="M9 5v4.5l3 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <div>
                    <div className={styles.reengageCardTitle}>You set the trigger threshold</div>
                    <div className={styles.reengageCardSub}>Days since last session, missed appointments, or discharge — you choose</div>
                  </div>
                </div>
                {[
                  { text: "No session in 30 days → Re-engagement starts", badge: "Active", theme: "brand" },
                  { text: "Missed 2 consecutive appointments → Full sequence", badge: "Active", theme: "brand" },
                  { text: "Intake completed but no 2nd session booked → Nudge", badge: "Custom", theme: "amber" },
                  { text: "Discharged 90 days ago → Wellness check-in sequence", badge: "Custom", theme: "purple" }
                ].map((trigger, i) => (
                  <div className={styles.reengageTrigger} key={i}>
                    <div className={`${styles.triggerDot} ${styles[`dot${trigger.theme}`]}`}></div>
                    <div className={styles.triggerText}>{trigger.text}</div>
                    <span className={`${styles.triggerBadge} ${styles[`badge${trigger.theme}`]}`}>{trigger.badge}</span>
                  </div>
                ))}
              </div>

              <div className={styles.reengageCard}>
                <div className={styles.reengageCardHeader}>
                  <div className={styles.reengageCardIcon}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 3.5c0 6.351 5.149 11.5 11.5 11.5h1a1 1 0 001-1v-2a1 1 0 00-.7-.95l-2.5-.71a1 1 0 00-1.1.38l-.73 1.05a8.7 8.7 0 01-4.05-4.05l1.05-.73a1 1 0 00.38-1.1l-.71-2.5A1 1 0 006.5 2.5H4.5a1 1 0 00-1 1v0z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
                  </div>
                  <div>
                    <div className={styles.reengageCardTitle}>Full omni-channel sequence fires automatically</div>
                    <div className={styles.reengageCardSub}>SMS → Email → AI Voice — all methods until response</div>
                  </div>
                </div>
                {[
                  { dot: "green", text: "Day 1: Warm SMS — \"We miss you, let's get you back on schedule\"" },
                  { dot: "green", text: "Day 3: Personalized email with available slots" },
                  { dot: "amber", text: "Day 7: AI voice call — schedule or document decline" },
                  { dot: "grey", text: "If no response: flagged for clinical review, staff notified" }
                ].map((step, i) => (
                  <div className={styles.reengageTrigger} key={i} style={i === 3 ? { border: "none" } : {}}>
                    <div className={`${styles.triggerDot} ${styles[`dot${step.dot}`]}`}></div>
                    <div className={styles.triggerText}>{step.text}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.reengageRight}>
              <h3>Every lapsed client is a revenue opportunity you're currently leaving on the table.</h3>
              <p>Most agencies lose 15–20% of their active client roster to drift — not discharge. Those clients didn't choose to leave. They just got busy, had a bad week, and never rebooked. Your current process probably relies on a staff member remembering to follow up. Ours doesn't rely on anyone.</p>
              <p>We run the re-engagement sequence automatically, document every touch for compliance, and only escalate to your team when a human is genuinely needed.</p>
              <div className={styles.reengageRevenue}>
                <div className={styles.reengageRevenueNum}>$8K+</div>
                <div className={styles.reengageRevenueLabel}>average monthly revenue recovered from re-engaged lapsed clients per 200-session practice</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORMS & SCREENINGS */}
      <section className={styles.forms}>
        <div className={styles.container}>
          <div className={styles.sectionTag}>Forms & screenings</div>
          <h2 className={styles.sectionH2}>Session time is for care —<br />not paperwork.</h2>
          <p className={styles.sectionSub} style={{ maxWidth: "580px" }}>When clients arrive with incomplete intake forms, screenings, or assessments, the session starts late and ends inefficiently. We fix that before they ever walk in the door.</p>

          <div className={styles.formsGrid}>
            {[
              { title: "Automated form reminders", desc: "If a client hasn't completed intake, consent, or pre-session screening forms in their portal, we automatically remind them via SMS, email, and AI call until it's done — on the timeline you set.", hl: "Forms completed before session — not during", icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3" y="3" width="14" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.4"/><path d="M7 7h6M7 10h6M7 13h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg> },
              { title: "Screening & assessment completion", desc: "PHQ-9, GAD-7, PCL-5, or any custom screening — if it's due and not submitted, every channel fires. Clinicians walk in prepared, not scrambling.", hl: "Clinical time spent on care, not data collection", icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 3l1.5 3.5H17l-4.5 3.2 1.5 4.3-4.5-3-4.5 3 1.5-4.3L3 6.5h5.5L10 3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg> },
              { title: "Progress tracking & graphing", desc: "Every completed screening is graphed over time — improving, stable, or declining. You see clinical progress at a glance without digging through session notes.", hl: "Visual trend lines across every client", icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 3C6.13 3 3 6.13 3 10s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm0 12.25A5.25 5.25 0 1110 4.75a5.25 5.25 0 010 10.5z" stroke="currentColor" strokeWidth="1.4"/><path d="M10 7v3.5l2.5 1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg> },
              { title: "Supervisor auto-loop on out-of-range scores", desc: "If a client's screening score falls outside the threshold you define — a PHQ-9 above 15, a sudden spike in PCL-5 — the supervisor is automatically notified. Immediate, documented, no manual review required.", hl: "Out-of-range alert → supervisor notified instantly", isSpecial: true, icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="6" r="3.5" stroke="currentColor" strokeWidth="1.4"/><path d="M4 17c0-3.31 2.69-6 6-6s6 2.69 6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><circle cx="16" cy="5" r="2" fill="#f87171"/></svg> }
            ].map((feature, i) => (
              <div className={styles.formFeature} key={i}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <div className={styles.featureTitle}>{feature.title}</div>
                <div className={styles.featureDesc}>{feature.desc}</div>
                <div className={`${styles.featureHighlight} ${feature.isSpecial ? styles.hlSpecial : ""}`}>
                  {feature.isSpecial ? (
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><circle cx="6.5" cy="6.5" r="6" stroke="currentColor" strokeWidth="1.2"/><path d="M6.5 4v3M6.5 9v.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
                  ) : (
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><circle cx="6.5" cy="6.5" r="6" stroke="currentColor" strokeWidth="1.2"/><path d="M4 6.5l2 2 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  )}
                  {feature.hl}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLINICAL PROGRESS */}
      <section className={styles.progress}>
        <div className={styles.container}>
          <div className={styles.progressInner}>
            <div className={styles.sectionTag}>Clinical progress tracking</div>
            <h2 className={styles.sectionH2}>Graph every client's trajectory.<br />Catch decline before it becomes a crisis.</h2>
            <p className={styles.sectionSub}>Screening scores aren't just compliance checkboxes. They're clinical signals. We graph them automatically, flag the ones moving the wrong direction, and loop in supervisors the moment scores go outside your defined safe range.</p>

            <div className={styles.progressGrid}>
              <div className={styles.chartCard}>
                <div className={styles.chartHeader}>
                  <div className={styles.chartTitle}>PHQ-9 Trend — Active Caseload</div>
                  <div className={styles.chartAlert}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><circle cx="5" cy="5" r="4.5" stroke="#f87171" strokeWidth="1"/><path d="M5 3v2.5M5 7v.3" stroke="#f87171" strokeWidth="1.2" strokeLinecap="round"/></svg>
                    2 alerts active
                  </div>
                </div>
                <div className={styles.chartBody}>
                  {[
                    { name: "Jamie H. — Session 12", score: "PHQ-9: 6 (was 14)", width: "43%", trend: "improving", label: "↑ Improving — down 57% from intake" },
                    { name: "Alex T. — Session 8", score: "PHQ-9: 17 (was 9)", width: "85%", trend: "declining", label: "↓ Declining — score increased 89% · Supervisor alerted", hasAlert: true },
                    { name: "Marcus R. — Session 5", score: "PHQ-9: 11 (was 12)", width: "55%", trend: "stable", label: "→ Stable — minor improvement over 5 sessions" },
                    { name: "Sara W. — Session 14", score: "PHQ-9: 3 (was 16)", width: "19%", trend: "improving", label: "↑ Significant improvement — 81% reduction" }
                  ].map((client, i) => (
                    <React.Fragment key={i}>
                      <div className={styles.chartClient} style={i === 2 ? { marginTop: "14px" } : {}}>
                        <div className={styles.chartClientHeader}>
                          <span className={styles.clientName}>{client.name}</span>
                          <span className={styles.clientScore}>{client.score}</span>
                        </div>
                        <div className={styles.barWrap}><div className={`${styles.bar} ${styles[client.trend]}`} style={{ width: client.width }}></div></div>
                        <div className={`${styles.trendText} ${styles[`trend${client.trend.charAt(0).toUpperCase() + client.trend.slice(1)}`]}`}>{client.label}</div>
                      </div>
                      {client.hasAlert && (
                        <div className={styles.supervisorAlert}>
                          <div className={styles.alertIcon}>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6.5" stroke="#f87171" strokeWidth="1.2"/><path d="M7 4v3M7 9v.5" stroke="#f87171" strokeWidth="1.5" strokeLinecap="round"/></svg>
                          </div>
                          <div className={styles.alertText}><strong>Supervisor notified automatically</strong> — Alex T. PHQ-9 exceeded threshold of 15. Clinical review flagged. No action needed from provider.</div>
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className={styles.progressFeatures}>
                {[
                  { title: "Automatic score graphing", desc: "Every completed screening is added to a visual trend line — no manual charting, no data entry. Just a clear picture of where every client is headed." },
                  { title: "You define the thresholds", desc: "Set your own alert thresholds per screening type. PHQ-9 above 15, PCL-5 spike, GAD-7 increase — you define what triggers a supervisor notification." },
                  { title: "Supervisor auto-loop", desc: "When a score hits your threshold, the supervisor is notified immediately — by SMS, email, or both. Documented, timestamped, and logged for compliance." },
                  { title: "No manual review required", desc: "The system watches every client's scores after every session. Your supervisors don't have to remember to check — they only get pulled in when it matters." }
                ].map((feat, i) => (
                  <div className={styles.progressFeature} key={i}>
                    <div className={styles.featTitle}>{feat.title}</div>
                    <div className={styles.featDesc}>{feat.desc}</div>
                  </div>
                ))}
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
            <h2>You make the rules.<br /><em>We enforce them — completely.</em></h2>
            <p>No staff time. No manual follow-up. No dropped balls. You configure the thresholds, channels, and escalation paths once. The engine runs them forever, on every client and provider, every day.</p>
            <div className={styles.rulesGrid}>
              <div className={styles.ruleCard}>
                <div className={styles.ruleIcon}>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 3l2 5h5l-4 3 1.5 5L11 13l-4.5 3 1.5-5L4 8h5L11 3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg>
                </div>
                <div className={styles.ruleTitle}>You configure the rules</div>
                <div className={styles.ruleDesc}>Set timing, thresholds, channels, and escalation paths for every workflow once. Change them anytime.</div>
              </div>
              <div className={styles.ruleCard}>
                <div className={styles.ruleIcon}>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8.5" stroke="currentColor" strokeWidth="1.4"/><path d="M8 11l2.5 2.5 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div className={styles.ruleTitle}>We run them automatically</div>
                <div className={styles.ruleDesc}>SMS, email, and AI calls fire on the schedule you defined — no human needed to trigger anything.</div>
              </div>
              <div className={styles.ruleCard}>
                <div className={styles.ruleIcon}>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 4v5M11 13v5M4 11h5M13 11h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
                </div>
                <div className={styles.ruleTitle}>Staff only involved when needed</div>
                <div className={styles.ruleDesc}>Escalation is the last step, not the first. Your team focuses on care — not chasing paperwork or no-shows.</div>
              </div>
            </div>
            <div className={styles.rulesBtns}>
              <Link href="/contact#contact-form" className={styles.btnPrimary} target="_blank" rel="noopener noreferrer">
                See a live demo
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5h9M7 2.5l4 4-4 4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
              <Link href="/pricing" className={styles.btnOutlineWhite}>View pricing →</Link>
              <Link href="/provider-engagement" className={styles.btnOutlineWhite}>Provider Engagement Engine →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.finalCta}>
        <div className={styles.container}>
          <div className={styles.finalCtaTag}>Client Engagement Engine</div>
          <h2 className={styles.finalCtaTitle}>Stop losing revenue to no-shows<br />& lapsed clients.</h2>
          <p className={styles.finalCtaSub}>Every empty slot and every lapsed client is revenue left on the table. The client engagement engine recovers it — automatically, on every channel, with zero staff effort.</p>
          <div className={styles.finalBtns}>
            <Link href="/contact#contact-form" className={styles.btnWhite} target="_blank" rel="noopener noreferrer">
              Book a free demo
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
