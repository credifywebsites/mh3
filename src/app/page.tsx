import type { Metadata } from "next";
import { HomeLanding } from "@/components/ehr-site/HomeLanding";
import { AppointmentEngagement } from "@/components/solutions/AppointmentEngagement";
import siteConfig from "@/config/site";
import { usesEhrSite } from "@/config/ehrSite";

export function generateMetadata(): Metadata {
  if (!usesEhrSite) return {};

  return {
    title: `${siteConfig.name}, the EHR for behavioral health practices`,
    description: `${siteConfig.name} is the EHR, scheduler, billing engine, AI front desk, and credentialing team for small behavioral health practices. One system, one data model, one login.`,
  };
}

export default function HomePage() {
  // The previous homepages are still routed: Credify's at /growth-engine and
  // Keep Your EHR's at /keep-your-ehr.
  if (usesEhrSite) {
    return <HomeLanding />;
  }
  return <AppointmentEngagement />;
}
