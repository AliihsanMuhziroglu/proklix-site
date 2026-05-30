import type { Dictionary } from "@/dictionaries";

type Props = {
  dict: Dictionary;
};

const icons = ["🌐", "👥", "📝", "✅", "📱", "📈"];

export function SolutionSection({ dict }: Props) {
  return (
    <section id="solutions" className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-3xl text-center text-xl font-bold tracking-tight text-navy-950 sm:text-3xl">
          {dict.solution.title}
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {dict.solution.items.map((item, i) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:shadow-md"
            >
              <span className="text-2xl" aria-hidden="true">
                {icons[i]}
              </span>
              <h3 className="mt-3 text-sm font-semibold leading-snug text-navy-950 sm:text-base">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
