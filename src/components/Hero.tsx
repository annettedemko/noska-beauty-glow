import { useLanguage } from "@/contexts/LanguageContext";

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Elegant monochrome background with subtle depth */}
      <div className="absolute inset-0">
        {/* Hero background video */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/16.jpg"
            className="w-full h-full object-cover object-top"
            style={{
              filter: 'grayscale(100%) contrast(1.3)',
            }}
          >
            <source src="/5.mp4" type="video/mp4" />
            {/* Fallback image if video doesn't load */}
            <img
              src="/16.jpg"
              alt="Hero Background"
              className="w-full h-full object-cover object-top"
            />
          </video>
        </div>

        {/* Gradient overlay - more transparent at bottom to show the important detail */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/20" />

        {/* Sophisticated grey marble veins effect */}
        <div className="absolute inset-0 opacity-[0.04]">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="fractal" x="0" y="0" width="100%" height="100%">
                <feTurbulence type="fractalNoise" baseFrequency="0.008" numOctaves="5" seed="7" />
                <feColorMatrix type="saturate" values="0"/>
              </filter>
            </defs>
            <rect width="100%" height="100%" filter="url(#fractal)" opacity="0.6" fill="#505050"/>
          </svg>
        </div>

        {/* Elegant flowing grey veins */}
        <div className="absolute inset-0">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="vein1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(100,100,100,0)" />
                <stop offset="50%" stopColor="rgba(120,120,120,0.12)" />
                <stop offset="100%" stopColor="rgba(100,100,100,0)" />
              </linearGradient>
              <linearGradient id="vein2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(80,80,80,0)" />
                <stop offset="50%" stopColor="rgba(90,90,90,0.10)" />
                <stop offset="100%" stopColor="rgba(80,80,80,0)" />
              </linearGradient>
              <linearGradient id="vein3" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor="rgba(70,70,70,0)" />
                <stop offset="50%" stopColor="rgba(85,85,85,0.08)" />
                <stop offset="100%" stopColor="rgba(70,70,70,0)" />
              </linearGradient>
            </defs>
            {/* Sophisticated diagonal flowing lines */}
            <path d="M-100,300 Q400,200 900,400 T1900,300" stroke="url(#vein1)" strokeWidth="90" fill="none" opacity="0.5" className="animate-pulse" style={{ animationDuration: '10s' }}/>
            <path d="M-200,600 Q300,500 800,700 T1800,600" stroke="url(#vein2)" strokeWidth="110" fill="none" opacity="0.45" className="animate-pulse" style={{ animationDuration: '12s', animationDelay: '3s' }}/>
            <path d="M200,-100 Q600,300 400,900" stroke="url(#vein3)" strokeWidth="75" fill="none" opacity="0.35" className="animate-pulse" style={{ animationDuration: '14s', animationDelay: '6s' }}/>
            <path d="M1200,-50 Q900,400 1100,900" stroke="url(#vein1)" strokeWidth="65" fill="none" opacity="0.3" className="animate-pulse" style={{ animationDuration: '11s', animationDelay: '2s' }}/>
          </svg>
        </div>

        {/* Radial light focus - center emphasis */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(245,245,245,0.15)_0%,transparent_55%)]" />

        {/* Subtle shimmer overlay for luxury feel */}
        <div className="absolute inset-0 opacity-25">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-slow" style={{ animationDuration: '18s' }}/>
        </div>

        {/* Fine texture for depth */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='5' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Premium vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.025)_100%)]" />


      <div className="container relative z-10 px-6 py-32">
        <div className="max-w-6xl mx-auto text-center space-y-20">
          {/* Ultra-premium decorative top element */}
          <div className="flex items-center justify-center gap-8 opacity-50 animate-fade-in">
            <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-muted-foreground/40 to-muted-foreground/60" />
            <div className="relative">
              <div className="w-3 h-3 bg-accent rotate-45" />
              <div className="absolute inset-0 w-3 h-3 bg-accent/30 rotate-45 animate-ping" style={{ animationDuration: '3s' }} />
            </div>
            <div className="h-[2px] w-32 bg-gradient-to-l from-transparent via-muted-foreground/40 to-muted-foreground/60" />
          </div>

          {/* Main title - ultimate elegance */}
          <div className="space-y-8 animate-slide-up">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[1.1] tracking-tight font-bold relative hyphens-none" style={{ fontFamily: "'Cormorant Garamond', serif", hyphens: 'none', wordBreak: 'keep-all', letterSpacing: '0.02em' }}>
              <span className="block relative">
                <span className="relative z-10 text-foreground">
                  {t("heroTitle")}
                </span>
              </span>
            </h1>

            {/* Exquisite separator */}
            <div className="flex items-center justify-center gap-4 py-6">
              <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent to-muted-foreground/40" />
              <div className="flex gap-1.5">
                <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0s', animationDuration: '2.5s' }} />
                <div className="w-1.5 h-1.5 bg-accent/70 rounded-full animate-pulse" style={{ animationDelay: '0.4s', animationDuration: '2.5s' }} />
                <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.8s', animationDuration: '2.5s' }} />
              </div>
              <div className="w-16 h-[1.5px] bg-gradient-to-l from-transparent to-muted-foreground/40" />
            </div>
          </div>

          {/* Subtitle - pure sophistication */}
          <div className="relative inline-block animate-fade-in-delay px-6">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-[0.25em] sm:tracking-[0.35em] md:tracking-[0.45em] lg:tracking-[0.65em] uppercase text-muted-foreground" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              {t("heroSubtitle")}
            </p>
            {/* Premium underline with animation */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-40 sm:w-56 h-[2px] overflow-hidden">
              <div className="h-full bg-gradient-to-r from-transparent via-accent/40 to-transparent">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shimmer" style={{ animationDuration: '4s' }} />
              </div>
            </div>
          </div>

          {/* Ultra-luxury CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-20 animate-fade-in-delay-2">
            <a
              href="https://wa.me/491779093936"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 sm:px-12 md:px-14 py-5 sm:py-6 bg-accent text-white text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] uppercase shadow-luxury hover-lift overflow-hidden transition-all duration-700"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {/* Animated glow */}
              <div className="absolute -inset-3 bg-accent/15 opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-700" />

              <span className="relative z-10 font-semibold flex items-center justify-center gap-3 sm:gap-4">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span className="whitespace-nowrap">{t("whatsappContact")}</span>
              </span>

              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Sweeping shine */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              {/* Border accent */}
              <div className="absolute inset-[1px] border border-white/10 pointer-events-none" />
            </a>

            <a
              href="https://buchung.treatwell.de/ort/permanent-make-up-by-anastasia-noska/?utm_medium=partner-ecosystem&utm_campaign=partner-instagram&utm_content=book-now&fbclid=PARlRTSANHvkBleHRuA2FlbQIxMAABp1qQGFg8ck5Nj90Oz6-hBzpeoVFVtqhm3khdo7DOlAnK-Y6iNfV3VLczqRz4_aem_u5OjR9Br5NBX_q6yx0myKA"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 sm:px-12 md:px-14 py-5 sm:py-6 border-2 border-accent/60 text-foreground text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] uppercase hover-lift overflow-hidden bg-white/60 backdrop-blur-sm transition-all duration-700"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {/* Outer glow on hover */}
              <div className="absolute -inset-3 bg-accent/15 opacity-0 group-hover:opacity-40 blur-2xl transition-opacity duration-700" />

              <span className="relative z-10 font-semibold whitespace-nowrap">{t("onlineBooking")}</span>

              {/* Fill on hover */}
              <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <span className="absolute inset-0 flex items-center justify-center font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 whitespace-nowrap">{t("onlineBooking")}</span>

              {/* Sweeping shine */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/30 to-transparent" />

              {/* Inner border */}
              <div className="absolute inset-[2px] border border-accent/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </a>
          </div>

          {/* Premium decorative bottom element */}
          <div className="flex items-center justify-center gap-8 opacity-50 pt-20 animate-fade-in-delay-3">
            <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-muted-foreground/40 to-muted-foreground/60" />
            <div className="relative">
              <div className="w-3 h-3 bg-accent rotate-45" />
              <div className="absolute inset-0 w-3 h-3 bg-accent/30 rotate-45 animate-ping" style={{ animationDuration: '3s' }} />
            </div>
            <div className="h-[2px] w-32 bg-gradient-to-l from-transparent via-muted-foreground/40 to-muted-foreground/60" />
          </div>
        </div>
      </div>
    </section>
  );
};
