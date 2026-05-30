import type { Dictionary } from "@/dictionaries";

type Props = {
  dict: Dictionary;
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

function IconConstruction({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2m-16 0H3m2-8h14M9 9h1m-1 4h1m4-4h1m-1 4h1" />
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

function IconRealEstate({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  );
}

function IconClinic({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );
}

function IconRestaurant({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V6m0 12v-2m9-4a9 9 0 11-18 0 9 9 0 0118 0z" />
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

const sectorIcons = [
  IconB2b,
  IconClean,
  IconWarehouse,
  IconEquipment,
  IconConstruction,
  IconLogistics,
  IconRealEstate,
  IconClinic,
  IconRestaurant,
  IconFactory,
];

export function SectorsSection({ dict }: Props) {
  const { sectors } = dict;

  return (
    <section id="sectors" className="overflow-hidden bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-bold tracking-tight text-navy-950 sm:text-2xl lg:text-3xl">
            {sectors.title}
          </h2>
          <p className="mx-auto mt-3 max-w-[760px] text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base">
            {sectors.subtitle}
          </p>
          <p className="mx-auto mt-3 max-w-[760px] text-[13px] leading-relaxed text-slate-500 sm:text-sm">
            {sectors.positioningLine}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {sectors.items.map((item, i) => {
            const Icon = sectorIcons[i] ?? IconB2b;
            return (
              <article
                key={item.title}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md sm:p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-navy-800/80">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-3 text-sm font-bold leading-snug text-navy-950 sm:text-[15px]">
                  {item.title}
                </h3>
                <p className="mt-1.5 flex-1 text-[13px] leading-relaxed text-slate-600 sm:text-sm">
                  {item.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.pills.map((pill) => (
                    <span
                      key={pill}
                      className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600 sm:text-[11px]"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
                <p className="mt-3 border-t border-slate-100 pt-3 text-[11px] leading-relaxed text-slate-500 sm:text-xs">
                  <span className="font-semibold text-slate-600">{sectors.exampleLabel}:</span>{" "}
                  {item.example}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:mt-8 sm:p-5 lg:p-6">
          <h3 className="text-sm font-bold text-navy-950 sm:text-base">{sectors.callout.title}</h3>
          <p className="mt-2 max-w-3xl text-[13px] leading-relaxed text-slate-600 sm:text-sm">
            {sectors.callout.description}
          </p>
          <a
            href="#contact"
            className="mt-4 inline-flex min-h-[44px] items-center justify-center rounded-2xl border border-navy-900 px-5 py-2.5 text-sm font-semibold text-navy-900 transition hover:bg-navy-950 hover:text-white"
          >
            {sectors.callout.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
