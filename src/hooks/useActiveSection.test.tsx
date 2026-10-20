import { act, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { useActiveSection, type SectionId } from './useActiveSection'

const originalHeight = window.innerHeight
let fixture: HTMLDivElement
let tops: Record<SectionId, number>
let resized: ResizeObserverCallback
let frames: Map<number, FrameRequestCallback>
const disconnect = vi.fn()

function flushFrames() {
  act(() => {
    const pending = [...frames.values()]
    frames.clear()
    for (const callback of pending) callback(0)
  })
}

function notifyScroll() {
  act(() => window.dispatchEvent(new Event('scroll')))
  flushFrames()
}

beforeEach(() => {
  tops = { work: -3000, skills: -1000, about: -100, contact: 700 }
  frames = new Map()
  let frameId = 0
  disconnect.mockClear()
  Object.defineProperty(window, 'innerHeight', { configurable: true, value: 1000 })
  document.documentElement.style.scrollPaddingTop = '96px'
  fixture = document.createElement('div')
  fixture.innerHTML = '<header></header><section id="work"></section><section id="skills"></section><section id="about"></section><section id="contact"></section>'
  document.body.append(fixture)
  for (const id of Object.keys(tops) as SectionId[]) {
    vi.spyOn(document.getElementById(id)!, 'getBoundingClientRect')
      .mockImplementation(() => ({ top: tops[id] }) as DOMRect)
  }
  vi.spyOn(window, 'requestAnimationFrame').mockImplementation((callback) => {
    frames.set(++frameId, callback)
    return frameId
  })
  vi.spyOn(window, 'cancelAnimationFrame').mockImplementation((id) => { frames.delete(id) })
  vi.stubGlobal('ResizeObserver', class {
    constructor(callback: ResizeObserverCallback) { resized = callback }
    observe = vi.fn()
    disconnect = disconnect
  })
})

afterEach(() => {
  fixture.remove()
  document.documentElement.style.removeProperty('scroll-padding-top')
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
  Object.defineProperty(window, 'innerHeight', { configurable: true, value: originalHeight })
})

describe('active section from current geometry', () => {
  it('updates Contact on scroll without waiting for intersection thresholds', () => {
    const { result } = renderHook(useActiveSection)
    expect(result.current).toBe('about')
    tops.contact = 195
    notifyScroll()
    expect(result.current).toBe('contact')
    tops.contact = 700
    notifyScroll()
    expect(result.current).toBe('about')
  })

  it('keeps a short-viewport anchor active below the sticky-header inset', () => {
    Object.defineProperty(window, 'innerHeight', { configurable: true, value: 393 })
    document.documentElement.style.scrollPaddingTop = '195px'
    tops.contact = 195
    const { result } = renderHook(useActiveSection)
    expect(result.current).toBe('contact')
  })

  it('clears the active link when scrolling back above Work', () => {
    const { result } = renderHook(useActiveSection)
    tops = { work: 500, skills: 1500, about: 2500, contact: 3500 }
    notifyScroll()
    expect(result.current).toBeNull()
    tops.work = 350
    notifyScroll()
    expect(result.current).toBe('work')
  })

  it('recomputes after viewport resize and static-header inset changes', () => {
    tops.contact = 300
    const { result } = renderHook(useActiveSection)
    expect(result.current).toBe('contact')
    Object.defineProperty(window, 'innerHeight', { configurable: true, value: 196 })
    document.documentElement.style.scrollPaddingTop = '16px'
    act(() => window.dispatchEvent(new Event('resize')))
    flushFrames()
    expect(result.current).toBe('about')
  })

  it('uses fresh positions after locale reflow or a hash navigation', () => {
    const { result } = renderHook(useActiveSection)
    tops.contact = 200
    act(() => resized([], {} as ResizeObserver))
    flushFrames()
    expect(result.current).toBe('contact')
    tops.contact = 700
    act(() => window.dispatchEvent(new Event('hashchange')))
    flushFrames()
    expect(result.current).toBe('about')
  })

  it('coalesces scrolling and removes pending work and listeners on unmount', () => {
    const { unmount } = renderHook(useActiveSection)
    act(() => {
      window.dispatchEvent(new Event('scroll'))
      window.dispatchEvent(new Event('scroll'))
    })
    expect(frames.size).toBe(1)
    unmount()
    expect(frames.size).toBe(0)
    expect(disconnect).toHaveBeenCalledOnce()
    act(() => {
      window.dispatchEvent(new Event('scroll'))
      window.dispatchEvent(new Event('resize'))
      window.dispatchEvent(new Event('hashchange'))
    })
    expect(frames.size).toBe(0)
  })
})
