import type { Metadata } from "next";
import { CredifyHome } from "@/components/credify-home/CredifyHome";
import { HomeLanding } from "@/components/ehr-site/HomeLanding";
import { AppointmentEngagement } from "@/components/solutions/AppointmentEngagement";
import siteConfig from "@/config/site";
import { usesEhrSite } from "@/config/ehrSite";

/** Credify gets the option B homepage; Keep Your EHR keeps the EHR design homepage. */
const isCredify = siteConfig.domain === "CredifyFast.com";

const CREDIFY_TITLE = "Credify | We run the operation. You focus on the care.";
const CREDIFY_DESCRIPTION =
  "Your Custom EHR by Credify plus full billing, credentialing and an AI voice receptionist, run for you. Up and running in hours. Try it free for 90 days.";

export function generateMetadata(): Metadata {
  if (isCredify) {
    return {
      title: { absolute: CREDIFY_TITLE },
      description: CREDIFY_DESCRIPTION,
      alternates: { canonical: "https://www.credifyfast.com/" },
      openGraph: {
        type: "website",
        siteName: "Credify",
        url: "https://www.credifyfast.com/",
        title: CREDIFY_TITLE,
        description: CREDIFY_DESCRIPTION,
        // Page-level openGraph replaces the layout's, so carry its image over.
        images: [{ url: siteConfig.iconPath, width: 1200, height: 630, alt: `${siteConfig.name} Logo` }],
      },
      twitter: {
        card: "summary_large_image",
        title: CREDIFY_TITLE,
        description: CREDIFY_DESCRIPTION,
        images: [siteConfig.iconPath],
      },
    };
  }

  if (!usesEhrSite) return {};

  return {
    title: `${siteConfig.name}, the EHR for behavioral health practices`,
    description: `${siteConfig.name} is the EHR, scheduler, billing engine, AI front desk, and credentialing team for small behavioral health practices. One system, one data model, one login.`,
  };
}

export default function HomePage() {
  // The previous homepages are still routed: Credify's at /growth-engine and
  // Keep Your EHR's at /keep-your-ehr.
  if (isCredify) {
    return <CredifyHome />;
  }
  if (usesEhrSite) {
    return <HomeLanding />;
  }
  return <AppointmentEngagement />;
}
