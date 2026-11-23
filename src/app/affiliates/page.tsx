import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AffiliatesPage } from "@/components/partner-programs/AffiliatesPage";
import siteConfig from "@/config/site";

export const metadata: Metadata = {
  title: "Affiliate Program | Credify",
  description:
    "Introduce behavioral health practices and agencies to Credify. They get a free 90-day trial; you earn a share of Credify's fee every month for 3 years.",
};

export default function Page() {
  // The affiliate program is a Credify offer; the white-label builds don't have it.
  if (siteConfig.name.toLowerCase() !== "credify") notFound();
  return <AffiliatesPage />;
}
