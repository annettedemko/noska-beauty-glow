import { useLanguage } from "@/contexts/LanguageContext";

export const Process = () => {
  const { t } = useLanguage();

  const steps = [
    { title: t("step1Title"), desc: t("step1Desc") },
    { title: t("step2Title"), desc: t("step2Desc") },
    { title: t("step3Title"), desc: t("step3Desc") },
    { title: t("step4Title"), desc: t("step4Desc") },
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="container max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl md:text-5xl text-center mb-20 tracking-[0.2em] uppercase">
          {t("processTitle")}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="space-y-6">
              <div className="font-serif text-7xl text-accent/30 leading-none">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="space-y-3">
                <h3 className="font-sans text-lg md:text-xl tracking-wide uppercase">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base font-light leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
