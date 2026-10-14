import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import {
  applyDocumentLang,
  getBrowserLocale,
  isLocale,
  isRtlLocale,
  LOCALE_STORAGE_KEY,
  persistLocale,
  readStoredLocale,
  resolveLocale,
} from './locale'

describe('locale helpers', () => {
  beforeEach(() => {
    localStorage.clear()
    vi.unstubAllGlobals()
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('accepts known locales only', () => {
    expect(isLocale('en')).toBe(true)
    expect(isLocale('ar')).toBe(true)
    expect(isLocale('zh')).toBe(true)
    expect(isLocale('pt')).toBe(false)
    expect(isLocale(null)).toBe(false)
  })

  it('marks Arabic as the only RTL locale', () => {
    expect(isRtlLocale('ar')).toBe(true)
    expect(isRtlLocale('en')).toBe(false)
    expect(isRtlLocale('he' as 'en')).toBe(false)
  })

  it('persists and reads locale from localStorage', () => {
    persistLocale('ja')
    expect(localStorage.getItem(LOCALE_STORAGE_KEY)).toBe('ja')
    expect(readStoredLocale()).toBe('ja')
  })

  it('ignores invalid stored locale values', () => {
    localStorage.setItem(LOCALE_STORAGE_KEY, 'nope')
    expect(readStoredLocale()).toBeNull()
  })

  it('prefers stored locale over browser locale', () => {
    persistLocale('de')
    vi.stubGlobal('navigator', {
      language: 'fr-FR',
      languages: ['fr-FR', 'fr'],
    })
    expect(resolveLocale()).toBe('de')
  })

  it('falls back to browser primary language when nothing is stored', () => {
    vi.stubGlobal('navigator', {
      language: 'zh-CN',
      languages: ['zh-CN', 'zh'],
    })
    expect(getBrowserLocale()).toBe('zh')
    expect(resolveLocale()).toBe('zh')
  })

  it('defaults to English when browser language is unsupported', () => {
    vi.stubGlobal('navigator', {
      language: 'pt-BR',
      languages: ['pt-BR'],
    })
    expect(getBrowserLocale()).toBe('en')
  })

  it('applies lang and dir on the document element', () => {
    applyDocumentLang('en')
    expect(document.documentElement.lang).toBe('en')
    expect(document.documentElement.dir).toBe('ltr')

    applyDocumentLang('ar')
    expect(document.documentElement.lang).toBe('ar')
    expect(document.documentElement.dir).toBe('rtl')
  })
})
