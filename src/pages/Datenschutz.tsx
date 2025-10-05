import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24">
        <section className="py-24 px-6">
          <div className="container max-w-4xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl mb-12 tracking-[0.2em] uppercase">
              Datenschutzerklärung
            </h1>

            <div className="prose prose-lg max-w-none">
              <div className="space-y-8 text-base font-light leading-relaxed">
                <div>
                  <h2 className="font-serif text-2xl mb-4">1. Datenschutz auf einen Blick</h2>
                  <h3 className="font-sans text-lg mb-2">Allgemeine Hinweise</h3>
                  <p>
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl mb-4">2. Datenerfassung auf unserer Website</h2>
                  <h3 className="font-sans text-lg mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
                  <p>
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                  </p>
                </div>

                <div>
                  <h3 className="font-sans text-lg mb-2">Wie erfassen wir Ihre Daten?</h3>
                  <p>
                    Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                  </p>
                  <p>
                    Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
                  </p>
                </div>

                <div>
                  <h3 className="font-sans text-lg mb-2">Wofür nutzen wir Ihre Daten?</h3>
                  <p>
                    Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
                  <h3 className="font-sans text-lg mb-2">Datenschutz</h3>
                  <p>
                    Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl mb-4">4. Kontaktaufnahme</h2>
                  <p>
                    Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten, bei Auskünften, Berichtigung, Sperrung oder Löschung von Daten wenden Sie sich bitte an:
                  </p>
                  <p>
                    Anastasia Noska<br />
                    Hildegardstr. 4<br />
                    80539 München<br />
                    E-Mail: noskaanastasia@gmail.com
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

export default Datenschutz;
