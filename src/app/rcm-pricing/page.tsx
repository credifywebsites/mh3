import { BillingPricing } from "@/components/pricing/BillingPricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "RCM Pricing — Credify | Behavioral Health RCM",
  description: "Transparent billing and RCM pricing for behavioral health. Percentage-based and performance-based models available.",
};

export default function RcmPricingPage() {
  return (
    <main>
      <BillingPricing />
    </main>
  );
}
