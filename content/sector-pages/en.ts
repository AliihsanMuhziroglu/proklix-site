import type { SectorPageContent } from "@/dictionaries/types";
import type { SectorSlug } from "@/lib/sectors";
import { nedvizhimostEn } from "./nedvizhimost/en";
import { otherSectorsEn } from "./others/en";

export const sectorPagesEn: Record<SectorSlug, SectorPageContent> = {
  nedvizhimost: nedvizhimostEn,
  ...otherSectorsEn,
};
