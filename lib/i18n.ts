export const locales = ["tr", "ru", "uz", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ru";

export const localeLabels: Record<Locale, string> = {
  tr: "Türkçe",
  ru: "Русский",
  uz: "O'zbekcha",
  en: "English",
};

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export { getDictionary } from "@/dictionaries";
