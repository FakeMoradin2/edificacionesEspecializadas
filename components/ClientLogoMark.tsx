"use client";

import { useMemo, useState } from "react";
import { herraduraMarkImageCandidates } from "@/data/clients";

/** Orden de extensión para logos en `/public/logos/{id}.*`. */
const EXT_ORDER = ["svg", "png", "jpg", "jpeg", "webp"] as const;

type Props = {
  id: string;
  label: string;
  fullName: string;
  caption: string;
  /**
   * `grid`: celdas uniformes (rejillas responsive). `marquee`: ancho fijo para la fila deslizante.
   */
  layout?: "grid" | "marquee";
};

/**
 * Intenta `/public/logos/{id}.svg`, luego `.png`, `.jpg`, etc.
 * Pie de foto (`caption`) para identificar marcas poco reconocibles.
 */
export function ClientLogoMark({
  id,
  label,
  fullName,
  caption,
  layout = "marquee",
}: Props) {
  const candidates = useMemo(() => {
    if (id === "herradura") {
      return [...herraduraMarkImageCandidates];
    }
    return EXT_ORDER.map((ext) => `/logos/${id}.${ext}`);
  }, [id]);
  const [attempt, setAttempt] = useState(0);
  const src = candidates[attempt];
  const exhausted = attempt >= candidates.length;

  const isGrid = layout === "grid";

  const shellClass = isGrid
    ? "flex w-full max-w-[158px] shrink-0 flex-col items-stretch gap-2 sm:max-w-[172px]"
    : "flex w-[13rem] shrink-0 flex-col items-center gap-1.5 px-1";

  const captionClass = isGrid
    ? "block min-h-[2.75rem] w-full px-0.5 text-center text-[9px] font-medium leading-snug text-neutral-500 line-clamp-3 sm:min-h-[2.5rem] sm:text-[10px]"
    : "max-w-[13rem] text-center text-[9px] font-medium leading-tight text-neutral-500 sm:text-[10px]";

  const captionBlock =
    caption.trim() !== "" ? (
      <span className={captionClass}>{caption}</span>
    ) : null;

  const logoBoxClass = isGrid
    ? "flex h-[52px] min-h-[52px] w-full items-center justify-center px-1 sm:h-[56px] sm:min-h-[56px]"
    : "flex h-14 w-full items-center justify-center";

  const imgClass =
    id === "herradura"
      ? isGrid
        ? "max-h-[48px] w-auto max-w-[min(100%,9.5rem)] object-contain object-center sm:max-h-[52px] sm:max-w-[10.5rem]"
        : "h-10 w-auto max-h-12 max-w-[min(13.5rem,88vw)] object-contain object-center sm:h-[3.25rem] sm:max-w-[14rem]"
      : isGrid
        ? "max-h-full max-w-full object-contain object-center"
        : "max-h-14 w-auto max-w-[12rem] object-contain object-center";

  if (exhausted) {
    if (!isGrid) {
      return (
        <div className="flex w-[13rem] shrink-0 flex-col items-center gap-1.5 px-1">
          <span
            title={fullName}
            className="block whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.12em] text-[#9CA3AF] sm:text-xs"
          >
            {label}
          </span>
          {captionBlock}
        </div>
      );
    }
    return (
      <div className={shellClass}>
        <div className={logoBoxClass}>
          <span
            title={fullName}
            className="block max-w-full truncate text-center text-[10px] font-semibold uppercase tracking-[0.1em] text-[#9CA3AF] sm:text-[11px]"
          >
            {label}
          </span>
        </div>
        {captionBlock}
      </div>
    );
  }

  return (
    <figure title={fullName} className={shellClass}>
      <div className={logoBoxClass}>
        {/* eslint-disable-next-line @next/next/no-img-element -- SVG/JPEG mix local; nitidez nativa */}
        <img
          src={src}
          alt=""
          loading="lazy"
          decoding="async"
          className={imgClass}
          onError={() => setAttempt((a) => a + 1)}
        />
      </div>
      <figcaption className="sr-only">{fullName}</figcaption>
      {captionBlock}
    </figure>
  );
}

