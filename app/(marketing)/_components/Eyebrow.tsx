export function Eyebrow({
  children,
  light,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          width: "24px",
          height: "2px",
          borderRadius: "2px",
          flexShrink: 0,
          background: light ? "rgba(212,255,63,0.45)" : "rgba(15,61,46,0.3)",
        }}
      />
      <span
        style={{
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.13em",
          textTransform: "uppercase",
          color: light ? "rgba(212,255,63,0.55)" : "var(--muted)",
        }}
      >
        {children}
      </span>
    </div>
  );
}
