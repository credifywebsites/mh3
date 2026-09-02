import rawSiteConfig from "./site.json";

export type NavLink = {
  label: string;
  /** Second line in a dropdown item, summarising what sits under the link. */
  description?: string;
  href: string;
  activePaths: string[];
  children?: NavLink[];
  target?: string;
};

export type FooterColumn = {
  title: string;
  links: { label: string; href: string; target?: string; rel?: string }[];
};

export type SiteConfig = {
  /** Brand name shown in navbar, footer, copyright, etc. */
  name: string;
  /** Domain used in legal pages (e.g. "CredifyFast.com") */
  domain: string;
  /** Site-wide <title> suffix */
  titleSuffix: string;
  /** Default meta title */
  metaTitle: string;
  /** Default meta description */
  metaDescription: string;

  /** Phone number — digits only (for tel: links) */
  phoneRaw: string;
  /** Phone number — display format */
  phoneDisplay: string;
  /** Label shown next to phone (e.g. "Sales") */
  phoneLabel: string;

  /** Primary email addresses — Credify uses two, others can use one */
  emails: { label: string; address: string }[];

  /** Physical address shown on privacy / legal pages */
  legalAddress: string;
  /** HQ address shown on contact page */
  hqAddress: string;
  /** Office locations on contact page */
  offices: { city: string; address: string }[];

  /** Path to site icon (in /public) */
  iconPath: string;
  /** Path to logo image — if empty, the SVG LogoMark is used */
  logoPath: string;
  /** Navbar logo SVG (transparent, light). Only set for white-label configs that have a custom logo. */
  navLogoPath?: string;
  /** Footer logo SVG (transparent, dark palette). Only set for white-label configs that have a custom logo. */
  footerLogoPath?: string;

  /** Navbar links */
  navLinks: NavLink[];

  /** Footer columns (Quick Links, Solutions, Pricing, Legal, etc.) */
  footerColumns: FooterColumn[];

  /** Footer description text */
  footerDescription: string;

  /** Copyright holder name (shown as "© 2026 {name}. All rights reserved.") */
  copyrightName: string;

  /** "Credify reports" → whatever this brand calls its reports section */
  reportsLabel: string;

  /** SEO & Tracking */
  ogImage: string;
  fbPixelId: string;
  msTagId: string;
  googleTagId: string;
  adrollAdvId: string;
  adrollPixId: string;
  zohoWidgetCode: string;
};

const siteConfig = rawSiteConfig as SiteConfig;

export default siteConfig;
