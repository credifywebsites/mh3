"use client";

import { useEffect } from "react";
import { c } from "./cx";

export type Zoomed = { src: string; alt: string };

/**
 * Full-bleed screenshot viewer. Click anywhere or press Escape to close, and
 * the page behind it stops scrolling while it is open — same as the inline
 * script in task/credify-solutions.html.
 */
export function Lightbox({ zoomed, onClose }: { zoomed: Zoomed | null; onClose: () => void }) {
  useEffect(() => {
    if (!zoomed) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [zoomed, onClose]);

  return (
    <div id="lb" className={c(zoomed ? "lb on" : "lb")} onClick={onClose}>
      <span className={c("lb-x")}>Click anywhere to close</span>
      {/* eslint-disable-next-line @next/next/no-img-element -- the viewer shows
          the original asset at whatever size the window allows; there is no
          layout box to give next/image a width and height for. */}
      <img id="lbimg" src={zoomed?.src ?? ""} alt={zoomed?.alt ?? ""} />
    </div>
  );
}
