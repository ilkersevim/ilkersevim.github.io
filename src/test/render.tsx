import { createElement, type ReactElement, type ReactNode } from 'react'
import { render, type RenderOptions } from '@testing-library/react'
import { LocaleProvider } from '../i18n/LocaleProvider'
import { ThemeProvider } from '../theme/ThemeProvider'

export function renderWithProviders(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  function Wrapper({ children }: { children: ReactNode }) {
    return createElement(
      LocaleProvider,
      null,
      createElement(ThemeProvider, null, children),
    )
  }

  return render(ui, { wrapper: Wrapper, ...options })
}
