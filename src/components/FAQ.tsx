import { useLanguage } from "@/contexts/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const { t } = useLanguage();

  const faqs = [
    { q: t("faq1Q"), a: t("faq1A") },
    { q: t("faq2Q"), a: t("faq2A") },
    { q: t("faq3Q"), a: t("faq3A") },
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="container max-w-4xl mx-auto">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl text-center mb-20 tracking-[0.05em] sm:tracking-[0.1em] md:tracking-[0.2em] uppercase break-words px-2">
          {t("faqTitle")}
        </h2>

        <Accordion type="single" collapsible className="space-y-1">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-accent"
            >
              <AccordionTrigger className="text-left hover:no-underline py-8 text-lg font-light">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-8 text-base">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
