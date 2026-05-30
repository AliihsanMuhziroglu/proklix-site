import type { Metadata } from "next";
import type { Dictionary } from "@/dictionaries";
import { defaultLocale, locales, type Locale } from "@/lib/i18n";
import { SITE_URL } from "@/lib/constants";
import { getSectorUrl, localeSectorSlugs, type SectorSlug } from "@/lib/sectors";

type MetaInput = {
  title: string;
  description: string;
};

export function buildMetadata(
  locale: Locale,
  meta: MetaInput,
  path = `/${locale}`,
): Metadata {
  const canonical = `${SITE_URL}${path}`;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical,
      languages: buildAlternateLanguages(path.replace(`/${locale}`, "") || ""),
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonical,
      siteName: "Proklix",
      locale,
      type: "website",
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
    title: meta.title,
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
      siteName: "Proklix",
      locale,
      type: "website",
    },
  };
}
