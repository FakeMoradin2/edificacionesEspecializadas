import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Inicio" },
  { href: "/portafolio", label: "Portafolio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-[#F9FAFB] text-[#0A192F]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-12">
          <div className="max-w-md shrink-0">
            <Link
              href="/"
              className="inline-block transition-opacity hover:opacity-90"
            >
              <Image
                src="/logo.png"
                alt="Edificación Especializada"
                width={220}
                height={48}
                className="h-9 w-auto max-w-[min(100%,12rem)] object-contain object-left md:h-10"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-[#6B7280]">
              Constructora especializada en proyectos de edificación con estándares
              de calidad y cumplimiento.
            </p>
          </div>

          <nav
            className="flex flex-col gap-6 sm:flex-row sm:gap-12 lg:gap-16"
            aria-label="Pie de página"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#9CA3AF]">
                Enlaces
              </p>
              <ul className="mt-3 flex flex-col gap-2.5">
                {footerLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm font-medium text-[#0A192F] transition-colors hover:text-[#1F2937] hover:underline"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#9CA3AF]">
                Contacto
              </p>
              <p className="mt-3 text-sm text-[#6B7280]">
                ¿Tienes un proyecto en mente?
              </p>
              <Link
                href="/contacto"
                className="mt-3 inline-flex items-center justify-center rounded-none bg-[#0A192F] px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#1F2937] sm:text-sm"
              >
                Escríbenos
              </Link>
            </div>
          </nav>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-6">
          <p className="text-center text-xs text-[#9CA3AF] sm:text-left">
            © {year} Edificación Especializada. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
