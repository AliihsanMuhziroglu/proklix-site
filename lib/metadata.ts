import type { Metadata } from "next";
import type { Dictionary } from "@/dictionaries";
import { defaultLocale, locales, type Locale } from "@/lib/i18n";
import { SITE_URL } from "@/lib/constants";

export function buildMetadata(locale: Locale, dict: Dictionary): Metadata {
  const path = `/${locale}`;

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `${SITE_URL}${path}`,
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, `${SITE_URL}/${l}`])),
        "x-default": `${SITE_URL}/${defaultLocale}`,
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `${SITE_URL}${path}`,
      siteName: "Proklix",
      locale,
      type: "website",
    },
  };
}
