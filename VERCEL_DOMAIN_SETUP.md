# Vercel Domain Configuration Guide

## Problem: 307 Temporary Redirect (www ↔ non-www)

Currently, the domain redirects with **307 Temporary Redirect**, which is **bad for SEO**.

```
www.pmu-noska.de → pmu-noska.de (307)
```

**Why this is a problem:**
- ❌ Google may index both versions (duplicate content)
- ❌ Link juice is not passed efficiently
- ❌ PageRank is split between versions
- ❌ Analytics data is fragmented

**Solution:** Configure **301 Permanent Redirect** in Vercel Dashboard

---

## ✅ Step-by-Step Fix

### 1. Login to Vercel Dashboard
Go to: https://vercel.com/dashboard

### 2. Select Your Project
Navigate to: `noska-beauty-glow` project

### 3. Go to Domain Settings
Click: **Settings** → **Domains**

### 4. Configure Primary Domain

You should see:
```
✓ pmu-noska.de
✓ www.pmu-noska.de
```

**Action Required:**
- Set `pmu-noska.de` as **Primary Domain** (no www)
- `www.pmu-noska.de` should show "Redirects to pmu-noska.de"

### 5. Verify Redirect Type

After configuration, test with curl:

```bash
curl -I https://www.pmu-noska.de
```

**Expected response:**
```
HTTP/2 301 Moved Permanently
Location: https://pmu-noska.de/
```

**NOT this:**
```
HTTP/2 307 Temporary Redirect  ❌
```

---

## 🔍 How to Check Current Status

### Method 1: Browser DevTools
1. Open `https://www.pmu-noska.de` in Chrome
2. Press F12 → Network tab
3. Check the first request
4. Look for status code: Should be **301** (not 307)

### Method 2: Command Line
```bash
# Check www redirect
curl -I https://www.pmu-noska.de

# Check non-www (should NOT redirect)
curl -I https://pmu-noska.de
```

### Method 3: Online Tools
- https://www.redirect-checker.org/
- https://httpstatus.io/

---

## 📋 Complete Domain Checklist

After configuration, verify all these redirect correctly:

### ✅ HTTP to HTTPS (Should be automatic with Vercel)
```bash
curl -I http://pmu-noska.de
# Expected: 308 Permanent Redirect → https://pmu-noska.de
```

### ✅ WWW to Non-WWW (Configure in Vercel Dashboard)
```bash
curl -I https://www.pmu-noska.de
# Expected: 301 Moved Permanently → https://pmu-noska.de
```

### ✅ HTTP WWW to HTTPS Non-WWW (Should be automatic)
```bash
curl -I http://www.pmu-noska.de
# Expected: 308 → https://pmu-noska.de
```

### ✅ Trailing Slashes (Already configured in vercel.json)
```bash
curl -I https://pmu-noska.de/services-muenchen/
# Expected: 308 → https://pmu-noska.de/services-muenchen
```

---

## 🎯 Recommended Domain Structure

**Primary Domain (Canonical)**:
```
https://pmu-noska.de
```

**All these should redirect to primary**:
```
http://pmu-noska.de         → https://pmu-noska.de (301)
http://www.pmu-noska.de     → https://pmu-noska.de (301)
https://www.pmu-noska.de    → https://pmu-noska.de (301)
```

---

## 🚨 Common Issues

### Issue 1: Both domains are indexed in Google
**Symptom**:
```
site:pmu-noska.de
site:www.pmu-noska.de
```
Both show results.

**Fix**:
1. Set up 301 redirects (above)
2. Submit both URLs to Google Search Console
3. Set preferred domain in GSC
4. Request re-indexing

### Issue 2: 307 instead of 301
**Symptom**: Redirect works but uses 307

**Fix**:
- Must be configured in Vercel Dashboard (not vercel.json)
- vercel.json doesn't support www redirects

### Issue 3: Mixed content (some links use www)
**Symptom**: Internal links point to www version

**Fix**:
- Canonical tags already set correctly (SEOHead.tsx)
- Sitemap uses correct URLs (sitemap.xml)
- No action needed (redirects will handle it)

---

## 📊 After Configuration

### Update Google Search Console
1. Add both domains as properties:
   - https://pmu-noska.de
   - https://www.pmu-noska.de

2. Verify both domains

3. Set `https://pmu-noska.de` as **preferred domain**

4. Check Coverage report:
   - All www URLs should show as "Redirected"
   - All non-www URLs should show as "Indexed"

### Update Sitemap
Already correct! Sitemap only references non-www:
```xml
<loc>https://pmu-noska.de/</loc>
```

### Update robots.txt
Already correct! Only references non-www:
```
Sitemap: https://pmu-noska.de/sitemap.xml
```

---

## 🔗 Additional Resources

- Vercel Domains Documentation: https://vercel.com/docs/concepts/projects/domains
- Google on Duplicate Content: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- Redirect Types Explained: https://developer.mozilla.org/en-US/docs/Web/HTTP/Redirections

---

## ✅ Verification Checklist

After completing the setup, check all these:

- [ ] www redirects to non-www with 301
- [ ] http redirects to https with 308
- [ ] Trailing slashes removed (308)
- [ ] Sitemap accessible at https://pmu-noska.de/sitemap.xml
- [ ] Robots.txt accessible at https://pmu-noska.de/robots.txt
- [ ] Google Search Console verified
- [ ] Both domains added to GSC
- [ ] Preferred domain set to non-www
- [ ] No duplicate indexing in Google (check after 2 weeks)

---

**Last Updated**: 2025-10-23
**Status**: ⚠️ Needs manual configuration in Vercel Dashboard
