import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Impressum = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        titleDE="Impressum - Permanent Make-up München | Anastasia Noska"
        titleRU="Impressum - Перманентный макияж Мюнхен | Анастасия Носка"
        descriptionDE="Impressum und rechtliche Angaben von Anastasia Noska, Permanent Make-up Spezialistin in München."
        descriptionRU="Impressum и юридическая информация Анастасии Носка, специалиста по перманентному макияжу в Мюнхене."
      />
      <Navigation />

      <main className="pt-24">
        <section className="py-24 px-6">
          <div className="container max-w-4xl mx-auto">
            {language === "DE" ? (
              // German Version
              <>
                <h1 className="font-serif text-4xl md:text-5xl mb-4 tracking-wide text-accent">
                  IMPRESSUM
                </h1>
                <p className="text-lg text-muted-foreground mb-16">
                  Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)
                </p>

                <div className="space-y-12 text-base font-light leading-relaxed">
                  <section>
                    <p className="mb-4">
                      <strong>Anastasia Noska</strong><br />
                      Einzelunternehmerin (Gewerbetreibende)
                    </p>

                    <div className="mb-4">
                      <p className="font-medium mb-2">Geschäftsadresse (für Post / Impressum):</p>
                      <p className="pl-4">
                        Aubingerstraße 147<br />
                        81243 München<br />
                        Deutschland
                      </p>
                    </div>

                    <div className="mb-4">
                      <p className="font-medium mb-2">Studio / Behandlungsort:</p>
                      <p className="pl-4">
                        Hildegardstraße 4<br />
                        80539 München<br />
                        Deutschland
                      </p>
                    </div>

                    <div className="mb-4">
                      <p className="font-medium mb-2">Kontakt:</p>
                      <p className="pl-4">
                        Telefon: +49 177 9093936<br />
                        E-Mail: noskaanastasia@gmail.com
                      </p>
                    </div>

                    <div className="mb-4">
                      <p className="font-medium mb-2">Umsatzsteuer:</p>
                      <p className="pl-4">
                        Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.
                      </p>
                    </div>

                    <div>
                      <p className="font-medium mb-2">Zuständige Aufsichtsbehörde:</p>
                      <p className="pl-4">
                        Landeshauptstadt München
                      </p>
                    </div>
                  </section>

                  <div className="my-8 border-t border-charcoal/20"></div>

                  <section>
                    <h2 className="font-serif text-2xl mb-6 text-accent">Haftungsausschluss</h2>

                    <div className="mb-6">
                      <h3 className="font-serif text-xl mb-3 text-accent/80">Haftung für Inhalte</h3>
                      <p>
                        Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
                        Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir jedoch keine Gewähr.
                      </p>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-serif text-xl mb-3 text-accent/80">Haftung für Links</h3>
                      <p>
                        Unsere Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                        Für diese fremden Inhalte übernehmen wir daher keine Gewähr.
                        Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-serif text-xl mb-3 text-accent/80">Urheberrecht</h3>
                      <p>
                        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf dieser Website unterliegen dem deutschen Urheberrecht.
                        Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts
                        bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                      </p>
                    </div>
                  </section>

                  <div className="text-sm text-muted-foreground pt-6 border-t border-charcoal/20">
                    Stand: Dezember 2025
                  </div>
                </div>
              </>
            ) : (
              // Russian Version
              <>
                <h1 className="font-serif text-4xl md:text-5xl mb-4 tracking-wide text-accent">
                  IMPRESSUM
                </h1>
                <p className="text-lg text-muted-foreground mb-16">
                  Информация согласно § 5 Закона о цифровых услугах (DDG)
                </p>

                <div className="space-y-12 text-base font-light leading-relaxed">
                  <section>
                    <p className="mb-4">
                      <strong>Anastasia Noska</strong><br />
                      Индивидуальный предприниматель
                    </p>

                    <div className="mb-4">
                      <p className="font-medium mb-2">Юридический адрес (для корреспонденции / Impressum):</p>
                      <p className="pl-4">
                        Aubingerstraße 147<br />
                        81243 Мюнхен<br />
                        Германия
                      </p>
                    </div>

                    <div className="mb-4">
                      <p className="font-medium mb-2">Студия / место проведения процедур:</p>
                      <p className="pl-4">
                        Hildegardstraße 4<br />
                        80539 Мюнхен<br />
                        Германия
                      </p>
                    </div>

                    <div className="mb-4">
                      <p className="font-medium mb-2">Контакты:</p>
                      <p className="pl-4">
                        Телефон: +49 177 9093936<br />
                        E-mail: noskaanastasia@gmail.com
                      </p>
                    </div>

                    <div className="mb-4">
                      <p className="font-medium mb-2">Налог с оборота (НДС):</p>
                      <p className="pl-4">
                        Согласно § 19 UStG налог с оборота не взимается.
                      </p>
                    </div>

                    <div>
                      <p className="font-medium mb-2">Компетентный надзорный орган:</p>
                      <p className="pl-4">
                        Landeshauptstadt München
                      </p>
                    </div>
                  </section>

                  <div className="my-8 border-t border-charcoal/20"></div>

                  <section>
                    <h2 className="font-serif text-2xl mb-6 text-accent">Отказ от ответственности</h2>

                    <div className="mb-6">
                      <h3 className="font-serif text-xl mb-3 text-accent/80">Ответственность за содержание</h3>
                      <p>
                        Содержание нашего сайта было создано с максимальной тщательностью.
                        Однако мы не можем гарантировать правильность, полноту и актуальность содержания.
                      </p>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-serif text-xl mb-3 text-accent/80">Ответственность за ссылки</h3>
                      <p>
                        Наш сайт содержит ссылки на внешние сайты третьих лиц, на содержание которых мы не имеем влияния.
                        Поэтому мы не можем нести ответственность за это стороннее содержание.
                        За содержание связанных страниц всегда несет ответственность соответствующий поставщик или оператор.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-serif text-xl mb-3 text-accent/80">Авторское право</h3>
                      <p>
                        Содержание и работы, созданные операторами сайта на этом веб-сайте, подпадают под действие немецкого авторского права.
                        Воспроизведение, обработка, распространение и любое использование за пределами авторского права
                        требуют письменного согласия соответствующего автора или создателя.
                      </p>
                    </div>
                  </section>

                  <div className="text-sm text-muted-foreground pt-6 border-t border-charcoal/20">
                    Версия: декабрь 2025 года
                  </div>
                </div>
              </>
            )}

            <div className="mt-16 text-center">
              <Link
                to="/"
                className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] hover:text-accent transition-colors duration-300"
              >
                <span className="transform group-hover:-translate-x-2 transition-transform duration-300">←</span>
                <span>{language === "DE" ? "Zurück zur Hauptseite" : "Вернуться на главную"}</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Impressum;
