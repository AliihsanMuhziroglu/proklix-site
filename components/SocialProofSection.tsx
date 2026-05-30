import type { Dictionary } from "@/dictionaries";

type Props = {
  dict: Dictionary;
};

export function SocialProofSection({ dict }: Props) {
  return (
    <section className="border-b border-slate-100 bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-3">
          {dict.socialProof.testimonials.map((item) => (
            <blockquote
              key={item.name}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
            >
              <p className="text-sm leading-relaxed text-slate-700">&ldquo;{item.quote}&rdquo;</p>
              <footer className="mt-4 border-t border-slate-200 pt-4">
                <p className="text-sm font-semibold text-navy-950">{item.name}</p>
                <p className="text-xs text-slate-500">{item.company}</p>
                <p className="mt-2 inline-flex rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                  {item.result}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            {dict.socialProof.logoWallTitle}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {["AlphaTrade", "AgroLine", "BuildPro", "LogiTrans", "TechSupply", "RentHub"].map(
              (name) => (
                <div
                  key={name}
                  className="flex h-10 min-w-[7rem] items-center justify-center rounded-lg border border-slate-200 bg-white px-4 text-xs font-bold tracking-wide text-slate-400"
                >
                  {name}
                </div>
              ),
            )}
          </div>
        </div>

        <p className="mt-10 text-center text-base font-semibold text-navy-950 sm:text-lg">
          {dict.socialProof.stats}
        </p>
      </div>
    </section>
  );
}
