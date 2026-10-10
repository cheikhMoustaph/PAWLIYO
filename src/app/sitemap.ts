import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");

  const staticRoutes = [
    "",
    "/shop",
    "/about",
    "/contact",
    "/shipping-returns",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const productRoutes = products.map((product) => ({
    url: `${base}/products/${product.slug}`,
    lastModified: new Date(product.createdAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...productRoutes];
}
