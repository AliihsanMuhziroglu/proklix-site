import type { Dictionary } from "@/dictionaries";

type Props = {
  dict: Dictionary;
};

export function TrustSection({ dict }: Props) {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-bold tracking-tight text-navy-950 sm:text-3xl">
            {dict.trust.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            {dict.trust.description}
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2">
          {dict.trust.points.map((point) => (
            <div
              key={point}
              className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 p-4"
            >
              <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
                ✓
              </div>
              <p className="text-sm font-medium leading-relaxed text-navy-900">{point}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm font-medium text-slate-500 sm:text-base">
          {dict.trust.fitLine}
        </p>
      </div>
    </section>
  );
}
