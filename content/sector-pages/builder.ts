import type { CardItem, RelatedSectorItem, SectorPageContent, StepItem } from "@/dictionaries/types";
import type { SectorSlug } from "@/lib/sectors";

type SectorCore = {
  meta: { title: string; description: string };
  breadcrumb: { sectorName: string };
  hero: { title: string; subtitle: string; mockupFeed: string[] };
  problem: { title: string; items: CardItem[] };
  solution: { title: string; items: CardItem[] };
  workflow: { title: string; steps: StepItem[] };
  useCases: { title: string; items: CardItem[] };
  beforeAfter: SectorPageContent["beforeAfter"];
  miniOffer: { title: string; description: string };
  relatedSectors: { title: string; items: RelatedSectorItem[] };
  finalCta: { title: string; description: string };
};

export function buildSectorPage(core: SectorCore): SectorPageContent {
  return core;
}

export function expandItems(items: CardItem[], extras: CardItem[]): CardItem[] {
  return [...items, ...extras].slice(0, 8);
}

export function expandProblems(
  title: string,
  items: CardItem[],
  extras: CardItem[],
): { title: string; items: CardItem[] } {
  return { title, items: [...items, ...extras].slice(0, 6) };
}
