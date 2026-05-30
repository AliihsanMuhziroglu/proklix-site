import { PHONE, SITE_NAME, SITE_URL, TELEGRAM_URL } from "@/lib/constants";
import { ogLocales } from "@/lib/metadata";
import type { Locale } from "@/lib/i18n";

const LOGO_URL = `${SITE_URL}/proklix-icon-512.png`;

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: LOGO_URL,
    },
    image: LOGO_URL,
    description:
      "Proklix строит CRM, системы заявок, согласований и Telegram-интеграции для компаний в Узбекистане.",
    areaServed: "UZ",
    sameAs: [TELEGRAM_URL],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: PHONE,
      contactType: "sales",
      areaServed: "UZ",
      availableLanguage: ["ru", "uz", "tr", "en"],
    },
  };
}

export function websiteSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: ogLocales[locale],
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function articleSchema(input: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  locale: Locale;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.title,
    description: input.description,
    url: input.url,
    mainEntityOfPage: { "@type": "WebPage", "@id": input.url },
    datePublished: input.datePublished,
    dateModified: input.datePublished,
    inLanguage: ogLocales[input.locale],
    image: `${SITE_URL}/opengraph-image`,
    author: { "@id": ORGANIZATION_ID, "@type": "Organization", name: SITE_NAME },
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  url: string;
  locale: Locale;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: input.url,
    inLanguage: ogLocales[input.locale],
    serviceType: "Business process automation",
    areaServed: "UZ",
    provider: { "@id": ORGANIZATION_ID, "@type": "Organization", name: SITE_NAME },
  };
}
