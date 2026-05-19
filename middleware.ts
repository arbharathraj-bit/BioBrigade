import { NextRequest, NextResponse } from "next/server";
import { APP_SUBDOMAINS, extractSubdomain } from "@/lib/subdomains";
import { updateSession } from "@/lib/supabase/middleware";

export async function middleware(req: NextRequest) {
  const host = req.headers.get("host");
  const sub = extractSubdomain(host);
  const url = req.nextUrl.clone();

  // Only do a subdomain rewrite when the path hasn't already been rewritten
  // and the requested path looks like a marketing path (not /auth, /api, etc).
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

  // Refresh Supabase session cookies on every request so shared auth on
  // *.<ROOT_DOMAIN> stays valid.
  if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
    await updateSession(req, res);
  }
  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
