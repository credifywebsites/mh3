import { createHmac, timingSafeEqual } from "node:crypto";

/**
 * Login + password gate for the investor pro forma at /investors.
 *
 * Override the defaults with INVESTORS_LOGIN, INVESTORS_PASSWORD and
 * INVESTORS_COOKIE_SECRET in the environment. The cookie stores an HMAC of the current credentials, so rotating
 * either one invalidates every unlocked session.
 */
export const INVESTOR_COOKIE = "credify_investor_access";

/** How long an unlocked browser stays unlocked. */
export const INVESTOR_COOKIE_MAX_AGE = 60 * 60 * 24 * 30;

const DEFAULT_LOGIN = "Credify";
const DEFAULT_PASSWORD = "Invest#ROI5x";
const DEFAULT_SECRET = "credify-investor-pro-forma";

function config() {
  return {
    login: process.env.INVESTORS_LOGIN || DEFAULT_LOGIN,
    password: process.env.INVESTORS_PASSWORD || DEFAULT_PASSWORD,
    secret: process.env.INVESTORS_COOKIE_SECRET || DEFAULT_SECRET,
  };
}

function equals(a: string, b: string) {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  if (left.length !== right.length) return false;
  return timingSafeEqual(left, right);
}

export function accessToken() {
  const c = config();
  return createHmac("sha256", c.secret).update(`${c.login}\0${c.password}`).digest("hex");
}

export function areCredentialsCorrect(login: string, password: string) {
  const c = config();
  return equals(login, c.login) && equals(password, c.password);
}

export function isValidAccessCookie(value: string | undefined) {
  if (!value) return false;
  return equals(value, accessToken());
}
