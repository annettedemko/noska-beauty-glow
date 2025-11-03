import { useLanguage } from "@/contexts/LanguageContext";
import { useLocation } from "react-router-dom";

export const StructuredData = () => {
  const { language } = useLanguage();
  const location = useLocation();
  const isGerman = language === "DE";

  // LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["BeautySalon", "LocalBusiness", "Organization"],
    "@id": "https://pmu-noska.de/#organization",
    "name": isGerman ? "Permanent Make-up by Anastasia Noska" : "Перманентный макияж от Анастасии Носка",
    "alternateName": "PMU Noska",
    "url": "https://pmu-noska.de",
    "logo": {
      "@type": "ImageObject",
      "url": "https://pmu-noska.de/logo%20A.png",
      "width": 512,
      "height": 512
    },
    "image": [
      "https://pmu-noska.de/logo%20A.png",
      "https://pmu-noska.de/12.jpg"
    ],
    "description": isGerman
      ? "Professionelles Permanent Make-up Studio in München. Spezialisiert auf Powder Brows, Aquarell Lippen, Lidstrich, Kopfhaut Pigmentierung und Camouflage."
      : "Профессиональная студия перманентного макияжа в Мюнхене. Специализируется на пудровых бровях, акварельных губах, подводке, пигментации кожи головы и камуфляже.",
    "priceRange": "€€-€€€",
    "currenciesAccepted": "EUR",
    "paymentAccepted": isGerman ? "Bar, EC-Karte" : "Наличные, EC-карта",
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
    "email": "info@pmu-noska.de",
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
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+49-xxx-xxxxxxx",
      "contactType": isGerman ? "Kundenservice" : "Служба поддержки",
      "availableLanguage": ["German", "Russian"],
      "areaServed": "DE"
    },
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
    "areaServed": [
      {
        "@type": "City",
        "name": "München"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Bayern"
      }
    ],
    "founder": {
      "@type": "Person",
      "name": "Anastasia Noska",
      "jobTitle": isGerman ? "PMU Spezialistin" : "Специалист по перманентному макияжу",
      "sameAs": "https://www.instagram.com/anastasia__noska"
    },
    "slogan": isGerman ? "Natürlich schön" : "Естественная красота",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "50",
      "bestRating": "5",
      "worstRating": "1"
    }
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

  // FAQ Schema for home page
  const getFAQSchema = () => {
    if (location.pathname !== "/" && location.pathname !== "/ru") {
      return null;
    }

    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": isGerman ? [
        {
          "@type": "Question",
          "name": "Was ist Permanent Make-up?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Permanent Make-up ist eine kosmetische Technik, bei der Pigmente in die oberste Hautschicht eingebracht werden. Dies ermöglicht es, Augenbrauen, Lippen und Lidstriche dauerhaft zu betonen und zu verschönern."
          }
        },
        {
          "@type": "Question",
          "name": "Wie lange hält Permanent Make-up?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Die Haltbarkeit von Permanent Make-up beträgt in der Regel 1-3 Jahre, abhängig von Hauttyp, Pflege und der behandelten Zone. Eine Auffrischung wird empfohlen, um die Farbe und Form optimal zu erhalten."
          }
        },
        {
          "@type": "Question",
          "name": "Ist Permanent Make-up schmerzhaft?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Die meisten Kunden empfinden die Behandlung als gut erträglich. Vor der Behandlung wird ein Betäubungsgel aufgetragen, um das Unbehagen zu minimieren."
          }
        },
        {
          "@type": "Question",
          "name": "Was kostet Permanent Make-up in München?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Die Preise variieren je nach Behandlung: Powder Brows ab 300€, Aquarell Lippen ab 350€, Kopfhaut Pigmentierung ab 400€, Camouflage ab 200€. Eine kostenlose Beratung ist jederzeit möglich."
          }
        }
      ] : [
        {
          "@type": "Question",
          "name": "Что такое перманентный макияж?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Перманентный макияж - это косметическая техника, при которой пигменты вводятся в верхний слой кожи. Это позволяет надолго подчеркнуть и улучшить брови, губы и веки."
          }
        },
        {
          "@type": "Question",
          "name": "Как долго держится перманентный макияж?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Стойкость перманентного макияжа обычно составляет 1-3 года в зависимости от типа кожи, ухода и обработанной зоны. Рекомендуется обновление для оптимального сохранения цвета и формы."
          }
        },
        {
          "@type": "Question",
          "name": "Болезненна ли процедура перманентного макияжа?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Большинство клиентов считают процедуру вполне терпимой. Перед процедурой наносится обезболивающий гель для минимизации дискомфорта."
          }
        },
        {
          "@type": "Question",
          "name": "Сколько стоит перманентный макияж в Мюнхене?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Цены варьируются в зависимости от процедуры: Пудровые брови от 300€, Акварельные губы от 350€, Пигментация кожи головы от 400€, Камуфляж от 200€. Бесплатная консультация доступна в любое время."
          }
        }
      ]
    };
  };

  const faqSchema = getFAQSchema();

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

      {/* FAQ Schema (only on home page) */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

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
