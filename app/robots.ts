import type { MetadataRoute } from "next";
import { ROOT_DOMAIN } from "@/lib/subdomains";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/auth/", "/apps/"] }],
    sitemap: `https://${ROOT_DOMAIN}/sitemap.xml`,
  };
}
