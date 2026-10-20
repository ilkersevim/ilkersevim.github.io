import type { Locale } from './locale'
import type { Project } from '../content/projects'
import type { SkillGroup } from '../content/skills'
import {
  openSourceProjectsAr,
  openSourceProjectsDe,
  openSourceProjectsEn,
  openSourceProjectsEs,
  openSourceProjectsFr,
  openSourceProjectsIt,
  openSourceProjectsJa,
  openSourceProjectsTr,
  openSourceProjectsZh,
  projectsAr,
  projectsDe,
  projectsEn,
  projectsEs,
  projectsFr,
  projectsIt,
  projectsJa,
  projectsTr,
  projectsZh,
  type OpenSourceProject,
} from '../content/projects'
import {
  skillGroupsAr,
  skillGroupsDe,
  skillGroupsEn,
  skillGroupsEs,
  skillGroupsFr,
  skillGroupsIt,
  skillGroupsJa,
  skillGroupsTr,
  skillGroupsZh,
} from '../content/skills'
import {
  profileCopyAr,
  profileCopyDe,
  profileCopyEn,
  profileCopyEs,
  profileCopyFr,
  profileCopyIt,
  profileCopyJa,
  profileCopyTr,
  profileCopyZh,
  type ProfileCopy,
} from '../content/profile'

export type Messages = {
  meta: {
    title: string
    description: string
    ogLocale: string
  }
  a11y: {
    skipToContent: string
    primaryNav: string
    brandTop: string
    language: string
    opensInNewTab: string
    emailName: (name: string) => string
    projectLink: (project: string, label: string) => string
    openSourceLink: (project: string) => string
  }
  theme: {
    switchToLight: string
    switchToDark: string
    darkOn: string
    lightOn: string
  }
  nav: {
    work: string
    skills: string
    about: string
    contact: string
  }
  hero: {
    exploreWork: string
    getInTouch: string
    portraitAlt: string
  }
  work: {
    title: string
    lead: string
    moreTitle: string
    viewSource: string
  }
  skills: {
    title: string
    lead: string
  }
  about: {
    title: string
    paragraphs: [string, string, string]
    location: string
    arrangements: string
    availability: string
    education: string
    educationValue: string
  }
  contact: {
    title: string
    note: string
    emailMe: string
    flutterCv: string
    iosCv: string
    invitation: string
  }
  footer: {
    websiteSource: string
  }
  profile: ProfileCopy
  projects: Project[]
  openSourceProjects: readonly OpenSourceProject[]
  skillGroups: SkillGroup[]
}

const en: Messages = {
  meta: {
    title: "İlker Sevim — " + profileCopyEn.role,
    description: profileCopyEn.headline + " " + profileCopyEn.arrangements,
    ogLocale: 'en_US',
  },
  a11y: {
    skipToContent: 'Skip to content',
    primaryNav: 'Primary',
    brandTop: '— top of page',
    language: 'Language',
    opensInNewTab: ' (opens in a new tab)',
    emailName: (name) => `Email ${name}`,
    projectLink: (project, label) => `${project}: ${label}`,
    openSourceLink: (project) => `${project}: View source`,
  },
  theme: {
    switchToLight: 'Switch to light theme',
    switchToDark: 'Switch to dark theme',
    darkOn: 'Dark theme on',
    lightOn: 'Light theme on',
  },
  nav: {
    work: 'Work',
    skills: 'Skills',
    about: 'About',
    contact: 'Contact',
  },
  hero: {
    exploreWork: 'Explore my work',
    getInTouch: 'Get in touch',
    portraitAlt: 'Portrait of İlker Sevim',
  },
  work: {
    title: 'Selected work',
    lead: 'Public projects that show how I design, build and verify software.',
    moreTitle: 'More open-source work',
    viewSource: 'View source',
  },
  skills: {
    title: 'Skills & engineering practices',
    lead: "Flutter first, a professional Apple foundation, and personal Android and React projects.",
  },
  about: {
    title: 'Experience with real product constraints',
    paragraphs: [
      "I am a mobile engineer in Istanbul, with professional experience in banking, payments, telecom and secure communications. My Flutter background includes 1.5 years of commercial work and, separately, 3 years of personal development.",
      "My professional Apple work uses Swift, UIKit and Objective-C, alongside WebRTC and audio/video development. My public Apple portfolio demonstrates SwiftUI, SwiftData and Swift Concurrency; Android and React are personal portfolio projects.",
      "I have led mobile development, mentored engineers and automated builds and releases. With Cursor and Codex, I keep changes scoped, review the code and verify the result with tests.",
    ],
    location: 'Location',
    arrangements: 'Working arrangements',
    availability: 'Availability',
    education: 'Education',
    educationValue:
      'BSc Computer Engineering · Işık University\nMBA · Maltepe University',
  },
  contact: {
    title: 'Let’s build something reliable.',
    note: "Open to Flutter and iOS engineering roles.\nRemote from Istanbul, Türkiye; hybrid in Istanbul.",
    flutterCv: "Download Flutter CV (PDF)",
    iosCv: "Download iOS CV (PDF)",
    emailMe: 'Email me',
    invitation:
      'For hiring conversations, tell me about the product, team and the role.',
  },
  footer: {
    websiteSource: 'Website source',
  },
  profile: profileCopyEn,
  projects: projectsEn,
  openSourceProjects: openSourceProjectsEn,
  skillGroups: skillGroupsEn,
}

