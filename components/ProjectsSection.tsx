import Image from "next/image";
import type { Dictionary } from "@/dictionaries";

type Props = {
  dict: Dictionary;
};

const LOGO_AREA_HEIGHT = "h-36 sm:h-40";

const projectLogos: Record<
  string,
  {
    src: string;
    alt: string;
    bgClass: string;
    width: number;
    height: number;
    imgClass: string;
    svg?: boolean;
  }
> = {
  Clemar: {
    src: "/projects/clemar-logo.svg",
    alt: "Clemar",
    bgClass: "bg-gradient-to-b from-slate-50 to-slate-100/80",
    width: 223,
    height: 55,
    imgClass: "h-11 w-auto max-w-[78%] object-contain sm:h-12",
    svg: true,
  },
  Tozago: {
    src: "/projects/tozago-logo.png",
    alt: "Tozago",
    bgClass: "bg-gradient-to-b from-neutral-950 to-neutral-900",
    width: 320,
    height: 80,
    imgClass: "h-10 w-auto max-w-[72%] object-contain sm:h-11",
  },
  Klinidex: {
    src: "/projects/klinidex-logo.png",
    alt: "Klinidex",
    bgClass: "bg-gradient-to-b from-white to-slate-50",
    width: 200,
    height: 200,
    imgClass: "h-20 w-auto max-w-[68%] object-contain sm:h-[5.5rem]",
  },
};

export function ProjectsSection({ dict }: Props) {
  const { projects } = dict;

  return (
    <section id="projects" className="border-b border-slate-100 bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-bold tracking-tight text-navy-950 sm:text-3xl">
            {projects.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            {projects.subtitle}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-5">
          {projects.items.map((project) => {
            const logo = projectLogos[project.title];

            return (
              <article
                key={project.title}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition-[border-color,box-shadow] duration-200 hover:border-blue-200/70 hover:shadow-md"
              >
                <div
                  className={`relative flex shrink-0 ${LOGO_AREA_HEIGHT} items-center justify-center border-b border-slate-100/90 ring-1 ring-inset ring-black/[0.03] ${logo?.bgClass ?? "bg-slate-50"}`}
                >
                  {logo ? (
                    logo.svg ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                        className={logo.imgClass}
                      />
                    ) : (
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                        className={logo.imgClass}
                      />
                    )
                  ) : null}
                </div>

                <div className="flex min-h-0 flex-1 flex-col p-5 sm:p-6">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <h3 className="text-base font-semibold text-navy-950">{project.title}</h3>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="break-all text-sm font-medium text-blue-600 transition hover:text-blue-700 hover:underline"
                    >
                      {project.website}
                    </a>
                  </div>
                  <p className="mt-1.5 min-h-[2.5rem] text-xs font-medium leading-snug text-slate-500 sm:min-h-[2.75rem]">
                    {project.category}
                  </p>
                  <p className="mt-3 min-h-[5.5rem] flex-1 text-sm leading-relaxed text-slate-600 sm:min-h-[6.25rem] lg:min-h-[6.75rem]">
                    {project.description}
                  </p>
                  <ul className="mt-4 grid min-h-[4.25rem] grid-cols-2 gap-2">
                    {project.badges.map((badge) => (
                      <li key={badge}>
                        <span className="inline-flex w-full items-center justify-center rounded-full border border-slate-200/90 bg-slate-50 px-2 py-1 text-center text-[11px] font-medium leading-tight text-slate-600 sm:text-xs">
                          {badge}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex w-fit items-center border-t border-slate-100 pt-4 text-sm font-semibold text-blue-600 transition group-hover:text-blue-700"
                  >
                    {projects.cta}
                    <span className="ml-1" aria-hidden="true">
                      →
                    </span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
