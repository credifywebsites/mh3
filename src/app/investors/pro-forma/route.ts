import fs from "node:fs";
import path from "node:path";
import { cookies } from "next/headers";
import { INVESTOR_COOKIE, isValidAccessCookie } from "../access";

export async function GET() {
  const cookieStore = await cookies();
  if (!isValidAccessCookie(cookieStore.get(INVESTOR_COOKIE)?.value)) {
    return new Response("Unauthorized", { status: 401 });
  }
  const file = path.join(process.cwd(), "src/components/investors/source.html");
  return new Response(fs.readFileSync(file, "utf8"), {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "private, no-store",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}