const tr: Messages = {
  meta: {
    title: "İlker Sevim — " + profileCopyTr.role,
    description: profileCopyTr.headline + " " + profileCopyTr.arrangements,
    ogLocale: 'tr_TR',
  },
  a11y: {
    skipToContent: 'İçeriğe atla',
    primaryNav: 'Ana menü',
    brandTop: '— sayfa başı',
    language: 'Dil',
    opensInNewTab: ' (yeni sekmede açılır)',
    emailName: (name) => `${name} adresine e-posta`,
    projectLink: (project, label) => `${project}: ${label}`,
    openSourceLink: (project) => `${project}: Kaynağı görüntüle`,
  },
  theme: {
    switchToLight: 'Açık temaya geç',
    switchToDark: 'Koyu temaya geç',
    darkOn: 'Koyu tema açık',
    lightOn: 'Açık tema açık',
  },
  nav: {
    work: 'İşler',
    skills: 'Yetkinlikler',
    about: 'Hakkında',
    contact: 'İletişim',
  },
  hero: {
    exploreWork: 'İşlerimi keşfet',
    getInTouch: 'İletişime geç',
    portraitAlt: 'İlker Sevim’in portresi',
  },
  work: {
    title: 'Seçilmiş işler',
    lead: 'Yazılımı nasıl tasarladığımı, geliştirdiğimi ve doğruladığımı gösteren açık projeler.',
    moreTitle: 'Diğer açık kaynak çalışmalar',
    viewSource: 'Kaynağı görüntüle',
  },
  skills: {
    title: 'Yetkinlikler ve mühendislik pratikleri',
    lead: "Önce Flutter; güçlü bir profesyonel Apple geçmişi ve kişisel Android / React projeleri.",
  },
  about: {
    title: 'Gerçek ürün kısıtlarıyla edinilmiş deneyim',
    paragraphs: [
      "İstanbul’da yaşayan bir mobil yazılım mühendisiyim. Bankacılık, ödeme, telekom ve güvenli iletişim ürünlerinde çalıştım. Flutter geçmişim 1,5 yıl ticari deneyim ve bundan ayrı 3 yıllık kişisel çalışmayı kapsıyor.",
      "Profesyonel Apple deneyimim Swift, UIKit ve Objective-C ile WebRTC ve ses/video geliştirmeyi kapsıyor. Açık Apple portfolyomda SwiftUI, SwiftData ve Swift Concurrency çalışmalarım yer alıyor. Android ve React projelerim kişisel portfolyo çalışmaları.",
      "Mobil ekiplere liderlik yaptım, geliştiricilere mentorluk verdim, derleme ve yayın süreçlerini otomatikleştirdim. Cursor ve Codex ile çalışırken değişiklikleri sınırlı tutuyor, kodu inceliyor ve sonucu testlerle doğruluyorum.",
    ],
    location: 'Konum',
    arrangements: 'Çalışma düzeni',
    availability: 'Müsaitlik',
    education: 'Eğitim',
    educationValue:
      'Bilgisayar Mühendisliği Lisans · Işık Üniversitesi\nMBA · Maltepe Üniversitesi',
  },
  contact: {
    title: 'Güvenilir bir şey inşa edelim.',
    note: "Flutter ve iOS mühendisliği fırsatlarına açığım.\nİstanbul/Türkiye’den uzaktan; İstanbul’da hibrit.",
    flutterCv: "Flutter CV indir (PDF)",
    iosCv: "iOS CV indir (PDF)",
    emailMe: 'E-posta gönder',
    invitation:
      'İşe alım görüşmeleri için ürün, ekip ve rol hakkında bilgi verin.',
  },
  footer: {
    websiteSource: 'Site kaynağı',
  },
  profile: profileCopyTr,
  projects: projectsTr,
  openSourceProjects: openSourceProjectsTr,
  skillGroups: skillGroupsTr,
}

