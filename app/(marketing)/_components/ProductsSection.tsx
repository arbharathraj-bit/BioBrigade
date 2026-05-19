import Link from "next/link";
import { Eyebrow } from "./Eyebrow";

const allProducts = [
  {
    name: "BioPipeline",
    cat: "Agriculture · Drug Discovery",
    live: true,
    desc: "Plant molecular docking & AI-ranked compound-target intelligence for drug discovery.",
  },
  {
    name: "AMR Scout",
    cat: "Clinical · Public Health",
    live: false,
    desc: "Antimicrobial resistance profiling, drug target identification & compound screening.",
  },
  {
    name: "RGNav",
    cat: "Agriculture · Plant Immunity",
    live: false,
    desc: "Plant R-gene & pathogen effector intelligence for crop resistance programs.",
  },
  {
    name: "BioWorldModel Studio",
    cat: "AI Biology · Research",
    live: false,
    desc: "No-code biological process simulation & gene perturbation modeling.",
  },
  {
    name: "SpatialMicro",
    cat: "Spatial Biology · Microbiome",
    live: false,
    desc: "Spatial host-microbiome transcriptomics with interactive tissue visualization.",
  },
  {
    name: "RareDxAI",
    cat: "Clinical Genomics · Diagnostics",
    live: false,
    desc: "Rare disease multi-modal diagnostic intelligence from WGS/WES data.",
  },
  {
    name: "BioAgent Copilot",
    cat: "AI Automation · Research",
    live: false,
    desc: "Multi-agent bioinformatics workflow automation — in plain English.",
  },
  {
    name: "FedOmics",
    cat: "Public Health · Global Labs",
    live: false,
    desc: "Federated omics platform for privacy-preserving genomic analysis.",
  },
  {
    name: "PhageFinder Pro",
    cat: "Phage Therapy · AMR",
    live: false,
    desc: "Bacteriophage-bacteria matching for phage therapy & precision AMR.",
  },
  {
    name: "NeuroOmics Mapper",
    cat: "Neuroscience · CNS",
    live: false,
    desc: "Brain spatial transcriptomics & neural circuit activity mapping.",
  },
  {
    name: "CropPhenomics AI",
    cat: "Precision Agriculture · GWAS",
    live: false,
    desc: "Phenotype-to-genotype resolution from drone imagery & genomic data.",
  },
];

export function ProductsSection() {
  return (
    <section
      id="products"
      className="section-px"
      style={{ background: "var(--bg2)", paddingTop: "100px", paddingBottom: "100px" }}
    >
      <div
        className="flex flex-col gap-6 md:flex-row md:justify-between md:items-end"
        style={{ marginBottom: "52px" }}
      >
        <div>
          <Eyebrow>Product Ecosystem</Eyebrow>
          <h2
            className="font-display section-h2"
            style={{ color: "var(--green)" }}
          >
            Pick your frontier.
            <br />
            The infrastructure is already there.
          </h2>
        </div>
        <p
          className="md:text-right"
          style={{
            fontSize: "15px",
            color: "var(--muted)",
            lineHeight: 1.7,
            maxWidth: "320px",
          }}
        >
          11 specialized platforms. One shared AI and cloud stack. Zero setup
          required.
        </p>
      </div>

      <div
        className="hov grid gap-8 md:gap-12 md:grid-cols-[1fr_auto] md:items-center"
        style={{
          padding: "38px 42px",
          borderRadius: "var(--r)",
          marginBottom: "16px",
          background: "var(--green)",
          border: "1px solid rgba(212,255,63,0.10)",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              alignItems: "center",
              marginBottom: "14px",
            }}
          >
            <span
              style={{
                fontSize: "10px",
                fontWeight: 700,
                color: "rgba(212,255,63,0.38)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              Agriculture · Drug Discovery
            </span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                padding: "3px 10px",
                borderRadius: "100px",
                background: "rgba(107,255,149,0.1)",
                border: "1px solid rgba(107,255,149,0.25)",
                fontSize: "10px",
                fontWeight: 700,
                color: "#6BFF95",
                letterSpacing: "0.08em",
              }}
            >
              <span
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: "#6BFF95",
                  display: "inline-block",
                }}
              />
              LIVE
            </span>
          </div>
          <div
            className="font-display"
            style={{
              fontSize: "clamp(28px, 4vw, 38px)",
              fontWeight: 700,
              color: "var(--lime)",
              lineHeight: 1,
              letterSpacing: "-0.02em",
              marginBottom: "14px",
            }}
          >
            BioPipeline
          </div>
          <p
            style={{
              fontSize: "16px",
              color: "rgba(212,255,63,0.38)",
              lineHeight: 1.7,
              maxWidth: "500px",
            }}
          >
            BioBrigade&apos;s flagship deployed product. Input plant species,
            compound classes, or genome data and receive AI-ranked docking
            scores, protein target maps, and structured research reports ready
            for early drug discovery — in under an hour.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            flexShrink: 0,
            width: "min(260px, 100%)",
          }}
        >
          {[
            "Plant Input → Compounds",
            "Compounds → Target Mapping",
            "Targets → Docking Scores",
            "Scores → AI Research Report",
          ].map((step, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 14px",
                borderRadius: "8px",
                background:
                  i === 3 ? "rgba(212,255,63,0.08)" : "rgba(245,247,245,0.03)",
                border: `1px solid ${
                  i === 3 ? "rgba(212,255,63,0.18)" : "rgba(245,247,245,0.06)"
                }`,
              }}
            >
              <div
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  flexShrink: 0,
                  background: i === 3 ? "#D4FF3F" : "rgba(212,255,63,0.25)",
                }}
              />
              <span
                style={{
                  fontSize: "12px",
                  color: i === 3 ? "rgba(212,255,63,0.65)" : "rgba(212,255,63,0.28)",
                  fontWeight: i === 3 ? 600 : 400,
                }}
              >
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {allProducts.slice(1).map((p, i) => (
          <div
            key={i}
            className="hov"
            style={{
              padding: "24px 22px",
              borderRadius: "12px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              background: "var(--card)",
              border: "1px solid var(--border)",
            }}
          >
            <span
              style={{
                fontSize: "10px",
                fontWeight: 600,
                color: "var(--faint)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              {p.cat}
            </span>
            <div
              className="font-display"
              style={{
                fontSize: "18px",
                fontWeight: 700,
                color: "var(--green)",
                lineHeight: 1.2,
              }}
            >
              {p.name}
            </div>
            <p
              style={{
                fontSize: "13px",
                color: "var(--muted)",
                lineHeight: 1.62,
                flex: 1,
              }}
            >
              {p.desc}
            </p>
            <Link
              href="#contact"
              style={{
                fontSize: "12px",
                fontWeight: 600,
                color: "var(--sub)",
                letterSpacing: "0.03em",
              }}
            >
              Learn more →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
