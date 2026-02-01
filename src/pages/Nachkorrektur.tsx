import { useLanguage } from "@/contexts/LanguageContext";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { ServiceHero } from "@/components/ServiceHero";
import { VideoBackground } from "@/components/VideoBackground";
import { RelatedServices } from "@/components/RelatedServices";
import { StructuredData } from "@/components/StructuredData";
import { useEffect } from "react";

const Nachkorrektur = () => {
  const { t, language } = useLanguage();
  const langPrefix = language === "DE" ? "" : "/ru";

  useEffect(() => {
    document.title = language === "DE"
      ? "Nachkorrektur München - Permanent Make-up Korrektur | Anastasia Noska"
      : "Коррекция Мюнхен - Коррекция перманентного макияжа | Анастасия Носка";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        language === "DE"
          ? "Nachkorrektur für Permanent Make-up in München. 50% vom Erstbehandlungspreis. Powder Brows, Lippen, Kopfhaut Pigmentierung, Camouflage. Jetzt Termin buchen!"
          : "Коррекция перманентного макияжа в Мюнхене. 50% от стоимости первичной процедуры. Брови, губы, пигментация кожи головы, камуфляж. Запишитесь!"
      );
    }
  }, [language]);

  const services = [
    {
      name: t("touchupServiceBrows"),
      price: t("touchupServiceBrowsPrice"),
      link: `${langPrefix}/services-muenchen#brows`
    },
    {
      name: t("touchupServiceLips"),
      price: t("touchupServiceLipsPrice"),
      link: `${langPrefix}/services-muenchen#lips`
    },
    {
      name: t("touchupServiceScalp"),
      price: t("touchupServiceScalpPrice"),
      link: `${langPrefix}/kopfhaut-muenchen`
    },
    {
      name: t("touchupServiceCamouflage"),
      price: t("touchupServiceCamouflagePrice"),
      link: `${langPrefix}/camouflage-muenchen`
    },
  ];

  return (
    <div className="min-h-screen relative">
      <SEOHead
        titleDE="Nachkorrektur München | 50% vom Erstbehandlungspreis | PMU Korrektur"
        titleRU="Коррекция Мюнхен | 50% от первичной процедуры | Коррекция ПМУ"
        descriptionDE="Nachkorrektur für Permanent Make-up in München ✓ 50% vom Erstbehandlungspreis ✓ Powder Brows, Lippen, Kopfhaut, Camouflage ✓ 4-6 Wochen nach Erstbehandlung ✓ Jetzt Termin!"
        descriptionRU="Коррекция перманентного макияжа в Мюнхене ✓ 50% от стоимости ✓ Брови, губы, кожа головы, камуфляж ✓ Через 4-6 недель ✓ Запишитесь!"
        keywordsDE="Nachkorrektur München, PMU Korrektur München, Permanent Make-up Korrektur, Augenbrauen Korrektur München, Lippen Korrektur München"
        keywordsRU="Коррекция Мюнхен, Коррекция ПМУ Мюнхен, Коррекция перманентного макияжа, Коррекция бровей Мюнхен, Коррекция губ Мюнхен"
      />
      <StructuredData />

      <VideoBackground />
      <Navigation />

      <ServiceHero
        title={t("touchupTitle")}
        description={t("touchupPriceText")}
        backgroundImage="/24.jpg"
        compact={true}
      />

      <main className="relative z-10">

        {/* Main Content */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-pearl/30 to-background" />

          <div className="container max-w-4xl mx-auto relative z-10">
            <div className="bg-background/80 backdrop-blur-sm border border-charcoal/20 shadow-luxury p-6 sm:p-8 md:p-12 lg:p-16">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-accent/20" />
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-accent/20" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-accent/20" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-accent/20" />

              {/* Intro */}
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg text-foreground/90 leading-relaxed">
                  {t("touchupIntro")}
                </p>
              </div>

              {/* When is correction needed */}
              <div className="mb-12">
                <h2 className="font-serif text-2xl sm:text-3xl mb-6 text-accent">{t("touchupWhenTitle")}</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rotate-45 mt-2 flex-shrink-0" />
                    <span className="text-foreground/90">{t("touchupWhen1")}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rotate-45 mt-2 flex-shrink-0" />
                    <span className="text-foreground/90">{t("touchupWhen2")}</span>
                  </li>
                </ul>
              </div>

              {/* Important note */}
              <div className="mb-12 p-6 bg-accent/5 border border-accent/20">
                <h3 className="font-serif text-xl mb-3 text-accent">{t("touchupImportantTitle")}</h3>
                <p className="text-foreground/90">{t("touchupImportant")}</p>
              </div>

              {/* Prices for all services */}
              <div className="mb-12">
                <h2 className="font-serif text-2xl sm:text-3xl mb-8 text-accent">{t("touchupServicesTitle")}</h2>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <a
                      key={index}
                      href={service.link}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-charcoal/10 hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 group"
                    >
                      <span className="font-medium text-foreground group-hover:text-accent transition-colors">
                        {service.name}
                      </span>
                      <span className="text-accent font-serif text-lg mt-2 sm:mt-0">
                        {service.price}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Note about timing */}
              <div className="p-4 bg-charcoal/5 border-l-4 border-accent">
                <p className="text-sm text-foreground/80 italic">
                  {t("touchupNote")}
                </p>
              </div>

              {/* CTA */}
              <div className="pt-12 text-center border-t border-charcoal/20 mt-12">
                <p className="text-2xl sm:text-3xl font-serif mb-2 text-accent font-semibold">
                  {t("touchupPriceText")}
                </p>
                <p className="text-sm text-muted-foreground mb-8">{t("correctionNote")}</p>
                <a
                  href="https://wa.me/491779093936"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative px-6 sm:px-10 md:px-12 py-4 sm:py-5 bg-accent text-white font-sans text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.25em] uppercase shadow-luxury hover-lift overflow-hidden inline-block"
                >
                  <span className="relative z-10 font-semibold whitespace-nowrap">
                    {t("whatsappContact")}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-charcoal to-silver opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <RelatedServices currentService="nachkorrektur" />
      </main>

      <Footer />
    </div>
  );
};

export default Nachkorrektur;
