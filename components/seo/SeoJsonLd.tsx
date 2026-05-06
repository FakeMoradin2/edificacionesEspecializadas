import {
  getSiteUrl,
  organizationContact,
  siteDescription,
  siteName,
} from "@/lib/site-config";

export function SeoJsonLd() {
  const base = getSiteUrl();

  const graph = [
    {
      "@type": "Organization",
      "@id": `${base}/#organization`,
      name: siteName,
      description: siteDescription,
      url: base,
      logo: {
        "@type": "ImageObject",
        url: `${base}/logo.png`,
      },
      email: organizationContact.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: organizationContact.address.streetAddress,
        addressLocality: organizationContact.address.addressLocality,
        addressRegion: organizationContact.address.addressRegion,
        postalCode: organizationContact.address.postalCode,
        addressCountry: organizationContact.address.addressCountry,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${base}/#website`,
      url: base,
      name: siteName,
      description: siteDescription,
      publisher: { "@id": `${base}/#organization` },
      inLanguage: "es-MX",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${base}/#service`,
      name: siteName,
      description: siteDescription,
      url: base,
      image: `${base}/hero.jpeg`,
      areaServed: {
        "@type": "Country",
        name: "México",
      },
      provider: { "@id": `${base}/#organization` },
      serviceType: [
        "Remodelaciones y adecuaciones",
        "Construcción y obra civil",
        "Proyectos institucionales y corporativos",
        "Peritajes técnicos",
      ],
    },
  ];

  const payload = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
