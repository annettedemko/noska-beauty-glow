# 🗺️ Sitemap Generation Guide

## ✅ Что было сделано

### 1. **Создан автоматический генератор sitemap.xml**
- Скрипт: `scripts/generate-sitemap.js`
- Поддержка мультиязычной структуры (`/de/` и `/ru/`)
- Автоматическая генерация hreflang тегов для всех страниц
- Актуальная дата последнего изменения

### 2. **Сгенерирован sitemap.xml**
- Расположение: `public/sitemap.xml`
- Всего URL: **14** (7 страниц × 2 языка)
- Языки: немецкий (de), русский (ru)
- Fallback язык (x-default): немецкий

---

## 📋 Структура Sitemap

### Включенные страницы:

| Страница | DE URL | RU URL | Priority | Change Freq |
|----------|--------|--------|----------|-------------|
| Главная | `/de` | `/ru` | 1.0 | weekly |
| Services | `/de/services-muenchen` | `/ru/services-muenchen` | 0.9 | monthly |
| Kopfhaut | `/de/kopfhaut-muenchen` | `/ru/kopfhaut-muenchen` | 0.8 | monthly |
| Camouflage | `/de/camouflage-muenchen` | `/ru/camouflage-muenchen` | 0.8 | monthly |
| Remover | `/de/remover-muenchen` | `/ru/remover-muenchen` | 0.7 | monthly |
| Impressum | `/de/impressum` | `/ru/impressum` | 0.3 | yearly |
| Datenschutz | `/de/datenschutz` | `/ru/datenschutz` | 0.3 | yearly |

---

## 🚀 Как использовать генератор

### Запустить генератор вручную:

```bash
npm run generate:sitemap
```

Или напрямую через Node.js:

```bash
node scripts/generate-sitemap.js
```

### Что делает скрипт:

1. ✅ Читает список всех страниц из конфигурации
2. ✅ Генерирует URL для каждой страницы на обоих языках
3. ✅ Добавляет hreflang теги для связи между языковыми версиями
4. ✅ Устанавливает текущую дату как `lastmod`
5. ✅ Сохраняет `sitemap.xml` в папку `public/`
6. ✅ Выводит отчёт о сгенерированных URL

### Пример вывода:

```
✅ Sitemap generated successfully!
📍 Location: /Users/.../public/sitemap.xml
📊 Total URLs: 14
🌐 Languages: de, ru
📅 Last modified: 2025-10-18

📋 Generated pages:
   - https://noskabeautyglow.com/de
   - https://noskabeautyglow.com/ru
   - https://noskabeautyglow.com/de/services-muenchen
   ...
```

---

## 📝 Пример сгенерированного URL (с hreflang)

```xml
<url>
  <loc>https://noskabeautyglow.com/de/services-muenchen</loc>
  <xhtml:link rel="alternate" hreflang="de" href="https://noskabeautyglow.com/de/services-muenchen" />
  <xhtml:link rel="alternate" hreflang="ru" href="https://noskabeautyglow.com/ru/services-muenchen" />
  <xhtml:link rel="alternate" hreflang="x-default" href="https://noskabeautyglow.com/de/services-muenchen" />
  <lastmod>2025-10-18</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.9</priority>
</url>
```

---

## 🔧 Как добавить новую страницу

1. Откройте `scripts/generate-sitemap.js`
2. Найдите массив `pages`
3. Добавьте новую страницу:

```javascript
const pages = [
  // ... существующие страницы
  {
    path: '/new-page',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: TODAY,
    comment: 'New Page'
  }
];
```

4. Запустите генератор:

```bash
npm run generate:sitemap
```

---

## 🌐 После деплоя

### 1. Проверить доступность sitemap

После деплоя sitemap будет доступен по адресу:
```
https://noskabeautyglow.com/sitemap.xml
```

Откройте этот URL в браузере и убедитесь, что файл отображается корректно.

### 2. Загрузить в Google Search Console

1. Зайдите в [Google Search Console](https://search.google.com/search-console)
2. Выберите ваш сайт
3. Перейдите в раздел **"Sitemaps"** (Карты сайта)
4. Введите URL: `sitemap.xml`
5. Нажмите **"Submit"** (Отправить)

### 3. Проверить статус индексации

Google Search Console покажет:
- ✅ Сколько URL обнаружено
- ✅ Сколько URL проиндексировано
- ⚠️ Есть ли ошибки или предупреждения

### 4. Валидация sitemap

Проверьте sitemap на ошибки:
- **XML Sitemap Validator**: https://www.xml-sitemaps.com/validate-xml-sitemap.html
- Вставьте URL: `https://noskabeautyglow.com/sitemap.xml`

---

## 📊 Статистика текущего sitemap

```
📍 URL: https://noskabeautyglow.com/sitemap.xml
📊 Всего страниц: 7
🌐 Языковых версий: 2 (de, ru)
📄 Всего URL в sitemap: 14
🔗 hreflang теги: Да (для всех URL)
📅 Автообновление даты: Да
✅ Валидность XML: Да
```

---

## 🔄 Обновление sitemap

### Когда нужно обновлять:

- ➕ Добавлена новая страница
- ✏️ Изменена структура URL
- 🌐 Добавлен новый язык
- 📅 Периодически (раз в месяц для актуализации дат)

### Как обновить:

1. Если добавлена новая страница — обновите `scripts/generate-sitemap.js`
2. Запустите генератор: `npm run generate:sitemap`
3. Commit и deploy изменений
4. Уведомите Google Search Console о новом sitemap (опционально, Google автоматически переиндексирует)

---

## ⚙️ Конфигурация генератора

В файле `scripts/generate-sitemap.js`:

```javascript
// Базовый URL сайта
const SITE_URL = 'https://noskabeautyglow.com';

// Путь для сохранения sitemap
const OUTPUT_PATH = path.join(__dirname, '../public/sitemap.xml');

// Поддерживаемые языки
const LANGUAGES = ['de', 'ru'];

// Язык по умолчанию (x-default)
const DEFAULT_LANG = 'de';
```

---

## 📚 Дополнительные ресурсы

- [Google: Sitemap Guidelines](https://developers.google.com/search/docs/advanced/sitemaps/overview)
- [Schema.org: Sitemap Protocol](https://www.sitemaps.org/protocol.html)
- [Google: hreflang for multilingual sites](https://developers.google.com/search/docs/specialty/international/localized-versions)

---

## ✅ Чеклист

- [x] Создан автоматический генератор sitemap
- [x] Сгенерирован sitemap.xml с hreflang
- [x] Добавлены все страницы (7) на обоих языках (14 URL)
- [x] Добавлена команда в package.json
- [x] Sitemap размещён в `/public/sitemap.xml`
- [ ] После деплоя: проверить доступность по URL
- [ ] После деплоя: загрузить в Google Search Console
- [ ] После индексации: проверить статус в Search Console

---

**Готово! Sitemap полностью настроен и готов к использованию! 🎉**
