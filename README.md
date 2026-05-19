# BioBrigade

The marketing landing page and authentication gateway for the BioBrigade platform — built with Next.js 14 (App Router) + TypeScript, Tailwind, Supabase Auth, deployed on Vercel.

## What's here

- **Landing page** (`app/page.tsx`) — pixel-faithful to the Claude Design handoff (`BioBrigade Landing v2`), recreated in production React with full responsive support and SEO.
- **Auth** (`/signin`, `/signup`) — Supabase magic-link + Google OAuth, with shared session cookies on `.<ROOT_DOMAIN>` so every subdomain is signed in once.
- **Subdomain router** (`middleware.ts` + `lib/subdomains.ts`) — `app.biobrigade.com`, `biopipeline.biobrigade.com`, etc. are rewritten to `/apps/[slug]` stubs that share auth.
- **SEO** — server-rendered metadata, OG image, `sitemap.xml`, `robots.txt`, JSON-LD (`Organization`, `SoftwareApplication`).

## Local development

```bash
cp .env.example .env.local        # fill in Supabase values
npm install
npm run dev
```

Visit http://localhost:3000.

### Testing subdomain routing locally

Add hosts entries:

```
127.0.0.1 biobrigade.local
127.0.0.1 app.biobrigade.local
127.0.0.1 biopipeline.biobrigade.local
```

Set `NEXT_PUBLIC_ROOT_DOMAIN=biobrigade.local` in `.env.local`, then hit
http://app.biobrigade.local:3000 — middleware will rewrite to `/apps/app`.

## Deploy on Vercel

1. Push to GitHub and import the repo into Vercel.
2. Set env vars in the Vercel project:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_ROOT_DOMAIN=biobrigade.com`
3. Add domains:
   - `biobrigade.com`
   - `www.biobrigade.com` (redirect to apex)
   - `*.biobrigade.com` (wildcard for sub-apps)
4. In Supabase Auth settings, add allowed redirect URLs:
   - `https://biobrigade.com/auth/callback`
   - `https://*.biobrigade.com/auth/callback`
5. Sub-product apps can be deployed as separate Vercel projects under e.g. `biopipeline.biobrigade.com`. They read the same Supabase cookies (`Domain=.biobrigade.com`) and get the user session for free.

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

Until the dedicated sub-app project exists, `https://mynewtool.biobrigade.com` will render the stub page at `/apps/mynewtool` automatically.

## Design source

The visual design comes from the Claude Design bundle:
`BioBrigade Landing v2.html` + `landing2/*.jsx`. All colors, fonts and section structure are mirrored verbatim into `app/globals.css` (`:root`) and the components in `app/(marketing)/_components/`.

Changes vs. the original prototype, per product spec:

- The **Team** section was removed (also dropped from nav + footer).
- The **footer** text was switched from low-opacity lime to white at a clearly legible size.
- All sections were made **mobile-responsive** (the prototype was desktop-only).
