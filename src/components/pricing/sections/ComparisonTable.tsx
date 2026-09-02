"use client";

import React from "react";
import styles from "../Pricing.module.css";

export function ComparisonTable() {
  return (
    <section className={styles.comparison}>
      <div className={styles.sectionTag}>Compare plans</div>
      <h2 className={styles.sectionH2}>Side by side.</h2>
      <p className={styles.sectionSub}>All plans include the full billing and credentialing stack. The difference is in how growth incentives are structured.</p>

      <div className={styles.tableWrap}>
        <table className={styles.compTable}>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Percentage of Collections</th>
              <th className={styles.featuredColHeader}>Performance-Based ✦ Most Popular</th>
              <th>Flexible Service Mix</th>
            </tr>
          </thead>
          <tbody>
            {[
              { f: "AI-Assisted Billing", c1: "✓", c2: "✓", c3: "✓" },
              { f: "Credentialing Included", c1: "✓", c2: "✓", c3: "Add-on" },
              { f: "Eligibility Verification", c1: "✓", c2: "✓", c3: "✓" },
              { f: "Denial Management & Appeals", c1: "✓", c2: "✓", c3: "✓" },
              { f: "20 Executive Reports", c1: "✓", c2: "✓", c3: "Add-on" },
              { f: "AI Scheduling & No-Show Outreach", c1: "—", c2: "✓", c3: "Add-on" },
              { f: "Provider Recruiting Pipeline", c1: "—", c2: "✓", c3: "Add-on" },
              { f: "Client Reactivation Sequences", c1: "—", c2: "✓", c3: "Add-on" },
              { f: "Dedicated Account Manager", c1: "—", c2: "✓", c3: "For large plans" },
              { f: "Performance Milestone Bonuses", c1: "—", c2: "✓", c3: "—" },
              { f: "Flat Monthly Rate Option", c1: "—", c2: "—", c3: "✓" },
              { f: "Pricing Structure", c1: "3.49%–3.99% of collections", c2: "Base rate + milestones", c3: "Custom / modular" },
              { f: "Best for", c1: "Practices wanting pure % alignment", c2: "Practices ready to grow fast", c3: "Practices with specific gaps" }
            ].map((row, i) => (
              <tr key={i}>
                <td className={styles.featureName}>{row.f}</td>
                <td>{row.c1 === "✓" ? <span className={styles.checkY}>✓</span> : row.c1}</td>
                <td className={styles.featuredCol}>{row.c2 === "✓" ? <span className={styles.checkY}>✓</span> : row.c2}</td>
                <td>{row.c3 === "✓" ? <span className={styles.checkY}>✓</span> : (row.c3 === "Add-on" || row.c3 === "For large plans") ? <span className={styles.checkOpt}>{row.c3}</span> : row.c3}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
