import { Contact } from "@/components/contact/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Credify | We Run Your Practice",
  description: "Get in touch with Credify for full practice operations, RCM, billing, and credentialing services for behavioral health agencies.",
};

export default function ContactPage() {
  return (
    <main>
      <Contact />
    </main>
  );
}
