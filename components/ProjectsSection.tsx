import Image from "next/image";
import type { Dictionary } from "@/dictionaries";

type Props = {
  dict: Dictionary;
};

const LOGO_AREA_HEIGHT = "h-20 sm:h-24";

const projectLogos: Record<
  string,
  {
    src: string;
    alt: string;
    width: number;
    height: number;
    imgClass: string;
    darkBox?: boolean;
    svg?: boolean;
  }
> = {
  Clemar: {
    src: "/projects/clemar-logo.svg",
    alt: "Clemar",
    width: 223,
    height: 55,
    imgClass: "h-8 w-auto max-w-[70%] object-contain sm:h-9",
    svg: true,
  },
  Tozago: {
    src: "/projects/tozago-logo.png",
    alt: "Tozago",
    width: 320,
    height: 80,
    imgClass: "h-7 w-auto max-w-full object-contain sm:h-8",
    darkBox: true,
  },
  Klinidex: {
    src: "/projects/klinidex-logo.png",
    alt: "Klinidex",
    width: 200,
    height: 200,
    imgClass: "h-12 w-auto max-w-[65%] object-contain sm:h-14",
  },
};

function ProjectLogo({ title }: { title: string }) {
  const logo = projectLogos[title];
  if (!logo) return null;

  const image = logo.svg ? (
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
  );

  if (logo.darkBox) {
    return (
      <div className="flex items-center justify-center rounded-xl bg-neutral-950 px-5 py-2.5 sm:px-6">
        {image}
      </div>
    );
  }

  return image;
}

export function ProjectsSection({ dict }: Props) {
  const { projects } = dict;

  return (
    <section id="projects" className="border-t border-slate-100 bg-white py-12 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-lg font-bold tracking-tight text-navy-950 sm:text-2xl">
            {projects.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            {projects.subtitle}
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {projects.trustStrip.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600 sm:text-xs"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {projects.items.map((project) => (
            <article
              key={project.title}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
            >
              <div
                className={`relative flex shrink-0 ${LOGO_AREA_HEIGHT} items-center justify-center border-b border-slate-100 bg-slate-50`}
              >
                <ProjectLogo title={project.title} />
              </div>

              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1">
                  <h3 className="text-sm font-bold text-navy-950 sm:text-[15px]">{project.title}</h3>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-medium text-blue-600 transition hover:text-blue-700 hover:underline sm:text-xs"
                  >
                    {project.website}
                  </a>
                </div>
                <p className="mt-1 text-xs font-medium text-slate-500">{project.category}</p>

                <div className="mt-3 space-y-2.5">
                  <p className="text-[12px] leading-relaxed text-slate-600 sm:text-[13px]">
                    <span className="font-semibold text-navy-950">{projects.problemLabel}:</span>{" "}
                    {project.problem}
                  </p>
                  <p className="text-[12px] leading-relaxed text-slate-600 sm:text-[13px]">
                    <span className="font-semibold text-navy-950">{projects.insightLabel}:</span>{" "}
                    {project.insight}
                  </p>
                </div>

                <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
                  {project.badges.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-medium text-slate-600 sm:text-[11px]"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50/80 p-4 sm:mt-8 sm:p-5 lg:p-6">
          <h3 className="text-sm font-bold text-navy-950 sm:text-base">{projects.callout.title}</h3>
          <p className="mt-2 max-w-3xl text-[13px] leading-relaxed text-slate-600 sm:text-sm">
            {projects.callout.description}
          </p>
          <a
            href="#contact"
            className="mt-4 inline-flex min-h-[44px] items-center justify-center rounded-2xl border border-navy-900 px-5 py-2.5 text-sm font-semibold text-navy-900 transition hover:bg-navy-950 hover:text-white"
          >
            {projects.callout.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
