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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const minSwipeDistance = 50;

  const galleryImages = [
    { src: "/19.jpg", alt: "Augenbrauen", category: "Augenbrauen" },
    { src: "/21.jpg", alt: "Augenbrauen", category: "Augenbrauen" },
    { src: "/22.jpg", alt: "Augenbrauen", category: "Augenbrauen" },
    { src: "/23.jpg", alt: "Augenbrauen", category: "Augenbrauen" },
    { src: "/7.jpg", alt: "Augenbrauen", category: "Augenbrauen" },
    { src: "/4.jpg", alt: "Lippen", category: "Lippen" },
    { src: "/5.jpg", alt: "Lippen", category: "Lippen" },
    { src: "/6.jpg", alt: "Lippen", category: "Lippen" },
    { src: "/24.jpg", alt: "Lippen", category: "Lippen" },
    { src: "/25.jpeg", alt: "Lippen", category: "Lippen" },
  ];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    setImageLoaded(false);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    setImageLoaded(false);
    setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setImageLoaded(false);
    setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      nextImage();
    }
    if (isRightSwipe) {
      prevImage();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

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
                  className="w-full h-full object-cover [transform:none] md:[transform:rotate(270deg)_scale(1.5)]"
                  style={{
                    filter: "grayscale(100%) contrast(1.3)",
                    opacity: 0.8,
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
          <section ref={lipsRef} id="lips" className="py-24 px-6 relative overflow-hidden scroll-mt-24 mb-16 min-h-screen">
            {/* Background image */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <div className="absolute inset-0">
                <img
                  src="/25.jpeg"
                  alt="Lips Background"
                  className="w-full h-full object-cover scale-110 md:scale-100"
                  style={{
                    filter: "grayscale(100%) contrast(1.3)",
                    opacity: 0.8,
                    objectPosition: "center",
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
                  {galleryImages.map((image, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 basis-[95%] sm:basis-[95%] md:basis-1/2 lg:basis-1/3">
                      <div
                        className="group relative aspect-square overflow-hidden shadow-luxury cursor-pointer"
                        onClick={() => openLightbox(index)}
                      >
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

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/98 backdrop-blur-sm flex items-center justify-center animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white/80 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all duration-300 z-50 group"
            aria-label="Close"
          >
            <svg className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation buttons - Hidden on mobile, visible on desktop */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="hidden md:flex absolute left-4 lg:left-8 w-12 h-12 lg:w-14 lg:h-14 items-center justify-center text-white/80 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all duration-300 z-50 group hover:scale-110"
            aria-label="Previous"
          >
            <svg className="w-6 h-6 lg:w-8 lg:h-8 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="hidden md:flex absolute right-4 lg:right-8 w-12 h-12 lg:w-14 lg:h-14 items-center justify-center text-white/80 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all duration-300 z-50 group hover:scale-110"
            aria-label="Next"
          >
            <svg className="w-6 h-6 lg:w-8 lg:h-8 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image container with swipe support */}
          <div
            className="w-full h-full flex items-center justify-center p-4 sm:p-8 md:p-12"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className="relative max-w-7xl max-h-full">
              {/* Loading spinner */}
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                </div>
              )}

              <img
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].alt}
                className={`max-w-full max-h-[85vh] sm:max-h-[80vh] object-contain rounded-lg shadow-2xl transition-all duration-500 cursor-pointer ${
                  imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                onLoad={() => setImageLoaded(true)}
                onClick={closeLightbox}
              />
            </div>
          </div>

          {/* Counter and category */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-50">
            <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full">
              <p className="text-white/90 text-sm font-light tracking-wide">
                {galleryImages[lightboxIndex].category}
              </p>
            </div>
            <div className="text-white/60 text-xs sm:text-sm font-light">
              {lightboxIndex + 1} / {galleryImages.length}
            </div>
          </div>

          {/* Swipe indicator for mobile */}
          <div className="md:hidden absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white/40 text-xs animate-pulse">
            ← Swipe to navigate →
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
