import type { Dictionary } from "@/dictionaries";

type Props = {
  dict: Dictionary;
};

export function HowWeStartSection({ dict }: Props) {
  return (
    <section id="how-we-start" className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-3xl text-center text-xl font-bold tracking-tight text-navy-950 sm:text-3xl">
          {dict.howWeStart.title}
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {dict.howWeStart.steps.map((step, i) => (
            <div
              key={step.title}
              className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                {i + 1}
              </div>
              <h3 className="text-base font-semibold text-navy-950">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
