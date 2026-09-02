"use client";

import React from "react";
import Link from "next/link";
import styles from "../Pricing.module.css";

export function CredentialingSection() {
  return (
    <section className={styles.credentialing} id="credentialing-pricing">
      <div className={styles.credInner}>
        <div className={styles.sectionTag}>Credentialing & Enrollment Pricing</div>
        <h2 className={styles.sectionH2}>Credentialing that actually<br />gets providers enrolled.</h2>
        <p className={styles.sectionSub}>Per-application pricing with volume discounts. CAQH setup, payer enrollment, and panel management — all handled. Your first provider credentialing is free, no strings attached.</p>

        <div className={styles.freeBanner}>
          <span className={styles.freeBannerIcon}>★</span>
          <span className={styles.freeBannerText}><strong>First provider credentialing is free.</strong> Experience our service with zero risk before you commit.</span>
        </div>

        <div className={styles.credGrid}>
          {/* Essential */}
          <div className={styles.credCard}>
            <div className={styles.credTier}>Essential</div>
            <div className={styles.credPriceWrap}>
              <span className={styles.credCurrency}>$</span>
              <span className={styles.credPriceVal}>149</span>
            </div>
            <div className={styles.credPer}>per application</div>
            <div className={styles.credVolume}>1 – 10 applications</div>
            <p className={styles.credDesc}>Ideal for single-provider or small practices getting started. Full-service credentialing on a per-application basis.</p>
            <Link href="/contact#contact-form" className={styles.credCtaOutline} target="_blank" rel="noopener noreferrer">Get started</Link>
          </div>

          {/* Growth */}
          <div className={`${styles.credCard} ${styles.credCardFeatured}`}>
            <div className={styles.credCardBadge}>Best value</div>
            <div className={styles.credTier}>Growth</div>
            <div className={styles.credPriceWrap}>
              <span className={styles.credCurrency}>$</span>
              <span className={styles.credPriceVal}>129</span>
            </div>
            <div className={styles.credPer}>per application</div>
            <div className={styles.credVolume}>11 – 20 applications</div>
            <div className={styles.credSavings}>Save $20/application vs Essential</div>
            <p className={styles.credDesc}>For growing practices adding providers. Discounted rate kicks in automatically at 11 applications.</p>
            <Link href="/contact#contact-form" className={styles.credCtaSolid} target="_blank" rel="noopener noreferrer">Get started</Link>
          </div>

          {/* Volume */}
          <div className={styles.credCard}>
            <div className={styles.credTier}>Volume</div>
            <div className={styles.credPriceWrap}>
              <span className={styles.credCurrency}>$</span>
              <span className={styles.credPriceVal}>99</span>
            </div>
            <div className={styles.credPer}>per application</div>
            <div className={styles.credVolume}>21+ applications</div>
            <div className={styles.credSavings}>Save $50/application vs Essential</div>
            <p className={styles.credDesc}>For multi-location groups and high-volume practices. Our deepest per-application rate for bulk credentialing.</p>
            <Link href="/contact#contact-form" className={styles.credCtaOutline} target="_blank" rel="noopener noreferrer">Get started</Link>
          </div>

          {/* Enterprise */}
          <div className={styles.credCard}>
            <div className={styles.credTier}>Enterprise</div>
            <div className={styles.credPriceWrap}>
              <span className={styles.credPriceAlt}>50%</span>
            </div>
            <div className={styles.credPer}>of in-house resource cost</div>
            <div className={styles.credVolume}>2+ dedicated resources</div>
            <p className={styles.credDesc}>Two or more dedicated credentialing specialists embedded in your team — at half the cost of hiring in-house. Custom quote based on scope.</p>
            <Link href="/contact#contact-form" className={styles.credCtaOutline} target="_blank" rel="noopener noreferrer">Contact us</Link>
          </div>
        </div>

        <div className={styles.credIncludesGrid}>
          {[
            { t: "CAQH Setup & Refresh", d: "Full CAQH profile creation, attestation, and ongoing maintenance." },
            { t: "Payer Enrollment", d: "Submitted to all relevant payers — commercial, Medicaid, Medicare, and government." },
            { t: "Panel Management", d: "Ongoing tracking of panel status and re-credentialing deadlines for every provider." },
            { t: "Status Tracking", d: "Real-time updates on every application — no chasing payers yourself." },
            { t: "BH Specialization Only", d: "We credential behavioral health providers exclusively — faster approvals, fewer errors." },
            { t: "First Provider Free", d: "Zero cost, zero risk. See our work quality before any commitment." }
          ].map((inc, i) => (
            <div key={i} className={styles.credIncludeItem}>
              <div className={styles.credIncludeIcon}>
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M2 4.5l2 2 3-3" stroke="#3dbd94" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className={styles.credIncludeContent}>
                <div className={styles.credIncludeTitle}>{inc.t}</div>
                <div className={styles.credIncludeDesc}>{inc.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
