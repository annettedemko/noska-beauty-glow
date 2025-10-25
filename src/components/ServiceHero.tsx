import { useLanguage } from "@/contexts/LanguageContext";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useEffect, useState } from "react";

interface ServiceHeroProps {
  title: string;
  description: string;
  backgroundImage: string;
  ctaButtons?: {
    whatsappLink?: string;
    bookingLink?: string;
  };
}

export const ServiceHero = ({
  title,
  description,
  backgroundImage,
  ctaButtons,
}: ServiceHeroProps) => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const [heroHeight, setHeroHeight] = useState("100vh");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (isMobile) {
      const vh = window.innerHeight;
      setHeroHeight(`${vh}px`);
    }
  }, [isMobile]);

  // Track scroll for fade out
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative overflow-hidden flex items-center justify-center"
      style={
        isMobile
          ? { height: heroHeight, minHeight: "100vh" }
          : { minHeight: "80vh" }
      }
    >
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{
          filter: isMobile
            ? "grayscale(100%) contrast(0.95) brightness(1.05)"
            : "grayscale(100%) contrast(1.3)",
        }}
      />

      {/* Gradient Overlay */}
      {isMobile ? (
        <div
          className="absolute inset-0 z-10"
          style={{
            background: `
              radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.6) 100%),
              linear-gradient(180deg, rgba(0,0,0,0.4) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.5) 100%)
            `,
          }}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/60 to-background/40 sm:from-background/80 sm:via-background/50 sm:to-background/30 md:from-background/70 md:via-background/40 md:to-background/20 z-10" />
      )}

      {/* Floating Particles - Mobile only */}
      {isMobile && (
        <div className="absolute inset-0 z-[11] pointer-events-none opacity-30">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/40 rounded-full animate-particle"
              style={{
                left: `${15 + i * 12}%`,
                bottom: 0,
                animationDuration: `${8 + i * 2}s`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="container relative z-20 px-4 pb-16 sm:px-6 pt-36 sm:pt-44 md:pt-28 lg:pt-32">
        <div className="max-w-6xl mx-auto text-center space-y-8 sm:space-y-12 md:space-y-6 lg:space-y-8">
          {/* Premium decorative element */}
          <div
            className="flex items-center justify-center gap-4 mb-8 animate-fade-in"
            style={{ opacity: isMobile ? 0.6 : 0.4 }}
          >
            <div
              className={`h-[1px] w-12 bg-gradient-to-r from-transparent to-transparent ${
                isMobile ? "via-white/60" : "via-foreground/30"
              }`}
            />
            <div
              className={`w-1 h-1 rounded-full ${
                isMobile ? "bg-white/60" : "bg-foreground/30"
              }`}
            />
            <div
              className={`h-[1px] w-12 bg-gradient-to-r from-transparent to-transparent ${
                isMobile ? "via-white/60" : "via-foreground/30"
              }`}
            />
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.1] tracking-[-0.02em] font-light relative hyphens-none animate-fade-in px-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              textShadow: isMobile
                ? `0 2px 10px rgba(0,0,0,0.5), 0 0 40px rgba(255,255,255,0.1), 0 4px 20px rgba(0,0,0,0.4)`
                : "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <span
              className={`relative z-10 drop-shadow-2xl ${
                isMobile ? "text-white" : "text-foreground"
              }`}
            >
              {title}
            </span>
          </h1>

          <p
            className={`text-sm sm:text-base md:text-lg lg:text-xl font-light tracking-wide max-w-3xl mx-auto relative animate-fade-in-delay px-6 ${
              isMobile ? "text-white/90" : "text-foreground/80"
            }`}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              textShadow: isMobile
                ? "0 2px 8px rgba(0,0,0,0.6)"
                : "0 1px 4px rgba(0,0,0,0.15)",
            }}
          >
            {description}
          </p>

          {/* Decorative line under description */}
          <div
            className="flex items-center justify-center gap-4 animate-fade-in-delay"
            style={{ opacity: isMobile ? 0.6 : 0.4 }}
          >
            <div
              className={`h-[1px] w-12 bg-gradient-to-r from-transparent to-transparent ${
                isMobile ? "via-white/60" : "via-foreground/30"
              }`}
            />
            <div
              className={`w-1 h-1 rounded-full ${
                isMobile ? "bg-white/60" : "bg-foreground/30"
              }`}
            />
            <div
              className={`h-[1px] w-12 bg-gradient-to-r from-transparent to-transparent ${
                isMobile ? "via-white/60" : "via-foreground/30"
              }`}
            />
          </div>

          {/* CTA Buttons */}
          {ctaButtons && (
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-4 sm:pt-8 animate-fade-in-delay-2">
              {/* WhatsApp Button */}
              {ctaButtons.whatsappLink && (
                <a
                  href={ctaButtons.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-8 py-4 overflow-hidden tap-feedback uppercase tracking-[0.2em] font-semibold text-sm transition-all duration-300"
                  style={{
                    background: isMobile
                      ? "rgba(255, 255, 255, 0.15)"
                      : "rgba(0, 0, 0, 0.4)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: isMobile
                      ? "1px solid rgba(255, 255, 255, 0.3)"
                      : "1px solid rgba(0, 0, 0, 0.3)",
                    boxShadow: isMobile
                      ? "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                      : "0 8px 32px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  {/* Shimmer effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-transparent to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ${
                      isMobile ? "via-white/20" : "via-foreground/10"
                    }`}
                  />

                  <span
                    className={`relative z-10 ${
                      isMobile ? "text-white" : "text-foreground"
                    }`}
                    style={
                      isMobile
                        ? { textShadow: "0 2px 4px rgba(0,0,0,0.3)" }
                        : { textShadow: "0 1px 2px rgba(0,0,0,0.1)" }
                    }
                  >
                    {t("whatsappContact")}
                  </span>
                </a>
              )}

              {/* Booking Button */}
              {ctaButtons.bookingLink && (
                <a
                  href={ctaButtons.bookingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-8 py-4 overflow-hidden tap-feedback uppercase tracking-[0.2em] font-semibold text-sm transition-all duration-300"
                  style={{
                    background: isMobile
                      ? "rgba(0, 0, 0, 0.3)"
                      : "rgba(255, 255, 255, 0.15)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: isMobile
                      ? "1px solid rgba(255, 255, 255, 0.4)"
                      : "1px solid rgba(0, 0, 0, 0.2)",
                    boxShadow: isMobile
                      ? "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                      : "0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  {/* Hover glow */}
                  <div
                    className={`absolute inset-0 transition-all duration-500 ${
                      isMobile
                        ? "bg-white/0 group-hover:bg-white/10"
                        : "bg-foreground/0 group-hover:bg-foreground/5"
                    }`}
                  />

                  <span
                    className={`relative z-10 ${
                      isMobile ? "text-white" : "text-foreground"
                    }`}
                    style={
                      isMobile
                        ? { textShadow: "0 2px 4px rgba(0,0,0,0.3)" }
                        : { textShadow: "0 1px 2px rgba(0,0,0,0.1)" }
                    }
                  >
                    {t("onlineBooking")}
                  </span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-0 right-0 z-20 flex justify-center animate-fade-in-delay-3"
        style={{
          opacity: scrollY > 100 ? 0 : 1,
          transition: "opacity 0.5s ease-out",
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <div
            className={`text-xs uppercase font-light ${
              isMobile ? "text-white/80" : "text-foreground/70"
            }`}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              textShadow: isMobile
                ? "0 2px 4px rgba(0,0,0,0.4)"
                : "0 1px 3px rgba(0,0,0,0.15)",
              letterSpacing: "0.2em",
              paddingRight: "0.2em",
            }}
          >
            Scroll
          </div>
          <div
            className={`w-[1px] h-12 bg-gradient-to-b via-transparent to-transparent ${
              isMobile ? "from-white/60" : "from-foreground/50"
            }`}
          />
        </div>
      </div>
    </section>
  );
};
