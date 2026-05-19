export function CTASection() {
  return (
    <section
      id="contact"
      className="section-px"
      style={{
        background: "var(--lime)",
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
          right: "-80px",
          bottom: "-60px",
          fontSize: "clamp(280px, 40vw, 560px)",
          fontWeight: 700,
          lineHeight: 1,
          color: "rgba(15,61,46,0.055)",
          pointerEvents: "none",
          userSelect: "none",
          letterSpacing: "-0.04em",
        }}
      >
        B
      </div>
      <svg
        aria-hidden
        className="hidden lg:block"
        style={{
          position: "absolute",
          right: "120px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "340px",
          height: "340px",
          opacity: 0.06,
          pointerEvents: "none",
        }}
        viewBox="0 0 340 340"
        fill="none"
      >
        {[150, 110, 72, 40].map((r) => (
          <circle
            key={r}
            cx="170"
            cy="170"
            r={r}
            stroke="#0F3D2E"
            strokeWidth="1"
          />
        ))}
        <circle cx="170" cy="170" r="16" fill="#0F3D2E" opacity="0.5" />
        <circle cx="170" cy="170" r="8" fill="#0F3D2E" />
      </svg>

      <div style={{ maxWidth: "680px", position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "7px",
            padding: "6px 13px",
            borderRadius: "100px",
            background: "rgba(15,61,46,0.09)",
            border: "1px solid rgba(15,61,46,0.16)",
            marginBottom: "26px",
          }}
        >
          <div
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "var(--green)",
            }}
          />
          <span
            style={{
              fontSize: "11px",
              fontWeight: 600,
              color: "var(--green)",
              letterSpacing: "0.09em",
              textTransform: "uppercase",
            }}
          >
            Start your first analysis today — free
          </span>
        </div>
        <h2
          className="font-display"
          style={{
            fontSize: "clamp(40px, 7vw, 66px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "var(--green)",
            lineHeight: 0.96,
            marginBottom: "26px",
          }}
        >
          Your next breakthrough
          <br />
          starts here.
        </h2>
        <p
          style={{
            fontSize: "clamp(16px, 1.6vw, 19px)",
            color: "rgba(15,61,46,0.58)",
            lineHeight: 1.68,
            maxWidth: "520px",
            marginBottom: "42px",
          }}
        >
          Join labs, hospitals, and biotech teams already using BioBrigade to
          accelerate biological discovery — no hardware, no pipelines, no
          DevOps.
        </p>
        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <a
            href="mailto:contact@biobrigade.in"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "16px 38px",
              background: "var(--green)",
              color: "var(--lime)",
              borderRadius: "10px",
              fontSize: "15px",
              fontWeight: 600,
              letterSpacing: "0.02em",
            }}
          >
            contact@biobrigade.in
          </a>
          <a
            href="https://biobrigade.in"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "15px 28px",
              background: "transparent",
              color: "var(--green)",
              borderRadius: "10px",
              fontSize: "15px",
              fontWeight: 500,
              border: "1.5px solid rgba(15,61,46,0.22)",
            }}
          >
            biobrigade.in →
          </a>
        </div>
      </div>
    </section>
  );
}
