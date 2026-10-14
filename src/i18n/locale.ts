export type Locale = 'en' | 'tr' | 'fr' | 'es' | 'de' | 'ar' | 'ja'

export const LOCALES: readonly Locale[] = [
  'en',
  'tr',
  'fr',
  'es',
  'de',
  'ar',
  'ja',
] as const

export const LOCALE_STORAGE_KEY = 'locale'

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'EN',
  tr: 'TR',
  fr: 'FR',
  es: 'ES',
  de: 'DE',
  ar: 'AR',
  ja: 'JA',
}

export const LOCALE_NATIVE_NAMES: Record<Locale, string> = {
  en: 'English',
  tr: 'Türkçe',
  fr: 'Français',
  es: 'Español',
  de: 'Deutsch',
  ar: 'العربية',
  ja: '日本語',
}

export function isLocale(value: string | null): value is Locale {
  return (
    value === 'en' ||
    value === 'tr' ||
    value === 'fr' ||
    value === 'es' ||
    value === 'de' ||
    value === 'ar' ||
    value === 'ja'
  )
}

export function isRtlLocale(locale: Locale): boolean {
  return locale === 'ar'
}

export function getBrowserLocale(): Locale {
  const candidates = [
    ...(typeof navigator !== 'undefined' && Array.isArray(navigator.languages)
      ? navigator.languages
      : []),
    typeof navigator !== 'undefined' ? navigator.language : undefined,
  ].filter((value): value is string => typeof value === 'string' && value.length > 0)

  for (const candidate of candidates) {
    const primary = candidate.toLowerCase().split('-')[0] ?? ''
    if (isLocale(primary)) {
      return primary
    }
  }

  return 'en'
}

export function readStoredLocale(): Locale | null {
  try {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY)
    return isLocale(stored) ? stored : null
  } catch {
    return null
  }
}

export function resolveLocale(): Locale {
  return readStoredLocale() ?? getBrowserLocale()
}

export function persistLocale(locale: Locale): void {
  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale)
  } catch {
    // Ignore quota / private-mode failures; in-memory locale still applies.
  }
}

export function applyDocumentLang(locale: Locale): void {
  document.documentElement.lang = locale
  document.documentElement.dir = isRtlLocale(locale) ? 'rtl' : 'ltr'
}
