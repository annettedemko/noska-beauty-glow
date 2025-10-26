import puppeteer from 'puppeteer';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// All routes to pre-render
const routes = [
  // German routes (default)
  '/',
  '/kopfhaut-muenchen',
  '/camouflage-muenchen',
  '/remover-muenchen',
  '/services-muenchen',
  '/impressum',
  '/datenschutz',

  // Russian routes
  '/ru',
  '/ru/kopfhaut-muenchen',
  '/ru/camouflage-muenchen',
  '/ru/remover-muenchen',
  '/ru/services-muenchen',
  '/ru/impressum',
  '/ru/datenschutz',
];

const distDir = path.resolve(__dirname, '../dist');
const baseUrl = 'http://localhost:4173'; // Vite preview server

async function ensureDir(dirPath) {
  try {
    await fs.mkdir(dirPath, { recursive: true });
  } catch (error) {
    // Directory might already exist
  }
}

async function prerenderRoute(browser, route) {
  const page = await browser.newPage();

  try {
    console.log(`Pre-rendering: ${route}`);

    // Navigate to the route
    await page.goto(`${baseUrl}${route}`, {
      waitUntil: 'networkidle0',
      timeout: 30000,
    });

    // Wait a bit for any async content to load
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Get the rendered HTML
    const html = await page.content();

    // Determine output path
    let outputPath;
    if (route === '/') {
      outputPath = path.join(distDir, 'index.html');
    } else {
      const routePath = route.endsWith('/') ? route.slice(0, -1) : route;
      const dir = path.join(distDir, routePath);
      await ensureDir(dir);
      outputPath = path.join(dir, 'index.html');
    }

    // Write the pre-rendered HTML
    await fs.writeFile(outputPath, html, 'utf-8');
    console.log(`✓ Pre-rendered: ${route} → ${outputPath}`);
  } catch (error) {
    console.error(`✗ Error pre-rendering ${route}:`, error.message);
  } finally {
    await page.close();
  }
}

async function prerender() {
  console.log('Starting pre-rendering...\n');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    // Pre-render all routes sequentially to avoid overwhelming the server
    for (const route of routes) {
      await prerenderRoute(browser, route);
    }

    console.log('\n✓ Pre-rendering complete!');
  } catch (error) {
    console.error('Pre-rendering failed:', error);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

prerender();
