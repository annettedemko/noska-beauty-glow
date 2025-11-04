import { useLanguage } from "@/contexts/LanguageContext";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export const Breadcrumbs = () => {
  const { language } = useLanguage();
  const location = useLocation();
  const isGerman = language === "DE";

  // Don't show breadcrumbs on home page
  if (location.pathname === "/" || location.pathname === "/ru") {
    return null;
  }

  const pathWithoutLang = location.pathname.replace(/^\/ru/, "");
  const segments = pathWithoutLang.split('/').filter(Boolean);

  // Map URL segments to display names
  const pageNames: Record<string, { de: string; ru: string }> = {
    'services-muenchen': { de: 'Leistungen', ru: 'Услуги' },
    'kopfhaut-muenchen': { de: 'Kopfhaut Pigmentierung', ru: 'Пигментация кожи головы' },
    'camouflage-muenchen': { de: 'Camouflage', ru: 'Камуфляж' },
    'remover-muenchen': { de: 'Remover', ru: 'Ремувер' },
    'impressum': { de: 'Impressum', ru: 'Импрессум' },
    'datenschutz': { de: 'Datenschutz', ru: 'Защита данных' }
  };

  return (
    <nav
      aria-label="Breadcrumb"
      className="py-4 px-6 bg-pearl/10 border-b border-silver/20"
    >
      <div className="container max-w-7xl mx-auto">
        <ol className="flex items-center gap-2 text-sm flex-wrap">
          {/* Home */}
          <li>
            <Link
              to={isGerman ? "/" : "/ru"}
              className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">
                {isGerman ? "Home" : "Главная"}
              </span>
            </Link>
          </li>

          {/* Current page */}
          {segments.length > 0 && (
            <>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <li>
                <span className="text-foreground font-medium">
                  {pageNames[segments[segments.length - 1]]
                    ? isGerman
                      ? pageNames[segments[segments.length - 1]].de
                      : pageNames[segments[segments.length - 1]].ru
                    : segments[segments.length - 1]}
                </span>
              </li>
            </>
          )}
        </ol>
      </div>
    </nav>
  );
};