const fr: Messages = {
  meta: {
    title: "İlker Sevim — " + profileCopyFr.role,
    description: profileCopyFr.headline + " " + profileCopyFr.arrangements,
    ogLocale: 'fr_FR',
  },
  a11y: {
    skipToContent: 'Aller au contenu',
    primaryNav: 'Navigation principale',
    brandTop: '— haut de page',
    language: 'Langue',
    opensInNewTab: ' (s’ouvre dans un nouvel onglet)',
    emailName: (name) => `Envoyer un e-mail à ${name}`,
    projectLink: (project, label) => `${project} : ${label}`,
    openSourceLink: (project) => `${project} : Voir le code source`,
  },
  theme: {
    switchToLight: 'Passer au thème clair',
    switchToDark: 'Passer au thème sombre',
    darkOn: 'Thème sombre activé',
    lightOn: 'Thème clair activé',
  },
  nav: {
    work: 'Travaux',
    skills: 'Compétences',
    about: 'À propos',
    contact: 'Contact',
  },
  hero: {
    exploreWork: 'Découvrir mes travaux',
    getInTouch: 'Me contacter',
    portraitAlt: 'Portrait d’İlker Sevim',
  },
  work: {
    title: 'Travaux sélectionnés',
    lead: 'Projets publics qui montrent comment je conçois, construis et vérifie des logiciels.',
    moreTitle: 'Autres projets open source',
    viewSource: 'Voir le code source',
  },
  skills: {
    title: 'Compétences et pratiques d’ingénierie',
    lead: "Flutter en premier, une expérience professionnelle Apple et des projets personnels Android et React.",
  },
  about: {
    title: 'Une expérience ancrée dans de vraies contraintes produit',
    paragraphs: [
      "Ingénieur mobile à Istanbul, j’ai travaillé dans la banque, les paiements, les télécoms et les communications sécurisées. Mon parcours Flutter comprend 1,5 an d’expérience commerciale et, séparément, 3 ans de pratique personnelle.",
      "Mon expérience professionnelle Apple couvre Swift, UIKit, Objective-C, WebRTC et le développement audio/vidéo. Mon portfolio Apple présente SwiftUI, SwiftData et Swift Concurrency. Android et React sont des projets personnels.",
      "J’ai dirigé des équipes mobiles, accompagné des développeurs et automatisé les builds et publications. Avec Cursor et Codex, je limite le périmètre des changements, relis le code et vérifie les résultats par des tests.",
    ],
    location: 'Localisation',
    arrangements: 'Modalités de travail',
    availability: 'Disponibilité',
    education: 'Formation',
    educationValue:
      'Licence en génie informatique · Université Işık\nMBA · Université Maltepe',
  },
  contact: {
    title: 'Construisons quelque chose de fiable.',
    note: "Disponible pour des postes Flutter et iOS.\nÀ distance depuis Istanbul, Türkiye ; hybride à Istanbul.",
    flutterCv: "Télécharger le CV Flutter (PDF)",
    iosCv: "Télécharger le CV iOS (PDF)",
    emailMe: 'M’écrire',
    invitation:
      'Pour les échanges de recrutement, parlez-moi du produit, de l’équipe et du rôle.',
  },
  footer: {
    websiteSource: 'Code source du site',
  },
  profile: profileCopyFr,
  projects: projectsFr,
  openSourceProjects: openSourceProjectsFr,
  skillGroups: skillGroupsFr,
}

