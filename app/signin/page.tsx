import type { Metadata } from "next";
import { Suspense } from "react";
import { AuthShell } from "./AuthShell";
import { AuthForm } from "./AuthForm";

export const metadata: Metadata = {
  title: "Sign in",
  description:
    "Sign in to BioBrigade — one account across every BioBrigade vertical.",
  alternates: { canonical: "/signin" },
};

export default function SignInPage() {
  return (
    <AuthShell
      title="Welcome back."
      subtitle="Sign in to access BioPipeline and every BioBrigade vertical you have on your plan."
      altPrompt="New here?"
      altCtaLabel="Create account"
      altCtaHref="/signup"
    >
      <Suspense fallback={null}>
        <AuthForm mode="signin" />
      </Suspense>
    </AuthShell>
  );
}
