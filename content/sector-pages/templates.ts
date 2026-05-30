import type { CardItem, RelatedSectorItem, SectorPageContent, StepItem } from "@/dictionaries/types";
import type { SectorSlug } from "@/lib/sectors";

type SectorTemplateInput = {
  meta: SectorPageContent["meta"];
  breadcrumb: SectorPageContent["breadcrumb"];
  hero: SectorPageContent["hero"];
  problem: SectorPageContent["problem"];
  solution: SectorPageContent["solution"];
  workflow: SectorPageContent["workflow"];
  useCases: SectorPageContent["useCases"];
  beforeAfter: SectorPageContent["beforeAfter"];
  miniOffer: SectorPageContent["miniOffer"];
  relatedSectors: SectorPageContent["relatedSectors"];
  finalCta: SectorPageContent["finalCta"];
};

export function createSectorPage(input: SectorTemplateInput): SectorPageContent {
  return input;
}

export function relatedExcept(
  current: SectorSlug,
  items: RelatedSectorItem[],
): RelatedSectorItem[] {
  return items.filter((item) => item.sector !== current);
}

export const defaultRelatedUz: RelatedSectorItem[] = [
  { title: "Ko'chmas mulk", sector: "nedvizhimost" },
  { title: "B2B kataloglar", sector: "b2b-katalog" },
  { title: "Agro distribyutorlar", sector: "agro" },
  { title: "Tozalash uskunalari", sector: "oborudovanie" },
  { title: "Logistika", sector: "logistika" },
  { title: "Qurilish", sector: "stroitelstvo" },
];

export const defaultRelatedRu: RelatedSectorItem[] = [
  { title: "Недвижимость", sector: "nedvizhimost" },
  { title: "B2B-каталоги", sector: "b2b-katalog" },
  { title: "Agro-дистрибьюторы", sector: "agro" },
  { title: "Оборудование", sector: "oborudovanie" },
  { title: "Логистика", sector: "logistika" },
  { title: "Строительство", sector: "stroitelstvo" },
];

export const defaultRelatedTr: RelatedSectorItem[] = [
  { title: "Emlak", sector: "nedvizhimost" },
  { title: "B2B kataloglar", sector: "b2b-katalog" },
  { title: "Agro distribütörler", sector: "agro" },
  { title: "Temizlik ekipmanları", sector: "oborudovanie" },
  { title: "Lojistik", sector: "logistika" },
  { title: "İnşaat", sector: "stroitelstvo" },
];

export const defaultRelatedEn: RelatedSectorItem[] = [
  { title: "Real estate", sector: "nedvizhimost" },
  { title: "B2B catalogs", sector: "b2b-katalog" },
  { title: "Agro distributors", sector: "agro" },
  { title: "Equipment", sector: "oborudovanie" },
  { title: "Logistics", sector: "logistika" },
  { title: "Construction", sector: "stroitelstvo" },
];

export function makeWorkflowSteps(
  title: string,
  steps: [string, string][],
): { title: string; steps: StepItem[] } {
  return {
    title,
    steps: steps.map(([t, d]) => ({ title: t, description: d })),
  };
}

export function makeUseCases(title: string, items: [string, string][]): { title: string; items: CardItem[] } {
  return {
    title,
    items: items.map(([t, d]) => ({ title: t, description: d })),
  };
}

export function makeBeforeAfter(
  title: string,
  beforeTitle: string,
  afterTitle: string,
  before: string[],
  after: string[],
): SectorPageContent["beforeAfter"] {
  return {
    title,
    before: { title: beforeTitle, items: before },
    after: { title: afterTitle, items: after },
  };
}
