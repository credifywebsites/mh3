"use client";

import React from "react";
import Link from "next/link";
import siteConfig from "@/config/site";
import styles from "./WebsitesLeadGen.module.css";

export function WebsitesLeadGen() {
  return (
    <main className={styles.main}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div>
              <div className={styles.heroEyebrow}>
                <span className={styles.liveDot}></span> 
                Websites & Lead Generation
              </div>
              <h1 className={styles.heroTitle}>
                Your website is live.<br />
                Your leads are followed up.<br />
                <em>Nothing escapes.</em>
              </h1>
              <p className={styles.heroSub}>
                Free, professionally designed websites with EHR booking — plus multi-platform ad campaigns on Psychology Today, Zocdoc, Google, Meta, and more. Every lead triggers automated email, staff alerts, and an AI voicebot.
              </p>
              <div className={styles.heroStatRow}>
                <div className={styles.heroStat}>
                  <div className={styles.heroStatNum}>78%</div>
                  <div className={styles.heroStatDesc}>of leads go cold if not contacted within the first hour</div>
                </div>
                <div className={styles.heroStatDivider}></div>
                <div className={styles.heroStat}>
                  <div className={styles.heroStatNum}>3×</div>
                  <div className={styles.heroStatDesc}>channels fire before a lead is ever considered lost</div>
                </div>
                <div className={styles.heroStatDivider}></div>
                <div className={styles.heroStat}>
                  <div className={styles.heroStatNum}>$0</div>
                  <div className={styles.heroStatDesc}>website cost — included in Everything Pricing</div>
                </div>
              </div>
              <div className={styles.heroBtns}>
                <Link href="/contact#contact-form" className={styles.btnPrimary} target="_blank" rel="noopener noreferrer">
                  Book a free demo
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M2 6.5h9M7 2.5l4 4-4 4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                {/* <Link href="/pricing" className={styles.btnOutlineWhite}>View pricing →</Link> */}
              </div>
            </div>

            {/* Right — live lead feed */}
            <div className={styles.heroQueue}>
              <div className={styles.queueLabel}>Live lead follow-up — fully automated</div>
              <div className={styles.queueCard}>
                <div className={styles.queueCardHeader}>
                  <div className={styles.queueCardTitle}>New lead — Psychology Today · Sarah M.</div>
                  <span className={`${styles.queueBadge} ${styles.badgeRed}`}>Not yet reached</span>
                </div>
                <div className={styles.queueItem}><div className={styles.queueDot} style={{ background: "#3dbd94" }}></div><div className={styles.queueText}>Auto email sent — personalized intake welcome</div><div className={styles.queueStatus} style={{ color: "var(--brand400)" }}>✓ Sent</div></div>
                <div className={styles.queueItem}><div className={styles.queueDot} style={{ background: "#3dbd94" }}></div><div className={styles.queueText}>Staff alert fired — call or text within 5 min</div><div className={styles.queueStatus} style={{ color: "var(--brand400)" }}>✓ Sent</div></div>
                <div className={styles.queueItem}><div className={styles.queueDot} style={{ background: "#fbbf24" }}></div><div className={styles.queueText}>AI voicebot call scheduled — 15 min if no contact</div><div className={styles.queueStatus} style={{ color: "#fbbf24" }}>Watching</div></div>
              </div>
              <div className={styles.queueCard}>
                <div className={styles.queueCardHeader}>
                  <div className={styles.queueCardTitle}>Google PPC lead — Marcus T. · Intake form</div>
                  <span className={`${styles.queueBadge} ${styles.badgeAmber}`}>Staff notified</span>
                </div>
                <div className={styles.queueItem}><div className={styles.queueDot} style={{ background: "#3dbd94" }}></div><div className={styles.queueText}>Welcome email delivered with booking link</div><div className={styles.queueStatus} style={{ color: "var(--brand400)" }}>✓ Sent</div></div>
                <div className={styles.queueItem}><div className={styles.queueDot} style={{ background: "#fbbf24" }}></div><div className={styles.queueText}>Awaiting staff callback confirmation</div><div className={styles.queueStatus} style={{ color: "#fbbf24" }}>Pending</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEMPLATE GALLERY */}
      <section className={styles.templates}>
        <div className={styles.container}>
          <div className={styles.sectionTag}>Website templates</div>
          <h2 className={styles.sectionH2}>Beautiful sites built for healthcare.<br />Ready to launch in days.</h2>
          <p className={styles.sectionSub}>Every template includes free hosting, EHR calendar integration, and mobile-optimized design.</p>
          <div className={styles.templateGrid}>
            {[
              { title: "FL Primary Care", url: "flprimarycare.com", desc: "Clean, clinical design built for primary care. Engineered to convert first-time visitors into booked clients.", tags: ["EHR booking", "Primary care"], cls: styles.thumbBlue },
              { title: "Houston Mental Health", url: "houstonmh.com", desc: "Warm, professional tone designed for behavioral health. Reduces stigma and converts sessions.", tags: ["EHR booking", "Mental health"], cls: styles.thumbPurple },
              { title: "Thrive Therapy NY", url: "thrivetherapyny.us", desc: "Modern, inviting design built for therapy practices. Highlights specialties and easy intake scheduling.", tags: ["EHR booking", "Therapy"], cls: styles.thumbRose },
              { title: "Wellness Bridge", url: "wellnessbridge.us", desc: "Versatile wellness hub design. Works across counseling, coaching, and integrative medicine.", tags: ["EHR booking", "Wellness"], cls: styles.thumbTeal }
            ].map((tmpl, i) => (
            <a 
              href={`https://${tmpl.url}`} 
              key={i} 
              className={styles.templateCard}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={`${styles.templateThumb} ${tmpl.cls}`}>
                <div className={styles.templateIframeContainer}>
                  <iframe 
                    src={`https://${tmpl.url}`} 
                    className={styles.templateIframe}
                    scrolling="no"
                    loading="lazy"
                    title={tmpl.title}
                  />
                </div>
                <div className={styles.templateThumbLabel}>Click to view live website</div>
                <div className={styles.templateThumbTitle}>{tmpl.title}</div>
              </div>
              <div className={styles.templateBody}>
                <div className={styles.templateUrl}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="#1a8a66" strokeWidth="1.3"/><path d="M6 3.5v2.5l1.5 1.5" stroke="#1a8a66" strokeWidth="1.3" strokeLinecap="round"/></svg>
                  {tmpl.url}
                </div>
                <p className={styles.templateDesc}>{tmpl.desc}</p>
                <div className={styles.templateTags}>
                  {tmpl.tags.map((tag, j) => (
                    <span className={`${styles.tTag} ${j === 0 ? styles.tTagGreen : styles.tTagGray}`} key={j}>{tag}</span>
                  ))}
                </div>
              </div>
            </a>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORM REACH */}
      <section className={styles.platforms}>
        <div className={styles.container}>
          <div className={styles.sectionTag}>Platform reach</div>
          <h2 className={styles.sectionH2}>Everywhere your clients<br />are already searching.</h2>
          <div className={styles.platformCols}>
            <div className={styles.platformList}>
              {[
                { name: "Psychology Today", rank: 1, desc: "The most trusted therapist directory for clients actively seeking mental health care.", tags: ["Directory listing", "Profile mgmt"] },
                { name: "Zocdoc", rank: 2, desc: "High-intent appointment-booking platform. Clients on Zocdoc are ready to book.", tags: ["Appointment ads", "EHR synced"] },
                { name: "Google PPC & PPM", rank: 3, desc: "Search and display campaigns targeting clients by condition, location, and intent.", tags: ["PPC", "Display", "Retargeting"] }
              ].map((plat, i) => (
                <div className={styles.platformItem} key={i}>
                  <div className={`${styles.platformRank} ${plat.rank <= 2 ? styles.rankTop : styles.rankStd}`}>{plat.rank}</div>
                  <div className={styles.platformContent}>
                    <div className={styles.platformName}>{plat.name}</div>
                    <div className={styles.platformDesc}>{plat.desc}</div>
                    <div className={styles.platformTags}>
                      {plat.tags.map((tag, j) => (
                        <span className={`${styles.pTag} ${j === 0 ? styles.pTagGreen : styles.pTagBlue}`} key={j}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.platformImpact}>
              <div className={styles.platformImpactInner}>
                <div className={styles.impactHeadline}>One campaign.<br />Every channel that matters.</div>
                <div className={styles.impactSub}>We manage every platform so you don't have to.</div>
                <div className={styles.impactStats}>
                  {[
                    { label: "Average response time", val: "< 5 min" },
                    { label: "Follow-up channels", val: "3 (email, staff, AI)" },
                    { label: "Platforms managed", val: "6+" },
                    { label: "Staff hours", val: "0" }
                  ].map((stat, i) => (
                    <div className={styles.impactStat} key={i}>
                      <div className={styles.impactStatLabel}>{stat.label}</div>
                      <div className={styles.impactStatVal}>{stat.val}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AUTOMATION FUNNEL */}
      <section className={styles.funnel}>
        <div className={styles.container}>
          <div className={styles.funnelInner}>
            <div className={styles.sectionTag}>How it works</div>
            <h2 className={styles.sectionH2}>From first click<br />to booked appointment.</h2>
            <p className={styles.sectionSub}>Speed is the deciding factor. Our engine makes sure you're always first.</p>
            <div className={styles.funnelSteps}>
              {[
                { title: "Ad click", desc: "Client clicks your campaign on Psychology Today or Google.", time: "Live now" },
                { title: "Landing page", desc: "They land on your site with direct EHR booking.", time: "Instant" },
                { title: "Auto email", desc: "Personalized welcome email fires immediately.", time: "< 30 sec" },
                { title: "Staff alert", desc: "Your team is notified to call or text the lead.", time: "< 5 min" },
                { title: "AI voicebot", desc: "Failsafe: AI calls and books if staff missed.", time: "Failsafe" }
              ].map((step, i) => (
                <div className={styles.funnelStep} key={i}>
                  <div className={styles.funnelStepNum}>{i + 1}</div>
                  <div className={styles.funnelStepTitle}>{step.title}</div>
                  <div className={styles.funnelStepDesc}>{step.desc}</div>
                  <div className={styles.funnelStepTrigger}>{step.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOLLOW-UP ENGINE */}
      <section className={styles.followup}>
        <div className={styles.container}>
          <div className={styles.sectionTag}>The follow-up engine</div>
          <h2 className={styles.sectionH2}>Speed wins the client.<br />We make sure you're always first.</h2>
          <div className={styles.followupGrid}>
            <div className={styles.baGrid}>
              <div className={styles.beforeCard}>
                <div className={`${styles.baLabel} ${styles.red}`}>Without {siteConfig.name}</div>
                <div className={styles.baItem}><span>✕</span> Lead submits form — no immediate response</div>
                <div className={styles.baItem}><span>✕</span> Staff manually checks inbox — hours later</div>
                <div className={styles.baItem}><span>✕</span> No follow-up system — lead goes cold</div>
              </div>
              <div className={styles.afterCard}>
                <div className={`${styles.baLabel} ${styles.green}`}>With {siteConfig.name}</div>
                <div className={styles.baItem}><span className={styles.checkIcon}>✓</span> Email fires in under 30 seconds</div>
                <div className={styles.baItem}><span className={styles.checkIcon}>✓</span> Staff alerted instantly — calls within 5 min</div>
                <div className={styles.baItem}><span className={styles.checkIcon}>✓</span> AI voicebot steps in as failsafe</div>
              </div>
            </div>
            <div className={styles.followupRight}>
              <h3>The practice that responds first wins. Every time.</h3>
              <p>Research shows the odds of contacting a lead drop by over 80% after the first five minutes. {siteConfig.name} responds in seconds — automatically.</p>
              <div className={styles.statCallout}>
                <div className={styles.statCalloutNum}>5×</div>
                <div className={styles.statCalloutLabel}>higher conversion rate when a lead is contacted within 5 minutes vs. 30 minutes.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE INCLUDE */}
      <section className={styles.includes}>
        <div className={styles.container}>
          <div className={styles.sectionTag}>What's included</div>
          <h2 className={styles.sectionH2}>Everything your practice needs.<br />Nothing you have to manage.</h2>
          <div className={styles.includesGrid}>
            {[
              { title: "Free website & hosting", desc: "Professionally designed, mobile-optimized website at no cost — included in Everything Pricing.", tags: ["Free hosting", "Custom domain"], icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="3" width="16" height="13" rx="2.5" stroke="#1a8a66" strokeWidth="1.4"/><path d="M2 8h16M7 3v5" stroke="#1a8a66" strokeWidth="1.4" strokeLinecap="round"/></svg> },
              { title: "EHR calendar integration", desc: "Clients book directly into your EHR from your website. Real-time availability, no double-entry.", tags: ["Live booking", "EHR synced"], icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3" y="4" width="14" height="13" rx="2" stroke="#1a8a66" strokeWidth="1.4"/><path d="M7 2v3M13 2v3M3 10h14" stroke="#1a8a66" strokeWidth="1.4" strokeLinecap="round"/></svg> },
              { title: "Multi-platform ad campaigns", desc: "Managed campaigns across Google, Zocdoc, and social media — continuously tuned for ROI.", tags: ["PPC", "Social ads"], icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 5h14M3 10h10M3 15h6" stroke="#1a8a66" strokeWidth="1.4" strokeLinecap="round"/></svg> }
            ].map((item, i) => (
              <div className={styles.includeCard} key={i}>
                <div className={styles.includeIcon}>{item.icon}</div>
                <div className={styles.includeTitle}>{item.title}</div>
                <div className={styles.includeDesc}>{item.desc}</div>
                <div className={styles.includeChannels}>
                  {item.tags.map((tag, j) => (
                    <span className={`${styles.chTag} ${j === 0 ? styles.chEhr : styles.chEmail}`} key={j}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.finalCta}>
        <div className={styles.container}>
          <div className={styles.finalCtaTag}>Websites & Lead Generation</div>
          <h2>Stop losing clients to practices<br />that respond faster than you.</h2>
          <p>A beautiful website, multi-platform ads, and automated follow-up — all managed for you.</p>
          <div className={styles.finalBtns}>
            <Link href="/contact#contact-form" className={styles.btnWhite} target="_blank" rel="noopener noreferrer">Book a free demo</Link>
            <Link href={`tel:${siteConfig.phoneRaw}`} className={styles.btnOutlineWhite}>{siteConfig.phoneLabel}: {siteConfig.phoneDisplay}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
