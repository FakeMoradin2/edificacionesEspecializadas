import type { Metadata } from "next";
import { ContactClosingCta } from "@/components/contact/ContactClosingCta";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactLeadSection } from "@/components/contact/ContactLeadSection";
import { ContactProcess } from "@/components/contact/ContactProcess";
import { ContactTrustStrip } from "@/components/contact/ContactTrustStrip";
import { siteName } from "@/lib/site-config";

const title = "Contacto — cotización de remodelaciones y obra";
const description =
  "Solicite cotización o consulta para remodelaciones, adecuaciones u obra nueva. " +
  "Canales directos y formulario. " +
  siteName +
  ", Zapopan, Jalisco.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contacto" },
  openGraph: {
    title,
    description,
    url: "/contacto",
    siteName,
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function ContactoPage() {
  return (
    <main className="flex flex-1 flex-col">
      <ContactHero />
      <ContactLeadSection />
      <ContactProcess />
      <ContactTrustStrip />
      <ContactClosingCta />
    </main>
  );
}
