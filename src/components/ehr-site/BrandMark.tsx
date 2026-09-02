import { brand } from "./brand";
import { c } from "./cx";

/**
 * The wordmark from task/credify-index.html, verbatim: the pulse rings, the
 * check, and the rounded pill with the brand name set in the serif face. The
 * viewBox crops the shared 680x240 brand artwork to the pill row, which is why
 * it matches /images/<brand>/logo/logo-navbar.svg glyph for glyph.
 */
export function BrandMark({ variant = "nav" }: { variant?: "nav" | "foot" }) {
  // 52px is what the source HTML uses for "Credify". Longer wordmarks step down
  // to 48px, matching the size the brand SVG assets set for "Keep Your EHR".
  const fontSize = brand.name.length > 8 ? 48 : 52;

  return (
    <svg
      className={c(variant === "foot" ? "mark mark-foot" : "mark")}
      width="593"
      height="128"
      viewBox="21 36 593 128"
      preserveAspectRatio="xMinYMid meet"
      role="img"
      aria-label={brand.name}
    >
      <g transform="translate(85,100)">
        <circle cx="0" cy="0" r="60" fill="none" stroke="#22a87e" strokeWidth="1" opacity=".18" />
        <circle cx="0" cy="0" r="52" fill="none" stroke="#22a87e" strokeWidth="1.5" opacity=".35" />
        <circle cx="0" cy="0" r="44" fill="none" stroke="#1a8a66" strokeWidth="4" />
        <path
          d="M -19 0 L -6 14 L 21 -14"
          fill="none"
          stroke="#1a8a66"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <rect x="170" y="60" width="440" height="80" rx="40" fill="#0a3d2b" />
      <text
        x="390"
        y="114"
        textAnchor="middle"
        fill="#ffffff"
        style={{ fontFamily: "var(--serif)" }}
        fontSize={fontSize}
      >
        {brand.name}
      </text>
    </svg>
  );
}
