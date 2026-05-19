import { NextRequest, NextResponse } from "next/server";
import { APP_SUBDOMAINS, extractSubdomain } from "@/lib/subdomains";
import { updateSession } from "@/lib/supabase/middleware";
import { SUPABASE_CONFIGURED } from "@/lib/env";

export async function middleware(req: NextRequest) {
  const host = req.headers.get("host");
  const sub = extractSubdomain(host);
  const url = req.nextUrl.clone();

  const isSystemPath =
    url.pathname.startsWith("/api") ||
    url.pathname.startsWith("/auth") ||
    url.pathname.startsWith("/_next") ||
    url.pathname.startsWith("/apps");

  let res: NextResponse;
  if (sub && APP_SUBDOMAINS[sub] && !isSystemPath) {
    url.pathname = `/apps/${sub}`;
    res = NextResponse.rewrite(url);
  } else {
    res = NextResponse.next();
  }

  if (SUPABASE_CONFIGURED) {
    try {
      return await updateSession(req, res);
    } catch {
      return res;
    }
  }
  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
