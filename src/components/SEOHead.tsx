import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

interface SEOHeadProps {
  titleDE: string;
  titleRU: string;
  descriptionDE: string;
  descriptionRU: string;
  keywordsDE?: string;
  keywordsRU?: string;
  ogImageDE?: string;
  ogImageRU?: string;
}

export const SEOHead = ({
  titleDE,
  titleRU,
  descriptionDE,
  descriptionRU,
  keywordsDE = "",
  keywordsRU = "",
  ogImageDE = "https://noskabeautyglow.com/logo%20A.png",
  ogImageRU = "https://noskabeautyglow.com/logo%20A.png",
}: SEOHeadProps) => {
  const { language } = useLanguage();
  const location = useLocation();
  const baseUrl = "https://noskabeautyglow.com";

  // Determine current language and corresponding content
  const isGerman = language === "DE";
  const title = isGerman ? titleDE : titleRU;
  const description = isGerman ? descriptionDE : descriptionRU;
  const keywords = isGerman ? keywordsDE : keywordsRU;
  const ogImage = isGerman ? ogImageDE : ogImageRU;
  const locale = isGerman ? "de_DE" : "ru_RU";
  const langCode = isGerman ? "de" : "ru";

  // Build canonical URL
  const canonicalUrl = `${baseUrl}${location.pathname}`;

  // Build alternate URLs
  // German has no prefix, Russian has /ru prefix
  const pathWithoutLang = location.pathname.replace(/^\/ru/, "");
  const deUrl = `${baseUrl}${pathWithoutLang || "/"}`;
  const ruUrl = `${baseUrl}/ru${pathWithoutLang || ""}`;

  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, attr: "name" | "property" = "name") => {
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Update or create link tags
    const updateLinkTag = (rel: string, href: string, hreflang?: string) => {
      const selector = hreflang
        ? `link[rel="${rel}"][hreflang="${hreflang}"]`
        : `link[rel="${rel}"]`;

      let element = document.querySelector(selector) as HTMLLinkElement;
      if (!element) {
        element = document.createElement("link");
        element.rel = rel;
        if (hreflang) element.hreflang = hreflang;
        document.head.appendChild(element);
      }
      element.href = href;
    };

    // Basic meta tags
    updateMetaTag("description", description);
    if (keywords) updateMetaTag("keywords", keywords);
    updateMetaTag("author", "Anastasia Noska");
    updateMetaTag("geo.region", "DE-BY");
    updateMetaTag("geo.placename", "München");

    // Open Graph tags
    updateMetaTag("og:title", title, "property");
    updateMetaTag("og:description", description, "property");
    updateMetaTag("og:type", "website", "property");
    updateMetaTag("og:locale", locale, "property");
    updateMetaTag("og:url", canonicalUrl, "property");
    updateMetaTag("og:image", ogImage, "property");
    updateMetaTag("og:image:type", "image/png", "property");
    updateMetaTag("og:image:alt", `Permanent Make-up München - Anastasia Noska Logo`, "property");

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:site", "@anastasia__noska");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", ogImage);
    updateMetaTag("twitter:image:alt", `Permanent Make-up München - Anastasia Noska Logo`);

    // Canonical link
    updateLinkTag("canonical", canonicalUrl);

    // hreflang links
    updateLinkTag("alternate", deUrl, "de");
    updateLinkTag("alternate", ruUrl, "ru");
    updateLinkTag("alternate", deUrl, "x-default"); // German as default

    // Update HTML lang attribute (already done in LanguageContext, but ensuring it here too)
    document.documentElement.lang = langCode;
  }, [title, description, keywords, ogImage, canonicalUrl, deUrl, ruUrl, locale, langCode]);

  return null; // This component doesn't render anything
};
