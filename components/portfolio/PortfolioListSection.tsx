"use client";

import { useMemo, useState } from "react";
import {
  portfolioCategoryLabels,
  portfolioFilterTabs,
  portfolioProjects,
  type PortfolioFilterId,
} from "@/data/portfolio";
import { PortfolioProjectRow } from "@/components/portfolio/PortfolioProjectRow";

const PAGE_SIZE = 20;

export function PortfolioListSection() {
  const [filter, setFilter] = useState<PortfolioFilterId>("todos");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    if (filter === "todos") return portfolioProjects;
    return portfolioProjects.filter((p) => p.filter === filter);
  }, [filter]);

  const visible = useMemo(
    () => filtered.slice(0, visibleCount),
    [filtered, visibleCount],
  );

  const hasMore = visibleCount < filtered.length;

  const onFilterChange = (id: PortfolioFilterId) => {
    setFilter(id);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <section
      id="listado"
      className="scroll-mt-20 border-b border-gray-200 bg-white"
      aria-labelledby="portfolio-list-heading"
    >
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <h2 id="portfolio-list-heading" className="sr-only">
          Listado de proyectos
        </h2>

        <nav
          className="flex flex-wrap justify-center gap-2 border-b border-gray-200 pb-4 sm:gap-3 md:justify-start md:gap-6 md:border-0 md:pb-0"
          aria-label="Filtrar por categoría"
        >
          {portfolioFilterTabs.map((tab) => {
            const active = filter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onFilterChange(tab.id)}
                className={`relative pb-2 text-xs font-semibold uppercase tracking-wide transition-colors sm:text-sm ${
                  active
                    ? "text-[#0A192F]"
                    : "text-[#9CA3AF] hover:text-[#64748B]"
                }`}
              >
                {tab.label}
                {active ? (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0A192F]" />
                ) : null}
              </button>
            );
          })}
        </nav>

        <p className="mt-4 text-center text-sm text-[#6B7280] md:text-left">
          Mostrando{" "}
          <strong className="font-semibold text-[#0A192F]">{visible.length}</strong>{" "}
          de{" "}
          <strong className="font-semibold text-[#0A192F]">{filtered.length}</strong>{" "}
          proyecto{filtered.length === 1 ? "" : "s"}
          {filter !== "todos" ? (
            <>
              {" "}
              ({portfolioCategoryLabels[filter]})
            </>
          ) : null}
        </p>
        <p className="mt-2 text-center text-xs leading-relaxed text-[#9CA3AF] md:text-left">
          Las fotografías se muestran solo cuando existan para esa obra; el resto
          permanece en formato texto hasta que las subamos.
        </p>

        <ul className="mt-8 divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white px-4 sm:px-6 lg:px-8">
          {visible.map((p) => (
            <li key={p.id}>
              <PortfolioProjectRow project={p} />
            </li>
          ))}
        </ul>

        {filtered.length === 0 ? (
          <p className="mt-12 text-center text-sm text-[#6B7280]">
            No hay proyectos en esta categoría.
          </p>
        ) : null}

        {hasMore ? (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() =>
                setVisibleCount((c) =>
                  Math.min(c + PAGE_SIZE, filtered.length),
                )
              }
              className="inline-flex min-h-12 items-center justify-center border border-[#0A192F] bg-white px-8 py-3 text-xs font-semibold uppercase tracking-wide text-[#0A192F] transition-colors hover:bg-[#F8FAFC] sm:min-h-0 sm:text-sm"
            >
              Cargar más proyectos
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
