import { EhrToCountySync } from "@/components/solutions/EhrToCountySync";

export const metadata = {
  title: "EHR to County — Credify",
  description: "Automated synchronization from your EHR to County systems. Eliminate double-entry, reduce clinician burnout, and ensure 100% data accuracy.",
};

export default function EhrToCountySyncPage() {
  return <EhrToCountySync />;
}
