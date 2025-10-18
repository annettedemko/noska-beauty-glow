# FAQ Schema.org Implementation

## ✅ Реализовано

Добавлена **структурированная разметка FAQPage** по стандарту Schema.org для обеих языковых версий (немецкой и русской).

---

## 📋 Что было сделано

### 1. Создан компонент `FAQSchema.tsx`
- Автоматически генерирует JSON-LD разметку
- Динамически переключается между немецким и русским языками
- Вставляет `<script type="application/ld+json">` в `<head>`
- Автоматически удаляет старую разметку при смене языка

### 2. Обновлён компонент `FAQ.tsx`
- Интегрирован `FAQSchema` компонент
- Добавлены данные FAQ на обоих языках (DE и RU)
- Разметка автоматически обновляется при переключении языка

---

## 📝 Пример сгенерированного JSON-LD

### Немецкая версия (DE):

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "de",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Wie kann ich einen Termin buchen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sie können direkt über WhatsApp, per E-Mail oder über Treatwell einen Termin vereinbaren. Ich melde mich zeitnah bei Ihnen zurück."
      }
    },
    {
      "@type": "Question",
      "name": "Wie lange hält das Permanent Make-up?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Haltbarkeit beträgt in der Regel 1-3 Jahre, abhängig von Hauttyp, Pflege und Sonneneinstrahlung. Eine Auffrischung wird empfohlen."
      }
    },
    {
      "@type": "Question",
      "name": "Gibt es Kontraindikationen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, bei Schwangerschaft, Stillzeit, Diabetes, Hauterkrankungen oder Blutgerinnungsstörungen sollte auf die Behandlung verzichtet werden. Bitte kontaktieren Sie mich für eine persönliche Beratung."
      }
    }
  ]
}
```

### Русская версия (RU):

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "ru",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Как записаться на процедуру?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Вы можете записаться через WhatsApp, по электронной почте или через Treatwell. Я свяжусь с вами в ближайшее время."
      }
    },
    {
      "@type": "Question",
      "name": "Сколько держится результат?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Обычно 1-3 года, в зависимости от типа кожи, ухода и воздействия солнца. Рекомендуется обновление."
      }
    },
    {
      "@type": "Question",
      "name": "Есть ли противопоказания?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Да, при беременности, грудном вскармливании, диабете, кожных заболеваниях или нарушениях свертываемости крови процедура не рекомендуется. Пожалуйста, свяжитесь со мной для консультации."
      }
    }
  ]
}
```

---

## 🔍 Как проверить разметку

### 1. **Google Rich Results Test**
После деплоя:
1. Откройте: https://search.google.com/test/rich-results
2. Введите URL главной страницы: `https://noskabeautyglow.com/de`
3. Проверьте, что FAQPage распознаётся корректно
4. Повторите для русской версии: `https://noskabeautyglow.com/ru`

### 2. **Schema Markup Validator**
1. Откройте: https://validator.schema.org/
2. Вставьте сгенерированный JSON-LD код
3. Убедитесь, что нет ошибок

### 3. **Проверка в браузере**
1. Откройте страницу в браузере
2. Откройте DevTools (F12)
3. Перейдите в Elements → `<head>`
4. Найдите `<script id="faq-schema" type="application/ld+json">`
5. Проверьте содержимое скрипта

### 4. **Google Search Console**
После деплоя и индексации:
1. Зайдите в Google Search Console
2. Перейдите в "Enhancements" → "FAQ"
3. Проверьте статус индексации FAQ-разметки

---

## 🎯 Преимущества

✅ **Расширенные сниппеты в Google** - FAQ может отображаться прямо в результатах поиска
✅ **Увеличение CTR** - привлекательные расширенные результаты привлекают больше кликов
✅ **Улучшение видимости** - Google отдаёт предпочтение страницам со структурированными данными
✅ **Мультиязычность** - корректная разметка для обеих языковых версий
✅ **Автоматическое обновление** - разметка динамически меняется при переключении языка

---

## 📊 Где отображается разметка

Разметка отображается на **главной странице сайта**:
- `/de` (немецкая версия)
- `/ru` (русская версия)

Компонент FAQ является частью главной страницы (Index.tsx), поэтому разметка автоматически присутствует.

---

## 🚀 Дополнительные рекомендации

### Добавить больше FAQ (опционально)
Если хотите добавить больше вопросов, просто обновите массивы `faqsDE` и `faqsRU` в файле `src/components/FAQ.tsx`:

```typescript
const faqsDE = [
  {
    question: "Ваш новый вопрос?",
    answer: "Ваш ответ здесь."
  },
  // ... остальные вопросы
];
```

### Проверить индексацию
- Подождите 1-2 недели после деплоя
- Проверьте в Google Search Console раздел "Enhancements"
- Google может показывать расширенные сниппеты для релевантных запросов

---

## 📁 Изменённые файлы

1. `src/components/FAQSchema.tsx` - **НОВЫЙ** компонент для генерации JSON-LD
2. `src/components/FAQ.tsx` - обновлён с интеграцией FAQSchema

---

## ✅ Чеклист

- [x] Создан компонент FAQSchema
- [x] Интегрирован в компонент FAQ
- [x] Добавлены данные на немецком языке
- [x] Добавлены данные на русском языке
- [x] Проект успешно компилируется
- [ ] После деплоя проверить через Google Rich Results Test
- [ ] Проверить через Schema.org Validator
- [ ] Мониторить в Google Search Console

---

**Готово! FAQ-разметка полностью реализована! 🎉**
