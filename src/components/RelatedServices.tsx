import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

interface Service {
  titleDE: string;
  titleRU: string;
  descriptionDE: string;
  descriptionRU: string;
  path: string;
  image: string;
}

interface RelatedServicesProps {
  currentService: string;
  showCount?: number;
}

export const RelatedServices = ({ currentService, showCount = 3 }: RelatedServicesProps) => {
  const { language } = useLanguage();
  const isGerman = language === "DE";
  const langPrefix = isGerman ? "" : "/ru";

  const allServices: Service[] = [
    {
      titleDE: "Alle Leistungen",
      titleRU: "Все услуги",
      descriptionDE: "Entdecken Sie unser komplettes Angebot an Permanent Make-up Services in München",
      descriptionRU: "Откройте для себя наш полный спектр услуг перманентного макияжа в Мюнхене",
      path: "/services-muenchen",
      image: "/1.jpg"
    },
    {
      titleDE: "Kopfhaut Pigmentierung",
      titleRU: "Пигментация кожи головы",
      descriptionDE: "Natürliche Lösung bei Haarausfall und lichtem Haar",
      descriptionRU: "Естественное решение при выпадении волос и редких волосах",
      path: "/kopfhaut-muenchen",
      image: "/10.PNG"
    },
    {
      titleDE: "Camouflage",
      titleRU: "Камуфляж",
      descriptionDE: "Professionelle Kaschierung von Narben und Dehnungsstreifen",
      descriptionRU: "Профессиональная маскировка шрамов и растяжек",
      path: "/camouflage-muenchen",
      image: "/12.jpg"
    },
    {
      titleDE: "Remover",
      titleRU: "Ремувер",
      descriptionDE: "Schonende Entfernung von unerwünschtem Permanent Make-up",
      descriptionRU: "Бережное удаление нежелательного перманентного макияжа",
      path: "/remover-muenchen",
      image: "/18.jpg"
    }
  ];

  // Filter out current service
  const relatedServices = allServices
    .filter(service => service.path !== currentService)
    .slice(0, showCount);

  if (relatedServices.length === 0) {
    return null;
  }

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background via-pearl/10 to-background">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 opacity-60 mb-8">
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-silver" />
            <div className="w-2 h-2 bg-silver rotate-45" />
            <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-silver" />
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4 text-foreground">
            {isGerman ? "Weitere Leistungen" : "Другие услуги"}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {isGerman
              ? "Entdecken Sie unser komplettes Angebot an professionellen Permanent Make-up Services"
              : "Откройте для себя наш полный спектр профессиональных услуг перманентного макияжа"}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedServices.map((service, index) => {
            const title = isGerman ? service.titleDE : service.titleRU;
            const description = isGerman ? service.descriptionDE : service.descriptionRU;
            const fullPath = `${langPrefix}${service.path}`;

            return (
              <Link
                key={service.path}
                to={fullPath}
                className="group block"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <article className="bg-background/60 backdrop-blur-sm border border-charcoal/20 shadow-luxury overflow-hidden hover-lift transition-all duration-500">
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="font-serif text-2xl mb-3 text-foreground group-hover:text-accent transition-colors duration-300">
                      {title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {description}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-accent group-hover:gap-4 transition-all duration-300">
                      <span className="text-sm uppercase tracking-[0.2em] font-semibold">
                        {isGerman ? "Mehr erfahren" : "Узнать больше"}
                      </span>
                      <svg
                        className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        {/* View All Link */}
        {currentService !== "/services-muenchen" && (
          <div className="text-center mt-12">
            <Link
              to={`${langPrefix}/services-muenchen`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-white font-sans text-sm tracking-[0.2em] uppercase shadow-luxury hover-lift group"
            >
              <span className="font-semibold">
                {isGerman ? "Alle Leistungen ansehen" : "Посмотреть все услуги"}
              </span>
              <svg
                className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
