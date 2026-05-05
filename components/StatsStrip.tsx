const stats = [
  { value: "40+", label: "Años de experiencia" },
  { value: "1500+", label: "Proyectos terminados" },
  { value: "100%", label: "Satisfacción cliente" },
];

export function StatsStrip() {
  return (
    <section
      className="bg-[#0B1629] py-12 text-white sm:py-14"
      aria-label="Indicadores de la empresa"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8 lg:gap-12">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center text-center sm:items-center"
            >
              <p className="text-4xl font-bold tracking-tight sm:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 max-w-[14rem] text-[11px] font-semibold uppercase tracking-[0.2em] text-white/75 sm:text-xs">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
