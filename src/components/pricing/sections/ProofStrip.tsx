"use client";

import React from "react";
import styles from "../Pricing.module.css";

export function ProofStrip() {
  return (
    <div className={styles.proofStrip}>
      {[
        { num: "+15%", desc: "average increase in collections within 90 days" },
        { num: "−62%", desc: "average reduction in denial rate" },
        { num: "$42M+", desc: "in revenue recovered across practices" },
        { num: "500+", desc: "behavioral health practices served" }
      ].map((stat, i) => (
        <div key={i} className={styles.proofStat}>
          <div className={styles.proofNum}>{stat.num}</div>
          <div className={styles.proofDesc}>{stat.desc}</div>
        </div>
      ))}
    </div>
  );
}
