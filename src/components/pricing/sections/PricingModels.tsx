"use client";

import React from "react";
import Link from "next/link";
import styles from "../Pricing.module.css";

export function PricingModels() {
  return (
    <section className={styles.models} id="rcm-pricing">
      <div className={styles.sectionTag}>Pricing models</div>
      <h2 className={styles.sectionH2}>You pay us when we deliver.</h2>
      <p className={styles.sectionSub}>Three ways to engage — all tied to what actually gets collected. Volume, specialty mix, and service scope determine your final rate.</p>

      <div className={styles.modelsGrid}>
        {/* Percentage */}
        <div className={styles.modelCard}>
          <div className={styles.modelTag}>Pay From Results</div>
          <div className={styles.modelName}>Percentage<br />of Collections</div>
          <div className={styles.modelOneLiner}>You grow, we earn — tied directly to what we collect</div>
          <div className={styles.modelPriceBox}>
            <div className={styles.modelPriceVal}>3.49% – 3.99%</div>
            <div className={styles.modelPriceDesc}>of net collections · eligibility + credentialing included</div>
          </div>
          <p className={styles.modelDesc}>Our fee is a percentage of the revenue we recover for you. If collections don&apos;t improve, our effective fee goes down. Zero collections growth means zero fee growth.</p>
          <div className={styles.modelIncludes}>
            {[
              "AI-assisted claim scrubbing & submission",
              "Eligibility verification included",
              "Credentialing included",
              "Daily reporting dashboard",
              "Denial management & appeals"
            ].map((item, i) => (
              <div key={i} className={styles.modelIncludeItem}>
                <div className={styles.checkIcon}>
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3" stroke="#1a8a66" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                {item}
              </div>
            ))}
          </div>
          <Link href="/contact#contact-form" className={styles.modelCtaOutline} target="_blank" rel="noopener noreferrer">Get a quote</Link>
        </div>

        {/* Performance-Based */}
        <div className={`${styles.modelCard} ${styles.modelCardFeatured}`}>
          <div className={styles.modelCardBadge}>Most popular</div>
          <div className={styles.modelTag}>Pay For Progress</div>
          <div className={styles.modelName}>Performance-Based<br />Components</div>
          <div className={styles.modelOneLiner}>Incentives only kick in when your metrics move</div>
          <div className={styles.modelPriceBox}>
            <div className={styles.modelPriceVal}>Base + Performance</div>
            <div className={styles.modelPriceDesc}>low base rate + bonuses tied to utilization, collections & no-show reductions</div>
          </div>
          <p className={styles.modelDesc}>A modest base covers operations. Growth milestones — utilization improvements, reactivation rates, collections increases — trigger our performance fees. Milestones you approve in advance.</p>
          <div className={styles.modelIncludes}>
            {[
              "Everything in Percentage model",
              "Custom milestone definitions",
              "Growth platform access (AI scheduling, outreach)",
              "Executive report suite (16 reports)",
              "Dedicated account manager"
            ].map((item, i) => (
              <div key={i} className={styles.modelIncludeItem}>
                <div className={styles.checkIcon}>
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3" stroke="#1a8a66" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                {item}
              </div>
            ))}
          </div>
          <Link href="/contact#contact-form" className={styles.modelCta} target="_blank" rel="noopener noreferrer">Get a quote</Link>
        </div>

        {/* Flexible */}
        <div className={styles.modelCard}>
          <div className={styles.modelTag}>Pay For What You Need</div>
          <div className={styles.modelName}>Flexible<br />Service Mix</div>
          <div className={styles.modelOneLiner}>Subscribe to only the services your practice actually needs</div>
          <div className={styles.modelPriceBox}>
            <div className={styles.modelPriceVal}>Custom</div>
            <div className={styles.modelPriceDesc}>modular services · scale up or down as you grow</div>
          </div>
          <p className={styles.modelDesc}>Choose the services where your practice has the biggest gaps. RCM only, credentialing only, or the full platform. Add or remove modules without penalty as your needs change.</p>
          <div className={styles.modelIncludes}>
            {[
              "RCM only, or credentialing only",
              "Add AI scheduling & no-show outreach",
              "Add provider recruiting pipeline",
              "Month-to-month, no long-term lock-in",
              "Flat monthly rate where % is restricted"
            ].map((item, i) => (
              <div key={i} className={styles.modelIncludeItem}>
                <div className={styles.checkIcon}>
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3" stroke="#1a8a66" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                {item}
              </div>
            ))}
          </div>
          <Link href="/contact#contact-form" className={styles.modelCtaOutline} target="_blank" rel="noopener noreferrer">Get a quote</Link>
        </div>
      </div>
    </section>
  );
}
