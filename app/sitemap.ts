import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    {
      url: "https://zamadhassan.tech",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];

  return [
    ...routes,
    ...blogPosts.map((post) => ({
      url: `https://zamadhassan.tech/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
