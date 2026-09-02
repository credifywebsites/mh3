"use client";

import React from "react";
import styles from "../Pricing.module.css";

export function TrustBar() {
  return (
    <div className={styles.trustBar}>
      <div className={styles.trustItem}>
        <div className={styles.trustIcon}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M9 2l1.8 3.6L15 6.3l-3 2.9.7 4.1L9 11.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7L9 2z" stroke="#1a8a66" strokeWidth="1.4" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <div className={styles.trustTextLabel}>Trustpilot</div>
          <div className={styles.trustTextVal}>TrustScore 4 ★★★★</div>
        </div>
      </div>
      <div className={styles.trustDivider}></div>
      <div className={styles.trustItem}>
        <div className={styles.trustIcon}>
          <svg width="18" height="18" viewBox="0 0 18 18">
            <path d="M17 9.2c0-.6-.1-1.1-.2-1.7H9v3.2h4.5c-.2 1-.8 1.9-1.7 2.5v2.1h2.7c1.6-1.4 2.5-3.6 2.5-6.1z" fill="#4285F4"/>
            <path d="M9 17.5c2.2 0 4.1-.7 5.5-2l-2.7-2.1c-.7.5-1.7.8-2.8.8-2.1 0-4-1.4-4.6-3.4H1.6v2.1C3 15.8 5.8 17.5 9 17.5z" fill="#34A853"/>
            <path d="M4.4 10.8c-.2-.5-.3-1-.3-1.6s.1-1.1.3-1.6V5.5H1.6C1 6.7.7 8 .7 9.2s.3 2.5.9 3.7l2.8-2.1z" fill="#FBBC05"/>
            <path d="M9 4c1.2 0 2.3.4 3.1 1.2l2.3-2.3C13 1.5 11.1.7 9 .7 5.8.7 3 2.4 1.6 5l2.8 2.1C5 5.4 6.9 4 9 4z" fill="#EA4335"/>
          </svg>
        </div>
        <div>
          <div className={styles.trustTextLabel}>Google Reviews</div>
          <div className={styles.trustTextVal}>5 Stars ★★★★★</div>
        </div>
      </div>
      <div className={styles.trustDivider}></div>
      <div className={styles.trustItem}>
        <div className={styles.trustIcon}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <rect x="3" y="8" width="12" height="9" rx="2" stroke="#1a8a66" strokeWidth="1.4"/>
            <path d="M6 8V6a3 3 0 016 0v2" stroke="#1a8a66" strokeWidth="1.4" strokeLinecap="round"/>
          </svg>
        </div>
        <div>
          <div className={styles.trustTextLabel}>Compliance</div>
          <div className={styles.trustTextVal}>HIPAA + BAA Signed</div>
        </div>
      </div>
      <div className={styles.trustDivider}></div>
      <div className={styles.trustItem}>
        <div className={styles.trustIcon}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M9 2l1.8 3.6L15 6.3l-3 2.9.7 4.1L9 11.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7L9 2z" stroke="#1a8a66" strokeWidth="1.4" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <div className={styles.trustTextLabel}>Recovery</div>
          <div className={styles.trustTextVal}>$42M+ Collected</div>
        </div>
      </div>
      <div className={styles.trustDivider}></div>
      <div className={styles.trustItem}>
        <div className={styles.trustIcon}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <rect x="2" y="3" width="14" height="12" rx="2" stroke="#1a8a66" strokeWidth="1.4"/>
            <path d="M5 7h8M5 10h5" stroke="#1a8a66" strokeWidth="1.4" strokeLinecap="round"/>
          </svg>
        </div>
        <div>
          <div className={styles.trustTextLabel}>EHR Compatibility</div>
          <div className={styles.trustTextVal}>Works With Any EHR</div>
        </div>
      </div>
    </div>
  );
}
