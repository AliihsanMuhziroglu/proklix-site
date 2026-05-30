import Image from "next/image";
import type { Dictionary } from "@/dictionaries";
import { TELEGRAM_URL } from "@/lib/constants";
import { Button } from "./ui/Button";

type Props = {
  dict: Dictionary;
  className?: string;
};

const LOGO_AREA_HEIGHT = "h-16 sm:h-20";

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
    imgClass: "h-7 w-auto max-w-[70%] object-contain sm:h-8",
    svg: true,
  },
  Tozago: {
    src: "/projects/tozago-logo.png",
    alt: "Tozago",
    width: 320,
    height: 80,
    imgClass: "h-6 w-auto max-w-full object-contain sm:h-7",
    darkBox: true,
  },
  Klinidex: {
    src: "/projects/klinidex-logo.png",
    alt: "Klinidex",
    width: 200,
    height: 200,
    imgClass: "h-10 w-auto max-w-[65%] object-contain sm:h-12",
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
      <div className="flex items-center justify-center rounded-xl bg-neutral-950 px-4 py-2 sm:px-5">
        {image}
      </div>
    );
  }

  return image;
}

export function ProjectsSection({ dict, className = "bg-white" }: Props) {
  const { projects } = dict;

  return (
    <section id="projects" className={`border-t border-slate-100 py-10 sm:py-14 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-lg font-bold tracking-tight text-navy-950 sm:text-2xl">
            {projects.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            {projects.subtitle}
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {projects.items.map((project) => (
            <article
              key={project.title}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div
                className={`relative flex shrink-0 ${LOGO_AREA_HEIGHT} items-center justify-center border-b border-slate-100 bg-slate-50`}
              >
                <ProjectLogo title={project.title} />
              </div>

              <div className="flex flex-1 flex-col p-4">
                <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1">
                  <h3 className="text-sm font-bold text-navy-950">{project.title}</h3>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-medium text-brand-600 hover:underline"
                  >
                    {project.website}
                  </a>
                </div>
                <p className="mt-1 text-xs text-slate-500">{project.category}</p>

                <div className="mt-2.5 space-y-2">
                  <p className="text-[12px] leading-relaxed text-slate-600">
                    <span className="font-semibold text-navy-950">{projects.problemLabel}:</span>{" "}
                    {project.problem}
                  </p>
                  <p className="text-[12px] leading-relaxed text-slate-600">
                    <span className="font-semibold text-navy-950">{projects.insightLabel}:</span>{" "}
                    {project.insight}
                  </p>
                </div>

                <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
                  {project.badges.slice(0, 4).map((badge) => (
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
          ))}
        </div>

        <div className="mt-5 text-center">
          <Button variant="secondary" size="md" href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
            {projects.callout.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
