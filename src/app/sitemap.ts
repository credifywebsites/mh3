import { MetadataRoute } from "next";
import { usesEhrSite } from "@/config/ehrSite";
import siteConfig from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const isCredify = siteConfig.name.toLowerCase() === "credify";
  const base = `https://${siteConfig.domain.toLowerCase()}`;

  const routes: MetadataRoute.Sitemap = [
    { url: base, changeFrequency: "yearly", priority: 1 },
    { url: `${base}/front-desk`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/appointment-engagement`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/client-clinical-engagement`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/client-engagement`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/provider-engagement`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/credentialing`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/rcm`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/ehr-to-county`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/ehr-to-county/how-it-works`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/mimo-ai`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/websites`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/growth-engine`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/reporting`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/pricing`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/rcm-pricing`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/credentialing-pricing`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/ai-engagement-pricing`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/collective`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/contact`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/privacy-policy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/gdpr`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/disclaimer`, changeFrequency: "yearly", priority: 0.3 },
  ];

  if (usesEhrSite) {
    routes.push({ url: `${base}/solutions`, changeFrequency: "monthly", priority: 0.9 });
  }

  if (!isCredify) {
    routes.push({ url: `${base}/keep-your-ehr`, changeFrequency: "monthly", priority: 0.8 });
  }

  return routes;
}
