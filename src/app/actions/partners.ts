"use server";

import { cookies } from "next/headers";
import {
  PARTNER_COOKIE,
  PARTNER_COOKIE_MAX_AGE,
  accessToken,
  isPasswordCorrect,
} from "@/app/partners/access";

export async function unlockPartners(password: string): Promise<{ success: boolean }> {
  if (!isPasswordCorrect(password)) {
    // Small delay so the endpoint is not a fast password oracle.
    await new Promise((resolve) => setTimeout(resolve, 400));
    return { success: false };
  }

  const cookieStore = await cookies();
  cookieStore.set(PARTNER_COOKIE, accessToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: PARTNER_COOKIE_MAX_AGE,
  });

  return { success: true };
}
