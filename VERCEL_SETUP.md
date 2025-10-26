# Настройка GitHub Actions для автоматического деплоя на Vercel

## Шаг 1: Получите Vercel Token

1. Откройте: **https://vercel.com/account/tokens**
2. Нажмите кнопку **"Create Token"**
3. Введите имя токена: `github-actions-noska`
4. Выберите срок действия: **No Expiration** (без истечения)
5. Нажмите **"Create"**
6. **СКОПИРУЙТЕ ТОКЕН** (он показывается только один раз!)

Сохраните токен, он понадобится в Шаге 3.

---

## Шаг 2: Получите Project ID и Org ID

### Способ 1: Через Vercel Dashboard (проще)

1. Откройте ваш проект: **https://vercel.com/dashboard**
2. Выберите проект **noska-beauty-glow**
3. Перейдите в **Settings** → **General**
4. Скопируйте:
   - **Project ID** (в разделе "Project ID")
   - **Team/Org ID** (в URL или в настройках команды)

### Способ 2: Через терминал

Выполните в терминале:

```bash
cd /Users/annademko/Documents/GitHub/noska-beauty-glow

# Войдите в Vercel (откроется браузер)
vercel login

# Свяжите проект
vercel link

# Посмотрите ID
cat .vercel/project.json
```

Вы увидите что-то вроде:
```json
{
  "orgId": "team_xxxxxxxxxxxxx",
  "projectId": "prj_xxxxxxxxxxxxx"
}
```

---

## Шаг 3: Добавьте секреты в GitHub

1. Откройте: **https://github.com/annettedemko/noska-beauty-glow/settings/secrets/actions**
2. Нажмите **"New repository secret"** три раза и добавьте:

### Секрет 1:
- **Name:** `VERCEL_TOKEN`
- **Value:** токен из Шага 1

### Секрет 2:
- **Name:** `VERCEL_ORG_ID`
- **Value:** `orgId` из Шага 2

### Секрет 3:
- **Name:** `VERCEL_PROJECT_ID`
- **Value:** `projectId` из Шага 2

---

## Шаг 4: Проверьте настройку

После добавления секретов:

1. Сделайте любое изменение в коде и закоммитьте:
   ```bash
   git add .
   git commit -m "Test GitHub Actions deploy"
   git push
   ```

2. Откройте: **https://github.com/annettedemko/noska-beauty-glow/actions**
3. Вы увидите запущенный workflow "Build and Deploy to Vercel"
4. Дождитесь завершения (~3-5 минут)
5. Проверьте сайт: **https://noska-beauty-glow.vercel.app/**

---

## ✅ Готово!

Теперь при каждом push в `main`:
1. GitHub Actions запускает сборку
2. Puppeteer генерирует статические HTML-страницы
3. Готовые файлы деплоятся на Vercel
4. Google видит полный контент!

---

## Нужна помощь?

Если что-то не работает, проверьте:
- Логи в GitHub Actions: https://github.com/annettedemko/noska-beauty-glow/actions
- Логи деплоя в Vercel Dashboard
- Все ли 3 секрета добавлены правильно
