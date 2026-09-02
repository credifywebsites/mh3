"use client";

import React from "react";
import styles from "./Pricing.module.css";
import { BillingHero } from "./sections/BillingHero";
import { PricingModels } from "./sections/PricingModels";
import { ObjectionsSection } from "./sections/ObjectionsSection";

export function BillingPricing() {
  return (
    <div className={styles.pricingPage}>
      <BillingHero />
      <PricingModels />
      <ObjectionsSection />
    </div>
  );
}
