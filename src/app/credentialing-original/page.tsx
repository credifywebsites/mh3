import type { Metadata } from "next";
import { Credentialing } from "@/components/solutions/Credentialing";

export const metadata: Metadata = {
  title: "Credentialing (Original) — Credify",
  description:
    "Full-lifecycle behavioral health credentialing and payer enrollment — CAQH, primary source verification, and panel management so providers enroll faster and start billing sooner.",
};

export default function CredentialingOriginalPage() {
  return <Credentialing />;
}

