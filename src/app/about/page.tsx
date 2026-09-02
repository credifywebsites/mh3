import { About } from "@/components/about/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Credify | Behavioral Health Growth Specialists",
  description: "Learn about the team behind Credify. We bring nearly 300 years of combined experience and purpose-built AI to behavioral health billing and operations.",
};

export default function AboutPage() {
  return (
    <main>
      <About />
    </main>
  );
}
