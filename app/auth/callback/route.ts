import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { ROOT_DOMAIN, APP_SUBDOMAINS } from "@/lib/subdomains";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");
  const next = url.searchParams.get("next");

  if (code) {
    const supabase = createClient();
    await supabase.auth.exchangeCodeForSession(code);
  }

  // Where to send the user after auth.
  let dest: string;
  if (next) {
    // Allow either a relative path or an absolute URL under ROOT_DOMAIN.
    try {
      const parsed = new URL(next, url.origin);
      const hostname = parsed.hostname;
      if (
        hostname === ROOT_DOMAIN ||
        hostname.endsWith(`.${ROOT_DOMAIN}`) ||
        hostname === url.hostname
      ) {
        dest = parsed.toString();
      } else {
        dest = "/";
      }
    } catch {
      dest = "/";
    }
  } else {
    const defaultApp = process.env.NEXT_PUBLIC_DEFAULT_APP ?? "app";
    if (process.env.NODE_ENV === "production" && APP_SUBDOMAINS[defaultApp]) {
      dest = `https://${defaultApp}.${ROOT_DOMAIN}`;
    } else {
      dest = "/";
    }
  }
  return NextResponse.redirect(dest);
}
