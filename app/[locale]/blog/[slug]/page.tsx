import { notFound } from "next/navigation";
import { getDictionary } from "@/dictionaries";
import { buildMetadata } from "@/lib/metadata";
import { isValidLocale, type Locale } from "@/lib/i18n";
import { blogSlugs, isValidBlogSlug } from "@/lib/blog";
import { BlogArticlePage } from "@/components/BlogArticlePage";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/jsonld";
import { SITE_URL } from "@/lib/constants";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  const locales = ["tr", "ru", "uz", "en"] as const;
  return locales.flatMap((locale) => blogSlugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale) || !isValidBlogSlug(slug)) return {};
  const dict = getDictionary(locale);
  const article = dict.blog.articles[slug];
  return buildMetadata(locale, article.meta, `/${locale}/blog/${slug}`, {
    type: "article",
    publishedTime: article.date,
  });
}

export default async function BlogArticleRoute({ params }: Props) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale) || !isValidBlogSlug(slug)) notFound();

  const dict = getDictionary(locale);
  const article = dict.blog.articles[slug];
  const articleUrl = `${SITE_URL}/${locale}/blog/${slug}`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Proklix", url: `${SITE_URL}/${locale}` },
            { name: dict.blog.title, url: `${SITE_URL}/${locale}/blog` },
            { name: article.title, url: articleUrl },
          ]),
          articleSchema({
            title: article.title,
            description: article.excerpt || article.meta.description,
            url: articleUrl,
            datePublished: article.date,
            locale,
          }),
        ]}
      />
      <BlogArticlePage locale={locale as Locale} dict={dict} slug={slug} />
    </>
  );
}
