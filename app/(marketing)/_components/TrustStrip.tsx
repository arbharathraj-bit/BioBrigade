export function TrustStrip() {
  const items = [
    "Research Labs",
    "Academic Medical Centers",
    "Pharma & Biotech",
    "Agricultural Companies",
    "Public Health Agencies",
    "Clinical Diagnostics",
  ];
  return (
    <div
      className="section-px"
      style={{
        background: "var(--bg2)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        paddingTop: "18px",
        paddingBottom: "18px",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "18px",
      }}
    >
      <span
        style={{
          fontSize: "11px",
          fontWeight: 600,
          color: "var(--faint)",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          flexShrink: 0,
        }}
      >
        Built for
      </span>
      <div
        style={{
          width: "1px",
          height: "18px",
          background: "var(--border)",
          flexShrink: 0,
        }}
      />
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        {items.map((s) => (
          <span
            key={s}
            style={{
              padding: "5px 13px",
              borderRadius: "100px",
              background: "rgba(15,61,46,0.05)",
              border: "1px solid var(--border)",
              fontSize: "13px",
              fontWeight: 500,
              color: "var(--sub)",
            }}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
