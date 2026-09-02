"use client";

import React, { useState } from "react";
import Link from "next/link";
import siteConfig from "@/config/site";
import styles from "./FrontDesk.module.css";

const faqs = [
  {
    q: "Are these real people or AI?",
    a: "Real, trained receptionists answer every call. Callers reach a warm human voice who greets them in your practice's name — not an automated menu or a bot.",
  },
  {
    q: "Can you cover only overflow instead of all calls?",
    a: "Yes. Set your line to ring your office first and roll to us only when no one answers within a few rings. You decide whether we handle everything or just the calls your team can't catch.",
  },
  {
    q: "How exactly does the $8 per hour cap work?",
    a: "Each answered call is $1. We total your calls within each clock hour, and that hour is billed at $1 per call up to a maximum of $8. Once you hit 8 calls in an hour, every additional call in that hour is included at no extra cost.",
  },
  {
    q: "Do you charge for missed or unanswered calls?",
    a: "No. You're only billed when a receptionist actually picks up and handles a call on your behalf. If we don't answer it, there's no charge.",
  },
  {
    q: "Will it work with my current phone system?",
    a: "Almost certainly. Setup is just call forwarding from your existing number — no new hardware, no number changes, no software to install. It takes about five minutes.",
  },
  {
    q: "Can the team book appointments and take intakes?",
    a: "Yes. We follow a custom script you approve — greeting callers, gathering the intake details you specify, booking consults into your calendar, and routing urgent matters the way you direct.",
  },
];

const features = [
  {
    title: "Live human answering",
    desc: "Real, trained receptionists experienced in behavioral health calls — never a bot, never voicemail.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
  {
    title: "Appointment booking",
    desc: "We schedule intakes and consults directly into your calendar, following your booking rules.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2"/>
        <path d="M16 2v4M8 2v4M3 10h18"/>
      </svg>
    ),
  },
  {
    title: "HIPAA-aware handling",
    desc: "Calls are handled with privacy-conscious scripting and secure message routing to your team.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    title: "24/7/365 coverage",
    desc: "Nights, weekends, holidays, lunch breaks — whenever a call comes in, someone is there.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
  },
  {
    title: "Custom call scripts",
    desc: "We greet callers in your name and ask the intake questions your practice cares about.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16v12H5.17L4 17.17V4z"/>
        <path d="M8 9h8M8 12h5"/>
      </svg>
    ),
  },
  {
    title: "Call summaries & reporting",
    desc: "Every call logged with notes and outcomes, so you see exactly what coverage is earning you.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18"/>
        <path d="M7 14l4-4 3 3 5-6"/>
      </svg>
    ),
  },
];

function CheckSvg() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5"/>
    </svg>
  );
}

