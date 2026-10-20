import styles from './Contact.module.css'
import { profile } from '../content/profile'
import { ExternalLink } from './ExternalLink'
import { useLocale } from '../i18n/useLocale'

export function Contact() {
  const { t } = useLocale()
  const noteLines = t.contact.note.split('\n')

  return (
    <section
      id="contact"
      className={['section', styles.contact].join(' ')}
      aria-labelledby="contact-title"
    >
      <div className={['shell', styles.layout].join(' ')}>
        <div>
          <h2 id="contact-title" className={styles.title}>
            {t.contact.title}
          </h2>
          <p className={styles.note}>
            {noteLines.map((line, index) => (
              <span key={line}>
                {index > 0 ? <br /> : null}
                {line}
              </span>
            ))}
          </p>
          <div className={styles.actions}>
            <a
              className={['btn', styles.emailButton].join(' ')}
              href={'mailto:' + profile.email}
            >
              {t.contact.emailMe}
            </a>
            <ExternalLink href={profile.links.linkedin} label="LinkedIn">
              LinkedIn
            </ExternalLink>
            <ExternalLink href={profile.links.github} label="GitHub">
              GitHub
            </ExternalLink>
          </div>
          <a className={styles.email} href={'mailto:' + profile.email}>
            {profile.email}
          </a>
          <div className={styles.downloads}>
            <a href={import.meta.env.BASE_URL + 'cv/ilker-sevim-flutter.pdf'} download>
              {t.contact.flutterCv}
            </a>
            <a href={import.meta.env.BASE_URL + 'cv/ilker-sevim-ios.pdf'} download>
              {t.contact.iosCv}
            </a>
          </div>
        </div>
        <p className={styles.invitation}>{t.contact.invitation}</p>
      </div>
    </section>
  )
}
