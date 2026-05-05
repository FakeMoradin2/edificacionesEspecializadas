import Image from "next/image";
import type { PortfolioProject } from "@/data/portfolio";
import { portfolioCategoryLabels } from "@/data/portfolio";

type Props = {
  project: PortfolioProject;
};

export function PortfolioProjectRow({ project }: Props) {
  const cat = portfolioCategoryLabels[project.filter];
  const hasPhoto = Boolean(project.imageSrc);

  return (
    <article className="flex gap-4 py-6 sm:gap-6 sm:py-8">
      {hasPhoto && project.imageSrc ? (
        <div className="relative h-20 w-[7rem] shrink-0 overflow-hidden bg-[#EEF2F6] sm:h-28 sm:w-40">
          <Image
            src={project.imageSrc}
            alt={project.title}
            fill
            className="object-cover object-center"
            sizes="(max-width:640px) 7rem, 10rem"
          />
        </div>
      ) : (
        <div
          className="w-1 shrink-0 self-stretch rounded-full bg-[#0A192F]/12"
          aria-hidden
        />
      )}

      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9CA3AF]">
          {cat}
        </p>
        <h3 className="mt-1.5 text-base font-bold text-[#0A192F] sm:text-lg">
          {project.title}
        </h3>
        <div className="mt-3 flex flex-col gap-1 text-[11px] uppercase tracking-wide text-[#64748B] sm:flex-row sm:flex-wrap sm:gap-x-6">
          <p>
            <span className="font-semibold text-[#94A3B8]">Ubicación: </span>
            <span className="normal-case tracking-normal">{project.location}</span>
          </p>
          <p>
            <span className="font-semibold text-[#94A3B8]">Cliente: </span>
            <span className="normal-case tracking-normal">{project.client}</span>
          </p>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">
          {project.description}
        </p>
      </div>
    </article>
  );
}
