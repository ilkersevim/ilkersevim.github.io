import styles from './Hero.module.css'
import { profile } from '../content/profile'
import { useLocale } from '../i18n/useLocale'

export function Hero() {
  const { t } = useLocale()

  return (
    <section className={styles.hero} aria-labelledby="hero-name">
      <div className={['shell', styles.inner].join(' ')}>
        <div className={styles.copy}>
          <h1 id="hero-name" className={styles.name}>
            {profile.name}
          </h1>
          <p className={styles.role}>{t.profile.role}</p>
          <p className={styles.headline}>{t.profile.headline}</p>
          <p className={styles.support}>{t.profile.support}</p>
          <p className={styles.arrangements}>{t.profile.arrangements}</p>
          <div className={styles.actions}>
            <a className="btn btn--primary" href="#work">
              {t.hero.exploreWork}
            </a>
            <a className="btn btn--outline" href="#contact">
              {t.hero.getInTouch}
            </a>
          </div>
        </div>
        <img
          className={styles.portrait}
          src={import.meta.env.BASE_URL + 'ilker-sevim.jpg'}
          alt={t.hero.portraitAlt}
          width="720"
          height="959"
          fetchPriority="high"
          decoding="async"
        />
      </div>
    </section>
  )
}
