import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies, headers } from "next/headers";
import {
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
  SUPABASE_CONFIGURED,
  ROOT_DOMAIN,
  isOnRootDomain,
} from "@/lib/env";

export function isConfigured() {
  return SUPABASE_CONFIGURED;
}

function pickCookieDomain(): string | undefined {
  if (process.env.NODE_ENV !== "production") return undefined;
  try {
    const host = headers().get("host")?.split(":")[0];
    if (isOnRootDomain(host)) return `.${ROOT_DOMAIN}`;
  } catch {
    /* headers() outside a request context — fall through */
  }
  return undefined;
}

export function createClient() {
  if (!SUPABASE_CONFIGURED) {
    throw new Error(
      "Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.",
    );
  }
  const store = cookies();
  const cookieDomain = pickCookieDomain();
  return createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    cookies: {
      get(name: string) {
        return store.get(name)?.value;
      },
      set(name: string, value: string, options: CookieOptions) {
        try {
          store.set({
            name,
            value,
            ...options,
            domain: cookieDomain,
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production",
            path: "/",
          });
        } catch {
          /* called from a Server Component — middleware will refresh */
        }
      },
      remove(name: string, options: CookieOptions) {
        try {
          store.set({
            name,
            value: "",
            ...options,
            domain: cookieDomain,
            maxAge: 0,
            path: "/",
          });
        } catch {
          /* noop */
        }
      },
    },
  });
}
