import { useLanguage } from "@/contexts/LanguageContext";
import { useLocation } from "react-router-dom";

export const StructuredData = () => {
  const { language } = useLanguage();
  const location = useLocation();
  const isGerman = language === "DE";

  // LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "@id": "https://pmu-noska.de/#organization",
    "name": isGerman ? "Permanent Make-up by Anastasia Noska" : "Перманентный макияж от Анастасии Носка",
    "alternateName": "PMU Noska",
    "url": "https://pmu-noska.de",
    "logo": "https://pmu-noska.de/logo%20A.png",
    "image": [
      "https://pmu-noska.de/logo%20A.png",
      "https://pmu-noska.de/12.jpg"
    ],
    "description": isGerman
      ? "Professionelles Permanent Make-up Studio in München. Spezialisiert auf Powder Brows, Aquarell Lippen, Lidstrich, Kopfhaut Pigmentierung und Camouflage."
      : "Профессиональная студия перманентного макияжа в Мюнхене. Специализируется на пудровых бровях, акварельных губах, подводке, пигментации кожи головы и камуфляже.",
    "priceRange": "€€",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "München",
      "addressLocality": "München",
      "addressRegion": "Bayern",
      "postalCode": "80331",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.1351,
      "longitude": 11.5820
    },
    "telephone": "+49-xxx-xxxxxxx",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/anastasia__noska"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": isGerman ? "Permanent Make-up Services" : "Услуги перманентного макияжа",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": isGerman ? "Powder Brows" : "Пудровые брови",
            "description": isGerman
              ? "Natürliche Augenbrauen mit Powder Brows Technik"
              : "Естественные брови техникой пудрового напыления",
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "EUR",
              "lowPrice": "300",
              "highPrice": "450"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": isGerman ? "Aquarell Lippen" : "Акварельные губы",
            "description": isGerman
              ? "Natürliche Lippenfarbe mit Aquarell Technik"
              : "Естественный цвет губ акварельной техникой",
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "EUR",
              "lowPrice": "350",
              "highPrice": "500"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": isGerman ? "Kopfhaut Pigmentierung" : "Пигментация кожи головы",
            "description": isGerman
              ? "Kaschierung von Haarausfall und lichtem Haar"
              : "Маскировка выпадения волос и редких волос",
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "EUR",
              "lowPrice": "400"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Camouflage",
            "description": isGerman
              ? "Kaschierung von Narben und Dehnungsstreifen"
              : "Маскировка шрамов и растяжек",
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "EUR",
              "lowPrice": "200"
            }
          }
        }
      ]
    },
    "areaServed": {
      "@type": "City",
      "name": "München"
    },
    "founder": {
      "@type": "Person",
      "name": "Anastasia Noska",
      "jobTitle": isGerman ? "PMU Spezialistin" : "Специалист по перманентному макияжу"
    },
    "slogan": isGerman ? "Natürlich schön" : "Естественная красота"
  };

  // WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://pmu-noska.de/#website",
    "url": "https://pmu-noska.de",
    "name": "PMU Noska",
    "description": isGerman
      ? "Permanent Make-up München - Natürlich schön"
      : "Перманентный макияж Мюнхен - Естественная красота",
    "publisher": {
      "@id": "https://pmu-noska.de/#organization"
    },
    "inLanguage": [
      {
        "@type": "Language",
        "name": "German",
        "alternateName": "de"
      },
      {
        "@type": "Language",
        "name": "Russian",
        "alternateName": "ru"
      }
    ],
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://pmu-noska.de/?s={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  // Breadcrumb Schema for non-home pages
  const getBreadcrumbSchema = () => {
    if (location.pathname === "/" || location.pathname === "/ru") {
      return null;
    }

    const pathWithoutLang = location.pathname.replace(/^\/ru/, "");
    const breadcrumbItems = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": isGerman ? "Home" : "Главная",
        "item": `https://pmu-noska.de${isGerman ? "/" : "/ru"}`
      }
    ];

    const pathSegments = pathWithoutLang.split('/').filter(Boolean);
    if (pathSegments.length > 0) {
      const pageName = pathSegments[pathSegments.length - 1];
      let displayName = pageName;

      // Map URL segments to display names
      const pageNames: Record<string, { de: string; ru: string }> = {
        'services-muenchen': { de: 'Leistungen', ru: 'Услуги' },
        'kopfhaut-muenchen': { de: 'Kopfhaut Pigmentierung', ru: 'Пигментация кожи головы' },
        'camouflage-muenchen': { de: 'Camouflage', ru: 'Камуфляж' },
        'remover-muenchen': { de: 'Remover', ru: 'Ремувер' },
        'impressum': { de: 'Impressum', ru: 'Импрессум' },
        'datenschutz': { de: 'Datenschutz', ru: 'Защита данных' }
      };

      if (pageNames[pageName]) {
        displayName = isGerman ? pageNames[pageName].de : pageNames[pageName].ru;
      }

      breadcrumbItems.push({
        "@type": "ListItem",
        "position": 2,
        "name": displayName,
        "item": `https://pmu-noska.de${location.pathname}`
      });
    }

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbItems
    };
  };

  const breadcrumbSchema = getBreadcrumbSchema();

  return (
    <>
      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* WebSite Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* Breadcrumb Schema (only on non-home pages) */}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
    </>
  );
};
