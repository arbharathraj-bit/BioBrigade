import { Eyebrow } from "./Eyebrow";

const solutions = [
  {
    market: "Research Labs & Universities",
    icon: "⬡",
    headline: "Stop wrangling pipelines. Start discovering.",
    body: "Give your team a research-grade computational platform that runs from raw data to ranked candidates — without needing a dedicated bioinformatics team.",
    products: ["BioPipeline", "BioAgent Copilot", "BioWorldModel Studio"],
    dark: false,
  },
  {
    market: "Hospitals & Clinical Diagnostics",
    icon: "◈",
    headline: "Faster diagnostics. Fewer unknowns.",
    body: "From whole genome sequencing to rare disease diagnosis and antimicrobial resistance profiling — BioBrigade delivers clinical-grade intelligence at scale.",
    products: ["RareDxAI", "AMR Scout", "PhageFinder Pro"],
    dark: true,
  },
  {
    market: "Pharma & Drug Discovery",
    icon: "◎",
    headline: "Compress timelines. Multiply candidates.",
    body: "Reduce the $2.6B cost of drug development with AI-powered molecular docking, target discovery, and compound prioritization — accessible on day one.",
    products: ["BioPipeline", "AMR Scout", "NeuroOmics Mapper"],
    dark: false,
  },
  {
    market: "Agricultural Biotechnology",
    icon: "⬢",
    headline: "Grow smarter. Defend crops faster.",
    body: "From plant R-gene intelligence to phenotype-to-genotype mapping — give agribiotech teams the computational tools they need to breed resilient crops.",
    products: ["RGNav", "CropPhenomics AI", "BioPipeline"],
    dark: false,
  },
];

export function SolutionsSection() {
  return (
    <section
      id="solutions"
      className="section-px"
      style={{ background: "var(--bg2)", paddingTop: "100px", paddingBottom: "100px" }}
    >
      <div
        className="flex flex-col gap-6 md:flex-row md:justify-between md:items-end"
        style={{ marginBottom: "52px" }}
      >
        <div>
          <Eyebrow>Solutions</Eyebrow>
          <h2
            className="font-display section-h2"
            style={{ color: "var(--green)" }}
          >
            Purpose-built for every
            <br />
            life sciences domain
          </h2>
        </div>
        <p
          className="md:text-right"
          style={{
            fontSize: "15px",
            color: "var(--muted)",
            lineHeight: 1.7,
            maxWidth: "310px",
          }}
        >
          One platform. Multiple entry points. Each vertical purpose-built for
          its domain and user.
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {solutions.map((s, i) => (
          <div
            key={i}
            className="hov"
            style={{
              padding: "38px 36px",
              borderRadius: "var(--r)",
              background: s.dark ? "var(--green)" : "var(--card)",
              border: s.dark
                ? "1px solid rgba(212,255,63,0.09)"
                : "1px solid var(--border)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: s.dark ? "rgba(212,255,63,0.38)" : "var(--faint)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                {s.market}
              </div>
              <div
                style={{
                  fontSize: "28px",
                  opacity: s.dark ? 0.2 : 0.12,
                  color: s.dark ? "var(--lime)" : "var(--green)",
                }}
              >
                {s.icon}
              </div>
            </div>
            <h3
              className="font-display"
              style={{
                fontSize: "26px",
                fontWeight: 700,
                color: s.dark ? "rgba(245,247,245,0.88)" : "var(--green)",
                lineHeight: 1.25,
                marginBottom: "14px",
              }}
            >
              {s.headline}
            </h3>
            <p
              style={{
                fontSize: "15px",
                color: s.dark ? "rgba(212,255,63,0.35)" : "var(--muted)",
                lineHeight: 1.72,
                marginBottom: "24px",
              }}
            >
              {s.body}
            </p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {s.products.map((p) => (
                <span
                  key={p}
                  style={{
                    padding: "5px 12px",
                    borderRadius: "7px",
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.02em",
                    background: s.dark
                      ? "rgba(212,255,63,0.07)"
                      : "rgba(15,61,46,0.06)",
                    color: s.dark ? "rgba(212,255,63,0.55)" : "var(--sub)",
                    border: `1px solid ${
                      s.dark ? "rgba(212,255,63,0.14)" : "rgba(15,61,46,0.11)"
                    }`,
                  }}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
