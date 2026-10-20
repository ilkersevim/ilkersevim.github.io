import { useTheme } from '../theme/useTheme'
import { useLocale } from '../i18n/useLocale'
import styles from './ThemeToggle.module.css'

function SunIcon() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 14.5A8.5 8.5 0 0 1 9.5 3 7 7 0 1 0 21 14.5z" />
    </svg>
  )
}

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useLocale()
  const isDark = theme === 'dark'
  const switchLabel = isDark ? t.theme.switchToLight : t.theme.switchToDark
  const stateLabel = isDark ? t.theme.darkOn : t.theme.lightOn

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={switchLabel}
      title={switchLabel}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
      <span className="visually-hidden">{stateLabel}</span>
    </button>
  )
}
