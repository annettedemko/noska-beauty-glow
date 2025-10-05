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
import { WatercolorBackground } from "@/components/WatercolorBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Акварельные разводы по всей странице */}
      <WatercolorBackground />

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
