"use client";

import React from "react";
import styles from "./Pricing.module.css";
import { CredentialingSection } from "./sections/CredentialingSection";

export function CredentialingPricing() {
  return (
    <div className={styles.pricingPage}>
      <CredentialingSection />
    </div>
  );
}
