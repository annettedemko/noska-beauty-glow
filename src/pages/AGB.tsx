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
                    <p className="mb-4">
                      Gemäß § 19 UStG wird keine Umsatzsteuer berechnet (Kleinunternehmerregelung).
                    </p>
                    <div>
                      <p className="font-medium mb-2">Akzeptierte Zahlungsmethoden:</p>
                      <ul className="list-disc list-inside pl-4 space-y-1">
                        <li>Barzahlung</li>
                        <li>Überweisung (nach Vereinbarung)</li>
                      </ul>
                    </div>
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
                    <h2 className="font-serif text-2xl mb-4 text-accent">7. Pflichten des Kunden – Gesundheitsangaben</h2>
                    <p className="mb-4">
                      Der Kunde ist verpflichtet, dem Behandler vor Beginn einer Permanent-Make-up-Behandlung (PMU) alle für die Durchführung und das Ergebnis der Behandlung relevanten gesundheitlichen Umstände vollständig und wahrheitsgemäß mitzuteilen.
                    </p>
                    <p className="mb-4">Dies umfasst insbesondere, jedoch nicht abschließend:</p>
                    <ul className="list-disc list-inside pl-4 mb-4 space-y-1">
                      <li>bekannte Allergien oder Unverträglichkeiten, insbesondere gegenüber Pigmenten, Betäubungsmitteln, Latex oder Desinfektionsmitteln</li>
                      <li>bestehende Hauterkrankungen, Hautentzündungen, Infektionen, Narben, Akne, Herpes oder andere Hautveränderungen im Behandlungsbereich</li>
                      <li>die Einnahme von Medikamenten, insbesondere blutverdünnender, hormoneller, antibiotischer oder immunsuppressiver Präparate</li>
                      <li>eine bestehende Schwangerschaft oder Stillzeit</li>
                      <li>frühere Permanent-Make-up-, Microblading-, Tattoo- oder sonstige kosmetische bzw. medizinisch-ästhetische Behandlungen im Behandlungsbereich</li>
                    </ul>
                    <p className="mb-4">
                      Der Kunde ist verpflichtet, bekannte Kontraindikationen für eine Permanent-Make-up-Behandlung unaufgefordert vor der Behandlung mitzuteilen. Dazu zählen insbesondere Erkrankungen oder Umstände, bei denen eine PMU-Behandlung medizinisch oder hygienisch nicht empfohlen wird.
                    </p>
                    <p>
                      Unterlässt der Kunde die vollständige oder wahrheitsgemäße Angabe relevanter gesundheitlicher Informationen oder Kontraindikationen, ist eine Haftung des Behandlers für hierauf beruhende Schäden ausgeschlossen, soweit dies gesetzlich zulässig ist. Gesetzliche Haftungstatbestände, insbesondere bei Vorsatz oder grober Fahrlässigkeit, bleiben unberührt.
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
                    <h2 className="font-serif text-2xl mb-4 text-accent">9. Behandlungsergebnisse</h2>
                    <ol className="list-decimal list-inside pl-4 space-y-3">
                      <li>Permanent Make-up stellt einen individuellen, handwerklich-künstlerischen Eingriff dar.</li>
                      <li>Abweichungen hinsichtlich Farbe, Form, Symmetrie, Farbintensität sowie Haltbarkeit sind möglich und stellen keinen Mangel im Sinne der gesetzlichen Vorschriften dar.</li>
                      <li>Eine vollständige Farbstabilität, exakte Symmetrie oder eine dauerhafte Haltbarkeit können nicht zugesichert werden.</li>
                      <li>Das Behandlungsergebnis ist abhängig von individuellen Faktoren, insbesondere Hauttyp, Alter, Stoffwechsel, Medikamenteneinnahme, hormonellen Einflüssen, Vorerkrankungen, Pflegegewohnheiten, Sonneneinstrahlung, Rauchen sowie sonstigen äußeren Einflüssen.</li>
                      <li>Die Haltbarkeit des Permanent Make-ups ist individuell und kann erheblich variieren.</li>
                      <li>Da jede Haut Farbpigmente unterschiedlich aufnimmt, wird keine Garantie für ein bestimmtes Behandlungsergebnis übernommen. In Einzelfällen kann es vorkommen, dass Pigmente nur unzureichend oder nicht aufgenommen werden.</li>
                      <li>Nachbehandlungen (Korrekturen oder Auffrischungen) sind regelmäßig erforderlich und nicht Bestandteil des vereinbarten Grundpreises, sofern nicht ausdrücklich schriftlich etwas anderes vereinbart wurde.</li>
                      <li>Nachbehandlungen können innerhalb von 8 Wochen nach der Erstbehandlung vereinbart werden. Nach Ablauf dieser Frist gilt die Behandlung als Neu-/Erstbehandlung und wird zum jeweils gültigen Grundpreis berechnet.</li>
                    </ol>
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
                    <p className="mb-4">
                      Ein Widerrufsrecht besteht nicht, da es sich bei den angebotenen Dienstleistungen um terminlich festgelegte Dienstleistungen handelt (§ 312g Abs. 2 Nr. 9 BGB).
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
                    <p className="mb-4">
                      Согласно § 19 UStG налог с оборота не взимается (режим для малого бизнеса).
                    </p>
                    <div>
                      <p className="font-medium mb-2">Принимаемые способы оплаты:</p>
                      <ul className="list-disc list-inside pl-4 space-y-1">
                        <li>Наличные</li>
                        <li>Банковский перевод (по договоренности)</li>
                      </ul>
                    </div>
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
                    <h2 className="font-serif text-2xl mb-4 text-accent">7. Обязанности клиента – Медицинская информация</h2>
                    <p className="mb-4">
                      Клиент обязан предоставить мастеру перед началом процедуры перманентного макияжа (PMU) полную и правдивую информацию обо всех обстоятельствах, касающихся здоровья, которые имеют значение для проведения и результата процедуры.
                    </p>
                    <p className="mb-4">Это включает в себя, в частности, но не ограничивается:</p>
                    <ul className="list-disc list-inside pl-4 mb-4 space-y-1">
                      <li>известные аллергии или непереносимости, особенно на пигменты, анестетики, латекс или дезинфицирующие средства</li>
                      <li>существующие заболевания кожи, воспаления кожи, инфекции, шрамы, акне, герпес или другие изменения кожи в зоне обработки</li>
                      <li>прием медикаментов, особенно препаратов, разжижающих кровь, гормональных, антибиотиков или иммуносупрессивных препаратов</li>
                      <li>беременность или грудное вскармливание</li>
                      <li>предыдущие процедуры перманентного макияжа, микроблейдинга, татуировки или другие косметические или медико-эстетические процедуры в зоне обработки</li>
                    </ul>
                    <p className="mb-4">
                      Клиент обязан самостоятельно сообщить о известных противопоказаниях к процедуре перманентного макияжа до начала процедуры. К ним относятся, в частности, заболевания или обстоятельства, при которых процедура PMU не рекомендуется по медицинским или гигиеническим причинам.
                    </p>
                    <p>
                      Если клиент не предоставляет полную или правдивую информацию о соответствующих медицинских обстоятельствах или противопоказаниях, ответственность мастера за ущерб, возникший в результате этого, исключается в той мере, в какой это допускается законом. Законные основания ответственности, особенно при умысле или грубой небрежности, остаются в силе.
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
                    <ol className="list-decimal list-inside pl-4 space-y-3">
                      <li>Перманентный макияж представляет собой индивидуальное ремесленно-художественное вмешательство.</li>
                      <li>Отклонения в цвете, форме, симметрии, интенсивности цвета и долговечности возможны и не являются недостатком в смысле законодательных норм.</li>
                      <li>Полная стабильность цвета, точная симметрия или постоянная долговечность не могут быть гарантированы.</li>
                      <li>Результат процедуры зависит от индивидуальных факторов, в частности типа кожи, возраста, обмена веществ, приема медикаментов, гормональных влияний, предыдущих заболеваний, привычек ухода, воздействия солнца, курения, а также других внешних факторов.</li>
                      <li>Долговечность перманентного макияжа индивидуальна и может значительно варьироваться.</li>
                      <li>Поскольку каждая кожа по-разному принимает цветовые пигменты, гарантия на определенный результат процедуры не предоставляется. В отдельных случаях может случиться, что пигменты принимаются недостаточно или не принимаются вообще.</li>
                      <li>Повторные процедуры (коррекции или обновления) требуются регулярно и не входят в согласованную базовую цену, если письменно не согласовано иное.</li>
                      <li>Повторные процедуры могут быть согласованы в течение 8 недель после первичной процедуры. По истечении этого срока процедура считается новой/первичной процедурой и оплачивается по действующей базовой цене.</li>
                    </ol>
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
                    <p className="mb-4">
                      Право на отказ не предусмотрено, так как предлагаемые услуги являются услугами с фиксированной датой (§ 312g п. 2 № 9 BGB).
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
