import type { MetadataRoute } from "next";
import { ROOT_DOMAIN } from "@/lib/subdomains";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${ROOT_DOMAIN}`;
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/signin`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/signup`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];
}
