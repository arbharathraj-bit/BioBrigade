export type AppSubdomain = {
  slug: string;
  name: string;
  description: string;
  live: boolean;
};

export const APP_SUBDOMAINS: Record<string, AppSubdomain> = {
  app: {
    slug: "app",
    name: "BioBrigade Console",
    description: "Your unified workspace across every BioBrigade vertical.",
    live: false,
  },
  biopipeline: {
    slug: "biopipeline",
    name: "BioPipeline",
    description:
      "Plant molecular docking & AI-ranked compound-target intelligence.",
    live: true,
  },
  amrscout: {
    slug: "amrscout",
    name: "AMR Scout",
    description:
      "Antimicrobial resistance profiling, drug target identification & compound screening.",
    live: false,
  },
  raredxai: {
    slug: "raredxai",
    name: "RareDxAI",
    description:
      "Rare disease multi-modal diagnostic intelligence from WGS/WES data.",
    live: false,
  },
  rgnav: {
    slug: "rgnav",
    name: "RGNav",
    description: "Plant R-gene & pathogen effector intelligence.",
    live: false,
  },
  spatialmicro: {
    slug: "spatialmicro",
    name: "SpatialMicro",
    description: "Spatial host-microbiome transcriptomics.",
    live: false,
  },
  bioagent: {
    slug: "bioagent",
    name: "BioAgent Copilot",
    description: "Multi-agent bioinformatics workflow automation.",
    live: false,
  },
  fedomics: {
    slug: "fedomics",
    name: "FedOmics",
    description: "Federated omics platform for privacy-preserving analysis.",
    live: false,
  },
  phagefinder: {
    slug: "phagefinder",
    name: "PhageFinder Pro",
    description: "Bacteriophage-bacteria matching for phage therapy & AMR.",
    live: false,
  },
  neuroomics: {
    slug: "neuroomics",
    name: "NeuroOmics Mapper",
    description: "Brain spatial transcriptomics & neural circuit mapping.",
    live: false,
  },
  cropphenomics: {
    slug: "cropphenomics",
    name: "CropPhenomics AI",
    description: "Phenotype-to-genotype resolution from drone imagery & WGS.",
    live: false,
  },
  bioworld: {
    slug: "bioworld",
    name: "BioWorldModel Studio",
    description: "No-code biological process simulation.",
    live: false,
  },
};

export const ROOT_DOMAIN =
  process.env.NEXT_PUBLIC_ROOT_DOMAIN ?? "biobrigade.com";

export function extractSubdomain(host: string | null | undefined): string | null {
  if (!host) return null;
  const hostname = host.split(":")[0].toLowerCase();
  if (hostname === "localhost" || /^\d+\.\d+\.\d+\.\d+$/.test(hostname)) {
    return null;
  }
  // Vercel preview deployments like proj-git-branch-team.vercel.app — treat as apex.
  if (hostname.endsWith(".vercel.app")) return null;

  const root = ROOT_DOMAIN.toLowerCase();
  if (hostname === root || hostname === `www.${root}`) return null;
  if (hostname.endsWith(`.${root}`)) {
    return hostname.slice(0, -1 - root.length);
  }
  // Fallback: anything before the first dot if there are >= 3 segments.
  const parts = hostname.split(".");
  if (parts.length >= 3) return parts[0];
  return null;
}
