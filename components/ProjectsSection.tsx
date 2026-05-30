import Image from "next/image";
import type { Dictionary } from "@/dictionaries";

type Props = {
  dict: Dictionary;
};

const LOGO_AREA_HEIGHT = "h-24 sm:h-28";

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
    bgClass: "bg-slate-50",
    width: 223,
    height: 55,
    imgClass: "h-9 w-auto max-w-[70%] object-contain sm:h-10",
    svg: true,
  },
  Tozago: {
    src: "/projects/tozago-logo.png",
    alt: "Tozago",
    bgClass: "bg-neutral-950",
    width: 320,
    height: 80,
    imgClass: "h-8 w-auto max-w-[65%] object-contain sm:h-9",
  },
  Klinidex: {
    src: "/projects/klinidex-logo.png",
    alt: "Klinidex",
    bgClass: "bg-white",
    width: 200,
    height: 200,
    imgClass: "h-14 w-auto max-w-[60%] object-contain sm:h-16",
  },
};

export function ProjectsSection({ dict }: Props) {
  const { projects } = dict;

  return (
    <section id="projects" className="border-t border-slate-100 bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-lg font-bold tracking-tight text-navy-950 sm:text-2xl">
            {projects.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">{projects.subtitle}</p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
          {projects.items.map((project) => {
            const logo = projectLogos[project.title];

            return (
              <article
                key={project.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-slate-300 hover:shadow-md"
              >
                <div
                  className={`relative flex shrink-0 ${LOGO_AREA_HEIGHT} items-center justify-center border-b border-slate-100 ${logo?.bgClass ?? "bg-slate-50"}`}
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

                <div className="flex flex-1 flex-col p-4">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <h3 className="text-sm font-semibold text-navy-950">{project.title}</h3>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-blue-600 hover:underline"
                    >
                      {project.website}
                    </a>
                  </div>
                  <p className="mt-1 text-xs text-slate-500">{project.category}</p>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.badges.map((badge) => (
                      <span
                        key={badge}
                        className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-medium text-slate-600"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
