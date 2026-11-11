import { CredifyHomeBehavior } from "./CredifyHomeBehavior";
import { homeMarkupWithoutFooter } from "./HomeFooter";
import "./CredifyHome.css";

/**
 * Credify homepage, from HOMEPAGE_MOCK_B_11-10-V142.html (option B).
 *
 * The markup is the mock's #view-home page, rendered as-is so it stays a
 * faithful copy of the approved design; the mock's inline scripts live in
 * homeBehavior.ts. The site's shared Navbar sits above it and the footer
 * comes from SiteChrome (HomeFooter), the same one used on every page.
 */
export function CredifyHome() {
  return (
    <div className="credify-home">
      <div dangerouslySetInnerHTML={{ __html: homeMarkupWithoutFooter }} />
      <CredifyHomeBehavior />
    </div>
  );
}
