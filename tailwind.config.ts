import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        bg2: "var(--bg2)",
        bg3: "var(--bg3)",
        green: {
          DEFAULT: "var(--green)",
          2: "var(--green2)",
          3: "var(--green3)",
        },
        lime: "var(--lime)",
        mint: "var(--mint)",
        ink: "var(--text)",
        sub: "var(--sub)",
        muted: "var(--muted)",
        faint: "var(--faint)",
        card: "var(--card)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Space Grotesk", "sans-serif"],
        body: ["var(--font-body)", "DM Sans", "sans-serif"],
      },
      borderRadius: { DEFAULT: "14px" },
      boxShadow: {
        soft: "0 4px 20px rgba(15,61,46,0.09)",
        lift: "0 16px 56px rgba(15,61,46,0.16)",
      },
    },
  },
  plugins: [],
};
export default config;
