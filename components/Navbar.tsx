"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/portafolio", label: "Portafolio" },
  { href: "/nosotros", label: "Nosotros" },
] as const;

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-3.5 w-5" aria-hidden>
      <span
        className={`absolute left-0 block h-0.5 w-full bg-[#0A192F] transition-transform duration-200 ease-out ${
          open ? "top-1.5 rotate-45" : "top-0"
        }`}
      />
      <span
        className={`absolute left-0 top-1.5 block h-0.5 w-full bg-[#0A192F] transition-opacity duration-200 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute left-0 block h-0.5 w-full bg-[#0A192F] transition-transform duration-200 ease-out ${
          open ? "top-1.5 -rotate-45" : "top-3"
        }`}
      />
    </span>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const contactActive = isActive("/contacto");

  const linkDesktopClass = (active: boolean) =>
    `relative inline-block pb-1 text-xs font-medium uppercase tracking-wide transition-colors sm:text-sm ${
      active
        ? "text-[#0A192F] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#0A192F] after:content-['']"
        : "text-[#6B7280] hover:text-[#1F2937]"
    }`;

  const linkMobileClass = (active: boolean) =>
    `block border-b border-gray-200 py-4 text-sm font-medium uppercase tracking-wide transition-colors ${
      active
        ? "border-l-4 border-l-[#0A192F] bg-gray-100/80 pl-3 text-[#0A192F]"
        : "border-l-4 border-l-transparent pl-3 text-[#6B7280] active:bg-gray-50"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200/80 bg-[#F9FAFB]">
      <div className="relative mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex min-w-0 shrink items-center gap-2 transition-opacity hover:opacity-90"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="Edificación Especializada"
            width={220}
            height={48}
            className="h-8 w-auto max-w-[min(100%,11rem)] object-contain object-left sm:h-9 md:h-10 md:max-w-none"
            priority
          />
        </Link>

        <nav
          className="hidden flex-1 items-center justify-end gap-6 md:flex md:gap-8 lg:gap-10"
          aria-label="Principal"
        >
          <ul className="flex items-center gap-5 lg:gap-8">
            {navLinks.map(({ href, label }) => {
              const active = isActive(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={linkDesktopClass(active)}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href="/contacto"
            aria-current={contactActive ? "page" : undefined}
            className={`inline-flex items-center justify-center rounded-none px-4 py-2.5 text-xs font-semibold uppercase tracking-wide transition-colors sm:px-5 sm:text-sm ${
              contactActive
                ? "bg-[#0A192F] text-white shadow-[inset_0_-3px_0_0_rgba(255,255,255,0.35)]"
                : "bg-[#0A192F] text-white hover:bg-[#1F2937]"
            }`}
          >
            Contacto
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-gray-200 bg-white text-[#0A192F] shadow-sm md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <MenuIcon open={menuOpen} />
        </button>
      </div>

      {menuOpen ? (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-14 z-40 flex flex-col bg-[#F9FAFB] shadow-[0_8px_24px_rgba(0,0,0,0.08)] sm:top-16 md:hidden"
        >
          <ul className="flex flex-1 flex-col overflow-y-auto px-4 pb-6 pt-2 sm:px-6">
            {navLinks.map(({ href, label }) => {
              const active = isActive(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={linkMobileClass(active)}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
            <li className="mt-4 border-t border-gray-200 pt-4">
              <Link
                href="/contacto"
                aria-current={contactActive ? "page" : undefined}
                className={`flex w-full items-center justify-center rounded-none py-3.5 text-sm font-semibold uppercase tracking-wide transition-colors ${
                  contactActive
                    ? "bg-[#0A192F] text-white shadow-[inset_0_-3px_0_0_rgba(255,255,255,0.35)]"
                    : "bg-[#0A192F] text-white active:bg-[#1F2937]"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
