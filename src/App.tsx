import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Kopfhaut from "./pages/Kopfhaut";
import Camouflage from "./pages/Camouflage";
import Remover from "./pages/Remover";
import Services from "./pages/Services";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/kopfhaut-muenchen" element={<Kopfhaut />} />
            <Route path="/camouflage-muenchen" element={<Camouflage />} />
            <Route path="/remover-muenchen" element={<Remover />} />
            <Route path="/services-muenchen" element={<Services />} />
            {/* Redirect old URLs to new SEO-friendly URLs */}
            <Route path="/kopfhaut" element={<Kopfhaut />} />
            <Route path="/camouflage" element={<Camouflage />} />
            <Route path="/remover" element={<Remover />} />
            <Route path="/services" element={<Services />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
