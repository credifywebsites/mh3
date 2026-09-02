"use client";

import React from "react";
import styles from "../Pricing.module.css";

export function WhatsIncluded() {
  return (
    <section className={styles.included}>
      <div className={styles.sectionTag}>What&apos;s included</div>
      <h2 className={styles.sectionH2}>Everything in every plan.</h2>
      <p className={styles.sectionSub}>No à la carte billing for the basics. Eligibility, credentialing, reporting, and AI tools are standard — not add-ons.</p>

      <div className={styles.includedGrid}>
        {[
          { title: "AI-Assisted Billing", desc: "Automated claim scrubs, code validation, and denial pattern detection to submit clean claims the first time.", icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="3" width="14" height="12" rx="2" stroke="#1a8a66" strokeWidth="1.4"/><path d="M5 7h8M5 10h5" stroke="#1a8a66" strokeWidth="1.4" strokeLinecap="round"/></svg> },
          { title: "Credentialing", desc: "CAQH refresh, payer enrollment, and panel management — handled for every provider, every payer.", icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="7" r="3.5" stroke="#1a8a66" strokeWidth="1.4"/><path d="M3 16c0-3.31 2.69-6 6-6s6 2.69 6 6" stroke="#1a8a66" strokeWidth="1.4" strokeLinecap="round"/></svg> },
          { title: "Eligibility Verification", desc: "Real-time checks and batch runs to prevent front-end denials before they reach the billing team.", icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2l1.8 3.6L15 6.3l-3 2.9.7 4.1L9 11.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7L9 2z" stroke="#1a8a66" strokeWidth="1.4" strokeLinejoin="round"/></svg> },
          { title: "Daily Reporting Dashboard", desc: "Claim status, ERA/EFT posting, and month-end summaries you can share with leadership — updated every day.", icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="10" width="3" height="6" rx="1" fill="#1a8a66" opacity=".4"/><rect x="7" y="7" width="3" height="9" rx="1" fill="#1a8a66" opacity=".65"/><rect x="12" y="4" width="3" height="12" rx="1" fill="#1a8a66"/></svg> },
          { title: "Works With Every EHR", desc: "Bill from your EHR or let us handle it in our platform. No migration, no disruption to existing workflows.", icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 14V8l6-5 6 5v6" stroke="#1a8a66" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/><rect x="6" y="10" width="6" height="4" rx="1" stroke="#1a8a66" strokeWidth="1.4"/></svg> },
          { title: "HIPAA-Aligned & BAA", desc: "Compliance-first workflows, full audit trails, and a BAA signed at onboarding. Not optional. Not extra.", icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="4" y="8" width="10" height="8" rx="2" stroke="#1a8a66" strokeWidth="1.4"/><path d="M6 8V6a3 3 0 016 0v2" stroke="#1a8a66" strokeWidth="1.4" strokeLinecap="round"/></svg> },
          { title: "Denial Management", desc: "Every denial gets reviewed, appealed, and resubmitted. We track denial patterns and eliminate recurring causes.", icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 10l3-3 2 2 4-5" stroke="#1a8a66" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/><circle cx="14" cy="5" r="2.5" stroke="#1a8a66" strokeWidth="1.2"/></svg> },
          { title: "AR & Follow-Up", desc: "Proactive follow-up on outstanding AR, aging bucket reviews, and payer-specific escalation workflows.", icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 3v3M9 12v3M3 9h3M12 9h3M5.6 5.6l2.1 2.1M10.3 10.3l2.1 2.1M5.6 12.4l2.1-2.1M10.3 7.7l2.1-2.1" stroke="#1a8a66" strokeWidth="1.4" strokeLinecap="round"/></svg> },
          { title: "20 Executive Reports", desc: "Provider profitability, payer mix, utilization, off-hours, no-show impact, and more — updated daily in Power BI.", icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="2" width="6" height="6" rx="1.5" stroke="#1a8a66" strokeWidth="1.4"/><rect x="10" y="2" width="6" height="6" rx="1.5" stroke="#1a8a66" strokeWidth="1.4"/><rect x="2" y="10" width="6" height="6" rx="1.5" stroke="#1a8a66" strokeWidth="1.4"/><rect x="10" y="10" width="6" height="6" rx="1.5" stroke="#1a8a66" strokeWidth="1.4"/></svg> }
        ].map((item, i) => (
          <div key={i} className={styles.includedCard}>
            <div className={styles.includedCardIcon}>{item.icon}</div>
            <div className={styles.includedTitle}>{item.title}</div>
            <p className={styles.includedCardDesc}>{item.desc}</p>
            <div className={styles.includedTag}>Included in all plans</div>
          </div>
        ))}
      </div>
    </section>
  );
}
