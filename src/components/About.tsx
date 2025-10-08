import { useLanguage } from "@/contexts/LanguageContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const About = () => {
  const { t } = useLanguage();

  const aboutImages = [
    { src: "/1.jpg", alt: "Anastasia Noska" },
    { src: "/2.jpg", alt: "Zertifikate" },
    { src: "/3.jpg", alt: "Schulungen" },
    { src: "/20.jpg", alt: "Studio" },
  ];

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-pearl/30" />

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
            {t("aboutTitle")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Left: Photo carousel */}
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
                    <div className="relative aspect-[3/4] overflow-hidden shadow-luxury group">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Decorative frame */}
                      <div className="absolute inset-4 border-2 border-silver/30 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-background/95 border-silver/30 hover:bg-accent/20 hover:border-accent shadow-luxury" />
              <CarouselNext className="right-4 bg-background/95 border-silver/30 hover:bg-accent/20 hover:border-accent shadow-luxury" />
            </Carousel>
          </div>

          {/* Right: Text */}
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
    </section>
  );
};
