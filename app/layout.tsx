import type { Metadata, Viewport } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import { siteUrl } from "@/lib/env";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const site = siteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: {
    default: "BioBrigade — One platform. Eleven frontiers of biology.",
    template: "%s · BioBrigade",
  },
  description:
    "BioBrigade is the AI-powered computational operating system for modern biotechnology — molecular docking, genomics, diagnostics, and more, with zero infrastructure to manage.",
  keywords: [
    "BioBrigade",
    "bioinformatics",
    "AI biotech",
    "molecular docking",
    "genomics platform",
    "BioPipeline",
    "drug discovery",
    "computational biology",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "BioBrigade",
    title: "BioBrigade — One platform. Eleven frontiers of biology.",
    description:
      "An AI-powered computational platform for research labs, hospitals and biotech teams.",
    url: site,
  },
  twitter: {
    card: "summary_large_image",
    title: "BioBrigade",
    description:
      "The computational operating system for modern biotechnology.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#F6F0E3",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BioBrigade",
    url: site,
    logo: `${site}/biobrigade-logo.jpg`,
    sameAs: [site],
    description:
      "The computational operating system for modern biotechnology.",
  };
  const appLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "BioBrigade",
    applicationCategory: "ScientificApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(appLd) }}
        />
      </body>
    </html>
  );
}
