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

                <div className="space-y-8 text-base font-light leading-relaxed">
                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">1. Geltungsbereich</h2>
                    <p className="mb-3">
                      Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Dienstleistungen, die von Anastasia Noska (nachfolgend „Anbieterin") erbracht werden.
                    </p>
                    <p>
                      Abweichende Bedingungen von Kundinnen/Kunden finden keine Anwendung, sofern diesen nicht ausdrücklich in Textform zugestimmt wurde.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">2. Anbieterin</h2>
                    <p className="mb-4">
                      <strong>Anastasia Noska</strong><br />
                      Einzelunternehmerin (Gewerbetreibende)<br />
                      Aubinger Straße 147<br />
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

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">3. Leistungen</h2>
                    <p className="mb-3">
                      Die Anbieterin erbringt Dienstleistungen im Bereich Permanent Make-up (PMU) sowie damit verbundene ästhetische Pigmentierungsbehandlungen, insbesondere:
                    </p>
                    <ul className="list-disc list-inside pl-4 mb-3 space-y-1">
                      <li>Permanent Make-up</li>
                      <li>Camouflage (z. B. Narben- und Dehnungsstreifenpigmentierung)</li>
                      <li>Trichopigmentation</li>
                    </ul>
                    <p className="mb-3">
                      Es werden keine medizinischen Behandlungen oder heilkundlichen Leistungen erbracht.
                    </p>
                    <p>
                      Der konkrete Leistungsumfang ergibt sich aus der individuellen Absprache und der Terminbestätigung.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">4. Terminvereinbarung / Reservierung / Vertragsschluss</h2>
                    <p className="mb-2">(1) Die Terminvereinbarung erfolgt individuell (z. B. per WhatsApp, Instagram, E-Mail oder Telefon).</p>
                    <p className="mb-2">(2) Die Bestätigung eines Termins durch die Anbieterin stellt ausschließlich eine Terminreservierung dar und noch keinen Vertragsschluss über die Behandlung.</p>
                    <p className="mb-2">(3) Ein Vertrag über die jeweilige Behandlung kommt erst vor Ort in den Geschäftsräumen der Anbieterin zustande, spätestens mit Beginn der Behandlung, nachdem die Kundin/der Kunde über Ablauf, Risiken und Pflegehinweise aufgeklärt wurde und die erforderlichen Unterlagen (insbesondere Einwilligungserklärung sowie ggf. Anamnesebogen) unterzeichnet hat.</p>
                    <p className="mb-2">(4) Eine Online-Buchung mit automatischer Terminvergabe findet nicht statt.</p>
                    <p>(5) Die Anbieterin kann eine Behandlung ablehnen oder abbrechen, wenn aus fachlichen/hygienischen Gründen oder aufgrund gesundheitlicher Umstände eine sichere Durchführung nicht gewährleistet ist (siehe Ziffer 7).</p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">5. Preise und Zahlung</h2>
                    <p className="mb-3">(1) Die jeweils gültigen Preise ergeben sich aus der veröffentlichten Preisliste oder aus der individuellen Absprache.</p>
                    <p className="mb-3">(2) Die Zahlung erfolgt nach Erbringung der Dienstleistung vor Ort.</p>
                    <p className="mb-3">(3) Gemäß § 19 UStG wird keine Umsatzsteuer berechnet (Kleinunternehmerregelung).</p>
                    <div>
                      <p className="mb-2">(4) Akzeptierte Zahlungsmethoden:</p>
                      <ul className="list-disc list-inside pl-4 space-y-1">
                        <li>Barzahlung</li>
                        <li>Überweisung (nach Vereinbarung)</li>
                      </ul>
                    </div>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">6. Stornierung und Terminabsage</h2>
                    <p className="mb-2">(1) Eine Terminabsage oder -verschiebung ist jederzeit möglich.</p>
                    <p className="mb-2">(2) Es werden keine Stornogebühren erhoben.</p>
                    <p>(3) Die Anbieterin bittet um möglichst frühzeitige Absage, um Termine anderweitig vergeben zu können.</p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">7. Pflichten der Kundin/des Kunden – Gesundheitsangaben / Kontraindikationen</h2>
                    <p className="mb-3">
                      (1) Kundinnen/Kunden sind verpflichtet, vor Beginn der Behandlung alle relevanten gesundheitlichen Umstände vollständig und wahrheitsgemäß mitzuteilen (z. B. Allergien, Hauterkrankungen, Infektionen im Behandlungsbereich, Medikamenteneinnahme – insbesondere blutverdünnende Präparate –, Schwangerschaft/Stillzeit).
                    </p>
                    <p className="mb-3">
                      (2) Bestehen Kontraindikationen oder Zweifel an der sicheren Durchführbarkeit, kann die Anbieterin die Behandlung ablehnen oder verschieben.
                    </p>
                    <p>
                      (3) Werden relevante Angaben trotz Nachfrage nicht oder nicht wahrheitsgemäß gemacht, haftet die Anbieterin für daraus resultierende Folgen nur im Rahmen der gesetzlichen Vorschriften; eine gesetzlich zwingende Haftung bleibt unberührt.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">8. Mitwirkung / Pflegehinweise</h2>
                    <p className="mb-2">
                      (1) Kundinnen/Kunden haben die Pflege- und Verhaltensempfehlungen (Aftercare) zu beachten.
                    </p>
                    <p>
                      (2) Unterlassene oder fehlerhafte Nachpflege kann das Ergebnis beeinträchtigen und ist bei der Beurteilung von Nachbesserungs-/Korrekturwünschen zu berücksichtigen.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">9. Behandlungsergebnisse / Nachbehandlungen</h2>
                    <p className="mb-2">(1) PMU und Pigmentierungen sind handwerklich-künstlerische Leistungen. Ergebnisse können je nach Hauttyp und individuellen Faktoren variieren.</p>
                    <p className="mb-2">(2) Geringfügige Abweichungen in Farbe, Form, Symmetrie, Intensität und Haltbarkeit sind möglich.</p>
                    <p className="mb-2">(3) Eine bestimmte Haltbarkeit, vollständige Farbstabilität oder exakte Symmetrie kann nicht zugesichert werden.</p>
                    <p className="mb-2">(4) Nachbehandlungen (Korrekturen/Auffrischungen) sind regelmäßig erforderlich und nicht Bestandteil des Grundpreises, sofern nicht ausdrücklich etwas anderes vereinbart wurde.</p>
                    <p>(5) Nachbehandlungen können innerhalb von 8 Wochen nach der Erstbehandlung vereinbart werden. Nach Ablauf dieser Frist kann eine Behandlung zum jeweils gültigen Preis als neue Behandlung abgerechnet werden.</p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">10. Foto- und Bildmaterial</h2>
                    <p className="mb-2">
                      Foto- oder Videoaufnahmen erfolgen nur mit ausdrücklicher vorheriger Einwilligung der Kundin/des Kunden.
                    </p>
                    <p>
                      Eine Nutzung zu Werbezwecken (z. B. Website, Instagram) erfolgt ausschließlich nach gesonderter Zustimmung (Einwilligungserklärung).
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">11. Haftung</h2>
                    <p className="mb-2">
                      (1) Die Anbieterin haftet unbeschränkt bei Vorsatz und grober Fahrlässigkeit sowie bei Schäden aus der Verletzung von Leben, Körper oder Gesundheit.
                    </p>
                    <p className="mb-2">
                      (2) Bei einfacher Fahrlässigkeit haftet die Anbieterin nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten). In diesem Fall ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt.
                    </p>
                    <p>
                      (3) Eine weitergehende Haftung ist – soweit gesetzlich zulässig – ausgeschlossen. Zwingende gesetzliche Haftungsvorschriften bleiben unberührt.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">12. Widerrufsrecht</h2>
                    <p className="mb-3">
                      Bei Verträgen über Dienstleistungen, die zu einem vereinbarten Zeitpunkt oder innerhalb einer genau bestimmten Zeitspanne erbracht werden sollen (z. B. Permanent Make-up-Behandlung mit festem Termin), besteht kein gesetzliches Widerrufsrecht gemäß § 312g Abs. 2 Nr. 9 BGB.
                    </p>
                    <p>
                      Sie können jedoch jederzeit Ihren Termin kostenfrei absagen oder verschieben (siehe Ziffer 6).
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">13. Datenschutz</h2>
                    <p>
                      Die Verarbeitung personenbezogener Daten erfolgt gemäß der Datenschutzerklärung, die auf der Website abrufbar ist.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">14. Verbraucherstreitbeilegung</h2>
                    <p>
                      Die Anbieterin ist nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">15. Schlussbestimmungen</h2>
                    <p className="mb-2">
                      Es gilt deutsches Recht. Für Verbraucher gilt diese Rechtswahl nur, soweit dadurch nicht der Schutz entzogen wird, der ihnen durch zwingende Bestimmungen des Rechts des Staates ihres gewöhnlichen Aufenthalts gewährt wird.
                    </p>
                    <p>
                      Sollten einzelne Bestimmungen dieser AGB ganz oder teilweise unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
                    </p>
                  </section>

                  <div className="text-sm text-muted-foreground pt-6">
                    Stand: Januar 2026
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

                <div className="space-y-8 text-base font-light leading-relaxed">
                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">1. Область применения</h2>
                    <p className="mb-3">
                      Настоящие Общие условия предоставления услуг (AGB) распространяются на все услуги, которые оказываются Anastasia Noska (далее — «Исполнитель»).
                    </p>
                    <p>
                      Отличающиеся условия клиентов/клиенток не применяются, если на них не было дано явного согласия в текстовой форме.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">2. Исполнитель</h2>
                    <p className="mb-4">
                      <strong>Anastasia Noska</strong><br />
                      Индивидуальный предприниматель<br />
                      Aubinger Straße 147<br />
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

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">3. Услуги</h2>
                    <p className="mb-3">
                      Исполнитель предоставляет услуги в области перманентного макияжа (PMU), а также связанные с ним эстетические процедуры пигментации, в частности:
                    </p>
                    <ul className="list-disc list-inside pl-4 mb-3 space-y-1">
                      <li>Перманентный макияж</li>
                      <li>Камуфляж (например, пигментация шрамов и растяжек)</li>
                      <li>Трихопигментация</li>
                    </ul>
                    <p className="mb-3">
                      Медицинские процедуры или лечебные услуги не оказываются.
                    </p>
                    <p>
                      Конкретный объем услуг определяется в индивидуальном порядке и подтверждается при записи.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">4. Запись на прием / Резервирование / Заключение договора</h2>
                    <p className="mb-2">(1) Запись на прием осуществляется индивидуально (например, через WhatsApp, Instagram, E-mail или телефон).</p>
                    <p className="mb-2">(2) Подтверждение записи Исполнителем представляет собой исключительно резервирование времени и ещё не является заключением договора о проведении процедуры.</p>
                    <p className="mb-2">(3) Договор о соответствующей процедуре заключается только на месте в помещении Исполнителя, не позднее начала процедуры, после того как клиент/клиентка была проинформирована о процессе, рисках и рекомендациях по уходу и подписала необходимые документы (в частности, декларацию о согласии и, при необходимости, анкету анамнеза).</p>
                    <p className="mb-2">(4) Автоматическая онлайн-запись не предусмотрена.</p>
                    <p>(5) Исполнитель может отказать в проведении процедуры или прервать её, если по профессиональным/гигиеническим причинам или из-за состояния здоровья безопасное проведение не гарантируется (см. пункт 7).</p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">5. Цены и оплата</h2>
                    <p className="mb-3">(1) Актуальные цены указаны в опубликованном прайс-листе или определяются в индивидуальном порядке.</p>
                    <p className="mb-3">(2) Оплата производится после оказания услуги на месте.</p>
                    <p className="mb-3">(3) Согласно § 19 UStG налог с оборота не взимается (режим для малого бизнеса).</p>
                    <div>
                      <p className="mb-2">(4) Принимаемые способы оплаты:</p>
                      <ul className="list-disc list-inside pl-4 space-y-1">
                        <li>Наличные</li>
                        <li>Банковский перевод (по договоренности)</li>
                      </ul>
                    </div>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">6. Отмена и перенос записи</h2>
                    <p className="mb-2">(1) Отмена или перенос записи возможны в любое время.</p>
                    <p className="mb-2">(2) Плата за отмену не взимается.</p>
                    <p>(3) Исполнитель просит по возможности отменять запись заблаговременно, чтобы назначить время другим клиентам.</p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">7. Обязанности клиента/клиентки – Медицинская информация / Противопоказания</h2>
                    <p className="mb-3">
                      (1) Клиенты/клиентки обязаны до начала процедуры предоставить полную и правдивую информацию обо всех релевантных обстоятельствах, касающихся здоровья (например, аллергии, заболевания кожи, инфекции в зоне обработки, прием медикаментов — особенно разжижающих кровь препаратов —, беременность/грудное вскармливание).
                    </p>
                    <p className="mb-3">
                      (2) При наличии противопоказаний или сомнений в безопасности проведения Исполнитель может отказать в процедуре или отложить её.
                    </p>
                    <p>
                      (3) Если релевантная информация не была предоставлена или была предоставлена неправдиво, несмотря на запрос, Исполнитель несет ответственность за вытекающие последствия только в рамках законодательных норм; обязательная законная ответственность остается неизменной.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">8. Участие / Рекомендации по уходу</h2>
                    <p className="mb-2">
                      (1) Клиенты/клиентки обязаны соблюдать рекомендации по уходу и поведению (Aftercare).
                    </p>
                    <p>
                      (2) Пропущенный или неправильный последующий уход может ухудшить результат и учитывается при оценке запросов на доработку/коррекцию.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">9. Результаты процедур / Повторные процедуры</h2>
                    <p className="mb-2">(1) PMU и пигментация являются ремесленно-художественными услугами. Результаты могут варьироваться в зависимости от типа кожи и индивидуальных факторов.</p>
                    <p className="mb-2">(2) Незначительные отклонения в цвете, форме, симметрии, интенсивности и долговечности возможны.</p>
                    <p className="mb-2">(3) Определенная долговечность, полная стабильность цвета или точная симметрия не могут быть гарантированы.</p>
                    <p className="mb-2">(4) Повторные процедуры (коррекции/обновления) требуются регулярно и не входят в базовую цену, если явно не согласовано иное.</p>
                    <p>(5) Повторные процедуры могут быть согласованы в течение 8 недель после первичной процедуры. По истечении этого срока процедура может быть оплачена по действующей цене как новая процедура.</p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">10. Фото и видеоматериалы</h2>
                    <p className="mb-2">
                      Фото или видеосъемка осуществляется только с предварительного явного согласия клиента/клиентки.
                    </p>
                    <p>
                      Использование в рекламных целях (например, на сайте, в Instagram) осуществляется только после отдельного согласия (заявление о согласии).
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">11. Ответственность</h2>
                    <p className="mb-2">
                      (1) Исполнитель несет неограниченную ответственность при умысле и грубой небрежности, а также при ущербе, причиненном жизни, телу или здоровью.
                    </p>
                    <p className="mb-2">
                      (2) При простой небрежности Исполнитель несет ответственность только при нарушении существенных договорных обязанностей (кардинальных обязанностей). В этом случае ответственность ограничена типичным для договора, предсказуемым ущербом.
                    </p>
                    <p>
                      (3) Дальнейшая ответственность — в той мере, в какой это допускается законом — исключается. Обязательные законные положения об ответственности остаются неизменными.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">12. Право на отказ от договора</h2>
                    <p className="mb-3">
                      Для договоров на оказание услуг, которые должны быть оказаны в согласованное время или в течение точно определенного периода времени (например, процедура перманентного макияжа с фиксированной датой), законное право на отказ от договора не предусмотрено согласно § 312g Abs. 2 Nr. 9 BGB.
                    </p>
                    <p>
                      Тем не менее, вы можете в любое время бесплатно отменить или перенести вашу запись (см. пункт 6).
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">13. Защита данных</h2>
                    <p>
                      Обработка персональных данных осуществляется в соответствии с политикой конфиденциальности, доступной на веб-сайте.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">14. Разрешение споров с потребителями</h2>
                    <p>
                      Исполнитель не обязан и не готов участвовать в процедурах разрешения споров перед потребительской арбитражной службой.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl mb-4 text-accent">15. Заключительные положения</h2>
                    <p className="mb-2">
                      Применяется немецкое право. Для потребителей этот выбор права действует только в той мере, в какой он не лишает их защиты, предоставленной им обязательными положениями права государства их обычного места жительства.
                    </p>
                    <p>
                      Если отдельные положения настоящих AGB полностью или частично недействительны или станут таковыми, действительность остальных положений остается неизменной.
                    </p>
                  </section>

                  <div className="text-sm text-muted-foreground pt-6">
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

export default AGB;
