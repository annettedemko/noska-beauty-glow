import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50">
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleLanguage}
        className="font-mono text-xs tracking-widest"
      >
        {language === "DE" ? "RU" : "DE"}
      </Button>
    </div>
  );
};
