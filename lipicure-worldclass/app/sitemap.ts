import type { MetadataRoute } from "next";
import { getAllPublished, hrefFor } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://lipicure.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  const publishedRoutes: MetadataRoute.Sitemap = getAllPublished().map(
    (item): MetadataRoute.Sitemap[number] => ({
      url: `${base}${hrefFor(item)}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  return [...staticRoutes, ...publishedRoutes];
}
