import Image from "next/image";
import Link from "next/link";

const cols = [
  {
    h: "Platform",
    links: [
      "BioPipeline",
      "AMR Scout",
      "RareDxAI",
      "BioAgent Copilot",
      "All 11 Products →",
    ],
  },
  {
    h: "Solutions",
    links: [
      "Research Labs",
      "Hospitals & Clinical",
      "Pharma & Drug Discovery",
      "Agricultural Biotech",
    ],
  },
  // Team link removed per requirement.
  { h: "Company", links: ["About Us", "Roadmap", "Careers", "Press"] },
  {
    h: "Resources",
    links: [
      "Documentation",
      "API Reference",
      "Blog",
      "Contact Us",
      "contact@biobrigade.in",
    ],
  },
];

export function Footer() {
  return (
    <footer
      className="section-px"
      style={{
        background: "var(--green3)",
        paddingTop: "60px",
        paddingBottom: "40px",
        color: "#ffffff",
      }}
    >
      <div
        className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:items-start"
        style={{
          paddingBottom: "44px",
          marginBottom: "36px",
          borderBottom: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            maxWidth: "260px",
          }}
        >
          <Link
            href="/"
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <Image
              src="/biobrigade-logo.jpg"
              alt="BioBrigade"
              width={36}
              height={36}
              style={{ borderRadius: "7px", objectFit: "cover" }}
            />
            <span
              className="font-display"
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "var(--lime)",
              }}
            >
              BioBrigade
            </span>
          </Link>
          <p
            style={{
              fontSize: "15px",
              color: "#ffffff",
              lineHeight: 1.65,
            }}
          >
            The computational operating system for modern biotechnology.
          </p>
          <p
            style={{
              fontSize: "12px",
              color: "#ffffff",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            Data · Insight · Discovery
          </p>
        </div>

        <div className="grid w-full max-w-2xl gap-x-10 gap-y-10 grid-cols-2 md:grid-cols-4">
          {cols.map((col) => (
            <div key={col.h}>
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  marginBottom: "14px",
                }}
              >
                {col.h}
              </div>
              {col.links.map((l) => (
                <div key={l} style={{ marginBottom: "10px" }}>
                  <a
                    href="#"
                    style={{
                      fontSize: "14px",
                      color: "#ffffff",
                      opacity: 0.92,
                      display: "block",
                    }}
                  >
                    {l}
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div
        className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center"
      >
        <span style={{ fontSize: "14px", color: "#ffffff" }}>
          © 2026 BioBrigade Technologies. All rights reserved.
        </span>
        <span
          style={{
            fontSize: "13px",
            color: "#ffffff",
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          Data · Insight · Discovery
        </span>
      </div>
    </footer>
  );
}
