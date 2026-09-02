"use client";

import React from "react";
import Link from "next/link";
import styles from "../Pricing.module.css";

export function BillingHero() {
  return (
    <section className={styles.billingHero}>
      <div className={styles.billingHeroInner}>
        <div className={styles.billingHeroLeft}>
          <div className={styles.billingHeroEyebrow}>
            RCM & Credentialing Services
          </div>
          <h1>Billing, eligibility, and credentialing.<br />All handled. All included.</h1>
          <p className={styles.billingHeroSub}>
            Powered by people, enhanced by AI. We work with every EHR and manage the full revenue cycle so your team never has to think about it.
          </p>

          <div className={styles.billingPriceBox}>
            <div className={styles.billingPriceVal}>From 3.49%</div>
            <div className={styles.billingPriceLbl}>of collections — billing, eligibility & credentialing included in every plan</div>
          </div>

          <div className={styles.billingTrialBadge}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7.5l3 3 5-5" stroke="#3dbd94" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Free trial
          </div>

          <Link href="/contact#contact-form" className={styles.billingHeroBtn} target="_blank" rel="noopener noreferrer">
            Book a Demo
          </Link>
        </div>

        <div className={styles.billingHeroRight}>
          {[
            { 
              title: "AI-Assisted Billing", 
              desc: "Automated claim scrubs, code validation, and denial pattern detection to submit clean claims the first time.",
              icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="3" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M5 7h8M5 10h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            },
            { 
              title: "Credentialing Included", 
              desc: "CAQH refresh, payer enrollment, and panel management — handled for every provider.",
              icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.5"/><path d="M3 16c0-3.31 2.69-6 6-6s6 2.69 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            },
            { 
              title: "Eligibility Verification", 
              desc: "Real-time checks and batch runs to prevent front-end denials before they happen.",
              icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2l1.8 3.6L15 6.3l-3 2.9.7 4.1L9 11.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7L9 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>
            },
            { 
              title: "Works With Every EHR", 
              desc: "Bill from your EHR or let us handle it in our platform. No migration, no disruption.",
              icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 14V8l6-5 6 5v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="6" y="10" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.5"/></svg>
            },
            { 
              title: "Transparent Reporting", 
              desc: "Daily claim status, ERA/EFT posting, and month-end summaries you can actually act on.",
              icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="10" width="3" height="6" rx="1" fill="currentColor" opacity=".4"/><rect x="7" y="7" width="3" height="9" rx="1" fill="currentColor" opacity=".7"/><rect x="12" y="4" width="3" height="12" rx="1" fill="currentColor"/></svg>
            },
            { 
              title: "HIPAA-Aligned & BAA", 
              desc: "Compliance-first workflows with full audit trails. BAA signed at onboarding.",
              icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="4" y="8" width="10" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M6 8V6a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
              featured: true
            },
          ].map((card, i) => (
            <div key={i} className={`${styles.billingCard} ${card.featured ? styles.billingCardFeatured : ""}`}>
              <div className={styles.billingCardIcon}>
                {card.icon}
              </div>
              <div className={styles.billingCardTitle}>{card.title}</div>
              <div className={styles.billingCardDesc}>{card.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
