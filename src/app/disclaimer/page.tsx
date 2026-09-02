import { Disclaimer } from "@/components/legal/Disclaimer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Disclaimer — Credify",
  description: "Read the Website Disclaimer for CredifyFast.com.",
};

export default function DisclaimerPage() {
  return (
    <main>
      <Disclaimer />
    </main>
  );
}
