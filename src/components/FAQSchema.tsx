import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqsDE: FAQItem[];
  faqsRU: FAQItem[];
}

export const FAQSchema = ({ faqsDE, faqsRU }: FAQSchemaProps) => {
  const { language } = useLanguage();

  useEffect(() => {
    // Remove any existing FAQ schema
    const existingScript = document.getElementById("faq-schema");
    if (existingScript) {
      existingScript.remove();
    }

    // Select FAQs based on current language
    const faqs = language === "DE" ? faqsDE : faqsRU;
    const lang = language === "DE" ? "de" : "ru";

    // Create FAQPage schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "inLanguage": lang,
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    // Create script element with JSON-LD
    const script = document.createElement("script");
    script.id = "faq-schema";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(faqSchema, null, 2);

    // Append to head
    document.head.appendChild(script);

    // Cleanup on unmount
    return () => {
      const scriptToRemove = document.getElementById("faq-schema");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [language, faqsDE, faqsRU]);

  return null; // This component doesn't render anything
};
