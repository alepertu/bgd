export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "PYA DEVS",
    "alternateName": "PYA.uy",
    "description": "Desarrollo web y de aplicaciones en Uruguay. Creamos sitios web, tiendas online y apps a medida para emprendedores, startups y empresas.",
    "url": "https://pya.uy",
    "logo": "https://pya.uy/Logo.svg",
    "image": "https://pya.uy/Logo.svg",
    "telephone": "+59897827767",
    "email": "info@pya.uy",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "UY",
      "addressLocality": "Uruguay"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Uruguay"
    },
    "serviceType": [
      "Desarrollo Web",
      "Desarrollo de Aplicaciones",
      "Diseño Web",
      "Tiendas Online",
      "Landing Pages",
      "Blogs",
      "SEO",
      "Consultoría Tecnológica"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Planes de Desarrollo Web",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plan Starter",
            "description": "Perfecto para blogs, tiendas pequeñas o landing pages con presencia online profesional."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plan Pro",
            "description": "Para marcas que buscan diseño único y personalizado para destacar online."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plan A Medida",
            "description": "Para aplicaciones web complejas y sistemas únicos desarrollados a medida."
          }
        }
      ]
    },
    "sameAs": [
      "https://instagram.com/pya.devs"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData, null, 0) }}
    />
  );
}

