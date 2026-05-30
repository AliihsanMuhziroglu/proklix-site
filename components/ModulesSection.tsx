import type { Dictionary } from "@/dictionaries";

type Props = {
  dict: Dictionary;
};

export function ModulesSection({ dict }: Props) {
  return (
    <section id="modules" className="bg-[#f3f5f9] py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-3xl text-center text-xl font-bold tracking-tight text-navy-950 sm:text-3xl">
          {dict.modules.title}
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {dict.modules.items.map((item, i) => (
            <div
              key={item.title}
              className="flex h-full flex-col rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy-950 text-xs font-bold text-white">
                {i + 1}
              </div>
              <h3 className="mt-3 text-sm font-bold leading-snug text-navy-950 sm:text-base">
                {item.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
