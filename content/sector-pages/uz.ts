import type { SectorSlug } from "@/lib/sectors";
import type { SectorPageContent } from "@/dictionaries/types";
import { nedvizhimostUz } from "./nedvizhimost/uz";
import { otherSectorsUz } from "./others/uz";

export const sectorPagesUz: Record<SectorSlug, SectorPageContent> = {
  nedvizhimost: nedvizhimostUz,
  ...otherSectorsUz,
};
