import { notFound } from "next/navigation";
import { getDictionary } from "@/dictionaries";
import { buildPageMetadata } from "@/lib/metadata";
import { isValidLocale, type Locale } from "@/lib/i18n";
import { LandingPage } from "@/components/LandingPage";
import { JsonLd } from "@/components/JsonLd";
import {
  faqSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/jsonld";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return [{ locale: "tr" }, { locale: "ru" }, { locale: "uz" }, { locale: "en" }];
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  return buildPageMetadata(locale as Locale, getDictionary(locale as Locale));
}

export default async function LocalePage({ params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const dict = getDictionary(locale);

  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          websiteSchema(locale),
          faqSchema(
            dict.faq.items.map((item) => ({
              question: item.question,
              answer: item.answer,
            })),
          ),
        ]}
      />
      <LandingPage locale={locale as Locale} dict={dict} />
    </>
  );
}
