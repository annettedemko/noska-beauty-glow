import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const About = () => {
  const { t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const minSwipeDistance = 50;

  const aboutImages = [
    { src: "/1.jpg", alt: "Anastasia Noska" },
    { src: "/2.jpg", alt: "Zertifikate" },
    { src: "/3.jpg", alt: "Schulungen" },
    { src: "/20.jpg", alt: "Schulungen" },
    { src: "/26.jpg", alt: "Zertifikate" },
    { src: "/27.jpg", alt: "Zertifikate" },
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
    setLightboxIndex((prev) => (prev + 1) % aboutImages.length);
  };

  const prevImage = () => {
    setImageLoaded(false);
    setLightboxIndex((prev) => (prev - 1 + aboutImages.length) % aboutImages.length);
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

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background to-pearl/30" />

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24 space-y-8">
          <div className="flex items-center justify-center gap-4 opacity-60">
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-silver" />
            <div className="w-2 h-2 bg-silver rotate-45" />
            <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-silver" />
          </div>

          <h2 className="font-serif text-4xl md:text-6xl text-center tracking-wide font-bold">
            {t("aboutTitle")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Left: Carousel only */}
          <div className="space-y-8">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {aboutImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div
                      className="relative aspect-[3/4] overflow-hidden shadow-luxury group cursor-pointer"
                      onClick={() => openLightbox(index)}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-4 border-2 border-silver/30 opacity-0 group-hover:opacity-100 transition-all duration-700" />

                      {/* Zoom indicator */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full p-3">
                          <svg className="w-6 h-6 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-background/95 border-silver/30 hover:bg-accent/20 hover:border-accent shadow-luxury" />
              <CarouselNext className="right-4 bg-background/95 border-silver/30 hover:bg-accent/20 hover:border-accent shadow-luxury" />
            </Carousel>
          </div>

          {/* Right: Full text preserved */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="group/text relative pl-8 py-4">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent" />
                <p className="text-lg md:text-xl font-light leading-relaxed text-foreground/90 group-hover/text:text-foreground transition-colors">
                  {t("aboutText1")}
                </p>
              </div>

              <div className="group/text relative pl-8 py-4">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent" />
                <p className="text-lg md:text-xl font-light leading-relaxed text-foreground/90 group-hover/text:text-foreground transition-colors">
                  {t("aboutText2")}
                </p>
              </div>

              <div className="group/text relative pl-8 py-4">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent" />
                <p className="text-lg md:text-xl font-light leading-relaxed text-foreground/90 group-hover/text:text-foreground transition-colors">
                  {t("aboutText3")}
                </p>
              </div>

              <div className="pt-8 border-t border-accent/20">
                <h3 className="font-serif text-2xl mb-6 text-accent font-semibold">{t("aboutSectionTitle1")}</h3>
                <div className="space-y-4">
                  <p className="text-base md:text-lg font-light leading-relaxed text-foreground/90">
                    {t("aboutPara1")}
                  </p>
                  <p className="text-base md:text-lg font-light leading-relaxed text-foreground/90">
                    {t("aboutPara2")}
                  </p>
                  <ul className="space-y-3 pl-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rotate-45 mt-2 flex-shrink-0" />
                      <span className="text-base md:text-lg font-light">{t("aboutService1")}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rotate-45 mt-2 flex-shrink-0" />
                      <span className="text-base md:text-lg font-light">{t("aboutService2")}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-8 border-t border-accent/20">
                <h3 className="font-serif text-2xl mb-4 text-accent font-semibold">{t("aboutSectionTitle2")}</h3>
                <p className="text-base md:text-lg font-light leading-relaxed text-foreground/90">
                  {t("aboutPara3")}
                </p>
              </div>

              <div className="pt-6">
                <p className="text-base md:text-lg font-light leading-relaxed text-foreground/90 italic">
                  {t("aboutPara4")}
                </p>
              </div>
            </div>
          </div>
        </div>
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
            onClick={(e) => e.stopPropagation()}
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
                src={aboutImages[lightboxIndex].src}
                alt={aboutImages[lightboxIndex].alt}
                className={`max-w-full max-h-[85vh] sm:max-h-[80vh] object-contain rounded-lg shadow-2xl transition-all duration-500 ${
                  imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                onLoad={() => setImageLoaded(true)}
              />
            </div>
          </div>

          {/* Counter */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-50">
            <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full">
              <p className="text-white/90 text-sm font-light tracking-wide">
                {aboutImages[lightboxIndex].alt}
              </p>
            </div>
            <div className="text-white/60 text-xs sm:text-sm font-light">
              {lightboxIndex + 1} / {aboutImages.length}
            </div>
          </div>

          {/* Swipe indicator for mobile */}
          <div className="md:hidden absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white/40 text-xs animate-pulse">
            ← Swipe to navigate →
          </div>
        </div>
      )}
    </section>
  );
};