import { useLanguage } from "@/contexts/LanguageContext";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Kopfhaut = () => {
  const { t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const minSwipeDistance = 50;

  const galleryImages = [
    { src: "/28.jpg", alt: "Kopfhaut Pigmentierung Example 1", mirrored: true },
    { src: "/9.jpg", alt: "Kopfhaut Pigmentierung Example 2", mirrored: false },
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
    document.title =
      "Kopfhaut Pigmentierung München - Trichopigmentierung by Anastasia Noska";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Kopfhautpigmentierung München: Professionelle Lösung bei Haarausfall und lichtem Haar. Trichopigmentierung von zertifizierter Spezialistin Anastasia Noska."
      );
    }
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* 🔳 Monochrome image background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/29.jpg"
            alt="Background"
            className="w-full h-full object-cover"
            style={{
              filter: "grayscale(100%) contrast(1.3)",
              opacity: 0.75,
            }}
          />
        </div>

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/20 to-background/30" />
      </div>

      <div className="relative z-10">
        <Navigation />

        <main className="pt-0">
          {/* 🩶 Hero Section with white semi-transparent overlay */}
          <section className="relative overflow-hidden">
            <div className="w-full bg-white/70 py-12 sm:py-16 md:py-20 lg:py-24">
              <div className="container max-w-6xl mx-auto relative z-10 pt-[10vh] sm:pt-[12vh] md:pt-[15vh] px-6">
                <h1 className="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-center mb-4 tracking-wide font-bold break-words px-2">
                  {t("scalpTitle")}
                </h1>
                <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-8 tracking-wide text-muted-foreground max-w-3xl mx-auto px-4">
                  {t("scalpDesc")}
                </p>
              </div>
            </div>
          </section>

          {/* 🖼️ Gallery Section */}
          <section className="pt-[8vh] sm:pt-[10vh] md:pt-[15vh] pb-12 px-6 mb-[8vh] sm:mb-[10vh] md:mb-[15vh]">
            <div className="container max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-[4/3] overflow-hidden shadow-luxury group cursor-pointer relative"
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                        image.mirrored ? 'scale-x-[-1]' : ''
                      }`}
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

          {/* 📖 Description Section */}
          <section className="pt-0 mt-16 pb-24 px-6 relative overflow-hidden">
            <div className="container max-w-4xl mx-auto relative z-10">
              <div className="bg-white/60 backdrop-blur-md border border-charcoal/20 shadow-luxury p-6 sm:p-8 md:p-12 lg:p-16">
                <div className="space-y-8 text-base sm:text-lg font-light leading-relaxed">
                  <div className="relative pl-8 py-4">
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent" />
                    <p className="text-foreground/90">{t("scalpIntro")}</p>
                  </div>

                  <div className="pt-4">
                    <h3 className="font-serif text-2xl mb-6 text-accent">
                      {t("scalpSuitableTitle")}
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-charcoal rotate-45 mt-2 flex-shrink-0" />
                        <span>{t("scalpSuitable1")}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-charcoal rotate-45 mt-2 flex-shrink-0" />
                        <span>{t("scalpSuitable2")}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-charcoal rotate-45 mt-2 flex-shrink-0" />
                        <span>{t("scalpSuitable3")}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-charcoal rotate-45 mt-2 flex-shrink-0" />
                        <span>{t("scalpSuitable4")}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-12 text-center border-t border-charcoal/20 mt-12">
                    <p className="text-2xl sm:text-3xl font-serif mb-8 text-accent font-semibold">
                      {t("scalpPrice")}
                    </p>
                    <a
                      href="https://buchung.treatwell.de/ort/permanent-make-up-by-anastasia-noska/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative px-6 sm:px-10 md:px-12 py-4 sm:py-5 bg-accent text-white font-sans text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.25em] uppercase shadow-luxury hover-lift overflow-hidden inline-block"
                    >
                      <span className="relative z-10 font-semibold whitespace-nowrap">
                        {t("bookNow")}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-charcoal to-silver opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 🔙 Back Link */}
          <section className="py-12 px-6 mt-[15vh] sm:mt-[20vh] md:mt-[30vh]">
            <div className="container max-w-4xl mx-auto text-center">
              <Link
                to="/"
                className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] hover:text-charcoal transition-colors duration-300"
              >
                <span className="transform group-hover:-translate-x-2 transition-transform duration-300">
                  ←
                </span>
                <span>{t("backToHome")}</span>
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      {/* Modern Lightbox Modal */}
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

          {/* Counter */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-50">
            <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full">
              <p className="text-white/90 text-sm font-light tracking-wide">
                Kopfhaut Pigmentierung
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

export default Kopfhaut;