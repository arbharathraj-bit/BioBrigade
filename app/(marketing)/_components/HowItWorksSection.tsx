import { Eyebrow } from "./Eyebrow";

type Step = {
  n: string;
  title: string;
  body: string;
  badge: string;
  visual: React.ReactNode;
};

const steps: Step[] = [
  {
    n: "01",
    title: "Upload your data",
    body: "Input genomic sequences, compound structures, patient WGS data, or simply a species name. BioBrigade accepts all standard biological data formats.",
    badge: "Any format · Any scale",
    visual: (
      <div
        style={{
          width: "100%",
          padding: "20px",
          borderRadius: "10px",
          background: "rgba(15,61,46,0.05)",
          border: "1px solid var(--border)",
        }}
      >
        {[
          "genome_sample.fasta",
          "compounds_list.sdf",
          "patient_WGS_001.vcf",
        ].map((f, i) => (
          <div
            key={f}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "9px 12px",
              borderRadius: "7px",
              marginBottom: i < 2 ? "6px" : 0,
              background: i === 0 ? "rgba(15,61,46,0.07)" : "transparent",
              border: `1px solid ${
                i === 0 ? "rgba(15,61,46,0.14)" : "transparent"
              }`,
            }}
          >
            <div
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "6px",
                flexShrink: 0,
                background: i === 0 ? "var(--green)" : "rgba(15,61,46,0.06)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "10px",
                fontWeight: 700,
                color: i === 0 ? "var(--lime)" : "var(--faint)",
              }}
            >
              {f.split(".").pop()!.toUpperCase()}
            </div>
            <span
              style={{
                fontSize: "12px",
                color: i === 0 ? "var(--sub)" : "var(--faint)",
                fontWeight: i === 0 ? 500 : 400,
              }}
            >
              {f}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    n: "02",
    title: "Select your vertical & run",
    body: "Choose from 11 specialized platforms. BioBrigade handles pipeline execution, AI model inference, and cloud compute — automatically, at any scale.",
    badge: "No infrastructure required",
    visual: (
      <div
        style={{
          padding: "20px",
          borderRadius: "10px",
          background: "rgba(15,61,46,0.05)",
          border: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "6px",
            marginBottom: "12px",
          }}
        >
          {(
            [
              ["BioPipeline", "● Active"],
              ["AMR Scout", "○ Ready"],
              ["RareDxAI", "○ Ready"],
              ["SpatialMicro", "○ Ready"],
            ] as const
          ).map(([name, status]) => (
            <div
              key={name}
              style={{
                padding: "8px 11px",
                borderRadius: "7px",
                background: status.startsWith("●")
                  ? "rgba(15,61,46,0.08)"
                  : "transparent",
                border: `1px solid ${
                  status.startsWith("●") ? "rgba(15,61,46,0.15)" : "var(--border)"
                }`,
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "var(--green)",
                  marginBottom: "2px",
                }}
              >
                {name}
              </div>
              <div
                style={{
                  fontSize: "10px",
                  color: status.startsWith("●") ? "#6B8C00" : "var(--faint)",
                  fontWeight: 600,
                }}
              >
                {status}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            padding: "10px 12px",
            borderRadius: "8px",
            background: "rgba(107,255,149,0.07)",
            border: "1px solid rgba(107,255,149,0.2)",
            fontSize: "12px",
            color: "#1A6B3A",
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            gap: "7px",
          }}
        >
          <div
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: "#6BFF95",
              flexShrink: 0,
            }}
          />
          Pipeline running — ETA 18 min
        </div>
      </div>
    ),
  },
  {
    n: "03",
    title: "Get research intelligence",
    body: "Receive ranked candidates, structured reports, and AI-generated insights ready to drive your next scientific decision — in hours, not months.",
    badge: "Hours, not months",
    visual: (
      <div
        style={{
          padding: "20px",
          borderRadius: "10px",
          background: "rgba(15,61,46,0.05)",
          border: "1px solid var(--border)",
        }}
      >
        {[
          { c: "Quercetin → TNF-α", s: "-9.8", w: "92%", hi: true },
          { c: "Resveratrol → ACE2", s: "-8.3", w: "76%", hi: false },
          { c: "Curcumin → EGFR", s: "-7.1", w: "62%", hi: false },
        ].map((r, i) => (
          <div key={i} style={{ marginBottom: i < 2 ? "10px" : 0 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "4px",
              }}
            >
              <span
                style={{
                  fontSize: "11px",
                  color: r.hi ? "var(--text)" : "var(--muted)",
                  fontWeight: r.hi ? 600 : 400,
                }}
              >
                {r.c}
              </span>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: r.hi ? "var(--green)" : "var(--faint)",
                }}
              >
                {r.s}
              </span>
            </div>
            <div
              style={{
                height: "5px",
                background: "rgba(15,61,46,0.07)",
                borderRadius: "3px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: r.w,
                  borderRadius: "3px",
                  background: r.hi ? "var(--green)" : "rgba(15,61,46,0.25)",
                }}
              />
            </div>
          </div>
        ))}
        <div
          style={{
            marginTop: "12px",
            padding: "9px 12px",
            borderRadius: "7px",
            background: "rgba(212,255,63,0.08)",
            border: "1px solid rgba(212,255,63,0.2)",
            fontSize: "11px",
            color: "#6B8C00",
            fontWeight: 600,
          }}
        >
          ✦ Top candidate identified · Ready for wet-lab validation
        </div>
      </div>
    ),
  },
];

