import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { APP_SUBDOMAINS } from "@/lib/subdomains";
import {
  ROOT_DOMAIN,
  DEFAULT_APP,
  SUPABASE_CONFIGURED,
  isOnRootDomain,
} from "@/lib/env";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");
  const next = url.searchParams.get("next");

  if (code && SUPABASE_CONFIGURED) {
    try {
      const supabase = createClient();
      await supabase.auth.exchangeCodeForSession(code);
    } catch {
      /* swallow — we still want to land the user somewhere safe */
    }
  }

  let dest = new URL("/", url.origin).toString();
  if (next) {
    try {
      const parsed = new URL(next, url.origin);
      if (
        parsed.hostname === url.hostname ||
        parsed.hostname === ROOT_DOMAIN ||
        parsed.hostname.endsWith(`.${ROOT_DOMAIN}`)
      ) {
        dest = parsed.toString();
      }
    } catch {
      /* fall through */
    }
  } else if (
    process.env.NODE_ENV === "production" &&
    APP_SUBDOMAINS[DEFAULT_APP] &&
    isOnRootDomain(url.hostname)
  ) {
    dest = `https://${DEFAULT_APP}.${ROOT_DOMAIN}`;
  }
  return NextResponse.redirect(dest);
}
