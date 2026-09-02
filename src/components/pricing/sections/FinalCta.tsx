"use client";

import React from "react";
import Link from "next/link";
import siteConfig from "@/config/site";
import styles from "../Pricing.module.css";

export function FinalCta() {
  return (
    <section className={styles.finalCta}>
      <h2>See your exact rate<br />before you commit.</h2>
      <p>We&apos;ll audit your current billing, show you where revenue is leaking, and give you a firm quote — all before you sign anything.</p>
      <div className={styles.ctaBullets}>
        <div className={styles.ctaBullet}><span className={styles.ctaCheck}>✓</span> Exact rate based on your volume & mix</div>
        <div className={styles.ctaBullet}><span className={styles.ctaCheck}>✓</span> No EHR migration required</div>
        <div className={styles.ctaBullet}><span className={styles.ctaCheck}>✓</span> Revenue leakage analysis included</div>
        <div className={styles.ctaBullet}><span className={styles.ctaCheck}>✓</span> Free trial available</div>
      </div>
      <div className={styles.finalBtns}>
        <Link href="/contact#contact-form" className={styles.btnWhite} target="_blank" rel="noopener noreferrer">Book a demo</Link>
        <a href={`tel:${siteConfig.phoneRaw}`} className={styles.btnGhost}>{siteConfig.phoneLabel}: {siteConfig.phoneDisplay}</a>
      </div>
    </section>
  );
}
