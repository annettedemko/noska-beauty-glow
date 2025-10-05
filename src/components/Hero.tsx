import { useLanguage } from "@/contexts/LanguageContext";

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Luxurious layered background with diamond pattern */}
      <div className="absolute inset-0">
        {/* Enhanced base gradient with depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFFEF9] via-[#FAF6F0] via-[#F5F0E8] to-[#F0E6D6]" />

        {/* Subtle texture overlay for richness */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        {/* Large elegant diamond pattern - logo inspired */}
        <div className="absolute inset-0 opacity-35">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              {/* Refined diamond pattern */}
              <pattern id="diamond-pattern" x="0" y="0" width="160" height="160" patternUnits="userSpaceOnUse">
                {/* Outer square frame - elegant */}
                <rect x="75" y="75" width="10" height="10" fill="none" stroke="rgba(218,165,32,0.15)" strokeWidth="0.5" />

                {/* Inner diamond - rotated square with gradient fill */}
                <rect x="76.5" y="76.5" width="7" height="7" fill="rgba(218,165,32,0.1)" stroke="rgba(218,165,32,0.18)" strokeWidth="0.5" transform="rotate(45 80 80)" />

                {/* Center accent */}
                <rect x="78.5" y="78.5" width="3" height="3" fill="rgba(218,165,32,0.25)" transform="rotate(45 80 80)" />

                {/* Subtle outer glow */}
                <rect x="73" y="73" width="14" height="14" fill="none" stroke="rgba(218,165,32,0.08)" strokeWidth="0.3" />
              </pattern>

              {/* Enhanced radial gradient for elegant dissolution */}
              <radialGradient id="diamond-fade" cx="50%" cy="42%" r="68%">
                <stop offset="0%" stopColor="white" stopOpacity="1"/>
                <stop offset="45%" stopColor="white" stopOpacity="0.8"/>
                <stop offset="70%" stopColor="white" stopOpacity="0.35"/>
                <stop offset="90%" stopColor="white" stopOpacity="0.1"/>
                <stop offset="100%" stopColor="white" stopOpacity="0"/>
              </radialGradient>

              <mask id="fade-mask">
                <rect width="100%" height="100%" fill="url(#diamond-fade)" />
              </mask>
            </defs>

            <rect width="100%" height="100%" fill="url(#diamond-pattern)" mask="url(#fade-mask)" />
          </svg>
        </div>

        {/* Multi-layer golden glow for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(218,165,32,0.12)_0%,rgba(218,165,32,0.06)_25%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(218,165,32,0.08)_0%,transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(194,154,108,0.06)_0%,transparent_35%)]" />

        {/* Shimmer layer for luxury effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gold/5 to-transparent opacity-30" />
      </div>

      {/* Enhanced vignette for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.01)_70%,rgba(0,0,0,0.04)_100%)]" />


      <div className="container relative z-10 px-6 py-32">
        <div className="max-w-6xl mx-auto text-center space-y-16">
          {/* Premium decorative top element */}
          <div className="flex items-center justify-center gap-6 opacity-70 animate-fade-in">
            <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-gold to-gold-dark" />
            <div className="relative">
              <div className="w-3 h-3 bg-gold rotate-45" />
              <div className="absolute inset-0 w-3 h-3 bg-gold rotate-45 animate-ping opacity-30" />
            </div>
            <div className="h-[2px] w-24 bg-gradient-to-l from-transparent via-gold-dark to-gold" />
          </div>

          {/* Main title - luxurious and refined */}
          <div className="space-y-6 animate-slide-up">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-[1.05] tracking-tight font-bold relative">
              <span className="block text-foreground relative">
                {t("heroTitle")}
                {/* Subtle text shadow for depth */}
                <span className="absolute inset-0 text-foreground/5 blur-sm">{t("heroTitle")}</span>
              </span>
              {/* Enhanced glow behind */}
              <div className="absolute inset-0 -z-10 bg-gradient-gold opacity-15 blur-3xl" />
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(218,165,32,0.2)_0%,transparent_70%)] blur-2xl" />
            </h1>

            {/* Elegant separator */}
            <div className="flex items-center justify-center gap-3 py-4">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-gold" />
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-gold rounded-full animate-pulse" style={{ animationDelay: '0s', animationDuration: '2s' }} />
                <div className="w-1 h-1 bg-gold rounded-full animate-pulse" style={{ animationDelay: '0.3s', animationDuration: '2s' }} />
                <div className="w-1 h-1 bg-gold rounded-full animate-pulse" style={{ animationDelay: '0.6s', animationDuration: '2s' }} />
              </div>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gold" />
            </div>
          </div>

          {/* Subtitle - clean and elegant */}
          <div className="relative inline-block animate-fade-in-delay">
            <p className="text-2xl md:text-4xl font-sans font-light tracking-[0.5em] uppercase">
              <span className="text-gradient-gold drop-shadow-sm">
                {t("heroSubtitle")}
              </span>
            </p>
            {/* Animated underline */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 h-[3px] w-40 bg-gradient-gold overflow-hidden">
              <div className="absolute inset-0 bg-white/40 animate-shimmer-fast" />
            </div>
          </div>

          {/* Premium CTA buttons with enhanced luxury */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center pt-16 animate-fade-in-delay-2">
            <a
              href="https://wa.me/491779093936"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-14 py-6 bg-gradient-gold text-foreground font-sans text-sm tracking-[0.3em] uppercase shadow-gold hover-lift overflow-hidden"
            >
              {/* Enhanced glow layers */}
              <div className="absolute -inset-1 bg-gradient-gold opacity-50 blur-lg group-hover:opacity-70 transition-opacity duration-500" />

              <span className="relative z-10 font-semibold flex items-center justify-center gap-3">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                {t("whatsappContact")}
              </span>

              <div className="absolute inset-0 bg-gradient-to-r from-gold-dark via-gold to-gold-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Enhanced shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/25 to-transparent" />

              {/* Subtle inner border */}
              <div className="absolute inset-[1px] border border-white/20 pointer-events-none" />
            </a>

            <a
              href="https://buchung.treatwell.de/ort/permanent-make-up-by-anastasia-noska/?utm_medium=partner-ecosystem&utm_campaign=partner-instagram&utm_content=book-now&fbclid=PARlRTSANHvkBleHRuA2FlbQIxMAABp1qQGFg8ck5Nj90Oz6-hBzpeoVFVtqhm3khdo7DOlAnK-Y6iNfV3VLczqRz4_aem_u5OjR9Br5NBX_q6yx0myKA"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-14 py-6 border-2 border-gold text-foreground font-sans text-sm tracking-[0.3em] uppercase hover-lift overflow-hidden bg-background/50 backdrop-blur-sm"
            >
              {/* Subtle outer glow on hover */}
              <div className="absolute -inset-1 bg-gradient-gold opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500" />

              <span className="relative z-10 font-semibold">{t("onlineBooking")}</span>

              <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Enhanced shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/35 to-transparent" />

              {/* Inner highlight */}
              <div className="absolute inset-[2px] border border-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </a>
          </div>

          {/* Premium decorative bottom element */}
          <div className="flex items-center justify-center gap-6 opacity-70 pt-16 animate-fade-in-delay-3">
            <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-gold to-gold-dark" />
            <div className="relative">
              <div className="w-3 h-3 bg-gold rotate-45" />
              <div className="absolute inset-0 w-3 h-3 bg-gold rotate-45 animate-ping opacity-30" />
            </div>
            <div className="h-[2px] w-24 bg-gradient-to-l from-transparent via-gold-dark to-gold" />
          </div>
        </div>
      </div>
    </section>
  );
};
