import type { NextConfig } from "next";

const NOINDEX = [{ key: "X-Robots-Tag", value: "noindex, nofollow" }];

const nextConfig: NextConfig = {
  images: {
    /** 95 keeps UI screenshots (fine text, thin lines) crisp; 75 is the default. */
    qualities: [75, 95],
    /**
     * An allowlist for every local image, not just the partner thumbs: once
     * localPatterns is set, anything not listed here is rejected by next/image.
     */
    localPatterns: [
      {
        pathname: "/images/solutions/**",
        search: "",
      },
      {
        pathname: "/partners/thumbs/**",
        search: "",
      },
      {
        pathname: "/partners/thumbs/**",
        search: "?v=2",
      },
      {
        pathname: "/partners/thumbs/**",
        search: "?v=3",
      },
    ],
  },
  /** The investor pro forma is read from disk at request time; make sure it ships. */
  outputFileTracingIncludes: {
    "/investors/pro-forma": ["./src/components/investors/source.html"],
  },
  /** Partner-facing surfaces stay out of search results. */
  async headers() {
    return [
      { source: "/live/:path*", headers: NOINDEX },
      { source: "/partners", headers: NOINDEX },
      { source: "/investors/:path*", headers: NOINDEX },
    ];
  },
};

export default nextConfig;
