import type { Project } from './projects'

export type ProjectId = 'flutter-bloc-app' | 'super-demo-ios' | 'super-demo-android' | 'react-website'
export type ProjectCopy = {
  title: string
  blurb: string
  evidence: [string, string, string]
  imageAlt: string
  imageCaption: string
}
export type LinkLabels = Record<
  'demo' | 'review' | 'source' | 'mac' | 'companions' | 'case' | 'queue' |
  'stale' | 'race' | 'offline' | 'crud' | 'deepLink' | 'run' | 'unitRun' |
  'emulatorRun' | 'navigation' | 'qa', string
>

const flutter = 'https://github.com/redjadet/flutter_bloc_app'
const apple = 'https://github.com/redjadet/super_demo_ios'
const android = 'https://github.com/redjadet/super_demo_android'
const web = 'https://github.com/redjadet/react-web-portfolio'
const flutterRun = '5aa04771392fccf77dd3ea7fd0f11bb4a2cb6372'
const appleRun = '17d795f471aafae5010b5736d052b316cdedd02a'
const androidRun = '2d09e86001c73172a6dc4a4555197d9eaff346df'

type Reference = { label: keyof LinkLabels | 'store'; href: string; date?: string }
const catalog: Record<ProjectId, {
  tags: string[]
  image?: { src: string; width: number; height: number }
  links: Reference[]
  proof: Reference[]
}> = {
  'flutter-bloc-app': {
    tags: ['Flutter', 'Dart', 'BLoC / Cubit', 'iOS · Android · Web · macOS'],
    image: { src: 'projects/flutter-counter.png', width: 294, height: 640 },
    links: [
      { label: 'demo', href: 'https://redjadet.github.io/flutter_bloc_app/' },
      { label: 'review', href: `${flutter}#reviewer-path` },
      { label: 'store', href: 'https://play.google.com/store/apps/details?id=com.ilkersevim.blocflutter' },
      { label: 'source', href: flutter },
    ],
    proof: [
      { label: 'case', href: `${flutter}/blob/main/docs/EVIDENCE.md#1-offline-first-counter-local-persistence-and-queue-replay` },
      { label: 'queue', href: `${flutter}/blob/${flutterRun}/apps/mobile/test/features/counter/data/background_sync_counter_flow_test.dart` },
      { label: 'stale', href: `${flutter}/blob/${flutterRun}/apps/mobile/test/features/counter/data/offline_first_counter_repository_test.dart` },
      { label: 'run', date: '2026-10-09', href: `${flutter}/actions/runs/37902949216/job/113729610021` },
    ],
  },
  'super-demo-ios': {
    tags: ['SwiftUI', 'SwiftData', 'Swift Concurrency', 'UIKit'],
    image: { src: 'projects/apple-feed.png', width: 1206, height: 2622 },
    links: [
      { label: 'review', href: `${apple}/blob/main/docs/portfolio.md#3-minute-path` },
      { label: 'mac', href: `${apple}/blob/main/docs/macos-demo.md` },
      { label: 'companions', href: `${apple}/blob/main/docs/watch-tv-demo.md` },
      { label: 'source', href: apple },
    ],
    proof: [
      { label: 'case', href: `${apple}/blob/main/docs/EVIDENCE.md#lead-case-preserve-the-latest-bookmark-intent` },
      { label: 'race', href: `${apple}/blob/${appleRun}/superDemoAppTests/Features/Feed/OutboxSyncEngineTests.swift#L214-L231` },
      { label: 'run', date: '2026-10-08', href: `${apple}/actions/runs/37828018857/job/113485831800` },
    ],
  },
  'super-demo-android': {
    tags: ['Kotlin', 'Jetpack Compose', 'Coroutines / Flow', 'Room', 'Hilt', 'Retrofit'],
    image: { src: 'projects/android-feed.png', width: 1080, height: 2400 },
    links: [
      { label: 'review', href: `${android}/blob/main/docs/portfolio.md#3-minute-path` },
      { label: 'source', href: android },
    ],
    proof: [
      { label: 'case', href: `${android}/blob/main/docs/EVIDENCE.md#lead-case-preserve-bookmark-toggles-during-refresh` },
      { label: 'race', href: `${android}/blob/${androidRun}/app/src/test/java/com/redjadet/superdemo/features/feed/CachingFeedRepositoryTest.kt` },
      { label: 'offline', href: `${android}/blob/${androidRun}/app/src/androidTest/java/com/redjadet/superdemo/OfflineFeedInstrumentationTest.kt` },
      { label: 'crud', href: `${android}/blob/${androidRun}/app/src/test/java/com/redjadet/superdemo/features/items/RoomItemRepositoryTest.kt` },
      { label: 'deepLink', href: `${android}/blob/${androidRun}/app/src/androidTest/java/com/redjadet/superdemo/FeedDeepLinkInstrumentationTest.kt` },
      { label: 'unitRun', date: '2026-10-20', href: `${android}/actions/runs/39417272605` },
      { label: 'emulatorRun', date: '2026-10-20', href: `${android}/actions/runs/39417272616` },
    ],
  },
  'react-website': {
    tags: ['React', 'TypeScript', 'Vite', 'CSS Modules'],
    links: [{ label: 'source', href: web }],
    proof: [
      { label: 'navigation', href: `${web}/blob/main/src/hooks/useActiveSection.test.tsx` },
      { label: 'qa', href: `${web}/blob/main/docs/validation/2026-10-20-flutter-first.md` },
    ],
  },
}

export function buildProjects(copy: Record<ProjectId, ProjectCopy>, labels: LinkLabels): Project[] {
  return (Object.keys(catalog) as ProjectId[]).map((id) => {
    const { image, tags, links, proof } = catalog[id]
    const { imageAlt, imageCaption, ...text } = copy[id]
    const localize = (reference: Reference) => ({
      href: reference.href,
      label: (reference.label === 'store' ? 'Google Play' : labels[reference.label]) +
        (reference.date ? ` · ${reference.date}` : ''),
    })
    return {
      id, ...text, tags, links: links.map(localize), proof: proof.map(localize),
      ...(image ? { image: { ...image, alt: imageAlt, caption: imageCaption } } : {}),
    }
  })
}
