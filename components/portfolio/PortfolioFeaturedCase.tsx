import Image from "next/image";
import Link from "next/link";

export function PortfolioFeaturedCase() {
  return (
    <section
      className="bg-[#0A192F] py-14 text-white sm:py-16 lg:py-20"
      aria-labelledby="portfolio-featured-heading"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
          Caso de éxito destacado
        </p>
        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/30 sm:aspect-[16/10] lg:aspect-auto lg:min-h-[320px]">
            <Image
              src="/hero.jpeg"
              alt="Proyecto corporativo Scotiabank"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute bottom-4 right-4 bg-white px-5 py-4 text-[#0A192F] shadow-lg">
              <p className="text-3xl font-bold leading-none tabular-nums">2004</p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#64748B]">
                Año de ejecución
              </p>
            </div>
          </div>

          <div>
            <h2 id="portfolio-featured-heading" className="text-2xl font-bold sm:text-3xl">
              Adecuación corporativa Scotiabank
            </h2>
            <dl className="mt-8 space-y-5 text-sm sm:text-base">
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-wider text-white/55">
                  Cliente
                </dt>
                <dd className="mt-1 font-medium">Scotiabank Inverlat</dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-wider text-white/55">
                  Ubicación
                </dt>
                <dd className="mt-1 font-medium">Guadalajara, Jalisco</dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-wider text-white/55">
                  Alcance del proyecto
                </dt>
                <dd className="mt-2 leading-relaxed text-white/88">
                  Cambio de imagen y adecuación integral de espacios bancarios con
                  cumplimiento de estándares corporativos y normativa aplicable.
                </dd>
              </div>
            </dl>
            <p className="mt-8 flex items-start gap-2 text-sm italic text-emerald-300/95">
              <span className="mt-0.5 text-base not-italic text-emerald-400" aria-hidden>
                ✓
              </span>
              Implementación exitosa de imagen institucional.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-10">
          <div className="flex flex-wrap items-center gap-2 text-sm text-white/75">
            <span className="text-white/50">Otros proyectos relevantes:</span>
            <Link
              href="/portafolio#listado"
              className="font-medium text-white underline-offset-4 hover:text-white hover:underline"
            >
              Ver listado completo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
