import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Contact = () => {
  const { t, language } = useLanguage();
  const { ref: contactRef, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden" ref={contactRef}>
      {/* Luxury background with animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-pearl/20 to-background" />

      {/* Animated particles for mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-champagne/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-pearl/5 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-24 space-y-8 reveal-animation ${isVisible ? 'is-visible' : ''}`}>
          {/* Decorative element with animation */}
          <div className="flex items-center justify-center gap-4 opacity-60 animate-in slide-in-from-top duration-700">
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-silver animate-shimmer" />
            <img src="/logo A.png" alt="Logo" className="w-6 h-6 object-contain animate-pulse" />
            <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-silver animate-shimmer" />
          </div>

          <h2 className="font-serif text-4xl md:text-6xl text-center tracking-wide font-bold animate-in fade-in slide-in-from-bottom duration-1000">
            {t("contactTitle")}
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            {t("contactSubtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact info */}
          <div className="space-y-8">
            <a
              href="https://maps.app.goo.gl/YZ6PrxGd7WPoXRKc8?g_st=ic"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block pl-8 py-6 bg-background/60 backdrop-blur-sm border border-silver/20 hover:border-accent/30 active:border-accent/50 transition-all duration-300 shadow-luxury hover:shadow-2xl animate-in slide-in-from-left duration-700 cursor-pointer"
            >
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent group-hover:w-[4px] group-active:w-[5px] transition-all duration-300" />
              <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-3">{t("contactTreatment")}</p>
              <p className="text-xl font-serif group-hover:text-accent group-active:text-accent transition-colors">
                {t("address")}
              </p>
              {/* Hover shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-accent/5 to-transparent transition-transform duration-1000 pointer-events-none" />
            </a>

            <div className="group relative pl-8 py-6 bg-background/60 backdrop-blur-sm border border-silver/20 hover:border-accent/30 transition-all duration-300 shadow-luxury hover:shadow-2xl animate-in slide-in-from-left duration-700 delay-50">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent group-hover:w-[4px] transition-all duration-300" />
              <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-3">{t("contactPostal")}</p>
              <p className="text-xl font-serif">
                {t("postalAddress")}
              </p>
              {/* Hover shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-accent/5 to-transparent transition-transform duration-1000 pointer-events-none" />
            </div>

            <a
              href="https://maps.app.goo.gl/YZ6PrxGd7WPoXRKc8?g_st=ic"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block pl-8 py-6 bg-background/60 backdrop-blur-sm border border-silver/20 hover:border-accent/30 active:border-accent/50 transition-all duration-300 shadow-luxury hover:shadow-2xl active:scale-[0.98] tap-feedback animate-in slide-in-from-left duration-700 delay-75 cursor-pointer"
            >
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent group-hover:w-[4px] group-active:w-[5px] transition-all duration-300" />
              <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-3">{t("contactParking")}</p>
              <p className="text-xl font-serif group-hover:text-accent group-active:text-accent transition-colors">
                {t("parkingText")}
              </p>
              {/* Hover shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-accent/5 to-transparent transition-transform duration-1000 pointer-events-none" />
            </a>

            <div className="group relative pl-8 pr-6 py-6 bg-background/60 backdrop-blur-sm border border-silver/20 hover:border-accent/30 active:border-accent/50 transition-all duration-500 shadow-luxury hover:shadow-2xl active:scale-[0.98] tap-feedback animate-in slide-in-from-left duration-700 delay-100">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent group-hover:w-[4px] group-active:w-[5px] transition-all duration-300" />
              <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-3">{t("contactWhatsapp")}</p>
              <a
                href="https://wa.me/491779093936"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xl font-serif hover:text-accent active:text-accent transition-colors mb-3"
              >
                +49 177 9093936
              </a>
              <p className="text-xs leading-relaxed text-muted-foreground/70">
                {language === "DE" ? (
                  <>
                    Mit Klick auf einen WhatsApp-Link auf dieser Website stimmen Sie der Verarbeitung personenbezogener Daten gemäß unserer{" "}
                    <a href="/datenschutz" className="underline hover:text-accent transition-colors">
                      Datenschutzerklärung
                    </a>{" "}
                    zu.
                  </>
                ) : (
                  <>
                    Нажимая на ссылку WhatsApp на этом сайте, вы соглашаетесь с обработкой персональных данных в соответствии с нашей{" "}
                    <a href="/ru/datenschutz" className="underline hover:text-accent transition-colors">
                      политикой конфиденциальности
                    </a>
                    .
                  </>
                )}
              </p>
              {/* Hover shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-accent/5 to-transparent transition-transform duration-1000 pointer-events-none" />
            </div>

            <div className="group relative pl-8 py-6 bg-background/60 backdrop-blur-sm border border-silver/20 hover:border-accent/30 active:border-accent/50 transition-all duration-500 shadow-luxury hover:shadow-2xl active:scale-[0.98] tap-feedback animate-in slide-in-from-left duration-700 delay-200">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent group-hover:w-[4px] group-active:w-[5px] transition-all duration-300" />
              <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-3">{t("contactEmail")}</p>
              <a
                href="mailto:noskaanastasia@gmail.com"
                className="block text-xl font-serif hover:text-accent active:text-accent transition-colors"
              >
                noskaanastasia@gmail.com
              </a>
              {/* Hover shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-accent/5 to-transparent transition-transform duration-1000 pointer-events-none" />
            </div>

          </div>

          {/* Instagram Gallery Preview */}
          <div className="flex flex-col items-center justify-center space-y-8 bg-background/60 backdrop-blur-sm border border-silver/20 p-6 sm:p-8 md:p-12 shadow-luxury hover:shadow-2xl hover:border-accent/30 transition-all duration-500 animate-in slide-in-from-right duration-700 delay-200">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-accent/20 opacity-0 animate-in fade-in duration-700 delay-500" />
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-accent/20 opacity-0 animate-in fade-in duration-700 delay-600" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-accent/20 opacity-0 animate-in fade-in duration-700 delay-700" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-accent/20 opacity-0 animate-in fade-in duration-700 delay-800" />

            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto flex items-center justify-center mb-6">
                <img src="/logo A.png" alt="Anastasia Noska Logo" className="w-full h-full object-contain animate-pulse" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide px-2" style={{ hyphens: 'none', wordBreak: 'keep-all' }}>
                {language === "DE" ? "Folgen Sie uns auf Instagram" : "Подписывайтесь на Instagram"}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground px-2" style={{ hyphens: 'none', wordBreak: 'keep-all' }}>
                {language === "DE" ? "Entdecken Sie unsere neuesten Arbeiten und Inspiration" : "Откройте для себя наши последние работы и вдохновение"}
              </p>
            </div>

            <a
              href="https://www.instagram.com/anastasia__noska?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative px-6 sm:px-10 md:px-12 py-4 sm:py-5 bg-accent text-foreground font-sans text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.25em] uppercase shadow-luxury hover-lift overflow-hidden text-center w-full sm:w-auto tap-feedback hover:scale-105 active:scale-95 transition-transform"
            >
              <span className="relative z-10 font-semibold whitespace-nowrap">{t("instagram")}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal to-silver opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
              {/* Shimmer effect on mobile */}
              <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full group-active:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
