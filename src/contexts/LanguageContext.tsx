import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

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
    aboutPara1: "Ich glaube daran, dass jede Frau das Recht hat, sich in ihrer Haut wohlzufühlen – ohne stundenlange Schminkroutinen oder Unzufriedenheit mit dem eigenen Spiegelbild.",
    aboutPara2: "Besonders am Herzen liegen mir:",
    aboutService1: "Camouflage von Dehnungsstreifen und Narben – für Frauen, die sich wieder selbstbewusst in ihrer Haut zeigen möchten",    aboutService2: "Kopfhautpigmentierung (Scalp Micropigmentation) – für ein volleres Haarbild und neues Selbstvertrauen bei Haarverlust",
    aboutSectionTitle2: "Mein Weg",
    aboutPara3: "Ich habe zahlreiche Schulungen und Masterclasses bei internationalen Trainerinnen absolviert und bilde mich kontinuierlich weiter, um höchste Qualität und modernste Techniken zu garantieren.",
    aboutPara4: "Ich freue mich darauf, auch Sie bald persönlich begrüßen zu dürfen – um Ihre natürliche Schönheit zu betonen und Ihnen ein Stück neues Selbstvertrauen zu schenken.",

    // Services
    servicesTitle: "Leistungen",
    servicesSubtitle: "Premium Permanent Make-up Services",
    powderBrows: "Powder / Ombre Brows",
    aquarellLips: "Aquarell / Velvet / Ombre Lippen",
    remover: "Remover (ohne Laser)",
    scalpPigmentation: "Kopfhaut Pigmentierung (Trichopigmentierung)",
    scalpPigmentationShort: "Kopfhaut Pigmentierung",
    scarCamouflage: "Camouflage Dehnungsstreifen/ Narben",
    touchup: "Nachkorrektur",
    price180: "180 €",
    price200: "200 €",
    price200From: "ab 200 €",
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
    contactParking: "Parkplatz",
    parkingText: "Parkplätze in der Nähe",
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
    scalpSeoTitle: "Kopfhautpigmentierung München: Die beste Lösung bei Haarausfall",
    scalpSeoText: "Haarausfall betrifft Millionen Männer und Frauen weltweit und kann das Selbstbewusstsein erheblich beeinträchtigen. Ob genetisch bedingt, stressbedingt oder durch Krankheit verursacht – lichtes Haar oder kahle Stellen sind für viele ein sensibles Thema. Die Kopfhautpigmentierung, auch Trichopigmentierung oder Scalp Micropigmentation (SMP) genannt, ist eine innovative, nicht-chirurgische Lösung, die den Eindruck von dichterem Haar erzeugt und das Erscheinungsbild der Kopfhaut deutlich verbessert. Bei Permanent Make-up by Anastasia Noska in München bieten wir professionelle Trichopigmentierung für Männer und Frauen an. Mit modernsten Techniken und höchster Präzision schaffen wir natürliche Ergebnisse, die Ihr Selbstvertrauen zurückbringen.",
    scalpSeoSubtitle: "Was ist Trichopigmentierung?",
    scalpSeoText2: "Die Trichopigmentierung ist eine spezielle Form des Permanent Make-ups, bei der winzige Pigmentpunkte in die oberste Hautschicht der Kopfhaut eingebracht werden. Diese imitieren die natürlichen Haarfollikel und erzeugen optisch den Eindruck von dichterem Haar oder einer rasierten Frisur. Die Behandlung ist besonders effektiv bei Geheimratsecken, lichtem Haar, Narben von Haartransplantationen oder bei Alopecia areata. Im Gegensatz zu einer Haartransplantation ist die Kopfhautpigmentierung schmerzarm, risikoarm und erfordert keine Erholungszeit. Das Ergebnis ist sofort sichtbar und hält mehrere Jahre. Vereinbaren Sie jetzt Ihren Beratungstermin in München und erfahren Sie, wie Trichopigmentierung auch Ihnen helfen kann.",
    camouflageTitle: "Camouflage Dehnungsstreifen / Narben",
    camouflageDesc: "Professionelles Camouflage von Narben, Dehnungsstreifen und anderen Hautveränderungen",
    camouflageIntro: "Camouflage-Pigmentierung ist eine wirksame Methode, um Narben und Dehnungsstreifen optisch zu minimieren. Durch präzise Farbabstimmung werden betroffene Bereiche an den natürlichen Hautton angeglichen.",
    camouflageSuitableTitle: "Die Behandlung eignet sich für:",
    camouflageSuitable1: "Schwangerschaftsstreifen",
    camouflageSuitable2: "Narben von Operationen (z.B. Kaiserschnitt)",
    camouflageSuitable3: "Brust-OP Narben",
    camouflageSuitable4: "Andere Hautveränderungen",
    camouflagePrice: "Preis: ab 200 €",
    camouflageSeoTitle: "Narben und Dehnungsstreifen kaschieren in München",
    camouflageSeoText: "Dehnungsstreifen und Narben sind für viele Menschen ein ästhetisches Problem, das das Selbstbewusstsein beeinträchtigen kann. Ob nach einer Schwangerschaft, einer Operation oder durch Gewichtsschwankungen – diese Hautveränderungen sind völlig normal, können aber als störend empfunden werden. Die Camouflage-Pigmentierung bietet eine effektive und schonende Lösung, um Narben, Dehnungsstreifen und andere Hautveränderungen optisch zu minimieren. Bei Permanent Make-up by Anastasia Noska in München nutzen wir modernste Techniken, um betroffene Bereiche an Ihren natürlichen Hautton anzugleichen. Das Ergebnis ist eine deutlich gleichmäßigere Haut, die Sie wieder selbstbewusst zeigen können. Die Behandlung eignet sich besonders für Schwangerschaftsstreifen, Kaiserschnittnarben, Brust-OP-Narben und andere Hautunregelmäßigkeiten.",
    camouflageSeoSubtitle: "Wie funktioniert Camouflage-Pigmentierung?",
    camouflageSeoText2: "Bei der Camouflage-Pigmentierung wird ein speziell auf Ihren Hautton abgestimmtes Pigment in die oberste Hautschicht eingebracht. Durch präzise Farbabstimmung und professionelle Technik werden Narben und Dehnungsstreifen optisch aufgehellt und an die umliegende Haut angeglichen. Die Behandlung ist schmerzarm und erfordert keine lange Erholungszeit. Bereits nach wenigen Wochen ist das endgültige Ergebnis sichtbar, das mehrere Jahre hält. Kontaktieren Sie uns für eine persönliche Beratung und erfahren Sie, wie Camouflage auch Ihnen zu mehr Selbstvertrauen verhelfen kann.",
    removerTitle: "Pigmententfernung mit Remover",
    removerDesc: "Schonende Entfernung von Permanent Make-up ohne Laser",
    removerIntro: "Mit der Zeit kann sich die Farbe eines Permanent Make-ups verändern oder nicht mehr zum aktuellen Stil passen. Die Pigmententfernung mit Remover ist eine schonende Methode, um unerwünschte oder ungleichmäßige Pigmente aus der Haut zu entfernen – ohne Laser und ohne Narbenbildung.",
    removerHowTitle: "Wie funktioniert die Behandlung?",
    removerHow1: "Ein speziell entwickelter Remover wird mit einer feinen Nadel oberflächlich in die Haut eingearbeitet.",
    removerHow2: "Er bindet die vorhandenen Pigmente und zieht sie nach und nach an die Hautoberfläche.",
    removerHow3: "Nach jeder Sitzung wird die Farbe sichtbar heller, bis sie stark reduziert oder vollständig entfernt ist.",
    removerSessionsTitle: "Wie viele Sitzungen sind nötig?",
    removerSessions1: "Je nach Tiefe und Intensität des Pigments werden 2–5 Behandlungen im Abstand von etwa 4–6 Wochen empfohlen.",
    removerSessions2: "Nach jeder Sitzung hellt sich die behandelte Zone deutlich auf.",
    removerPrice: "Preis: Auf Anfrage",
    removerSeoTitle: "PMU Remover München: Permanent Make-up schonend entfernen",
    removerSeoText: "Permanent Make-up ist eine langfristige Schönheitslösung – aber manchmal ändern sich Trends, Vorlieben oder das Ergebnis entspricht nicht den Erwartungen. In solchen Fällen bietet die Pigmententfernung mit Remover eine schonende Alternative zur Laserbehandlung. Bei Permanent Make-up by Anastasia Noska in München verwenden wir speziell entwickelte Remover-Produkte, um unerwünschte PMU-Pigmente sicher und effektiv zu entfernen. Im Gegensatz zur Laserbehandlung ist diese Methode hautschonender und hinterlässt keine Narben. Sie eignet sich besonders für die Korrektur von Augenbrauen, Lippen oder Lidstrich, die zu dunkel geworden sind, sich farblich verändert haben oder nicht mehr dem gewünschten Stil entsprechen. Die Behandlung erfolgt ambulant und erfordert keine lange Ausfallzeit.",
    removerSeoSubtitle: "Wann ist eine Pigmententfernung sinnvoll?",
    removerSeoText2: "Eine Pigmententfernung mit Remover ist dann sinnvoll, wenn das vorhandene Permanent Make-up ungleichmäßig verblasst ist, sich farblich verändert hat oder komplett entfernt werden soll, um Platz für ein neues PMU zu schaffen. Auch bei Fremdarbeiten, die nicht zufriedenstellend sind, kann der Remover helfen. Je nach Tiefe und Intensität des Pigments sind in der Regel 2 bis 5 Sitzungen im Abstand von 4 bis 6 Wochen nötig. Nach jeder Behandlung hellt sich die Farbe merklich auf. Vereinbaren Sie einen Beratungstermin in München und lassen Sie sich individuell beraten, wie wir Ihnen bei der Entfernung Ihres Permanent Make-ups helfen können.",

    // Services Detail Page
    servicesPageTitle: "Premium Permanent Make-up Services",
    servicesPageDesc: "Professionelle Behandlungen für natürliche Schönheit",

    // Brows
    browsTitle: "Powder / Ombre Brows",
    browsIntro: "Perfekt geformte und natürlich wirkende Augenbrauen sind der Rahmen Ihres Gesichts. Mit der Powder- und Ombre-Brows-Technik schaffen wir einen sanften, pudrigen Effekt, der aussieht wie dezentes Make-up – aber 24/7 hält.",
    browsTechniquesTitle: "Techniken im Detail:",
    browsOmbre: "Ombre Brows",
    browsOmbreDesc: "Sanfter Farbverlauf vom helleren Anfang zu einem dunkleren Ende der Braue",
    browsPowder: "Powder Brows",
    browsPowderDesc: "Gleichmäßiger, weicher Farbauftrag für einen gepuderten Look",
    browsAdvantagesTitle: "Vorteile:",
    browsAdv1: "Natürliches Ergebnis, das nicht aufgemalt wirkt",
    browsAdv2: "Perfekt für alle Hauttypen – auch fettige Haut",
    browsAdv3: "Hält 1–3 Jahre, je nach Hauttyp und Pflege",
    browsPrice: "Preis: 180 €",

    // Lips
    lipsTitle: "Aquarell / Velvet / Ombre Lippen",
    lipsIntro: "Volle, frische und perfekt konturierte Lippen – ohne tägliches Nachschminken. Unsere Lippen-Techniken verleihen Ihren Lippen natürliche Farbe, Definition und einen Hauch von Glamour.",
    lipsTechniquesTitle: "Techniken im Detail:",
    lipsAquarell: "Aquarell Lips",
    lipsAquarellDesc: "Zarte, transparente Farbe für einen natürlichen, frischen Look",
    lipsVelvet: "Velvet Lips",
    lipsVelvetDesc: "Samtige, satte Farbe für vollere und definierte Lippen",
    lipsOmbre: "Ombre Lips",
    lipsOmbreDesc: "Farbverlauf von innen nach außen für einen 3D-Effekt",
    lipsAdvantagesTitle: "Vorteile:",
    lipsAdv1: "Optisch vollere und symmetrischere Lippen",
    lipsAdv2: "Natürlicher Kussmund ohne Lippenstift",
    lipsAdv3: "Langanhaltende Farbe für 2–4 Jahre",
    lipsPrice: "Preis: 200 €",

    // Touchup
    touchupTitle: "Nachkorrektur",
    touchupIntro: "Eine Nachkorrektur ist ein wichtiger Teil jeder Permanent-Make-up-Behandlung. Nach der ersten Sitzung wird das Ergebnis noch einmal perfektioniert, um Farbintensität und Form optimal anzupassen.",
    touchupWhenTitle: "Wann ist eine Nachkorrektur nötig?",
    touchupWhen1: "4–6 Wochen nach der Erstbehandlung (Heilungsphase abgeschlossen)",
    touchupWhen2: "Bei ungleichmäßiger Farbaufnahme",
    touchupWhen3: "Zum Auffrischen nach 12–18 Monaten",
    touchupImportantTitle: "Wichtig:",
    touchupImportant: "Die Nachkorrektur ist in der Regel kürzer als die Erstbehandlung und dient dazu, kleine Anpassungen vorzunehmen und das Ergebnis zu verfeinern.",
    touchupPriceText: "Preis: 100 €",

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
    aboutPara1: "Я верю, что каждая женщина имеет право чувствовать себя комфортно в своей коже – без многочасовых рутин макияжа или недовольства своим отражением в зеркале.",
    aboutPara2: "Особенно близки мне:",
    aboutService1: "Камуфляж растяжек и шрамов – для женщин, которые хотят снова уверенно чувствовать себя в собственной коже",    aboutService2: "Пигментация кожи головы (Scalp Micropigmentation) – для более полного образа волос и новой уверенности при выпадении волос",
    aboutSectionTitle2: "Мой путь",
    aboutPara3: "Я прошла многочисленные обучения и мастер-классы у международных тренеров и постоянно совершенствуюсь, чтобы гарантировать высочайшее качество и современные техники.",
    aboutPara4: "Я с нетерпением жду возможности лично встретиться с вами – чтобы подчеркнуть вашу естественную красоту и подарить вам частичку новой уверенности в себе.",

    // Services
    servicesTitle: "Услуги",
    servicesSubtitle: "Премиум услуги перманентного макияжа",
    powderBrows: "Пудровые / Омбре брови",
    aquarellLips: "Акварельные / Бархатные / Омбре губы",
    remover: "Ремувер (без лазера)",
    scalpPigmentation: "Пигментация кожи головы (Трихопигментация)",
    scalpPigmentationShort: "Пигментация кожи головы",
    scarCamouflage: "Камуфляж растяжек/шрамов",
    touchup: "Коррекция",
    price180: "180 €",
    price200: "200 €",
    price200From: "от 200 €",
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
    contactParking: "Парковка",
    parkingText: "Парковка рядом",
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
    scalpSeoTitle: "Пигментация кожи головы Мюнхен: Лучшее решение при выпадении волос",
    scalpSeoText: "Выпадение волос затрагивает миллионы мужчин и женщин по всему миру и может значительно повлиять на уверенность в себе. Будь то генетически обусловленное, вызванное стрессом или болезнью – редкие волосы или залысины являются чувствительной темой для многих. Пигментация кожи головы, также называемая трихопигментацией или Scalp Micropigmentation (SMP), является инновационным нехирургическим решением, которое создает впечатление более густых волос и значительно улучшает внешний вид кожи головы. В Permanent Make-up by Anastasia Noska в Мюнхене мы предлагаем профессиональную трихопигментацию для мужчин и женщин. С использованием современных технологий и высочайшей точности мы создаем естественные результаты, которые вернут вам уверенность в себе.",
    scalpSeoSubtitle: "Что такое трихопигментация?",
    scalpSeoText2: "Трихопигментация – это особая форма перманентного макияжа, при которой крошечные точки пигмента вводятся в верхний слой кожи головы. Они имитируют естественные волосяные фолликулы и оптически создают впечатление более густых волос или бритой прически. Процедура особенно эффективна при залысинах, редких волосах, шрамах от пересадки волос или при очаговой алопеции. В отличие от пересадки волос, пигментация кожи головы малоболезненна, с низким риском и не требует времени на восстановление. Результат виден сразу и держится несколько лет. Запишитесь на консультацию в Мюнхене и узнайте, как трихопигментация может помочь и вам.",
    camouflageTitle: "Камуфляж растяжек / шрамов",
    camouflageDesc: "Профессиональный камуфляж шрамов, растяжек и других изменений кожи",
    camouflageIntro: "Камуфляжная пигментация – это эффективный метод визуального уменьшения шрамов и растяжек. С помощью точного подбора цвета пораженные области приводятся в соответствие с естественным тоном кожи.",
    camouflageSuitableTitle: "Процедура подходит для:",
    camouflageSuitable1: "Растяжек от беременности",
    camouflageSuitable2: "Шрамов от операций (например, кесарево сечение)",
    camouflageSuitable3: "Шрамов от операций на груди",
    camouflageSuitable4: "Других изменений кожи",
    camouflagePrice: "Цена: от 200 €",
    camouflageSeoTitle: "Маскировка шрамов и растяжек в Мюнхене",
    camouflageSeoText: "Растяжки и шрамы являются эстетической проблемой для многих людей, которая может повлиять на уверенность в себе. Будь то после беременности, операции или из-за колебаний веса – эти изменения кожи совершенно нормальны, но могут восприниматься как нежелательные. Камуфляжная пигментация предлагает эффективное и щадящее решение для визуального уменьшения шрамов, растяжек и других изменений кожи. В Permanent Make-up by Anastasia Noska в Мюнхене мы используем современные технологии, чтобы приблизить пораженные области к вашему естественному тону кожи. Результатом является значительно более равномерная кожа, которую вы снова сможете уверенно показывать. Процедура особенно подходит для растяжек от беременности, шрамов от кесарева сечения, шрамов от операций на груди и других неровностей кожи.",
    camouflageSeoSubtitle: "Как работает камуфляжная пигментация?",
    camouflageSeoText2: "При камуфляжной пигментации специально подобранный под ваш тон кожи пигмент вводится в верхний слой кожи. Благодаря точному подбору цвета и профессиональной технике шрамы и растяжки оптически осветляются и приводятся в соответствие с окружающей кожей. Процедура малоболезненна и не требует длительного периода восстановления. Уже через несколько недель виден окончательный результат, который держится несколько лет. Свяжитесь с нами для персональной консультации и узнайте, как камуфляж может помочь и вам обрести больше уверенности в себе.",
    removerTitle: "Удаление пигмента с помощью ремувера",
    removerDesc: "Щадящее удаление перманентного макияжа без лазера",
    removerIntro: "Со временем цвет перманентного макияжа может измениться или перестать соответствовать актуальному стилю. Удаление пигмента с помощью ремувера – это щадящий метод удаления нежелательных или неравномерных пигментов из кожи – без лазера и без образования рубцов.",
    removerHowTitle: "Как работает процедура?",
    removerHow1: "Специально разработанный ремувер вводится тонкой иглой поверхностно в кожу.",
    removerHow2: "Он связывает имеющиеся пигменты и постепенно выводит их на поверхность кожи.",
    removerHow3: "После каждого сеанса цвет становится заметно светлее, пока не будет значительно уменьшен или полностью удален.",
    removerSessionsTitle: "Сколько сеансов необходимо?",
    removerSessions1: "В зависимости от глубины и интенсивности пигмента рекомендуется 2-5 процедур с интервалом около 4-6 недель.",
    removerSessions2: "После каждого сеанса обработанная зона заметно светлеет.",
    removerPrice: "Цена: по запросу",
    removerSeoTitle: "ПМУ Ремувер Мюнхен: Щадящее удаление перманентного макияжа",
    removerSeoText: "Перманентный макияж – это долгосрочное решение для красоты, но иногда меняются тренды, предпочтения или результат не соответствует ожиданиям. В таких случаях удаление пигмента с помощью ремувера предлагает щадящую альтернативу лазерному лечению. В Permanent Make-up by Anastasia Noska в Мюнхене мы используем специально разработанные продукты-ремуверы для безопасного и эффективного удаления нежелательных пигментов ПМУ. В отличие от лазерного лечения этот метод более щадящий для кожи и не оставляет шрамов. Он особенно подходит для коррекции бровей, губ или подводки глаз, которые стали слишком темными, изменили цвет или больше не соответствуют желаемому стилю. Процедура проводится амбулаторно и не требует длительного периода восстановления.",
    removerSeoSubtitle: "Когда имеет смысл удаление пигмента?",
    removerSeoText2: "Удаление пигмента с помощью ремувера имеет смысл, когда существующий перманентный макияж неравномерно выцвел, изменил цвет или должен быть полностью удален, чтобы освободить место для нового ПМУ. Также при работах других мастеров, которые не удовлетворяют, может помочь ремувер. В зависимости от глубины и интенсивности пигмента обычно требуется от 2 до 5 сеансов с интервалом от 4 до 6 недель. После каждой процедуры цвет заметно светлеет. Запишитесь на консультацию в Мюнхене и получите индивидуальную консультацию о том, как мы можем помочь вам с удалением перманентного макияжа.",

    // Services Detail Page
    servicesPageTitle: "Премиум услуги перманентного макияжа",
    servicesPageDesc: "Профессиональные процедуры для естественной красоты",

    // Brows
    browsTitle: "Пудровые / Омбре брови",
    browsIntro: "Идеально оформленные и естественные брови – это обрамление вашего лица. С техникой Powder и Ombre Brows мы создаем мягкий, пудровый эффект, который выглядит как деликатный макияж – но держится 24/7.",
    browsTechniquesTitle: "Техники в деталях:",
    browsOmbre: "Омбре брови",
    browsOmbreDesc: "Мягкий градиент от более светлого начала к более темному концу брови",
    browsPowder: "Пудровые брови",
    browsPowderDesc: "Равномерное, мягкое нанесение цвета для припудренного образа",
    browsAdvantagesTitle: "Преимущества:",
    browsAdv1: "Естественный результат, не выглядит нарисованным",
    browsAdv2: "Идеально для всех типов кожи – даже жирной",
    browsAdv3: "Держится 1-3 года в зависимости от типа кожи и ухода",
    browsPrice: "Цена: 180 €",

    // Lips
    lipsTitle: "Акварельные / Бархатные / Омбре губы",
    lipsIntro: "Полные, свежие и идеально очерченные губы – без ежедневного подкрашивания. Наши техники для губ придают им естественный цвет, четкость и нотку гламура.",
    lipsTechniquesTitle: "Техники в деталях:",
    lipsAquarell: "Акварельные губы",
    lipsAquarellDesc: "Нежный, прозрачный цвет для естественного, свежего образа",
    lipsVelvet: "Бархатные губы",
    lipsVelvetDesc: "Насыщенный бархатный цвет для более полных и четких губ",
    lipsOmbre: "Омбре губы",
    lipsOmbreDesc: "Градиент цвета изнутри наружу для 3D-эффекта",
    lipsAdvantagesTitle: "Преимущества:",
    lipsAdv1: "Визуально более полные и симметричные губы",
    lipsAdv2: "Естественные губы без помады",
    lipsAdv3: "Стойкий цвет на 2-4 года",
    lipsPrice: "Цена: 200 €",

    // Touchup
    touchupTitle: "Коррекция",
    touchupIntro: "Коррекция – важная часть любой процедуры перманентного макияжа. После первого сеанса результат еще раз совершенствуется для оптимальной настройки интенсивности цвета и формы.",
    touchupWhenTitle: "Когда необходима коррекция?",
    touchupWhen1: "Через 4-6 недель после первой процедуры (фаза заживления завершена)",
    touchupWhen2: "При неравномерном принятии цвета",
    touchupWhen3: "Для обновления через 12-18 месяцев",
    touchupImportantTitle: "Важно:",
    touchupImportant: "Коррекция обычно короче, чем первая процедура, и служит для внесения небольших корректировок и доработки результата.",
    touchupPriceText: "Цена: 100 €",

    backToHome: "Вернуться на главную",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Initialize language based on current URL path
  const [language, setLanguage] = useState<Language>(() => {
    return location.pathname.startsWith("/ru") ? "RU" : "DE";
  });

  // Detect language from URL on mount and route change
  useEffect(() => {
    // Russian has /ru prefix, German has no prefix
    const pathLang = location.pathname.startsWith("/ru") ? "RU" : "DE";
    setLanguage(pathLang);

    // Update HTML lang attribute
    document.documentElement.lang = pathLang.toLowerCase();
  }, [location.pathname]);

  const toggleLanguage = () => {
    const newLang = language === "DE" ? "RU" : "DE";
    const currentPath = location.pathname;

    // Toggle between German (no prefix) and Russian (/ru prefix)
    let newPath: string;
    if (currentPath.startsWith("/ru")) {
      // Russian → German: remove /ru prefix
      newPath = currentPath.replace("/ru", "") || "/";
    } else {
      // German → Russian: add /ru prefix
      if (currentPath === "/") {
        newPath = "/ru";
      } else {
        newPath = `/ru${currentPath}`;
      }
    }

    navigate(newPath + location.hash);
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
