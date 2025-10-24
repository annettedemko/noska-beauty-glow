# Ahrefs Top 12 Issues - Solutions & Status

## 🔴 Critical Issues

### 1. ✅ Duplicate pages without canonical
**Problem**: 14 duplicate pages without `<link rel="canonical">`
**Status**: **FIXED**
**Solution**:
- `SEOHead.tsx:105` dynamically generates canonical tags
- Applied to ALL pages: Index, Services, Kopfhaut, Camouflage, Remover, Impressum, Datenschutz
- Canonical URL = current page URL (no duplicates)

**Verification**:
```bash
curl -s https://pmu-noska.de/ | grep canonical
# Should output: <link rel="canonical" href="https://pmu-noska.de/">
```

**Why Ahrefs might still show issue**:
- Ahrefs may not have recrawled yet (takes 1-2 weeks)
- SPA: Tags are added dynamically by JavaScript (Ahrefs may miss them)
- Solution: Add canonical to static index.html as fallback

---

### 2. ⚠️ Page has no outgoing links
**Problem**: No external links on pages
**Status**: **TO FIX**
**Solution**: Add authoritative external links:
- Google Business Profile
- Instagram (@anastasia__noska) - already linked in schema
- Beauty industry resources (optional)
- Review platforms (Treatwell booking link - already exists)

**Implementation**:
- Footer: Add "Follow us" section with Instagram
- About section: Link to certifications/training
- Contact: Link to Google Maps

---

## ⚠️ Important Issues

### 3. ✅ Redirected page has no incoming internal links
**Problem**: Links point to redirected URLs
**Status**: **LIKELY FIXED**
**Details**:
- All internal links use correct format (no /de prefix)
- vercel.json redirects /de → / (permanent)
- All RelatedServices links use correct paths
- Sitemap has correct URLs

**To Verify**: Check if Ahrefs found specific redirected pages

---

### 4. ✅ H1 tag missing or empty
**Problem**: 14 pages without H1
**Status**: **FIXED**
**Details**:
All pages have H1 tags:
- Index.tsx: "Permanent Make-up München" (in Hero component)
- Services.tsx: Service titles
- Kopfhaut.tsx: "Kopfhaut Pigmentierung München"
- Camouflage.tsx: camouflageTitle from translations
- Remover.tsx: Service title
- Impressum/Datenschutz: Page titles

**Note**: H1 may be dynamically rendered - Ahrefs crawler might miss it

---

### 5. ⚠️ Low word count
**Problem**: Pages have < 250 words
**Status**: **NEEDS IMPROVEMENT**
**Current**:
- Service pages: ~200-300 words
- Need: 500+ words for better SEO

**Solution**:
Add content sections:
- "Why choose us" (Warum uns wählen)
- FAQ section per service
- Detailed process description
- Before/after expectations
- Aftercare instructions
- Client testimonials
- Service benefits (bullet points)

**Priority Pages**:
1. /services-muenchen - Main service page
2. /kopfhaut-muenchen
3. /camouflage-muenchen
4. /remover-muenchen

---

### 6. ✅ Meta description too long
**Problem**: Descriptions > 160 characters
**Status**: **TO CHECK & FIX**
**Current descriptions** (need to verify length):

**Index**:
- DE: "Permanent Make-up München: Powder Brows, Aquarell Lippen, Lidstrich. Kopfhaut Pigmentierung & Camouflage. Zertifizierte Spezialistin in München. Jetzt Termin buchen!" (177 chars) ❌ TOO LONG
- RU: Similar length

**Recommended**:
- DE: "Permanent Make-up München: Powder Brows, Lippen, Kopfhaut Pigmentierung. Jetzt Termin bei Anastasia Noska!" (110 chars) ✅
- RU: Adjust similarly

---

### 7. ⚠️ Missing title tag
**Problem**: Some pages without title
**Status**: **SHOULD BE FIXED**
**Details**:
- SEOHead.tsx:50 sets document.title dynamically
- All pages use SEOHead component
- Likely Ahrefs crawler issue (SPA)

---

### 8. ⚠️ 3XX redirect in sitemap
**Problem**: Sitemap contains URLs that redirect
**Status**: **TO CHECK**
**Verification needed**:
```bash
# Check each URL in sitemap
curl -I https://pmu-noska.de/
curl -I https://pmu-noska.de/ru
curl -I https://pmu-noska.de/services-muenchen
# etc.
```

**Expected**: All should return 200 (not 301/302/307)

**Possible issue**:
- www.pmu-noska.de URLs in sitemap? (No - checked, all non-www)
- Trailing slashes? (No - trailingSlash: false in vercel.json)

---

