import Image from "next/image";
import type { Dictionary } from "@/dictionaries";

type Props = {
  dict: Dictionary;
};

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
    imgClass: "h-12 w-auto max-w-[80%] sm:h-14",
    svg: true,
  },
  Tozago: {
    src: "/projects/tozago-logo.png",
    alt: "Tozago",
    bgClass: "bg-neutral-950",
    width: 320,
    height: 80,
    imgClass: "h-10 w-auto max-w-[75%] sm:h-12",
  },
  Klinidex: {
    src: "/projects/klinidex-logo.png",
    alt: "Klinidex",
    bgClass: "bg-white",
    width: 200,
    height: 200,
    imgClass: "h-24 w-auto max-w-[70%] sm:h-28",
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

        <div className="mt-10 grid gap-6 lg:grid-cols-3 lg:gap-5">
          {projects.items.map((project) => {
            const logo = projectLogos[project.title];

            return (
              <article
                key={project.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200/80 hover:shadow-lg"
              >
                <div
                  className={`relative flex aspect-[16/10] items-center justify-center border-b border-slate-100 ${logo?.bgClass ?? "bg-slate-50"}`}
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

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <h3 className="text-base font-semibold text-navy-950">{project.title}</h3>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-blue-600 transition hover:text-blue-700 hover:underline"
                    >
                      {project.website}
                    </a>
                  </div>
                  <p className="mt-1.5 text-xs font-medium text-slate-500">{project.category}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.badges.map((badge) => (
                      <span
                        key={badge}
                        className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-xs font-medium text-slate-600"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-fit items-center text-sm font-semibold text-blue-600 transition group-hover:text-blue-700"
                  >
                    {projects.cta}
                    <span className="ml-1 transition group-hover:translate-x-0.5" aria-hidden="true">
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
