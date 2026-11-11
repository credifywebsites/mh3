import type { Metadata } from "next";
import { Credentialing } from "@/components/solutions/Credentialing";

export const metadata: Metadata = {
  title: "Credentialing at $99 per application | Credify",
  description:
    "Behavioral health credentialing and payor enrollment at $99 per application on our Volume rate. CAQH setup, payor enrollment, and panel management, all handled.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CredentialingPage() {
  return <Credentialing />;
}
