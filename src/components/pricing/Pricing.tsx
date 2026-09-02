"use client";

import React from "react";
import styles from "./Pricing.module.css";
import { RcmHero } from "./sections/RcmHero";
import { MissionBanner } from "./sections/MissionBanner";
import { TrustBar } from "./sections/TrustBar";
import { PricingModels } from "./sections/PricingModels";
import { WhatsIncluded } from "./sections/WhatsIncluded";
import { ComparisonTable } from "./sections/ComparisonTable";
import { CredentialingSection } from "./sections/CredentialingSection";
import { AiEngagementSection } from "./sections/AiEngagementSection";
import { HowItWorks } from "./sections/HowItWorks";
import { ProofStrip } from "./sections/ProofStrip";
import { FaqSection } from "./sections/FaqSection";
import { FinalCta } from "./sections/FinalCta";

export function Pricing() {
  return (
    <div className={styles.pricingPage}>
      <RcmHero />
      <MissionBanner />
      <TrustBar />
      <PricingModels />
      <WhatsIncluded />
      <ComparisonTable />
      <CredentialingSection />
      <AiEngagementSection />
      <HowItWorks />
      <ProofStrip />
      <FaqSection />
      <FinalCta />
    </div>
  );
}
