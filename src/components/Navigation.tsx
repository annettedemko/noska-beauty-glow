import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

export const Navigation = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            <button
              onClick={() => scrollToSection("services")}
              className="relative text-sm font-sans tracking-[0.2em] uppercase hover:text-accent transition-all duration-300 group"
            >
              {t("navServices")}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-300" />
            </button>
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
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-96 mt-6' : 'max-h-0'}`}>
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
            <button
              onClick={() => scrollToSection("services")}
              className="text-left text-sm font-sans tracking-[0.2em] uppercase hover:text-accent transition-all duration-300"
            >
              {t("navServices")}
            </button>
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
