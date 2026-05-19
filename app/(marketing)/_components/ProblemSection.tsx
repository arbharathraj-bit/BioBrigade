import { Eyebrow } from "./Eyebrow";

const points = [
  {
    n: "01",
    t: "Fragmented Tools",
    d: "Dozens of disconnected command-line tools. No unified platform for end-to-end biological analysis.",
  },
  {
    n: "02",
    t: "Inaccessible AI",
    d: "Foundation models like AlphaFold, scGPT, and Geneformer exist — but deploying them requires infrastructure most labs don't have.",
  },
  {
    n: "03",
    t: "No Reproducibility",
    d: "Manual pipelines break. Analyses can't be reproduced. Institutional knowledge walks out the door.",
  },
  {
    n: "04",
    t: "Months, Not Hours",
    d: "Translating raw biological data into actionable research insight takes months — killing discovery velocity.",
  },
];

export function ProblemSection() {
  return (
    <section
      className="section-px"
      style={{
        background: "var(--green)",
        paddingTop: "100px",
        paddingBottom: "100px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        className="font-display hidden md:block"
        style={{
          position: "absolute",
          bottom: "-30px",
          right: "-40px",
          fontSize: "clamp(140px, 22vw, 280px)",
          fontWeight: 700,
          color: "rgba(212,255,63,0.03)",
          lineHeight: 1,
          letterSpacing: "-0.04em",
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        biology
      </div>

      <div
        className="grid gap-12 md:gap-16 lg:grid-cols-2"
        style={{ alignItems: "start", position: "relative", zIndex: 1 }}
      >
        <div>
          <Eyebrow light>The Problem</Eyebrow>
          <h2
            className="font-display section-h2"
            style={{
              color: "rgba(245,247,245,0.88)",
              marginBottom: "26px",
            }}
          >
            Biology moved fast.
            <br />
            <span style={{ color: "var(--lime)" }}>The tools didn&apos;t.</span>
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: "rgba(212,255,63,0.35)",
              lineHeight: 1.78,
              maxWidth: "400px",
            }}
          >
            Modern labs are buried under disconnected tools, inaccessible AI,
            and manual pipelines that break under pressure. The science is
            ready. The infrastructure isn&apos;t.
          </p>
          <div
            className="font-display hidden lg:block"
            aria-hidden
            style={{
              fontSize: "140px",
              fontWeight: 700,
              color: "rgba(212,255,63,0.05)",
              lineHeight: 1,
              letterSpacing: "-0.04em",
              marginTop: "36px",
            }}
          >
            04
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            paddingTop: "4px",
          }}
        >
          {points.map((p) => (
            <div
              key={p.n}
              style={{
                display: "flex",
                gap: "20px",
                padding: "22px 24px",
                borderRadius: "12px",
                background: "rgba(245,247,245,0.03)",
                border: "1px solid rgba(245,247,245,0.07)",
              }}
            >
              <div
                className="font-display"
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "rgba(212,255,63,0.15)",
                  lineHeight: 1,
                  flexShrink: 0,
                  paddingTop: "2px",
                  width: "36px",
                }}
              >
                {p.n}
              </div>
              <div>
                <div
                  className="font-display"
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "rgba(245,247,245,0.82)",
                    marginBottom: "6px",
                  }}
                >
                  {p.t}
                </div>
                <p
                  style={{
                    fontSize: "14px",
                    color: "rgba(212,255,63,0.32)",
                    lineHeight: 1.65,
                  }}
                >
                  {p.d}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
