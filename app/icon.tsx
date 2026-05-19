import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0F3D2E",
          color: "#D4FF3F",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 38,
          fontWeight: 700,
          letterSpacing: "-0.04em",
          fontFamily: "sans-serif",
          borderRadius: 12,
        }}
      >
        B
      </div>
    ),
    size,
  );
}