export function FrontDesk() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (i: number) => {
    setOpenFaq(openFaq === i ? null : i);
  };

  return (
    <main className={styles.main}>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroInner}>
            <div>
              <span className={`${styles.pill} ${styles.pillOnDark}`}>
                <span className={styles.pillDot}></span>
                Live, trained receptionists
              </span>
              <h1 className={styles.heroH1}>
                A real person<br />answers <em className={styles.heroH1Accent}>every call.</em>
              </h1>
              <p className={styles.heroSub}>
                Full coverage or overflow only. Day, night, weekends, holidays. Your new-client calls get a warm human voice — not voicemail. Just{" "}
                <strong style={{ color: "#fff", fontWeight: 600 }}>$1 per call</strong>, capped at{" "}
                <strong style={{ color: "#fff", fontWeight: 600 }}>$8 an hour</strong>.
              </p>
              <div className={styles.heroCta}>
                <Link
                  href="/contact#contact-form"
                  className={`${styles.btn} ${styles.btnOnDarkPrimary}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a free demo <span className={styles.btnArrow}>→</span>
                </Link>
              </div>
              <div className={styles.heroTrust}>
                <span className={styles.heroTrustItem}>
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="17" height="17" style={{ stroke: "var(--brand400)", flexShrink: 0 }}>
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  No missed new-client calls
                </span>
                <span className={styles.heroTrustItem}>
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="17" height="17" style={{ stroke: "var(--brand400)", flexShrink: 0 }}>
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  Built for behavioral health
                </span>
                <span className={styles.heroTrustItem}>
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="17" height="17" style={{ stroke: "var(--brand400)", flexShrink: 0 }}>
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  Works with your phone system
                </span>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.callCard}>
                <div className={styles.ccHead}>
                  <span className={styles.ccLive}>
                    <span className={styles.ccPing}></span>
                    Answering now
                  </span>
                  <span className={styles.ccTime}>2:14 AM</span>
                </div>
                <div className={styles.ccRow}>
                  <span className={styles.ccAvatar}>JM</span>
                  <span className={styles.ccMeta}>
                    <span className={styles.ccName}>New client inquiry</span>
                    <span className={styles.ccDetail}>Asking about intake &amp; insurance</span>
                  </span>
                  <span className={`${styles.ccTag} ${styles.ccTagAnswered}`}>Answered</span>
                </div>
                <div className={styles.ccRow}>
                  <span className={styles.ccAvatar}>RP</span>
                  <span className={styles.ccMeta}>
                    <span className={styles.ccName}>After-hours caller</span>
                    <span className={styles.ccDetail}>Scheduled for Monday 9:00 AM</span>
                  </span>
                  <span className={`${styles.ccTag} ${styles.ccTagBooked}`}>Booked</span>
                </div>
                <div className={styles.ccRow}>
                  <span className={styles.ccAvatar}>DL</span>
                  <span className={styles.ccMeta}>
                    <span className={styles.ccName}>Overflow during lunch</span>
                    <span className={styles.ccDetail}>Message routed to front desk</span>
                  </span>
                  <span className={`${styles.ccTag} ${styles.ccTagAnswered}`}>Answered</span>
                </div>
                <div className={styles.ccFoot}>
                  <span className={styles.ccFootLabel}>Today&apos;s coverage</span>
                  <span className={styles.ccFootVal}>
                    14 calls <span className={styles.ccFootValSmall}>· 0 missed</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className={`${styles.section} ${styles.bgSmoke}`} id="problem">
        <div className={styles.container}>
          <div className={`${styles.sectionHead} ${styles.sectionHeadCenter}`}>
            <span className={styles.pill}><span className={styles.pillDot}></span>The cost of a missed call</span>
            <h2 className={styles.sectionH2}>Every unanswered call is a client who calls someone else.</h2>
            <p className={styles.sectionP}>In behavioral health, the first call is often a person in a fragile moment. Voicemail loses them. So does a busy front desk, a lunch break, or a Friday at 6&nbsp;PM.</p>
          </div>
          <div className={styles.problemGrid}>
            {[
              { stat: "80%", title: "Won't leave a voicemail", desc: "Most first-time callers hang up and dial the next provider instead of waiting for a callback." },
              { stat: "35%", title: "Of calls come after hours", desc: "Evenings, weekends, and holidays are when many people finally reach out for help — and when most offices are closed." },
              { stat: "$1k+", title: "Lost per missed admit", desc: "A single new client carries weeks of recurring revenue. A few missed calls a month adds up fast." },
            ].map((c, i) => (
              <div className={styles.problemCard} key={i}>
                <div className={styles.problemStat}>{c.stat}</div>
                <div className={styles.problemTitle}>{c.title}</div>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className={styles.section} id="how">
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.pill}><span className={styles.pillDot}></span>How it works</span>
            <h2 className={styles.sectionH2}>Choose how much of your phone we cover.</h2>
            <p className={styles.sectionP}>Hand us every call, or only the ones your team can&apos;t get to. Either way, a trained receptionist picks up — never an answering machine.</p>
          </div>

          <div className={styles.modes}>
            <div className={styles.modeCard}>
              <span className={styles.modeLabel}>Overflow coverage</span>
              <h3>We catch what your team misses.</h3>
              <p className={styles.modeDesc}>Your front desk rings first. If no one picks up within a few rings — busy, on lunch, helping a client — the call rolls to us, seamlessly.</p>
              <ul className={styles.modeList}>
                <li><CheckSvg />Rings your office first, then routes to us</li>
                <li><CheckSvg />You only pay for calls we actually take</li>
                <li><CheckSvg />Ideal for busy hours and short-staffed days</li>
              </ul>
            </div>
            <div className={`${styles.modeCard} ${styles.modeCardFeatured}`}>
              <span className={styles.modeLabel}>Full coverage</span>
              <h3>We are your front desk.</h3>
              <p className={styles.modeDesc}>Every call, around the clock. New clients, current clients, after-hours, weekends, holidays — all answered by a real person who knows your practice.</p>
              <ul className={styles.modeList}>
                <li><CheckSvg />24/7/365 — including nights and holidays</li>
                <li><CheckSvg />Books intakes &amp; routes to the right person</li>
                <li><CheckSvg />Frees your staff to focus on clients in the room</li>
              </ul>
            </div>
          </div>

          <div className={styles.stepsGrid}>
            {[
              { title: "Forward your line", desc: "Set your number to forward all calls or only on no-answer. Five minutes, no new hardware." },
              { title: "We learn your practice", desc: "We build a script with your services, intake questions, hours, and how you want calls handled." },
              { title: "A person answers", desc: "Trained receptionists greet callers in your practice's name, warmly and professionally." },
              { title: "You get the handoff", desc: "Booked appointments, messages, and call summaries land with your team in real time." },
            ].map((s, i) => (
              <div className={styles.step} key={i}>
                <div className={styles.stepNum}>{i + 1}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className={`${styles.section} ${styles.bgMint}`} id="features">
        <div className={styles.container}>
          <div className={`${styles.sectionHead} ${styles.sectionHeadCenter}`}>
            <span className={styles.pill}><span className={styles.pillDot}></span>What&apos;s included</span>
            <h2 className={styles.sectionH2}>More than answering. A front desk that converts.</h2>
            <p className={styles.sectionP}>Every plan includes the things that actually turn a phone call into a booked client.</p>
          </div>
          <div className={styles.featuresGrid}>
            {features.map((f, i) => (
              <div className={styles.featureCard} key={i}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className={styles.section} id="pricing">
        <div className={styles.container}>
          <div className={`${styles.sectionHead} ${styles.sectionHeadCenter}`}>
            <span className={styles.pill}><span className={styles.pillDot}></span>Simple, honest pricing</span>
            <h2 className={styles.sectionH2}>Pay per call. Never more than $8 an hour.</h2>
            <p className={styles.sectionP}>No per-seat fees, no long contracts, no surprise minutes. You pay $1 for each call we answer — and we cap it at $8 in any single hour, so a busy stretch never runs away from you.</p>
          </div>
          <div className={styles.pricingGrid}>
            <div className={styles.priceCard}>
              <div className={styles.priceName}>Per call</div>
              <div className={styles.priceAmount}>$1<span className={styles.priceAmountPer}> / call answered</span></div>
              <p className={styles.priceNote}>You only pay when a real person picks up a call for you. No answer, no charge.</p>
              <div className={styles.priceLine}></div>
              <ul className={styles.priceList}>
                {["Live receptionist on every call", "Overflow or full coverage", "Appointment booking included", "Call logs & summaries"].map((item, i) => (
                  <li key={i}>
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact#contact-form"
                className={`${styles.btn} ${styles.btnGhost} ${styles.priceCardBtn}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Start with per-call
              </Link>
            </div>
            <div className={`${styles.priceCard} ${styles.priceCardHighlight}`}>
              <span className={styles.priceTag}>Most predictable</span>
              <div className={styles.priceName}>Hourly cap</div>
              <div className={styles.priceAmount}>$8<span className={styles.priceAmountPer}> / hour max</span></div>
              <p className={styles.priceNote}>Calls are still $1 each — but no matter how busy an hour gets, you never pay more than $8 for it.</p>
              <div className={styles.priceLine}></div>
              <ul className={styles.priceList}>
                {["Everything in per-call", "Hard $8/hour ceiling on costs", "Predictable spend on peak days", "Ideal for full 24/7 coverage"].map((item, i) => (
                  <li key={i}>
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact#contact-form"
                className={`${styles.btn} ${styles.btnPrimary} ${styles.priceCardBtn}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get the capped plan <span className={styles.btnArrow}>→</span>
              </Link>
            </div>
          </div>
          <div className={styles.capBanner}>
            <svg className={styles.capBannerIcon} viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 12l2 2 4-4"/>
              <circle cx="12" cy="12" r="10"/>
            </svg>
            <div className={styles.capBannerText}>
              <b>How the cap works:</b> answer 6 calls in an hour and you pay $6. Answer 20 calls in that same hour and you still pay just $8. The 9th call onward in any hour is effectively free.
            </div>
          </div>
        </div>
      </section>

      {/* ── STAT BLOCKS ── */}
      <section className={`${styles.section} ${styles.bgDark}`}>
        <div className={styles.container}>
          <div className={`${styles.sectionHead} ${styles.sectionHeadCenter}`}>
            <span className={`${styles.pill} ${styles.pillOnDark}`}><span className={styles.pillDot}></span>The difference coverage makes</span>
            <h2 className={styles.sectionH2}>Coverage that pays for itself.</h2>
          </div>
          <div className={styles.statblocks}>
            {[
              { num: "0", label: "Calls sent to voicemail" },
              { num: "24/7", label: "Real-person availability" },
              { num: "$8", label: "Most you'll pay per hour" },
              { num: "5 min", label: "To set up call forwarding" },
            ].map((s, i) => (
              <div className={styles.statblock} key={i}>
                <div className={styles.statblockNum}>{s.num}</div>
                <div className={styles.statblockLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className={`${styles.section} ${styles.bgSmoke}`}>
        <div className={styles.container}>
          <div className={styles.testi}>
            <span className={styles.pill}><span className={styles.pillDot}></span>From the field</span>
            <p className={styles.testiQuote}>
              &ldquo;We were losing intake calls every evening and never knew it. Now a real person answers, books the consult, and it&apos;s in our calendar by morning. At a dollar a call, it pays for itself with one new client.&rdquo;
            </p>
            <div className={styles.testiPerson}>
              <span className={styles.testiAvatar}>CD</span>
              <span>
                <span className={styles.testiName}>Clinical Director</span>
                <span className={styles.testiRole}>Outpatient behavioral health group</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={styles.section} id="faq">
        <div className={styles.container}>
          <div className={`${styles.sectionHead} ${styles.sectionHeadCenter}`}>
            <span className={styles.pill}><span className={styles.pillDot}></span>Questions</span>
            <h2 className={styles.sectionH2}>Everything you&apos;d want to ask.</h2>
          </div>
          <div className={styles.faqWrap}>
            {faqs.map((faq, i) => (
              <div className={styles.faqItem} key={i}>
                <button
                  className={`${styles.faqQ} ${openFaq === i ? styles.faqQOpen : ""}`}
                  onClick={() => toggleFaq(i)}
                >
                  {faq.q}
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                </button>
                <div
                  className={styles.faqA}
                  style={{ maxHeight: openFaq === i ? "400px" : "0" }}
                >
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className={`${styles.section} ${styles.final}`}>
        <div className={styles.container}>
          <div className={styles.finalInner}>
            <span className={`${styles.pill} ${styles.pillOnDark}`}><span className={styles.pillDot}></span>Never miss another new client</span>
            <h2 className={styles.finalH2}>Put a real person on every call.</h2>
            <p className={styles.finalSub}>Set up coverage in minutes. Pay a dollar a call. Cap it at eight an hour. Keep every client who picks up the phone.</p>
            <div className={styles.finalCta}>
              <Link
                href={`mailto:${siteConfig.emails[0].address}`}
                className={`${styles.btn} ${styles.btnOnDarkPrimary}`}
              >
                Book a free demo <span className={styles.btnArrow}>→</span>
              </Link>
              <Link
                href={`tel:${siteConfig.phoneRaw}`}
                className={`${styles.btn} ${styles.btnOnDarkGhost}`}
              >
                Call {siteConfig.phoneDisplay}
              </Link>
            </div>
            <p className={styles.finalFoot}>No contracts · No setup fees · Built for behavioral health</p>
          </div>
        </div>
      </section>

    </main>
  );
}
