import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="dot-grid section-px"
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <p
        style={{
          fontSize: "12px",
          fontWeight: 700,
          letterSpacing: "0.14em",
          color: "var(--muted)",
          textTransform: "uppercase",
          marginBottom: "12px",
        }}
      >
        404
      </p>
      <h1
        className="font-display"
        style={{
          fontSize: "clamp(48px, 9vw, 96px)",
          fontWeight: 700,
          color: "var(--green)",
          letterSpacing: "-0.03em",
          lineHeight: 1,
          marginBottom: "20px",
        }}
      >
        Nothing here.
      </h1>
      <p
        style={{
          fontSize: "17px",
          color: "var(--sub)",
          marginBottom: "28px",
          maxWidth: "440px",
          lineHeight: 1.7,
        }}
      >
        The page you’re looking for doesn’t exist or was moved.
      </p>
      <Link
        href="/"
        style={{
          alignSelf: "flex-start",
          padding: "14px 28px",
          background: "var(--green)",
          color: "var(--lime)",
          borderRadius: "10px",
          fontSize: "15px",
          fontWeight: 600,
        }}
      >
        ← Back to BioBrigade
      </Link>
    </main>
  );
}
