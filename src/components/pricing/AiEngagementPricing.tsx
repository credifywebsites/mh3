"use client";

import React from "react";
import styles from "./Pricing.module.css";
import { AiEngagementSection } from "./sections/AiEngagementSection";

export function AiEngagementPricing() {
  return (
    <div className={styles.pricingPage}>
      <AiEngagementSection dark={true} />
    </div>
  );
}
