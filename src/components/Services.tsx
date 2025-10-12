import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

export const Services = () => {
  const { t } = useLanguage();

  const services = [
    // ГЛАВНЫЕ УСЛУГИ - акцент на них!
    {
      name: t("scalpPigmentation"),
      price: t("price300"),
      isSpecial: true,
      link: "/kopfhaut-muenchen",
      featured: true
    },
    {
      name: t("scarCamouflage"),
      price: t("price200"),
      isSpecial: true,
      link: "/camouflage-muenchen",
      featured: true
    },
    // Остальные услуги
    {
      name: t("powderBrows"),
      price: t("price200"),
      image: "/4.jpg",
      bookingUrl: "https://buchung.treatwell.de/ort/permanent-make-up-by-anastasia-noska/?utm_medium=partner-ecosystem&utm_campaign=partner-instagram&utm_content=book-now&fbclid=PARlRTSANHvkBleHRuA2FlbQIxMAABp1qQGFg8ck5Nj90Oz6-hBzpeoVFVtqhm3khdo7DOlAnK-Y6iNfV3VLczqRz4_aem_u5OjR9Br5NBX_q6yx0myKA"
    },
    {
      name: t("aquarellLips"),
      price: t("price200"),
      image: "/5.jpg",
      bookingUrl: "https://buchung.treatwell.de/ort/permanent-make-up-by-anastasia-noska/?utm_medium=partner-ecosystem&utm_campaign=partner-instagram&utm_content=book-now&fbclid=PARlRTSANHvkBleHRuA2FlbQIxMAABp1qQGFg8ck5Nj90Oz6-hBzpeoVFVtqhm3khdo7DOlAnK-Y6iNfV3VLczqRz4_aem_u5OjR9Br5NBX_q6yx0myKA"
    },
    {
      name: t("touchup"),
      price: t("price100"),
      bookingUrl: "https://wa.me/491779093936"
    },
    {
      name: t("remover"),
      price: t("priceRequest"),
      bookingUrl: "https://wa.me/491779093936"
    },
  ];

  return (
    <section id="services" className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-pearl/30 to-background" />

      <div className="container max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24 space-y-8">
          {/* Decorative element */}
          <div className="flex items-center justify-center gap-4 opacity-60">
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-silver" />
            <div className="w-2 h-2 bg-silver rotate-45" />
            <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-silver" />
          </div>

          <h2 className="font-serif text-4xl md:text-6xl text-center tracking-wide font-bold">
            {t("servicesTitle")}
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("servicesSubtitle")}
          </p>
        </div>

        <div className="grid gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-background/60 backdrop-blur-sm border border-silver/20 hover:border-silver/40 transition-all duration-500 hover-lift shadow-luxury overflow-hidden"
            >
              {/* Gold accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />

              <div className="grid md:grid-cols-12 gap-6 p-6 md:p-10">
                {/* Service info */}
                <div className="md:col-span-5 space-y-3 flex flex-col justify-center">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex-shrink-0 border border-silver/30 flex items-center justify-center">
                      <div className="w-3 h-3 bg-accent rotate-45" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif font-semibold tracking-wide break-words leading-tight">
                      {service.name}
                    </h3>
                  </div>
                </div>

                {/* Price */}
                <div className="md:col-span-3 flex items-center">
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Preis</p>
                    <span className="text-xl sm:text-2xl md:text-3xl font-serif text-accent font-semibold">
                      {service.price}
                    </span>
                  </div>
                </div>

                {/* Action button */}
                <div className="md:col-span-4 flex items-center justify-start md:justify-end">
                  {service.isSpecial ? (
                    <Link
                      to={service.link!}
                      className="group/btn relative px-6 sm:px-8 py-3 sm:py-4 border-2 border-silver/30 text-foreground font-sans text-xs tracking-[0.15em] sm:tracking-[0.25em] uppercase hover:border-silver transition-all duration-300 inline-block overflow-hidden text-center w-full sm:w-auto"
                    >
                      <span className="relative z-10">{t("learnMore")}</span>
                      <div className="absolute inset-0 bg-accent opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300" />
                    </Link>
                  ) : (
                    <a
                      href={service.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative px-6 sm:px-8 py-3 sm:py-4 bg-accent text-foreground font-sans text-xs tracking-[0.15em] sm:tracking-[0.25em] uppercase shadow-luxury hover-lift inline-block overflow-hidden text-center w-full sm:w-auto"
                    >
                      <span className="relative z-10 font-semibold">{t("bookNow")}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-charcoal to-silver opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    </a>
                  )}
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden opacity-20">
                <div className="absolute top-0 right-0 w-full h-full bg-accent transform rotate-45 translate-x-10 -translate-y-10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
