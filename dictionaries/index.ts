import type { Locale } from "@/lib/i18n";
import { en } from "./en";
import { ru } from "./ru";
import { tr } from "./tr";
import { uz } from "./uz";

export const dictionaries = {
  tr,
  ru,
  uz,
  en,
} as const;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

export type { Dictionary } from "./types";