const ar: Messages = {
  meta: {
    title: "İlker Sevim — " + profileCopyAr.role,
    description: profileCopyAr.headline + " " + profileCopyAr.arrangements,
    ogLocale: 'ar_SA',
  },
  a11y: {
    skipToContent: 'تخطَّ إلى المحتوى',
    primaryNav: 'التنقل الرئيسي',
    brandTop: '— أعلى الصفحة',
    language: 'اللغة',
    opensInNewTab: ' (يُفتح في علامة تبويب جديدة)',
    emailName: (name) => `إرسال بريد إلى ${name}`,
    projectLink: (project, label) => `${project}: ${label}`,
    openSourceLink: (project) => `${project}: عرض المصدر`,
  },
  theme: {
    switchToLight: 'التبديل إلى السمة الفاتحة',
    switchToDark: 'التبديل إلى السمة الداكنة',
    darkOn: 'السمة الداكنة مفعّلة',
    lightOn: 'السمة الفاتحة مفعّلة',
  },
  nav: {
    work: 'الأعمال',
    skills: 'المهارات',
    about: 'نبذة',
    contact: 'تواصل',
  },
  hero: {
    exploreWork: 'استكشف أعمالي',
    getInTouch: 'تواصل معي',
    portraitAlt: 'صورة İlker Sevim',
  },
  work: {
    title: 'أعمال مختارة',
    lead: 'مشاريع عامة تُظهر كيف أصمّم البرمجيات وأبنيها وأتحقق منها.',
    moreTitle: 'مزيد من أعمال المصدر المفتوح',
    viewSource: 'عرض المصدر',
  },
  skills: {
    title: 'المهارات وممارسات الهندسة',
    lead: "Flutter أولاً، وخبرة مهنية في Apple، ومشاريع شخصية في Android وReact.",
  },
  about: {
    title: 'خبرة مبنية على قيود منتجات حقيقية',
    paragraphs: [
      "أنا مهندس تطبيقات جوال في إسطنبول، عملت في البنوك والمدفوعات والاتصالات والتواصل الآمن. تشمل خبرتي في Flutter سنة ونصف من العمل التجاري، وبشكل منفصل ثلاث سنوات من التطوير الشخصي.",
      "تشمل خبرتي المهنية في Apple كلاً من Swift وUIKit وObjective-C وWebRTC وتطوير الصوت والفيديو. يعرض ملف أعمال Apple تطبيقات SwiftUI وSwiftData وSwift Concurrency. مشاريع Android وReact شخصية.",
      "قدت فرق تطوير الجوال، وأرشدت المهندسين وأتمتت البناء والنشر. مع Cursor وCodex أحدد نطاق التغييرات، وأراجع الكود وأتحقق من النتائج بالاختبارات.",
    ],
    location: 'الموقع',
    arrangements: 'ترتيبات العمل',
    availability: 'التوافر',
    education: 'التعليم',
    educationValue:
      'بكالوريوس هندسة الحاسوب · جامعة إيشيق\nماجستير إدارة أعمال · جامعة مالتبه',
  },
  contact: {
    title: 'لنبنِ شيئًا يمكن الاعتماد عليه.',
    note: "متاح لفرص هندسة Flutter وiOS.\nعن بُعد من إسطنبول، تركيا؛ هجين في إسطنبول.",
    flutterCv: "تنزيل سيرة Flutter الذاتية (PDF)",
    iosCv: "تنزيل سيرة iOS الذاتية (PDF)",
    emailMe: 'راسلني',
    invitation:
      'لمحادثات التوظيف، أخبرني عن المنتج والفريق والدور.',
  },
  footer: {
    websiteSource: 'مصدر الموقع',
  },
  profile: profileCopyAr,
  projects: projectsAr,
  openSourceProjects: openSourceProjectsAr,
  skillGroups: skillGroupsAr,
}

