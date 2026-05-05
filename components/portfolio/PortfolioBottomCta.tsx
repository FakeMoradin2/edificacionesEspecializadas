import Link from "next/link";

export function PortfolioBottomCta() {
  return (
    <section className="border-b border-gray-200 bg-[#F3F4F6] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-2xl px-5 text-center sm:px-6 lg:px-8">
        <div className="border border-gray-200 bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-12">
          <h2 className="text-xl font-bold text-[#0A192F] sm:text-2xl">
            Hablemos de su próximo proyecto
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#6B7280] sm:text-base">
            Infraestructura, plazos y control de calidad con el respaldo de décadas
            de obra institucional y corporativa.
          </p>
          <Link
            href="/contacto#cotizacion"
            className="mt-8 inline-flex min-h-12 w-full items-center justify-center bg-[#0A192F] px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#152a4a] sm:min-h-0 sm:w-auto sm:px-10 sm:text-sm"
          >
            Solicitar cotización
          </Link>
        </div>
      </div>
    </section>
  );
}
