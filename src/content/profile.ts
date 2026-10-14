export type ProfileCopy = {
  role: string
  headline: string
  support: string
  location: string
  locationShort: string
  arrangements: string
  availability: string
}

/** Shared identity — not localized. */
export const profile = {
  name: 'İlker Sevim',
  email: 'ilkersevim2007@gmail.com',
  links: {
    github: 'https://github.com/redjadet',
    linkedin: 'https://www.linkedin.com/in/ilker-sevim-95020820/',
    portfolioRepo: 'https://github.com/redjadet/react-web-portfolio',
  },
} as const

export const profileCopyEn: ProfileCopy = {
  role: 'Senior iOS & Flutter Engineer',
  headline:
    'I build reliable mobile experiences across iOS, iPadOS and Flutter.',
  support:
    'Public repos highlight architecture, offline data, native bridges and test coverage — structured for a quick technical review.',
  location: 'Istanbul, Türkiye · UTC+3',
  locationShort: 'Istanbul, Türkiye',
  arrangements: 'Remote from Türkiye; Istanbul hybrid or onsite',
  availability: 'Immediate · Full-time & contract',
}

export const profileCopyTr: ProfileCopy = {
  role: 'Kıdemli iOS ve Flutter Mühendisi',
  headline:
    'iOS, iPadOS ve Flutter’da güvenilir mobil deneyimler geliştiriyorum.',
  support:
    'Açık depolar mimariyi, çevrimdışı veriyi, native köprüleri ve test kapsamını öne çıkarır — hızlı teknik inceleme için yapılandırılmıştır.',
  location: 'İstanbul, Türkiye · UTC+3',
  locationShort: 'İstanbul, Türkiye',
  arrangements: 'Türkiye’den uzaktan; İstanbul’da hibrit veya ofis içi',
  availability: 'Hemen · Tam zamanlı ve sözleşmeli',
}

export const profileCopyFr: ProfileCopy = {
  role: 'Ingénieur iOS & Flutter senior',
  headline:
    'Je conçois des expériences mobiles fiables sur iOS, iPadOS et Flutter.',
  support:
    'Les dépôts publics mettent en avant l’architecture, les données hors ligne, les ponts natifs et la couverture de tests — structurés pour une revue technique rapide.',
  location: 'Istanbul, Türkiye · UTC+3',
  locationShort: 'Istanbul, Türkiye',
  arrangements: 'Télétravail depuis la Türkiye ; hybride ou sur site à Istanbul',
  availability: 'Disponible immédiatement · CDI et contrat',
}

export const profileCopyAr: ProfileCopy = {
  role: 'مهندس iOS وFlutter أول',
  headline:
    'أبني تجارب جوال موثوقة عبر iOS وiPadOS وFlutter.',
  support:
    'تُبرز المستودعات العامة البنية المعمارية والبيانات دون اتصال والجسور الأصلية وتغطية الاختبارات — مُنظَّمة لمراجعة تقنية سريعة.',
  location: 'إسطنبول، تركيا · UTC+3',
  locationShort: 'إسطنبول، تركيا',
  arrangements: 'عن بُعد من تركيا؛ هجين أو حضوري في إسطنبول',
  availability: 'متاح فورًا · دوام كامل وعقود',
}

export const profileCopyJa: ProfileCopy = {
  role: 'シニア iOS / Flutter エンジニア',
  headline:
    'iOS・iPadOS・Flutter で信頼性の高いモバイル体験を構築しています。',
  support:
    '公開リポジトリではアーキテクチャ、オフラインデータ、ネイティブブリッジ、テストカバレッジを明示しており、技術レビューしやすい構成です。',
  location: 'トルコ・イスタンブール · UTC+3',
  locationShort: 'トルコ・イスタンブール',
  arrangements: 'トルコからリモート、またはイスタンブールでハイブリッド／出社',
  availability: '即応可能 · フルタイムおよび契約',
}

export const profileCopyEs: ProfileCopy = {
  role: 'Ingeniero sénior de iOS y Flutter',
  headline:
    'Diseño experiencias móviles fiables en iOS, iPadOS y Flutter.',
  support:
    'Los repositorios públicos destacan la arquitectura, los datos sin conexión, los puentes nativos y la cobertura de pruebas — estructurados para una revisión técnica rápida.',
  location: 'Estambul, Türkiye · UTC+3',
  locationShort: 'Estambul, Türkiye',
  arrangements: 'Remoto desde Türkiye; híbrido o presencial en Estambul',
  availability: 'Disponible de inmediato · Jornada completa y contrato',
}

export const profileCopyDe: ProfileCopy = {
  role: 'Senior iOS- & Flutter-Ingenieur',
  headline:
    'Ich entwickle zuverlässige Mobile-Erlebnisse für iOS, iPadOS und Flutter.',
  support:
    'Öffentliche Repositories zeigen Architektur, Offline-Daten, native Bridges und Testabdeckung — strukturiert für eine schnelle technische Prüfung.',
  location: 'Istanbul, Türkiye · UTC+3',
  locationShort: 'Istanbul, Türkiye',
  arrangements: 'Remote aus der Türkiye; hybrid oder vor Ort in Istanbul',
  availability: 'Sofort verfügbar · Vollzeit und Vertrag',
}

export const profileCopyIt: ProfileCopy = {
  role: 'Ingegnere senior iOS e Flutter',
  headline:
    'Progetto esperienze mobili affidabili su iOS, iPadOS e Flutter.',
  support:
    'I repository pubblici evidenziano architettura, dati offline, bridge nativi e copertura dei test — strutturati per una revisione tecnica rapida.',
  location: 'Istanbul, Türkiye · UTC+3',
  locationShort: 'Istanbul, Türkiye',
  arrangements: 'Remoto dalla Türkiye; ibrido o in sede a Istanbul',
  availability: 'Disponibile subito · Tempo pieno e contratto',
}

export const profileCopyZh: ProfileCopy = {
  role: '高级 iOS 与 Flutter 工程师',
  headline: '我在 iOS、iPadOS 和 Flutter 上打造可靠的移动体验。',
  support:
    '公开仓库突出架构、离线数据、原生桥接与测试覆盖——便于快速技术评审。',
  location: '土耳其伊斯坦布尔 · UTC+3',
  locationShort: '土耳其伊斯坦布尔',
  arrangements: '可从土耳其远程；伊斯坦布尔混合或现场办公',
  availability: '可立即到岗 · 全职与合同制',
}
