import type { Locale } from "@/lib/i18n";
import { en } from "./en";
import { ru } from "./ru";
import { tr } from "./tr";
import { uz } from "./uz";
import { sectorPagesByLocale, blogArticlesByLocale } from "@/content";
import type { Dictionary, DictionaryEntry } from "./types";

export const dictionaries: Record<Locale, DictionaryEntry> = {
  tr,
  ru,
  uz,
  en,
};

export function getDictionary(locale: Locale): Dictionary {
  const entry = dictionaries[locale];
  return {
    ...entry,
    sectorPages: sectorPagesByLocale[locale],
    blog: {
      ...entry.blog,
      articles: blogArticlesByLocale[locale],
    },
  };
}

export type { Dictionary, DictionaryEntry } from "./types";
