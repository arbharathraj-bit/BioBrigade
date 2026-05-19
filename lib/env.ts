/**
 * Environment helpers.
 *
 * All env-dependent code paths must degrade gracefully when env vars aren't
 * set — otherwise the very first Vercel deploy (before the user has wired
 * up Supabase) will hard-crash the middleware and serve 500s for the
 * landing page.
 */

export const ROOT_DOMAIN =
  process.env.NEXT_PUBLIC_ROOT_DOMAIN?.trim() || "biobrigade.com";

export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() || "";
export const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim() || "";

export const SUPABASE_CONFIGURED =
  SUPABASE_URL.length > 0 && SUPABASE_ANON_KEY.length > 0;

export const DEFAULT_APP =
  process.env.NEXT_PUBLIC_DEFAULT_APP?.trim() || "app";

/**
 * Pick the canonical site URL for metadata. Order:
 *   1. NEXT_PUBLIC_SITE_URL (user override)
 *   2. https://<ROOT_DOMAIN>
 *   3. https://<VERCEL_PROJECT_PRODUCTION_URL> (Vercel-provided)
 *   4. https://<VERCEL_URL> (preview deploy)
 */
export function siteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");
  if (ROOT_DOMAIN) return `https://${ROOT_DOMAIN}`;
  const prodVercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (prodVercel) return `https://${prodVercel}`;
  const previewVercel = process.env.VERCEL_URL;
  if (previewVercel) return `https://${previewVercel}`;
  return "http://localhost:3000";
}

/**
 * Decide whether a given request hostname is the production root domain
 * (or a subdomain of it). Used to decide whether it's safe to set the
 * shared-auth cookie `Domain=.<ROOT_DOMAIN>` — doing so on a
 * `*.vercel.app` preview or localhost would cause the browser to reject
 * the cookie.
 */
export function isOnRootDomain(hostname: string | null | undefined): boolean {
  if (!hostname) return false;
  const h = hostname.split(":")[0].toLowerCase();
  return h === ROOT_DOMAIN || h.endsWith(`.${ROOT_DOMAIN}`);
}
