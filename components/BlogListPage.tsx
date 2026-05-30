import Link from "next/link";
import type { Dictionary } from "@/dictionaries";
import type { Locale } from "@/lib/i18n";
import { blogSlugs } from "@/lib/blog";
import { Header } from "./Header";
import { Footer } from "./Footer";

type Props = {
  locale: Locale;
  dict: Dictionary;
};

export function BlogListPage({ locale, dict }: Props) {
  return (
    <>
      <Header locale={locale} dict={dict} />
      <main className="py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold tracking-tight text-navy-950 sm:text-4xl">
            {dict.blog.title}
          </h1>
          <p className="mt-3 text-base text-slate-600">{dict.blog.subtitle}</p>

          <div className="mt-10 space-y-6">
            {blogSlugs.map((slug) => {
              const article = dict.blog.articles[slug];
              return (
                <article
                  key={slug}
                  className="rounded-2xl border border-slate-200 p-6 transition hover:border-blue-200 hover:shadow-md"
                >
                  <time className="text-xs text-slate-500">
                    {article.date} · {article.readTime}
                  </time>
                  <h2 className="mt-2 text-lg font-bold text-navy-950">
                    <Link href={`/${locale}/blog/${slug}`} className="hover:text-blue-600">
                      {article.title}
                    </Link>
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{article.excerpt}</p>
                  <Link
                    href={`/${locale}/blog/${slug}`}
                    className="mt-4 inline-flex text-sm font-semibold text-blue-600 hover:underline"
                  >
                    {dict.blog.readMore} →
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}
