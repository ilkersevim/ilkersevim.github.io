import { useLayoutEffect, useRef } from 'react'
import styles from './LanguageSwitcher.module.css'
import {
  LOCALES,
  LOCALE_LABELS,
  LOCALE_NATIVE_NAMES,
  type Locale,
} from '../i18n/locale'
import { useLocale } from '../i18n/useLocale'

function scrollActiveIntoSwitcher(
  root: HTMLElement,
  active: HTMLElement,
  behavior: ScrollBehavior,
) {
  const rootRect = root.getBoundingClientRect()
  const activeRect = active.getBoundingClientRect()
  const pad = 4
  const fullyVisible =
    activeRect.left >= rootRect.left + pad &&
    activeRect.right <= rootRect.right - pad
  if (fullyVisible) return

  // Visual delta works for both LTR pages and RTL document direction.
  const delta =
    activeRect.left -
    rootRect.left -
    (root.clientWidth - activeRect.width) / 2
  root.scrollBy({ left: delta, behavior })
}

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLocale()
  const listRef = useRef<HTMLDivElement>(null)
  const activeRef = useRef<HTMLButtonElement>(null)

  useLayoutEffect(() => {
    const root = listRef.current
    const active = activeRef.current
    if (!root || !active) return

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    scrollActiveIntoSwitcher(
      root,
      active,
      reduceMotion ? 'auto' : 'smooth',
    )
  }, [locale])

  return (
    <div
      ref={listRef}
      className={styles.switcher}
      role="group"
      aria-label={t.a11y.language}
      // Keep codes EN→ZH in a stable visual order even when the page is RTL.
      dir="ltr"
    >
      {LOCALES.map((code: Locale) => {
        const selected = locale === code
        const name = LOCALE_NATIVE_NAMES[code]
        return (
          <button
            key={code}
            ref={selected ? activeRef : undefined}
            type="button"
            className={selected ? styles.active : undefined}
            onClick={() => setLocale(code)}
            aria-pressed={selected}
            aria-label={name}
            lang={code}
            title={name}
          >
            {LOCALE_LABELS[code]}
          </button>
        )
      })}
    </div>
  )
}
