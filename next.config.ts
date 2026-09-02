import type { NextConfig } from "next";

const NOINDEX = [{ key: "X-Robots-Tag", value: "noindex, nofollow" }];

const nextConfig: NextConfig = {
  images: {
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
  /** Partner-facing surfaces stay out of search results. */
  async headers() {
    return [
      { source: "/live/:path*", headers: NOINDEX },
      { source: "/partners", headers: NOINDEX },
    ];
  },
};

export default nextConfig;
