import { MetadataRoute } from "next";
import siteConfig from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  const isCredify = siteConfig.name.toLowerCase() === "credify";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: isCredify
        ? [
            "/keep-your-ehr",
            "/no-show-calculator",
            "/credify-no-show-calculator",
            "/partners",
            "/live/",
          ]
        : ["/no-show-calculator", "/credify-no-show-calculator"],
    },
  };
}
