import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { locales } from "@/lib/i18n";
import { sectorSlugs } from "@/lib/sectors";
import { blogSlugs } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    entries.push({
      url: `${SITE_URL}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    });

    entries.push({
      url: `${SITE_URL}/${locale}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });

    for (const sector of sectorSlugs) {
      entries.push({
        url: `${SITE_URL}/${locale}/${sector}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9,
      });
    }

    for (const slug of blogSlugs) {
      entries.push({
        url: `${SITE_URL}/${locale}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
