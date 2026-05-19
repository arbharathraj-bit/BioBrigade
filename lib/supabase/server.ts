import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import { ROOT_DOMAIN } from "@/lib/subdomains";

function cookieDomain(): string | undefined {
  if (process.env.NODE_ENV !== "production") return undefined;
  return `.${ROOT_DOMAIN}`;
}

export function createClient() {
  const store = cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
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
              domain: cookieDomain(),
              sameSite: "lax",
              secure: process.env.NODE_ENV === "production",
              path: "/",
            });
          } catch {
            /* called from a Server Component — ignored, middleware refreshes */
          }
        },
        remove(name: string, options: CookieOptions) {
          try {
            store.set({
              name,
              value: "",
              ...options,
              domain: cookieDomain(),
              maxAge: 0,
              path: "/",
            });
          } catch {
            /* noop */
          }
        },
      },
    },
  );
}
