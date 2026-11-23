import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ConsultantsPage } from "@/components/partner-programs/ConsultantsPage";
import siteConfig from "@/config/site";

export const metadata: Metadata = {
  title: "Consultant Partners | Credify",
  description:
    "Partner with Credify to help behavioral health agencies evaluate their operations, design better workflows and implement Your Custom EHR by Credify.",
};

export default function Page() {
  // The consultant partner program is a Credify offer; the white-label builds don't have it.
  if (siteConfig.name.toLowerCase() !== "credify") notFound();
  return <ConsultantsPage />;
}
