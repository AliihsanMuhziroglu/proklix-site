import Link from "next/link";
import type { Dictionary } from "@/dictionaries";
import type { Locale } from "@/lib/i18n";
import type { BlogSlug } from "@/lib/blog";
import { Header } from "./Header";
import { Footer } from "./Footer";

type Props = {
  locale: Locale;
  dict: Dictionary;
  slug: BlogSlug;
};

export function BlogArticlePage({ locale, dict, slug }: Props) {
  const article = dict.blog.articles[slug];

  return (
    <>
      <Header locale={locale} dict={dict} />
      <main className="py-14 sm:py-20">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href={`/${locale}/blog`}
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            ← {dict.blog.backToBlog}
          </Link>
          <time className="mt-6 block text-xs text-slate-500">
            {article.date} · {article.readTime}
          </time>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-navy-950 sm:text-4xl">
            {article.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">{article.excerpt}</p>

          <div className="prose prose-slate mt-10 max-w-none">
            {article.sections.map((section, i) => (
              <div key={i} className="mb-8">
                {section.heading && (
                  <h2 className="mb-3 text-xl font-bold text-navy-950">{section.heading}</h2>
                )}
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="mb-4 text-base leading-relaxed text-slate-700">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </article>
      </main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}
