import { ClientLogoMark } from "@/components/ClientLogoMark";
import type { ClientBrand } from "@/data/clients";
import { clientBrands } from "@/data/clients";
import { aboutInstitutionIds } from "@/data/about";

function orderedBrands(): ClientBrand[] {
  const map = new Map(clientBrands.map((c) => [c.id, c]));
  return aboutInstitutionIds
    .map((id) => map.get(id))
    .filter((c): c is ClientBrand => c != null);
}

export function AboutInstitutionsStrip() {
  const brands = orderedBrands();

  return (
    <section
      className="border-b border-gray-200 bg-white"
      aria-label="Instituciones que avalan la trayectoria"
    >
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-[#9CA3AF] sm:text-[11px]">
          Instituciones que han avalado su trayectoria
        </p>
        <ul className="mx-auto mt-8 grid w-full max-w-5xl grid-cols-2 justify-items-stretch gap-x-5 gap-y-10 sm:mt-10 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-11 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-12 [&>li:nth-child(5)]:lg:col-start-2 [&>li:nth-child(6)]:lg:col-start-3">
          {brands.map((c) => (
            <li
              key={c.id}
              className="flex min-h-0 w-full min-w-0 items-stretch justify-center grayscale transition-[filter] duration-300 hover:grayscale-0"
            >
              <ClientLogoMark
                layout="grid"
                id={c.id}
                label={c.label}
                fullName={c.fullName}
                caption={c.caption}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
