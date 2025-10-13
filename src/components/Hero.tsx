import { useLanguage } from "@/contexts/LanguageContext";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useEffect, useState, useRef } from "react";

export const Hero = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const [heroHeight, setHeroHeight] = useState("100vh");
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isMobile) {
      const vh = window.innerHeight;
      setHeroHeight(`${vh}px`);
    }
  }, [isMobile]);

  useEffect(() => {
    // Force video to play when component mounts
    if (videoRef.current && isMobile) {
      videoRef.current.load();
      videoRef.current.play().catch(err => {
        console.log("Video autoplay failed:", err);
      });
    }
  }, [isMobile]);

  return (
    <section
      className="relative overflow-hidden flex items-center justify-center h-screen"
      style={isMobile ? { height: heroHeight } : undefined}
    >
      {/* 🎥 Video (Mobile) / Image (Desktop) */}
      {isMobile ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/16.jpg"
          className="absolute left-0 w-full object-cover object-[center_25%]"
          style={{
            top: "-17%",
            height: "135%",
            filter: "grayscale(100%) contrast(1.3)",
            transform: "scale(1.3)",
            backfaceVisibility: "hidden",
            willChange: "transform",
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

      {/* 🌫️ Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/60 to-background/40 sm:from-background/80 sm:via-background/50 sm:to-background/30 md:from-background/70 md:via-background/40 md:to-background/20 z-10" />

      {/* 📝 Content */}
      <div className="container relative z-20 px-4 pb-16 sm:px-6 pt-36 sm:pt-44 md:pt-20 lg:pt-24 xl:pt-28">
        <div className="max-w-6xl mx-auto text-center space-y-8 sm:space-y-12 md:space-y-6 lg:space-y-8 xl:space-y-10">
          <h1
            className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-tight font-bold relative hyphens-none"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            <span className="relative z-10 text-foreground">{t("heroTitle")}</span>
          </h1>

          <p
            className="text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl font-light tracking-[0.2em] sm:tracking-[0.35em] md:tracking-[0.3em] lg:tracking-[0.35em] xl:tracking-[0.4em] uppercase text-muted-foreground"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {t("heroSubtitle")}
          </p>

          {/* 🔘 CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-10 sm:pt-16 md:pt-6 lg:pt-8 xl:pt-10">
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