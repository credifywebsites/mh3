import siteConfig from "@/config/site";
import { homeMarkup } from "./homeMarkup";
import "./CredifyHome.css";

/**
 * The Credify homepage footer, used on every page of the Credify site.
 *
 * It is cut out of the homepage markup so there is one copy of it. Its CSS is
 * scoped to `.credify-home` and `[data-shared]`, so it renders the same on any
 * route. Its links are plain anchors, so it needs none of the homepage scripts.
 */
const FOOTER_PATTERN = /<footer[\s\S]*?<\/footer>/;

export const homeFooterMarkup = homeMarkup.match(FOOTER_PATTERN)?.[0] ?? "";

/** The homepage markup without its footer, for the homepage to render itself. */
export const homeMarkupWithoutFooter = homeMarkup.replace(FOOTER_PATTERN, "");

/** Credify's footer is shared everywhere. The other brands keep their own. */
export const usesHomeFooter = siteConfig.domain === "CredifyFast.com";

export function HomeFooter() {
  return <div className="credify-home" dangerouslySetInnerHTML={{ __html: homeFooterMarkup }} />;
}
