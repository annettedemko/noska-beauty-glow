import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
            {/* Root redirect to default language (German) */}
            <Route path="/" element={<Navigate to="/de" replace />} />

            {/* German routes */}
            <Route path="/de" element={<Index />} />
            <Route path="/de/kopfhaut-muenchen" element={<Kopfhaut />} />
            <Route path="/de/camouflage-muenchen" element={<Camouflage />} />
            <Route path="/de/remover-muenchen" element={<Remover />} />
            <Route path="/de/services-muenchen" element={<Services />} />
            <Route path="/de/impressum" element={<Impressum />} />
            <Route path="/de/datenschutz" element={<Datenschutz />} />

            {/* Russian routes */}
            <Route path="/ru" element={<Index />} />
            <Route path="/ru/kopfhaut-muenchen" element={<Kopfhaut />} />
            <Route path="/ru/camouflage-muenchen" element={<Camouflage />} />
            <Route path="/ru/remover-muenchen" element={<Remover />} />
            <Route path="/ru/services-muenchen" element={<Services />} />
            <Route path="/ru/impressum" element={<Impressum />} />
            <Route path="/ru/datenschutz" element={<Datenschutz />} />

            {/* 301 Redirects from old URLs to new German URLs */}
            <Route path="/kopfhaut-muenchen" element={<Navigate to="/de/kopfhaut-muenchen" replace />} />
            <Route path="/camouflage-muenchen" element={<Navigate to="/de/camouflage-muenchen" replace />} />
            <Route path="/remover-muenchen" element={<Navigate to="/de/remover-muenchen" replace />} />
            <Route path="/services-muenchen" element={<Navigate to="/de/services-muenchen" replace />} />
            <Route path="/kopfhaut" element={<Navigate to="/de/kopfhaut-muenchen" replace />} />
            <Route path="/camouflage" element={<Navigate to="/de/camouflage-muenchen" replace />} />
            <Route path="/remover" element={<Navigate to="/de/remover-muenchen" replace />} />
            <Route path="/services" element={<Navigate to="/de/services-muenchen" replace />} />
            <Route path="/impressum" element={<Navigate to="/de/impressum" replace />} />
            <Route path="/datenschutz" element={<Navigate to="/de/datenschutz" replace />} />

            {/* 404 - ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
