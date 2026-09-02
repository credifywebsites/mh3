import type { Metadata } from "next";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { PartnerGate } from "@/components/partners/PartnerGate";
import { PartnersDeck } from "@/components/partners/PartnersDeck";
import siteConfig from "@/config/site";
import { PARTNER_COOKIE, isValidAccessCookie } from "./access";

export const metadata: Metadata = {
  title: `Partner Overview | ${siteConfig.name}`,
  description: "Practice partner overview of the Credify platform.",
  robots: { index: false, follow: false },
};

export default async function PartnersPage() {
  // The partner deck is a Credify asset — it is not part of the white-label builds.
  if (siteConfig.name.toLowerCase() !== "credify") {
    notFound();
  }

  const cookieStore = await cookies();
  const unlocked = isValidAccessCookie(cookieStore.get(PARTNER_COOKIE)?.value);

  return unlocked ? <PartnersDeck /> : <PartnerGate />;
}
