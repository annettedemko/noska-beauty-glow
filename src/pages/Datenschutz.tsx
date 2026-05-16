import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Datenschutz = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        titleDE="Datenschutzerklärung - Permanent Make-up München | Anastasia Noska"
        titleRU="Политика конфиденциальности - Перманентный макияж Мюнхен | Анастасия Носка"
        descriptionDE="Datenschutzerklärung und Informationen zum Schutz Ihrer persönlichen Daten bei Anastasia Noska, Permanent Make-up München."
        descriptionRU="Политика конфиденциальности и информация о защите ваших персональных данных у Анастасии Носка, перманентный макияж Мюнхен."
      />
      <Navigation />

      <main className="pt-24">
        <section className="py-24 px-6">
          <div className="container max-w-4xl mx-auto">
            {language === "DE" ? (
              // German Version
              <>
                <h1 className="font-serif text-4xl md:text-5xl mb-4 tracking-wide text-accent">
                  DATENSCHUTZERKLÄRUNG
                </h1>
                <p className="text-lg text-muted-foreground mb-16">
                  Informationen zum Datenschutz gemäß DSGVO
                </p>

                <div className="space-y-8 text-base font-light leading-relaxed">
                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">1. Verantwortliche Stelle</h2>
                    <p className="mb-3">
                      Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere der Datenschutz-Grundverordnung (DSGVO), ist:
                    </p>
                    <p className="pl-4">
                      Anastasia Noska<br />
                      Englmannstraße 2, Büro 1A<br />
                      81673 München<br />
                      Deutschland
                    </p>
                    <p className="pl-4 mt-3">
                      Telefon: +49 177 9093936<br />
                      E-Mail: noskaanastasia@gmail.com
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">2. Allgemeine Hinweise zur Datenverarbeitung</h2>
                    <p className="mb-3">
                      Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen.
                      Wir verarbeiten Ihre personenbezogenen Daten ausschließlich im Rahmen der gesetzlichen Bestimmungen der DSGVO sowie des Bundesdatenschutzgesetzes (BDSG).
                    </p>
                    <p>
                      Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">3. Zugriffsdaten / Server-Logfiles</h2>
                    <p className="mb-3">
                      Beim Besuch unserer Website erhebt der Hostinganbieter automatisch Informationen in sogenannten Server-Logfiles. Diese Daten sind in der Regel nicht bestimmten Personen zuordenbar.
                    </p>
                    <p className="mb-2">Erfasst werden insbesondere:</p>
                    <ul className="list-disc pl-8 space-y-1">
                      <li>Browsertyp und Browserversion</li>
                      <li>verwendetes Betriebssystem</li>
                      <li>Referrer URL</li>
                      <li>IP-Adresse</li>
                      <li>Uhrzeit der Serveranfrage</li>
                    </ul>
                    <p className="mt-3">
                      Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der technisch fehlerfreien Bereitstellung sowie der Sicherheit und Stabilität der Website).
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">4. Kontaktaufnahme per E-Mail oder Kontaktformular</h2>
                    <p className="mb-3">
                      Wenn Sie uns per E-Mail oder über ein Kontaktformular kontaktieren, werden Ihre Angaben inklusive der von Ihnen dort angegebenen Kontaktdaten gespeichert, um Ihre Anfrage zu bearbeiten und für den Fall von Anschlussfragen.
                    </p>
                    <p className="mb-2">Diese Daten geben wir nicht ohne Ihre Einwilligung weiter, sofern keine gesetzliche Verpflichtung besteht.</p>
                    <p className="mb-2">Rechtsgrundlage:</p>
                    <ul className="list-disc pl-8 space-y-1">
                      <li>Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung / Vertragserfüllung)</li>
                      <li>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), soweit diese erforderlich ist</li>
                      <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Kommunikation)</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">5. WhatsApp-Kontakt</h2>
                    <p className="mb-3">
                      Wir bieten Ihnen die Möglichkeit, über den Messenger-Dienst WhatsApp mit uns in Kontakt zu treten.
                    </p>
                    <p className="mb-2">Anbieter ist:</p>
                    <p className="pl-4 mb-3">
                      WhatsApp Ireland Limited<br />
                      4 Grand Canal Square<br />
                      Grand Canal Harbour<br />
                      Dublin 2, Irland
                    </p>
                    <p className="mb-3">
                      Bei der Nutzung von WhatsApp werden personenbezogene Daten (z. B. Telefonnummer, Nachrichteninhalte) an Meta Platforms Ireland Limited und Meta Platforms, Inc. (USA) übermittelt.
                    </p>
                    <p className="mb-3">
                      Die Nutzung von WhatsApp erfolgt freiwillig auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.
                    </p>
                    <p>
                      Weitere Informationen finden Sie in der Datenschutzerklärung von WhatsApp:{' '}
                      <a href="https://www.whatsapp.com/legal/privacy-policy-eea" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                        https://www.whatsapp.com/legal/privacy-policy-eea
                      </a>
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">6. Verlinkung zu Instagram / Social Media</h2>
                    <p className="mb-3">
                      Auf unserer Website befinden sich Links zum sozialen Netzwerk Instagram.
                    </p>
                    <p className="mb-2">Anbieter ist:</p>
                    <p className="pl-4 mb-3">
                      Meta Platforms Ireland Limited<br />
                      4 Grand Canal Square<br />
                      Dublin 2, Irland
                    </p>
                    <p className="mb-3">
                      Beim Anklicken des Instagram-Links können personenbezogene Daten an Instagram übermittelt werden. Wir haben keinen Einfluss auf Art, Umfang und Zwecke der durch Instagram erhobenen und verarbeiteten Daten.
                    </p>
                    <p className="mb-3">
                      Rechtsgrundlage:
                      Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer ansprechenden Online-Präsenz)
                    </p>
                    <p>
                      Weitere Informationen zum Datenschutz bei Instagram finden Sie unter:{' '}
                      <a href="https://privacycenter.instagram.com/policy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                        https://privacycenter.instagram.com/policy
                      </a>
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">7. Foto- und Videoaufnahmen (Vorher-/Nachher-Bilder) / Veröffentlichung</h2>
                    <p className="mb-3">
                      Im Rahmen unserer Dienstleistungen (z. B. Permanent Make-up, Camouflage, Pigmentierungen) können Foto- und/oder Videoaufnahmen erstellt werden, insbesondere Vorher-/Nachher-Aufnahmen zur Dokumentation der Behandlung und für Qualitätszwecke.
                    </p>
                    <p className="mb-3">
                      Sofern Foto- oder Videoaufnahmen veröffentlicht werden (z. B. auf unserer Website oder auf unseren Social-Media-Kanälen wie Instagram), erfolgt dies ausschließlich auf Grundlage Ihrer vorherigen Einwilligung.
                    </p>
                    <p className="mb-3">
                      Sie können eine erteilte Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen. Der Widerruf berührt nicht die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung/Veröffentlichung.
                    </p>
                    <p className="mb-2">Rechtsgrundlage:</p>
                    <ul className="list-disc pl-8 space-y-1 mb-3">
                      <li>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) für Veröffentlichung</li>
                      <li>ggf. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an Dokumentation/Qualität), soweit keine Veröffentlichung erfolgt</li>
                    </ul>
                    <p>
                      Hinweis: Bei einer Veröffentlichung auf Social-Media-Plattformen können Daten auch außerhalb der EU verarbeitet werden. Hierauf haben wir keinen Einfluss.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">8. Gesundheitsdaten / Anamnese (Fragebogen vor der Behandlung)</h2>
                    <p className="mb-3">
                      Vor der Behandlung kann ein Anamnesebogen bzw. Gesundheitsfragebogen ausgefüllt werden (z. B. zu Allergien, Vorerkrankungen, Medikamenten, Hautzustand oder Kontraindikationen). Diese Angaben können Gesundheitsdaten im Sinne von Art. 9 DSGVO darstellen.
                    </p>
                    <p className="mb-3">
                      Die Verarbeitung erfolgt ausschließlich zum Zweck der Beurteilung, ob eine Behandlung sicher durchgeführt werden kann, zur Vorbereitung und Durchführung der Behandlung sowie – soweit anwendbar – zur Erfüllung gesetzlicher Dokumentationspflichten.
                    </p>
                    <p className="mb-2">Rechtsgrundlage:</p>
                    <ul className="list-disc pl-8 space-y-1 mb-3">
                      <li>Art. 6 Abs. 1 lit. b DSGVO (Vertrag / Vertragsanbahnung)</li>
                      <li>Art. 9 Abs. 2 lit. a DSGVO (ausdrückliche Einwilligung)</li>
                    </ul>
                    <p>
                      Die Daten werden nur so lange gespeichert, wie dies für die genannten Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">9. Cookies / Einwilligungsmanagement</h2>
                    <p className="mb-3">
                      Unsere Website verwendet Cookies und ähnliche Technologien. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden.
                    </p>
                    <p className="mb-3">
                      Technisch notwendige Cookies werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO eingesetzt (berechtigtes Interesse an einer funktionierenden Website) sowie – soweit einschlägig – § 25 Abs. 2 TDDDG.
                    </p>
                    <p className="mb-3">
                      Sofern darüber hinaus Cookies oder ähnliche Technologien (z. B. zu Analyse- oder Statistikzwecken) eingesetzt werden, erfolgt dies ausschließlich auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG.
                    </p>
                    <p>
                      Nicht technisch notwendige Dienste (z. B. Analyse & Statistik) werden erst nach Ihrer ausdrücklichen Einwilligung über das Cookie-Banner geladen (z. B. durch „Alle akzeptieren" oder durch „Speichern" bei aktivierter Kategorie „Analyse & Statistik"). Sie können Ihre Auswahl jederzeit über die Cookie-Einstellungen ändern und eine erteilte Einwilligung mit Wirkung für die Zukunft widerrufen.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">10. Google Analytics</h2>
                    <p className="mb-3">
                      Diese Website nutzt Google Analytics, einen Webanalysedienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
                    </p>
                    <p className="mb-3">
                      Google Analytics kann Cookies einsetzen und Informationen über die Benutzung der Website verarbeiten (z. B. Online-Kennungen/Cookie-IDs, Geräteinformationen, aufgerufene Seiten, technische Informationen wie IP-Adresse). Google Analytics 4 anonymisiert IP-Adressen automatisch.
                    </p>
                    <p className="mb-3">
                      Rechtsgrundlage:
                      Die Nutzung von Google Analytics erfolgt ausschließlich auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG.
                    </p>
                    <p className="mb-3">
                      Empfänger der Daten kann auch Google LLC (USA) sein. Eine Übermittlung in Drittländer (z. B. USA) kann daher nicht ausgeschlossen werden. Google ist nach dem{' '}
                      <a href="https://www.dataprivacyframework.gov/s/participant-search/participant-detail?id=a2zt000000001L5AAI" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                        EU-U.S. Data Privacy Framework
                      </a>
                      {' '}zertifiziert.
                    </p>
                    <p className="mb-3">
                      Widerruf:
                      Sie können Ihre Einwilligung jederzeit über die Cookie-Einstellungen widerrufen. Der Widerruf hat keinen Einfluss auf die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung.
                    </p>
                    <p>
                      Weitere Informationen:{' '}
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                        https://policies.google.com/privacy
                      </a>
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">11. Google Search Console</h2>
                    <p className="mb-3">
                      Diese Website nutzt Google Search Console zur technischen Analyse und Optimierung der Website.
                      Google Search Console setzt in der Regel keine Cookies auf der Website und verarbeitet ausschließlich aggregierte Auswertungen.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">12. Ahrefs Web Analytics</h2>
                    <p className="mb-3">
                      Diese Website nutzt Ahrefs Web Analytics (Ahrefs Pte. Ltd., Singapur) zur Analyse des Website-Traffics und zur Suchmaschinenoptimierung. Dabei können Cookies eingesetzt sowie technische Zugriffsdaten (z. B. IP-Adresse, User-Agent, aufgerufene Seiten) verarbeitet werden.
                    </p>
                    <p className="mb-3">
                      Ahrefs Web Analytics wird erst nach Ihrer Einwilligung über das Cookie-Banner (Kategorie „Analyse & Statistik") geladen.
                    </p>
                    <p className="mb-3">
                      Rechtsgrundlage:
                      Die Nutzung von Ahrefs Web Analytics erfolgt ausschließlich auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG.
                    </p>
                    <p className="mb-3">
                      Eine Übermittlung in ein Drittland (z. B. Singapur) kann nicht ausgeschlossen werden.
                    </p>
                    <p className="mb-3">
                      Widerruf:
                      Sie können Ihre Einwilligung jederzeit über die Cookie-Einstellungen widerrufen.
                    </p>
                    <p>
                      Weitere Informationen:{' '}
                      <a href="https://ahrefs.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                        https://ahrefs.com/legal/privacy-policy
                      </a>
                      {' / '}
                      <a href="https://ahrefs.com/de/legal/cookie-notice" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                        https://ahrefs.com/de/legal/cookie-notice
                      </a>
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">13. SSL- bzw. TLS-Verschlüsselung</h2>
                    <p className="mb-3">
                      Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung.
                      Eine verschlüsselte Verbindung erkennen Sie an „https://" in der Adresszeile Ihres Browsers.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">14. Speicherdauer</h2>
                    <p className="mb-4">
                      Personenbezogene Daten werden nur so lange gespeichert, wie dies zur Erfüllung der jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen.
                    </p>

                    <h3 className="font-serif text-lg mb-3 text-accent">Konkrete Aufbewahrungsfristen:</h3>

                    <div className="space-y-3 pl-4">
                      <div>
                        <p className="font-medium mb-1">Anamnese / Gesundheitsdaten:</p>
                        <p className="text-sm text-muted-foreground">
                          10 Jahre ab letzter Behandlung (medizinische Dokumentationspflicht)
                        </p>
                      </div>

                      <div>
                        <p className="font-medium mb-1">Fotos ohne Veröffentlichungseinwilligung:</p>
                        <p className="text-sm text-muted-foreground">
                          2 Jahre nach letzter Behandlung, sofern nicht anders vereinbart
                        </p>
                      </div>

                      <div>
                        <p className="font-medium mb-1">Veröffentlichte Fotos (Instagram, Website):</p>
                        <p className="text-sm text-muted-foreground">
                          Bis zum Widerruf der Einwilligung
                        </p>
                      </div>

                      <div>
                        <p className="font-medium mb-1">Buchungsbestätigungen / Rechnungen:</p>
                        <p className="text-sm text-muted-foreground">
                          10 Jahre (HGB § 257 – gesetzliche Aufbewahrungspflicht für Geschäftsunterlagen)
                        </p>
                      </div>

                      <div>
                        <p className="font-medium mb-1">Cookie-Einwilligungen:</p>
                        <p className="text-sm text-muted-foreground">
                          Bis zum Widerruf durch die betroffene Person oder Löschung durch Nutzer (lokaler Speicher)
                        </p>
                      </div>

                      <div>
                        <p className="font-medium mb-1">Kontaktanfragen (E-Mail, WhatsApp):</p>
                        <p className="text-sm text-muted-foreground">
                          Bis zur vollständigen Bearbeitung der Anfrage, längstens 3 Jahre
                        </p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">15. Rechte der betroffenen Personen</h2>
                    <p className="mb-2">Sie haben jederzeit das Recht:</p>
                    <ul className="list-disc pl-8 space-y-1">
                      <li>Auskunft über Ihre gespeicherten Daten zu erhalten (Art. 15 DSGVO)</li>
                      <li>Berichtigung unrichtiger Daten zu verlangen (Art. 16 DSGVO)</li>
                      <li>Löschung Ihrer Daten zu verlangen (Art. 17 DSGVO)</li>
                      <li>Einschränkung der Verarbeitung zu verlangen (Art. 18 DSGVO)</li>
                      <li>Widerspruch gegen die Verarbeitung einzulegen (Art. 21 DSGVO)</li>
                      <li>Datenübertragbarkeit zu verlangen (Art. 20 DSGVO)</li>
                    </ul>
                    <p className="mt-3">
                      Zudem haben Sie das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">16. Zuständige Datenschutzaufsichtsbehörde (Beschwerderecht)</h2>
                    <p className="mb-2">
                      Für nicht-öffentliche Stellen in Bayern ist regelmäßig zuständig:
                    </p>
                    <p className="pl-4 mb-3">
                      Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)<br />
                      Promenade 18<br />
                      91522 Ansbach<br />
                      Deutschland
                    </p>
                    <p>
                      Online-Beschwerde:{' '}
                      <a href="https://www.lda.bayern.de/de/beschwerde.html" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                        https://www.lda.bayern.de/de/beschwerde.html
                      </a>
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">17. Änderungen dieser Datenschutzerklärung</h2>
                    <p className="mb-3">
                      Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht.
                    </p>
                    <p className="text-sm text-muted-foreground">Stand: Januar 2026</p>
                  </section>
                </div>
              </>
            ) : (
              // Russian Version
              <>
                <h1 className="font-serif text-4xl md:text-5xl mb-4 tracking-wide text-accent">
                  ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
                </h1>
                <p className="text-lg text-muted-foreground mb-16">
                  Информация о защите персональных данных в соответствии с GDPR (DSGVO)
                </p>

                <div className="space-y-8 text-base font-light leading-relaxed">
                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">1. Ответственное лицо</h2>
                    <p className="mb-3">
                      Ответственным лицом в смысле законодательства о защите данных, в частности Общего регламента по защите данных (GDPR), является:
                    </p>
                    <p className="pl-4">
                      Anastasia Noska<br />
                      Englmannstraße 2, Büro 1A<br />
                      81673 Мюнхен<br />
                      Германия
                    </p>
                    <p className="pl-4 mt-3">
                      Телефон: +49 177 9093936<br />
                      E-mail: noskaanastasia@gmail.com
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">2. Общая информация об обработке данных</h2>
                    <p className="mb-3">
                      Защита ваших персональных данных является для нас приоритетом.
                      Мы обрабатываем персональные данные исключительно в рамках действующего законодательства о защите данных, в частности GDPR и Федерального закона Германии о защите данных (BDSG).
                    </p>
                    <p>
                      Персональными данными считаются все данные, с помощью которых можно идентифицировать конкретное лицо.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">3. Данные доступа / серверные лог-файлы</h2>
                    <p className="mb-3">
                      При посещении нашего сайта хостинг-провайдер автоматически собирает информацию в так называемых серверных лог-файлах. Эти данные не могут быть напрямую отнесены к конкретному лицу.
                    </p>
                    <p className="mb-2">В частности, фиксируются:</p>
                    <ul className="list-disc pl-8 space-y-1">
                      <li>тип и версия браузера</li>
                      <li>используемая операционная система</li>
                      <li>URL-адрес источника перехода (referrer)</li>
                      <li>IP-адрес</li>
                      <li>время запроса к серверу</li>
                    </ul>
                    <p className="mt-3">
                      Обработка осуществляется на основании ст. 6 ч. 1 п. f GDPR (законный интерес в обеспечении технически корректной, безопасной и стабильной работы сайта).
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">4. Связь по электронной почте или через форму обратной связи</h2>
                    <p className="mb-3">
                      При обращении к нам по электронной почте или через форму обратной связи ваши данные, включая контактную информацию, сохраняются для обработки запроса и возможных последующих вопросов.
                    </p>
                    <p className="mb-2">Передача этих данных третьим лицам без вашего согласия не осуществляется, если не существует законной обязанности.</p>
                    <p className="mb-2">Правовые основания обработки:</p>
                    <ul className="list-disc pl-8 space-y-1">
                      <li>ст. 6 ч. 1 п. b GDPR (подготовка договора / исполнение договора)</li>
                      <li>ст. 6 ч. 1 п. a GDPR (согласие), если требуется</li>
                      <li>ст. 6 ч. 1 п. f GDPR (законный интерес в коммуникации)</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">5. Связь через WhatsApp</h2>
                    <p className="mb-3">
                      Мы предоставляем возможность связаться с нами через мессенджер WhatsApp.
                    </p>
                    <p className="mb-2">Провайдер услуги:</p>
                    <p className="pl-4 mb-3">
                      WhatsApp Ireland Limited<br />
                      4 Grand Canal Square<br />
                      Grand Canal Harbour<br />
                      Dublin 2, Ирландия
                    </p>
                    <p className="mb-3">
                      При использовании WhatsApp персональные данные (например, номер телефона и содержание сообщений) передаются компании Meta Platforms Ireland Limited и Meta Platforms, Inc. (США).
                    </p>
                    <p className="mb-3">
                      Использование WhatsApp является добровольным и осуществляется на основании вашего согласия в соответствии со ст. 6 ч. 1 п. a GDPR.
                    </p>
                    <p>
                      Дополнительную информацию вы можете найти в политике конфиденциальности WhatsApp:{' '}
                      <a href="https://www.whatsapp.com/legal/privacy-policy-eea" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                        https://www.whatsapp.com/legal/privacy-policy-eea
                      </a>
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">6. Ссылки на Instagram / Социальные сети</h2>
                    <p className="mb-3">
                      На нашем сайте размещены ссылки на социальную сеть Instagram.
                    </p>
                    <p className="mb-2">Провайдер:</p>
                    <p className="pl-4 mb-3">
                      Meta Platforms Ireland Limited<br />
                      4 Grand Canal Square<br />
                      Dublin 2, Ирландия
                    </p>
                    <p className="mb-3">
                      При переходе по ссылке на Instagram персональные данные могут передаваться данному сервису. Мы не имеем влияния на характер, объем и цели обработки данных Instagram.
                    </p>
                    <p className="mb-3">
                      Правовое основание:
                      ст. 6 ч. 1 п. f GDPR (законный интерес в представлении нашей онлайн-деятельности).
                    </p>
                    <p>
                      Политика конфиденциальности Instagram:{' '}
                      <a href="https://privacycenter.instagram.com/policy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                        https://privacycenter.instagram.com/policy
                      </a>
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">7. Фото- и видеосъемка (фото До/После) / Публикация</h2>
                    <p className="mb-3">
                      В рамках наших услуг (например, перманентный макияж, камуфляж, пигментация) могут создаваться фото- и/или видеозаписи, в частности фотографии До/После для документации процедуры и в целях контроля качества.
                    </p>
                    <p className="mb-3">
                      Если фото- или видеоматериалы публикуются (например, на нашем сайте или в социальных сетях, таких как Instagram), это происходит исключительно на основании вашего предварительного согласия.
                    </p>
                    <p className="mb-3">
                      Вы можете отозвать данное согласие в любое время с действием на будущее. Отзыв не влияет на законность обработки/публикации, осуществленной до момента отзыва.
                    </p>
                    <p className="mb-2">Правовое основание:</p>
                    <ul className="list-disc pl-8 space-y-1 mb-3">
                      <li>ст. 6 ч. 1 п. a GDPR (согласие) для публикации</li>
                      <li>при необходимости ст. 6 ч. 1 п. f GDPR (законный интерес в документировании/качестве), если публикация не осуществляется</li>
                    </ul>
                    <p>
                      Примечание: При публикации на платформах социальных сетей данные могут обрабатываться за пределами ЕС. На это мы не имеем влияния.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">8. Данные о здоровье / Анамнез (анкета перед процедурой)</h2>
                    <p className="mb-3">
                      Перед процедурой может заполняться анкета анамнеза или медицинская анкета (например, об аллергиях, предыдущих заболеваниях, лекарствах, состоянии кожи или противопоказаниях). Эти данные могут представлять собой данные о здоровье по смыслу ст. 9 GDPR.
                    </p>
                    <p className="mb-3">
                      Обработка осуществляется исключительно с целью оценки безопасности проведения процедуры, подготовки и проведения процедуры, а также – при необходимости – выполнения законных обязательств по документированию.
                    </p>
                    <p className="mb-2">Правовое основание:</p>
                    <ul className="list-disc pl-8 space-y-1 mb-3">
                      <li>ст. 6 ч. 1 п. b GDPR (договор / преддоговорные отношения)</li>
                      <li>ст. 9 ч. 2 п. a GDPR (явное согласие)</li>
                    </ul>
                    <p>
                      Данные хранятся только в течение времени, необходимого для указанных целей, или в соответствии с установленными законом сроками хранения.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">9. Cookies / Управление согласием</h2>
                    <p className="mb-3">
                      Наш сайт использует cookies и аналогичные технологии. Cookies — это небольшие текстовые файлы, сохраняемые на вашем устройстве.
                    </p>
                    <p className="mb-3">
                      Технически необходимые cookies используются на основании ст. 6 ч. 1 п. f GDPR (законный интерес в корректной работе сайта), а также – в соответствующих случаях – § 25 п. 2 TDDDG.
                    </p>
                    <p className="mb-3">
                      Если используются дополнительные cookies или аналогичные технологии (например, для анализа или статистики), это осуществляется исключительно на основании вашего согласия в соответствии со ст. 6 ч. 1 п. a GDPR и § 25 п. 1 TDDDG.
                    </p>
                    <p>
                      Технически необязательные сервисы (например, Анализ и Статистика) загружаются только после вашего явного согласия через cookie-баннер (например, через «Alle akzeptieren» или через «Speichern» при активированной категории «Analyse & Statistik»). Вы можете в любое время изменить свой выбор через настройки cookie и отозвать данное согласие с действием на будущее.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">10. Google Analytics</h2>
                    <p className="mb-3">
                      Наш сайт использует Google Analytics — сервис веб-аналитики компании Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ирландия.
                    </p>
                    <p className="mb-3">
                      Google Analytics может использовать cookies и обрабатывать информацию об использовании сайта (например, онлайн-идентификаторы/cookie-ID, информация об устройстве, посещенные страницы, техническая информация, такая как IP-адрес). Google Analytics 4 автоматически анонимизирует IP-адреса.
                    </p>
                    <p className="mb-3">
                      Правовое основание:
                      Использование Google Analytics осуществляется исключительно на основании вашего согласия в соответствии со ст. 6 ч. 1 п. a GDPR и § 25 п. 1 TDDDG.
                    </p>
                    <p className="mb-3">
                      Получателем данных может также быть Google LLC (США). Передача в третьи страны (например, США) не может быть исключена. Google сертифицирован в рамках{' '}
                      <a href="https://www.dataprivacyframework.gov/s/participant-search/participant-detail?id=a2zt000000001L5AAI" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                        EU-U.S. Data Privacy Framework
                      </a>.
                    </p>
                    <p className="mb-3">
                      Отзыв:
                      Вы можете в любое время отозвать свое согласие через настройки cookie. Отзыв не влияет на законность обработки данных до момента отзыва.
                    </p>
                    <p>
                      Дополнительная информация:{' '}
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                        https://policies.google.com/privacy
                      </a>
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">11. Google Search Console</h2>
                    <p className="mb-3">
                      Мы используем Google Search Console для технического анализа и оптимизации сайта.
                      Google Search Console, как правило, не использует cookies на сайте и обрабатывает только агрегированные данные.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">12. Ahrefs Web Analytics</h2>
                    <p className="mb-3">
                      Наш сайт использует Ahrefs Web Analytics (Ahrefs Pte. Ltd., Сингапур) для анализа трафика сайта и поисковой оптимизации. При этом могут использоваться cookies, а также обрабатываться технические данные доступа (например, IP-адрес, user-agent, посещенные страницы).
                    </p>
                    <p className="mb-3">
                      Ahrefs Web Analytics загружается только после вашего согласия через cookie-баннер (категория «Analyse & Statistik»).
                    </p>
                    <p className="mb-3">
                      Правовое основание:
                      Использование Ahrefs Web Analytics осуществляется исключительно на основании вашего согласия в соответствии со ст. 6 ч. 1 п. a GDPR и § 25 п. 1 TDDDG.
                    </p>
                    <p className="mb-3">
                      Передача в третью страну (например, Сингапур) не может быть исключена.
                    </p>
                    <p className="mb-3">
                      Отзыв:
                      Вы можете в любое время отозвать свое согласие через настройки cookie.
                    </p>
                    <p>
                      Дополнительная информация:{' '}
                      <a href="https://ahrefs.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                        https://ahrefs.com/legal/privacy-policy
                      </a>
                      {' / '}
                      <a href="https://ahrefs.com/de/legal/cookie-notice" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                        https://ahrefs.com/de/legal/cookie-notice
                      </a>
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">13. SSL / TLS-шифрование</h2>
                    <p>
                      Наш сайт использует SSL- или TLS-шифрование для защиты передаваемых данных.
                      Зашифрованное соединение определяется по префиксу «https://» в адресной строке браузера.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">14. Срок хранения данных</h2>
                    <p className="mb-4">
                      Персональные данные хранятся только в течение времени, необходимого для достижения целей обработки, либо в соответствии с установленными законом сроками хранения.
                    </p>

                    <h3 className="font-serif text-lg mb-3 text-accent">Конкретные сроки хранения:</h3>

                    <div className="space-y-3 pl-4">
                      <div>
                        <p className="font-medium mb-1">Анамнез / Медицинские данные:</p>
                        <p className="text-sm text-muted-foreground">
                          10 лет с момента последней процедуры (обязанность медицинской документации)
                        </p>
                      </div>

                      <div>
                        <p className="font-medium mb-1">Фотографии без согласия на публикацию:</p>
                        <p className="text-sm text-muted-foreground">
                          2 года после последней процедуры, если не согласовано иное
                        </p>
                      </div>

                      <div>
                        <p className="font-medium mb-1">Опубликованные фотографии (Instagram, веб-сайт):</p>
                        <p className="text-sm text-muted-foreground">
                          До отзыва согласия
                        </p>
                      </div>

                      <div>
                        <p className="font-medium mb-1">Подтверждения записи / Счета:</p>
                        <p className="text-sm text-muted-foreground">
                          10 лет (HGB § 257 – законодательная обязанность хранения деловых документов)
                        </p>
                      </div>

                      <div>
                        <p className="font-medium mb-1">Согласия на использование cookie:</p>
                        <p className="text-sm text-muted-foreground">
                          До отзыва субъектом данных или удаления пользователем (локальное хранилище)
                        </p>
                      </div>

                      <div>
                        <p className="font-medium mb-1">Контактные запросы (E-mail, WhatsApp):</p>
                        <p className="text-sm text-muted-foreground">
                          До полной обработки запроса, максимум 3 года
                        </p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">15. Права субъектов данных</h2>
                    <p className="mb-2">Вы имеете право:</p>
                    <ul className="list-disc pl-8 space-y-1">
                      <li>получить информацию о хранимых данных (ст. 15 GDPR)</li>
                      <li>требовать исправления неверных данных (ст. 16 GDPR)</li>
                      <li>требовать удаления данных (ст. 17 GDPR)</li>
                      <li>требовать ограничения обработки (ст. 18 GDPR)</li>
                      <li>возражать против обработки (ст. 21 GDPR)</li>
                      <li>требовать передачи данных (ст. 20 GDPR)</li>
                    </ul>
                    <p className="mt-3">
                      Кроме того, вы имеете право подать жалобу в надзорный орган по защите данных.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">16. Компетентный надзорный орган по защите данных (право на жалобу)</h2>
                    <p className="mb-2">
                      Для негосударственных структур в Баварии, как правило, компетентным является:
                    </p>
                    <p className="pl-4 mb-3">
                      Баварское управление по надзору за защитой данных (BayLDA)<br />
                      Promenade 18<br />
                      91522 Ansbach<br />
                      Германия
                    </p>
                    <p>
                      Онлайн-жалоба:{' '}
                      <a href="https://www.lda.bayern.de/de/beschwerde.html" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                        https://www.lda.bayern.de/de/beschwerde.html
                      </a>
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">17. Изменения политики конфиденциальности</h2>
                    <p className="mb-3">
                      Мы оставляем за собой право изменять данную политику конфиденциальности с целью ее актуализации и соответствия действующим правовым требованиям.
                    </p>
                    <p className="text-sm text-muted-foreground">Версия: январь 2026 года</p>
                  </section>
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

export default Datenschutz;
