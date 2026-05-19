# BioBrigade

Marketing landing page and authentication gateway for the BioBrigade platform — Next.js 14 (App Router) + TypeScript, Tailwind, Supabase Auth, optimized for **Vercel** and a multi-subdomain product family.

## Deploy to Vercel

1. **Import the repo** into Vercel. Framework preset is auto-detected as Next.js (no overrides required — `vercel.json` is already in the repo).

2. **Add environment variables** to the Vercel project (Project → Settings → Environment Variables). The site will still build and serve the marketing page if Supabase isn't set yet — `/signin` just shows a friendly "not configured" notice — so it's safe to deploy first and wire auth in later.

   | Key | Required | Example |
   | --- | --- | --- |
   | `NEXT_PUBLIC_SUPABASE_URL` | for auth | `https://abcd1234.supabase.co` |
   | `NEXT_PUBLIC_SUPABASE_ANON_KEY` | for auth | `eyJhbGc...` |
   | `NEXT_PUBLIC_ROOT_DOMAIN` | yes (production) | `biobrigade.com` |
   | `NEXT_PUBLIC_DEFAULT_APP` | optional | `app` |
   | `NEXT_PUBLIC_SITE_URL` | optional override | `https://biobrigade.com` |

3. **Configure domains** in the Vercel project (Settings → Domains):
   - `biobrigade.com` (primary)
   - `www.biobrigade.com` — `vercel.json` already redirects this to the apex
   - `*.biobrigade.com` — wildcard domain so every sub-app subdomain (e.g. `app.biobrigade.com`, `biopipeline.biobrigade.com`) lands on this deployment until it has its own project

4. **Configure Supabase** auth (Supabase dashboard → Authentication → URL Configuration):
   - Site URL: `https://biobrigade.com`
   - Additional redirect URLs:
     - `https://biobrigade.com/auth/callback`
     - `https://*.biobrigade.com/auth/callback`
     - `http://localhost:3000/auth/callback` (for local dev)
   - Enable Google provider (Authentication → Providers → Google) and paste in your Google OAuth client credentials.

5. **Ship it.** Push to `main` and Vercel will deploy. Preview deploys on `*.vercel.app` also work — the cookie domain logic auto-detects whether the request is on the real root domain or a preview host, so previews never try to set a `.biobrigade.com` cookie (which the browser would reject).

## What's in the box

- **Landing page** (`app/page.tsx`) — pixel-faithful to the Claude Design "BioBrigade Landing v2" handoff. Mobile-responsive (fluid padding, clamp() headings, hamburger drawer below `md`). Team section removed; footer text in white at legible size on the dark green background.
- **Auth** (`/signin`, `/signup`) — Supabase magic-link + Google OAuth, styled to match the landing page.
- **Subdomain router** (`middleware.ts` + `lib/subdomains.ts`) — every known sub-app subdomain is rewritten to `/apps/[slug]` and shares the auth session via cookies scoped to `.<ROOT_DOMAIN>`.
- **SEO** — SSR metadata, canonical URLs, `next/og` OG image + favicon, `sitemap.xml`, `robots.txt`, JSON-LD (`Organization`, `SoftwareApplication`).
- **Security headers** — HSTS, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy` via `vercel.json`.
- **Caching** — immutable cache headers on `/_next/static/*`, day-long cache on the brand logo. Static-prerendered marketing pages.

## Local development

```bash
cp .env.example .env.local        # add Supabase values if you want to test auth
npm install
npm run dev                       # http://localhost:3000
```

### Testing subdomain routing locally

Add hosts entries:

```
127.0.0.1 biobrigade.local
127.0.0.1 app.biobrigade.local
127.0.0.1 biopipeline.biobrigade.local
```

Set `NEXT_PUBLIC_ROOT_DOMAIN=biobrigade.local` in `.env.local`, then hit
`http://app.biobrigade.local:3000` — middleware rewrites to `/apps/app`.

## Adding a new sub-app

Add an entry to `APP_SUBDOMAINS` in `lib/subdomains.ts`:

```ts
mynewtool: {
  slug: "mynewtool",
  name: "My New Tool",
  description: "What it does.",
  live: true,
},
```

Until the dedicated sub-app project exists at `mynewtool.biobrigade.com`,
this deployment serves a stub page at `/apps/mynewtool` automatically.

When the sub-app is ready, deploy it as a separate Vercel project, point
`mynewtool.biobrigade.com` at it, and remove the wildcard handler if you
want — or leave the entry in place as a fallback.

## Production checklist

- [x] Static-prerendered marketing pages
- [x] Edge runtime OG image + favicon
- [x] Security headers (HSTS, XFO, etc.)
- [x] Long-lived cache on `_next/static`
- [x] Graceful degradation when env vars are missing
- [x] Wildcard subdomain support
- [x] Vercel preview deploys don't break cookie domain
- [x] `sitemap.xml`, `robots.txt`, canonical URLs, JSON-LD
- [x] Strict TypeScript, ESLint configured

## Design source

The visual design comes from the Claude Design bundle: `BioBrigade Landing v2.html` + `landing2/*.jsx`. All colors, fonts and section structure are mirrored verbatim into `app/globals.css` (`:root`) and the components in `app/(marketing)/_components/`.
