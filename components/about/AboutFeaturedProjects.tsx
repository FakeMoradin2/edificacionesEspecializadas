import { featuredProjects } from "@/data/about";

export function AboutFeaturedProjects() {
  return (
    <section
      className="border-b border-gray-200 bg-[#F3F4F6]"
      aria-labelledby="about-featured-heading"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-none lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7280]">
            Trayectoria seleccionada
          </p>
          <h2
            id="about-featured-heading"
            className="mt-2 text-2xl font-bold uppercase tracking-tight text-black sm:text-3xl"
          >
            Obras de mayor relevancia
          </h2>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {featuredProjects.map((p) => (
            <li key={p.title}>
              <article className="flex h-full flex-col border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9CA3AF]">
                  {p.category}
                </p>
                <h3 className="mt-2 text-lg font-bold text-[#0A192F]">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#6B7280]">
                  {p.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
