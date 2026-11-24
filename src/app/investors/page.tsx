import type { Metadata } from "next";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { InvestorGate } from "@/components/investors/InvestorGate";
import siteConfig from "@/config/site";
import { INVESTOR_COOKIE, isValidAccessCookie } from "./access";

export const metadata: Metadata = {
  title: `Investor Pro Forma | ${siteConfig.name}`,
  description: "Private Credify investor pro forma.",
  robots: { index: false, follow: false },
};

export default async function InvestorsPage() {
  if (siteConfig.name.toLowerCase() !== "credify") notFound();
  const cookieStore = await cookies();
  const unlocked = isValidAccessCookie(cookieStore.get(INVESTOR_COOKIE)?.value);
  return unlocked ? (
    <iframe src="/investors/pro-forma" title="Credify investor pro forma" style={{ display: "block", width: "100%", height: "100vh", border: 0 }} />
  ) : <InvestorGate />;
}
