"use client";

import { useEffect } from "react";
import { initCredifyHome } from "./homeBehavior";

/** Runs the homepage's calculator, charts, notes and lightbox once the markup is on the page. */
export function CredifyHomeBehavior() {
  useEffect(() => initCredifyHome(), []);
  return null;
}
