import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { APP_SUBDOMAINS } from "@/lib/subdomains";
import { createClient } from "@/lib/supabase/server";
import { SUPABASE_CONFIGURED } from "@/lib/env";

export const dynamic = "force-dynamic";

export default async function AppEntry({
  params,
}: {
  params: { slug: string };
}) {
  const app = APP_SUBDOMAINS[params.slug];
  if (!app) notFound();

  let user: { email?: string | null } | null = null;
  if (SUPABASE_CONFIGURED) {
    try {
      const supabase = createClient();
      const { data } = await supabase.auth.getUser();
      user = data.user;
    } catch {
      user = null;
    }
  }

  return (
    <main
      className="dot-grid section-px"
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <header
        style={{
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          href="/"
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <Image
            src="/biobrigade-logo.jpg"
            alt="BioBrigade"
            width={33}
            height={33}
            style={{ borderRadius: "7px", objectFit: "cover" }}
          />
          <span
            className="font-display"
            style={{
              fontSize: "17px",
              fontWeight: 700,
              color: "var(--green)",
            }}
          >
            BioBrigade
          </span>
        </Link>
        {user ? (
          <form action="/auth/signout" method="post">
            <button
              type="submit"
              style={{
                fontSize: "14px",
                color: "var(--muted)",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                fontWeight: 500,
              }}
            >
              Sign out
            </button>
          </form>
        ) : (
          <Link
            href="/signin"
            style={{
              fontSize: "14px",
              color: "var(--muted)",
              fontWeight: 500,
            }}
          >
            Sign in
          </Link>
        )}
      </header>

      <section
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: "640px",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "5px 12px",
            borderRadius: "100px",
            background: "rgba(15,61,46,0.06)",
            border: "1px solid rgba(15,61,46,0.12)",
            marginBottom: "26px",
            width: "fit-content",
          }}
        >
          <div
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: app.live ? "#6BFF95" : "var(--faint)",
            }}
          />
          <span
            style={{
              fontSize: "11px",
              fontWeight: 600,
              color: "var(--green)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            {app.live ? "Live in production" : "Coming soon"}
          </span>
        </div>
        <h1
          className="font-display"
          style={{
            fontSize: "clamp(40px, 7vw, 72px)",
            fontWeight: 700,
            color: "var(--green)",
            letterSpacing: "-0.03em",
            lineHeight: 1,
            marginBottom: "20px",
          }}
        >
          {app.name}
        </h1>
        <p
          style={{
            fontSize: "18px",
            color: "var(--sub)",
            lineHeight: 1.7,
            marginBottom: "32px",
            maxWidth: "520px",
          }}
        >
          {app.description}
        </p>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {user ? (
            <span
              style={{
                padding: "14px 22px",
                borderRadius: "10px",
                background: "var(--card)",
                border: "1px solid var(--border)",
                fontSize: "14px",
                color: "var(--sub)",
              }}
            >
              Signed in as <strong>{user.email}</strong>
            </span>
          ) : (
            <Link
              href={`/signin?next=${encodeURIComponent(`/apps/${app.slug}`)}`}
              style={{
                padding: "14px 28px",
                background: "var(--green)",
                color: "var(--lime)",
                borderRadius: "10px",
                fontSize: "15px",
                fontWeight: 600,
                letterSpacing: "0.03em",
              }}
            >
              Sign in to continue →
            </Link>
          )}
          <Link
            href="/"
            style={{
              padding: "14px 22px",
              background: "transparent",
              color: "var(--green)",
              borderRadius: "10px",
              fontSize: "15px",
              fontWeight: 500,
              border: "1.5px solid var(--border2)",
            }}
          >
            ← Back to BioBrigade
          </Link>
        </div>
      </section>
    </main>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const app = APP_SUBDOMAINS[params.slug];
  if (!app) return {};
  return {
    title: app.name,
    description: app.description,
    robots: { index: false, follow: false },
  };
}
