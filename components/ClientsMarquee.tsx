import { homeMarqueeBrands } from "@/data/clients";
import { ClientLogoMark } from "@/components/ClientLogoMark";

function BrandList({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center gap-x-12 pr-12 sm:gap-x-16 sm:pr-16 lg:gap-x-20 lg:pr-20"
      role="list"
      aria-hidden={ariaHidden ? true : undefined}
    >
      {homeMarqueeBrands.map((c) => (
        <li
          key={`${c.id}-${ariaHidden ? "dup" : "main"}`}
          className="shrink-0"
        >
          <ClientLogoMark
            id={c.id}
            label={c.label}
            fullName={c.fullName}
            caption={c.caption}
          />
        </li>
      ))}
    </ul>
  );
}

export function ClientsMarquee() {
  return (
    <section
      aria-label="Clientes y colaboradores"
      className="border-b border-[#E5E5E5] bg-white shadow-[0_-2px_24px_-8px_rgba(0,0,0,0.08)]"
    >
      <div className="clients-marquee-outer overflow-hidden py-8 sm:py-10">
        <div className="clients-marquee-track">
          <BrandList />
          <BrandList ariaHidden />
        </div>
      </div>
    </section>
  );
}
