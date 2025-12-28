import { useCookieConsent } from "@/contexts/CookieConsentContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

export const CookieBanner = () => {
  const { showBanner, acceptAll, acceptNecessary, openSettings } = useCookieConsent();
  const { language } = useLanguage();
  const langPrefix = language === "DE" ? "" : "/ru";

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom duration-500">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm" />

      <div className="relative container max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6 md:py-8">
        <div className="bg-background border-2 border-accent/30 shadow-2xl p-4 sm:p-6 md:p-8">
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent/50" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent/50" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent/50" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent/50" />

          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            {/* Content */}
            <div className="flex-1 space-y-3">
              <div className="flex items-start gap-3">
                <img src="/logo A.png" alt="Logo" className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-accent">
                    {language === "DE" ? "Cookie-Einstellungen" : "Настройки Cookie"}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                    {language === "DE" ? (
                      <>
                        Wir verwenden notwendige und optionale Cookies. Weitere Informationen finden Sie in unserer{" "}
                        <Link to={`${langPrefix}/datenschutz`} className="underline hover:text-accent transition-colors">
                          Datenschutzerklärung
                        </Link>.
                      </>
                    ) : (
                      <>
                        Мы используем необходимые и опциональные файлы cookie. Дополнительную информацию можно найти в нашей{" "}
                        <Link to={`${langPrefix}/datenschutz`} className="underline hover:text-accent transition-colors">
                          политике конфиденциальности
                        </Link>.
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full md:w-auto">
              <button
                onClick={acceptNecessary}
                className="px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 bg-background border border-silver/30 text-foreground font-sans text-[10px] sm:text-xs tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] uppercase hover:border-silver hover:bg-silver/10 transition-all duration-300"
              >
                {language === "DE" ? "Nur Notwendige" : "Только необходимые"}
              </button>

              <button
                onClick={openSettings}
                className="px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 bg-background border border-silver/30 text-foreground font-sans text-[10px] sm:text-xs tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] uppercase hover:border-silver hover:bg-silver/10 transition-all duration-300"
              >
                {language === "DE" ? "Einstellungen" : "Настройки"}
              </button>

              <button
                onClick={acceptAll}
                className="px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 bg-accent text-white font-sans text-[10px] sm:text-xs tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] uppercase shadow-luxury hover:bg-accent/90 transition-all duration-300"
              >
                {language === "DE" ? "Alle Akzeptieren" : "Принять все"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CookieSettings = () => {
  const { showSettings, closeSettings, acceptAll, acceptNecessary } = useCookieConsent();
  const { language } = useLanguage();
  const langPrefix = language === "DE" ? "" : "/ru";

  if (!showSettings) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-charcoal/90 backdrop-blur-sm" onClick={closeSettings} />

      {/* Modal */}
      <div className="relative bg-background border-2 border-accent/30 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300">
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent/50" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent/50" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent/50" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent/50" />

        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              <img src="/logo A.png" alt="Logo" className="w-6 h-6" />
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-accent">
                {language === "DE" ? "Cookie-Einstellungen" : "Настройки Cookie"}
              </h2>
            </div>
            <button
              onClick={closeSettings}
              className="p-2 hover:bg-silver/10 rounded transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {/* Necessary Cookies */}
            <div className="p-3 sm:p-4 border border-silver/20 bg-background/60">
              <div className="flex flex-col sm:flex-row items-start justify-between gap-3 mb-3">
                <div className="flex-1">
                  <h3 className="font-serif text-base sm:text-lg font-semibold mb-2">
                    {language === "DE" ? "Notwendige Cookies" : "Необходимые Cookie"}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {language === "DE"
                      ? "Diese Cookies sind für den Betrieb der Website erforderlich und können nicht deaktiviert werden. Sie speichern Ihre Cookie-Einstellungen und Sprachpräferenzen."
                      : "Эти файлы cookie необходимы для работы сайта и не могут быть отключены. Они сохраняют ваши настройки cookie и языковые предпочтения."}
                  </p>
                </div>
                <div className="ml-4">
                  <div className="px-3 py-1 bg-accent/20 text-accent text-xs uppercase tracking-wider">
                    {language === "DE" ? "Immer aktiv" : "Всегда активны"}
                  </div>
                </div>
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="p-3 sm:p-4 border border-silver/20 bg-background/60">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-serif text-base sm:text-lg font-semibold mb-2">
                    {language === "DE" ? "Analyse & Statistik" : "Аналитика и статистика"}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3">
                    {language === "DE"
                      ? "Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren. Wir verwenden Google Analytics, um anonymisierte Statistiken zu sammeln."
                      : "Эти файлы cookie помогают нам понять, как посетители взаимодействуют с нашим сайтом. Мы используем Google Analytics для сбора анонимизированной статистики."}
                  </p>
                  <div className="text-xs text-muted-foreground space-y-1">
                    <p>• Google Analytics (_ga, _gid)</p>
                    <p>• {language === "DE" ? "Anonymisierte IP-Adressen" : "Анонимизированные IP-адреса"}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy Link */}
            <div className="text-xs sm:text-sm text-center text-muted-foreground">
              {language === "DE" ? "Weitere Informationen in unserer " : "Дополнительная информация в нашей "}
              <Link to={`${langPrefix}/datenschutz`} className="underline hover:text-accent transition-colors">
                {language === "DE" ? "Datenschutzerklärung" : "политике конфиденциальности"}
              </Link>
              {language === "DE" ? " und " : " и "}
              <Link to={`${langPrefix}/impressum`} className="underline hover:text-accent transition-colors">
                Impressum
              </Link>.
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-6 sm:mt-8">
            <button
              onClick={acceptNecessary}
              className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 bg-background border border-silver/30 text-foreground font-sans text-[10px] sm:text-xs tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] uppercase hover:border-silver hover:bg-silver/10 transition-all duration-300"
            >
              {language === "DE" ? "Nur Notwendige" : "Только необходимые"}
            </button>

            <button
              onClick={acceptAll}
              className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 bg-accent text-white font-sans text-[10px] sm:text-xs tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] uppercase shadow-luxury hover:bg-accent/90 transition-all duration-300"
            >
              {language === "DE" ? "Alle Akzeptieren" : "Принять все"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
