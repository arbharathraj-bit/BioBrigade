import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { ROOT_DOMAIN } from "@/lib/subdomains";

export async function updateSession(
  request: NextRequest,
  response: NextResponse,
) {
  const cookieDomain =
    process.env.NODE_ENV === "production" ? `.${ROOT_DOMAIN}` : undefined;

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
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
    },
  );

  // Touch the session so cookies refresh.
  await supabase.auth.getUser();
  return response;
}
