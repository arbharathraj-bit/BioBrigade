import Link from "next/link";
import { ProductMockup } from "./ProductMockup";

export function Hero() {
  return (
    <section
      id="top"
      className="dot-grid section-px"
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        display: "flex",
        alignItems: "center",
        paddingTop: "120px",
        paddingBottom: "70px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-150px",
          right: "-150px",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(212,255,63,0.06) 0%,transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="flex flex-col lg:flex-row lg:items-center"
        style={{
          gap: "52px",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "26px",
            maxWidth: "660px",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              borderRadius: "100px",
              background: "rgba(15,61,46,0.06)",
              border: "1px solid rgba(15,61,46,0.12)",
              width: "fit-content",
            }}
          >
            <div
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "#D4FF3F",
                boxShadow: "0 0 0 2.5px rgba(212,255,63,0.22)",
              }}
            />
            <span
              style={{
                fontSize: "12px",
                fontWeight: 600,
                color: "var(--green)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              BioPipeline · Live in production
            </span>
          </div>

          <h1
            className="font-display"
            style={{ color: "var(--green)" }}
          >
            <span className="hero-line">One platform.</span>
            <span
              className="hero-line"
              style={{
                WebkitTextStroke: "2px var(--green)",
                color: "transparent",
                fontStyle: "italic",
              }}
            >
              Eleven
            </span>
            <span className="hero-line">frontiers of biology.</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(15px, 1.5vw, 18px)",
              color: "var(--sub)",
              lineHeight: 1.72,
              maxWidth: "500px",
              fontWeight: 400,
            }}
          >
            BioBrigade gives research labs, hospitals, and biotech teams a
            single AI-powered platform to run molecular docking, genomics,
            diagnostics, and more — with{" "}
            <em>zero infrastructure to manage.</em>
          </p>

          <div
            className="flex flex-wrap"
            style={{ gap: "12px", alignItems: "center", marginTop: "4px" }}
          >
            <Link
              href="/signup"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "15px 36px",
                background: "var(--green)",
                color: "var(--lime)",
                borderRadius: "10px",
                fontSize: "15px",
                fontWeight: 600,
                letterSpacing: "0.02em",
                transition: "all 0.22s",
              }}
            >
              Start for free →
            </Link>
            <Link
              href="#howit"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 28px",
                background: "transparent",
                color: "var(--green)",
                borderRadius: "10px",
                fontSize: "15px",
                fontWeight: 500,
                border: "1.5px solid var(--border2)",
                transition: "background 0.2s",
              }}
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle
                  cx="14"
                  cy="14"
                  r="13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  opacity="0.35"
                />
                <path
                  d="M11 9.5L18 14l-7 4.5V9.5z"
                  fill="currentColor"
                  opacity="0.7"
                />
              </svg>
              See how it works
            </Link>
          </div>

          <div
            className="flex flex-wrap"
            style={{
              gap: "36px",
              paddingTop: "22px",
              borderTop: "1px solid var(--border)",
            }}
          >
            {[
              ["11", "AI Verticals"],
              ["$150B+", "Market Opp."],
              ["< 1 hr", "Time to Insight"],
            ].map(([v, l]) => (
              <div key={v}>
                <div
                  className="font-display"
                  style={{
                    fontSize: "26px",
                    fontWeight: 700,
                    color: "var(--green)",
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {v}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "var(--muted)",
                    marginTop: "4px",
                  }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-auto" style={{ flexShrink: 0 }}>
          <ProductMockup />
        </div>
      </div>
    </section>
  );
}
