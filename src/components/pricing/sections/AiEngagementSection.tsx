"use client";

import React from "react";
import styles from "../Pricing.module.css";

interface AiEngagementSectionProps {
  dark?: boolean;
}

export function AiEngagementSection({ dark }: AiEngagementSectionProps) {
  return (
    <section className={`${styles.aiServices} ${dark ? styles.aiServicesDark : ""}`} id="ai-pricing">
      <div className={styles.sectionTag}>AI-Powered Patient Engagement</div>
      <h2 className={styles.sectionH2}>Automated. Intelligent.<br />Already included with RCM.</h2>
      <p className={styles.sectionSub}>Both services are included at no extra cost for RCM clients. Available as standalone add-ons for practices that only need patient engagement tools.</p>

      <div className={styles.aiGrid}>
        {/* Reminders */}
        <div className={styles.aiCard}>
          <div className={styles.aiCardTop}>
            <div className={styles.aiCardIcon}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="3" y="4" width="14" height="13" rx="2" stroke="#1a8a66" strokeWidth="1.4"/>
                <path d="M7 2v3M13 2v3M3 9h14" stroke="#1a8a66" strokeWidth="1.4" strokeLinecap="round"/>
                <circle cx="7" cy="13" r="1" fill="#1a8a66"/><circle cx="10" cy="13" r="1" fill="#1a8a66"/><circle cx="13" cy="13" r="1" fill="#1a8a66"/>
              </svg>
            </div>
            <div className={styles.aiCardTitle}>Appointment Reminders</div>
            <p className={styles.aiCardSub}>Automated SMS, voice, and email reminders that reduce no-shows before they happen. Sent at the right intervals, in the right channel, for each patient.</p>
            <div className={styles.aiPriceRow}>
              <span className={styles.aiPriceVal}>$0.12</span>
              <span className={styles.aiPriceUnit}>per reminder sent</span>
            </div>
            <div className={styles.aiIncludedBadge}>
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><circle cx="5.5" cy="5.5" r="5" stroke="#1a8a66" strokeWidth="1.2"/><path d="M3 5.5l2 2 3-3" stroke="#1a8a66" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Included with RCM Services
            </div>
          </div>
          <div className={styles.aiCardBottom}>
            {[
              "SMS, voice call, and email — automatically selects best channel per patient",
              "Configurable reminder cadence — 72hr, 48hr, day-of sequences",
              "Cancellation capture — patients can cancel or reschedule directly from the reminder",
              "No-show rate reporting included — track reduction over time"
            ].map((feat, i) => (
              <div key={i} className={styles.aiFeature}>
                <div className={styles.aiFeatureCheck}>
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3" stroke="#1a8a66" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span className={styles.aiFeatureText}>{feat}</span>
              </div>
            ))}
            <p className={styles.aiStandaloneNote}>Standalone (without RCM): $0.12/reminder · no monthly minimum</p>
          </div>
        </div>

        {/* Scheduling */}
        <div className={styles.aiCard}>
          <div className={styles.aiCardTop}>
            <div className={styles.aiCardIcon}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" stroke="#1a8a66" strokeWidth="1.4"/>
                <path d="M7 8.5c0-1.5 1.5-2.5 3-2.5s3 1 3 2.5c0 1.2-.8 2-2 2.5L10 12v1" stroke="#1a8a66" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="10" cy="14.5" r=".75" fill="#1a8a66"/>
              </svg>
            </div>
            <div className={styles.aiCardTitle}>Inbound & Outbound AI Scheduling</div>
            <p className={styles.aiCardSub}>AI handles inbound scheduling calls and outbound outreach — filling cancellations, reactivating inactive patients, and booking new referrals without staff involvement.</p>
            <div className={styles.aiPriceRow}>
              <span className={styles.aiPriceVal}>$0.20</span>
              <span className={styles.aiPriceUnit}>per minute</span>
            </div>
            <div className={styles.aiIncludedBadge}>
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><circle cx="5.5" cy="5.5" r="5" stroke="#1a8a66" strokeWidth="1.2"/><path d="M3 5.5l2 2 3-3" stroke="#1a8a66" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Included with RCM Services
            </div>
          </div>
          <div className={styles.aiCardBottom}>
            {[
              "Inbound: answers scheduling calls 24/7, books directly into your EHR calendar",
              "Outbound: proactively fills empty slots from waitlists and cancellation queues",
              "Reactivation sequences — re-engages patients who dropped off after intake",
              "HIPAA-compliant AI voice — natural conversation, no robotic scripts"
            ].map((feat, i) => (
              <div key={i} className={styles.aiFeature}>
                <div className={styles.aiFeatureCheck}>
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3" stroke="#1a8a66" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span className={styles.aiFeatureText}>{feat}</span>
              </div>
            ))}
            <p className={styles.aiStandaloneNote}>Standalone (without RCM): $0.20/min · billed on actual usage only</p>
          </div>
        </div>
      </div>
    </section>
  );
}
