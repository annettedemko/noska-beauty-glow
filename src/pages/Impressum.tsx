import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24">
        <section className="py-24 px-6">
          <div className="container max-w-4xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl mb-12 tracking-[0.2em] uppercase">
              Impressum
            </h1>

            <div className="prose prose-lg max-w-none">
              <div className="space-y-8 text-base font-light leading-relaxed">
                <div>
                  <h2 className="font-serif text-2xl mb-4">Angaben gemäß § 5 TMG</h2>
                  <p>
                    Anastasia Noska<br />
                    Permanent Make-up<br />
                    Hildegardstr. 4<br />
                    80539 München
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl mb-4">Kontakt</h2>
                  <p>
                    Telefon: +49 177 9093936<br />
                    E-Mail: noskaanastasia@gmail.com
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl mb-4">Haftungsausschluss</h2>
                  <h3 className="font-sans text-lg mb-2">Haftung für Inhalte</h3>
                  <p>
                    Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                  </p>
                </div>

                <div>
                  <h3 className="font-sans text-lg mb-2">Haftung für Links</h3>
                  <p>
                    Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                  </p>
                </div>

                <div>
                  <h3 className="font-sans text-lg mb-2">Urheberrecht</h3>
                  <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/"
                className="inline-block text-sm uppercase tracking-widest hover:text-accent transition-colors"
              >
                ← Zurück zur Hauptseite
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
