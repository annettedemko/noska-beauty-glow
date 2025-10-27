import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ScrollToTop } from "@/components/ScrollToTop";

// Lazy load pages for better performance
import Index from "./pages/Index"; // Keep home page eager
const Kopfhaut = lazy(() => import("./pages/Kopfhaut"));
const Camouflage = lazy(() => import("./pages/Camouflage"));
const Remover = lazy(() => import("./pages/Remover"));
const Services = lazy(() => import("./pages/Services"));
const Impressum = lazy(() => import("./pages/Impressum"));
const Datenschutz = lazy(() => import("./pages/Datenschutz"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => (
  <BrowserRouter>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ScrollToTop />
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div></div>}>
            <Routes>
            {/* German routes (default, no language prefix) */}
            <Route path="/" element={<Index />} />
            <Route path="/kopfhaut-muenchen" element={<Kopfhaut />} />
            <Route path="/camouflage-muenchen" element={<Camouflage />} />
            <Route path="/remover-muenchen" element={<Remover />} />
            <Route path="/services-muenchen" element={<Services />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />

            {/* Russian routes (with /ru prefix) */}
            <Route path="/ru" element={<Index />} />
            <Route path="/ru/kopfhaut-muenchen" element={<Kopfhaut />} />
            <Route path="/ru/camouflage-muenchen" element={<Camouflage />} />
            <Route path="/ru/remover-muenchen" element={<Remover />} />
            <Route path="/ru/services-muenchen" element={<Services />} />
            <Route path="/ru/impressum" element={<Impressum />} />
            <Route path="/ru/datenschutz" element={<Datenschutz />} />

            {/* 301 Redirects from old /de/ URLs to new German URLs (without prefix) */}
            <Route path="/de" element={<Navigate to="/" replace />} />
            <Route path="/de/kopfhaut-muenchen" element={<Navigate to="/kopfhaut-muenchen" replace />} />
            <Route path="/de/camouflage-muenchen" element={<Navigate to="/camouflage-muenchen" replace />} />
            <Route path="/de/remover-muenchen" element={<Navigate to="/remover-muenchen" replace />} />
            <Route path="/de/services-muenchen" element={<Navigate to="/services-muenchen" replace />} />
            <Route path="/de/impressum" element={<Navigate to="/impressum" replace />} />
            <Route path="/de/datenschutz" element={<Navigate to="/datenschutz" replace />} />

            {/* Legacy redirects (old URLs without -muenchen suffix) */}
            <Route path="/kopfhaut" element={<Navigate to="/kopfhaut-muenchen" replace />} />
            <Route path="/camouflage" element={<Navigate to="/camouflage-muenchen" replace />} />
            <Route path="/remover" element={<Navigate to="/remover-muenchen" replace />} />
            <Route path="/services" element={<Navigate to="/services-muenchen" replace />} />

            {/* 404 - ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </TooltipProvider>
      </LanguageProvider>
    </BrowserRouter>
);

export default App;
