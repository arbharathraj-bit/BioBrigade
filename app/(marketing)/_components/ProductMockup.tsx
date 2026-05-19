"use client";

export function ProductMockup() {
  const bars = [
    { label: "Quercetin → TNF-α", score: "-9.8", pct: 92, hi: true },
    { label: "Resveratrol → ACE2", score: "-8.3", pct: 78, hi: false },
    { label: "Curcumin → EGFR", score: "-7.1", pct: 63, hi: false },
    { label: "Berberine → ACE2", score: "-5.9", pct: 51, hi: false },
  ];
  return (
    <div
      className="mockup-card"
      style={{
        width: "min(500px, 100%)",
        borderRadius: "16px",
        overflow: "hidden",
        background: "#0c2a1d",
        boxShadow:
          "0 48px 100px rgba(15,61,46,0.30), 0 8px 28px rgba(15,61,46,0.18)",
        border: "1px solid rgba(212,255,63,0.09)",
      }}
    >
      <div
        style={{
          background: "#071e10",
          padding: "12px 18px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          borderBottom: "1px solid rgba(212,255,63,0.06)",
        }}
      >
        <div style={{ display: "flex", gap: "6px" }}>
          {["#FF5F57", "#FEBC2E", "#27C93F"].map((c) => (
            <div
              key={c}
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: c,
                opacity: 0.75,
              }}
            />
          ))}
        </div>
        <div
          style={{
            flex: 1,
            textAlign: "center",
            fontSize: "12px",
            color: "rgba(212,255,63,0.35)",
            letterSpacing: "0.02em",
          }}
        >
          BioPipeline — Analysis #1,047
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            padding: "3px 9px",
            borderRadius: "100px",
            background: "rgba(107,255,149,0.09)",
            border: "1px solid rgba(107,255,149,0.2)",
          }}
        >
          <div
            className="live-dot"
            style={{
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              background: "#6BFF95",
            }}
          />
          <span
            style={{
              fontSize: "10px",
              fontWeight: 700,
              color: "#6BFF95",
              letterSpacing: "0.1em",
            }}
          >
            LIVE
          </span>
        </div>
      </div>

      <div style={{ display: "flex", height: "308px" }}>
        <div
          style={{
            width: "148px",
            borderRight: "1px solid rgba(212,255,63,0.05)",
            padding: "16px 13px",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            flexShrink: 0,
          }}
        >
          {[
            {
              label: "COMPOUNDS",
              items: ["Quercetin", "Resveratrol", "Curcumin", "Berberine"],
              ai: 0,
            },
            { label: "TARGETS", items: ["TNF-α", "ACE2", "EGFR"], ai: 1 },
          ].map((sec) => (
            <div key={sec.label}>
              <div
                style={{
                  fontSize: "9px",
                  fontWeight: 700,
                  color: "rgba(212,255,63,0.22)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                {sec.label}
              </div>
              {sec.items.map((item, i) => (
                <div
                  key={item}
                  style={{
                    padding: "6px 9px",
                    borderRadius: "6px",
                    marginBottom: "3px",
                    background:
                      i === sec.ai ? "rgba(212,255,63,0.09)" : "transparent",
                    border: `1px solid ${
                      i === sec.ai ? "rgba(212,255,63,0.17)" : "transparent"
                    }`,
                    fontSize: "12px",
                    color: i === sec.ai ? "#D4FF3F" : "rgba(212,255,63,0.25)",
                    fontWeight: i === sec.ai ? 600 : 400,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div
          style={{
            flex: 1,
            padding: "17px 17px 14px",
            display: "flex",
            flexDirection: "column",
            gap: "13px",
          }}
        >
          <div>
            <div
              className="font-display"
              style={{
                fontSize: "13px",
                fontWeight: 700,
                color: "rgba(245,247,245,0.8)",
                marginBottom: "2px",
              }}
            >
              Docking Scores
            </div>
            <div
              style={{ fontSize: "11px", color: "rgba(212,255,63,0.25)" }}
            >
              AI-ranked binding affinity (kcal/mol)
            </div>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "11px" }}
          >
            {bars.map((b, i) => (
              <div key={i}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "5px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "11px",
                      color: b.hi
                        ? "rgba(245,247,245,0.72)"
                        : "rgba(212,255,63,0.28)",
                      fontWeight: b.hi ? 600 : 400,
                    }}
                  >
                    {b.label}
                  </span>
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      color: b.hi ? "#D4FF3F" : "rgba(212,255,63,0.28)",
                    }}
                  >
                    {b.score}
                  </span>
                </div>
                <div
                  style={{
                    height: "5px",
                    background: "rgba(212,255,63,0.06)",
                    borderRadius: "3px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    className="bar-anim"
                    style={{
                      height: "100%",
                      width: `${b.pct}%`,
                      borderRadius: "3px",
                      background: b.hi
                        ? "linear-gradient(90deg,#D4FF3F,rgba(212,255,63,0.45))"
                        : "rgba(212,255,63,0.2)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: "auto",
              padding: "11px 13px",
              borderRadius: "9px",
              background: "rgba(212,255,63,0.05)",
              border: "1px solid rgba(212,255,63,0.11)",
            }}
          >
            <div
              style={{
                fontSize: "9px",
                fontWeight: 700,
                color: "rgba(212,255,63,0.38)",
                letterSpacing: "0.13em",
                textTransform: "uppercase",
                marginBottom: "5px",
              }}
            >
              ✦ AI Insight
            </div>
            <div
              style={{
                fontSize: "11px",
                color: "rgba(212,255,63,0.3)",
                lineHeight: 1.6,
              }}
            >
              Top candidate:{" "}
              <span style={{ color: "#D4FF3F", fontWeight: 600 }}>
                Quercetin → TNF-α
              </span>{" "}
              (ΔG = -9.8 kcal/mol). Recommend wet-lab validation.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
