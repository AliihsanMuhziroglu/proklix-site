import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { locales } from "@/lib/i18n";
import { localeSectorSlugs, sectorSlugs } from "@/lib/sectors";
import { blogSlugs } from "@/lib/blog";

type AltLanguages = Record<string, string>;

function languagesFor(pathFor: (locale: (typeof locales)[number]) => string): AltLanguages {
  return Object.fromEntries(locales.map((l) => [l, `${SITE_URL}${pathFor(l)}`]));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    entries.push({
      url: `${SITE_URL}/${locale}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      alternates: { languages: languagesFor((l) => `/${l}`) },
    });

    entries.push({
      url: `${SITE_URL}/${locale}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: { languages: languagesFor((l) => `/${l}/blog`) },
    });

    for (const sector of sectorSlugs) {
      entries.push({
        url: `${SITE_URL}/${locale}/${localeSectorSlugs[locale][sector]}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.9,
        alternates: {
          languages: languagesFor((l) => `/${l}/${localeSectorSlugs[l][sector]}`),
        },
      });
    }

    for (const slug of blogSlugs) {
      entries.push({
        url: `${SITE_URL}/${locale}/blog/${slug}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: { languages: languagesFor((l) => `/${l}/blog/${slug}`) },
      });
    }
  }

  return entries;
}
