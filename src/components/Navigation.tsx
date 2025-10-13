import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export const Navigation = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false); // Close mobile menu
    // If not on home page, navigate to home first
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const goToHome = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(true);
    }, 300); // 300ms delay
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 200); // 200ms delay before closing
  };

  const navigateToService = (path: string) => {
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const services = [
    { name: t("scalpPigmentation"), path: "/kopfhaut-muenchen" },
    { name: t("scarCamouflage"), path: "/camouflage-muenchen" },
    { name: t("powderBrows"), path: "/services-muenchen#brows" },
    { name: t("aquarellLips"), path: "/services-muenchen#lips" },
    { name: t("touchup"), path: "/services-muenchen#touchup" },
    { name: t("remover"), path: "/remover-muenchen" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-silver/20 shadow-luxury">
      <div className="container mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo/Brand - Clickable to go home */}
          <button onClick={goToHome} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src="/logo A.png" alt="Anastasia Noska Logo" className="w-12 h-12 object-contain" />
            <span className="font-serif text-xl tracking-wider">Anastasia Noska</span>
          </button>

          {/* Menu */}
          <div className="hidden md:flex items-center gap-10">
            <button
              onClick={() => scrollToSection("about")}
              className="relative text-sm font-sans tracking-[0.2em] uppercase hover:text-accent transition-all duration-300 group"
            >
              {t("navAbout")}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-300" />
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="relative text-sm font-sans tracking-[0.2em] uppercase hover:text-accent transition-all duration-300 group"
            >
              {t("navPortfolio")}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-300" />
            </button>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => scrollToSection("services")}
                className="relative text-sm font-sans tracking-[0.2em] uppercase hover:text-accent transition-all duration-300 group flex items-center gap-1"
              >
                {t("navServices")}
                <svg
                  className={`w-3 h-3 transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-300" />
              </button>

              {/* Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 min-w-[320px] bg-gradient-to-b from-background/95 via-pearl/30 to-background/95 backdrop-blur-xl shadow-luxury overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
                  {services.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => navigateToService(service.path)}
                      className="w-full text-left px-6 py-4 text-sm font-sans tracking-[0.05em] hover:bg-accent/20 hover:text-accent transition-all duration-300 border-b border-charcoal/10 last:border-b-0 group/item"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="whitespace-normal leading-relaxed">{service.name}</span>
                        <svg
                          className="w-3 h-3 flex-shrink-0 opacity-0 group-hover/item:opacity-100 transform translate-x-0 group-hover/item:translate-x-1 transition-all duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection("contact")}
              className="relative text-sm font-sans tracking-[0.2em] uppercase hover:text-accent transition-all duration-300 group"
            >
              {t("navContact")}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-300" />
            </button>
          </div>

          {/* Language Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="font-sans text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase border border-silver/30 hover:bg-silver/10 hover:border-silver transition-all duration-300 px-3 sm:px-4"
          >
            {language === "DE" ? "RU" : "DE"}
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-[600px] mt-6' : 'max-h-0'}`}>
          <div className="flex flex-col gap-6 pb-6 border-t border-silver/20 pt-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-left text-sm font-sans tracking-[0.2em] uppercase hover:text-accent transition-all duration-300"
            >
              {t("navAbout")}
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-left text-sm font-sans tracking-[0.2em] uppercase hover:text-accent transition-all duration-300"
            >
              {t("navPortfolio")}
            </button>

            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full text-left text-sm font-sans tracking-[0.2em] uppercase hover:text-accent transition-all duration-300 flex items-center justify-between"
              >
                {t("navServices")}
                <svg
                  className={`w-3 h-3 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Mobile Dropdown Items */}
              <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
                <div className="flex flex-col gap-4 pl-4 border-l-2 border-accent/30">
                  {services.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => navigateToService(service.path)}
                      className="text-left text-sm font-sans tracking-[0.1em] hover:text-accent transition-all duration-300 leading-relaxed py-1"
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => scrollToSection("contact")}
              className="text-left text-sm font-sans tracking-[0.2em] uppercase hover:text-accent transition-all duration-300"
            >
              {t("navContact")}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
