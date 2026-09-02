"use client";

import React from "react";
import Link from "next/link";
import styles from "../Pricing.module.css";

export function RcmHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroLeft}>
          <div className={styles.heroEyebrow}>
            <span className={styles.liveDot}></span> RCM & Credentialing Pricing
          </div>
          <h1>Simple pricing.<br /><em>No surprises.</em></h1>
          <p className={styles.heroSubText}>
            We charge a percentage of what we actually collect — so our incentive is always aligned with yours. 
            Billing, eligibility, and credentialing included in every plan.
          </p>

          <div className={styles.heroPriceCallout}>
            <span className={styles.heroPriceFrom}>From</span>
            <span className={styles.heroPriceVal}>3.49%</span>
            <span className={styles.heroPriceDesc}>of collections — eligibility & credentialing included</span>
          </div>

          <div className={styles.heroBtns}>
            <Link href="/contact#contact-form" className={styles.btnPrimary} target="_blank" rel="noopener noreferrer">
              Get a free quote
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2 6.5h9M7 2.5l4 4-4 4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="/contact#contact-form" className={styles.btnOutlineWhite} target="_blank" rel="noopener noreferrer">Try Credify free →</Link>
          </div>

          <div className={styles.heroIncludes}>
            {[
              "No setup fees",
              "No long-term contracts",
              "Works with any EHR",
              "Free trial available",
              "HIPAA-aligned & BAA signed"
            ].map((text, i) => (
              <div key={i} className={styles.heroIncludeItem}>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <circle cx="7.5" cy="7.5" r="7" stroke="#3dbd94" strokeWidth="1.4"/>
                  <path d="M4.5 7.5l2.5 2.5 4-4" stroke="#3dbd94" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {text}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.reportsCard}>
          <div className={styles.reportsHeader}>
            <div className={styles.reportsLabel}>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <rect x="1" y="6" width="3" height="6" rx="1" fill="#3dbd94" opacity=".5"/>
                <rect x="5" y="4" width="3" height="8" rx="1" fill="#3dbd94" opacity=".75"/>
                <rect x="9" y="1" width="3" height="11" rx="1" fill="#3dbd94"/>
              </svg>
              20 Executive Reports
            </div>
            <div className={styles.reportsIncluded}>Included in all plans</div>
          </div>
          <div className={styles.reportsBody}>
            <div className={styles.reportsHeadline}>Everything leadership needs to see — updated daily.</div>
            <p className={styles.reportsDesc}>Every plan includes full access to 20 behavioral health executive reports in Power BI. No extra cost, no add-on tier.</p>
            <div className={styles.reportsList}>
              {[
                "Provider profitability by payer & location",
                "No-show rate & revenue impact",
                "Payer mix & collection rate analysis",
                "Utilization, off-hours, & staff compensation",
                "Paid & non-paid referral ROI"
              ].map((item, i) => (
                <div key={i} className={styles.reportsListItem}>
                  <div className={styles.reportsDot}></div>
                  {item}
                </div>
              ))}
            </div>
            <Link href="/reports" className={styles.reportsBtn}>
              <span className={styles.liveDot}></span>
              View live sample reports →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
