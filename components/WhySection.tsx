import type { Dictionary } from "@/dictionaries";

type Props = {
  dict: Dictionary;
};

export function WhySection({ dict }: Props) {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-2xl text-center text-2xl font-bold tracking-tight text-navy-950 sm:text-3xl">
          {dict.why.title}
        </h2>
        <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
          {dict.why.items.map((item, i) => (
            <div key={i} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
                ✓
              </div>
              <p className="text-sm font-medium leading-relaxed text-navy-900">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
