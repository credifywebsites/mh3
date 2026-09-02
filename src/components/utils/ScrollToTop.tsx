"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // If there's a hash, don't scroll to top, let the browser handle anchor navigation
    if (window.location.hash) return;

    // Force scroll to top on pathname change instantly
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto" // This overrides CSS smooth scroll for this specific call
    });
  }, [pathname]);

  return null;
}
