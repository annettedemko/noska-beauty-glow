import { useLanguage } from "@/contexts/LanguageContext";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { VideoBackground } from "@/components/VideoBackground";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Camouflage = () => {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = "Narben Camouflage München - Permanent Make-up by Anastasia Noska";

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professionelle Narben Camouflage in München. Kaschierung von Schwangerschaftsstreifen, OP-Narben und Hautveränderungen durch Permanent Make-up.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      {/* Luxury video background */}
      <VideoBackground />

      {/* Content */}
      <div className="relative z-10">
        <Navigation />

      <main className="pt-24">
        {/* Hero */}
        <section className="relative py-32 px-6 overflow-hidden">
          {/* Luxury background */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-champagne/10 to-background" />

          <div className="container max-w-6xl mx-auto relative z-10">
            {/* Decorative element */}
            <div className="flex items-center justify-center gap-4 opacity-60 mb-12">
              <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-silver" />
              <div className="w-2 h-2 bg-silver rotate-45" />
              <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-silver" />
            </div>

            <h1 className="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-center mb-8 tracking-wide font-bold break-words px-2">
              {t("camouflageTitle")}
            </h1>
            <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-12 tracking-wide text-muted-foreground max-w-3xl mx-auto px-4">
              {t("camouflageDesc")}
            </p>

            {/* Decorative element */}
            <div className="flex items-center justify-center gap-4 opacity-60">
              <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-silver" />
              <div className="w-2 h-2 bg-silver rotate-45" />
              <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-silver" />
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-12 px-6">
          <div className="container max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="aspect-[4/3] overflow-hidden shadow-luxury group">
                <img src="/12.jpg" alt="Camouflage Example 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="aspect-[4/3] overflow-hidden shadow-luxury group">
                <img src="/13.jpg" alt="Camouflage Example 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="aspect-[4/3] overflow-hidden shadow-luxury group">
                <img src="/14.PNG" alt="Camouflage Example 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="aspect-[4/3] overflow-hidden shadow-luxury group">
                <img src="/15.jpg" alt="Camouflage Example 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="aspect-[4/3] overflow-hidden shadow-luxury group">
                <img src="/16.jpg" alt="Camouflage Example 5" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="aspect-[4/3] overflow-hidden shadow-luxury group">
                <img src="/17.jpg" alt="Camouflage Example 6" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-pearl/20 to-background" />

          <div className="container max-w-4xl mx-auto relative z-10">
            <div className="bg-background/60 backdrop-blur-sm border border-charcoal/20 shadow-luxury p-6 sm:p-8 md:p-12 lg:p-16">
              <div className="space-y-8 text-base sm:text-lg font-light leading-relaxed">
                <div className="relative pl-8 py-4">
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent" />
                  <p className="text-foreground/90">
                    {t("camouflageIntro")}
                  </p>
                </div>

                <div className="pt-4">
                  <h3 className="font-serif text-2xl mb-6 text-accent">{t("camouflageSuitableTitle")}</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-charcoal rotate-45 mt-2 flex-shrink-0" />
                      <span>{t("camouflageSuitable1")}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-charcoal rotate-45 mt-2 flex-shrink-0" />
                      <span>{t("camouflageSuitable2")}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-charcoal rotate-45 mt-2 flex-shrink-0" />
                      <span>{t("camouflageSuitable3")}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-charcoal rotate-45 mt-2 flex-shrink-0" />
                      <span>{t("camouflageSuitable4")}</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-12 text-center border-t border-charcoal/20 mt-12">
                  <p className="text-2xl sm:text-3xl font-serif mb-8 text-accent font-semibold">{t("camouflagePrice")}</p>
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

export default Camouflage;
