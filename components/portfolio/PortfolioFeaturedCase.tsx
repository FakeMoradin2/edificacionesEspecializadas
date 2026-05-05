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
              alt="Imagen de obra destacada"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute bottom-4 right-4 bg-white px-5 py-4 text-[#0A192F] shadow-lg">
              <p className="text-3xl font-bold leading-none tabular-nums">2009</p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#64748B]">
                Año de ejecución
              </p>
            </div>
          </div>

          <div>
            <h2 id="portfolio-featured-heading" className="text-2xl font-bold sm:text-3xl">
              Taller de Arquitectura — ITESM
            </h2>
            <p className="mt-4 leading-relaxed text-white/88 sm:text-[1.02rem]">
              Construcción del Taller de Arquitectura para el Instituto Tecnológico y de
              Estudios Superiores de Monterrey, desarrollado como parte de los proyectos
              institucionales realizados para el campus. La obra corresponde a un espacio
              académico especializado, diseñado para actividades de enseñanza, trabajo
              colaborativo y desarrollo de proyectos arquitectónicos.
            </p>
            <dl className="mt-8 space-y-5 text-sm sm:text-base">
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-wider text-white/55">
                  Proyecto
                </dt>
                <dd className="mt-1 font-medium">Taller de Arquitectura</dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-wider text-white/55">
                  Cliente
                </dt>
                <dd className="mt-1 font-medium">ITESM</dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-wider text-white/55">
                  Año
                </dt>
                <dd className="mt-1 font-medium">2009</dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-wider text-white/55">
                  Tipo
                </dt>
                <dd className="mt-1 font-medium">Proyecto institucional / educativo</dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-wider text-white/55">
                  Superficie
                </dt>
                <dd className="mt-1 font-medium">650 m²</dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-wider text-white/55">
                  Alcance del proyecto
                </dt>
                <dd className="mt-2 leading-relaxed text-white/88">
                  Construcción de espacio académico especializado para actividades de
                  arquitectura y desarrollo de proyectos.
                </dd>
              </div>
            </dl>
            <p className="mt-8 flex items-start gap-2 text-sm italic text-emerald-300/95">
              <span className="mt-0.5 text-base not-italic text-emerald-400" aria-hidden>
                ✓
              </span>
              También aparece en el listado de obras del ITESM dentro del periodo
              2006-2011, junto con remodelaciones, adecuaciones, laboratorios e
              infraestructura educativa.
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
