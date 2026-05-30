import type { SectorPageContent } from "@/dictionaries/types";
import type { SectorSlug } from "@/lib/sectors";
import { nedvizhimostTr } from "./nedvizhimost/tr";
import { otherSectorsTr } from "./others/tr";

export const sectorPagesTr: Record<SectorSlug, SectorPageContent> = {
  nedvizhimost: nedvizhimostTr,
  ...otherSectorsTr,
};
