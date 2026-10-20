import { useEffect, useState } from 'react'

const sectionIds = ['work', 'skills', 'about', 'contact'] as const
export type SectionId = (typeof sectionIds)[number]

export function useActiveSection(): SectionId | null {
  const [active, setActive] = useState<SectionId | null>(null)

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)

    if (sections.length === 0) {
      return
    }

    const header = document.querySelector('header')
    let observer: IntersectionObserver | undefined
    let currentMargin = ''

    const observeViewport = () => {
      const height = Math.max(1, window.innerHeight)
      const headerHeight = header?.getBoundingClientRect().height ?? 0
      // IntersectionObserver resolves percentage margins against root WIDTH.
      // Keep a nonempty reading band below the sticky header, in height pixels.
      const top = Math.min(height - 1, Math.max(headerHeight, Math.round(height * 0.4)))
      const bottom = Math.min(height, Math.max(top + 1, Math.round(height * 0.55)))
      const rootMargin = `-${top}px 0px -${height - bottom}px 0px`
      if (rootMargin === currentMargin) return
      currentMargin = rootMargin
      observer?.disconnect()

      const visible = new Map<Element, IntersectionObserverEntry>()
      observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.set(entry.target, entry)
          else visible.delete(entry.target)
        }
        const next = [...visible.values()]
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]?.target.id
        setActive(sectionIds.includes(next as SectionId) ? next as SectionId : null)
      }, { rootMargin, threshold: [0, 0.15, 0.35, 0.55, 0.75] })
      for (const section of sections) observer.observe(section)
    }

    observeViewport()
    window.addEventListener('resize', observeViewport)
    const headerObserver = typeof ResizeObserver === 'undefined'
      ? null
      : new ResizeObserver(observeViewport)
    if (header) headerObserver?.observe(header)

    return () => {
      observer?.disconnect()
      headerObserver?.disconnect()
      window.removeEventListener('resize', observeViewport)
    }
  }, [])

  return active
}
