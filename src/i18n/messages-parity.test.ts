import { describe, expect, it } from 'vitest'
import { LOCALES, type Locale } from './locale'
import { getMessages, messagesByLocale } from './messages'

/** Stable shape keys for nested message objects (strings, arrays, functions). */
function collectShapeKeys(value: unknown, prefix = ''): string[] {
  if (typeof value === 'function') {
    return [`${prefix}()`]
  }
  if (Array.isArray(value)) {
    return value.flatMap((item, index) =>
      collectShapeKeys(item, `${prefix}[${index}]`),
    )
  }
  if (value !== null && typeof value === 'object') {
    return Object.keys(value as Record<string, unknown>)
      .sort()
      .flatMap((key) =>
        collectShapeKeys(
          (value as Record<string, unknown>)[key],
          prefix ? `${prefix}.${key}` : key,
        ),
      )
  }
  return [prefix]
}

describe('i18n message key parity', () => {
  it('exposes every locale in messagesByLocale', () => {
    for (const locale of LOCALES) {
      expect(messagesByLocale[locale]).toBeDefined()
      expect(getMessages(locale)).toBe(messagesByLocale[locale])
    }
  })

  it('keeps the same message shape as English for every locale', () => {
    const enKeys = collectShapeKeys(getMessages('en')).sort()

    for (const locale of LOCALES.filter((code): code is Locale => code !== 'en')) {
      const localeKeys = collectShapeKeys(getMessages(locale)).sort()
      expect(localeKeys, `locale ${locale}`).toEqual(enKeys)
    }
  })

  it('requires non-empty string leaves for every locale', () => {
    for (const locale of LOCALES) {
      const messages = getMessages(locale)
      expect(messages.meta.title.length).toBeGreaterThan(0)
      expect(messages.nav.work.length).toBeGreaterThan(0)
      expect(messages.hero.exploreWork.length).toBeGreaterThan(0)
      expect(messages.profile.role.length).toBeGreaterThan(0)
      expect(messages.projects.length).toBeGreaterThan(0)
      expect(messages.skillGroups.length).toBeGreaterThan(0)
    }
  })
})
