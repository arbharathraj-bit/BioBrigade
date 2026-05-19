import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "BioBrigade — One platform. Eleven frontiers of biology.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#F6F0E3",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "sans-serif",
          color: "#0F3D2E",
        }}
      >
        <div style={{ fontSize: 32, fontWeight: 700, letterSpacing: "-0.01em" }}>
          BioBrigade
        </div>
        <div
          style={{
            fontSize: 92,
            fontWeight: 700,
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>One platform.</span>
          <span style={{ fontStyle: "italic", color: "#0F3D2E" }}>Eleven</span>
          <span>frontiers of biology.</span>
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#3C5443",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          Data · Insight · Discovery
        </div>
      </div>
    ),
    size,
  );
}
