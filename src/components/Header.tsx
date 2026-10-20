import { useLayoutEffect, useRef } from 'react'
import styles from './Header.module.css'
import { profile } from '../content/profile'
import { useActiveSection, type SectionId } from '../hooks/useActiveSection'
import { useLocale } from '../i18n/useLocale'
import { LanguageSwitcher } from './LanguageSwitcher'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  const headerRef = useRef<HTMLElement>(null)
  const activeSection = useActiveSection()
  const { t } = useLocale()

  // Wrapped sticky headers need an inset; short-screen static headers need none.
  useLayoutEffect(() => {
    const header = headerRef.current
    if (!header) return

    const updateHeaderOffset = () => {
      const position = window.getComputedStyle(header).position
      const height = position === 'sticky' || position === 'fixed'
        ? Math.ceil(header.getBoundingClientRect().height)
        : 0
      document.documentElement.style.setProperty(
        '--header-offset',
        `${height}px`,
      )
    }

    updateHeaderOffset()
    window.addEventListener('resize', updateHeaderOffset)

    const observer =
      typeof ResizeObserver === 'undefined'
        ? null
        : new ResizeObserver(updateHeaderOffset)
    observer?.observe(header)

    return () => {
      observer?.disconnect()
      window.removeEventListener('resize', updateHeaderOffset)
      document.documentElement.style.removeProperty('--header-offset')
    }
  }, [])

  const links: { href: `#${SectionId}`; label: string; id: SectionId }[] = [
    { href: '#work', label: t.nav.work, id: 'work' },
    { href: '#skills', label: t.nav.skills, id: 'skills' },
    { href: '#about', label: t.nav.about, id: 'about' },
    { href: '#contact', label: t.nav.contact, id: 'contact' },
  ]

  return (
    <header ref={headerRef} className={styles.header}>
      <div className={`shell ${styles.inner}`}>
        <a
          className={styles.brand}
          href="#top"
          aria-label={`${profile.name} ${t.a11y.brandTop}`}
        >
          {profile.name}
        </a>
        <div className={styles.controls}>
          <nav className={styles.nav} aria-label={t.a11y.primaryNav}>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={
                  activeSection === link.id ? styles.active : undefined
                }
                aria-current={
                  activeSection === link.id ? 'location' : undefined
                }
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className={styles.toggles}>
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
