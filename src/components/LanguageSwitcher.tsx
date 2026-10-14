import { useEffect, useRef } from 'react'
import styles from './LanguageSwitcher.module.css'
import {
  LOCALES,
  LOCALE_LABELS,
  LOCALE_NATIVE_NAMES,
  type Locale,
} from '../i18n/locale'
import { useLocale } from '../i18n/useLocale'

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLocale()
  const activeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    // Prefer scrollIntoView so RTL (AR) scroll directions stay correct.
    activeRef.current?.scrollIntoView({
      inline: 'center',
      block: 'nearest',
      behavior: 'smooth',
    })
  }, [locale])

  return (
    <div
      className={styles.switcher}
      role="group"
      aria-label={t.a11y.language}
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
