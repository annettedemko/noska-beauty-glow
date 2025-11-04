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
import { StructuredData } from "@/components/StructuredData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <SEOHead
        titleDE="Permanent Make-up München – Powder Brows, Lippen | Anastasia Noska ★★★★★"
        titleRU="Перманентный макияж Мюнхен – пудровые брови, губы | Анастасия Носка ★★★★★"
        descriptionDE="Permanent Make-up München ✓ Powder Brows 180€ ✓ Aquarell Lippen 200€ ✓ Kopfhaut Pigmentierung ✓ Camouflage ab 200€ ✓ 6 Google Bewertungen: 5.0★ ✓ Natürliche Ergebnisse ✓ Jetzt Termin!"
        descriptionRU="Перманентный макияж Мюнхен ✓ Пудровые брови 180€ ✓ Акварельные губы 200€ ✓ Пигментация кожи головы ✓ Камуфляж от 200€ ✓ 6 отзывов Google: 5.0★ ✓ Запишитесь!"
        keywordsDE="Permanent Make-up München, PMU München, Powder Brows München, Augenbrauen München, Lippen München, Lidstrich München, Kopfhaut Pigmentierung München, Camouflage München, Anastasia Noska, beste PMU München, 5 Sterne Bewertung"
        keywordsRU="Перманентный макияж Мюнхен, ПМУ Мюнхен, Пудровые брови Мюнхен, Брови Мюнхен, Губы Мюнхен, Пигментация кожи головы Мюнхен, Камуфляж Мюнхен, Анастасия Носка, лучший ПМУ Мюнхен, 5 звезд"
      />
      <StructuredData />

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
