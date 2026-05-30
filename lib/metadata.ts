import type { Metadata } from "next";
import type { Dictionary } from "@/dictionaries";
import { defaultLocale, locales, type Locale } from "@/lib/i18n";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { getSectorUrl, localeSectorSlugs, type SectorSlug } from "@/lib/sectors";

type MetaInput = {
  title: string;
  description: string;
};

/** Maps app locales to Open Graph locale codes (language_TERRITORY). */
export const ogLocales: Record<Locale, string> = {
  ru: "ru_RU",
  tr: "tr_TR",
  uz: "uz_UZ",
  en: "en_US",
};

type BuildOptions = {
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
};

export function buildMetadata(
  locale: Locale,
  meta: MetaInput,
  path = `/${locale}`,
  options: BuildOptions = {},
): Metadata {
  const canonical = `${SITE_URL}${path}`;
  const suffix = path.replace(`/${locale}`, "") || "";

  return {
    title: { absolute: meta.title },
    description: meta.description,
    alternates: {
      canonical,
      languages: buildAlternateLanguages(suffix),
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonical,
      siteName: SITE_NAME,
      locale: ogLocales[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocales[l]),
      type: options.type ?? "website",
      ...(options.type === "article"
        ? {
            publishedTime: options.publishedTime,
            modifiedTime: options.modifiedTime ?? options.publishedTime,
            authors: options.authors ?? [SITE_NAME],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}

function buildAlternateLanguages(suffix: string) {
  return {
    ...Object.fromEntries(locales.map((l) => [l, `${SITE_URL}/${l}${suffix}`])),
    "x-default": `${SITE_URL}/${defaultLocale}${suffix}`,
  };
}

export function buildPageMetadata(locale: Locale, dict: Dictionary, pathSuffix = "") {
  return buildMetadata(locale, dict.meta, `/${locale}${pathSuffix}`);
}

export function buildSectorMetadata(
  locale: Locale,
  sector: SectorSlug,
  meta: MetaInput,
): Metadata {
  const path = getSectorUrl(locale, sector);
  const canonical = `${SITE_URL}${path}`;

  return {
    title: { absolute: meta.title },
    description: meta.description,
    alternates: {
      canonical,
      languages: {
        ...Object.fromEntries(
          locales.map((l) => [l, `${SITE_URL}/${l}/${localeSectorSlugs[l][sector]}`]),
        ),
        "x-default": `${SITE_URL}/${defaultLocale}/${localeSectorSlugs[defaultLocale][sector]}`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonical,
      siteName: SITE_NAME,
      locale: ogLocales[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocales[l]),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}
