import Image from "next/image";
import Link from "next/link";
import { ProductMockup } from "@/app/(marketing)/_components/ProductMockup";

export function AuthShell({
  title,
  subtitle,
  children,
  altCtaLabel,
  altCtaHref,
  altPrompt,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  altCtaLabel: string;
  altCtaHref: string;
  altPrompt: string;
}) {
  return (
    <main
      className="dot-grid"
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <header
        className="section-px"
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
            priority
          />
          <span
            className="font-display"
            style={{
              fontSize: "17px",
              fontWeight: 700,
              color: "var(--green)",
              letterSpacing: "-0.01em",
            }}
          >
            BioBrigade
          </span>
        </Link>
        <Link
          href={altCtaHref}
          style={{
            fontSize: "14px",
            color: "var(--muted)",
            fontWeight: 500,
          }}
        >
          {altPrompt}{" "}
          <span style={{ color: "var(--green)", fontWeight: 600 }}>
            {altCtaLabel} →
          </span>
        </Link>
      </header>

      <div
        className="section-px grid flex-1 gap-12 lg:grid-cols-2 items-center"
        style={{ paddingTop: "32px", paddingBottom: "64px" }}
      >
        <div
          style={{
            maxWidth: "440px",
            width: "100%",
            margin: "0 auto",
            background: "var(--card)",
            borderRadius: "var(--r)",
            padding: "40px 36px",
            border: "1px solid var(--border)",
            boxShadow: "var(--shadow)",
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
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "var(--lime)",
                boxShadow: "0 0 0 2.5px rgba(212,255,63,0.22)",
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
              BioBrigade Account
            </span>
          </div>
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(32px, 5vw, 44px)",
              fontWeight: 700,
              color: "var(--green)",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              marginBottom: "10px",
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: "15px",
              color: "var(--muted)",
              lineHeight: 1.65,
              marginBottom: "28px",
            }}
          >
            {subtitle}
          </p>
          {children}
          <p
            style={{
              fontSize: "12px",
              color: "var(--faint)",
              marginTop: "22px",
              lineHeight: 1.6,
            }}
          >
            By continuing you agree to the BioBrigade Terms of Service and
            Privacy Policy. One account works across every BioBrigade vertical.
          </p>
        </div>

        <div className="hidden lg:flex justify-center">
          <ProductMockup />
        </div>
      </div>
    </main>
  );
}
