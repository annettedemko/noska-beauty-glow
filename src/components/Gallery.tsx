import { useLanguage } from "@/contexts/LanguageContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Gallery = () => {
  const { t } = useLanguage();

  // Gallery images - можно добавить больше по мере необходимости
  const galleryImages = [
    { src: "/4.jpg", alt: "Lippen" },
    { src: "/5.jpg", alt: "Augenbrauen" },
    { src: "/6.jpg", alt: "Lippen" },
    { src: "/7.jpg", alt: "Augenbrauen" },
  ];

  return (
    <section id="gallery" className="py-32 px-6 relative overflow-hidden">
      {/* Luxury background */}
      <div className="absolute inset-0 bg-gradient-to-b from-champagne/10 via-background to-champagne/10" />

      <div className="container max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24 space-y-8">
          {/* Decorative element */}
          <div className="flex items-center justify-center gap-4 opacity-60">
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-gold" />
            <div className="w-2 h-2 bg-gold rotate-45" />
            <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-gold" />
          </div>

          <h2 className="font-serif text-4xl md:text-6xl text-center tracking-wide font-bold">
            {t("galleryTitle")}
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Portfolio unserer Arbeiten
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {galleryImages.map((image, index) => (
              <CarouselItem key={index} className="pl-4 basis-full sm:basis-4/5 md:basis-1/2 lg:basis-1/3">
                <div className="group relative aspect-square overflow-hidden shadow-luxury">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Decorative frame that appears on hover */}
                  <div className="absolute inset-6 border-2 border-gold opacity-0 group-hover:opacity-100 transition-all duration-700 transform scale-90 group-hover:scale-100" />

                  {/* Decorative corners */}
                  <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gold/0 group-hover:border-gold/80 transition-all duration-500" />
                  <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-gold/0 group-hover:border-gold/80 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-gold/0 group-hover:border-gold/80 transition-all duration-500" />
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-gold/0 group-hover:border-gold/80 transition-all duration-500" />

                  {/* Caption overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white font-sans text-sm tracking-wider uppercase">{image.alt}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-background/95 border-gold/30 hover:bg-gold/20 hover:border-gold shadow-luxury" />
          <CarouselNext className="right-4 bg-background/95 border-gold/30 hover:bg-gold/20 hover:border-gold shadow-luxury" />
        </Carousel>

        {/* Bottom decorative element */}
        <div className="flex items-center justify-center gap-4 opacity-60 mt-24">
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-gold" />
          <div className="w-2 h-2 bg-gold rotate-45" />
          <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-gold" />
        </div>
      </div>
    </section>
  );
};
