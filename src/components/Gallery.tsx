import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Gallery = () => {
  const { t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const minSwipeDistance = 50;

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

  // Gallery images - акцент на Trichopigmentierung и камуфляж шрамов (первые в списке!)
  const galleryImages = [
    // Trichopigmentierung - ГЛАВНОЕ!
    { src: "/9.jpg", alt: "Kopfhaut Pigmentierung", category: "Trichopigmentierung" },
    { src: "/8.jpg", alt: "Kopfhaut Pigmentierung", category: "Trichopigmentierung" },
    { src: "/28.jpg", alt: "Kopfhaut Pigmentierung", category: "Trichopigmentierung" },
    // Камуфляж шрамов - ГЛАВНОЕ!
    { src: "/14.PNG", alt: "Narben Camouflage", category: "Camouflage" },
    { src: "/15.jpg", alt: "Narben Camouflage", category: "Camouflage" },
    // Брови
    { src: "/19.jpg", alt: "Augenbrauen", category: "Augenbrauen" },
    { src: "/21.jpg", alt: "Augenbrauen", category: "Augenbrauen" },
    { src: "/22.jpg", alt: "Augenbrauen", category: "Augenbrauen" },
    { src: "/23.jpg", alt: "Augenbrauen", category: "Augenbrauen" },
    { src: "/7.jpg", alt: "Augenbrauen", category: "Augenbrauen" },
    // Губы
    { src: "/4.jpg", alt: "Lippen", category: "Lippen" },
    { src: "/5.jpg", alt: "Lippen", category: "Lippen" },
    { src: "/6.jpg", alt: "Lippen", category: "Lippen" },
    { src: "/24.jpg", alt: "Lippen", category: "Lippen" },
    { src: "/25.jpeg", alt: "Lippen", category: "Lippen" },
  ];

  return (
    <section id="gallery" className="py-32 px-6 relative overflow-hidden">
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
          <CarouselContent className="-ml-1 md:-ml-4">
            {galleryImages.map((image, index) => (
              <CarouselItem key={index} className="pl-1 md:pl-4 basis-[98%] sm:basis-[98%] md:basis-1/2 lg:basis-1/3">
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
                onClick={(e) => {
                  e.stopPropagation();
                  closeLightbox();
                }}
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
    </section>
  );
};
