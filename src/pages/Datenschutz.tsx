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
                      Aubingerstraße 147<br />
                      81243 München<br />
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
                      <li>Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung)</li>
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
                      Bei der Nutzung von WhatsApp können personenbezogene Daten (z. B. Telefonnummer, Nachrichteninhalte) verarbeitet und an Server von WhatsApp übermittelt werden. Es kann nicht ausgeschlossen werden, dass dabei Daten auch an Meta Platforms, Inc. in den USA übermittelt werden.
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
                    <ul className="list-disc pl-8 space-y-1">
                      <li>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</li>
                      <li>ggf. Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)</li>
                    </ul>
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
                      Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden.
                    </p>
                    <p className="mb-3">
                      Technisch notwendige Cookies werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO eingesetzt (berechtigtes Interesse an einer funktionierenden Website).
                    </p>
                    <p className="mb-3">
                      Sofern darüber hinaus Cookies oder ähnliche Technologien (z. B. zu Analyse- oder Statistikzwecken) eingesetzt werden, erfolgt dies ausschließlich auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG.
                    </p>
                    <p className="mb-3">
                      Nicht technisch notwendige Cookies werden erst nach Ihrer ausdrücklichen Einwilligung über das Cookie-Banner gesetzt. Sie können Ihre Auswahl jederzeit über die Cookie-Einstellungen ändern und eine erteilte Einwilligung mit Wirkung für die Zukunft widerrufen.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">10. Google Analytics</h2>
                    <p className="mb-3">
                      Diese Website nutzt Google Analytics, einen Webanalysedienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
                    </p>
                    <p className="mb-3">
                      Google Analytics kann Cookies einsetzen und Informationen über die Benutzung der Website verarbeiten (z. B. Online-Kennungen/Cookie-IDs, Geräteinformationen, aufgerufene Seiten, technische Informationen wie IP-Adresse).
                    </p>
                    <p className="mb-3">
                      Rechtsgrundlage: Die Nutzung von Google Analytics erfolgt ausschließlich auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG.
                    </p>
                    <p className="mb-3">
                      Empfänger der Daten kann auch Google LLC (USA) sein. Eine Übermittlung in Drittländer (z. B. USA) kann daher nicht ausgeschlossen werden. Google ist nach dem EU-U.S. Data Privacy Framework zertifiziert.
                    </p>
                    <p>
                      Widerruf: Sie können Ihre Einwilligung jederzeit über die Cookie-Einstellungen widerrufen. Der Widerruf hat keinen Einfluss auf die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung.
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
                    <h2 className="font-serif text-2xl mb-4 text-accent">12. Ahrefs Analytics</h2>
                    <p className="mb-3">
                      Diese Website nutzt Ahrefs Analytics (Ahrefs Pte. Ltd., Singapur) zur Analyse des Website-Traffics und zur Suchmaschinenoptimierung. Ahrefs Analytics kann Cookies einsetzen und technische Zugriffsdaten (z. B. IP-Adresse, User-Agent, besuchte Seiten) verarbeiten.
                    </p>
                    <p>
                      Die Nutzung erfolgt ausschließlich auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Sie können Ihre Einwilligung jederzeit über die Cookie-Einstellungen widerrufen.
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
                    <p>
                      Personenbezogene Daten werden nur so lange gespeichert, wie dies zur Erfüllung der jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen.
                    </p>
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
                    <h2 className="font-serif text-2xl mb-4 text-accent">16. Änderungen dieser Datenschutzerklärung</h2>
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
                      Aubingerstraße 147<br />
                      81243 Мюнхен<br />
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
                    <p className="mb-2">Передача этих данных третьим лицам без вашего согласия не осуществляется.</p>
                    <p className="mb-2">Правовые основания обработки:</p>
                    <ul className="list-disc pl-8 space-y-1">
                      <li>ст. 6 ч. 1 п. b GDPR (подготовка договора)</li>
                      <li>ст. 6 ч. 1 п. a GDPR (согласие)</li>
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
                      При использовании WhatsApp могут обрабатываться персональные данные (например, номер телефона и содержание сообщений). Не исключено, что данные могут передаваться компании Meta Platforms Inc. в США.
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
                    <ul className="list-disc pl-8 space-y-1">
                      <li>ст. 6 ч. 1 п. a GDPR (согласие)</li>
                      <li>при необходимости ст. 6 ч. 1 п. b GDPR (исполнение договора)</li>
                    </ul>
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
                      Наш сайт использует файлы cookie. Cookies — это небольшие текстовые файлы, сохраняемые на вашем устройстве.
                    </p>
                    <p className="mb-3">
                      Если используются исключительно технически необходимые cookies, обработка осуществляется на основании ст. 6 ч. 1 п. f GDPR (законный интерес в корректной работе сайта).
                    </p>
                    <p className="mb-3">
                      Использование дополнительных cookies (например, аналитических) осуществляется только на основании вашего согласия в соответствии со ст. 6 ч. 1 п. a GDPR.
                    </p>
                    <p className="mb-3">
                      Необязательные cookies устанавливаются только после вашего согласия через cookie-баннер.
                    </p>
                    <p>
                      Вы можете изменить настройки cookie в любое время через соответствующую ссылку внизу сайта.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">10. Google Analytics</h2>
                    <p className="mb-3">
                      Наш сайт использует Google Analytics — сервис веб-аналитики компании Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ирландия.
                    </p>
                    <p className="mb-3">
                      Google Analytics использует cookies для анализа использования сайта. Собранная информация (например, IP-адрес, тип устройства, посещенные страницы) может передаваться на серверы Google и там храниться.
                    </p>
                    <p className="mb-3">
                      На сайте активирована анонимизация IP-адресов.
                    </p>
                    <p className="mb-3">
                      <strong>Правовое основание:</strong> Использование Google Analytics осуществляется исключительно на основании вашего согласия в соответствии со ст. 6 ч. 1 п. a GDPR.
                    </p>
                    <p className="mb-3">
                      <strong>Срок хранения cookies:</strong> Файлы cookie, устанавливаемые Google Analytics (_ga, _gid), удаляются по умолчанию через 14 месяцев (_ga) или 24 часа (_gid).
                    </p>
                    <p className="mb-3">
                      <strong>Отзыв согласия:</strong> Вы можете в любое время отозвать свое согласие через настройки cookie в нижней части каждой страницы. Отзыв не влияет на законность обработки данных до момента отзыва.
                    </p>
                    <p className="mb-3">
                      Google сертифицирован в рамках EU-U.S. Data Privacy Framework.
                    </p>
                    <p>
                      Передача данных в третьи страны (например, США) не может быть исключена.
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
                    <h2 className="font-serif text-2xl mb-4 text-accent">12. Ahrefs Analytics</h2>
                    <p className="mb-3">
                      Наш сайт использует Ahrefs Analytics (Ahrefs Pte. Ltd., Сингапур) для анализа трафика сайта и поисковой оптимизации. Ahrefs Analytics может устанавливать cookies и обрабатывать технические данные доступа (например, IP-адрес, user-agent, посещенные страницы).
                    </p>
                    <p>
                      Использование осуществляется исключительно на основании вашего согласия в соответствии со ст. 6 ч. 1 п. a GDPR и § 25 п. 1 TDDDG. Вы можете отозвать свое согласие в любое время через настройки cookie.
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
                    <p>
                      Персональные данные хранятся только в течение времени, необходимого для достижения целей обработки, либо в соответствии с установленными законом сроками хранения.
                    </p>
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
                    <h2 className="font-serif text-2xl mb-4 text-accent">16. Изменения политики конфиденциальности</h2>
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
