import type { Locale } from "@/lib/i18n";

export const sectorSlugs = [
  "nedvizhimost",
  "b2b-katalog",
  "agro",
  "oborudovanie",
  "logistika",
  "stroitelstvo",
] as const;

export type SectorSlug = (typeof sectorSlugs)[number];

/** Preferred URL slug per locale for each sector */
export const localeSectorSlugs: Record<Locale, Record<SectorSlug, string>> = {
  uz: {
    nedvizhimost: "kochmas-mulk",
    "b2b-katalog": "b2b-katalog",
    agro: "agro",
    oborudovanie: "oborudovanie",
    logistika: "logistika",
    stroitelstvo: "stroitelstvo",
  },
  ru: {
    nedvizhimost: "nedvizhimost",
    "b2b-katalog": "b2b-katalog",
    agro: "agro",
    oborudovanie: "oborudovanie",
    logistika: "logistika",
    stroitelstvo: "stroitelstvo",
  },
  tr: {
    nedvizhimost: "emlak",
    "b2b-katalog": "b2b-katalog",
    agro: "agro",
    oborudovanie: "oborudovanie",
    logistika: "logistika",
    stroitelstvo: "stroitelstvo",
  },
  en: {
    nedvizhimost: "real-estate",
    "b2b-katalog": "b2b-katalog",
    agro: "agro",
    oborudovanie: "oborudovanie",
    logistika: "logistika",
    stroitelstvo: "stroitelstvo",
  },
};

/** Legacy slugs that should redirect to the preferred locale slug */
export const legacySectorSlugRedirects: Partial<
  Record<Locale, Record<string, SectorSlug>>
> = {
  uz: { nedvizhimost: "nedvizhimost" },
  tr: { nedvizhimost: "nedvizhimost" },
  en: { nedvizhimost: "nedvizhimost" },
};

export function isValidSectorSlug(value: string): value is SectorSlug {
  return sectorSlugs.includes(value as SectorSlug);
}

export function getSectorUrlSlug(locale: Locale, sector: SectorSlug): string {
  return localeSectorSlugs[locale][sector];
}

export function getSectorUrl(locale: Locale, sector: SectorSlug): string {
  return `/${locale}/${getSectorUrlSlug(locale, sector)}`;
}

export function resolveSectorFromUrlSlug(
  locale: Locale,
  urlSlug: string,
): SectorSlug | null {
  for (const sector of sectorSlugs) {
    if (localeSectorSlugs[locale][sector] === urlSlug) {
      return sector;
    }
  }

  const legacy = legacySectorSlugRedirects[locale];
  if (legacy && urlSlug in legacy) {
    return legacy[urlSlug];
  }

  if (isValidSectorSlug(urlSlug)) {
    return urlSlug;
  }

  return null;
}

export function getAllSectorUrlParams(): { locale: Locale; sector: string }[] {
  const locales: Locale[] = ["tr", "ru", "uz", "en"];
  return locales.flatMap((locale) =>
    sectorSlugs.map((sector) => ({
      locale,
      sector: getSectorUrlSlug(locale, sector),
    })),
  );
}

export const sectorIcons: Record<SectorSlug, string> = {
  nedvizhimost: "🏢",
  "b2b-katalog": "📦",
  agro: "🌾",
  oborudovanie: "🔧",
  logistika: "🚚",
  stroitelstvo: "🏗️",
};
