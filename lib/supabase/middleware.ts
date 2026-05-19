import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import {
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
  SUPABASE_CONFIGURED,
  ROOT_DOMAIN,
  isOnRootDomain,
} from "@/lib/env";

export async function updateSession(
  request: NextRequest,
  response: NextResponse,
): Promise<NextResponse> {
  if (!SUPABASE_CONFIGURED) return response;

  const hostname = request.headers.get("host")?.split(":")[0];
  // Only scope cookies to .<ROOT_DOMAIN> when the request is *actually*
  // arriving on the root domain. On *.vercel.app previews or localhost
  // the browser would reject a cookie with that Domain attribute.
  const cookieDomain =
    process.env.NODE_ENV === "production" && isOnRootDomain(hostname)
      ? `.${ROOT_DOMAIN}`
      : undefined;

  const supabase = createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    cookies: {
      get(name: string) {
        return request.cookies.get(name)?.value;
      },
      set(name: string, value: string, options: CookieOptions) {
        response.cookies.set({
          name,
          value,
          ...options,
          domain: cookieDomain,
          sameSite: "lax",
          secure: process.env.NODE_ENV === "production",
          path: "/",
        });
      },
      remove(name: string, options: CookieOptions) {
        response.cookies.set({
          name,
          value: "",
          ...options,
          domain: cookieDomain,
          maxAge: 0,
          path: "/",
        });
      },
    },
  });

  try {
    await supabase.auth.getUser();
  } catch {
    /* token refresh failure is non-fatal — just continue with the response */
  }
  return response;
}
