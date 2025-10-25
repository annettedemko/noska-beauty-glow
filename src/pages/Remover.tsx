import { useLanguage } from "@/contexts/LanguageContext";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ServiceHero } from "@/components/ServiceHero";
import { VideoBackground } from "@/components/VideoBackground";
import { SEOHead } from "@/components/SEOHead";
import { RelatedServices } from "@/components/RelatedServices";
import { StructuredData } from "@/components/StructuredData";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Remover = () => {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = "Pigmententfernung mit Remover München - by Anastasia Noska";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Schonende Pigmententfernung ohne Laser in München. Professionelle Entfernung von Permanent Make-up mit Remover-Methode."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      <SEOHead
        titleDE="PMU Remover München - Permanent Make-up entfernen ohne Laser | Anastasia Noska"
        titleRU="Ремувер ПМУ Мюнхен - удаление перманентного макияжа без лазера | Анастасия Носка"
        descriptionDE="Schonende Entfernung von Permanent Make-up mit Remover ohne Laser in München. Korrektur von unerwünschten PMU-Pigmenten. Preis auf Anfrage. Termin bei Anastasia Noska buchen."
        descriptionRU="Щадящее удаление перманентного макияжа ремувером без лазера в Мюнхене. Коррекция нежелательных пигментов ПМУ. Цена по запросу. Записаться к Анастасии Носка."
        keywordsDE="Remover München, PMU entfernen München, Permanent Make-up entfernen München, PMU Korrektur München, Remover ohne Laser München, Pigmententfernung München"
        keywordsRU="Ремувер Мюнхен, Удаление ПМУ Мюнхен, Удаление перманентного макияжа Мюнхен, Коррекция ПМУ Мюнхен, Ремувер без лазера Мюнхен, Удаление пигмента Мюнхен"
      />

      {/* Luxury video background */}
      <VideoBackground />

      {/* Content */}
      <div className="relative z-10">
        <Navigation />

        <main className="pt-0">
          {/* Hero Section */}
          <ServiceHero
            title={t("removerTitle")}
            description={t("removerDesc")}
            backgroundImage="/19.jpg"
            ctaButtons={{
              whatsappLink: "https://wa.me/491779093936",
              bookingLink: "https://buchung.treatwell.de/ort/permanent-make-up-by-anastasia-noska/",
            }}
          />

          {/* Description */}
          <section className="py-24 px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-pearl/20 to-background" />

            <div className="container max-w-4xl mx-auto relative z-10">
              <div className="bg-background/60 backdrop-blur-sm border border-charcoal/20 shadow-luxury p-6 sm:p-8 md:p-12 lg:p-16">
                <div className="space-y-8 text-base sm:text-lg font-light leading-relaxed">
                  <div className="relative pl-8 py-4">
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent" />
                    <p className="text-foreground/90">
                      {t("removerIntro")}
                    </p>
                  </div>

                  <div className="pt-4">
                    <h3 className="font-serif text-2xl mb-6 text-accent flex items-center gap-3">
                      <span>🌿</span>
                      <span>{t("removerHowTitle")}</span>
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-charcoal rotate-45 mt-2 flex-shrink-0" />
                        <span>{t("removerHow1")}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-charcoal rotate-45 mt-2 flex-shrink-0" />
                        <span>{t("removerHow2")}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-charcoal rotate-45 mt-2 flex-shrink-0" />
                        <span>{t("removerHow3")}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-8">
                    <h3 className="font-serif text-2xl mb-6 text-accent">{t("removerSessionsTitle")}</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-charcoal rotate-45 mt-2 flex-shrink-0" />
                        <span>{t("removerSessions1")}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-charcoal rotate-45 mt-2 flex-shrink-0" />
                        <span>{t("removerSessions2")}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-12 text-center border-t border-charcoal/20 mt-12">
                    <p className="text-2xl sm:text-3xl font-serif mb-8 text-accent font-semibold">{t("removerPrice")}</p>
                    <a
                      href="https://buchung.treatwell.de/ort/permanent-make-up-by-anastasia-noska/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative px-6 sm:px-10 md:px-12 py-4 sm:py-5 bg-accent text-white font-sans text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.25em] uppercase shadow-luxury hover-lift overflow-hidden inline-block"
                    >
                      <span className="relative z-10 font-semibold whitespace-nowrap">{t("bookNow")}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-charcoal to-silver opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Back Link */}
          <section className="py-12 px-6">
            <div className="container max-w-4xl mx-auto text-center">
              <Link
                to="/"
                className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] hover:text-charcoal transition-colors duration-300"
              >
                <span className="transform group-hover:-translate-x-2 transition-transform duration-300">←</span>
                <span>{t("backToHome")}</span>
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Remover;
