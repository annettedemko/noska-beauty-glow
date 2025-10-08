import { useLanguage } from "@/contexts/LanguageContext";

export const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Luxury background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-pearl/20 to-background" />

      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24 space-y-8">
          {/* Decorative element */}
          <div className="flex items-center justify-center gap-4 opacity-60">
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-silver" />
            <div className="w-2 h-2 bg-silver rotate-45" />
            <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-silver" />
          </div>

          <h2 className="font-serif text-4xl md:text-6xl text-center tracking-wide font-bold">
            {t("contactTitle")}
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("contactSubtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact info */}
          <div className="space-y-8">
            <div className="group relative pl-8 py-6 bg-background/60 backdrop-blur-sm border border-silver/20 hover:border-silver/40 transition-all duration-500 shadow-luxury">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent" />
              <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-3">{t("contactAddress")}</p>
              <a
                href="https://maps.google.com/?q=Hildegardstr.+4+München"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xl font-serif hover:text-accent transition-colors"
              >
                {t("address")}
              </a>
            </div>

            <div className="group relative pl-8 py-6 bg-background/60 backdrop-blur-sm border border-silver/20 hover:border-silver/40 transition-all duration-500 shadow-luxury">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent" />
              <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-3">{t("contactWhatsapp")}</p>
              <a
                href="https://wa.me/491779093936"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xl font-serif hover:text-accent transition-colors"
              >
                +49 177 9093936
              </a>
            </div>

            <div className="group relative pl-8 py-6 bg-background/60 backdrop-blur-sm border border-silver/20 hover:border-silver/40 transition-all duration-500 shadow-luxury">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent" />
              <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-3">{t("contactEmail")}</p>
              <a
                href="mailto:noskaanastasia@gmail.com"
                className="block text-xl font-serif hover:text-accent transition-colors"
              >
                noskaanastasia@gmail.com
              </a>
            </div>

            <div className="group relative pl-8 py-6 bg-background/60 backdrop-blur-sm border border-silver/20 hover:border-silver/40 transition-all duration-500 shadow-luxury">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent" />
              <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-3">{t("instagram")}</p>
              <a
                href="https://instagram.com/anastasia__noska"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xl font-serif hover:text-accent transition-colors"
              >
                @anastasia__noska
              </a>
            </div>
          </div>

          {/* Booking section */}
          <div className="flex flex-col items-center justify-center space-y-8 bg-background/60 backdrop-blur-sm border border-silver/20 p-6 sm:p-8 md:p-12 shadow-luxury">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto border-2 border-silver flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-accent rotate-45" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide break-words px-2">
                {t("bookingTitle")}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground px-2">
                {t("bookingSubtitle")}
              </p>
            </div>

            <a
              href="https://buchung.treatwell.de/ort/permanent-make-up-by-anastasia-noska/?utm_medium=partner-ecosystem&utm_campaign=partner-instagram&utm_content=book-now&fbclid=PARlRTSANHvkBleHRuA2FlbQIxMAABp1qQGFg8ck5Nj90Oz6-hBzpeoVFVtqhm3khdo7DOlAnK-Y6iNfV3VLczqRz4_aem_u5OjR9Br5NBX_q6yx0myKA"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative px-6 sm:px-10 md:px-12 py-4 sm:py-5 bg-accent text-foreground font-sans text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.25em] uppercase shadow-luxury hover-lift overflow-hidden text-center w-full sm:w-auto"
            >
              <span className="relative z-10 font-semibold whitespace-nowrap">{t("treatwellButton")}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal to-silver opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
