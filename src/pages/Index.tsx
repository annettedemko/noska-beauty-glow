import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { VideoBackground } from "@/components/VideoBackground";
import { SEOHead } from "@/components/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <SEOHead
        titleDE="Permanent Make-up München – Anastasia Noska | Natürlich schön"
        titleRU="Перманентный макияж Мюнхен – Анастасия Носка | Естественная красота"
        descriptionDE="Permanent Make-up München: Powder Brows, Aquarell Lippen, Lidstrich. Kopfhaut Pigmentierung & Camouflage. Zertifizierte Spezialistin in München. Jetzt Termin buchen!"
        descriptionRU="Перманентный макияж в Мюнхене: пудровые брови, акварельные губы, подводка. Пигментация кожи головы и камуфляж. Сертифицированный специалист в Мюнхене. Запишитесь сейчас!"
        keywordsDE="Permanent Make-up München, PMU München, Powder Brows München, Augenbrauen München, Lippen München, Lidstrich München, Kopfhaut Pigmentierung München, Camouflage München, Anastasia Noska"
        keywordsRU="Перманентный макияж Мюнхен, ПМУ Мюнхен, Пудровые брови Мюнхен, Брови Мюнхен, Губы Мюнхен, Пигментация кожи головы Мюнхен, Камуфляж Мюнхен, Анастасия Носка"
      />

      {/* Luxury video background */}
      <VideoBackground />

      {/* Контент */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Services />
        <Process />
        <Gallery />
        <Testimonials />
        <Contact />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
