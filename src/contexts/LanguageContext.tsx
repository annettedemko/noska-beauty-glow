import { createContext, useContext, useState, ReactNode } from "react";

type Language = "DE" | "RU";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  DE: {
    // Navigation
    navAbout: "Über mich",
    navPortfolio: "Portfolio",
    navServices: "Leistungen",
    navContact: "Kontakt",

    // Hero
    heroTitle: "Permanent Make-up München – Anastasia Noska",
    heroSubtitle: "Natürlich schön. Jeden Tag.",
    whatsappContact: "WhatsApp Kontakt",
    onlineBooking: "Online buchen",

    // About
    aboutTitle: "Über mich",
    aboutText1: "Zertifizierte Spezialistin",
    aboutText2: "Fokus auf Natürlichkeit",
    aboutText3: "Studio in München",

    // Services
    servicesTitle: "Leistungen",
    powderBrows: "Powder / Ombre Brows",
    aquarellLips: "Aquarell / Velvet / Ombre Lippen",
    eyeliner: "Lidstrich (klassisch)",
    remover: "Remover",
    scalpPigmentation: "Kopfhaut Pigmentierung (Trichopigmentierung)",
    scalpPigmentationShort: "Kopfhaut Pigmentierung",
    scarCamouflage: "Camouflage Dehnungsstreifen/Narben",
    touchup: "Nachkorrektur",
    price200: "200 €",
    price300: "300 €",
    price100: "100 €",
    priceRequest: "Anfrage",
    bookNow: "JETZT BUCHEN",
    learnMore: "MEHR ERFAHREN",

    // Process
    processTitle: "Wie läuft das ab?",
    step1Title: "Beratung & Technik",
    step1Desc: "Konsultation und Auswahl der passenden Technik",
    step2Title: "Farbton bestimmen",
    step2Desc: "Passend zu Ihrem Hauttyp und Haarfarbe",
    step3Title: "Pigment einbringen",
    step3Desc: "Professionelle und präzise Pigmentierung",
    step4Title: "Ergebnis nach 1 Sitzung sichtbar",
    step4Desc: "Natürliches und langanhaltendes Ergebnis",

    // Gallery
    galleryTitle: "Meine Arbeiten",

    // Testimonials
    testimonialsTitle: "Kundenfeedbacks",
    testimonial1: "Ich hätte es viel früher machen sollen",
    testimonial2: "Alles sieht sehr natürlich aus",
    testimonial3: "Schon nach 3 Tagen alltagstauglich!",

    // Contact
    contactTitle: "Kontakt",
    address: "Hildegardstr. 4, München",
    instagram: "Instagram",
    treatwellButton: "Jetzt online buchen",

    // FAQ
    faqTitle: "FAQ",
    faq1Q: "Wie kann ich einen Termin buchen?",
    faq1A: "Sie können direkt über WhatsApp, per E-Mail oder über Treatwell einen Termin vereinbaren. Ich melde mich zeitnah bei Ihnen zurück.",
    faq2Q: "Wie lange hält das Permanent Make-up?",
    faq2A: "Die Haltbarkeit beträgt in der Regel 1-3 Jahre, abhängig von Hauttyp, Pflege und Sonneneinstrahlung. Eine Auffrischung wird empfohlen.",
    faq3Q: "Gibt es Kontraindikationen?",
    faq3A: "Ja, bei Schwangerschaft, Stillzeit, Diabetes, Hauterkrankungen oder Blutgerinnungsstörungen sollte auf die Behandlung verzichtet werden. Bitte kontaktieren Sie mich für eine persönliche Beratung.",

    // Footer
    impressum: "Impressum",
    privacy: "Datenschutzerklärung",
    agb: "AGB",
    copyright: "© 2025 Anastasia Noska – Permanent Make-up München",

    // Specialty Pages
    scalpTitle: "Kopfhaut Pigmentierung (Trichopigmentierung)",
    scalpDesc: "Für Männer und Frauen – professionelle Trichopigmentierung in München",
    camouflageTitle: "Camouflage Dehnungsstreifen/Narben",
    camouflageDesc: "Professionelles Camouflage von Narben, Dehnungsstreifen und anderen Hautveränderungen",
  },
  RU: {
    // Navigation
    navAbout: "Обо мне",
    navPortfolio: "Портфолио",
    navServices: "Услуги",
    navContact: "Контакты",

    // Hero
    heroTitle: "Перманентный макияж Мюнхен – Анастасия Носка",
    heroSubtitle: "Естественная красота каждый день.",
    whatsappContact: "Связаться через WhatsApp",
    onlineBooking: "Записаться онлайн",

    // About
    aboutTitle: "Обо мне",
    aboutText1: "Сертифицированный специалист",
    aboutText2: "Упор на натуральность",
    aboutText3: "Студия в Мюнхене",

    // Services
    servicesTitle: "Услуги",
    powderBrows: "Пудровые / Омбре брови",
    aquarellLips: "Акварельные / Бархатные / Омбре губы",
    eyeliner: "Межресничная стрелка",
    remover: "Ремувер",
    scalpPigmentation: "Пигментация кожи головы (Трихопигментация)",
    scalpPigmentationShort: "Пигментация кожи головы",
    scarCamouflage: "Камуфляж растяжек/шрамов",
    touchup: "Коррекция",
    price200: "200 €",
    price300: "300 €",
    price100: "100 €",
    priceRequest: "по запросу",
    bookNow: "ЗАПИСАТЬСЯ",
    learnMore: "ПОДРОБНЕЕ",

    // Process
    processTitle: "Как проходит процедура?",
    step1Title: "Консультация & Техника",
    step1Desc: "Консультация и выбор подходящей техники",
    step2Title: "Определение тона",
    step2Desc: "Подходящий под ваш тип кожи и цвет волос",
    step3Title: "Внесение пигмента",
    step3Desc: "Профессиональная и точная пигментация",
    step4Title: "Результат виден после 1 процедуры",
    step4Desc: "Натуральный и стойкий результат",

    // Gallery
    galleryTitle: "Мои работы",

    // Testimonials
    testimonialsTitle: "Отзывы клиентов",
    testimonial1: "Я должна была сделать это намного раньше",
    testimonial2: "Всё выглядит очень естественно",
    testimonial3: "Уже через 3 дня можно было вернуться к обычной жизни!",

    // Contact
    contactTitle: "Контакты",
    address: "Hildegardstr. 4, Мюнхен",
    instagram: "Instagram",
    treatwellButton: "Записаться онлайн",

    // FAQ
    faqTitle: "FAQ",
    faq1Q: "Как записаться на процедуру?",
    faq1A: "Вы можете записаться через WhatsApp, по электронной почте или через Treatwell. Я свяжусь с вами в ближайшее время.",
    faq2Q: "Сколько держится результат?",
    faq2A: "Обычно 1-3 года, в зависимости от типа кожи, ухода и воздействия солнца. Рекомендуется обновление.",
    faq3Q: "Есть ли противопоказания?",
    faq3A: "Да, при беременности, грудном вскармливании, диабете, кожных заболеваниях или нарушениях свертываемости крови процедура не рекомендуется. Пожалуйста, свяжитесь со мной для консультации.",

    // Footer
    impressum: "Impressum",
    privacy: "Datenschutzerklärung",
    agb: "AGB",
    copyright: "© 2025 Анастасия Носка – Перманентный макияж Мюнхен",

    // Specialty Pages
    scalpTitle: "Пигментация кожи головы (Трихопигментация)",
    scalpDesc: "Для мужчин и женщин – профессиональная трихопигментация в Мюнхене",
    camouflageTitle: "Камуфляж растяжек/шрамов",
    camouflageDesc: "Профессиональный камуфляж шрамов, растяжек и других изменений кожи",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("DE");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "DE" ? "RU" : "DE"));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.DE] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
