import { act, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { useActiveSection } from './useActiveSection'

const originalIntersectionObserver = globalThis.IntersectionObserver
const originalResizeObserver = globalThis.ResizeObserver
const originalHeight = window.innerHeight
let headerHeight = 80
let fixture: HTMLDivElement
let resizeHeader: ResizeObserverCallback
const observers: {
  callback: IntersectionObserverCallback
  options: IntersectionObserverInit
  observe: ReturnType<typeof vi.fn>
  disconnect: ReturnType<typeof vi.fn>
}[] = []

function notify(index: number, id: string, isIntersecting: boolean, intersectionRatio: number) {
  const entry = { target: document.getElementById(id), isIntersecting, intersectionRatio }
  act(() => observers[index].callback([entry as IntersectionObserverEntry], {} as IntersectionObserver))
}

beforeEach(() => {
  headerHeight = 80
  observers.length = 0
  Object.defineProperty(window, 'innerHeight', { configurable: true, value: 1000 })
  fixture = document.createElement('div')
  fixture.innerHTML = '<header></header><section id="work"></section><section id="skills"></section><section id="about"></section><section id="contact"></section>'
  document.body.append(fixture)
  vi.spyOn(fixture.querySelector('header')!, 'getBoundingClientRect')
    .mockImplementation(() => ({ height: headerHeight }) as DOMRect)
  vi.stubGlobal('IntersectionObserver', class {
    constructor(callback: IntersectionObserverCallback, options: IntersectionObserverInit) {
      Object.assign(this, { callback, options })
      observers.push(this as unknown as typeof observers[number])
    }
    observe = vi.fn()
    disconnect = vi.fn()
  })
  vi.stubGlobal('ResizeObserver', class {
    constructor(callback: ResizeObserverCallback) { resizeHeader = callback }
    observe = vi.fn()
    disconnect = vi.fn()
  })
})

afterEach(() => {
  fixture.remove()
  vi.restoreAllMocks()
  vi.stubGlobal('IntersectionObserver', originalIntersectionObserver)
  vi.stubGlobal('ResizeObserver', originalResizeObserver)
  Object.defineProperty(window, 'innerHeight', { configurable: true, value: originalHeight })
})

describe('active section reading band', () => {
  it('uses viewport-height pixels, with a nonempty band', () => {
    renderHook(useActiveSection)
    expect(observers[0].options.rootMargin).toBe('-400px 0px -450px 0px')
    expect(observers[0].observe).toHaveBeenCalledTimes(4)
  })

  it('rebuilds on viewport resize and disconnects old observers', () => {
    const { unmount } = renderHook(useActiveSection)
    Object.defineProperty(window, 'innerHeight', { configurable: true, value: 600 })
    act(() => window.dispatchEvent(new Event('resize')))
    expect(observers[0].disconnect).toHaveBeenCalledOnce()
    expect(observers[1].options.rootMargin).toBe('-240px 0px -270px 0px')
    unmount()
    expect(observers[1].disconnect).toHaveBeenCalledOnce()
    act(() => window.dispatchEvent(new Event('resize')))
    expect(observers).toHaveLength(2)
  })

  it('keeps the band below a wrapped sticky header and leaves at least one pixel', () => {
    renderHook(useActiveSection)
    headerHeight = 600
    act(() => resizeHeader([], {} as ResizeObserver))
    expect(observers[1].options.rootMargin).toBe('-600px 0px -399px 0px')
    headerHeight = 1200
    act(() => resizeHeader([], {} as ResizeObserver))
    expect(observers[2].options.rootMargin).toBe('-999px 0px -0px 0px')
  })

  it('retains visible sections across partial observer deliveries', () => {
    const { result } = renderHook(useActiveSection)
    notify(0, 'work', true, 0.2)
    notify(0, 'skills', true, 0.5)
    expect(result.current).toBe('skills')
    notify(0, 'skills', false, 0)
    expect(result.current).toBe('work')
    notify(0, 'work', false, 0)
    expect(result.current).toBeNull()
  })
})
