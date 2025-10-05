import { useLanguage } from "@/contexts/LanguageContext";

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-champagne/20" />

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
            {t("aboutTitle")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Left: Photo with master */}
          <div className="space-y-8 group">
            <div className="relative aspect-[3/4] overflow-hidden shadow-luxury">
              <img
                src="/1.jpg"
                alt="Anastasia Noska"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Decorative frame */}
              <div className="absolute inset-4 border-2 border-gold/30 opacity-0 group-hover:opacity-100 transition-all duration-700" />
            </div>
          </div>

          {/* Right: Text + Photo with certificates */}
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="group/text relative pl-8 py-4">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-gold" />
                <p className="text-lg md:text-xl font-light leading-relaxed text-foreground/90 group-hover/text:text-foreground transition-colors">
                  {t("aboutText1")}
                </p>
              </div>

              <div className="group/text relative pl-8 py-4">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-gold" />
                <p className="text-lg md:text-xl font-light leading-relaxed text-foreground/90 group-hover/text:text-foreground transition-colors">
                  {t("aboutText2")}
                </p>
              </div>

              <div className="group/text relative pl-8 py-4">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-gold" />
                <p className="text-lg md:text-xl font-light leading-relaxed text-foreground/90 group-hover/text:text-foreground transition-colors">
                  {t("aboutText3")}
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden shadow-luxury group/cert">
              <img
                src="/2.jpg"
                alt="Certificates"
                className="w-full h-full object-cover object-[center_30%] transition-transform duration-700 group-hover/cert:scale-105"
              />

              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold/60" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold/60" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold/60" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold/60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
