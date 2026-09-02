import { GdprCompliance } from "@/components/legal/GdprCompliance";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GDPR Compliance — Credify",
  description: "Learn about GDPR compliance and data protection at CredifyFast.com.",
};

export default function GdprPage() {
  return (
    <main>
      <GdprCompliance />
    </main>
  );
}
