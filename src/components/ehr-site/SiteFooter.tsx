import Link from "next/link";
import { BrandMark } from "./BrandMark";
import { brand, telHref } from "./brand";
import { c } from "./cx";
import { stages } from "./solutionsData";

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Reporting", href: "/reporting" },
  { label: "Pricing", href: "/pricing" },
  { label: "The Collective", href: "/collective" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy policy", href: "/privacy-policy" },
  { label: "GDPR compliance", href: "/gdpr" },
  { label: "Website disclaimer", href: "/disclaimer" },
];

/** The dark footer from the source HTML, shared by the home and Solutions pages. */
export function SiteFooter() {
  return (
    <footer className={c("foot")}>
      <div className={c("foot-in")}>
        <div className={c("foot-grid")}>
          <div>
            <BrandMark variant="foot" />
            <p className={c("foot-tag")}>Behavioral health growth engine</p>
            <p className={c("foot-blurb")}>
              The EHR for behavioral health practices. We run the operation so you can focus on
              the care.
            </p>
          </div>
          <div>
            <h4>Solutions</h4>
            {stages.map((stage) => (
              <Link key={stage.id} href={`/solutions#${stage.id}`}>
                {stage.title}
              </Link>
            ))}
          </div>
          <div>
            <h4>Company</h4>
            {companyLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
          <div>
            <h4>Get in touch</h4>
            <a href={telHref}>{brand.phoneDisplay}</a>
            <a href={`mailto:${brand.salesEmail}`}>{brand.salesEmail}</a>
            <a href={`mailto:${brand.supportEmail}`}>{brand.supportEmail}</a>
            <a href={brand.signInUrl}>Sign in</a>
          </div>
        </div>
        <div className={c("foot-base")}>
          <span>{brand.legalLine}</span>
          <nav className={c("foot-links")}>
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
