"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import siteConfig from "@/config/site";
import styles from "./GrowthEngine.module.css";
import { ReportsSection } from "./ReportsSection";

const cx = (...classes: (string | boolean | undefined | null)[]) => 
  classes.filter(Boolean).join(" ");

// --- Icons ---

const CheckIcon = () => (
  <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
    <path d="M1.5 4.5l2 2 4-4" stroke="#1a8a66" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PlusIcon = () => (
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
    <path d="M7 1v12M1 7h12" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className={className}>
    <path d="M2 6.5h9M7 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function GrowthEngine() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 350);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={styles.growthEnginePage}>
      {/* TRUST TICKER */}
      <div className={styles.trustTicker}>
        <div className={styles.tickerTrack}>
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <div className={styles.tickerItem}><div className={styles.tickerDot}></div>behavioral health practices</div>
              <div className={styles.tickerItem}><div className={styles.tickerDot}></div>$42M+ in recovered revenue</div>
              <div className={styles.tickerItem}><div className={styles.tickerDot}></div>Works with your existing EHR — no migration</div>
              <div className={styles.tickerItem}><div className={styles.tickerDot}></div>Average +15% increase in collections within 90 days</div>
              <div className={styles.tickerItem}><div className={styles.tickerDot}></div>Performance-based pricing — you pay when we deliver</div>
              <div className={styles.tickerItem}><div className={styles.tickerDot}></div>No-show rate reduced from 22% to under 7%</div>
              <div className={styles.tickerItem}><div className={styles.tickerDot}></div>AI + human execution where it matters most</div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.eyebrow}>
            <div className={styles.eyebrowPulse}></div>You focus on care. We run everything else.
          </div>
          <h1>Your Behavioral<br />Health <em>Growth</em><br />Engine</h1>
          <p className={styles.heroSub}>We&apos;ll help you fill empty schedules, cut no-shows, recruit low-cost providers, and see real-time profitability — without changing your EHR.</p>
          <div className={styles.heroBlockquote}>
            &quot;Most agencies don&apos;t have a demand problem. They have a systems problem with gaps in referral follow-up, staffing alignment and financial visibility.&quot;
          </div>
          <div className={styles.heroBtns}>
            <Link href="/contact#contact-form" className={styles.btnPrimary} target="_blank" rel="noopener noreferrer">
              <PlusIcon />
              Book a demo
            </Link>
            <Link href="#revenue-leak" className={styles.btnOutline}>See where you&apos;re losing revenue →</Link>
          </div>
          <div className={styles.weHelpLabel}>We Help You…</div>
          <div className={styles.heroBullets}>
            <div className={styles.hbullet}><div className={styles.hbulletIcon}><CheckIcon /></div>Fill unused appointment slots</div>
            <div className={styles.hbullet}><div className={styles.hbulletIcon}><CheckIcon /></div>Cut no-shows with AI outreach</div>
            <div className={styles.hbullet}><div className={styles.hbulletIcon}><CheckIcon /></div>Reactivate inactive clients</div>
            <div className={styles.hbullet}><div className={styles.hbulletIcon}><CheckIcon /></div>Recruit providers in lower-cost markets</div>
          </div>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.dashWrap}>
            <div className={styles.dashCard}>
              <div className={styles.dashTopbar}>
                <div className={styles.dashTopbarTitle}>Daily Practice Updates</div>
                <div className={styles.liveBadge}>
                  <div className={styles.liveDot}></div>Live
                </div>
              </div>
              <div className={styles.dashMetrics}>
                <div className={styles.dm}>
                  <div className={cx(styles.dmVal, styles.green)}>$84K</div>
                  <div className={styles.dmLbl}>Revenue recovered</div>
                  <div className={styles.dmDelta}>↑ +10.8% vs last month</div>
                </div>
                <div className={styles.dm}>
                  <div className={styles.dmVal}>87%</div>
                  <div className={styles.dmLbl}>Provider utilization</div>
                  <div className={styles.dmDelta}>↑ from 61%</div>
                </div>
                <div className={styles.dm}>
                  <div className={cx(styles.dmVal, styles.amber)}>7%</div>
                  <div className={styles.dmLbl}>No-show rate</div>
                  <div className={cx(styles.dmDelta, styles.neg)}>↓ from 22%</div>
                </div>
              </div>
              <div className={styles.dashBody}>
                <div className={styles.dashSectionLbl}>Provider profitability by payer</div>
                {[
                  { name: "Aetna", val: 82, color: "" },
                  { name: "BCBS", val: 74, color: "" },
                  { name: "Medicaid", val: 47, color: styles.amber },
                  { name: "UHC", val: 91, color: "" },
                ].map((item) => (
                  <div className={styles.provRow} key={item.name}>
                    <div className={styles.provName}>{item.name}</div>
                    <div className={styles.provBarTrack}>
                      <div
                        className={cx(styles.provBarFill, item.color, loaded && styles.loaded)}
                        style={{ "--pfill": `${item.val}%` } as any}
                      ></div>
                    </div>
                    <div className={cx(styles.provPct, item.color)}>{item.val}%</div>
                  </div>
                ))}

                <div className={styles.dashSectionLbl} style={{ marginTop: 12 }}>Open capacity</div>
                <div className={styles.capRow}>
                  <div className={styles.capBarTrack}>
                    <div
                      className={cx(styles.capBarFill, loaded && styles.loaded)}
                      style={{ "--cfill": "31%" } as any}
                    ></div>
                  </div>
                  <div className={styles.capLabel}>31% open — <span style={{ color: "#3dbd94" }}>12 slots recoverable this week</span></div>
                </div>

                <div className={styles.dashSectionLbl} style={{ marginTop: 12 }}>Today&apos;s activity</div>
                <div className={styles.actRow}>
                  <div className={styles.actIcon}>
                    <svg fill="none" height="13" viewBox="0 0 14 14" width="13"><path d="M2 10l3-3 2 2 4-5" stroke="#3dbd94" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4"></path></svg>
                  </div>
                  <div className={styles.actMain}>
                    <div className={styles.actTitle}>Lead follow-up sent</div>
                    <div className={styles.actSub}>AI outreach sequence · 09:30 AM</div>
                  </div>
                  <div className={styles.actAmount}>+18 leads</div>
                </div>
                <div className={styles.actRow}>
                  <div className={styles.actIcon}>
                    <svg fill="none" height="13" viewBox="0 0 14 14" width="13"><rect height="9" rx="1.5" stroke="#3dbd94" strokeWidth="1.3" width="10" x="2" y="3"></rect><path d="M5 1v3M9 1v3M2 7h10" stroke="#3dbd94" strokeLinecap="round" strokeWidth="1.3"></path></svg>
                  </div>
                  <div className={styles.actMain}>
                    <div className={styles.actTitle}>No-show rebooked</div>
                    <div className={styles.actSub}>Recovered appointment · 11:15 AM</div>
                  </div>
                  <div className={styles.actAmount}>+$320</div>
                </div>
                <div className={styles.actRow}>
                  <div className={styles.actIcon}>
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="5.5" r="3" stroke="#3dbd94" strokeWidth="1.3" />
                      <path d="M2 13c0-2.76 2.24-5 5-5s5 2.24 5 5" stroke="#3dbd94" strokeWidth="1.3" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className={styles.actMain}>
                    <div className={styles.actTitle}>Provider candidate added</div>
                    <div className={styles.actSub}>Lower-cost market pipeline · 02:10 PM</div>
                  </div>
                  <div className={styles.actAmount}>+28 slots</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EHR BAR */}
      <div className={styles.ehrBar}>
        <div className={styles.ehrLbl}>Works with any EHR including</div>
        <div className={styles.ehrLogos}>
          {["EHRYourWay", "TherapyNotes", "SimplePractice", "Credible", "AdvanceMD", "TheraNest", "Qualifacts", "Valant", "InSync", "+ more"].map(pill => (
            <div key={pill} className={styles.ehrPill}>{pill}</div>
          ))}
        </div>
      </div>

      {/* RCM SECTION */}
      <section className={styles.rcm}>
        <div className={styles.rcmLeft}>
          <div className={styles.rcmLeftContent}>
            <div className={styles.sectionTag}>RCM & Credentialing Services</div>
            <h2 className={styles.rcmH2}>Billing, eligibility, and credentialing.<br />All handled. All included.</h2>
            <p className={styles.rcmSub}>Powered by people, enhanced by AI. We work with every EHR and manage the full revenue cycle so your team never has to think about it.</p>
          </div>
          <div className={styles.rcmLeftBottom}>
            <div className={styles.rcmPriceBox}>
              <div className={styles.rcmPriceVal}>From 3.49%</div>
              <div className={styles.rcmPriceLbl}>of collections — billing, eligibility & credentialing included in every plan</div>
            </div>
            <div className={styles.rcmTrialBadge}>✓ Free trial</div>
            <br />
            <Link className={styles.rcmCtaBtn} href="/rcm-pricing" target="_blank" rel="noopener noreferrer">
              Explore RCM services
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
        <div className={styles.rcmRight}>
          {[
            { title: "AI-Assisted Billing", desc: "Automated claim scrubs, code validation, and denial pattern detection to submit clean claims the first time." },
            { title: "Credentialing Included", desc: "CAQH refresh, payer enrollment, and panel management — handled for every provider." },
            { title: "Eligibility Verification", desc: "Real-time checks and batch runs to prevent front-end denials before they happen." },
            { title: "Works With Every EHR", desc: "Bill from your EHR or let us handle it in our platform. No migration, no disruption." },
            { title: "Transparent Reporting", desc: "Daily claim status, ERA/EFT posting, and month-end summaries you can actually act on." },
            { title: "HIPAA-Aligned & BAA", desc: "Compliance-first workflows with full audit trails. BAA signed at onboarding." },
          ].map((card, i) => (
            <div key={i} className={styles.rcmCard}>
              <div className={styles.rcmIcon}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="3" width="14" height="12" rx="2" stroke="#1a8a66" strokeWidth="1.4" /><path d="M5 7h8M5 10h5" stroke="#1a8a66" strokeLinecap="round" strokeWidth="1.4" /></svg>
              </div>
              <div className={styles.rcmCardTitle}>{card.title}</div>
              <div className={styles.rcmCardDesc}>{card.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* GAINS */}
      <section className={styles.gains}>
        <div className={styles.sectionTag}>What you gain</div>
        <h2 className={styles.sectionH2}>You focus on care. We run everything else.</h2>
        <p className={styles.sectionSub}>One system to maximize utilization, engagement, and profitability. Designed for behavioral health.</p>
        <div className={styles.gainsGrid}>
          {[
            "Fill unused appointment slots automatically",
            "Cut no-shows with AI outreach",
            "Reactivate inactive clients",
            "Recruit providers in lower-cost markets",
            "Know profit by provider, location, and payer"
          ].map((title, i) => (
            <div key={i} className={styles.gainCard}>
              <div className={styles.gainNum}>0{i + 1}</div>
              <div className={styles.gainTitle}>{title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* REVENUE LEAK */}
      <section className={styles.leakSection} id="revenue-leak">
        <div className={styles.leakInner}>
          <div className={styles.leakLeft}>
            <div className={styles.leakTag}>The revenue leak</div>
            <h2 className={styles.leakH2}>Every empty slot, missed call, or no-show is lost revenue.</h2>
            <p className={styles.leakBody}>Most agencies don&apos;t have a demand problem. They have a systems problem with gaps in referral follow-up, staffing alignment and financial visibility.</p>
          </div>
          <ul className={styles.leakList}>
            {[
              "Don't follow up with referrals fast enough",
              "Lose clients after intake",
              "Have no system to reactivate patients",
              "Overpay providers without visibility into margins",
              "Rely on billing alone to fix revenue"
            ].map((item, i) => (
              <li key={i} className={styles.leakItem}>
                <div className={styles.leakItemDot}></div>{item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROOF */}
      <section className={styles.proof}>
        <div className={styles.trustScores}>
          <div className={styles.trustScore}>
            <div className={cx(styles.trustScoreIcon, styles.tp)}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" fill="white" /></svg>
            </div>
            <div className={styles.trustScoreRight}>
              <div className={styles.trustScoreLabel}>Trustpilot</div>
              <div className={styles.trustScoreTitle}>TrustScore 4</div>
              <div className={styles.trustStars}>
                {[...Array(4)].map((_, i) => (
                  <svg key={i} className={styles.trustStar} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                ))}
                <svg className={cx(styles.trustStar, styles.half)} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              </div>
            </div>
          </div>
          <div className={styles.trustScoreDiv}></div>
          <div className={styles.trustScore}>
            <div className={cx(styles.trustScoreIcon, styles.g)}>
              <svg width="22" height="22" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
            </div>
            <div className={styles.trustScoreRight}>
              <div className={styles.trustScoreLabel}>Google Reviews</div>
              <div className={styles.trustScoreTitle}>5 Stars</div>
              <div className={styles.trustStars}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={styles.trustStar} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.sectionTag}>Proof & differentiation</div>
        <h2 className={styles.sectionH2}>Growth isn&apos;t promised here — it&apos;s proven.</h2>
        <p className={styles.sectionSub} style={{ marginBottom: 32 }}>Averages across {siteConfig.name} practices in their first 90 days.</p>

        <div className={styles.proofStats}>
          {[
            { num: "+15%", desc: "average increase in monthly collections" },
            { num: "−62%", desc: "average reduction in no-show rate" },
            { num: "+28%", desc: "improvement in provider utilization" },
            { num: "$42M+", desc: "revenue recovered across practices" },
          ].map((stat, i) => (
            <div key={i} className={styles.proofStat}>
              <div className={styles.proofNum}>{stat.num}</div>
              <div className={styles.proofDesc}>{stat.desc}</div>
            </div>
          ))}
        </div>

        <div className={styles.proofTestimonials}>
          {[
            { q: `We were leaving $30k a month on the table and didn't know it. ${siteConfig.name} showed us exactly where and fixed it within weeks.`, author: "Sarah R.", role: "Practice Director, outpatient IOP · Denver, CO", initials: "SR" },
            { q: "Our no-show rate went from 22% to under 7% in 60 days. The AI outreach runs itself — I don't think about it anymore.", author: "Marcus K.", role: "Owner, group therapy practice · Austin, TX", initials: "MK" },
            { q: "Finally a platform that understands behavioral health — not a generic CRM. It fits how we actually operate.", author: "Jennifer L.", role: "CEO, multi-location PHP/IOP · Phoenix, AZ", initials: "JL" },
          ].map((t, i) => (
            <div key={i} className={styles.proofT}>
              <div className={styles.proofTQ}>&quot;{t.q}&quot;</div>
              <div className={styles.proofTAuthor}>
                <div className={styles.proofTAv}>{t.initials}</div>
                <div>
                  <div className={styles.proofTName}>{t.author}</div>
                  <div className={styles.proofTRole}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REPORTS SECTION */}
      <ReportsSection />

      {/* PRICING */}
      <section className={styles.pricing}>
        <div className={styles.sectionTag}>Pricing & model</div>
        <h2 className={styles.sectionH2}>You don&apos;t pay us to show up.<br />You pay us when we deliver.</h2>
        <p className={styles.sectionSub}>Three models. You choose how we&apos;re accountable. All options are tied to what actually gets delivered.</p>
        <div className={styles.pricingGrid}>
          {[
            { tag: "Pay From Results", title: "Percentage of Collections", oneLiner: "Tied directly to what we collect for you", desc: "Our fee is a share of the revenue we recover. Zero collections growth means zero fee.", featured: false },
            { tag: "Pay For Progress", title: "Performance-Based Components", oneLiner: "Incentives kick in only when metrics move", desc: "Growth milestones trigger our fees — utilization, reactivation, collections, or profitability improvements.", featured: true },
            { tag: "Pay For What You Need", title: "Flexible Service Mix", oneLiner: "Pay for what you use, only when it works", desc: "Subscribe to the services where your practice has the biggest gaps. Scale up or down as you grow.", featured: false },
          ].map((plan, i) => (
            <div key={i} className={cx(styles.pricingCard, plan.featured && styles.featured)}>
              {plan.featured && <div className={styles.featuredBadge}>Most popular</div>}
              <div className={styles.pricingCardTag}>{plan.tag}</div>
              <div className={styles.pricingTitle}>{plan.title}</div>
              <div className={styles.pricingOneLiner}>{plan.oneLiner}</div>
              <div className={styles.pricingDesc}>{plan.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* OBJECTIONS */}
      <section className={styles.objections}>
        <div className={styles.sectionTag}>What you might be thinking</div>
        <h2 className={styles.sectionH2}>Common objections,<br />answered clearly</h2>
        <div className={styles.objGrid}>
          {[
            { q: "We already have billing.", a: "Billing alone does not fill your schedule, cut no-shows, or improve provider utilization. We close the operational gaps before and after billing." },
            { q: "We have marketing.", a: "Marketing without follow-up creates expensive leakage. We connect lead generation to conversion, booking, and retention." },
            { q: "We don't need AI.", a: "More staff cannot keep up with every missed call, form fill, reminder, and reactivation sequence. AI scales follow-up without adding overhead." },
          ].map((obj, i) => (
            <div key={i} className={styles.objCard}>
              <div className={styles.objQ}>&quot;{obj.q}&quot;</div>
              <div className={styles.objA}>{obj.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.finalCta}>
        <h2>See exactly where your<br />practice is losing revenue</h2>
        <p>We&apos;ll show you where revenue is leaking, how many appointments you&apos;re leaving unfilled, and what your true profitability looks like.</p>
        <div className={styles.ctaBullets}>
          <div className={styles.ctaBullet}><span className={styles.ctaCheck}>✓</span> Revenue leakage analysis</div>
          <div className={styles.ctaBullet}><span className={styles.ctaCheck}>✓</span> Utilization gap review</div>
          <div className={styles.ctaBullet}><span className={styles.ctaCheck}>✓</span> No-show recovery opportunities</div>
          <div className={styles.ctaBullet}><span className={styles.ctaCheck}>✓</span> Profitability visibility by payer & provider</div>
        </div>
        <div className={styles.finalBtns}>
          <Link href="/contact#contact-form" className={styles.btnWhite} target="_blank" rel="noopener noreferrer">Book a demo</Link>
          <Link href={`tel:${siteConfig.phoneRaw}`} className={styles.btnGhost} target="_blank" rel="noopener noreferrer">{siteConfig.phoneLabel}: {siteConfig.phoneDisplay}</Link>
        </div>
      </section>
    </main>
  );
}
