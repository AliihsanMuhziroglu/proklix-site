import type { Dictionary } from "@/dictionaries";
import { TELEGRAM_URL } from "@/lib/constants";
import { Button } from "./ui/Button";

type Props = {
  dict: Dictionary;
  className?: string;
};

type IconProps = { className?: string };

function IconB2b({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h10" />
    </svg>
  );
}

function IconClean({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
    </svg>
  );
}

function IconWarehouse({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  );
}

function IconEquipment({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function IconLogistics({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10m10 0h4l3 3V9a1 1 0 00-1-1h-3m-3 8H5m8-8V5a1 1 0 011-1h2a1 1 0 011 1v3" />
    </svg>
  );
}

function IconFactory({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

const sectorIcons = [IconB2b, IconClean, IconWarehouse, IconEquipment, IconLogistics, IconFactory];

export function SectorsSection({ dict, className = "bg-white" }: Props) {
  const { sectors } = dict;

  return (
    <section id="sectors" className={`overflow-hidden py-10 sm:py-14 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-bold tracking-tight text-navy-950 sm:text-2xl lg:text-3xl">
            {sectors.title}
          </h2>
          <p className="mx-auto mt-3 max-w-[640px] text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base">
            {sectors.subtitle}
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {sectors.items.map((item, i) => {
            const Icon = sectorIcons[i] ?? IconB2b;
            return (
              <article
                key={item.title}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-navy-800/80">
                    <Icon className="h-[18px] w-[18px]" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold leading-snug text-navy-950">{item.title}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-slate-600">{item.description}</p>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.pills.map((pill) => (
                    <span
                      key={pill}
                      className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {sectors.otherIndustriesNote && (
          <p className="mx-auto mt-5 max-w-[640px] text-center text-[13px] leading-relaxed text-slate-500 sm:text-sm">
            {sectors.otherIndustriesNote}
          </p>
        )}

        <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm sm:p-5">
          <h3 className="text-sm font-bold text-navy-950">{sectors.callout.title}</h3>
          <Button variant="secondary" size="md" href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="mt-3">
            {sectors.callout.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
