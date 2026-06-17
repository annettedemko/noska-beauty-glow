import { useLanguage } from "@/contexts/LanguageContext";
import { useCookieConsent } from "@/contexts/CookieConsentContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect } from "react";
import { Instagram } from "lucide-react";

const ELFSIGHT_APP_CLASS = "elfsight-app-6ddcdc19-739d-4012-860b-caedb4208377";
const ELFSIGHT_SCRIPT_SRC = "https://elfsightcdn.com/platform.js";

export const InstagramFeed = () => {
  const { t } = useLanguage();
  const { preferences, openSettings } = useCookieConsent();
  const { ref, isVisible } = useScrollAnimation(0.1);

  // The widget loads third-party content from Instagram. Consent is handled by
  // the single cookie window: it loads automatically once the visitor accepts
  // the analytics / external-content category — no separate consent prompt.
  const loaded = preferences.analytics;

  useEffect(() => {
    if (!loaded) return;
    // Skip during prerender
    if (typeof navigator !== "undefined" && navigator.userAgent.includes("HeadlessChrome")) {
      return;
    }
    if (document.querySelector(`script[src="${ELFSIGHT_SCRIPT_SRC}"]`)) return;

    // Speed up the third-party connection (only after consent).
    ["https://elfsightcdn.com", "https://static.elfsight.com", "https://core.service.elfsight.com"].forEach((href) => {
      const link = document.createElement("link");
      link.rel = "preconnect";
      link.href = href;
      link.crossOrigin = "anonymous";
      document.head.appendChild(link);
    });

    const script = document.createElement("script");
    script.src = ELFSIGHT_SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, [loaded]);

  return (
    <section id="instagram-feed" className="pt-12 pb-24 px-3 sm:px-6 relative overflow-hidden" ref={ref}>
      {/* Luxury background */}
      <div className="absolute inset-0 bg-gradient-to-b from-pearl/20 via-background to-pearl/20" />

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-champagne/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-pearl/5 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="container max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-10 space-y-6 reveal-animation ${isVisible ? "is-visible" : ""}`}>
          <div className="flex items-center justify-center gap-4 opacity-60">
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-silver animate-shimmer" />
            <div className="w-2 h-2 bg-silver rotate-45 animate-pulse" />
            <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-silver animate-shimmer" />
          </div>

          <h2 className="font-serif text-4xl md:text-6xl text-center tracking-wide font-bold">
            {t("instaTitle")}
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("instaSubtitle")}
          </p>
        </div>

        {/* Widget / consent placeholder */}
        {loaded ? (
          <div className="rounded-2xl overflow-hidden border border-silver/20 shadow-luxury bg-white">
            <div className={ELFSIGHT_APP_CLASS} />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center space-y-6 bg-background/60 backdrop-blur-sm border border-silver/20 p-8 sm:p-12 shadow-luxury max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
              <Instagram className="w-8 h-8 text-accent" />
            </div>
            <p className="text-sm sm:text-base text-muted-foreground max-w-md">
              {t("instaConsentText")}
            </p>
            <button
              onClick={openSettings}
              className="group/btn relative px-8 sm:px-10 py-4 bg-accent text-foreground font-sans text-xs sm:text-sm tracking-[0.2em] uppercase shadow-luxury hover-lift overflow-hidden tap-feedback hover:scale-105 active:scale-95 transition-transform"
            >
              <span className="relative z-10 font-semibold whitespace-nowrap">{t("instaLoadButton")}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal to-silver opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000" />
            </button>
          </div>
        )}

        {/* Bottom decorative element */}
        <div className="flex items-center justify-center gap-4 opacity-60 mt-12">
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-silver" />
          <div className="w-2 h-2 bg-silver rotate-45" />
          <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-silver" />
        </div>
      </div>
    </section>
  );
};
