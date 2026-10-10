import type { NextConfig } from "next";

/**
 * Next.js config for PAWLIYO.
 *
 * Two output modes are supported:
 *
 *   1. Local dev / serverful (default)
 *      `output: "standalone"` — used by `bun run dev` and any Node host
 *      (Vercel, Render, Fly.io, a VPS, etc.).
 *
 *   2. Static export for GitHub Pages
 *      Set `NEXT_PUBLIC_STATIC_EXPORT=true` at build time. The app is
 *      pre-rendered to fully static HTML/CSS/JS and served from
 *      `https://<user>.github.io/<repo>/`. A `basePath` matching the
 *      repo name is applied so all assets resolve correctly.
 *
 * Image optimization is disabled in static-export mode because GitHub
 * Pages has no Node runtime to optimize images on the fly.
 */
const isStaticExport = process.env.NEXT_PUBLIC_STATIC_EXPORT === "true";
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const repoName =
  process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "PAWLIYO";
const basePath =
  isStaticExport && isGitHubActions ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  ...(isStaticExport
    ? { output: "export" as const }
    : { output: "standalone" as const }),
  reactStrictMode: false,
  trailingSlash: isStaticExport,
  images: {
    formats: ["image/avif", "image/webp"],
    // Static hosts (GitHub Pages) cannot optimize images at runtime.
    unoptimized: isStaticExport,
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
