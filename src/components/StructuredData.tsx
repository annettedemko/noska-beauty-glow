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
              "@type": "Offer",
              "priceCurrency": "EUR",
              "price": "180"
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
              "@type": "Offer",
              "priceCurrency": "EUR",
              "price": "200"
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
              "@type": "Offer",
              "priceCurrency": "EUR",
              "price": "300"
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
      "ratingValue": "5.0",
      "reviewCount": "6",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Неля Малько"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "datePublished": "2024-12-15",
        "reviewBody": "Ich war bei der Kosmetikerin Anastasia zur Narbenabdeckung und bin super zufrieden! Sie arbeitet schnell, sorgfältig und sehr professionell. Außerdem ist sie unglaublich freundlich und aufmerksam. Das Studio ist sauber, gemütlich und gut erreichbar. Absolute Empfehlung!"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Alina Nowikow"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "datePublished": "2024-11-28",
        "reviewBody": "Ich bin absolut begeistert von meinem Permanent Make-up! Das Ergebnis ist super natürlich geworden, und ich spare jeden Tag so viel Zeit beim Schminken. Die Behandlung war professionell, hygienisch und die Beratung vorab sehr ausführlich. Ich habe mich rundum wohlgefühlt und kann es nur weiterempfehlen!"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Caroline"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "datePublished": "2024-11-10",
        "reviewBody": "Beste Permanent Make up Studio in München! Top Preis-Leistungsverhältnis! Anastasia macht ihre Arbeit ordentlich und fachgerecht! Ich komme unbedingt wieder! Danke!"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Наталия Макарова"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "datePublished": "2024-10-22",
        "reviewBody": "Ich habe bei Anastasia die Puderaugenbrauen machen lassen. Ich bin wirklich sehr zufrieden. Meine Augenbrauen waren immer nicht so dick und wirkten etwas lückenhaft. Nach der Behandlung sehen sie voller aus, als ob ich sie mit einem sanft getönten Brauenstift geschminkt habe. Das Pigment wurde perfekt an mir angepasst. Ich bin für ein tolles Ergebnis dankbar! Ich komme unbedingt gerne wieder!"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Анна-Мария Чепкасова"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "datePublished": "2024-09-18",
        "reviewBody": "Ich bin mit dem Ergebnis des permanent make ups sehr zufrieden. Beratung und Behandlung waren freundlich und kompetent. Ich habe mich mit Anastasia sehr wohl gefühlt!"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Viktor Astrov"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "datePublished": "2024-08-30",
        "reviewBody": "Ich habe meiner Frau einen Gutschein für eine Behandlung bei Anastasia geschenkt. Sie war nicht nur mit dem Ergebnis, sondern auch mit Anastasias unglaublich einfühlsamen und fürsorglichen Umgang mit ihren Kunden zufrieden."
      }
    ]
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
            "text": "Die Preise variieren je nach Behandlung. Eine kostenlose Beratung ist jederzeit möglich – kontaktieren Sie uns für aktuelle Preise."
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
            "text": "Цены варьируются в зависимости от процедуры. Бесплатная консультация доступна в любое время – свяжитесь с нами для актуальных цен."
          }
        }
      ]
    };
  };

  const faqSchema = getFAQSchema();

  // Service Schema for specific service pages
  const getServiceSchema = () => {
    const path = location.pathname.replace(/^\/ru/, "");

    if (path === "/kopfhaut-muenchen") {
      return {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": isGerman ? "Kopfhaut Pigmentierung München" : "Пигментация кожи головы Мюнхен",
        "description": isGerman
          ? "Professionelle Kopfhaut Pigmentierung (SMP) bei Haarausfall. Natürliche Kaschierung von lichtem Haar und Haarverlust in München."
          : "Профессиональная пигментация кожи головы (SMP) при выпадении волос. Естественная маскировка редких волос в Мюнхене.",
        "provider": {
          "@id": "https://pmu-noska.de/#organization"
        },
        "areaServed": "München",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "EUR",
          "price": "300"
        },
        "serviceType": "Kopfhaut Pigmentierung, SMP, Scalp Micropigmentation"
      };
    }

    if (path === "/camouflage-muenchen") {
      return {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": isGerman ? "Camouflage München - Narben & Dehnungsstreifen" : "Камуфляж Мюнхен - Шрамы и растяжки",
        "description": isGerman
          ? "Professionelle Camouflage von Narben, Dehnungsstreifen und Hautverfärbungen mit Permanent Make-up in München."
          : "Профессиональный камуфляж шрамов, растяжек и пигментных пятен перманентным макияжем в Мюнхене.",
        "provider": {
          "@id": "https://pmu-noska.de/#organization"
        },
        "areaServed": "München",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "EUR",
          "price": "200",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "EUR",
            "price": "200",
            "minPrice": "200"
          }
        },
        "serviceType": "Camouflage, Narben Kaschierung, Dehnungsstreifen Camouflage"
      };
    }

    if (path === "/services-muenchen") {
      return {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": isGerman ? "Permanent Make-up München" : "Перманентный макияж Мюнхен",
        "description": isGerman
          ? "Professionelles Permanent Make-up: Powder Brows, Aquarell Lippen, Lidstrich in München. Natürliche Ergebnisse von Anastasia Noska."
          : "Профессиональный перманентный макияж: пудровые брови, акварельные губы, подводка в Мюнхене.",
        "provider": {
          "@id": "https://pmu-noska.de/#organization"
        },
        "areaServed": "München",
        "offers": [
          {
            "@type": "Offer",
            "name": isGerman ? "Powder Brows" : "Пудровые брови",
            "priceCurrency": "EUR",
            "price": "180"
          },
          {
            "@type": "Offer",
            "name": isGerman ? "Aquarell Lippen" : "Акварельные губы",
            "priceCurrency": "EUR",
            "price": "200"
          }
        ],
        "serviceType": "Permanent Make-up, Powder Brows, Aquarell Lippen, Microblading"
      };
    }

    return null;
  };

  const serviceSchema = getServiceSchema();

  // Video Schema (only on home page, mobile only)
  const getVideoSchema = () => {
    if (location.pathname !== "/" && location.pathname !== "/ru") {
      return null;
    }

    return {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": isGerman ? "Permanent Make-up München - Anastasia Noska" : "Перманентный макияж Мюнхен - Анастасия Носка",
      "description": isGerman
        ? "Professionelles Permanent Make-up Studio in München. Natürliche Ergebnisse mit Powder Brows, Aquarell Lippen und mehr."
        : "Профессиональная студия перманентного макияжа в Мюнхене. Естественные результаты с пудровыми бровями, акварельными губами и более.",
      "thumbnailUrl": "https://pmu-noska.de/12.webp",
      "uploadDate": "2024-01-01T00:00:00Z",
      "contentUrl": "https://pmu-noska.de/5.mp4",
      "embedUrl": "https://pmu-noska.de/",
      "duration": "PT10S",
      "publisher": {
        "@id": "https://pmu-noska.de/#organization"
      }
    };
  };

  const videoSchema = getVideoSchema();

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

      {/* Video Schema (only on home page) */}
      {videoSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
        />
      )}

      {/* FAQ Schema (only on home page) */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Service Schema (only on service pages) */}
      {serviceSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
