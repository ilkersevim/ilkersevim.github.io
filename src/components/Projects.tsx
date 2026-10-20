import styles from './Projects.module.css'
import { ExternalLink } from './ExternalLink'
import { Arrow } from './Arrow'
import { useLocale } from '../i18n/useLocale'

export function Projects() {
  const { t } = useLocale()

  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="shell">
        <h2 id="work-title" className="section__title">
          {t.work.title}
        </h2>
        <p className="section__lead">{t.work.lead}</p>
        <ol className={styles.projects}>
          {t.projects.map((project, index) => (
            <li key={project.id} className={styles.project}>
              <span className={styles.index} aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className={styles.copy}>
                <h3>{project.title}</h3>
                <p className={styles.description}>{project.blurb}</p>
                <p className={styles.tags}>{project.tags.join(' · ')}</p>
                <div className={styles.links}>
                  {project.links.map((link) => (
                    <ExternalLink
                      key={link.href}
                      href={link.href}
                      className="text-link"
                      label={t.a11y.projectLink(project.title, link.label)}
                    >
                      {link.label}
                      <Arrow />
                    </ExternalLink>
                  ))}
                </div>
                {project.image && (
                  <figure className={styles.preview}>
                    <img
                      src={import.meta.env.BASE_URL + project.image.src}
                      width={project.image.width}
                      height={project.image.height}
                      alt={project.image.alt}
                      loading="lazy"
                      decoding="async"
                    />
                    <figcaption>{project.image.caption}</figcaption>
                  </figure>
                )}
              </div>
              <div className={styles.evidence}>
                <ul>
                  {project.evidence.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className={styles.proof}>
                  {project.proof.map((link) => (
                    <ExternalLink
                      key={link.href}
                      href={link.href}
                      className="text-link"
                      label={t.a11y.projectLink(project.title, link.label)}
                    >
                      {link.label}<Arrow />
                    </ExternalLink>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
        <h3 className={styles.moreTitle}>{t.work.moreTitle}</h3>
        <ul className={styles.more}>
          {t.openSourceProjects.map((project) => (
            <li key={project.id}>
              <h4>{project.title}</h4>
              <p>{project.blurb}</p>
              <ExternalLink
                href={project.href}
                className="text-link"
                label={t.a11y.openSourceLink(project.title)}
              >
                {t.work.viewSource}
                <Arrow />
              </ExternalLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
