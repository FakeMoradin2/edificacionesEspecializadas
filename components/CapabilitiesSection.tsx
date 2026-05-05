import { capabilities } from "@/data/capabilities";

export function CapabilitiesSection() {
  return (
    <section
      className="border-b border-[#E5E5E5] bg-white py-14 sm:py-16 lg:py-20"
      aria-labelledby="capacidades-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          <div className="text-center md:text-left">
            <h2
              id="capacidades-heading"
              className="text-2xl font-bold leading-tight tracking-tight text-[#0A192F] sm:text-3xl"
            >
              Capacidades y Soluciones Constructivas
            </h2>
            <span
              className="mx-auto mt-4 block h-1 w-14 bg-black md:mx-0 sm:mt-5"
              aria-hidden
            />
          </div>
          <div className="md:flex md:items-start md:justify-end">
            <p className="max-w-xl text-center text-sm leading-relaxed text-[#374151] sm:text-base md:text-left">
              Cada proyecto requiere precisión técnica, experiencia comprobable y
              ejecución profesional. Nuestra capacidad operativa permite atender
              desde remodelaciones especializadas hasta desarrollos integrales de
              gran escala con una metodología rigurosa de control y entrega.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px bg-[#E5E5E5] sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item) => (
            <article
              key={item.code}
              className="flex flex-col gap-3 bg-white p-5 sm:p-6"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#9CA3AF] sm:text-[11px]">
                {item.code} / {item.category}
              </p>
              <h3 className="text-base font-bold leading-snug text-black sm:text-lg">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#6B7280]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
