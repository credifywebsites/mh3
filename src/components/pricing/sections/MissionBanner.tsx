"use client";

import React from "react";
import Link from "next/link";
import styles from "../Pricing.module.css";

export function MissionBanner() {
  return (
    <div className={styles.missionBanner}>
      <div className={styles.missionTagline}>
        You focus on care.<br /><em>We run everything else.</em>
      </div>
      <div className={styles.missionRight}>
        <div className={styles.missionReportsEyebrow}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <rect x="1" y="5" width="2.5" height="5" rx="1" fill="#1a8a66" opacity=".4"/>
            <rect x="4.75" y="3" width="2.5" height="7" rx="1" fill="#1a8a66" opacity=".65"/>
            <rect x="8.5" y="1" width="2.5" height="9" rx="1" fill="#1a8a66"/>
          </svg>
          20 Executive Reports
        </div>
        <div className={styles.missionReportsTitle}>See everything. Decide faster.</div>
        <p className={styles.missionReportsDesc}>
          Provider profitability, payer mix, utilization, off-hours, no-show impact, and more — updated daily in 
          Power BI so leadership always knows where the practice stands.
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
          <div className={styles.missionReportsBadge}>
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <circle cx="5.5" cy="5.5" r="5" stroke="white" strokeWidth="1.2"/>
              <path d="M3 5.5l2 2 3-3" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Included in all plans
          </div>
          <Link href="/reports" style={{ 
            fontSize: "12px", 
            fontWeight: 600, 
            color: "var(--brand600)", 
            textDecoration: "none",
            borderBottom: "1px solid var(--brand100)",
            paddingBottom: "1px"
          }}>
            View live sample reports →
          </Link>
        </div>
      </div>
    </div>
  );
}
