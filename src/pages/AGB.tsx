import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const AGB = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        titleDE="AGB - Allgemeine Geschäftsbedingungen | Anastasia Noska"
        titleRU="AGB - Общие условия | Анастасия Носка"
        descriptionDE="Allgemeine Geschäftsbedingungen für Dienstleistungen von Anastasia Noska, Permanent Make-up Spezialistin in München."
        descriptionRU="Общие условия предоставления услуг Анастасии Носка, специалиста по перманентному макияжу в Мюнхене."
      />
      <Navigation />

      <main className="pt-24">
        <section className="py-24 px-6">
          <div className="container max-w-4xl mx-auto">
            {language === "DE" ? (
              // German Version
              <>
                <h1 className="font-serif text-4xl md:text-5xl mb-4 tracking-wide text-accent">
                  ALLGEMEINE GESCHÄFTSBEDINGUNGEN (AGB)
                </h1>
                <p className="text-lg text-muted-foreground mb-16">
                  für Dienstleistungen von Anastasia Noska
                </p>

                <div className="space-y-12 text-base font-light leading-relaxed">
                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">1. Geltungsbereich</h2>
                    <p className="mb-4">
                      Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Dienstleistungen, die von Anastasia Noska, Einzelunternehmerin, angeboten werden.
                    </p>
                    <p>
                      Abweichende Bedingungen der Kunden finden keine Anwendung, sofern ihnen nicht ausdrücklich schriftlich zugestimmt wurde.
                    </p>
                  </section>

                  <div className="my-8 border-t border-charcoal/20"></div>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">2. Anbieter</h2>
                    <p className="mb-4">
                      <strong>Anastasia Noska</strong><br />
                      Einzelunternehmerin (Gewerbetreibende)<br />
                      Aubingerstraße 147<br />
                      81243 München<br />
                      Deutschland
                    </p>
                    <div>
                      <p className="font-medium mb-2">Kontakt:</p>
                      <p className="pl-4">
                        Telefon: +49 177 9093936<br />
                        E-Mail: noskaanastasia@gmail.com
                      </p>
                    </div>
                  </section>

                  <div className="my-8 border-t border-charcoal/20"></div>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">3. Leistungen</h2>
                    <p className="mb-4">
                      Anastasia Noska bietet spezialisierte Dienstleistungen im Bereich Permanent Make-up (PMU) sowie damit verbundene ästhetische Pigmentierungsbehandlungen an.
                    </p>
                    <p className="mb-4">Hierzu zählen insbesondere:</p>
                    <ul className="list-disc list-inside pl-4 mb-4 space-y-1">
                      <li>Permanent Make-up</li>
                      <li>Camouflage- bzw. Narbenpigmentierung</li>
                      <li>Trichopigmentation</li>
                    </ul>
                    <p className="mb-4">
                      Es werden keine kosmetischen oder medizinischen Behandlungen im klassischen oder heilkundlichen Sinne erbracht.
                    </p>
                    <p>
                      Der konkrete Leistungsumfang ergibt sich aus der individuellen Absprache mit dem Kunden im Rahmen der Terminvereinbarung (z. B. über WhatsApp oder Instagram).
                    </p>
                  </section>

                  <div className="my-8 border-t border-charcoal/20"></div>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">4. Terminvereinbarung</h2>
                    <p className="mb-4">
                      Die Terminvereinbarung erfolgt individuell über folgende Kommunikationswege:
                    </p>
                    <ul className="list-disc list-inside pl-4 mb-4 space-y-1">
                      <li>WhatsApp</li>
                      <li>Instagram</li>
                      <li>E-Mail oder Telefon (falls angeboten)</li>
                    </ul>
                    <p className="mb-4">
                      Ein verbindlicher Termin kommt zustande, sobald dieser von Anastasia Noska bestätigt wurde.
                    </p>
                    <p>
                      Eine Online-Buchung mit automatischer Terminvergabe findet nicht statt.
                    </p>
                  </section>

                  <div className="my-8 border-t border-charcoal/20"></div>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">5. Preise und Zahlung</h2>
                    <p className="mb-4">
                      Die jeweils gültigen Preise ergeben sich aus der auf der Website veröffentlichten Preisliste oder aus der individuellen Absprache.
                    </p>
                    <p className="mb-4">
                      Die Zahlung erfolgt nach Erbringung der Dienstleistung vor Ort.
                      Es werden keine Vorauszahlungen, Anzahlungen oder Teilzahlungen verlangt.
                    </p>
                    <p>
                      Gemäß § 19 UStG wird keine Umsatzsteuer berechnet (Kleinunternehmerregelung).
                    </p>
                  </section>

                  <div className="my-8 border-t border-charcoal/20"></div>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">6. Stornierung und Terminabsage</h2>
                    <p className="mb-4">
                      Eine Terminabsage oder -verschiebung ist jederzeit möglich.
                    </p>
                    <p>
                      Es werden keine Stornogebühren erhoben.
                      Auch bei kurzfristiger Absage entstehen für die Kundin bzw. den Kunden keine Kosten.
                    </p>
                  </section>

                  <div className="my-8 border-t border-charcoal/20"></div>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">7. Mitwirkungspflichten der Kunden</h2>
                    <p className="mb-4">
                      Der Kunde ist verpflichtet, vor der Behandlung wahrheitsgemäße Angaben zu machen, insbesondere zu:
                    </p>
                    <ul className="list-disc list-inside pl-4 mb-4 space-y-1">
                      <li>bestehenden Erkrankungen</li>
                      <li>Allergien oder Unverträglichkeiten</li>
                      <li>Schwangerschaft</li>
                      <li>relevanten medizinischen oder kosmetischen Vorbehandlungen</li>
                    </ul>
                    <p>
                      Unterbleiben solche Angaben, kann für daraus resultierende Folgen keine Haftung übernommen werden, soweit gesetzlich zulässig.
                    </p>
                  </section>

                  <div className="my-8 border-t border-charcoal/20"></div>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">8. Haftung</h2>
                    <p className="mb-4">
                      Die Dienstleistungen werden nach bestem Wissen und Gewissen sowie nach dem aktuellen fachlichen Standard erbracht.
                    </p>
                    <p className="mb-4">
                      Eine Haftung für Schäden ist ausgeschlossen, soweit diese nicht auf Vorsatz oder grober Fahrlässigkeit beruhen.
                      Die Haftung für Verletzungen von Leben, Körper oder Gesundheit bleibt unberührt.
                    </p>
                    <p>
                      Individuelle Reaktionen auf kosmetische oder pigmentierende Behandlungen können nicht ausgeschlossen werden und stellen keinen Mangel dar.
                    </p>
                  </section>

                  <div className="my-8 border-t border-charcoal/20"></div>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">9. Ergebnisse von Behandlungen</h2>
                    <p className="mb-4">
                      Das Ergebnis von Permanent Make-up und kosmetischen Behandlungen ist individuell unterschiedlich und hängt unter anderem von Hauttyp, Lebensweise und Nachpflege ab.
                    </p>
                    <p>
                      Ein bestimmtes Ergebnis kann daher nicht garantiert werden.
                    </p>
                  </section>

                  <div className="my-8 border-t border-charcoal/20"></div>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">10. Foto- und Bildmaterial</h2>
                    <p className="mb-4">
                      Foto- oder Videoaufnahmen von Behandlungsergebnissen erfolgen nur mit ausdrücklicher vorheriger Einwilligung der Kundin bzw. des Kunden.
                    </p>
                    <p>
                      Eine Nutzung zu Werbezwecken (z. B. Website, Instagram) erfolgt ausschließlich nach Zustimmung.
                    </p>
                  </section>

                  <div className="my-8 border-t border-charcoal/20"></div>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">11. Datenschutz</h2>
                    <p>
                      Die Verarbeitung personenbezogener Daten erfolgt gemäß der geltenden Datenschutzerklärung, die auf der Website abrufbar ist.
                    </p>
                  </section>

                  <div className="my-8 border-t border-charcoal/20"></div>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">12. Schlussbestimmungen</h2>
                    <p className="mb-4">
                      Es gilt das Recht der Bundesrepublik Deutschland.
                    </p>
                    <p>
                      Sollten einzelne Bestimmungen dieser AGB ganz oder teilweise unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
                    </p>
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
                  ОБЩИЕ УСЛОВИЯ ПРЕДОСТАВЛЕНИЯ УСЛУГ (AGB)
                </h1>
                <p className="text-lg text-muted-foreground mb-16">
                  для услуг Анастасии Носка
                </p>

                <div className="space-y-12 text-base font-light leading-relaxed">
                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">1. Область применения</h2>
                    <p className="mb-4">
                      Настоящие Общие условия предоставления услуг (AGB) распространяются на все услуги, предлагаемые Анастасией Носка, индивидуальным предпринимателем.
                    </p>
                    <p>
                      Отличающиеся условия клиентов не применяются, если они не были приняты в письменной форме.
                    </p>
                  </section>

                  <div className="my-8 border-t border-charcoal/20"></div>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">2. Исполнитель услуг</h2>
                    <p className="mb-4">
                      <strong>Anastasia Noska</strong><br />
                      Индивидуальный предприниматель<br />
                      Aubingerstraße 147<br />
                      81243 Мюнхен<br />
                      Германия
                    </p>
                    <div>
                      <p className="font-medium mb-2">Контакты:</p>
                      <p className="pl-4">
                        Телефон: +49 177 9093936<br />
                        E-mail: noskaanastasia@gmail.com
                      </p>
                    </div>
                  </section>

                  <div className="my-8 border-t border-charcoal/20"></div>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">3. Услуги</h2>
                    <p className="mb-4">
                      Анастасия Носка предлагает специализированные услуги в области перманентного макияжа (PMU), а также связанные с ним эстетические процедуры пигментации.
                    </p>
                    <p className="mb-4">К ним относятся в частности:</p>
                    <ul className="list-disc list-inside pl-4 mb-4 space-y-1">
                      <li>Перманентный макияж</li>
                      <li>Камуфляж / пигментация шрамов</li>
                      <li>Трихопигментация</li>
                    </ul>
                    <p className="mb-4">
                      Косметические или медицинские процедуры в классическом или лечебном смысле не проводятся.
                    </p>
                    <p>
                      Конкретный объем услуг определяется в индивидуальном порядке с клиентом при записи на прием (например, через WhatsApp или Instagram).
                    </p>
                  </section>

                  <div className="my-8 border-t border-charcoal/20"></div>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">4. Запись на прием</h2>
                    <p className="mb-4">
                      Запись на прием осуществляется индивидуально по следующим каналам связи:
                    </p>
                    <ul className="list-disc list-inside pl-4 mb-4 space-y-1">
                      <li>WhatsApp</li>
                      <li>Instagram</li>
                      <li>E-mail или телефон (при наличии)</li>
                    </ul>
                    <p className="mb-4">
                      Обязательная запись вступает в силу после её подтверждения Анастасией Носка.
                    </p>
                    <p>
                      Автоматическая онлайн-запись не предусмотрена.
                    </p>
                  </section>

                  <div className="my-8 border-t border-charcoal/20"></div>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">5. Цены и оплата</h2>
                    <p className="mb-4">
                      Актуальные цены указаны в прайс-листе на веб-сайте или определяются в индивидуальном порядке.
                    </p>
                    <p className="mb-4">
                      Оплата производится после оказания услуги на месте.
                      Предоплата, авансовые или частичные платежи не требуются.
                    </p>
                    <p>
                      Согласно § 19 UStG налог с оборота не взимается (режим для малого бизнеса).
                    </p>
                  </section>

                  <div className="my-8 border-t border-charcoal/20"></div>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">6. Отмена и перенос записи</h2>
                    <p className="mb-4">
                      Отмена или перенос записи возможны в любое время.
                    </p>
                    <p>
                      Плата за отмену не взимается.
                      Даже при отмене в последний момент для клиента не возникает никаких расходов.
                    </p>
                  </section>

                  <div className="my-8 border-t border-charcoal/20"></div>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">7. Обязанности клиентов</h2>
                    <p className="mb-4">
                      Клиент обязан предоставить правдивую информацию перед процедурой, в частности о:
                    </p>
                    <ul className="list-disc list-inside pl-4 mb-4 space-y-1">
                      <li>существующих заболеваниях</li>
                      <li>аллергиях или непереносимостях</li>
                      <li>беременности</li>
                      <li>предыдущих медицинских или косметических процедурах</li>
                    </ul>
                    <p>
                      При отсутствии такой информации ответственность за возможные последствия не может быть возложена, насколько это допускается законом.
                    </p>
                  </section>

                  <div className="my-8 border-t border-charcoal/20"></div>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">8. Ответственность</h2>
                    <p className="mb-4">
                      Услуги предоставляются с максимальной тщательностью и в соответствии с современными профессиональными стандартами.
                    </p>
                    <p className="mb-4">
                      Ответственность за ущерб исключается, если он не вызван умышленно или грубой небрежностью.
                      Ответственность за причинение вреда жизни, телу или здоровью остается в силе.
                    </p>
                    <p>
                      Индивидуальные реакции на косметические или пигментирующие процедуры не могут быть исключены и не являются недостатком.
                    </p>
                  </section>

                  <div className="my-8 border-t border-charcoal/20"></div>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">9. Результаты процедур</h2>
                    <p className="mb-4">
                      Результат процедур перманентного макияжа и косметических процедур индивидуален и зависит от типа кожи, образа жизни и последующего ухода.
                    </p>
                    <p>
                      Поэтому определенный результат не может быть гарантирован.
                    </p>
                  </section>

                  <div className="my-8 border-t border-charcoal/20"></div>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">10. Фото и видеоматериалы</h2>
                    <p className="mb-4">
                      Фото или видеосъемка результатов процедур осуществляется только с предварительного явного согласия клиента.
                    </p>
                    <p>
                      Использование в рекламных целях (например, на сайте, в Instagram) осуществляется только после получения согласия.
                    </p>
                  </section>

                  <div className="my-8 border-t border-charcoal/20"></div>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">11. Защита данных</h2>
                    <p>
                      Обработка персональных данных осуществляется в соответствии с действующей политикой конфиденциальности, доступной на веб-сайте.
                    </p>
                  </section>

                  <div className="my-8 border-t border-charcoal/20"></div>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">12. Заключительные положения</h2>
                    <p className="mb-4">
                      Применяется право Федеративной Республики Германия.
                    </p>
                    <p>
                      Если отдельные положения настоящих AGB полностью или частично недействительны или станут таковыми, действительность остальных положений остается неизменной.
                    </p>
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

export default AGB;
