import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SolutionsLanding } from "@/components/ehr-site/SolutionsLanding";
import siteConfig from "@/config/site";
import { usesEhrSite } from "@/config/ehrSite";

export function generateMetadata(): Metadata {
  return {
    title: `Solutions, ${siteConfig.name}`,
    description: `Every ${siteConfig.name} module and managed service, organised across the six stages of the client journey, from the first referral through to the paid claim.`,
  };
}

export default function SolutionsPage() {
  if (!usesEhrSite) {
    notFound();
  }

  // The ?m=<module> a homepage feature card arrives with is read client-side,
  // inside the Suspense boundary in SolutionsLanding, so this route stays static.
  return <SolutionsLanding />;
}
