"use client";

import { useCallback, useState, type FormEvent } from "react";
import {
  contactEmail,
  contactHoursLines,
  contactPhoneDisplay,
  contactPhoneTel,
  contactAddressLines,
  projectTypeOptions,
  whatsappDisplay,
  whatsappHref,
} from "@/data/contact";
import {
  IconClock,
  IconMail,
  IconMapPin,
  IconPhone,
  IconWhatsApp,
} from "@/components/contact/icons";

const inputClass =
  "w-full border border-gray-300 bg-white px-3 py-2.5 text-sm text-[#0F172A] outline-none transition placeholder:text-gray-400 focus:border-[#0A192F] focus:ring-1 focus:ring-[#0A192F]";

export function ContactLeadSection() {
  const [sent, setSent] = useState(false);

  const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const subject = encodeURIComponent("Solicitud de cotización — web");
    const body = encodeURIComponent(
      [
        `Nombre: ${fd.get("nombre")}`,
        `Empresa: ${fd.get("empresa")}`,
        `Correo: ${fd.get("correo")}`,
        `Teléfono: ${fd.get("telefono")}`,
        `Tipo de proyecto: ${fd.get("tipo")}`,
        `Ubicación: ${fd.get("ubicacion")}`,
        `Presupuesto estimado (MXN): ${fd.get("presupuesto")}`,
        "",
        "Descripción:",
        String(fd.get("descripcion") ?? ""),
      ].join("\n"),
    );
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setSent(true);
    form.reset();
  }, []);

  return (
    <section
      className="border-b border-gray-200 bg-white"
      aria-labelledby="contact-lead-heading"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <h2 id="contact-lead-heading" className="sr-only">
          Canales de contacto y cotización
        </h2>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14 lg:items-start">
          <div className="lg:col-span-5">
            <p className="text-sm font-bold uppercase tracking-wide text-[#0A192F]">
              Canales directos
            </p>
            <ul className="mt-8 space-y-8">
              <li className="flex gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center border border-gray-200 text-[#0A192F]">
                  <IconMail className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#9CA3AF]">
                    Correo
                  </p>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="mt-1 block break-all text-sm font-medium text-[#0A192F] underline-offset-4 hover:underline"
                  >
                    {contactEmail}
                  </a>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center border border-gray-200 text-[#0A192F]">
                  <IconPhone className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#9CA3AF]">
                    Teléfono
                  </p>
                  <a
                    href={`tel:${contactPhoneTel}`}
                    className="mt-1 block text-sm font-medium text-[#0A192F] underline-offset-4 hover:underline"
                  >
                    {contactPhoneDisplay}
                  </a>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center border border-gray-200 text-[#0A192F]">
                  <IconWhatsApp className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#9CA3AF]">
                    WhatsApp Business
                  </p>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm font-medium text-[#0A192F] underline-offset-4 hover:underline"
                  >
                    {whatsappDisplay}
                  </a>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center border border-gray-200 text-[#0A192F]">
                  <IconMapPin className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#9CA3AF]">
                    Dirección
                  </p>
                  {contactAddressLines.map((line) => (
                    <p
                      key={line}
                      className="mt-1 text-sm leading-relaxed text-[#374151]"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </li>

              <li className="flex gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center border border-gray-200 text-[#0A192F]">
                  <IconClock className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#9CA3AF]">
                    Horario
                  </p>
                  {contactHoursLines.map((line) => (
                    <p
                      key={line}
                      className="mt-1 text-sm leading-relaxed text-[#374151]"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div
              id="cotizacion"
              className="scroll-mt-24 border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <p className="text-sm font-bold uppercase tracking-wide text-[#0A192F]">
                Formulario de cotización
              </p>

              {sent ? (
                <p
                  className="mt-6 border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900"
                  role="status"
                >
                  Se abrió su cliente de correo con el borrador del mensaje. Si no
                  ve la ventana, escríbanos a{" "}
                  <a className="font-medium underline" href={`mailto:${contactEmail}`}>
                    {contactEmail}
                  </a>{" "}
                  o por{" "}
                  <a className="font-medium underline" href={whatsappHref}>
                    WhatsApp
                  </a>
                  .
                </p>
              ) : null}

              <form className="mt-8 space-y-5" onSubmit={onSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="nombre" className="block text-xs font-medium uppercase tracking-wider text-[#6B7280]">
                      Nombre completo
                    </label>
                    <input
                      id="nombre"
                      name="nombre"
                      required
                      autoComplete="name"
                      className={`${inputClass} mt-1.5`}
                      placeholder="Nombre y apellidos"
                    />
                  </div>
                  <div>
                    <label htmlFor="empresa" className="block text-xs font-medium uppercase tracking-wider text-[#6B7280]">
                      Empresa / Entidad
                    </label>
                    <input
                      id="empresa"
                      name="empresa"
                      className={`${inputClass} mt-1.5`}
                      placeholder="Razón social o institución"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="correo" className="block text-xs font-medium uppercase tracking-wider text-[#6B7280]">
                      Correo corporativo
                    </label>
                    <input
                      id="correo"
                      name="correo"
                      type="email"
                      required
                      autoComplete="email"
                      className={`${inputClass} mt-1.5`}
                      placeholder="correo@empresa.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="block text-xs font-medium uppercase tracking-wider text-[#6B7280]">
                      Teléfono de contacto
                    </label>
                    <input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      autoComplete="tel"
                      className={`${inputClass} mt-1.5`}
                      placeholder="+52 …"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="tipo" className="block text-xs font-medium uppercase tracking-wider text-[#6B7280]">
                      Tipo de proyecto
                    </label>
                    <select
                      id="tipo"
                      name="tipo"
                      required
                      defaultValue=""
                      className={`${inputClass} mt-1.5`}
                    >
                      {projectTypeOptions.map((o) => (
                        <option key={o.value || "empty"} value={o.value} disabled={o.value === ""}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="ubicacion" className="block text-xs font-medium uppercase tracking-wider text-[#6B7280]">
                      Ubicación de la obra
                    </label>
                    <input
                      id="ubicacion"
                      name="ubicacion"
                      className={`${inputClass} mt-1.5`}
                      placeholder="Ciudad, estado"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="presupuesto" className="block text-xs font-medium uppercase tracking-wider text-[#6B7280]">
                    Presupuesto estimado (MXN)
                  </label>
                  <input
                    id="presupuesto"
                    name="presupuesto"
                    inputMode="decimal"
                    className={`${inputClass} mt-1.5`}
                    placeholder="Rango o monto orientativo"
                  />
                </div>

                <div>
                  <label htmlFor="descripcion" className="block text-xs font-medium uppercase tracking-wider text-[#6B7280]">
                    Descripción técnica del proyecto
                  </label>
                  <textarea
                    id="descripcion"
                    name="descripcion"
                    required
                    rows={5}
                    className={`${inputClass} mt-1.5 resize-y min-h-[120px]`}
                    placeholder="Alcance, metraje aproximado, tiempos deseados y cualquier requisito relevante."
                  />
                </div>

                <div className="flex flex-col items-stretch gap-3 pt-2 sm:flex-row sm:justify-end">
                  <button
                    type="submit"
                    className="inline-flex min-h-12 items-center justify-center bg-[#0A192F] px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#1e3a5f] sm:min-h-0 sm:text-sm"
                  >
                    Enviar solicitud de cotización
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
