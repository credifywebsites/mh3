import { AiEngagementPricing } from "@/components/pricing/AiEngagementPricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Engagement Pricing — Credify | Patient Automation",
  description: "AI-powered patient reminders and scheduling pricing. Included with RCM services or available as standalone add-ons.",
};

export default function AiEngagementPricingPage() {
  return (
    <main>
      <AiEngagementPricing />
    </main>
  );
}
