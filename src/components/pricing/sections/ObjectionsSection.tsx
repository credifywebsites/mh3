"use client";

import React from "react";
import styles from "../Pricing.module.css";

export function ObjectionsSection() {
  return (
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
  );
}
