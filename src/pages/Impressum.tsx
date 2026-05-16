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
                  Angaben gemäß § 5 DDG i. V. m. § 5 TMG
                </p>

                <div className="space-y-8 text-base font-light leading-relaxed">
                  <section>
                    <p className="mb-6">
                      <strong>Anastasia Noska</strong><br />
                      Einzelunternehmerin (Gewerbetreibende)
                    </p>

                    <div className="mb-6">
                      <p className="font-medium mb-2">Geschäfts- und Studioadresse:</p>
                      <p className="pl-4">
                        Englmannstraße 2, Büro 1A<br />
                        81673 München<br />
                        Deutschland
                      </p>
                    </div>

                    <div className="mb-6">
                      <p className="font-medium mb-2">Kontakt:</p>
                      <p className="pl-4">
                        Telefon: +49 177 9093936<br />
                        E-Mail: noskaanastasia@gmail.com
                      </p>
                    </div>

                    <div className="mb-6">
                      <p className="font-medium mb-2">Umsatzsteuer:</p>
                      <p className="pl-4">
                        Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.
                      </p>
                    </div>

                    <div className="mb-8">
                      <p className="font-medium mb-2">Zuständige Aufsichtsbehörde:</p>
                      <p className="pl-4">
                        Landeshauptstadt München – Kreisverwaltungsreferat
                      </p>
                    </div>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">Social Media</h2>
                    <p className="mb-2">
                      Dieses Impressum gilt auch für folgende Online-Präsenzen:
                    </p>
                    <ul className="list-disc list-inside pl-4 space-y-1">
                      <li>Instagram</li>
                      <li>Facebook</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">Haftung für Inhalte</h2>
                    <p>
                      Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                      Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">Haftung für Links</h2>
                    <p>
                      Unsere Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                      Für diese Inhalte übernehmen wir keine Haftung. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">Urheberrecht</h2>
                    <p>
                      Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf dieser Website unterliegen dem deutschen Urheberrecht.
                      Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung der jeweiligen Urheberin.
                    </p>
                  </section>

                  <div className="text-sm text-muted-foreground pt-8">
                    Stand: Januar 2026
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
                  Информация согласно § 5 DDG совм. с § 5 TMG
                </p>

                <div className="space-y-8 text-base font-light leading-relaxed">
                  <section>
                    <p className="mb-6">
                      <strong>Anastasia Noska</strong><br />
                      Индивидуальный предприниматель
                    </p>

                    <div className="mb-6">
                      <p className="font-medium mb-2">Юридический адрес / место проведения процедур:</p>
                      <p className="pl-4">
                        Englmannstraße 2, Büro 1A<br />
                        81673 Мюнхен<br />
                        Германия
                      </p>
                    </div>

                    <div className="mb-6">
                      <p className="font-medium mb-2">Контакты:</p>
                      <p className="pl-4">
                        Телефон: +49 177 9093936<br />
                        E-mail: noskaanastasia@gmail.com
                      </p>
                    </div>

                    <div className="mb-6">
                      <p className="font-medium mb-2">Налог с оборота (НДС):</p>
                      <p className="pl-4">
                        Согласно § 19 UStG налог с оборота не взимается.
                      </p>
                    </div>

                    <div className="mb-8">
                      <p className="font-medium mb-2">Компетентный надзорный орган:</p>
                      <p className="pl-4">
                        Landeshauptstadt München – Kreisverwaltungsreferat
                      </p>
                    </div>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">Социальные сети</h2>
                    <p className="mb-2">
                      Данный Impressum также действителен для следующих онлайн-присутствий:
                    </p>
                    <ul className="list-disc list-inside pl-4 space-y-1">
                      <li>Instagram</li>
                      <li>Facebook</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">Ответственность за содержание</h2>
                    <p>
                      Как поставщик услуг мы несём ответственность за собственное содержание на этих страницах в соответствии с § 7 п. 1 DDG согласно общим законам.
                      Однако мы не можем гарантировать правильность, полноту и актуальность содержания.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">Ответственность за ссылки</h2>
                    <p>
                      Наш сайт содержит ссылки на внешние сайты третьих лиц, на содержание которых мы не имеем влияния.
                      За это содержание мы не несём ответственности. За содержание связанных страниц всегда несет ответственность соответствующий поставщик или оператор.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">Авторское право</h2>
                    <p>
                      Содержание и работы, созданные владелицей сайта на этом веб-сайте, подпадают под действие немецкого авторского права.
                      Воспроизведение, обработка, распространение и любое использование за пределами авторского права требуют письменного согласия соответствующей правообладательницы.
                    </p>
                  </section>

                  <div className="text-sm text-muted-foreground pt-8">
                    Версия: январь 2026 года
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
