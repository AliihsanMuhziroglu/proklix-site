export const blogSlugs = ["crm-nedir", "telegram-avtomatizasyon", "b2b-katalog"] as const;

export type BlogSlug = (typeof blogSlugs)[number];

export function isValidBlogSlug(value: string): value is BlogSlug {
  return blogSlugs.includes(value as BlogSlug);
}
