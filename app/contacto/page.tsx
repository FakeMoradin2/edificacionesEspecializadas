import { ContactClosingCta } from "@/components/contact/ContactClosingCta";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactLeadSection } from "@/components/contact/ContactLeadSection";
import { ContactProcess } from "@/components/contact/ContactProcess";
import { ContactTrustStrip } from "@/components/contact/ContactTrustStrip";

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
