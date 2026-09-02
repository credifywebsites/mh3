import siteConfig from "@/config/site";
import { KeepYourEhr } from "@/components/solutions/KeepYourEhr";

export const metadata = {
  title: "Keep Your EHR — Credify Behavioral Health",
  description: "Fix the gaps in your existing EHR without replacing it. Add custom forms, fields, and billing logic seamlessly.",
  robots: siteConfig.name.toLowerCase() === "credify" ? {
    index: false,
    follow: false,
  } : undefined,
};

export default function KeepYourEhrPage() {
  return <KeepYourEhr />;
}
