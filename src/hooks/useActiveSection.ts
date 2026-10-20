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
    let frame: number | null = null
    const updateActiveSection = () => {
      frame = null
      const height = Math.max(1, window.innerHeight)
      const scrollPadding = Number.parseFloat(
        window.getComputedStyle(document.documentElement).scrollPaddingTop,
      ) || 0
      // Read current positions, including during smooth anchor navigation.
      // Keep the reading line below the same inset used for anchors and focus.
      const readingLine = Math.min(height - 1, Math.max(scrollPadding + 1, height * 0.4))
      let next: SectionId | null = null
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= readingLine) {
          next = section.id as SectionId
        }
      }
      setActive(next)
    }

    const scheduleUpdate = () => {
      if (frame === null) frame = window.requestAnimationFrame(updateActiveSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    window.addEventListener('hashchange', scheduleUpdate)
    const resizeObserver = typeof ResizeObserver === 'undefined'
      ? null
      : new ResizeObserver(scheduleUpdate)
    if (header) resizeObserver?.observe(header)
    for (const section of sections) resizeObserver?.observe(section)

    return () => {
      if (frame !== null) window.cancelAnimationFrame(frame)
      resizeObserver?.disconnect()
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      window.removeEventListener('hashchange', scheduleUpdate)
    }
  }, [])

  return active
}
