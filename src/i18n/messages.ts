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
    title: 'İlker Sevim — Senior iOS & Flutter Engineer',
    description:
      'İlker Sevim — Senior iOS & Flutter Engineer in Istanbul. Explore mobile projects, engineering practices and immediate availability for remote, full-time and contract roles.',
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
    lead: 'Native mobile depth, cross-platform delivery and a practical web stack.',
  },
  about: {
    title: 'Experience with real product constraints',
    paragraphs: [
      'I am a senior mobile engineer based in Istanbul. My experience spans banking, payments, telecom and secure communications, including native iPhone and iPad apps, shared iOS frameworks and cross-platform delivery.',
      'I have led mobile development, mentored engineers and automated build and release workflows. My public projects make architecture decisions, platform integration and testing practices easy to review.',
      'I bring the same care to AI-assisted development: useful context, scoped changes, human review and verification.',
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
    note: 'Open to iOS, Flutter and mobile engineering opportunities.\nRemote from Türkiye, or hybrid and onsite in Istanbul.',
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
    title: 'İlker Sevim — Kıdemli iOS ve Flutter Mühendisi',
    description:
      'İlker Sevim — İstanbul’da Kıdemli iOS ve Flutter Mühendisi. Mobil projeleri, mühendislik pratiklerini ve uzaktan, tam zamanlı ve sözleşmeli roller için hemen başlayabilirliği keşfedin.',
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
    lead: 'Native mobil derinliği, çapraz platform teslimatı ve pratik bir web yığını.',
  },
  about: {
    title: 'Gerçek ürün kısıtlarıyla edinilmiş deneyim',
    paragraphs: [
      'İstanbul merkezli kıdemli bir mobil mühendisim. Deneyimim bankacılık, ödemeler, telekom ve güvenli iletişimi kapsar; native iPhone ve iPad uygulamaları, paylaşılan iOS çerçeveleri ve çapraz platform teslimatı dahil.',
      'Mobil geliştirmeyi yönettim, mühendisleri mentorladım ve derleme ile yayın iş akışlarını otomatikleştirdim. Açık projelerim mimari kararları, platform entegrasyonunu ve test pratiklerini kolayca incelenebilir kılar.',
      'Yapay zekâ destekli geliştirmeye de aynı özeni getiririm: yararlı bağlam, sınırlı değişiklikler, insan incelemesi ve doğrulama.',
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
    note: 'iOS, Flutter ve mobil mühendislik fırsatlarına açığım.\nTürkiye’den uzaktan, ya da İstanbul’da hibrit ve ofis içi.',
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
    title: 'İlker Sevim — Ingénieur iOS & Flutter senior',
    description:
      'İlker Sevim — Ingénieur iOS & Flutter senior à Istanbul. Projets mobiles, pratiques d’ingénierie et disponibilité immédiate pour des postes à distance, en CDI ou en contrat.',
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
    lead: 'Profondeur mobile native, livraison multiplateforme et stack web pragmatique.',
  },
  about: {
    title: 'Une expérience ancrée dans de vraies contraintes produit',
    paragraphs: [
      'Je suis un ingénieur mobile senior basé à Istanbul. Mon expérience couvre la banque, les paiements, les télécoms et les communications sécurisées, y compris des applications iPhone et iPad natives, des frameworks iOS partagés et la livraison multiplateforme.',
      'J’ai dirigé le développement mobile, mentoré des ingénieurs et automatisé les workflows de build et de publication. Mes projets publics rendent les décisions d’architecture, l’intégration plateforme et les pratiques de test faciles à examiner.',
      'J’apporte le même soin au développement assisté par l’IA : contexte utile, changements ciblés, revue humaine et vérification.',
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
    note: 'Ouvert aux opportunités iOS, Flutter et ingénierie mobile.\nTélétravail depuis la Türkiye, ou hybride et sur site à Istanbul.',
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
    title: 'İlker Sevim — مهندس iOS وFlutter أول',
    description:
      'İlker Sevim — مهندس iOS وFlutter أول في إسطنبول. استكشف مشاريع الجوال وممارسات الهندسة والتوافر الفوري للأدوار عن بُعد وبدوام كامل وبالعقد.',
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
    lead: 'عمق جوال أصلي، وتسليم عبر المنصات، ومكدس ويب عملي.',
  },
  about: {
    title: 'خبرة مبنية على قيود منتجات حقيقية',
    paragraphs: [
      'أنا مهندس جوال أول مقيم في إسطنبول. تشمل خبرتي البنوك والمدفوعات والاتصالات والاتصالات الآمنة، بما في ذلك تطبيقات iPhone وiPad الأصلية وأُطر iOS المشتركة والتسليم عبر المنصات.',
      'قدت تطوير الجوال، ووجّهت المهندسين، وأتمتُّ سير عمل البناء والنشر. تجعل مشاريعي العامة قرارات البنية المعمارية وتكامل المنصة وممارسات الاختبار سهلة المراجعة.',
      'أحمل العناية نفسها إلى التطوير بمساعدة الذكاء الاصطناعي: سياق مفيد، وتغييرات محدودة النطاق، ومراجعة بشرية، وتحقق.',
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
    note: 'منفتح على فرص iOS وFlutter وهندسة الجوال.\nعن بُعد من تركيا، أو هجين وحضوري في إسطنبول.',
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
    title: 'İlker Sevim — シニア iOS / Flutter エンジニア',
    description:
      'İlker Sevim — イスタンブール在住のシニア iOS / Flutter エンジニア。モバイルプロジェクト、エンジニアリング実践、リモート・フルタイム・契約での即応可能性をご覧ください。',
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
    lead: 'ネイティブモバイルの深さ、クロスプラットフォーム配送、実用的な Web スタック。',
  },
  about: {
    title: '実プロダクトの制約から得た経験',
    paragraphs: [
      'イスタンブールを拠点とするシニアモバイルエンジニアです。銀行・決済・通信・セキュア通信にわたり、ネイティブ iPhone / iPad アプリ、共有 iOS フレームワーク、クロスプラットフォーム配送の経験があります。',
      'モバイル開発のリード、エンジニアのメンタリング、ビルド／リリース自動化を行ってきました。公開プロジェクトでは、アーキテクチャ判断、プラットフォーム連携、テスト実践をレビューしやすくしています。',
      'AI 支援開発にも同じ慎重さで向き合います。有用な文脈、スコープを絞った変更、人によるレビューと検証です。',
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
    note: 'iOS・Flutter・モバイルエンジニアリングの機会に関心しています。\nトルコからのリモート、またはイスタンブールでのハイブリッド／出社。',
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
    title: 'İlker Sevim — Ingeniero sénior de iOS y Flutter',
    description:
      'İlker Sevim — Ingeniero sénior de iOS y Flutter en Estambul. Explore proyectos móviles, prácticas de ingeniería y disponibilidad inmediata para roles remotos, a jornada completa y por contrato.',
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
    lead: 'Profundidad móvil nativa, entrega multiplataforma y un stack web práctico.',
  },
  about: {
    title: 'Experiencia con restricciones reales de producto',
    paragraphs: [
      'Soy un ingeniero móvil sénior con base en Estambul. Mi experiencia abarca banca, pagos, telecomunicaciones y comunicaciones seguras, incluidas aplicaciones nativas de iPhone e iPad, frameworks iOS compartidos y entrega multiplataforma.',
      'He liderado el desarrollo móvil, mentorizado a ingenieros y automatizado flujos de build y publicación. Mis proyectos públicos facilitan la revisión de decisiones de arquitectura, integración de plataforma y prácticas de pruebas.',
      'Aporto el mismo cuidado al desarrollo asistido por IA: contexto útil, cambios acotados, revisión humana y verificación.',
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
    note: 'Abierto a oportunidades de iOS, Flutter e ingeniería móvil.\nRemoto desde Türkiye, o híbrido y presencial en Estambul.',
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
    title: 'İlker Sevim — Senior iOS- & Flutter-Ingenieur',
    description:
      'İlker Sevim — Senior iOS- & Flutter-Ingenieur in Istanbul. Entdecken Sie Mobile-Projekte, Engineering-Praktiken und sofortige Verfügbarkeit für Remote-, Vollzeit- und Vertragsrollen.',
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
    lead: 'Native Mobile-Tiefe, plattformübergreifende Delivery und ein praxisnaher Web-Stack.',
  },
  about: {
    title: 'Erfahrung mit echten Produktanforderungen',
    paragraphs: [
      'Ich bin ein Senior-Mobile-Ingenieur mit Sitz in Istanbul. Meine Erfahrung umfasst Banking, Payments, Telekommunikation und sichere Kommunikation — inklusive nativer iPhone- und iPad-Apps, gemeinsamer iOS-Frameworks und plattformübergreifender Delivery.',
      'Ich habe Mobile-Entwicklung geleitet, Ingenieure mentored und Build- sowie Release-Workflows automatisiert. Meine öffentlichen Projekte machen Architekturentscheidungen, Plattformintegration und Testpraktiken leicht überprüfbar.',
      'Denselben Anspruch bringe ich in die KI-gestützte Entwicklung ein: nützlicher Kontext, begrenzte Änderungen, menschliche Review und Verifikation.',
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
    note: 'Offen für Chancen in iOS, Flutter und Mobile Engineering.\nRemote aus der Türkiye, oder hybrid und vor Ort in Istanbul.',
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
    title: 'İlker Sevim — Ingegnere senior iOS e Flutter',
    description:
      'İlker Sevim — Ingegnere senior iOS e Flutter a Istanbul. Esplora progetti mobili, pratiche di ingegneria e disponibilità immediata per ruoli remoti, a tempo pieno e a contratto.',
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
    lead: 'Profondità mobile nativa, delivery multipiattaforma e uno stack web pragmatico.',
  },
  about: {
    title: 'Esperienza con vincoli di prodotto reali',
    paragraphs: [
      'Sono un ingegnere mobile senior con base a Istanbul. La mia esperienza spazia tra banking, pagamenti, telecomunicazioni e comunicazioni sicure, incluse app native per iPhone e iPad, framework iOS condivisi e delivery multipiattaforma.',
      'Ho guidato lo sviluppo mobile, fatto da mentor ad altri ingegneri e automatizzato i flussi di build e release. I miei progetti pubblici rendono facili da esaminare decisioni di architettura, integrazione di piattaforma e pratiche di test.',
      'Porto la stessa cura nello sviluppo assistito da IA: contesto utile, modifiche circoscritte, review umana e verifica.',
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
    note: 'Aperto a opportunità in iOS, Flutter e ingegneria mobile.\nRemoto dalla Türkiye, oppure ibrido e in sede a Istanbul.',
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
    title: 'İlker Sevim — 高级 iOS 与 Flutter 工程师',
    description:
      'İlker Sevim — 驻伊斯坦布尔的高级 iOS 与 Flutter 工程师。探索移动项目、工程实践，以及远程、全职与合同制岗位的即时可用性。',
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
    lead: '原生移动深度、跨平台交付，以及务实的 Web 技术栈。',
  },
  about: {
    title: '面对真实产品约束的经验',
    paragraphs: [
      '我是一名驻伊斯坦布尔的高级移动工程师。经验覆盖银行、支付、电信与安全通信，包括原生 iPhone 与 iPad 应用、共享 iOS 框架以及跨平台交付。',
      '我曾主导移动开发、指导工程师，并自动化构建与发布流程。我的公开项目便于评审架构决策、平台集成与测试实践。',
      '我将同样的严谨带到 AI 辅助开发中：有用的上下文、范围明确的变更、人工审查与验证。',
    ],
    location: '地点',
    arrangements: '工作方式',
    availability: '可用性',
    education: '教育背景',
    educationValue: '计算机工程学士 · Işık 大学\n工商管理硕士 · Maltepe 大学',
  },
  contact: {
    title: '一起构建可靠的产品。',
    note: '欢迎 iOS、Flutter 与移动工程相关机会。\n可从土耳其远程，或在伊斯坦布尔混合/现场办公。',
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
}