const ja: Messages = {
  meta: {
    title: "İlker Sevim — " + profileCopyJa.role,
    description: profileCopyJa.headline + " " + profileCopyJa.arrangements,
    ogLocale: 'ja_JP',
  },
  a11y: {
    skipToContent: 'コンテンツへスキップ',
    primaryNav: 'メインナビゲーション',
    brandTop: '— ページ先頭',
    language: '言語',
    opensInNewTab: '（新しいタブで開きます）',
    emailName: (name) => `${name} にメール`,
    projectLink: (project, label) => `${project}: ${label}`,
    openSourceLink: (project) => `${project}: ソースを見る`,
  },
  theme: {
    switchToLight: 'ライトテーマに切り替え',
    switchToDark: 'ダークテーマに切り替え',
    darkOn: 'ダークテーマオン',
    lightOn: 'ライトテーマオン',
  },
  nav: {
    work: '制作',
    skills: 'スキル',
    about: '経歴',
    contact: '連絡',
  },
  hero: {
    exploreWork: '制作を見る',
    getInTouch: '連絡する',
    portraitAlt: 'İlker Sevim のポートレート',
  },
  work: {
    title: '選定作品',
    lead: '設計・実装・検証の進め方を示す公開プロジェクト。',
    moreTitle: 'その他のオープンソース',
    viewSource: 'ソースを見る',
  },
  skills: {
    title: 'スキルとエンジニアリング実践',
    lead: "Flutter を中心に、Apple での実務経験と Android・React の個人プロジェクト。",
  },
  about: {
    title: '実プロダクトの制約から得た経験',
    paragraphs: [
      "イスタンブール在住のモバイルエンジニアです。銀行、決済、通信、安全なコミュニケーション分野で働いてきました。Flutter の経験は商用開発 1.5 年と、それとは別の個人開発 3 年です。",
      "Apple の実務経験は Swift・UIKit・Objective-C に加え、WebRTC と音声・映像開発を含みます。公開 Apple ポートフォリオでは SwiftUI・SwiftData・Swift Concurrency を実践しています。Android と React は個人プロジェクトです。",
      "モバイルチームのリード、メンタリング、ビルド・リリースの自動化を経験しました。Cursor と Codex を使う際も変更範囲を絞り、コードをレビューし、テストで結果を検証します。",
    ],
    location: '所在地',
    arrangements: '勤務形態',
    availability: '稼働可否',
    education: '学歴',
    educationValue:
      'コンピュータ工学学士 · Işık 大学\nMBA · Maltepe 大学',
  },
  contact: {
    title: '信頼できるものを一緒に作りましょう。',
    note: "Flutter・iOS エンジニアの仕事に対応可能。\nトルコ・イスタンブールからリモート、またはイスタンブールでハイブリッド。",
    flutterCv: "Flutter 履歴書をダウンロード (PDF)",
    iosCv: "iOS 履歴書をダウンロード (PDF)",
    emailMe: 'メールする',
    invitation:
      '採用のご相談では、プロダクト・チーム・役割について教えてください。',
  },
  footer: {
    websiteSource: 'サイトのソース',
  },
  profile: profileCopyJa,
  projects: projectsJa,
  openSourceProjects: openSourceProjectsJa,
  skillGroups: skillGroupsJa,
}

const es: Messages = {
  meta: {
    title: "İlker Sevim — " + profileCopyEs.role,
    description: profileCopyEs.headline + " " + profileCopyEs.arrangements,
    ogLocale: 'es_ES',
  },
  a11y: {
    skipToContent: 'Saltar al contenido',
    primaryNav: 'Navegación principal',
    brandTop: '— inicio de página',
    language: 'Idioma',
    opensInNewTab: ' (se abre en una pestaña nueva)',
    emailName: (name) => `Enviar correo a ${name}`,
    projectLink: (project, label) => `${project}: ${label}`,
    openSourceLink: (project) => `${project}: Ver el código fuente`,
  },
  theme: {
    switchToLight: 'Cambiar al tema claro',
    switchToDark: 'Cambiar al tema oscuro',
    darkOn: 'Tema oscuro activado',
    lightOn: 'Tema claro activado',
  },
  nav: {
    work: 'Trabajos',
    skills: 'Habilidades',
    about: 'Acerca de',
    contact: 'Contacto',
  },
  hero: {
    exploreWork: 'Explorar mis trabajos',
    getInTouch: 'Contactar',
    portraitAlt: 'Retrato de İlker Sevim',
  },
  work: {
    title: 'Trabajos seleccionados',
    lead: 'Proyectos públicos que muestran cómo diseño, construyo y verifico software.',
    moreTitle: 'Más trabajo de código abierto',
    viewSource: 'Ver el código fuente',
  },
  skills: {
    title: 'Habilidades y prácticas de ingeniería',
    lead: "Flutter primero, experiencia profesional en Apple y proyectos personales de Android y React.",
  },
  about: {
    title: 'Experiencia con restricciones reales de producto',
    paragraphs: [
      "Soy ingeniero móvil en Estambul, con experiencia en banca, pagos, telecomunicaciones y comunicaciones seguras. Mi trayectoria en Flutter incluye 1,5 años de trabajo comercial y, por separado, 3 años de desarrollo personal.",
      "Mi experiencia profesional en Apple incluye Swift, UIKit, Objective-C, WebRTC y desarrollo de audio/vídeo. Mi portfolio Apple muestra SwiftUI, SwiftData y Swift Concurrency. Android y React son proyectos personales.",
      "He liderado equipos móviles, formado a ingenieros y automatizado compilaciones y publicaciones. Con Cursor y Codex, acoto los cambios, reviso el código y verifico los resultados con pruebas.",
    ],
    location: 'Ubicación',
    arrangements: 'Modalidad de trabajo',
    availability: 'Disponibilidad',
    education: 'Formación',
    educationValue:
      'Licenciatura en Ingeniería Informática · Universidad Işık\nMBA · Universidad Maltepe',
  },
  contact: {
    title: 'Construyamos algo fiable.',
    note: "Disponible para puestos de Flutter e iOS.\nRemoto desde Estambul, Türkiye; híbrido en Estambul.",
    flutterCv: "Descargar CV Flutter (PDF)",
    iosCv: "Descargar CV iOS (PDF)",
    emailMe: 'Enviarme un correo',
    invitation:
      'Para conversaciones de contratación, cuénteme sobre el producto, el equipo y el rol.',
  },
  footer: {
    websiteSource: 'Código fuente del sitio',
  },
  profile: profileCopyEs,
  projects: projectsEs,
  openSourceProjects: openSourceProjectsEs,
  skillGroups: skillGroupsEs,
}