### 9. ⚠️ Indexable page not in sitemap
**Problem**: Pages exist but not in sitemap
**Status**: **TO CHECK**
**Current sitemap pages** (7 pages × 2 languages = 14 URLs):
- /
- /services-muenchen
- /kopfhaut-muenchen
- /camouflage-muenchen
- /remover-muenchen
- /impressum
- /datenschutz

**Missing?**:
- /404 (should NOT be in sitemap - correct)
- Any dynamic routes?

**Action**: Verify all routes in App.tsx match sitemap

---

### 10. ⚠️ Redirect chain / HTTP to HTTPS
**Problem**: Multiple redirects or HTTP→HTTPS
**Status**: **VERCEL HANDLES THIS**
**Details**:
- Vercel automatically does HTTP→HTTPS (308)
- Should be single redirect, not chain

**To verify**:
```bash
curl -I http://pmu-noska.de
# Should be: 308 → https://pmu-noska.de (ONE redirect)
```

**If chain exists**:
```bash
# Bad:
http://www.pmu-noska.de
  → https://www.pmu-noska.de (1)
  → https://pmu-noska.de (2)  ❌ CHAIN

# Good:
http://www.pmu-noska.de
  → https://pmu-noska.de (1) ✅ DIRECT
```

---

## 🌍 Hreflang Status

### ✅ Hreflang IS configured!
**Implementation**:
1. **In HTML** (SEOHead.tsx:108-110):
```html
<link rel="alternate" hreflang="de" href="https://pmu-noska.de/" />
<link rel="alternate" hreflang="ru" href="https://pmu-noska.de/ru" />
<link rel="alternate" hreflang="x-default" href="https://pmu-noska.de/" />
```

2. **In Sitemap** (sitemap.xml):
```xml
<xhtml:link rel="alternate" hreflang="de" href="https://pmu-noska.de/" />
<xhtml:link rel="alternate" hreflang="ru" href="https://pmu-noska.de/ru" />
<xhtml:link rel="alternate" hreflang="x-default" href="https://pmu-noska.de/" />
```

**Why Ahrefs might not see it**:
- JavaScript-rendered (SPA issue)
- Ahrefs crawler may not execute JS fully
- Solution: Add static hreflang to index.html as fallback

---

## 📋 Action Plan

### Immediate (Can be fixed via code):

1. **Add static canonical to index.html**:
```html
<link rel="canonical" href="https://pmu-noska.de/">
```

2. **Add static hreflang to index.html**:
```html
<link rel="alternate" hreflang="de" href="https://pmu-noska.de/">
<link rel="alternate" hreflang="ru" href="https://pmu-noska.de/ru">
<link rel="alternate" hreflang="x-default" href="https://pmu-noska.de/">
```

3. **Shorten meta descriptions**:
- Keep under 155 characters
- Focus on primary keywords
- Add CTA (e.g., "Jetzt buchen!")

4. **Add external links**:
- Instagram in Footer
- Google Maps in Contact
- Review links (Treatwell already exists)

5. **Add more content** (250+ words minimum):
- FAQ sections
- Service benefits
- Process descriptions
- Testimonials expansion

### Requires Vercel Dashboard:

6. **Fix 307 → 301 redirects**:
- Set primary domain in Vercel
- Ensure www→non-www is 301 (not 307)

### Monitoring:

7. **Wait for Ahrefs recrawl** (1-2 weeks):
- Many issues may auto-resolve
- SPA sites often show false positives
- Google Search Console is more reliable

---

## 🔍 Verification Commands

```bash
# Check canonical
curl -s https://pmu-noska.de/ | grep -o '<link rel="canonical"[^>]*>'

# Check hreflang
curl -s https://pmu-noska.de/ | grep -o '<link rel="alternate" hreflang[^>]*>'

# Check H1
curl -s https://pmu-noska.de/ | grep -o '<h1[^>]*>.*</h1>'

# Check redirects
curl -I http://pmu-noska.de
curl -I https://www.pmu-noska.de
curl -I https://pmu-noska.de/de

# Check title
curl -s https://pmu-noska.de/ | grep -o '<title>.*</title>'

# Check meta description
curl -s https://pmu-noska.de/ | grep -o '<meta name="description"[^>]*>'
```

---

## 📊 Expected Results After Fixes

**Ahrefs Health Score**:
- Current: ~60-70% (estimated)
- Target: 90%+ after fixes

**Issues Reduction**:
- Critical: 2 → 0
- Warnings: 10 → 2-3

**Timeline**:
- Code fixes: Immediate
- Ahrefs sees changes: 1-2 weeks
- Full SEO impact: 2-3 months

---

**Last Updated**: 2025-10-23
**Status**: 🔄 In Progress
