import { Eyebrow } from "./Eyebrow";

const pillars = [
  {
    big: "11",
    title: "AI-Native Verticals",
    body: "Eleven specialized platforms built on shared biological foundation models — AlphaFold, scGPT, Geneformer — all under one roof.",
    pts: [
      "Multi-agent AI orchestration",
      "Domain-tuned inference models",
      "Cross-vertical learning",
    ],
    dark: true,
  },
  {
    big: "01",
    title: "Cloud-Native by Default",
    body: "Zero hardware. Zero DevOps. Any lab anywhere can access full computational power on day one — via a research-grade SaaS interface.",
    pts: [
      "AWS Batch & GPU inference",
      "Dockerized pipelines",
      "Nextflow orchestration",
    ],
    dark: false,
  },
  {
    big: "∞",
    title: "Network Effect Built In",
    body: "Every analysis enriches BioBrigade's shared intelligence. Data from 11 domains trains models that improve across the entire ecosystem over time.",
    pts: [
      "Cross-domain model training",
      "Privacy-first by design",
      "Improves with every run",
    ],
    dark: false,
  },
];

export function PlatformIntro() {
  return (
    <section
      className="section-px"
      style={{ background: "var(--bg)", paddingTop: "100px", paddingBottom: "100px" }}
    >
      <div
        style={{
          maxWidth: "560px",
          margin: "0 auto 60px",
          textAlign: "center",
        }}
      >
        <Eyebrow>What is BioBrigade</Eyebrow>
        <h2
          className="font-display section-h2"
          style={{ color: "var(--green)" }}
        >
          The computational OS for modern biotechnology
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {pillars.map((p, i) => (
          <div
            key={i}
            className="hov"
            style={{
              padding: "42px 36px",
              borderRadius: "var(--r)",
              background: p.dark ? "var(--green)" : "var(--card)",
              border: p.dark
                ? "1px solid rgba(212,255,63,0.10)"
                : "1px solid var(--border)",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div
              className="font-display"
              style={{
                fontSize: "84px",
                fontWeight: 700,
                lineHeight: 1,
                letterSpacing: "-0.04em",
                color: p.dark
                  ? "rgba(212,255,63,0.12)"
                  : "rgba(15,61,46,0.08)",
              }}
            >
              {p.big}
            </div>
            <div>
              <div
                className="font-display"
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  color: p.dark ? "rgba(245,247,245,0.88)" : "var(--green)",
                  lineHeight: 1.25,
                  marginBottom: "12px",
                }}
              >
                {p.title}
              </div>
              <p
                style={{
                  fontSize: "15px",
                  color: p.dark ? "rgba(212,255,63,0.36)" : "var(--muted)",
                  lineHeight: 1.72,
                }}
              >
                {p.body}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "9px",
                marginTop: "auto",
              }}
            >
              {p.pts.map((pt) => (
                <div
                  key={pt}
                  style={{ display: "flex", alignItems: "center", gap: "9px" }}
                >
                  <div
                    style={{
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      flexShrink: 0,
                      background: p.dark
                        ? "rgba(212,255,63,0.3)"
                        : "rgba(15,61,46,0.2)",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "13px",
                      color: p.dark
                        ? "rgba(212,255,63,0.32)"
                        : "var(--muted)",
                    }}
                  >
                    {pt}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
