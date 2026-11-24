import { createHmac, timingSafeEqual } from "node:crypto";

/**
 * Login + password gate for the investor pro forma at /investors.
 *
 * Requires INVESTORS_LOGIN, INVESTORS_PASSWORD and INVESTORS_COOKIE_SECRET in
 * the environment. There are no defaults: if any is missing the gate stays
 * closed. The cookie stores an HMAC of the current credentials, so rotating
 * either one invalidates every unlocked session.
 */
export const INVESTOR_COOKIE = "credify_investor_access";

/** How long an unlocked browser stays unlocked. */
export const INVESTOR_COOKIE_MAX_AGE = 60 * 60 * 24 * 30;

function config() {
  const login = process.env.INVESTORS_LOGIN;
  const password = process.env.INVESTORS_PASSWORD;
  const secret = process.env.INVESTORS_COOKIE_SECRET;
  if (!login || !password || !secret) return null;
  return { login, password, secret };
}

function equals(a: string, b: string) {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  if (left.length !== right.length) return false;
  return timingSafeEqual(left, right);
}

/** Returns null when the gate is not configured. */
export function accessToken() {
  const c = config();
  if (!c) return null;
  return createHmac("sha256", c.secret).update(`${c.login}\0${c.password}`).digest("hex");
}

export function areCredentialsCorrect(login: string, password: string) {
  const c = config();
  if (!c) return false;
  return equals(login, c.login) && equals(password, c.password);
}

export function isValidAccessCookie(value: string | undefined) {
  const token = accessToken();
  if (!value || !token) return false;
  return equals(value, token);
}
