import { CredifyHomeBehavior } from "./CredifyHomeBehavior";
import { homeMarkup } from "./homeMarkup";
import "./CredifyHome.css";

/**
 * Credify homepage, from HOMEPAGE_MOCK_B_11-10-V142.html (option B).
 *
 * The markup is the mock's #view-home page and footer, rendered as-is so it
 * stays a faithful copy of the approved design; the mock's inline scripts live
 * in homeBehavior.ts. The site's shared Navbar sits above it, and SiteChrome
 * leaves the shared footer off "/" because this page carries its own.
 */
export function CredifyHome() {
  return (
    <div className="credify-home">
      <div dangerouslySetInnerHTML={{ __html: homeMarkup }} />
      <CredifyHomeBehavior />
    </div>
  );
}
