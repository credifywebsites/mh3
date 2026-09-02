"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./AppointmentEngagement.module.css";

/* ─── Jiggling No-Show Calculator CTA ─────────────────────────── */
function NoShowCalcBtn() {
  return (
    <a
      href="/credify-no-show-calculator"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.noShowBtn}
      aria-label="Open No-Show Recovery Calculator"
    >
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M9 9h.01M15 9h.01M9 15h6"/>
      </svg>
      No-Show Calculator
      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5"/>
      </svg>
    </a>
  );
}

export function AppointmentEngagement() {
  // Calculator State
  const [sessions, setSessions] = useState(400);
  const [rate, setRate] = useState(25);
  const [revenue, setRevenue] = useState(150);

  const RECOVERY_RATE = 0.88;

  const lost = Math.round(sessions * (rate / 100));
  const recovered = Math.round(lost * RECOVERY_RATE);
  const monthly = recovered * revenue;
  const annual = monthly * 12;

  const fmtNum = (n: number) => n.toLocaleString("en-US");
  const fmtMoney = (n: number) => "$" + Math.round(n).toLocaleString("en-US");

  return (
    <main className={styles.main}>
      {/* HERO */}
      <header className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div>
              <span className={`${styles.pill} ${styles.onDark} ${styles.heroPill}`}>
                <span className={styles.dot}></span>
                Appointment Engagement Engine
              </span>
              <h1 className={styles.heroTitle}>
                Every empty slot is <em>revenue</em>. We fill it before you notice.
              </h1>
              <p className={styles.heroSub}>
                SMS, email, and AI voice — working in sequence to chase, confirm, and rebook every appointment automatically. <strong style={{ color: "var(--white)", fontWeight: 500 }}>Most clinics recover $13K+ per month within 60 days of go-live.</strong>
              </p>

              <div className={styles.perfBadge}>
                <div className={styles.ic}>
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="currentColor" strokeWidth="1.6"/>
                    <path d="M7 10.5L9 12.5L13 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className={styles.body}>
                  <div className={styles.lead}>We get paid <em>on performance</em> — not subscriptions.</div>
                  <div className={styles.sub}>If we don't recover revenue, you don't pay. Period.</div>
                </div>
              </div>

              <div className={styles.heroCta} style={{ marginTop: "32px" }}>
                <Link href="/contact#contact-form" className={`${styles.btn} ${styles.btnPrimary}`} target="_blank" rel="noopener noreferrer">
                  Book a demo
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                {/* <Link href="#ai-voice" className={`${styles.btn} ${styles.btnSecondary} ${styles.btnOnDark}`}>See the AI voice agent</Link> */}
                <NoShowCalcBtn />
              </div>
              <div className={styles.heroTrust}>
                <span>HIPAA-compliant</span>
                <span className={styles.sep}></span>
                <span>SOC 2 Type II</span>
                <span className={styles.sep}></span>
                <span>Works with any EHR</span>
              </div>
            </div>

            <div>
              <div className={styles.callCard}>
                <div className={styles.callHead}>
                  <div>
                    <div className={styles.label}><span className={styles.dot}></span>Live AI call · outbound</div>
                    <div className={styles.name}>Credify · 3rd reminder attempt</div>
                  </div>
                  <div className={styles.duration}>00:42</div>
                </div>
                <div className={styles.transcript}>
                  <div className={`${styles.msg} ${styles.fromAi}`}>
                    <span className={styles.who}>Credify</span>
                    <div className={styles.bubble}>Hi, this is calling about your Tuesday 2 pm session with Rachel Whitaker. We didn't hear back on the reminders — will you be making it in?</div>
                  </div>
                  <div className={`${styles.msg} ${styles.fromClient}`}>
                    <span className={styles.who}>Client</span>
                    <div className={styles.bubble}>Oh — I forgot. Tuesday won't work, sorry.</div>
                  </div>
                  <div className={`${styles.msg} ${styles.fromAi}`}>
                    <span className={styles.who}>Credify</span>
                    <div className={styles.bubble}>No problem. I have Wednesday at 10 or Thursday at 2 — either work?</div>
                  </div>
                  <div className={`${styles.msg} ${styles.fromClient}`}>
                    <span className={styles.who}>Client</span>
                    <div className={styles.bubble}>Thursday's good.</div>
                  </div>
                </div>
                <div className={styles.callFoot}>
                  <div className={styles.outcome}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Rescheduled · Thu 2pm
                  </div>
                  <div className={styles.meta}>Auto-booked · written to EHR</div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <div className={styles.num}><em>88 </em>%+</div>
              <div className={styles.lbl}>Reduction in no-show rate within 60 days of go-live.</div>
            </div>
            <div className={styles.heroStat}>
              <div className={styles.num}><em>3×</em></div>
              <div className={styles.lbl}>Outreach channels working in sequence — SMS, email, AI voice.</div>
            </div>
            <div className={styles.heroStat}>
              <div className={styles.num}><em>$13K</em>+</div>
              <div className={styles.lbl}>Average monthly revenue recovered per 400-session practice.</div>
            </div>
            <div className={styles.heroStat}>
              <div className={styles.num}><em>0 </em>min</div>
              <div className={styles.lbl}>Of staff time required. Set the rules once. We run them.</div>
            </div>
          </div>
        </div>
      </header>

      {/* AI VOICE FEATURE */}
      <section className={styles.aiVoice} id="ai-voice">
        <div className={styles.container}>
          <div className={styles.aiVoiceGrid}>
            <div>
              <span className={styles.pill}><span className={styles.dot}></span>The differentiator</span>
              <h2>Where SMS and email <em>give up</em>, our AI voice agent picks up the phone.</h2>
              <p className={styles.lede}>Every other reminder tool stops at the unanswered text. Ours doesn't. When the email and SMS go cold, the AI dials — and holds a real conversation until the appointment is confirmed, rescheduled, or formally declined.</p>
              <div className={styles.aiVoicePoints}>
                <div className={styles.aiVoicePoint}>
                  <div className={styles.icon}>
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <path d="M3 5C3 3.89543 3.89543 3 5 3H6.27924C6.71557 3 7.10101 3.28215 7.23288 3.69829L8.45901 7.56822C8.61023 8.04565 8.39553 8.5601 7.94937 8.78732L7.07028 9.23454C8.24238 11.2358 9.76418 12.7576 11.7655 13.9297L12.2127 13.0506C12.4399 12.6045 12.9544 12.3898 13.4318 12.541L17.3017 13.7671C17.7178 13.899 18 14.2844 18 14.7208V16C18 17.1046 17.1046 18 16 18H15C8.37258 18 3 12.6274 3 6V5Z" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Natural conversation, not a robocall</h4>
                    <p>Voice quality clients don't realize is AI. Handles confirmations, schedule changes, and questions — escalates to staff only when genuinely needed.</p>
                  </div>
                </div>
                <div className={styles.aiVoicePoint}>
                  <div className={styles.icon}>
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M10 6V10L13 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Calls back until they pick up</h4>
                    <p>Set the retry intervals you want. The AI keeps trying — voicemail-aware, time-of-day aware — until someone answers and the slot is resolved one way or another.</p>
                  </div>
                </div>
                <div className={styles.aiVoicePoint}>
                  <div className={styles.icon}>
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <path d="M5 3H13L17 7V17C17 17.5523 16.5523 18 16 18H5C4.44772 18 4 17.5523 4 17V4C4 3.44772 4.44772 3 5 3Z" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M13 3V7H17" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Books on the call. Writes to the EHR.</h4>
                    <p>No callbacks, no front-desk follow-up. The result lands in your EHR before the call ends — confirmed, rescheduled, or marked for backfill.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.aiVoiceVisual}>
              <div className={styles.vlabel}><span className={styles.liveDot}></span>Live retry sequence</div>
              <h3>Aisha W. · Tue 10am</h3>
              <div className={styles.voiceAttempts}>
                <div className={styles.attempt}>
                  <div className={styles.num}>1</div>
                  <div className={styles.info}>
                    <div className={styles.when}>Mon 4:12 PM</div>
                    <div className={styles.desc}>Call — voicemail, message left</div>
                  </div>
                  <div className={styles.badge}>No answer</div>
                </div>
                <div className={styles.attempt}>
                  <div className={styles.num}>2</div>
                  <div className={styles.info}>
                    <div className={styles.when}>Mon 7:30 PM</div>
                    <div className={styles.desc}>Call — no answer, no voicemail</div>
                  </div>
                  <div className={styles.badge}>No answer</div>
                </div>
                <div className={`${styles.attempt} ${styles.success}`}>
                  <div className={styles.num}>3</div>
                  <div className={styles.info}>
                    <div className={styles.when}>Tue 8:05 AM</div>
                    <div className={styles.desc}>Connected · 1m 42s · rescheduled to Thu</div>
                  </div>
                  <div className={styles.badge}>Resolved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className={styles.problem}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.pill}><span className={styles.dot}></span>The problem</span>
            <h2 className={styles.sectionTitle}>Reminders alone aren't enough. The replies you don't get are the ones that <em>empty your schedule</em>.</h2>
            <p className={styles.sectionLede}>Industry no-show rate in behavioral health: 15%–18%. Most of those clients didn't choose to skip — they just forgot, and nobody followed up.</p>
            <div style={{ marginTop: 24 }}><NoShowCalcBtn /></div>
          </div>

          <div className={styles.problemGrid}>
            <div className={`${styles.pCard} ${styles.light}`}>
              <div className={styles.pDots}>
                <div className={`${styles.pDot} ${styles.lit}`}></div>
                <div className={`${styles.pDot} ${styles.silent} ${styles.delayed}`}></div>
                <div className={`${styles.pDot} ${styles.silent} ${styles.delayed2}`}></div>
              </div>
              <div className={styles.pStat}>1<sup>in 3</sup></div>
              <div className={styles.pBody}>
                <h3>Disappear into silence</h3>
                <p>SMS and email get opened — they just don't get answered. The clients who never tap "confirm" are the ones who never show up.</p>
              </div>
            </div>

            <div className={`${styles.pCard} ${styles.dark}`}>
              <div className={styles.pEyebrow}>Every empty chair</div>
              <div className={styles.lossStack}>
                <div className={`${styles.lossTicket} ${styles.t1}`}>
                  <span className={styles.label}>Tue 9am · no-show</span>
                  <span className={styles.amount}>$150</span>
                </div>
                <div className={`${styles.lossTicket} ${styles.t2}`}>
                  <span className={styles.label}>Wed 2pm · no-show</span>
                  <span className={styles.amount}>$150</span>
                </div>
                <div className={`${styles.lossTicket} ${styles.t3}`}>
                  <span className={styles.label}>Today · no-show</span>
                  <span className={styles.amount}>– $150</span>
                </div>
              </div>
              <div className={styles.pStatBig}><span className={styles.currency}>$</span><span className={styles.digits}>150</span><span className={styles.plus}>+</span></div>
              <div className={styles.pBody}>
                <h3>Lost the moment the chair stays empty</h3>
                <p>Therapist time, the room, the prep, and the clinical momentum the client had — gone in the time it takes a phone to go to voicemail.</p>
              </div>
            </div>

            <div className={`${styles.pCard} ${styles.mint}`}>
              <div className={styles.pBars}>
                <div className={`${styles.pBar} ${styles.b1}`}></div>
                <div className={`${styles.pBar} ${styles.b2}`}></div>
                <div className={`${styles.pBar} ${styles.b3}`}></div>
                <div className={`${styles.pBar} ${styles.b4}`}></div>
                <div className={`${styles.pBar} ${styles.b5}`}></div>
                <div className={`${styles.pBar} ${styles.b6}`}></div>
              </div>
              <div style={{ display: "flex", alignItems: "baseline" }}>
                <div className={styles.pStat} style={{ marginBottom: 0 }}>15<sup>– 18%</sup></div>
                <div className={styles.pArrowDown}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M5 1V9M5 9L1 5M5 9L9 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  drift / yr
                </div>
              </div>
              <div className={styles.pBody}>
                <h3>Quietly stop coming back</h3>
                <p>Not discharged — drifted. They got busy, had a bad week, never rebooked. Your front desk doesn't have time to chase them.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASCADE */}
      <section className={styles.cascade}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.pill}><span className={styles.dot}></span>The cascade</span>
            <h2 className={styles.sectionTitle}>Three reminders. One <em>kept</em> appointment.</h2>
            <p className={styles.sectionLede}>A timed escalation built around how clients actually behave — quiet at first, louder if needed, AI voice when nothing else lands.</p>
            <div style={{ marginTop: 24 }}><NoShowCalcBtn /></div>
          </div>

          <div className={styles.cascadeRow}>
            <div className={styles.cascadeStep}>
              <div className={styles.stepNum}>01</div>
              <div className={styles.when}>T - 72hr</div>
              <h3>The quiet first touch</h3>
              <p>SMS and email sent simultaneously. One-tap confirm, reschedule, or cancel. Most replies come in here — sequence stops, slot is locked.</p>
              <div className={styles.channelTags}>
                <span className={styles.chTag}>SMS</span>
                <span className={styles.chTag}>Email</span>
                <span className={`${styles.chTag} ${styles.cal}`}>📅 Calendar invite</span>
              </div>
            </div>
            <div className={styles.cascadeStep}>
              <div className={styles.stepNum}>02</div>
              <div className={styles.when}>T - 24hr</div>
              <h3>A nudge, not a notification</h3>
              <p>Second SMS and email — same options, slightly more urgent tone. If they reply, the calendar updates and they get instant confirmation.</p>
              <div className={styles.channelTags}>
                <span className={styles.chTag}>SMS</span>
                <span className={styles.chTag}>Email</span>
                <span className={`${styles.chTag} ${styles.cal}`}>📅 Calendar invite</span>
              </div>
            </div>
            <div className={styles.cascadeStep}>
              <div className={styles.stepNum}>03</div>
              <div className={styles.when}>T - 2hr</div>
              <h3>AI picks up the phone</h3>
              <p>Final SMS goes out. If no confirmation, the AI voice agent dials. Natural conversation — confirms, reschedules, or releases the slot for backfill.</p>
              <div className={styles.channelTags}>
                <span className={styles.chTag}>SMS</span>
                <span className={`${styles.chTag} ${styles.voice}`}>AI voice call</span>
              </div>
            </div>
          </div>

          <div className={styles.cascadeCallout}>
            <div className={styles.icon}>
              <svg width="28" height="28" viewBox="0 0 20 20" fill="none">
                <path d="M3 5C3 3.89543 3.89543 3 5 3H6.27924C6.71557 3 7.10101 3.28215 7.23288 3.69829L8.45901 7.56822C8.61023 8.04565 8.39553 8.5601 7.94937 8.78732L7.07028 9.23454C8.24238 11.2358 9.76418 12.7576 11.7655 13.9297L12.2127 13.0506C12.4399 12.6045 12.9544 12.3898 13.4318 12.541L17.3017 13.7671C17.7178 13.899 18 14.2844 18 14.7208V16C18 17.1046 17.1046 18 16 18H15C8.37258 18 3 12.6274 3 6V5Z" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </div>
            <div>
              <h4>The AI keeps calling until they confirm</h4>
              <p>Voicemail? It calls back. Wrong time of day? It tries again later. Once they answer, the full conversation happens on that call — no callback required.</p>
            </div>
            <div className={styles.stat}>→</div>
          </div>
        </div>
      </section>

      {/* CALENDAR INVITE */}
      <section className={styles.calInvite}>
        <div className={styles.container}>
          <div className={styles.calInviteGrid}>
            <div>
              <span className={styles.pill}><span className={styles.dot}></span>Built into every reminder</span>
              <h2 className={styles.sectionTitle}>Every SMS and email includes a <em>calendar invite</em>.</h2>
              <p>Clients tap "Add to Calendar" right from the message. The appointment lands in Google, Apple, or Outlook instantly — no copy-pasting, no setting their own reminder, no forgetting.</p>
              <p>The single biggest reason clients no-show is they simply forgot. We eliminate that entirely.</p>
              <div style={{ marginTop: 20 }}><NoShowCalcBtn /></div>

              <div style={{ marginTop: "32px", paddingTop: "32px", borderTop: "1px solid var(--mint-2)" }}>
                <div className={styles.calStat}>#1</div>
                <div className={styles.calStatLabel}>Reason clients no-show: they forgot. We fix this.</div>
              </div>
            </div>

            <div className={styles.calMockup}>
              <div className={styles.calMockupHead}>
                <div className={styles.ic}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect x="3" y="4" width="14" height="13" rx="2" stroke="currentColor" strokeWidth="1.6"/>
                    <path d="M3 8H17M7 2V6M13 2V6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <div className={styles.title}>Appointment reminder</div>
                  <div className={styles.src}>From Sarah's Clinic · via SMS</div>
                </div>
              </div>
              <div className={styles.calEvent}>
                <div className={styles.day}>Tuesday, Mar 11 · 2:00 PM</div>
                <div className={styles.title}>Therapy session — Rachel Whitaker, LMFT</div>
                <div className={styles.meta}>Suite 204 · 124 Oak Ave</div>
              </div>
              <div className={styles.calAddRow}>
                <button className={styles.calAddBtn}>+ Google</button>
                <button className={styles.calAddBtn}>+ Apple</button>
                <button className={styles.calAddBtn}>+ Outlook</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI CALCULATOR */}
      <section className={styles.roi} id="calculator">
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={`${styles.pill} ${styles.onDark}`}><span className={styles.dot}></span>No-show calculator</span>
            <h2 className={styles.sectionTitle}>Run the math on <em>your</em> numbers.</h2>
            <p className={styles.sectionLede}>Drag the sliders to match your practice. We'll show you exactly how much revenue an 88% no-show reduction recovers — and remember: <strong style={{ color: "var(--white)" }}>you only pay on what we actually recover.</strong></p>
            <div style={{ marginTop: 24 }}><NoShowCalcBtn /></div>
          </div>

          <div className={styles.calcWrap}>
            <div className={styles.calcInputs}>
              <div className={styles.calcInputGroup}>
                <div className={styles.calcLabelRow}>
                  <span className={styles.calcLabel}>Monthly sessions</span>
                  <span className={styles.calcValue}>{fmtNum(sessions)}</span>
                </div>
                <input 
                  type="range" 
                  min="50" 
                  max="2000" 
                  step="10" 
                  value={sessions} 
                  onChange={(e) => setSessions(parseInt(e.target.value))}
                  className={styles.calcSlider} 
                />
                <div className={styles.calcBounds}><span>50</span><span>2,000</span></div>
              </div>

              <div className={styles.calcInputGroup}>
                <div className={styles.calcLabelRow}>
                  <span className={styles.calcLabel}>No-show rate</span>
                  <span className={styles.calcValue}>{rate}%</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="40" 
                  step="1" 
                  value={rate} 
                  onChange={(e) => setRate(parseInt(e.target.value))}
                  className={styles.calcSlider} 
                />
                <div className={styles.calcBounds}><span>5%</span><span>40%</span></div>
              </div>

              <div className={styles.calcInputGroup}>
                <div className={styles.calcLabelRow}>
                  <span className={styles.calcLabel}>Revenue per session</span>
                  <span className={styles.calcValue}>{fmtMoney(revenue)}</span>
                </div>
                <input 
                  type="range" 
                  min="60" 
                  max="400" 
                  step="5" 
                  value={revenue} 
                  onChange={(e) => setRevenue(parseInt(e.target.value))}
                  className={styles.calcSlider} 
                />
                <div className={styles.calcBounds}><span>$60</span><span>$400</span></div>
              </div>
            </div>

            <div>
              <div className={styles.calcResults}>
                <div className={styles.calcResult}>
                  <div className={styles.calcResultLbl}>Sessions lost / month</div>
                  <div className={styles.calcResultVal}>{fmtNum(lost)}</div>
                  <div className={styles.calcResultSub}>Before Credify</div>
                </div>
                <div className={styles.calcResult}>
                  <div className={styles.calcResultLbl}>Sessions recovered (88%)</div>
                  <div className={styles.calcResultVal}>{fmtNum(recovered)}</div>
                  <div className={styles.calcResultSub}>Now-attended visits</div>
                </div>
                <div className={`${styles.calcResult} ${styles.heroResult}`}>
                  <div className={styles.calcResultLbl}>Annual revenue recovered</div>
                  <div className={styles.calcResultVal}>{fmtMoney(annual)}</div>
                  <div className={styles.calcResultSub}>{fmtMoney(monthly)} per month · {fmtNum(recovered)} sessions × {fmtMoney(revenue)}</div>
                </div>
              </div>
              <div className={styles.calcFoot}>
                <span><em>Estimates</em> based on 88% no-show reduction across 200+ Credify clinics.</span>
                <button 
                  className={styles.calcReset} 
                  onClick={() => { setSessions(400); setRate(25); setRevenue(150); }}
                  type="button"
                >
                  Reset to defaults
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className={styles.integrations}>
        <div className={styles.container}>
          <div className={styles.integrationsLabel}>Plays nicely with</div>
          <div className={styles.integrationsRow}>
            <span>EHRYourWay</span>
            <span>TherapyNotes</span>
            <span>SimplePractice</span>
            <span>Credible</span>
            <span>AdvanceMD</span>
            <span>TheraNest</span>
            <span>Qualifacts</span>
            <span>Valant</span>
            <span>InSync</span>
          </div>
        </div>
      </section>

      {/* LAPSED CLIENTS */}
      <section className={styles.lapsed}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.pill}><span className={styles.dot}></span>Lapsed client recovery</span>
            <h2 className={styles.sectionTitle}>Drifted clients are revenue <em>waiting to be recovered</em>.</h2>
            <p className={styles.sectionLede}>Most agencies lose 15%–18% of their active roster to drift, not discharge. Those clients didn't choose to leave — they just stopped rebooking. We bring them back.</p>
            <div style={{ marginTop: 24 }}><NoShowCalcBtn /></div>
          </div>

          <div className={styles.lapsedGrid}>
            <div className={styles.lapsedTriggers}>
              <h4>You set the trigger thresholds</h4>
              <div className={styles.triggerRow}>
                <div className={styles.label}>No session in 30 days</div>
                <span className={`${styles.badge} ${styles.active}`}>Active</span>
              </div>
              <div className={styles.triggerRow}>
                <div className={styles.label}>Missed 2 consecutive appointments</div>
                <span className={`${styles.badge} ${styles.active}`}>Active</span>
              </div>
              <div className={styles.triggerRow}>
                <div className={styles.label}>Intake done · no second session booked</div>
                <span className={`${styles.badge} ${styles.customBadge}`}>Custom</span>
              </div>
              <div className={styles.triggerRow}>
                <div className={styles.label}>Discharged 90 days ago — wellness check</div>
                <span className={`${styles.badge} ${styles.customBadge}`}>Custom</span>
              </div>
            </div>

            <div>
              <div className={styles.lapsedSequence}>
                <h4>Full omni-channel sequence fires automatically</h4>
                <div className={styles.seqItem}>
                  <div className={styles.seqDay}>Day 1</div>
                  <div className={styles.seqContent}>
                    <div className={styles.ch}>SMS</div>
                    <div className={styles.what}>"We miss you — let's get you back on schedule." Warm, brand-appropriate tone.</div>
                  </div>
                </div>
                <div className={styles.seqItem}>
                  <div className={styles.seqDay}>Day 3</div>
                  <div className={styles.seqContent}>
                    <div className={styles.ch}>Email</div>
                    <div className={styles.what}>Personalized email with available slots and a one-click book link.</div>
                  </div>
                </div>
                <div className={styles.seqItem}>
                  <div className={styles.seqDay}>Day 7</div>
                  <div className={styles.seqContent}>
                    <div className={styles.ch}>AI Voice</div>
                    <div className={styles.what}>AI voice call — schedules on the call, or documents the decline for compliance.</div>
                  </div>
                </div>
                <div className={styles.seqItem}>
                  <div className={styles.seqDay}>Day 10</div>
                  <div className={styles.seqContent}>
                    <div className={styles.ch}>Escalate</div>
                    <div className={styles.what}>If still no response, flagged for clinical review and staff is notified.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.lapsedBanner}>
            <h3>Most clinics rely on someone <em>remembering</em> to follow up. Ours doesn't rely on anyone.</h3>
            <div className={styles.statBlock}>
              <div className={styles.big}>$8K+</div>
              <div className={styles.lbl}>Avg monthly revenue recovered from re-engaged lapsed clients per 200-session practice.</div>
            </div>
          </div>
        </div>
      </section>

      {/* PERFORMANCE PRICING */}
      <section className={styles.performance} id="performance">
        <div className={styles.container}>
          <div className={styles.perfGrid}>
            <div>
              <span className={styles.pill}><span className={styles.dot}></span>Performance-based pricing</span>
              <h2 className={styles.perfHeadline}>If we don't recover revenue, <em>you don't pay</em>.</h2>
              <p className={styles.perfLede}>No setup fees. No long-term subscriptions. <b>We get paid a percentage of the revenue we actually recover</b> — and only that. Our incentives are your incentives.</p>

              <div className={styles.perfPoints}>
                <div className={styles.perfPoint}>
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <path d="M2 10L7 15L18 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span><b>Zero setup cost.</b> We integrate with your EHR, configure your rules, and go live — at our expense.</span>
                </div>
                <div className={styles.perfPoint}>
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <path d="M2 10L7 15L18 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span><b>No monthly subscription.</b> You pay only on the appointments and revenue we recover.</span>
                </div>
                <div className={styles.perfPoint}>
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <path d="M2 10L7 15L18 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span><b>Cancel anytime.</b> If we're not earning our keep, you owe us nothing going forward.</span>
                </div>
                <div className={styles.perfPoint}>
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <path d="M2 10L7 15L18 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span><b>Transparent attribution.</b> Every recovered session is logged and verifiable in your EHR. No black box.</span>
                </div>
              </div>

              <div className={styles.ctaRow} style={{justifyContent: 'flex-start'}}>
              <Link href="/contact#contact-form" className={`${styles.btn} ${styles.btnPrimary}`} target="_blank" rel="noopener noreferrer">
                Book a demo
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              {/* <Link href="/pricing" className={`${styles.btn} ${styles.btnSecondary} ${styles.btnOnDark}`}>View pricing</Link> */}
              <NoShowCalcBtn />
            </div>

            </div>

            <div className={styles.perfCard}>
              <span className={styles.perfCardTag}>How it works</span>
              <h3>You only pay for <em>recovered</em> sessions.</h3>
              <p className={styles.desc}>Sample math on a 400-session-per-month practice with a 25% no-show rate at $150 per session.</p>

              <div className={styles.row}>
                <span className={styles.label}>Sessions recovered / month</span>
                <span className={styles.val}>88</span>
              </div>
              <div className={styles.row}>
                <span className={styles.label}>Revenue recovered / month</span>
                <span className={styles.val}>$13,200</span>
              </div>
              <div className={styles.row}>
                <span className={styles.label}>Credify share (illustrative)</span>
                <span className={styles.val} style={{ color: "var(--muted)" }}>~ 20%</span>
              </div>
              <div className={`${styles.row} ${styles.flagship}`}>
                <span className={styles.label}>Net to your practice</span>
                <span className={styles.val}>$10,560 / mo</span>
              </div>

              <p style={{ marginTop: "20px", fontSize: "12px", color: "var(--muted-2)", lineHeight: 1.5 }}>Pricing illustrative — actual share negotiated per practice based on volume and configuration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className={styles.testimonial}>
        <div className={styles.container}>
          <div className={styles.sectionHeadCenter} style={{ margin: "0 auto 56px", textAlign: "center" }}>
            <span className={styles.pill}><span className={styles.dot}></span>Operators talk</span>
            <h2 className={styles.sectionTitle}>From "we'll try it" to "we can't go <em>back</em>".</h2>
            <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}><NoShowCalcBtn /></div>
          </div>
          <div className={styles.testCard}>
            <div className={styles.testQuote}>
              We were losing about a slot per therapist per day. Credify flipped that — the AI voice calls do the chasing our front desk never had time for, and most sessions are confirmed before we open. The schedule basically heals itself overnight.
            </div>
            <div className={styles.testAuthor}>
              <div className={styles.testAvatar}>JR</div>
              <div className={styles.testInfo}>
                <div className={styles.name}>Jordan Reeves</div>
                <div className={styles.role}>Practice Manager · Cedar Grove Counseling</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CROSS-LINK */}
      <section className={styles.crossLink}>
        <div className={styles.container}>
          <Link href="/client-clinical-engagement" className={styles.crossCard} target="_blank">
            <div>
              <span className={styles.pill}><span className={styles.dot}></span>Also from Credify</span>
              <h3>Looking for Client Clinical Engagement?</h3>
              <p>Forms completion, screening automation, PHQ-9 progress graphing, and supervisor auto-loop on out-of-range scores — all the engagement that happens after the appointment is booked.</p>
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
            <span className={`${styles.pill} ${styles.onDark}`}><span className={styles.dot}></span>Zero risk · paid on performance</span>
            <h2 className={styles.ctaTitle}>Stop losing slots to <em>silence</em>.</h2>
            <p className={styles.ctaSub}>Twenty-minute demo. We'll show you a live AI voice call on your specialty, run the no-show math on your numbers, and walk through the performance-based pricing — no setup fees, no subscription, no risk.</p>
            <div className={styles.ctaRow}>
              <Link href="/contact#contact-form" className={`${styles.btn} ${styles.btnPrimary}`} target="_blank" rel="noopener noreferrer">
                Book a demo
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link href="/pricing" className={`${styles.btn} ${styles.btnSecondary} ${styles.btnOnDark}`}>View pricing</Link>
              <NoShowCalcBtn />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
