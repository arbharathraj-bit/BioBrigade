"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type Mode = "signin" | "signup";

export function AuthForm({ mode }: { mode: Mode }) {
  const params = useSearchParams();
  const next = params.get("next") ?? "";
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">(
    "idle",
  );
  const [error, setError] = useState<string | null>(null);

  const supabase = createClient();
  const callbackURL = () => {
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const params = new URLSearchParams();
    if (next) params.set("next", next);
    const q = params.toString();
    return `${origin}/auth/callback${q ? `?${q}` : ""}`;
  };

  async function handleEmail(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError(null);
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: callbackURL(),
        shouldCreateUser: mode === "signup",
      },
    });
    if (error) {
      setError(error.message);
      setStatus("error");
    } else {
      setStatus("sent");
    }
  }

  async function handleGoogle() {
    setStatus("loading");
    setError(null);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: callbackURL() },
    });
    if (error) {
      setError(error.message);
      setStatus("error");
    }
  }

  const cta = mode === "signup" ? "Create account" : "Continue with email";

  return (
    <form
      onSubmit={handleEmail}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        width: "100%",
      }}
    >
      <label
        htmlFor="email"
        style={{
          fontSize: "12px",
          fontWeight: 600,
          color: "var(--sub)",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
        }}
      >
        Email
      </label>
      <input
        id="email"
        type="email"
        autoComplete="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@lab.org"
        style={{
          padding: "14px 16px",
          borderRadius: "10px",
          border: "1.5px solid var(--border2)",
          background: "var(--card)",
          fontSize: "15px",
          color: "var(--text)",
          outline: "none",
        }}
      />

      <button
        type="submit"
        disabled={status === "loading"}
        style={{
          padding: "14px 20px",
          background: "var(--green)",
          color: "var(--lime)",
          borderRadius: "10px",
          fontSize: "15px",
          fontWeight: 600,
          letterSpacing: "0.04em",
          border: "none",
          cursor: status === "loading" ? "wait" : "pointer",
        }}
      >
        {status === "loading" ? "Working…" : cta + " →"}
      </button>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          color: "var(--faint)",
          fontSize: "12px",
          margin: "6px 0",
        }}
      >
        <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
        or
        <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
      </div>

      <button
        type="button"
        onClick={handleGoogle}
        disabled={status === "loading"}
        style={{
          padding: "12px 18px",
          background: "var(--card)",
          color: "var(--green)",
          borderRadius: "10px",
          fontSize: "14px",
          fontWeight: 600,
          border: "1.5px solid var(--border2)",
          cursor: status === "loading" ? "wait" : "pointer",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
          <path
            fill="#4285F4"
            d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 01-1.79 2.72v2.26h2.9c1.7-1.57 2.69-3.88 2.69-6.62z"
          />
          <path
            fill="#34A853"
            d="M9 18c2.43 0 4.47-.81 5.96-2.18l-2.9-2.26c-.8.54-1.84.86-3.06.86-2.35 0-4.34-1.59-5.05-3.72H.96v2.34A9 9 0 009 18z"
          />
          <path
            fill="#FBBC05"
            d="M3.95 10.7a5.4 5.4 0 010-3.4V4.96H.96a9 9 0 000 8.08l2.99-2.34z"
          />
          <path
            fill="#EA4335"
            d="M9 3.58c1.32 0 2.51.45 3.44 1.35l2.58-2.58A9 9 0 00.96 4.96L3.95 7.3C4.66 5.17 6.65 3.58 9 3.58z"
          />
        </svg>
        Continue with Google
      </button>

      {status === "sent" && (
        <div
          role="status"
          style={{
            padding: "12px 14px",
            borderRadius: "10px",
            background: "rgba(212,255,63,0.18)",
            border: "1px solid rgba(15,61,46,0.18)",
            color: "var(--green)",
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          Check your inbox — we sent you a magic link.
        </div>
      )}
      {error && (
        <div
          role="alert"
          style={{
            padding: "12px 14px",
            borderRadius: "10px",
            background: "rgba(220,38,38,0.08)",
            border: "1px solid rgba(220,38,38,0.25)",
            color: "#9b1c1c",
            fontSize: "13px",
          }}
        >
          {error}
        </div>
      )}
    </form>
  );
}
