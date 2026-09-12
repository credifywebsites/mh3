import type { Metadata } from "next";
import { CredentialingOffer79 } from "@/components/solutions/CredentialingOffer79";

export const metadata: Metadata = {
  title: "Credentialing at $79 per application, 48 hours only | Credify",
  description:
    "Behavioral health credentialing and payer enrollment at $79 per application for the next 48 hours. CAQH setup, payer enrollment, and panel management, all handled.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CredentialingPage() {
  return <CredentialingOffer79 />;
}