export function HowItWorksSection() {
  return (
    <section
      id="howit"
      className="section-px"
      style={{ background: "var(--bg)", paddingTop: "100px", paddingBottom: "100px" }}
    >
      <div
        style={{
          maxWidth: "580px",
          margin: "0 auto 64px",
          textAlign: "center",
        }}
      >
        <Eyebrow>How it works</Eyebrow>
        <h2
          className="font-display section-h2"
          style={{ color: "var(--green)" }}
        >
          From raw data to research intelligence — in hours
        </h2>
      </div>
      <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          aria-hidden
          className="hidden lg:block"
          style={{
            position: "absolute",
            top: "28px",
            left: "calc(33.33% - 10px)",
            right: "calc(33.33% - 10px)",
            height: "1px",
            background:
              "linear-gradient(90deg,var(--lime) 0%,rgba(212,255,63,0.2) 100%)",
            zIndex: 0,
          }}
        />
        {steps.map((s, i) => (
          <div key={i} style={{ position: "relative", zIndex: 1 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "26px",
              }}
            >
              <div
                className="font-display"
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  flexShrink: 0,
                  background: i === 0 ? "var(--lime)" : "var(--card)",
                  border: i === 0 ? "none" : "1.5px solid var(--border2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "var(--green)",
                  boxShadow:
                    i === 0 ? "0 0 0 6px rgba(212,255,63,0.14)" : "none",
                }}
              >
                {s.n}
              </div>
            </div>
            <h3
              className="font-display"
              style={{
                fontSize: "24px",
                fontWeight: 700,
                color: "var(--green)",
                lineHeight: 1.25,
                marginBottom: "12px",
              }}
            >
              {s.title}
            </h3>
            <p
              style={{
                fontSize: "15px",
                color: "var(--muted)",
                lineHeight: 1.72,
                marginBottom: "16px",
              }}
            >
              {s.body}
            </p>
            {s.visual}
            <div
              style={{
                marginTop: "16px",
                display: "inline-flex",
                padding: "5px 13px",
                borderRadius: "100px",
                background: "rgba(15,61,46,0.06)",
                border: "1px solid var(--border)",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "var(--sub)",
                  letterSpacing: "0.03em",
                }}
              >
                {s.badge}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
