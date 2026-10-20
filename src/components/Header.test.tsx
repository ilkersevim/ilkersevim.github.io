import { createElement } from 'react'
import { act } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'
import { renderWithProviders } from '../test/render'
import { Header } from './Header'

afterEach(() => vi.restoreAllMocks())

it('drops the scroll inset when a same-height header becomes static on resize', () => {
  let position = 'sticky'
  const getComputedStyle = window.getComputedStyle.bind(window)
  vi.spyOn(window, 'getComputedStyle').mockImplementation((element, pseudo) => {
    if (element.tagName === 'HEADER') return { position } as CSSStyleDeclaration
    return getComputedStyle(element, pseudo)
  })
  vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect')
    .mockReturnValue({ height: 176 } as DOMRect)
  const { unmount } = renderWithProviders(createElement(Header))
  const offset = () => document.documentElement.style.getPropertyValue('--header-offset')
  expect(offset()).toBe('176px')

  position = 'static'
  act(() => window.dispatchEvent(new Event('resize')))
  expect(offset()).toBe('0px')

  position = 'sticky'
  act(() => window.dispatchEvent(new Event('resize')))
  expect(offset()).toBe('176px')

  unmount()
  act(() => window.dispatchEvent(new Event('resize')))
  expect(offset()).toBe('')
})
