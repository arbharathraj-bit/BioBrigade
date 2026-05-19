import type { Metadata } from "next";
import { Suspense } from "react";
import { AuthShell } from "@/app/signin/AuthShell";
import { AuthForm } from "@/app/signin/AuthForm";

export const metadata: Metadata = {
  title: "Create account",
  description:
    "Create a free BioBrigade account and start your first AI-powered biological analysis.",
  alternates: { canonical: "/signup" },
};

export default function SignUpPage() {
  return (
    <AuthShell
      title="Start your first analysis."
      subtitle="Create a BioBrigade account — one login that works across every vertical, on every subdomain."
      altPrompt="Already have an account?"
      altCtaLabel="Sign in"
      altCtaHref="/signin"
    >
      <Suspense fallback={null}>
        <AuthForm mode="signup" />
      </Suspense>
    </AuthShell>
  );
}
