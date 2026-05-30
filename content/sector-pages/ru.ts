import type { SectorPageContent } from "@/dictionaries/types";
import type { SectorSlug } from "@/lib/sectors";
import { nedvizhimostRu } from "./nedvizhimost/ru";
import { otherSectorsRu } from "./others/ru";

export const sectorPagesRu: Record<SectorSlug, SectorPageContent> = {
  nedvizhimost: nedvizhimostRu,
  ...otherSectorsRu,
};