const de: Messages = {
  meta: {
    title: "İlker Sevim — " + profileCopyDe.role,
    description: profileCopyDe.headline + " " + profileCopyDe.arrangements,
    ogLocale: 'de_DE',
  },
  a11y: {
    skipToContent: 'Zum Inhalt springen',
    primaryNav: 'Hauptnavigation',
    brandTop: '— Seitenanfang',
    language: 'Sprache',
    opensInNewTab: ' (öffnet in einem neuen Tab)',
    emailName: (name) => `E-Mail an ${name}`,
    projectLink: (project, label) => `${project}: ${label}`,
    openSourceLink: (project) => `${project}: Quellcode ansehen`,
  },
  theme: {
    switchToLight: 'Zum hellen Design wechseln',
    switchToDark: 'Zum dunklen Design wechseln',
    darkOn: 'Dunkles Design aktiv',
    lightOn: 'Helles Design aktiv',
  },
  nav: {
    work: 'Arbeiten',
    skills: 'Fähigkeiten',
    about: 'Über mich',
    contact: 'Kontakt',
  },
  hero: {
    exploreWork: 'Meine Arbeiten entdecken',
    getInTouch: 'Kontakt aufnehmen',
    portraitAlt: 'Porträt von İlker Sevim',
  },
  work: {
    title: 'Ausgewählte Arbeiten',
    lead: 'Öffentliche Projekte, die zeigen, wie ich Software entwerfe, baue und verifiziere.',
    moreTitle: 'Weitere Open-Source-Arbeiten',
    viewSource: 'Quellcode ansehen',
  },
  skills: {
    title: 'Fähigkeiten & Engineering-Praktiken',
    lead: "Flutter zuerst, professionelle Apple-Erfahrung und persönliche Android- und React-Projekte.",
  },
  about: {
    title: 'Erfahrung mit echten Produktanforderungen',
    paragraphs: [
      "Ich bin Mobile-Entwickler in Istanbul und habe in Banken, Zahlungsverkehr, Telekommunikation und sicherer Kommunikation gearbeitet. Mein Flutter-Hintergrund umfasst 1,5 Jahre kommerzielle Arbeit und davon getrennt 3 Jahre persönliche Entwicklung.",
      "Meine berufliche Apple-Erfahrung umfasst Swift, UIKit, Objective-C, WebRTC sowie Audio-/Videoentwicklung. Mein Apple-Portfolio zeigt SwiftUI, SwiftData und Swift Concurrency. Android und React sind persönliche Projekte.",
      "Ich habe Mobile-Teams geleitet, Entwickler begleitet und Builds und Releases automatisiert. Mit Cursor und Codex begrenze ich Änderungen, prüfe den Code und verifiziere Ergebnisse durch Tests.",
    ],
    location: 'Standort',
    arrangements: 'Arbeitsmodell',
    availability: 'Verfügbarkeit',
    education: 'Ausbildung',
    educationValue:
      'B.Sc. Informatikingenieurwesen · Işık-Universität\nMBA · Maltepe-Universität',
  },
  contact: {
    title: 'Lassen Sie uns etwas Zuverlässiges bauen.',
    note: "Offen für Flutter- und iOS-Stellen.\nRemote aus Istanbul, Türkiye; hybrid in Istanbul.",
    flutterCv: "Flutter-Lebenslauf laden (PDF)",
    iosCv: "iOS-Lebenslauf laden (PDF)",
    emailMe: 'E-Mail schreiben',
    invitation:
      'Für Einstellungsgespräche erzählen Sie mir bitte von Produkt, Team und Rolle.',
  },
  footer: {
    websiteSource: 'Quellcode der Website',
  },
  profile: profileCopyDe,
  projects: projectsDe,
  openSourceProjects: openSourceProjectsDe,
  skillGroups: skillGroupsDe,
}

