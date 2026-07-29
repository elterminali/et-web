/**
 * Verify that no do-not-publish or pending claims are referenced in dist/.
 * Searches dist/**\/*.html for known forbidden claim IDs and fails if found.
 */
import { readFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = join(fileURLToPath(import.meta.url), '..');
const DIST = join(__dirname, '..', 'dist');

// These string fragments should NOT appear in the built HTML
const FORBIDDEN_FRAGMENTS = [
  'activeUsers50k',
  'barcodesScanned10m',
  'uptime999',
  'rating48',
  '50,000+',
  '10 million',
  '99.9%',
  '4.8 stars',
  '4.8★',
  'aggregateRating',
  'gdprCompliant',
  'GDPR-compliant',
  'madeInBerlin',
  'Made in Berlin',
  'foundedYear2016',
  'since 2016',
  'order management',
  'orderManagement',
  'invoiceGeneration',
  'testimonial',
  'trialPeriod',
];

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
  const content = readFileSync(file, 'utf8');
  for (const frag of FORBIDDEN_FRAGMENTS) {
    if (content.toLowerCase().includes(frag.toLowerCase())) {
      console.error(`FAIL: Forbidden fragment "${frag}" found in ${file.replace(DIST, 'dist')}`);
      errors++;
    }
  }
}

if (errors > 0) {
  console.error(`\n${errors} forbidden claim(s) found. Fix before deploying.`);
  process.exit(1);
} else {
  console.log(`✓ Claims check passed — no forbidden fragments in ${files.length} HTML files.`);
}
