import { useLanguage } from "@/contexts/LanguageContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    { text: t("testimonial1") },
    { text: t("testimonial2") },
    { text: t("testimonial3") },
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="container max-w-5xl mx-auto">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl text-center mb-20 tracking-[0.05em] sm:tracking-[0.1em] md:tracking-[0.2em] uppercase break-words px-2">
          {t("testimonialsTitle")}
        </h2>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-8 border border-accent h-full flex items-center justify-center">
                  <p className="text-center text-lg md:text-xl font-light leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};
