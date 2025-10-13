import { useLanguage } from "@/contexts/LanguageContext";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Camouflage = () => {
  const { t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const minSwipeDistance = 50;

  const galleryImages = [
    { src: "/12.jpg", alt: "Camouflage Example 1" },
    { src: "/13.jpg", alt: "Camouflage Example 2" },
    { src: "/14.PNG", alt: "Camouflage Example 3" },
    { src: "/15.jpg", alt: "Camouflage Example 4" },
    { src: "/16.jpg", alt: "Camouflage Example 5" },
    { src: "/17.jpg", alt: "Camouflage Example 6" },
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
    document.title = "Narben Camouflage München - Permanent Make-up by Anastasia Noska";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professionelle Narben Camouflage in München. Kaschierung von Schwangerschaftsstreifen, OP-Narben und Hautveränderungen durch Permanent Make-up.");
    }
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Fixed background image */}
      <div className="fixed inset-0 z-0">
        <img
          src="/16.jpg"
          alt="Background"
          className="w-full h-full object-cover"
          style={{
            filter: "grayscale(100%) contrast(1.3)",
            opacity: 0.7,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/40 to-background/50" />
      </div>

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
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="aspect-[4/3] overflow-hidden shadow-luxury group cursor-pointer relative"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Zoom indicator */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full p-3">
                      <svg className="w-6 h-6 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
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

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 text-white hover:text-accent transition-colors p-2"
            aria-label="Close"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 z-50 text-white hover:text-accent transition-colors p-2"
            aria-label="Previous"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 z-50 text-white hover:text-accent transition-colors p-2"
            aria-label="Next"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image counter */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
            {lightboxIndex + 1} / {galleryImages.length}
          </div>

          {/* Image container */}
          <div
            className="relative max-w-7xl max-h-[90vh] mx-auto px-16"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onClick={closeLightbox}
          >
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin" />
              </div>
            )}
            <img
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              className={`max-w-full max-h-[90vh] object-contain transition-opacity duration-300 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Camouflage;
