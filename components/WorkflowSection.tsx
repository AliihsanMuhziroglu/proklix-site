import type { Dictionary } from "@/dictionaries";

type Props = {
  dict: Dictionary;
};

export function WorkflowSection({ dict }: Props) {
  return (
    <section id="processes" className="bg-gradient-to-b from-navy-950 to-navy-900 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-2xl text-center text-2xl font-bold tracking-tight sm:text-3xl">
          {dict.workflow.title}
        </h2>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {dict.workflow.steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold">
                  {i + 1}
                </div>
                <p className="text-sm font-medium leading-relaxed text-slate-200">{step}</p>
              </div>
              {i < dict.workflow.steps.length - 1 && (
                <div className="absolute -right-1.5 top-1/2 hidden h-0.5 w-3 -translate-y-1/2 bg-blue-500/50 lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
