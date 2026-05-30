import type { Dictionary } from "@/dictionaries";

type Props = {
  dict: Dictionary;
};

export function BeforeAfterSection({ dict }: Props) {
  const { beforeAfter } = dict;

  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-3xl text-center text-xl font-bold tracking-tight text-navy-950 sm:text-3xl">
          {beforeAfter.title}
        </h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-2 lg:gap-6">
          <div className="rounded-2xl border border-red-100 bg-red-50/50 p-6 sm:p-8">
            <h3 className="flex items-center gap-2 text-base font-bold text-red-900 sm:text-lg">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-100 text-sm">
                ✕
              </span>
              {beforeAfter.without.title}
            </h3>
            <ul className="mt-5 space-y-3">
              {beforeAfter.without.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-red-900/80">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-6 sm:p-8">
            <h3 className="flex items-center gap-2 text-base font-bold text-emerald-900 sm:text-lg">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-sm text-emerald-700">
                ✓
              </span>
              {beforeAfter.with.title}
            </h3>
            <ul className="mt-5 space-y-3">
              {beforeAfter.with.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-emerald-900/80">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
