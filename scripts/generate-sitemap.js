#!/usr/bin/env node

/**
 * Sitemap Generator for Noska Beauty Glow
 * Generates multilingual sitemap with hreflang support
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const SITE_URL = 'https://pmu-noska.de';
const OUTPUT_PATH = path.join(__dirname, '../public/sitemap.xml');

// Get current date in YYYY-MM-DD format
const getCurrentDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const TODAY = getCurrentDate();

// Define all pages with their properties
const pages = [
  {
    path: '',
    priority: '1.0',
    changefreq: 'weekly',
    lastmod: TODAY,
    comment: 'Home Page'
  },
  {
    path: '/services-muenchen',
    priority: '0.9',
    changefreq: 'monthly',
    lastmod: TODAY,
    comment: 'Services Page'
  },
  {
    path: '/kopfhaut-muenchen',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: TODAY,
    comment: 'Kopfhaut Pigmentierung'
  },
  {
    path: '/camouflage-muenchen',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: TODAY,
    comment: 'Camouflage'
  },
  {
    path: '/remover-muenchen',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: TODAY,
    comment: 'Remover'
  },
  {
    path: '/impressum',
    priority: '0.3',
    changefreq: 'yearly',
    lastmod: TODAY,
    comment: 'Impressum'
  },
  {
    path: '/datenschutz',
    priority: '0.3',
    changefreq: 'yearly',
    lastmod: TODAY,
    comment: 'Datenschutz'
  }
];

// Languages
const LANGUAGES = ['de', 'ru'];
const DEFAULT_LANG = 'de';

// Generate URL entry with hreflang links
const generateUrlEntry = (page, lang) => {
  // German has no prefix, Russian has /ru prefix
  const fullPath = lang === 'de' ? page.path || '/' : `/ru${page.path}`;
  const loc = `${SITE_URL}${fullPath}`;

  // Generate alternate language URLs
  const dePath = page.path || '/';
  const ruPath = `/ru${page.path}`;
  const deUrl = `${SITE_URL}${dePath}`;
  const ruUrl = `${SITE_URL}${ruPath}`;

  return `  <!-- ${page.comment} (${lang.toUpperCase()}) -->
  <url>
    <loc>${loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <xhtml:link rel="alternate" hreflang="de" href="${deUrl}" />
    <xhtml:link rel="alternate" hreflang="ru" href="${ruUrl}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${deUrl}" />
  </url>`;
};

// Generate complete sitemap
const generateSitemap = () => {
  const header = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
`;

  const footer = `
</urlset>`;

  let urlEntries = [];

  // Generate URL entries for each page and language
  for (const page of pages) {
    for (const lang of LANGUAGES) {
      urlEntries.push(generateUrlEntry(page, lang));
    }
    // Add empty line between different pages
    if (page !== pages[pages.length - 1]) {
      urlEntries.push('');
    }
  }

  const sitemap = header + urlEntries.join('\n') + footer;
  return sitemap;
};

// Write sitemap to file
const writeSitemap = () => {
  try {
    const sitemap = generateSitemap();
    fs.writeFileSync(OUTPUT_PATH, sitemap, 'utf8');

    console.log('✅ Sitemap generated successfully!');
    console.log(`📍 Location: ${OUTPUT_PATH}`);
    console.log(`📊 Total URLs: ${pages.length * LANGUAGES.length}`);
    console.log(`🌐 Languages: ${LANGUAGES.join(', ')}`);
    console.log(`📅 Last modified: ${TODAY}`);
    console.log('\n📋 Generated pages:');

    pages.forEach(page => {
      LANGUAGES.forEach(lang => {
        const fullPath = lang === 'de' ? page.path || '/' : `/ru${page.path}`;
        console.log(`   - ${SITE_URL}${fullPath}`);
      });
    });

  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
};

// Run the generator
writeSitemap();
