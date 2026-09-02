import { createHmac, timingSafeEqual } from "node:crypto";

/**
 * Shared-password gate for the partner overview deck at /partners.
 *
 * Override the defaults with PARTNERS_PASSWORD and PARTNERS_COOKIE_SECRET in
 * the environment. The cookie stores an HMAC of the current password rather
 * than a fixed flag, so rotating PARTNERS_PASSWORD invalidates every session
 * that was unlocked with the old one.
 */
export const PARTNER_COOKIE = "credify_partner_access";

/** How long an unlocked browser stays unlocked. */
export const PARTNER_COOKIE_MAX_AGE = 60 * 60 * 24 * 30;

const DEFAULT_PASSWORD = "Partners#1234?";
const DEFAULT_SECRET = "credify-partner-overview";

function partnerPassword() {
  return process.env.PARTNERS_PASSWORD || DEFAULT_PASSWORD;
}

function equals(a: string, b: string) {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  if (left.length !== right.length) return false;
  return timingSafeEqual(left, right);
}

export function accessToken() {
  const secret = process.env.PARTNERS_COOKIE_SECRET || DEFAULT_SECRET;
  return createHmac("sha256", secret).update(partnerPassword()).digest("hex");
}

export function isPasswordCorrect(candidate: string) {
  return equals(candidate, partnerPassword());
}

export function isValidAccessCookie(value: string | undefined) {
  if (!value) return false;
  return equals(value, accessToken());
}
