import { useLanguage } from "@/contexts/LanguageContext";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { VideoBackground } from "@/components/VideoBackground";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Services = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const browsRef = useRef<HTMLElement>(null);
  const lipsRef = useRef<HTMLElement>(null);
  const touchupRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.title = "Permanent Make-up Services München - by Anastasia Noska";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Professionelle Permanent Make-up Services in München: Powder Brows, Aquarell Lippen, Nachkorrekturen. Premium Qualität von Anastasia Noska."
      );
    }

    // Scroll to section based on hash
    const hash = location.hash;
    if (hash === '#brows' && browsRef.current) {
      setTimeout(() => browsRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
    } else if (hash === '#lips' && lipsRef.current) {
      setTimeout(() => lipsRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
    } else if (hash === '#touchup' && touchupRef.current) {
      setTimeout(() => touchupRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
    }
  }, [location]);

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
                {t("servicesPageTitle")}
              </h1>
              <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-12 tracking-wide text-muted-foreground max-w-3xl mx-auto px-4">
                {t("servicesPageDesc")}
              </p>

              {/* Decorative element */}
              <div className="flex items-center justify-center gap-4 opacity-60">
                <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-silver" />
                <div className="w-2 h-2 bg-silver rotate-45" />
                <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-silver" />
              </div>
            </div>
          </section>

          {/* 👁️ Powder / Ombre Brows */}
          <section ref={browsRef} id="brows" className="py-24 px-6 relative overflow-hidden scroll-mt-24 mb-16 min-h-screen">
            {/* Background image */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <div className="absolute inset-0">
                <img
                  src="/23.jpg"
                  alt="Brows Background"
                  className="w-full h-full object-cover md:object-cover"
                  style={{
                    filter: "grayscale(100%) contrast(1.3)",
                    opacity: 0.8,
                    transform: "rotate(270deg) scale(1.5)",
                    objectPosition: "center",
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/40 to-background/50" />
            </div>

            <div className="container max-w-4xl mx-auto relative z-10">
              <div className="bg-background/60 backdrop-blur-sm border border-charcoal/20 shadow-luxury p-6 sm:p-8 md:p-12 lg:p-16">
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-center mb-8 text-accent font-bold">
                  {t("browsTitle")}
                </h2>

                <div className="space-y-8 text-base sm:text-lg font-light leading-relaxed">
                  <div className="relative pl-8 py-4">
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent" />
                    <p className="text-foreground/90">
                      {t("browsIntro")}
                    </p>
                  </div>

                  <div className="pt-4">
                    <h3 className="font-serif text-2xl mb-6 text-accent">{t("browsTechniquesTitle")}</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-charcoal rotate-45 mt-2 flex-shrink-0" />
                        <div>
                          <strong>{t("browsOmbre")}:</strong> {t("browsOmbreDesc")}
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-charcoal rotate-45 mt-2 flex-shrink-0" />
                        <div>
                          <strong>{t("browsPowder")}:</strong> {t("browsPowderDesc")}
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4">
                    <h3 className="font-serif text-2xl mb-6 text-accent">{t("browsAdvantagesTitle")}</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-charcoal rotate-45 mt-2 flex-shrink-0" />
                        <span>{t("browsAdv1")}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-charcoal rotate-45 mt-2 flex-shrink-0" />
                        <span>{t("browsAdv2")}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-charcoal rotate-45 mt-2 flex-shrink-0" />
                        <span>{t("browsAdv3")}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-12 text-center border-t border-charcoal/20 mt-12">
                    <p className="text-2xl sm:text-3xl font-serif mb-8 text-accent font-semibold">{t("browsPrice")}</p>
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

          {/* 💋 Aquarell / Velvet / Ombre Lippen */}
          <section ref={lipsRef} id="lips" className="py-24 px-6 relative overflow-hidden scroll-mt-24 mb-16">
            {/* Background image */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <div className="absolute inset-0">
                <img
                  src="/25.jpg"
                  alt="Lips Background"
                  className="w-full h-full object-cover"
                  style={{
                    filter: "grayscale(100%) contrast(1.3)",
                    opacity: 0.8,
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/40 to-background/50" />
            </div>

            <div className="container max-w-4xl mx-auto relative z-10">
              <div className="bg-background/60 backdrop-blur-sm border border-charcoal/20 shadow-luxury p-6 sm:p-8 md:p-12 lg:p-16">
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-center mb-8 text-accent font-bold">
                  {t("lipsTitle")}
                </h2>

                <div className="space-y-8 text-base sm:text-lg font-light leading-relaxed">
                  <div className="relative pl-8 py-4">
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent" />
                    <p className="text-foreground/90">
                      {t("lipsIntro")}
                    </p>
                  </div>

                  <div className="pt-4">
                    <h3 className="font-serif text-2xl mb-6 text-accent">{t("lipsTechniquesTitle")}</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-charcoal rotate-45 mt-2 flex-shrink-0" />
                        <div>
                          <strong>{t("lipsAquarell")}:</strong> {t("lipsAquarellDesc")}
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-charcoal rotate-45 mt-2 flex-shrink-0" />
                        <div>
                          <strong>{t("lipsVelvet")}:</strong> {t("lipsVelvetDesc")}
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-charcoal rotate-45 mt-2 flex-shrink-0" />
                        <div>
                          <strong>{t("lipsOmbre")}:</strong> {t("lipsOmbreDesc")}
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4">
                    <h3 className="font-serif text-2xl mb-6 text-accent">{t("lipsAdvantagesTitle")}</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-charcoal rotate-45 mt-2 flex-shrink-0" />
                        <span>{t("lipsAdv1")}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-charcoal rotate-45 mt-2 flex-shrink-0" />
                        <span>{t("lipsAdv2")}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-charcoal rotate-45 mt-2 flex-shrink-0" />
                        <span>{t("lipsAdv3")}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-12 text-center border-t border-charcoal/20 mt-12">
                    <p className="text-2xl sm:text-3xl font-serif mb-8 text-accent font-semibold">{t("lipsPrice")}</p>
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

          {/* 🔄 Nachkorrektur */}
          <section ref={touchupRef} id="touchup" className="py-24 px-6 relative overflow-hidden scroll-mt-24">
            {/* Background image */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <div className="absolute inset-0">
                <img
                  src="/5.jpg"
                  alt="Touchup Background"
                  className="w-full h-full object-cover"
                  style={{
                    filter: "grayscale(100%) contrast(1.3)",
                    opacity: 0.8,
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/40 to-background/50" />
            </div>

            <div className="container max-w-4xl mx-auto relative z-10">
              <div className="bg-background/60 backdrop-blur-sm border border-charcoal/20 shadow-luxury p-6 sm:p-8 md:p-12 lg:p-16">
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-center mb-8 text-accent font-bold">
                  {t("touchupTitle")}
                </h2>

                <div className="space-y-8 text-base sm:text-lg font-light leading-relaxed">
                  <div className="relative pl-8 py-4">
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent" />
                    <p className="text-foreground/90">
                      {t("touchupIntro")}
                    </p>
                  </div>

                  <div className="pt-4">
                    <h3 className="font-serif text-2xl mb-6 text-accent">{t("touchupWhenTitle")}</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-charcoal rotate-45 mt-2 flex-shrink-0" />
                        <span>{t("touchupWhen1")}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-charcoal rotate-45 mt-2 flex-shrink-0" />
                        <span>{t("touchupWhen2")}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-charcoal rotate-45 mt-2 flex-shrink-0" />
                        <span>{t("touchupWhen3")}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4">
                    <h3 className="font-serif text-2xl mb-6 text-accent">{t("touchupImportantTitle")}</h3>
                    <p className="text-foreground/90">{t("touchupImportant")}</p>
                  </div>

                  <div className="pt-12 text-center border-t border-charcoal/20 mt-12">
                    <p className="text-2xl sm:text-3xl font-serif mb-8 text-accent font-semibold">{t("touchupPriceText")}</p>
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

          {/* Gallery Carousel */}
          <section className="py-32 px-6 relative overflow-hidden">
            {/* Luxury background */}
            <div className="absolute inset-0 bg-gradient-to-b from-pearl/20 via-background to-pearl/20" />

            <div className="container max-w-7xl mx-auto relative z-10">
              {/* Section Header */}
              <div className="text-center mb-24 space-y-8">
                {/* Decorative element */}
                <div className="flex items-center justify-center gap-4 opacity-60">
                  <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-silver" />
                  <div className="w-2 h-2 bg-silver rotate-45" />
                  <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-silver" />
                </div>

                <h2 className="font-serif text-4xl md:text-6xl text-center tracking-wide font-bold">
                  {t("galleryTitle")}
                </h2>

                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {t("gallerySubtitle")}
                </p>
              </div>

              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {[
                    { src: "/19.jpg", alt: "Augenbrauen", category: "Augenbrauen" },
                    { src: "/21.jpg", alt: "Augenbrauen", category: "Augenbrauen" },
                    { src: "/22.jpg", alt: "Augenbrauen", category: "Augenbrauen" },
                    { src: "/23.jpg", alt: "Augenbrauen", category: "Augenbrauen" },
                    { src: "/7.jpg", alt: "Augenbrauen", category: "Augenbrauen" },
                    { src: "/4.jpg", alt: "Lippen", category: "Lippen" },
                    { src: "/5.jpg", alt: "Lippen", category: "Lippen" },
                    { src: "/6.jpg", alt: "Lippen", category: "Lippen" },
                    { src: "/24.jpg", alt: "Lippen", category: "Lippen" },
                    { src: "/25.jpg", alt: "Lippen", category: "Lippen" },
                  ].map((image, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 basis-[95%] sm:basis-[95%] md:basis-1/2 lg:basis-1/3">
                      <div className="group relative aspect-square overflow-hidden shadow-luxury cursor-pointer">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Decorative frame that appears on hover */}
                        <div className="absolute inset-6 border-2 border-silver opacity-0 group-hover:opacity-100 transition-all duration-700 transform scale-90 group-hover:scale-100" />

                        {/* Decorative corners */}
                        <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-silver/0 group-hover:border-silver/80 transition-all duration-500" />
                        <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-silver/0 group-hover:border-silver/80 transition-all duration-500" />
                        <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-silver/0 group-hover:border-silver/80 transition-all duration-500" />
                        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-silver/0 group-hover:border-silver/80 transition-all duration-500" />

                        {/* Caption overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                          <p className="text-white font-sans text-sm tracking-wider uppercase">{image.category}</p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 bg-background/95 border-silver/30 hover:bg-accent/20 hover:border-accent shadow-luxury" />
                <CarouselNext className="right-4 bg-background/95 border-silver/30 hover:bg-accent/20 hover:border-accent shadow-luxury" />
              </Carousel>

              {/* Bottom decorative element */}
              <div className="flex items-center justify-center gap-4 opacity-60 mt-24">
                <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-silver" />
                <div className="w-2 h-2 bg-silver rotate-45" />
                <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-silver" />
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

export default Services;
