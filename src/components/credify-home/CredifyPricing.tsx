import { CredifyHomeBehavior } from "./CredifyHomeBehavior";
import { pricingMarkup } from "./pricingMarkup";
import "./CredifyHome.css";
import "./PricingPage.css";

/**
 * Credify pricing page, from CREDIFY_PRICING_PAGE.html. The shared Navbar sits
 * above it and the shared footer below (SiteChrome); its calculator, hover
 * notes and toggles run from the same homeBehavior.ts as the homepage.
 */
export function CredifyPricing() {
  return (
    <div className="credify-home">
      <div dangerouslySetInnerHTML={{ __html: pricingMarkup }} />
      <CredifyHomeBehavior />
    </div>
  );
}
