import type { Locale } from "@/lib/i18n";
import type { BlogArticle } from "@/dictionaries/types";
import type { SectorPageContent } from "@/dictionaries/types";
import type { BlogSlug } from "@/lib/blog";
import type { SectorSlug } from "@/lib/sectors";
import { sectorPagesRu } from "./sector-pages/ru";
import { sectorPagesEn } from "./sector-pages/en";
import { sectorPagesTr } from "./sector-pages/tr";
import { sectorPagesUz } from "./sector-pages/uz";
import { blogArticlesRu } from "./blog/ru";
import { blogArticlesEn } from "./blog/en";
import { blogArticlesTr } from "./blog/tr";
import { blogArticlesUz } from "./blog/uz";

export const sectorPagesByLocale: Record<Locale, Record<SectorSlug, SectorPageContent>> = {
  ru: sectorPagesRu,
  en: sectorPagesEn,
  tr: sectorPagesTr,
  uz: sectorPagesUz,
};

export const blogArticlesByLocale: Record<Locale, Record<BlogSlug, BlogArticle>> = {
  ru: blogArticlesRu,
  en: blogArticlesEn,
  tr: blogArticlesTr,
  uz: blogArticlesUz,
};
