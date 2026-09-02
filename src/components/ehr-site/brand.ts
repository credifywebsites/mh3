import siteConfig from "@/config/site";

function emailFor(label: string, fallback: string) {
  const match = siteConfig.emails.find(
    (email) => email.label.toLowerCase() === label.toLowerCase(),
  );
  return (match?.address ?? fallback).toLowerCase();
}

/**
 * The parts of the Credify EHR pages that are brand-dependent. The source HTML
 * hard-codes Credify throughout; everything that differs between credify.json
 * and keepyourehr.json is resolved here so both brands render the same layout.
 */
export const brand = {
  /** Wordmark inside the logo pill. */
  name: siteConfig.name,
  phoneRaw: siteConfig.phoneRaw,
  phoneDisplay: siteConfig.phoneDisplay,
  salesEmail: emailFor("Sales", siteConfig.emails[0]?.address ?? ""),
  supportEmail: emailFor("Support", siteConfig.emails[0]?.address ?? ""),
  /** Shared login for both brands — Keep Your EHR is a Credify product. */
  signInUrl: "https://login.credifyfast.com",
  /** Legal entity line in the footer base, as written in the source HTML. */
  legalLine: `Push It, Inc. dba ${siteConfig.copyrightName}. 2026.`,
} as const;

export const telHref = `tel:${brand.phoneRaw}`;
export const demoMailto = `mailto:${brand.salesEmail}?subject=${encodeURIComponent(
  `${brand.name} demo`,
)}`;
