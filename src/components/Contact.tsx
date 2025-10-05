import { useLanguage } from "@/contexts/LanguageContext";

export const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Luxury background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-champagne/10 to-background" />

      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24 space-y-8">
          {/* Decorative element */}
          <div className="flex items-center justify-center gap-4 opacity-60">
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-gold" />
            <div className="w-2 h-2 bg-gold rotate-45" />
            <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-gold" />
          </div>

          <h2 className="font-serif text-4xl md:text-6xl text-center tracking-wide font-bold">
            {t("contactTitle")}
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vereinbaren Sie einen Termin
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact info */}
          <div className="space-y-8">
            <div className="group relative pl-8 py-6 bg-background/60 backdrop-blur-sm border border-gold/20 hover:border-gold/40 transition-all duration-500 shadow-luxury">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-gold" />
              <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-3">Adresse</p>
              <a
                href="https://maps.google.com/?q=Hildegardstr.+4+München"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xl font-serif hover:text-gold transition-colors"
              >
                {t("address")}
              </a>
            </div>

            <div className="group relative pl-8 py-6 bg-background/60 backdrop-blur-sm border border-gold/20 hover:border-gold/40 transition-all duration-500 shadow-luxury">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-gold" />
              <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-3">WhatsApp</p>
              <a
                href="https://wa.me/491779093936"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xl font-serif hover:text-gold transition-colors"
              >
                +49 177 9093936
              </a>
            </div>

            <div className="group relative pl-8 py-6 bg-background/60 backdrop-blur-sm border border-gold/20 hover:border-gold/40 transition-all duration-500 shadow-luxury">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-gold" />
              <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-3">Email</p>
              <a
                href="mailto:noskaanastasia@gmail.com"
                className="block text-xl font-serif hover:text-gold transition-colors"
              >
                noskaanastasia@gmail.com
              </a>
            </div>

            <div className="group relative pl-8 py-6 bg-background/60 backdrop-blur-sm border border-gold/20 hover:border-gold/40 transition-all duration-500 shadow-luxury">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-gold" />
              <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-3">{t("instagram")}</p>
              <a
                href="https://instagram.com/anastasia__noska"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xl font-serif hover:text-gold transition-colors"
              >
                @anastasia__noska
              </a>
            </div>
          </div>

          {/* Booking section */}
          <div className="flex flex-col items-center justify-center space-y-8 bg-background/60 backdrop-blur-sm border border-gold/20 p-12 shadow-luxury">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto border-2 border-gold flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-gradient-gold rotate-45" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-semibold tracking-wide">
                Online Termin buchen
              </h3>
              <p className="text-muted-foreground">
                Buchen Sie Ihren Termin bequem über Treatwell
              </p>
            </div>

            <a
              href="https://buchung.treatwell.de/ort/permanent-make-up-by-anastasia-noska/?utm_medium=partner-ecosystem&utm_campaign=partner-instagram&utm_content=book-now&fbclid=PARlRTSANHvkBleHRuA2FlbQIxMAABp1qQGFg8ck5Nj90Oz6-hBzpeoVFVtqhm3khdo7DOlAnK-Y6iNfV3VLczqRz4_aem_u5OjR9Br5NBX_q6yx0myKA"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative px-12 py-5 bg-gradient-gold text-foreground font-sans text-sm tracking-[0.25em] uppercase shadow-gold hover-lift overflow-hidden"
            >
              <span className="relative z-10 font-semibold">{t("treatwellButton")}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-dark to-gold opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
