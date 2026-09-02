import { Pricing } from "@/components/pricing/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — Credify | RCM & Credentialing for Behavioral Health",
  description: "Transparent, performance-based pricing for behavioral health practices. Simple percentage of collections or milestone-based models. Eligibility and credentialing included.",
};

export default function PricingPage() {
  return (
    <main>
      <Pricing />
    </main>
  );
}
