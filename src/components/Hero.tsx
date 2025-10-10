import { useLanguage } from "@/contexts/LanguageContext";
import { useIsMobile } from "@/hooks/useIsMobile";

export const Hero = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        {/* Background based on device */}
        {isMobile ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/16.jpg"
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{
              filter: "grayscale(100%) contrast(1.3)",
            }}
          >
            <source src="/5.mp4" type="video/mp4" />
          </video>
        ) : (
          <img
            src="/16.jpg"
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover object-top"
            style={{
              filter: "grayscale(100%) contrast(1.3)",
            }}
          />
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/60 to-background/40 sm:from-background/80 sm:via-background/50 sm:to-background/30 md:from-background/70 md:via-background/40 md:to-background/20" />

        {/* Остальная графика, декоративные SVG и градиенты — оставляем как есть */}
        {/* ... */}
      </div>

      {/* Контент Hero: заголовок, подзаголовок, кнопки */}
      <div className="container relative z-10 px-4 pb-16 sm:px-6 sm:py-24 md:py-32 pt-36 md:pt-48 lg:pt-56 xl:pt-64">
        <div className="max-w-6xl mx-auto text-center space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-20">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-[1.1] tracking-tight font-bold relative hyphens-none" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            <span className="relative z-10 text-foreground">{t("heroTitle")}</span>
          </h1>

          <p className="text-base sm:text-lg md:text-2xl lg:text-3xl font-light tracking-[0.2em] sm:tracking-[0.35em] md:tracking-[0.45em] lg:tracking-[0.65em] uppercase text-muted-foreground" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            {t("heroSubtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-10 sm:pt-16 md:pt-20">
            <a
              href="https://wa.me/491779093936"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 bg-accent text-white uppercase tracking-widest font-semibold shadow-md hover:bg-accent/90"
            >
              {t("whatsappContact")}
            </a>

            <a
              href="https://buchung.treatwell.de/ort/permanent-make-up-by-anastasia-noska/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 border border-accent text-accent uppercase tracking-widest font-semibold hover:bg-accent hover:text-white"
            >
              {t("onlineBooking")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
