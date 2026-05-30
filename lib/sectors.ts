export const sectorSlugs = [
  "nedvizhimost",
  "b2b-katalog",
  "agro",
  "oborudovanie",
  "logistika",
  "stroitelstvo",
] as const;

export type SectorSlug = (typeof sectorSlugs)[number];

export function isValidSectorSlug(value: string): value is SectorSlug {
  return sectorSlugs.includes(value as SectorSlug);
}

export const sectorIcons: Record<SectorSlug, string> = {
  nedvizhimost: "🏢",
  "b2b-katalog": "📦",
  agro: "🌾",
  oborudovanie: "🔧",
  logistika: "🚚",
  stroitelstvo: "🏗️",
};
