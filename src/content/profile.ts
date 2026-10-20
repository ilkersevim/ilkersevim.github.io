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
  role: "Flutter Cross-Platform Developer & Senior iOS Engineer",
  headline: "I build Flutter apps and native Apple experiences, with personal Android and React projects.",
  support: "Explore offline changes, request races and the design decisions behind them — with regression tests and dated run records.",
  location: 'Istanbul, Türkiye · UTC+3',
  locationShort: 'Istanbul, Türkiye',
  arrangements: "Remote from Istanbul, Türkiye; hybrid in Istanbul",
  availability: 'Immediate · Full-time & contract',
}

export const profileCopyTr: ProfileCopy = {
  role: "Flutter Çoklu Platform Geliştiricisi ve Kıdemli iOS Mühendisi",
  headline: "Flutter ve Apple uygulamaları geliştiriyorum; Android ve React çalışmalarımı kişisel projelerde gösteriyorum.",
  support: "Çevrimdışı değişiklikler, istek yarışları ve tasarım kararları: ilgili regresyon testleri ve tarihli çalıştırma kayıtlarıyla incelenebilir.",
  location: 'İstanbul, Türkiye · UTC+3',
  locationShort: 'İstanbul, Türkiye',
  arrangements: "İstanbul/Türkiye’den uzaktan; İstanbul’da hibrit",
  availability: 'Hemen · Tam zamanlı ve sözleşmeli',
}

export const profileCopyFr: ProfileCopy = {
  role: "Développeur Flutter multiplateforme et ingénieur iOS senior",
  headline: "Je développe des apps Flutter et Apple, avec des projets personnels Android et React.",
  support: "Modifications hors ligne, requêtes concurrentes et choix de conception : tests de régression et exécutions datées à l’appui.",
  location: 'Istanbul, Türkiye · UTC+3',
  locationShort: 'Istanbul, Türkiye',
  arrangements: "À distance depuis Istanbul, Türkiye ; hybride à Istanbul",
  availability: 'Disponible immédiatement · CDI et contrat',
}

export const profileCopyAr: ProfileCopy = {
  role: "مطور Flutter متعدد المنصات ومهندس iOS أول",
  headline: "أطور تطبيقات Flutter وApple، إلى جانب مشاريع شخصية على Android وReact.",
  support: "تغييرات دون اتصال وسباقات الطلبات وقرارات التصميم، مع اختبارات تراجع وسجلات تشغيل مؤرخة.",
  location: 'إسطنبول، تركيا · UTC+3',
  locationShort: 'إسطنبول، تركيا',
  arrangements: "عن بُعد من إسطنبول، تركيا؛ هجين في إسطنبول",
  availability: 'متاح فورًا · دوام كامل وعقود',
}

export const profileCopyJa: ProfileCopy = {
  role: "Flutter クロスプラットフォーム開発者 ＆ シニア iOS エンジニア",
  headline: "Flutter・Apple 向けアプリを開発し、個人プロジェクトで Android と React にも取り組んでいます。",
  support: "オフライン変更やリクエスト競合への設計判断を、回帰テストと日付付き実行記録から確認できます。",
  location: 'トルコ・イスタンブール · UTC+3',
  locationShort: 'トルコ・イスタンブール',
  arrangements: "トルコ・イスタンブールからリモート、またはイスタンブールでハイブリッド",
  availability: '即応可能 · フルタイムおよび契約',
}

export const profileCopyEs: ProfileCopy = {
  role: "Desarrollador Flutter multiplataforma e ingeniero sénior de iOS",
  headline: "Desarrollo apps Flutter y Apple, con proyectos personales de Android y React.",
  support: "Cambios sin conexión, solicitudes concurrentes y decisiones de diseño, con pruebas de regresión y ejecuciones fechadas.",
  location: 'Estambul, Türkiye · UTC+3',
  locationShort: 'Estambul, Türkiye',
  arrangements: "Remoto desde Estambul, Türkiye; híbrido en Estambul",
  availability: 'Disponible de inmediato · Jornada completa y contrato',
}

export const profileCopyDe: ProfileCopy = {
  role: "Flutter-Cross-Platform-Entwickler & Senior iOS Engineer",
  headline: "Ich entwickle Flutter- und Apple-Apps sowie persönliche Android- und React-Projekte.",
  support: "Offline-Änderungen, konkurrierende Anfragen und Entwurfsentscheidungen — mit Regressionstests und datierten Testläufen.",
  location: 'Istanbul, Türkiye · UTC+3',
  locationShort: 'Istanbul, Türkiye',
  arrangements: "Remote aus Istanbul, Türkiye; hybrid in Istanbul",
  availability: 'Sofort verfügbar · Vollzeit und Vertrag',
}

export const profileCopyIt: ProfileCopy = {
  role: "Sviluppatore Flutter multipiattaforma e ingegnere iOS senior",
  headline: "Sviluppo app Flutter e Apple, con progetti personali Android e React.",
  support: "Modifiche offline, richieste concorrenti e scelte progettuali, con test di regressione ed esecuzioni datate.",
  location: 'Istanbul, Türkiye · UTC+3',
  locationShort: 'Istanbul, Türkiye',
  arrangements: "Da remoto da Istanbul, Türkiye; ibrido a Istanbul",
  availability: 'Disponibile subito · Tempo pieno e contratto',
}

export const profileCopyZh: ProfileCopy = {
  role: "Flutter 跨平台开发者与高级 iOS 工程师",
  headline: "我开发 Flutter 和 Apple 应用，也通过个人项目实践 Android 与 React。",
  support: "从离线修改、请求竞争到设计决策，均可查看回归测试和有日期的运行记录。",
  location: '土耳其伊斯坦布尔 · UTC+3',
  locationShort: '土耳其伊斯坦布尔',
  arrangements: "从土耳其伊斯坦布尔远程办公；伊斯坦布尔混合办公",
  availability: '可立即到岗 · 全职与合同制',
}
