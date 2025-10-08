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
    aboutText1: "Mein Name ist Anastasia Noska – ich bin zertifizierte Spezialistin für Permanent Make-up, Camouflage-Behandlungen und Kopfhautpigmentierung in München.",
    aboutText2: "Meine Arbeit ist mehr als nur ein Beruf – sie ist meine Leidenschaft. Ich habe mich darauf spezialisiert, die natürliche Schönheit meiner Kundinnen zu unterstreichen, ohne sie zu verändern.",
    aboutText3: "Jede Behandlung ist für mich eine stille Kunst: Das perfekte Permanent Make-up erkennt man daran, dass es nicht auffällt, sondern wirkt, als wäre es schon immer da gewesen – harmonisch, sanft und authentisch.",
    aboutSectionTitle1: "Wahre Schönheit braucht kein Make-up",
    aboutPara1: "Ich glaube daran, dass jede Frau das Recht hat, sich wohl in ihrer Haut zu fühlen – ohne stundenlange Schminkroutinen oder Unsicherheiten.",
    aboutPara2: "Besonders am Herzen liegen mir:",
    aboutService1: "Camouflage von Dehnungsstreifen und Narben – für Frauen, die ihren Körper wieder mit Stolz zeigen möchten",
    aboutService2: "Kopfhautpigmentierung (Scalp Micropigmentation) – für ein volleres Haarbild und neues Selbstvertrauen bei Haarverlust",
    aboutSectionTitle2: "Mein Weg",
    aboutPara3: "Ich habe zahlreiche Schulungen und Masterclasses bei internationalen Trainerinnen absolviert und bilde mich kontinuierlich weiter, um höchste Qualität und modernste Techniken zu garantieren.",
    aboutPara4: "Ich freue mich darauf, auch Sie bald persönlich begrüßen zu dürfen – um Ihre natürliche Schönheit zu betonen und Ihnen ein Stück neues Selbstvertrauen zu schenken.",

    // Services
    servicesTitle: "Leistungen",
    servicesSubtitle: "Premium Permanent Make-up Services",
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
    gallerySubtitle: "Portfolio unserer Arbeiten",

    // Testimonials
    testimonialsTitle: "Kundenfeedbacks",
    testimonial1: "Ich hätte es viel früher machen sollen",
    testimonial2: "Alles sieht sehr natürlich aus",
    testimonial3: "Schon nach 3 Tagen alltagstauglich!",

    // Contact
    contactTitle: "Kontakt",
    contactSubtitle: "Vereinbaren Sie einen Termin",
    contactAddress: "Adresse",
    contactWhatsapp: "WhatsApp",
    contactEmail: "Email",
    address: "Hildegardstr. 4, München",
    instagram: "Instagram",
    treatwellButton: "Jetzt online buchen",
    bookingTitle: "Online Termin buchen",
    bookingSubtitle: "Buchen Sie Ihren Termin bequem über Treatwell",

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
    footerTagline: "Premium Permanent Make-up München",

    // Specialty Pages
    scalpTitle: "Kopfhaut Pigmentierung (Trichopigmentierung)",
    scalpDesc: "Für Männer und Frauen – professionelle Trichopigmentierung in München",
    scalpIntro: "Die Kopfhautpigmentierung (Trichopigmentierung) ist eine innovative Lösung für Männer und Frauen mit Haarausfall oder lichtem Haar. Diese Technik erzeugt den Eindruck von dichterem Haar durch präzise Pigmentierung der Kopfhaut.",
    scalpSuitableTitle: "Die Behandlung ist ideal für:",
    scalpSuitable1: "Geheimratsecken und Haarlichtung",
    scalpSuitable2: "Narben von Haartransplantationen",
    scalpSuitable3: "Alopecia areata",
    scalpSuitable4: "Diffusen Haarausfall",
    scalpPrice: "Preis: 300 €",
    camouflageTitle: "Camouflage Dehnungsstreifen/Narben",
    camouflageDesc: "Professionelles Camouflage von Narben, Dehnungsstreifen und anderen Hautveränderungen",
    camouflageIntro: "Camouflage-Pigmentierung ist eine wirksame Methode, um Narben und Dehnungsstreifen optisch zu minimieren. Durch präzise Farbabstimmung werden betroffene Bereiche an den natürlichen Hautton angeglichen.",
    camouflageSuitableTitle: "Die Behandlung eignet sich für:",
    camouflageSuitable1: "Schwangerschaftsstreifen",
    camouflageSuitable2: "Narben von Operationen (z.B. Kaiserschnitt)",
    camouflageSuitable3: "Brust-OP Narben",
    camouflageSuitable4: "Andere Hautveränderungen",
    camouflagePrice: "Preis: 200 €",
    backToHome: "Zurück zur Hauptseite",
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
    aboutText1: "Меня зовут Анастасия Носка – я сертифицированный специалист по перманентному макияжу, камуфляжу и пигментации кожи головы в Мюнхене.",
    aboutText2: "Моя работа – это больше, чем просто профессия – это моя страсть. Я специализируюсь на подчеркивании естественной красоты моих клиенток, не меняя её.",
    aboutText3: "Каждая процедура для меня – тихое искусство: идеальный перманентный макияж тот, который незаметен, но выглядит так, будто он был всегда – гармонично, нежно и аутентично.",
    aboutSectionTitle1: "Истинная красота не нуждается в макияже",
    aboutPara1: "Я верю, что каждая женщина имеет право чувствовать себя комфортно в своей коже – без многочасовых рутин макияжа или неуверенности.",
    aboutPara2: "Особенно близки мне:",
    aboutService1: "Камуфляж растяжек и шрамов – для женщин, которые хотят снова показывать свое тело с гордостью",
    aboutService2: "Пигментация кожи головы (Scalp Micropigmentation) – для более полного образа волос и новой уверенности при выпадении волос",
    aboutSectionTitle2: "Мой путь",
    aboutPara3: "Я прошла многочисленные обучения и мастер-классы у международных тренеров и постоянно совершенствуюсь, чтобы гарантировать высочайшее качество и современные техники.",
    aboutPara4: "Я с нетерпением жду возможности лично встретиться с вами – чтобы подчеркнуть вашу естественную красоту и подарить вам частичку новой уверенности в себе.",

    // Services
    servicesTitle: "Услуги",
    servicesSubtitle: "Премиум услуги перманентного макияжа",
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
    gallerySubtitle: "Портфолио наших работ",

    // Testimonials
    testimonialsTitle: "Отзывы клиентов",
    testimonial1: "Я должна была сделать это намного раньше",
    testimonial2: "Всё выглядит очень естественно",
    testimonial3: "Уже через 3 дня можно было вернуться к обычной жизни!",

    // Contact
    contactTitle: "Контакты",
    contactSubtitle: "Записаться на процедуру",
    contactAddress: "Адрес",
    contactWhatsapp: "WhatsApp",
    contactEmail: "Email",
    address: "Hildegardstr. 4, Мюнхен",
    instagram: "Instagram",
    treatwellButton: "Записаться онлайн",
    bookingTitle: "Онлайн запись",
    bookingSubtitle: "Забронируйте процедуру через Treatwell",

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
    footerTagline: "Премиум перманентный макияж Мюнхен",

    // Specialty Pages
    scalpTitle: "Пигментация кожи головы (Трихопигментация)",
    scalpDesc: "Для мужчин и женщин – профессиональная трихопигментация в Мюнхене",
    scalpIntro: "Пигментация кожи головы (трихопигментация) – это инновационное решение для мужчин и женщин с выпадением волос или редкими волосами. Эта техника создает впечатление более густых волос с помощью точной пигментации кожи головы.",
    scalpSuitableTitle: "Процедура идеальна для:",
    scalpSuitable1: "Залысин и редеющих волос",
    scalpSuitable2: "Шрамов от пересадки волос",
    scalpSuitable3: "Очаговой алопеции",
    scalpSuitable4: "Диффузного выпадения волос",
    scalpPrice: "Цена: 300 €",
    camouflageTitle: "Камуфляж растяжек/шрамов",
    camouflageDesc: "Профессиональный камуфляж шрамов, растяжек и других изменений кожи",
    camouflageIntro: "Камуфляжная пигментация – это эффективный метод визуального уменьшения шрамов и растяжек. С помощью точного подбора цвета пораженные области приводятся в соответствие с естественным тоном кожи.",
    camouflageSuitableTitle: "Процедура подходит для:",
    camouflageSuitable1: "Растяжек от беременности",
    camouflageSuitable2: "Шрамов от операций (например, кесарево сечение)",
    camouflageSuitable3: "Шрамов от операций на груди",
    camouflageSuitable4: "Других изменений кожи",
    camouflagePrice: "Цена: 200 €",
    backToHome: "Вернуться на главную",
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
