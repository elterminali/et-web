/**
 * Scan dist/**\/*.html for forbidden terminology that must not appear in production.
 */
import { readFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = join(fileURLToPath(import.meta.url), '..');
const DIST = join(__dirname, '..', 'dist');

// Exact or partial strings that must NOT appear (case-insensitive)
const FORBIDDEN = [
  'handdy',
  'el terminali',
  'el terminal',  // as product name — OK in context of URL /el-terminal but flag content uses
  'info@eitan-meir.de',
  'eitan-meir.de',
  '50k+',
  '10m+',
  '99.9%',
  '4.8 stars',
  '4.8★',
  'aggregaterating',
  'gdpr-compliant',
  'made in berlin',
  'since 2016',
  'order management',
  'invoice',
  'fake',
];

// Allow these contexts (skip check if surrounding 20 chars match)
// Simple approach: just flag and let human verify
function walkFiles(dir, results = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      walkFiles(full, results);
    } else if (entry.endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

let errors = 0;
const files = walkFiles(DIST);

for (const file of files) {
  const content = readFileSync(file, 'utf8').toLowerCase();
  const relPath = file.replace(DIST, 'dist');

  for (const term of FORBIDDEN) {
    const idx = content.indexOf(term.toLowerCase());
    if (idx !== -1) {
      // Skip legal pages that mention brand name historically in context
      const isLegal = relPath.includes('/privacy/') || relPath.includes('/terms/') ||
                      relPath.includes('/eula/') || relPath.includes('/delete-account/');
      if (isLegal && (term === 'el terminal' || term === 'el terminali')) continue;

      console.error(`FAIL [${relPath}]: Found forbidden term "${term}" at position ${idx}`);
      errors++;
    }
  }
}

if (errors > 0) {
  console.error(`\n${errors} forbidden term(s) found.`);
  process.exit(1);
} else {
  console.log(`✓ Forbidden terms check passed — ${files.length} HTML files scanned.`);
}
