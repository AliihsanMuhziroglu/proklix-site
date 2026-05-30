import { notFound } from "next/navigation";
import { getDictionary } from "@/dictionaries";
import { buildMetadata } from "@/lib/metadata";
import { isValidLocale, type Locale } from "@/lib/i18n";
import { BlogListPage } from "@/components/BlogListPage";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/jsonld";
import { SITE_URL } from "@/lib/constants";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = getDictionary(locale);
  return buildMetadata(locale, dict.blog.meta, `/${locale}/blog`);
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const dict = getDictionary(locale);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Proklix", url: `${SITE_URL}/${locale}` },
          { name: dict.blog.title, url: `${SITE_URL}/${locale}/blog` },
        ])}
      />
      <BlogListPage locale={locale as Locale} dict={dict} />
    </>
  );
}