const it: Messages = {
  meta: {
    title: "İlker Sevim — " + profileCopyIt.role,
    description: profileCopyIt.headline + " " + profileCopyIt.arrangements,
    ogLocale: 'it_IT',
  },
  a11y: {
    skipToContent: 'Vai al contenuto',
    primaryNav: 'Navigazione principale',
    brandTop: '— inizio pagina',
    language: 'Lingua',
    opensInNewTab: ' (si apre in una nuova scheda)',
    emailName: (name) => `Invia email a ${name}`,
    projectLink: (project, label) => `${project}: ${label}`,
    openSourceLink: (project) => `${project}: Vedi il codice sorgente`,
  },
  theme: {
    switchToLight: 'Passa al tema chiaro',
    switchToDark: 'Passa al tema scuro',
    darkOn: 'Tema scuro attivo',
    lightOn: 'Tema chiaro attivo',
  },
  nav: {
    work: 'Lavori',
    skills: 'Competenze',
    about: 'Chi sono',
    contact: 'Contatti',
  },
  hero: {
    exploreWork: 'Esplora i miei lavori',
    getInTouch: 'Contattami',
    portraitAlt: 'Ritratto di İlker Sevim',
  },
  work: {
    title: 'Lavori selezionati',
    lead: 'Progetti pubblici che mostrano come progetto, costruisco e verifico il software.',
    moreTitle: 'Altri lavori open source',
    viewSource: 'Vedi il codice sorgente',
  },
  skills: {
    title: 'Competenze e pratiche di ingegneria',
    lead: "Prima Flutter, esperienza professionale Apple e progetti personali Android e React.",
  },
  about: {
    title: 'Esperienza con vincoli di prodotto reali',
    paragraphs: [
      "Sono un ingegnere mobile a Istanbul, con esperienza in banche, pagamenti, telecomunicazioni e comunicazioni sicure. Il mio percorso Flutter comprende 1,5 anni di lavoro commerciale e, separatamente, 3 anni di sviluppo personale.",
      "La mia esperienza professionale Apple comprende Swift, UIKit, Objective-C, WebRTC e sviluppo audio/video. Il portfolio Apple mostra SwiftUI, SwiftData e Swift Concurrency. Android e React sono progetti personali.",
      "Ho guidato team mobili, formato ingegneri e automatizzato build e rilasci. Con Cursor e Codex limito le modifiche, revisiono il codice e verifico i risultati con test.",
    ],
    location: 'Sede',
    arrangements: 'Modalità di lavoro',
    availability: 'Disponibilità',
    education: 'Formazione',
    educationValue:
      'Laurea in Ingegneria Informatica · Università Işık\nMBA · Università Maltepe',
  },
  contact: {
    title: 'Costruiamo qualcosa di affidabile.',
    note: "Disponibile per ruoli Flutter e iOS.\nDa remoto da Istanbul, Türkiye; ibrido a Istanbul.",
    flutterCv: "Scarica CV Flutter (PDF)",
    iosCv: "Scarica CV iOS (PDF)",
    emailMe: 'Scrivimi',
    invitation:
      'Per conversazioni di assunzione, parlami del prodotto, del team e del ruolo.',
  },
  footer: {
    websiteSource: 'Codice sorgente del sito',
  },
  profile: profileCopyIt,
  projects: projectsIt,
  openSourceProjects: openSourceProjectsIt,
  skillGroups: skillGroupsIt,
}

