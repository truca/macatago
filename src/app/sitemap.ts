import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config";
import { getAllPosts } from "@/lib/posts";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getAllPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [
    { url: SITE_URL, lastModified: new Date() },
    { url: `${SITE_URL}/blog`, lastModified: new Date() },
    ...blogPosts,
    { url: `${SITE_URL}/agendar`, lastModified: new Date() },
    { url: `${SITE_URL}/tarjeta`, lastModified: new Date() },
    { url: `${SITE_URL}/privacidad`, lastModified: new Date() },
  ];
}
