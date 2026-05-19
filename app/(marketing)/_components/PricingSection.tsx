import Link from "next/link";
import { Eyebrow } from "./Eyebrow";

type Tier = {
  tier: string;
  sub: string;
  price: string;
  desc: string;
  features: string[];
  cta: string;
  hi: boolean;
  badge?: string;
};

const tiers: Tier[] = [
  {
    tier: "Starter",
    sub: "Per-Analysis",
    price: "Pay per run",
    desc: "Access individual analyses without commitment. Perfect for exploring BioBrigade before scaling.",
    features: [
      "Pay per analysis run",
      "Access any single vertical",
      "Standard cloud compute",
      "PDF report export",
      "Email support",
    ],
    cta: "Start exploring",
    hi: false,
  },
  {
    tier: "Team",
    sub: "Subscription",
    price: "Custom monthly / annual",
    desc: "Monthly or annual access to one or more verticals. Built for research teams and biotech startups.",
    features: [
      "Unlimited runs on chosen verticals",
      "Multi-user workspace",
      "Priority compute queue",
      "API access (rate-limited)",
      "Slack support channel",
    ],
    cta: "Contact sales",
    hi: true,
    badge: "Most Popular",
  },
  {
    tier: "Enterprise",
    sub: "Enterprise License",
    price: "Annual contract",
    desc: "Full ecosystem access with dedicated compute, white-labeling, and custom SLAs for large organizations.",
    features: [
      "All 11 verticals included",
      "Dedicated cloud compute",
      "White-label & custom branding",
      "99.9% uptime SLA",
      "Dedicated customer success",
    ],
    cta: "Book a demo",
    hi: false,
  },
];

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="section-px"
      style={{ background: "var(--bg2)", paddingTop: "100px", paddingBottom: "100px" }}
    >
      <div
        style={{
          maxWidth: "520px",
          margin: "0 auto 60px",
          textAlign: "center",
        }}
      >
        <Eyebrow>Pricing</Eyebrow>
        <h2
          className="font-display section-h2"
          style={{ color: "var(--green)" }}
        >
          Start free.
          <br />
          Scale as you discover.
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3 items-start">
        {tiers.map((t, i) => (
          <div
            key={i}
            className="hov"
            style={{
              padding: "36px 30px",
              borderRadius: "var(--r)",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              position: "relative",
              background: t.hi ? "var(--green)" : "var(--card)",
              border: t.hi
                ? "1px solid rgba(212,255,63,0.12)"
                : "1px solid var(--border)",
            }}
          >
            {t.badge && (
              <div
                style={{
                  position: "absolute",
                  top: "-13px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  padding: "4px 16px",
                  borderRadius: "100px",
                  background: "var(--lime)",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "var(--green)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}
              >
                {t.badge}
              </div>
            )}
            <div>
              <div
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.13em",
                  textTransform: "uppercase",
                  marginBottom: "6px",
                  color: t.hi ? "rgba(212,255,63,0.4)" : "var(--faint)",
                }}
              >
                {t.sub}
              </div>
              <div
                className="font-display"
                style={{
                  fontSize: "26px",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  marginBottom: "4px",
                  color: t.hi ? "var(--lime)" : "var(--green)",
                }}
              >
                {t.tier}
              </div>
              <div
                style={{
                  fontSize: "14px",
                  color: t.hi ? "rgba(212,255,63,0.38)" : "var(--muted)",
                }}
              >
                {t.price}
              </div>
            </div>
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.68,
                color: t.hi ? "rgba(212,255,63,0.35)" : "var(--muted)",
              }}
            >
              {t.desc}
            </p>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "9px" }}
            >
              {t.features.map((f) => (
                <div
                  key={f}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "9px",
                  }}
                >
                  <div
                    style={{
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      flexShrink: 0,
                      marginTop: "1px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "9px",
                      fontWeight: 700,
                      background: t.hi
                        ? "rgba(212,255,63,0.10)"
                        : "rgba(15,61,46,0.07)",
                      color: t.hi ? "var(--lime)" : "var(--green)",
                    }}
                  >
                    ✓
                  </div>
                  <span
                    style={{
                      fontSize: "13px",
                      lineHeight: 1.5,
                      color: t.hi ? "rgba(212,255,63,0.42)" : "var(--sub)",
                    }}
                  >
                    {f}
                  </span>
                </div>
              ))}
            </div>
            <Link
              href="#contact"
              style={{
                display: "block",
                textAlign: "center",
                padding: "13px 22px",
                borderRadius: "9px",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "0.04em",
                marginTop: "auto",
                background: t.hi ? "var(--lime)" : "rgba(15,61,46,0.07)",
                color: "var(--green)",
                border: t.hi ? "none" : "1px solid var(--border2)",
              }}
            >
              {t.cta} →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
