import { Eyebrow } from "./Eyebrow";

const archRows = [
  {
    l: "Scientific Stack",
    s: "Docking · Genomics · Transcriptomics · GWAS · Spatial Omics",
    top: true,
  },
  {
    l: "AI & ML Layer",
    s: "scGPT · Geneformer · Foundation Models · Multi-agent",
    top: false,
  },
  {
    l: "Cloud Compute",
    s: "AWS Batch · Lambda · ECR · GPU Instances · S3",
    top: false,
  },
  {
    l: "Backend & Auth",
    s: "Supabase · Postgres · Edge Functions · Realtime",
    top: false,
  },
  {
    l: "Frontend",
    s: "Next.js · React · Vercel · Scientific Visualization",
    top: false,
  },
];

const tags = [
  "AWS Batch",
  "GPU Inference",
  "AlphaFold",
  "scGPT",
  "Geneformer",
  "Nextflow",
  "Supabase",
  "Next.js",
  "Docker",
  "Multi-agent AI",
  "Postgres",
  "Vercel",
];

export function TechSection() {
  return (
    <section
      id="technology"
      className="section-px"
      style={{ background: "var(--bg)", paddingTop: "100px", paddingBottom: "100px" }}
    >
      <div
        className="grid gap-12 lg:gap-20 lg:grid-cols-[1fr_440px] items-center"
      >
        <div>
          <Eyebrow>Technology Infrastructure</Eyebrow>
          <h2
            className="font-display section-h2"
            style={{ color: "var(--green)", marginBottom: "26px" }}
          >
            Enterprise-grade.
            <br />
            Research-native.
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: "var(--muted)",
              lineHeight: 1.78,
              marginBottom: "36px",
              maxWidth: "460px",
            }}
          >
            Built on AWS, powered by biological foundation models, and wrapped
            in a SaaS interface that needs zero command-line expertise.
            Professional-grade compute accessible to every lab on the planet.
          </p>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {tags.map((t) => (
              <span
                key={t}
                style={{
                  padding: "7px 14px",
                  borderRadius: "8px",
                  background: "rgba(15,61,46,0.05)",
                  border: "1px solid var(--border)",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "var(--sub)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div
          style={{
            background: "var(--green)",
            borderRadius: "var(--r)",
            overflow: "hidden",
            border: "1px solid rgba(212,255,63,0.09)",
            boxShadow: "var(--shadow2)",
          }}
        >
          <div
            style={{
              padding: "15px 20px",
              borderBottom: "1px solid rgba(212,255,63,0.06)",
              fontSize: "11px",
              fontWeight: 700,
              color: "rgba(212,255,63,0.3)",
              letterSpacing: "0.13em",
              textTransform: "uppercase",
            }}
          >
            Platform Architecture
          </div>
          {archRows.map((row, i) => (
            <div
              key={i}
              style={{
                padding: "15px 20px",
                background: row.top
                  ? "rgba(212,255,63,0.07)"
                  : "rgba(245,247,245,0.02)",
                borderLeft: `3px solid ${
                  row.top ? "var(--lime)" : "rgba(212,255,63,0.12)"
                }`,
                borderBottom:
                  i < archRows.length - 1
                    ? "1px solid rgba(212,255,63,0.04)"
                    : "none",
              }}
            >
              <div
                className="font-display"
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: row.top ? "var(--lime)" : "rgba(245,247,245,0.62)",
                  marginBottom: "3px",
                }}
              >
                {row.l}
              </div>
              <div
                style={{
                  fontSize: "11px",
                  color: "rgba(212,255,63,0.22)",
                  lineHeight: 1.5,
                }}
              >
                {row.s}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
