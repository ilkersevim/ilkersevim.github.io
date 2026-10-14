import '@testing-library/jest-dom/vitest'
import { afterEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'

afterEach(() => {
  cleanup()
  localStorage.clear()
  document.documentElement.removeAttribute('data-theme')
  document.documentElement.removeAttribute('lang')
  document.documentElement.removeAttribute('dir')
  document.documentElement.style.colorScheme = ''
  document.documentElement.style.removeProperty('--header-offset')
})

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

class StubIntersectionObserver {
  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
  takeRecords(): IntersectionObserverEntry[] {
    return []
  }
  root: Element | Document | null = null
  rootMargin = ''
  thresholds: ReadonlyArray<number> = []
}

class StubResizeObserver {
  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
}

vi.stubGlobal('IntersectionObserver', StubIntersectionObserver)
vi.stubGlobal('ResizeObserver', StubResizeObserver)

if (!Element.prototype.scrollBy) {
  Element.prototype.scrollBy = function scrollBy() {
    // jsdom stub — LanguageSwitcher centers the active locale chip.
  }
}