const zh: Messages = {
  meta: {
    title: "İlker Sevim — " + profileCopyZh.role,
    description: profileCopyZh.headline + " " + profileCopyZh.arrangements,
    ogLocale: 'zh_CN',
  },
  a11y: {
    skipToContent: '跳到主要内容',
    primaryNav: '主导航',
    brandTop: '— 返回页顶',
    language: '语言',
    opensInNewTab: '（在新标签页打开）',
    emailName: (name) => `给 ${name} 发邮件`,
    projectLink: (project, label) => `${project}：${label}`,
    openSourceLink: (project) => `${project}：查看源码`,
  },
  theme: {
    switchToLight: '切换到浅色主题',
    switchToDark: '切换到深色主题',
    darkOn: '深色主题已开启',
    lightOn: '浅色主题已开启',
  },
  nav: {
    work: '作品',
    skills: '技能',
    about: '关于',
    contact: '联系',
  },
  hero: {
    exploreWork: '浏览我的作品',
    getInTouch: '联系我',
    portraitAlt: 'İlker Sevim 肖像',
  },
  work: {
    title: '精选作品',
    lead: '公开项目，展示我如何设计、构建并验证软件。',
    moreTitle: '更多开源作品',
    viewSource: '查看源码',
  },
  skills: {
    title: '技能与工程实践',
    lead: "以 Flutter 为先，具备 Apple 专业经验，并开展 Android 和 React 个人项目。",
  },
  about: {
    title: '面对真实产品约束的经验',
    paragraphs: [
      "我是居住在伊斯坦布尔的移动工程师，曾从事银行、支付、电信和安全通信产品开发。我的 Flutter 经历包括 1.5 年商业开发，另有 3 年个人开发，二者分别列出。",
      "我的 Apple 专业经验涵盖 Swift、UIKit、Objective-C，以及 WebRTC 和音视频开发。公开 Apple 作品集展示 SwiftUI、SwiftData 和 Swift Concurrency 实践。Android 与 React 属于个人作品。",
      "我曾带领移动团队、指导工程师并自动化构建和发布。使用 Cursor 与 Codex 时，我限定变更范围、审查代码，并通过测试验证结果。",
    ],
    location: '地点',
    arrangements: '工作方式',
    availability: '可用性',
    education: '教育背景',
    educationValue: '计算机工程学士 · Işık 大学\n工商管理硕士 · Maltepe 大学',
  },
  contact: {
    title: '一起构建可靠的产品。',
    note: "接受 Flutter 与 iOS 工程职位。\n从土耳其伊斯坦布尔远程办公；伊斯坦布尔混合办公。",
    flutterCv: "下载 Flutter 简历 (PDF)",
    iosCv: "下载 iOS 简历 (PDF)",
    emailMe: '给我发邮件',
    invitation: '招聘沟通时，请告诉我产品、团队与岗位信息。',
  },
  footer: {
    websiteSource: '网站源码',
  },
  profile: profileCopyZh,
  projects: projectsZh,
  openSourceProjects: openSourceProjectsZh,
  skillGroups: skillGroupsZh,
}

export const messagesByLocale: Record<Locale, Messages> = {
  en,
  tr,
  fr,
  es,
  de,
  it,
  ar,
  ja,
  zh,
}

export function getMessages(locale: Locale): Messages {
  return messagesByLocale[locale]
}

export function applyDocumentMeta(locale: Locale): void {
  const messages = getMessages(locale)
  document.title = messages.meta.title

  const description = document.querySelector('meta[name="description"]')
  if (description) {
    description.setAttribute('content', messages.meta.description)
  }

  const ogTitle = document.querySelector('meta[property="og:title"]')
  if (ogTitle) {
    ogTitle.setAttribute('content', messages.meta.title)
  }

  const ogDescription = document.querySelector('meta[property="og:description"]')
  if (ogDescription) {
    ogDescription.setAttribute('content', messages.meta.description)
  }

  const ogLocale = document.querySelector('meta[property="og:locale"]')
  if (ogLocale) {
    ogLocale.setAttribute('content', messages.meta.ogLocale)
  }

  const twitterTitle = document.querySelector('meta[name="twitter:title"]')
  if (twitterTitle) {
    twitterTitle.setAttribute('content', messages.meta.title)
  }

  const twitterDescription = document.querySelector(
    'meta[name="twitter:description"]',
  )
  if (twitterDescription) {
    twitterDescription.setAttribute('content', messages.meta.description)
  }

  for (const selector of ['meta[property="og:image:alt"]', 'meta[name="twitter:image:alt"]']) {
    document.querySelector(selector)?.setAttribute('content', messages.meta.title)
  }

  const person = document.querySelector('script[type="application/ld+json"]')
  if (person?.textContent) {
    const data = JSON.parse(person.textContent)
    data.jobTitle = messages.profile.role
    person.textContent = JSON.stringify(data)
  }
}
