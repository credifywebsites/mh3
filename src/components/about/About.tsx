"use client";

import React, { useState } from "react";
import Link from "next/link";
import siteConfig from "@/config/site";
import styles from "./About.module.css";

const cx = (...classes: (string | boolean | undefined | null)[]) => 
  classes.filter(Boolean).join(" ");

export function About() {
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleCard = (id: string) => {
    setExpandedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className={styles.aboutPage}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroEyebrow}>About {siteConfig.name}</div>
          <h1>Behavioral Health Growth Specialists<br /><em>trusted nationwide.</em></h1>
          <p className={styles.heroSubText}>
            We exist to take billing, credentialing, and operational complexity off your plate — permanently. 
            Our team brings nearly 300 years of combined experience, purpose-built AI, and a singular focus on behavioral health.
          </p>

          <div className={styles.heroStats}>
            {[
              { num: "97%+", desc: "average collection rate achieved consistently across our client base" },
              { num: "300", desc: "years of combined experience across our billing & credentialing team" },
              { num: "1,126", desc: "payers we submit to across all 50 states" },
              { num: "100s", desc: `of providers trust ${siteConfig.name} for billing, credentialing, and growth` }
            ].map((stat, i) => (
              <div key={i} className={styles.heroStat}>
                <div className={styles.heroStatNum}>{stat.num}</div>
                <div className={styles.heroStatDesc}>{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM - NOW SECOND SECTION */}
      <section className={styles.team}>
        <div className={styles.sectionTag}>Our team</div>
        <h2 className={styles.sectionH2}>The people behind<br />helping grow your practice.</h2>
        <p className={styles.sectionSub} style={{ maxWidth: "760px" }}>
          Built by people who have lived every side of this industry.<br /><br />
          Our founders bring decades of business leadership and multiple successful exits. 
          Our AI team includes professors and engineers with deep, real-world experience spanning decades. 
          And our billing leadership is made up of directors who have navigated every payer scenario 
          behavioral health can throw at them — year after year, across countless organizations.<br /><br />
          Together, we combine strategy, technology, and operational expertise to solve problems others simply work around.
        </p>

        <div className={styles.teamGrid}>
          {/* SL Lacny */}
          <TeamCard 
            id="card-sl"
            name="Sherilynne Lacny"
            role="Co-Founder"
            type="featured"
            avatar="/images/team/sl.png"
            bioPreview="SL oversees the billing and credentialing management teams at Credify, bringing decades of experience in financial management and operational leadership."
            bioFull="SL oversees the billing and credentialing management teams at Credify, bringing decades of experience in financial management and operational leadership. She leads managers who oversee more than 80 credentialing and RCM experts who leverage AI technology and team accountability to consistently achieve collection rates in the mid to high 90% range at below-market pricing."
            backgroundLabel="Background"
            accPreview="Before healthcare, SL led design, construction, and development for Rancho Santa Fe Investments."
            accFull="Before healthcare, SL led design, construction, and development for Rancho Santa Fe Investments — the Lacnys' privately held corporation responsible for multi-million-dollar estates and condo conversions. For nearly 40 years, she has managed all financial aspects of their business and investment ventures."
            isExpanded={expandedCards["card-sl"]}
            onToggle={() => toggleCard("card-sl")}
          />

          {/* Jay Lacny */}
          <TeamCard 
            id="card-jl"
            name="Jay Lacny"
            role="Co-Founder"
            type="featured"
            avatar="/images/team/jay.png"
            bioPreview="Jay leads innovation and strategy at Credify, leveraging AI to streamline billing, credentialing, and payer interactions."
            bioFull="Jay leads innovation and strategy at Credify, leveraging AI to streamline billing, credentialing, and payer interactions. With over a decade in healthcare, he drives automation that lowers costs, improves efficiency, and strengthens margins for continued investment in advanced AI technologies."
            backgroundLabel="Background"
            accPreview="Jay and SL co-founded multiple companies, beginning with an Internet service provider sold in a multi-million-dollar transaction."
            accFull="Jay and SL co-founded multiple companies, beginning with an Internet service provider sold in a multi-million-dollar transaction. They later founded SimplyStocks — a financial data firm serving Michael Dell, JP Morgan, and Banc of America Securities — growing to 400 employees before acquisition by McGraw Hill, which expanded it to more than 4,000."
            isExpanded={expandedCards["card-jl"]}
            onToggle={() => toggleCard("card-jl")}
          />

          {/* Prof. Milan */}
          <TeamCard 
            id="card-ms"
            name="Prof. Milan Segedinac, PhD"
            role="Chief of Artificial Intelligence"
            type="ai"
            avatar="/images/team/milan.png"
            bioPreview="Professor Segedinac wrote his thesis on AI fourteen years ago and has been building real-world AI systems ever since."
            bioFull="Professor Segedinac wrote his thesis on AI fourteen years ago. He is a university professor lecturing and holding practical classes on artificial intelligence, web applications, advanced web technologies, knowledge-based systems, and semantic web."
            isExpanded={expandedCards["card-ms"]}
            onToggle={() => toggleCard("card-ms")}
          />

          {/* Prof. Goran */}
          <TeamCard 
            id="card-gs"
            name="Prof. Goran Savić, PhD"
            role="Director of Machine Learning"
            type="ai"
            avatar="/images/team/goran.png"
            bioPreview="Professor Savić is a published author and senior software engineer with 14+ years building machine learning systems."
            bioFull="Professor Savić is a university professor, published author, and senior software engineer with 14+ years of experience building machine learning and enterprise information systems. He has led all phases of the software development lifecycle including architecture design, project management, and deployment."
            isExpanded={expandedCards["card-gs"]}
            onToggle={() => toggleCard("card-gs")}
          />

          {/* Janet Dobson */}
          <TeamCard 
            id="card-jd"
            name="Janet Dobson"
            role="Manager of QA Operations"
            avatar="/images/team/janet.png"
            bioPreview="Janet has over 14 years of experience in revenue cycle management and medical coding."
            bioFull="Janet has over 14 years of experience in revenue cycle management and medical coding. She oversees quality assurance for Credify&apos;s offshore teams, ensuring accuracy, compliance, and efficiency across all billing and coding operations."
            isExpanded={expandedCards["card-jd"]}
            onToggle={() => toggleCard("card-jd")}
          />

          {/* Taras Pavlyk */}
          <TeamCard 
            id="card-tp"
            name="Taras Pavlyk"
            role="Director of Growth Automation"
            isAiAvatar
            bioPreview="Taras owns the systems that fill schedules and reduce revenue leakage across SMS, email, and automated workflows."
            bioFull="Taras owns the systems that fill schedules and reduce revenue leakage. He leads SEO, lead generation, and automated patient communication — including appointment reminders, follow-ups, and engagement workflows across SMS, email, and pop-ups."
            backgroundLabel="Focus"
            accPreview="One outcome: every available session filled, every lead followed up."
            accFull="One outcome: ensuring every available session is filled, every lead is followed up, and no opportunity is lost due to operational gaps."
            isExpanded={expandedCards["card-tp"]}
            onToggle={() => toggleCard("card-tp")}
          />

          {/* Pranav Patel - UPDATED NAME */}
          <TeamCard 
            id="card-pp"
            name="Pranav Patel"
            role="Director of Revenue Cycle Operations"
            avatar="/images/team/pranav.png"
            bioPreview="Pranav brings 12+ years of RCM leadership built on one principle: results are earned, not inherited. He runs high-performance teams where contribution drives everything."
            bioFull="Pranav brings 12+ years of RCM leadership built on one principle: results are earned, not inherited. He oversees large-scale revenue cycle operations at Credify, managing teams of specialists through clearly defined policies, measurable performance standards, and a culture of strict accountability. His teams know exactly what&apos;s expected — and exactly what exceptional performance means for their career."
            backgroundLabel="Leadership philosophy"
            accPreview="Pranav doesn&apos;t believe in tenure as a shield or title as a safety net."
            accFull="Pranav doesn&apos;t believe in tenure as a shield or title as a safety net. He&apos;s built and rebuilt RCM operations across dozens of organizations — promoting early when performance demands it, and making hard calls when it doesn&apos;t. In his teams, every specialist knows their contribution is seen, measured, and rewarded accordingly. He holds the same standard for himself as he does for the people he leads."
            isExpanded={expandedCards["card-pp"]}
            onToggle={() => toggleCard("card-pp")}
          />

          {/* Balaji Miller */}
          <TeamCard 
            id="card-bm"
            name="Balaji Miller"
            role="Director of Offshore RCM Operations"
            avatar="/images/team/balaji.png"
            bioPreview="As Director of Offshore RCM Operations, Balaji focuses on process optimization and measurable productivity."
            bioFull="As Director of Offshore RCM Operations, Balaji focuses on process optimization, measurable productivity, and maintaining seamless collaboration between onshore and offshore teams to deliver consistent, high-quality results."
            isExpanded={expandedCards["card-bm"]}
            onToggle={() => toggleCard("card-bm")}
          />
        </div>
      </section>

      {/* WHO WE SERVE - NOW THIRD SECTION */}
      <section className={styles.serve}>
        <div className={styles.sectionTag}>Who we serve</div>
        <h2 className={styles.sectionH2}>You focus on client care.<br /><em>We handle everything else.</em></h2>
        <p className={styles.sectionSub}>
          We bring the technology, billing infrastructure, and operational systems so your team never has to choose between delivering great care and running a great business. That&apos;s not a promise — it&apos;s the only way we work.
        </p>

        <div className={styles.serveGrid}>
          <div className={cx(styles.serveCard, styles.serveCardDo)}>
            <div className={styles.serveCardHeader}>
              <div className={cx(styles.serveCardIcon, styles.serveCardIconGreen)}>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none"><path d="M3.5 8.5l3.5 3.5 6.5-7" stroke="#1a8a66" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className={cx(styles.serveCardTitle, styles.serveCardTitleGreen)}>We serve</div>
            </div>
            <div className={styles.serveItems}>
              {[
                "Behavioral Health Agencies",
                "Outpatient Practices",
                "Agencies with $50K+ Monthly Collections",
                "Group Practices — PHP, IOP, Outpatient",
                "Multi-location behavioral health organizations"
              ].map((item, i) => (
                <div key={i} className={styles.serveItem}>
                  <div className={styles.serveDotGreen}>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3" stroke="#1a8a66" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className={cx(styles.serveCard, styles.serveCardDont)}>
            <div className={styles.serveCardHeader}>
              <div className={cx(styles.serveCardIcon, styles.serveCardIconGray)}>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none"><path d="M4 4l9 9M13 4L4 13" stroke="#8aaa9a" strokeWidth="1.6" strokeLinecap="round"/></svg>
              </div>
              <div className={cx(styles.serveCardTitle, styles.serveCardTitleGray)}>We don&apos;t serve</div>
            </div>
            <div className={styles.serveItems}>
              {[
                "ACOs (Accountable Care Organizations)",
                "FQHCs (Federally Qualified Health Centers)",
                "Hospitals",
                "Inpatient Facilities with Complex Billing Rules",
                "Medical Specialties other than Primary Care"
              ].map((item, i) => (
                <div key={i} className={styles.serveItem} style={{ color: "var(--ink4)" }}>
                  <div className={styles.serveDotGray}>—</div>
                  {item}
                </div>
              ))}
              <div className={styles.serveItem} style={{ fontWeight: 600, background: "rgba(192,57,43,0.05)", border: "1px solid rgba(192,57,43,0.12)", borderRadius: "8px", padding: "8px 10px", marginTop: "4px" }}>
                <div className={styles.serveDotGray} style={{ background: "rgba(192,57,43,0.08)", borderColor: "rgba(192,57,43,0.2)", color: "#c0392b" }}>—</div>
                <span style={{ color: "#c0392b" }}>Agencies under $50K/month in collections or gross revenue</span>
              </div>
            </div>
            <p style={{ fontSize: "12.5px", color: "var(--ink4)", lineHeight: 1.7, marginTop: "16px", paddingTop: "14px", borderTop: "1px solid var(--border)" }}>
              We only partner with behavioral health agencies that are ready to scale — but lack a true growth partner to get them there. We don&apos;t just advise from the sidelines — we step in as the missing piece, aligning our success with yours and putting real skin in the game. If scaling isn&apos;t a priority right now, we may not be the right fit — and that&apos;s okay. 
              <strong style={{ color: "var(--ink2)" }}> We&apos;re built for agencies that are ready to grow and want a partner fully aligned with that vision.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* INDIA OFFICE */}
      <section className={styles.india}>
        <div className={styles.indiaInner}>
          <div>
            {/* <div className={styles.sectionTag}>Vijayawada, India</div> */}
            <h2 className={styles.sectionH2}>More seats.<br />More speed.<br />More support.</h2>
            <p className={styles.indiaSub}>We&apos;ve opened a brand-new office to match our growing demand — so you get faster onboarding, cleaner claims, and round-the-clock support.</p>
            <div className={styles.indiaStats}>
              {[
                { num: "100", desc: "seats live and operational today" },
                { num: "225", desc: "total capacity as we continue to scale" },
                { num: "24/7", desc: "support coverage across time zones" },
                { num: "80+", desc: "credentialing and RCM specialists on team" }
              ].map((stat, i) => (
                <div key={i} className={styles.indiaStat}>
                  <div className={styles.indiaStatNum}>{stat.num}</div>
                  <div className={styles.indiaStatDesc}>{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.indiaFeatures}>
            {[
              { icon: <path d="M2 9l4 4 9-9" stroke="#3dbd94" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>, title: "Faster onboarding", desc: "Additional capacity means new clients go live faster — no backlog, no delays in claim submission." },
              { icon: <><rect x="2" y="3" width="13" height="11" rx="2" stroke="#3dbd94" strokeWidth="1.4"/><path d="M5 7h7M5 10h4" stroke="#3dbd94" strokeWidth="1.4" strokeLinecap="round"/></>, title: "Cleaner claims", desc: "More specialists, better QA coverage, and AI-assisted review mean fewer denials on first submission." },
              { icon: <><circle cx="8.5" cy="8.5" r="6.5" stroke="#3dbd94" strokeWidth="1.4"/><path d="M8.5 5v3.5l2.5 2" stroke="#3dbd94" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></>, title: "Round-the-clock support", desc: "Time zone coverage means your payer issues, credentialing questions, and AR follow-ups don&apos;t wait until Monday." },
              { icon: <path d="M8.5 2l1.5 3.5H14l-3.5 2.5 1.5 3.5-3.5-2.5-3.5 2.5 1.5-3.5L3 5.5h4L8.5 2z" stroke="#3dbd94" strokeWidth="1.4" strokeLinejoin="round"/>, title: "Triple-redundant backups", desc: "HIPAA-compliant data security with triple redundancy — your data is protected at every layer, always." }
            ].map((f, i) => (
              <div key={i} className={styles.indiaFeature}>
                <div className={styles.indiaFeatureIcon}>
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none">{f.icon}</svg>
                </div>
                <div>
                  <div className={styles.indiaFeatureTitle}>{f.title}</div>
                  <div className={styles.indiaFeatureDesc}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faq}>
        <div className={styles.sectionTag}>Frequently asked questions</div>
        <h2 className={styles.sectionH2}>Answered clearly.</h2>
        <p className={styles.sectionSub}>No vague answers. If you don&apos;t see what you need, call us at {siteConfig.phoneDisplay}.</p>

        <div className={styles.faqGrid}>
          {[
            { q: "Why are your rates so inexpensive compared to other vendors?", a: "We leverage AI and advanced automation to significantly reduce labor costs — passing those savings directly to clients without compromising quality or collection rates." },
            { q: "How many health insurance plans do you support?", a: "We support <strong>over 1,126 plans</strong>, including Medicaid, Medicare, and their MCOs and ACOs across all 50 states." },
            { q: "What states do you serve?", a: "We serve <strong>all 50 states</strong> and do not provide services outside of the United States." },
            { q: "Do you credential medical specialties, CCBHCs, and FQHCs?", a: "Except primary care physicians, we do not. <strong>We focus exclusively on behavioral health agencies</strong> — which allows us to be a highly efficient credentialing and enrollment operation." },
            { q: "How long does the credentialing process take?", a: "It depends on the payer, but most take <strong>45–90 days</strong>. Our team works to shorten that window with aggressive payer follow-up at every stage." },
            { q: "Can you help if I&apos;ve already started the process?", a: "Absolutely. We can pick up exactly where you left off, or restart from the beginning if needed — whichever gets your providers enrolled faster." }
          ].map((f, i) => (
            <div key={i} className={styles.faqItem}>
              <div className={styles.faqQ}>{f.q}</div>
              <div className={styles.faqA} dangerouslySetInnerHTML={{ __html: f.a }} />
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.finalCta}>
        <div className={styles.finalCtaTag}>We Run Your Practice</div>
        <h2>Ready to hand it over<br />and just focus on care?</h2>
        <p>Call us now or fill out our contact form. We respond within the hour — and we&apos;ll show you exactly what getting started actually looks like.</p>
        <div className={styles.finalBtns}>
          {/* <a className={styles.btnWhite} href={`tel:${siteConfig.phoneRaw}`}>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M3 3c0 5.523 4.477 10 10 10h.5a1 1 0 001-1v-2a1 1 0 00-.724-.962l-2.276-.65a1 1 0 00-1.09.38l-.666.96A7.56 7.56 0 015.272 6.25l.96-.666a1 1 0 00.38-1.09l-.65-2.276A1 1 0 005 1.5H3a1 1 0 00-1 1V3z" stroke="#0f5540" strokeWidth="1.5" strokeLinecap="round"/></svg>
            Call {siteConfig.phoneDisplay}
          </a> */}
          <Link href={`tel:${siteConfig.phoneRaw}`} className={styles.btnGhost}>
            {siteConfig.phoneLabel}: {siteConfig.phoneDisplay}
          </Link>
        </div>
      </section>
    </div>
  );
}

interface TeamCardProps {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  isAiAvatar?: boolean;
  type?: "featured" | "ai" | "normal";
  bioPreview: string;
  bioFull: string;
  backgroundLabel?: string;
  accPreview?: string;
  accFull?: string;
  isExpanded: boolean;
  onToggle: () => void;
}

function TeamCard({ 
  id, name, role, avatar, isAiAvatar, type, 
  bioPreview, bioFull, backgroundLabel, accPreview, accFull,
  isExpanded, onToggle 
}: TeamCardProps) {
  return (
    <div className={cx(
      styles.teamCard, 
      type === "featured" && styles.teamCardFeatured,
      type === "ai" && styles.teamCardAi,
      isExpanded && styles.expanded
    )}>
      <div className={styles.teamCardTop}>
        <div className={styles.teamAvatar}>
          {isAiAvatar ? (
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="32" r="32" fill="#0a1f30"/>
              <line x1="6" y1="38" x2="58" y2="38" stroke="rgba(61,189,148,0.18)" strokeWidth="1"/>
              <circle cx="32" cy="20" r="9.5" fill="rgba(61,189,148,0.2)" stroke="#3dbd94" strokeWidth="1.2"/>
              <path d="M13 56c0-10.5 8.5-19 19-19s19 8.5 19 19" fill="rgba(61,189,148,0.16)" stroke="#3dbd94" strokeWidth="1.2"/>
              <text x="32" y="25" textAnchor="middle" fontFamily="Georgia,serif" fontSize="11" fill="#3dbd94" fontStyle="italic">TP</text>
            </svg>
          ) : (
            <img src={avatar} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          )}
        </div>
        <div className={styles.teamCardNameWrap}>
          <div className={styles.teamCardName}>{name}</div>
          <div className={styles.teamCardRole}>{role}</div>
        </div>
      </div>
      <div className={styles.teamCardBody}>
        <div className={styles.teamCardBio}>
          {!isExpanded ? (
            <p className={styles.bioPreview}>{bioPreview}</p>
          ) : (
            <p className={styles.bioFull}>{bioFull}</p>
          )}
        </div>
        <button className={styles.readMoreBtn} onClick={onToggle}>
          {isExpanded ? "Show less" : "Read more"} 
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4l4 4 4-4" stroke="#1a8a66" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        {(accPreview || accFull) && (
          <div className={styles.teamCardAccomplishments}>
            <div className={styles.teamCardAccLabel}>{backgroundLabel || "Background"}</div>
            {!isExpanded ? (
              <p className={styles.accPreview}>{accPreview}</p>
            ) : (
              <p className={styles.accFull}>{accFull}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
