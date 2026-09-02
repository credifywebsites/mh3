import siteConfig from "./site";

/**
 * Brands whose home and Solutions pages render the Credify EHR design from
 * task/credify-index.html and task/credify-solutions.html. Those two pages ship
 * their own nav and footer, so SiteChrome leaves the shared ones off them.
 * StayingBooked is unchanged and keeps the shared chrome everywhere.
 */
const EHR_SITE_DOMAINS = ["CredifyFast.com", "KeepYourEHR.com"];

export const usesEhrSite = EHR_SITE_DOMAINS.includes(siteConfig.domain);

/** Routes that render the EHR design, and so carry their own nav and footer. */
export const EHR_SITE_ROUTES = ["/", "/solutions"];
