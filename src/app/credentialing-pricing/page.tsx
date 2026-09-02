import { CredentialingPricing } from "@/components/pricing/CredentialingPricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Credentialing Pricing — Credify | Behavioral Health Enrollment",
  description: "Affordable, per-application credentialing and enrollment pricing for behavioral health providers. Volume discounts available.",
};

export default function CredentialingPricingPage() {
  return (
    <main>
      <CredentialingPricing />
    </main>
  );
}
