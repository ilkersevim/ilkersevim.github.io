import { afterEach, describe, expect, it } from 'vitest'
import { applyDocumentMeta, getMessages } from './messages'
import { LOCALES } from './locale'

afterEach(() => { document.head.innerHTML = '' })

describe('localized identity metadata', () => {
  it.each(LOCALES)('updates title, sharing metadata and Person.jobTitle for %s', (locale) => {
    document.head.innerHTML = `
      <meta name="description"><meta property="og:title"><meta property="og:description">
      <meta property="og:locale"><meta property="og:image:alt"><meta name="twitter:title">
      <meta name="twitter:description"><meta name="twitter:image:alt">
      <script type="application/ld+json">{"@type":"Person","name":"İlker Sevim","jobTitle":"old"}</script>`
    applyDocumentMeta(locale)
    const { meta, profile } = getMessages(locale)
    expect(document.title).toBe(meta.title)
    expect(document.querySelector('meta[name="description"]')?.getAttribute('content')).toBe(meta.description)
    for (const selector of ['meta[property="og:title"]', 'meta[property="og:image:alt"]', 'meta[name="twitter:title"]', 'meta[name="twitter:image:alt"]']) {
      expect(document.querySelector(selector)?.getAttribute('content')).toBe(meta.title)
    }
    expect(document.querySelector('meta[property="og:locale"]')?.getAttribute('content')).toBe(meta.ogLocale)
    expect(JSON.parse(document.querySelector('script')!.textContent!)).toMatchObject({ name: 'İlker Sevim', jobTitle: profile.role })
  })
})
