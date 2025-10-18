import { useLanguage } from "@/contexts/LanguageContext";
import { FAQSchema } from "@/components/FAQSchema";
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

  // FAQ Schema data for both languages
  const faqsDE = [
    {
      question: "Wie kann ich einen Termin buchen?",
      answer: "Sie können direkt über WhatsApp, per E-Mail oder über Treatwell einen Termin vereinbaren. Ich melde mich zeitnah bei Ihnen zurück."
    },
    {
      question: "Wie lange hält das Permanent Make-up?",
      answer: "Die Haltbarkeit beträgt in der Regel 1-3 Jahre, abhängig von Hauttyp, Pflege und Sonneneinstrahlung. Eine Auffrischung wird empfohlen."
    },
    {
      question: "Gibt es Kontraindikationen?",
      answer: "Ja, bei Schwangerschaft, Stillzeit, Diabetes, Hauterkrankungen oder Blutgerinnungsstörungen sollte auf die Behandlung verzichtet werden. Bitte kontaktieren Sie mich für eine persönliche Beratung."
    }
  ];

  const faqsRU = [
    {
      question: "Как записаться на процедуру?",
      answer: "Вы можете записаться через WhatsApp, по электронной почте или через Treatwell. Я свяжусь с вами в ближайшее время."
    },
    {
      question: "Сколько держится результат?",
      answer: "Обычно 1-3 года, в зависимости от типа кожи, ухода и воздействия солнца. Рекомендуется обновление."
    },
    {
      question: "Есть ли противопоказания?",
      answer: "Да, при беременности, грудном вскармливании, диабете, кожных заболеваниях или нарушениях свертываемости крови процедура не рекомендуется. Пожалуйста, свяжитесь со мной для консультации."
    }
  ];

  return (
    <section className="py-24 px-6 bg-background">
      {/* FAQ Schema.org markup */}
      <FAQSchema faqsDE={faqsDE} faqsRU={faqsRU} />

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
