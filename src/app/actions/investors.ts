"use server";

import { cookies } from "next/headers";
import {
  INVESTOR_COOKIE,
  INVESTOR_COOKIE_MAX_AGE,
  accessToken,
  areCredentialsCorrect,
} from "@/app/investors/access";

export async function unlockInvestors(login: string, password: string): Promise<{ success: boolean }> {
  if (!areCredentialsCorrect(login, password)) {
    await new Promise((resolve) => setTimeout(resolve, 400));
    return { success: false };
  }

  const cookieStore = await cookies();
  cookieStore.set(INVESTOR_COOKIE, accessToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/investors",
    maxAge: INVESTOR_COOKIE_MAX_AGE,
  });
  return { success: true };
}
