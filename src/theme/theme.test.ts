import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import {
  applyTheme,
  getSystemTheme,
  isTheme,
  persistTheme,
  readStoredTheme,
  resolveTheme,
  THEME_STORAGE_KEY,
} from './theme'

function stubMatchMedia(matchesDark: boolean) {
  vi.stubGlobal(
    'matchMedia',
    vi.fn().mockImplementation((query: string) => ({
      matches: matchesDark && query.includes('prefers-color-scheme: dark'),
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  )
}

describe('theme helpers', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.removeAttribute('data-theme')
    document.documentElement.style.colorScheme = ''
    document.head.innerHTML = '<meta name="theme-color" content="#ffffff" />'
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('accepts light and dark only', () => {
    expect(isTheme('light')).toBe(true)
    expect(isTheme('dark')).toBe(true)
    expect(isTheme('auto')).toBe(false)
    expect(isTheme(null)).toBe(false)
  })

  it('persists and reads theme from localStorage', () => {
    persistTheme('dark')
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark')
    expect(readStoredTheme()).toBe('dark')
  })

  it('prefers stored theme over system preference', () => {
    persistTheme('light')
    stubMatchMedia(true)
    expect(resolveTheme()).toBe('light')
  })

  it('falls back to system preference when nothing is stored', () => {
    stubMatchMedia(true)
    expect(getSystemTheme()).toBe('dark')
    expect(resolveTheme()).toBe('dark')

    stubMatchMedia(false)
    expect(getSystemTheme()).toBe('light')
    expect(resolveTheme()).toBe('light')
  })

  it('applies data-theme, color-scheme, and theme-color meta', () => {
    applyTheme('dark')
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark')
    expect(document.documentElement.style.colorScheme).toBe('dark')
    expect(
      document.querySelector('meta[name="theme-color"]')?.getAttribute('content'),
    ).toBe('#0c1a20')

    applyTheme('light')
    expect(document.documentElement.getAttribute('data-theme')).toBe('light')
    expect(
      document.querySelector('meta[name="theme-color"]')?.getAttribute('content'),
    ).toBe('#ffffff')
  })
})
