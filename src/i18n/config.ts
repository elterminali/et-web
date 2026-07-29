import { en } from './en';
import { tr } from './tr';
import { de } from './de';
import type { Translations } from './types';

export type Locale = 'en' | 'tr' | 'de';

export const locales: Locale[] = ['en', 'tr', 'de'];
export const defaultLocale: Locale = 'en';

export const translations: Record<Locale, Translations> = { en, tr, de };

/** Return the translation dictionary for the given locale. */
export function t(locale: Locale): Translations {
  return translations[locale];
}

/** Return a locale-prefixed path. English is at root (no /en/ prefix). */
export function localePath(locale: Locale, path: string): string {
  const normalised = path.startsWith('/') ? path : `/${path}`;
  if (locale === defaultLocale) return normalised;
  return `/${locale}${normalised}`;
}

/** Return the hreflang alternates for a given path. */
export function hreflangAlternates(path: string): Array<{ lang: string; href: string }> {
  const base = 'https://eltrm.com';
  return [
    { lang: 'x-default', href: `${base}${path}` },
    { lang: 'en', href: `${base}${path}` },
    { lang: 'tr', href: `${base}/tr${path}` },
    { lang: 'de', href: `${base}/de${path}` },
  ];
}
