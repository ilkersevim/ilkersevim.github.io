import { createElement } from 'react'
import { describe, expect, it } from 'vitest'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'
import { getMessages } from './i18n/messages'
import { LOCALE_STORAGE_KEY } from './i18n/locale'
import { THEME_STORAGE_KEY } from './theme/theme'
import { renderWithProviders } from './test/render'

describe('App integration', () => {
  it('exposes the visible email label and two named CV downloads', async () => {
    renderWithProviders(createElement(App))
    const { contact } = getMessages('en')
    expect(await screen.findByRole('link', { name: contact.emailMe, exact: true }))
      .toHaveAttribute('href', 'mailto:ilkersevim2007@gmail.com')
    for (const [label, filename] of [[contact.flutterCv, 'flutter'], [contact.iosCv, 'ios']]) {
      const link = screen.getByRole('link', { name: label })
      expect(link).toHaveAttribute('href', `/cv/ilker-sevim-${filename}.pdf`)
      expect(link).toHaveAttribute('download')
    }
  })

  it('switches language copy and document lang/dir', async () => {
    const user = userEvent.setup()
    renderWithProviders(createElement(App))

    expect(await screen.findByRole('heading', { level: 1 })).toHaveTextContent(
      'İlker Sevim',
    )
    expect(screen.getByRole('navigation', { name: 'Primary' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: getMessages('en').nav.work })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'العربية' }))

    await waitFor(() => {
      expect(document.documentElement.lang).toBe('ar')
      expect(document.documentElement.dir).toBe('rtl')
    })
    expect(localStorage.getItem(LOCALE_STORAGE_KEY)).toBe('ar')
    expect(
      screen.getByRole('link', { name: getMessages('ar').nav.work }),
    ).toBeInTheDocument()
    expect(screen.getByText(getMessages('ar').profile.role)).toBeInTheDocument()
  })

  it('toggles theme data attribute and persistence', async () => {
    const user = userEvent.setup()
    renderWithProviders(createElement(App))

    const toggle = await screen.findByRole('button', {
      name: getMessages('en').theme.switchToDark,
    })
    expect(document.documentElement.getAttribute('data-theme')).toBe('light')

    await user.click(toggle)

    await waitFor(() => {
      expect(document.documentElement.getAttribute('data-theme')).toBe('dark')
    })
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark')
    expect(
      screen.getByRole('button', { name: getMessages('en').theme.switchToLight }),
    ).toBeInTheDocument()
  })

  it.each([
    ['en', 'ltr'] as const,
    ['ar', 'rtl'] as const,
    ['zh', 'ltr'] as const,
  ])('renders critical sections for %s without crashing', async (locale, dir) => {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale)
    renderWithProviders(createElement(App))

    const messages = getMessages(locale)
    expect(await screen.findByRole('heading', { level: 1 })).toHaveTextContent(
      'İlker Sevim',
    )
    expect(screen.getByText(messages.profile.role)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: messages.work.title })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: messages.skills.title })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: messages.about.title })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: messages.contact.title })).toBeInTheDocument()

    await waitFor(() => {
      expect(document.documentElement.lang).toBe(locale)
      expect(document.documentElement.dir).toBe(dir)
    })
  })
})
