export type ProjectLink = { label: string; href: string }
export type Project = {
  id: string
  title: string
  blurb: string
  tags: string[]
  evidence: string[]
  links: ProjectLink[]
}

export type OpenSourceProject = {
  id: string
  title: string
  blurb: string
  href: string
}

export const projectsEn: Project[] = [
  {
    id: 'flutter-bloc-app',
    title: 'Flutter engineering portfolio',
    blurb:
      'A cross-platform reference app with BLoC / Cubit, offline synchronization and native Swift / Kotlin integration.',
    tags: ['Flutter', 'Dart', 'Clean Architecture'],
    evidence: [
      'Layered features and predictable state',
      'Offline data and platform integration',
      'Unit, widget, golden and integration tests',
    ],
    links: [
      {
        label: 'Live demo',
        href: 'https://redjadet.github.io/flutter_bloc_app/',
      },
      {
        label: '3-minute review',
        href: 'https://github.com/redjadet/flutter_bloc_app#3-minute-review',
      },
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.ilkersevim.blocflutter',
      },
      {
        label: 'Source & architecture',
        href: 'https://github.com/redjadet/flutter_bloc_app',
      },
    ],
  },
  {
    id: 'super-demo-ios',
    title: 'Native iOS & iPadOS portfolio',
    blurb:
      'A SwiftUI / SwiftData sample with an offline feed, concurrency and UIKit interoperability.',
    tags: ['SwiftUI', 'SwiftData', 'iOS / iPadOS'],
    evidence: [
      'Feature layers and dependency injection',
      'Offline cache and URLSession networking',
      'UI tests and an optional Flutter bridge',
    ],
    links: [
      {
        label: '3-minute path',
        href: 'https://github.com/redjadet/super_demo_ios#3-minute-path',
      },
      {
        label: 'Source & reviewer guide',
        href: 'https://github.com/redjadet/super_demo_ios',
      },
    ],
  },
  {
    id: 'react-website',
    title: 'React & TypeScript personal website',
    blurb:
      'This responsive website: typed content, accessible navigation and a small, reusable component system.',
    tags: ['React', 'TypeScript', 'Vite', 'CSS Modules'],
    evidence: [
      'Accessible and responsive design',
      'Typed content and reusable components',
      'Optimized build and clean project structure',
    ],
    links: [
      {
        label: 'View source',
        href: 'https://github.com/redjadet/react-web-portfolio',
      },
    ],
  },
]

export const projectsTr: Project[] = [
  {
    id: 'flutter-bloc-app',
    title: 'Flutter mühendislik portfolyosu',
    blurb:
      'BLoC / Cubit, çevrimdışı senkronizasyon ve native Swift / Kotlin entegrasyonu içeren çapraz platform referans uygulaması.',
    tags: ['Flutter', 'Dart', 'Clean Architecture'],
    evidence: [
      'Katmanlı özellikler ve öngörülebilir durum',
      'Çevrimdışı veri ve platform entegrasyonu',
      'Birim, widget, golden ve entegrasyon testleri',
    ],
    links: [
      {
        label: 'Canlı demo',
        href: 'https://redjadet.github.io/flutter_bloc_app/',
      },
      {
        label: '3 dakikalık inceleme',
        href: 'https://github.com/redjadet/flutter_bloc_app#3-minute-review',
      },
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.ilkersevim.blocflutter',
      },
      {
        label: 'Kaynak ve mimari',
        href: 'https://github.com/redjadet/flutter_bloc_app',
      },
    ],
  },
  {
    id: 'super-demo-ios',
    title: 'Native iOS ve iPadOS portfolyosu',
    blurb:
      'Çevrimdışı akış, eşzamanlılık ve UIKit birlikte çalışabilirliği olan SwiftUI / SwiftData örneği.',
    tags: ['SwiftUI', 'SwiftData', 'iOS / iPadOS'],
    evidence: [
      'Özellik katmanları ve bağımlılık enjeksiyonu',
      'Çevrimdışı önbellek ve URLSession ağı',
      'UI testleri ve isteğe bağlı Flutter köprüsü',
    ],
    links: [
      {
        label: '3 dakikalık yol',
        href: 'https://github.com/redjadet/super_demo_ios#3-minute-path',
      },
      {
        label: 'Kaynak ve inceleme rehberi',
        href: 'https://github.com/redjadet/super_demo_ios',
      },
    ],
  },
  {
    id: 'react-website',
    title: 'React ve TypeScript kişisel web sitesi',
    blurb:
      'Bu duyarlı site: tipli içerik, erişilebilir gezinme ve küçük, yeniden kullanılabilir bir bileşen sistemi.',
    tags: ['React', 'TypeScript', 'Vite', 'CSS Modules'],
    evidence: [
      'Erişilebilir ve duyarlı tasarım',
      'Tipli içerik ve yeniden kullanılabilir bileşenler',
      'Optimize derleme ve temiz proje yapısı',
    ],
    links: [
      {
        label: 'Kaynağı görüntüle',
        href: 'https://github.com/redjadet/react-web-portfolio',
      },
    ],
  },
]

export const openSourceProjectsEn = [
  {
    id: 'type-safe-bloc',
    title: 'Type-safe BLoC helpers',
    blurb:
      'Published Flutter package with typed selectors, builders and listeners for BLoC / Cubit.',
    href: 'https://github.com/redjadet/ilkersevim_type_safe_bloc',
  },
  {
    id: 'platform-comparison',
    title: 'Cross-platform comparison study',
    blurb:
      'One sample product in SwiftUI, Jetpack Compose and Flutter, with implementation tradeoffs.',
    href: 'https://github.com/redjadet/iOS_Android_Flutter_Comparison',
  },
  {
    id: 'safe-parse',
    title: 'Safe parse utilities',
    blurb:
      'Dart helpers for predictable parsing of dynamic and JSON-like values.',
    href: 'https://github.com/redjadet/ilkersevim_safe_parse',
  },
  {
    id: 'async-utils',
    title: 'Async coalescing utilities',
    blurb:
      'Dependency-free Dart utilities for coalescing work and rejecting stale results.',
    href: 'https://github.com/redjadet/ilkersevim_async_utils',
  },
] as const satisfies readonly OpenSourceProject[]

export const openSourceProjectsTr = [
  {
    id: 'type-safe-bloc',
    title: 'Tip güvenli BLoC yardımcıları',
    blurb:
      'BLoC / Cubit için tipli seçiciler, oluşturucular ve dinleyiciler içeren yayınlanmış Flutter paketi.',
    href: 'https://github.com/redjadet/ilkersevim_type_safe_bloc',
  },
  {
    id: 'platform-comparison',
    title: 'Çapraz platform karşılaştırma çalışması',
    blurb:
      'SwiftUI, Jetpack Compose ve Flutter’da aynı örnek ürün; uygulama ödünleşimleriyle birlikte.',
    href: 'https://github.com/redjadet/iOS_Android_Flutter_Comparison',
  },
  {
    id: 'safe-parse',
    title: 'Güvenli ayrıştırma yardımcıları',
    blurb:
      'Dinamik ve JSON benzeri değerlerin öngörülebilir ayrıştırması için Dart yardımcıları.',
    href: 'https://github.com/redjadet/ilkersevim_safe_parse',
  },
  {
    id: 'async-utils',
    title: 'Asenkron birleştirme yardımcıları',
    blurb:
      'İşleri birleştirmek ve bayat sonuçları reddetmek için bağımlılıksız Dart yardımcıları.',
    href: 'https://github.com/redjadet/ilkersevim_async_utils',
  },
] as const satisfies readonly OpenSourceProject[]

export const projectsFr: Project[] = [
  {
    id: 'flutter-bloc-app',
    title: 'Portfolio d’ingénierie Flutter',
    blurb:
      'Application de référence multiplateforme avec BLoC / Cubit, synchronisation hors ligne et intégration native Swift / Kotlin.',
    tags: ['Flutter', 'Dart', 'Clean Architecture'],
    evidence: [
      'Fonctionnalités en couches et état prévisible',
      'Données hors ligne et intégration plateforme',
      'Tests unitaires, widget, golden et d’intégration',
    ],
    links: [
      {
        label: 'Démo en ligne',
        href: 'https://redjadet.github.io/flutter_bloc_app/',
      },
      {
        label: 'Revue en 3 minutes',
        href: 'https://github.com/redjadet/flutter_bloc_app#3-minute-review',
      },
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.ilkersevim.blocflutter',
      },
      {
        label: 'Code source & architecture',
        href: 'https://github.com/redjadet/flutter_bloc_app',
      },
    ],
  },
  {
    id: 'super-demo-ios',
    title: 'Portfolio iOS & iPadOS natif',
    blurb:
      'Exemple SwiftUI / SwiftData avec flux hors ligne, concurrence et interopérabilité UIKit.',
    tags: ['SwiftUI', 'SwiftData', 'iOS / iPadOS'],
    evidence: [
      'Couches fonctionnelles et injection de dépendances',
      'Cache hors ligne et réseau URLSession',
      'Tests UI et pont Flutter optionnel',
    ],
    links: [
      {
        label: 'Parcours en 3 minutes',
        href: 'https://github.com/redjadet/super_demo_ios#3-minute-path',
      },
      {
        label: 'Code source & guide de revue',
        href: 'https://github.com/redjadet/super_demo_ios',
      },
    ],
  },
  {
    id: 'react-website',
    title: 'Site personnel React & TypeScript',
    blurb:
      'Ce site responsive : contenu typé, navigation accessible et petit système de composants réutilisables.',
    tags: ['React', 'TypeScript', 'Vite', 'CSS Modules'],
    evidence: [
      'Conception accessible et responsive',
      'Contenu typé et composants réutilisables',
      'Build optimisé et structure de projet claire',
    ],
    links: [
      {
        label: 'Voir le code source',
        href: 'https://github.com/redjadet/react-web-portfolio',
      },
    ],
  },
]

export const projectsAr: Project[] = [
  {
    id: 'flutter-bloc-app',
    title: 'محفظة هندسة Flutter',
    blurb:
      'تطبيق مرجعي متعدد المنصات مع BLoC / Cubit ومزامنة دون اتصال وتكامل أصلي لـ Swift / Kotlin.',
    tags: ['Flutter', 'Dart', 'Clean Architecture'],
    evidence: [
      'ميزات طبقية وحالة متوقعة',
      'بيانات دون اتصال وتكامل المنصة',
      'اختبارات وحدة وودجت وgolden وتكامل',
    ],
    links: [
      {
        label: 'عرض مباشر',
        href: 'https://redjadet.github.io/flutter_bloc_app/',
      },
      {
        label: 'مراجعة في 3 دقائق',
        href: 'https://github.com/redjadet/flutter_bloc_app#3-minute-review',
      },
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.ilkersevim.blocflutter',
      },
      {
        label: 'المصدر والبنية المعمارية',
        href: 'https://github.com/redjadet/flutter_bloc_app',
      },
    ],
  },
  {
    id: 'super-demo-ios',
    title: 'محفظة iOS وiPadOS الأصلية',
    blurb:
      'نموذج SwiftUI / SwiftData مع موجز دون اتصال وتزامن وتشغيل متبادل مع UIKit.',
    tags: ['SwiftUI', 'SwiftData', 'iOS / iPadOS'],
    evidence: [
      'طبقات الميزات وحقن التبعيات',
      'ذاكرة مؤقتة دون اتصال وشبكات URLSession',
      'اختبارات واجهة وجسر Flutter اختياري',
    ],
    links: [
      {
        label: 'مسار 3 دقائق',
        href: 'https://github.com/redjadet/super_demo_ios#3-minute-path',
      },
      {
        label: 'المصدر ودليل المراجع',
        href: 'https://github.com/redjadet/super_demo_ios',
      },
    ],
  },
  {
    id: 'react-website',
    title: 'موقع شخصي بـ React وTypeScript',
    blurb:
      'هذا الموقع المتجاوب: محتوى مكتوب بأنواع، وتنقل سهل الوصول، ونظام مكوّنات صغير قابل لإعادة الاستخدام.',
    tags: ['React', 'TypeScript', 'Vite', 'CSS Modules'],
    evidence: [
      'تصميم سهل الوصول ومتجاوب',
      'محتوى مكتوب بأنواع ومكوّنات قابلة لإعادة الاستخدام',
      'بناء محسّن وهيكل مشروع نظيف',
    ],
    links: [
      {
        label: 'عرض المصدر',
        href: 'https://github.com/redjadet/react-web-portfolio',
      },
    ],
  },
]

export const projectsJa: Project[] = [
  {
    id: 'flutter-bloc-app',
    title: 'Flutter エンジニアリング・ポートフォリオ',
    blurb:
      'BLoC / Cubit、オフライン同期、ネイティブ Swift / Kotlin 連携を備えたクロスプラットフォームの参考アプリ。',
    tags: ['Flutter', 'Dart', 'Clean Architecture'],
    evidence: [
      'レイヤードな機能と予測可能な状態',
      'オフラインデータとプラットフォーム連携',
      'ユニット・ウィジェット・ゴールデン・統合テスト',
    ],
    links: [
      {
        label: 'ライブデモ',
        href: 'https://redjadet.github.io/flutter_bloc_app/',
      },
      {
        label: '3分レビュー',
        href: 'https://github.com/redjadet/flutter_bloc_app#3-minute-review',
      },
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.ilkersevim.blocflutter',
      },
      {
        label: 'ソースとアーキテクチャ',
        href: 'https://github.com/redjadet/flutter_bloc_app',
      },
    ],
  },
  {
    id: 'super-demo-ios',
    title: 'ネイティブ iOS / iPadOS ポートフォリオ',
    blurb:
      'オフラインフィード、並行処理、UIKit 相互運用を備えた SwiftUI / SwiftData サンプル。',
    tags: ['SwiftUI', 'SwiftData', 'iOS / iPadOS'],
    evidence: [
      '機能レイヤーと依存性注入',
      'オフラインキャッシュと URLSession 通信',
      'UI テストと任意の Flutter ブリッジ',
    ],
    links: [
      {
        label: '3分パス',
        href: 'https://github.com/redjadet/super_demo_ios#3-minute-path',
      },
      {
        label: 'ソースとレビューガイド',
        href: 'https://github.com/redjadet/super_demo_ios',
      },
    ],
  },
  {
    id: 'react-website',
    title: 'React / TypeScript 個人サイト',
    blurb:
      'このレスポンシブサイト：型付きコンテンツ、アクセシブルなナビゲーション、小さく再利用可能なコンポーネント体系。',
    tags: ['React', 'TypeScript', 'Vite', 'CSS Modules'],
    evidence: [
      'アクセシブルでレスポンシブな設計',
      '型付きコンテンツと再利用可能なコンポーネント',
      '最適化されたビルドと整理された構成',
    ],
    links: [
      {
        label: 'ソースを見る',
        href: 'https://github.com/redjadet/react-web-portfolio',
      },
    ],
  },
]

export const openSourceProjectsFr = [
  {
    id: 'type-safe-bloc',
    title: 'Helpers BLoC typés',
    blurb:
      'Package Flutter publié avec sélecteurs, builders et listeners typés pour BLoC / Cubit.',
    href: 'https://github.com/redjadet/ilkersevim_type_safe_bloc',
  },
  {
    id: 'platform-comparison',
    title: 'Étude comparative multiplateforme',
    blurb:
      'Un même produit exemple en SwiftUI, Jetpack Compose et Flutter, avec les compromis d’implémentation.',
    href: 'https://github.com/redjadet/iOS_Android_Flutter_Comparison',
  },
  {
    id: 'safe-parse',
    title: 'Utilitaires d’analyse sûre',
    blurb:
      'Helpers Dart pour l’analyse prévisible de valeurs dynamiques et de type JSON.',
    href: 'https://github.com/redjadet/ilkersevim_safe_parse',
  },
  {
    id: 'async-utils',
    title: 'Utilitaires de coalescence asynchrone',
    blurb:
      'Utilitaires Dart sans dépendance pour coalescer le travail et rejeter les résultats obsolètes.',
    href: 'https://github.com/redjadet/ilkersevim_async_utils',
  },
] as const satisfies readonly OpenSourceProject[]

export const openSourceProjectsAr = [
  {
    id: 'type-safe-bloc',
    title: 'مساعدات BLoC آمنة النوع',
    blurb:
      'حزمة Flutter منشورة مع محددات وبنائين ومستمعين مكتوبين بأنواع لـ BLoC / Cubit.',
    href: 'https://github.com/redjadet/ilkersevim_type_safe_bloc',
  },
  {
    id: 'platform-comparison',
    title: 'دراسة مقارنة عبر المنصات',
    blurb:
      'منتج نموذجي واحد في SwiftUI وJetpack Compose وFlutter، مع مقايضات التنفيذ.',
    href: 'https://github.com/redjadet/iOS_Android_Flutter_Comparison',
  },
  {
    id: 'safe-parse',
    title: 'أدوات تحليل آمنة',
    blurb:
      'مساعدات Dart لتحليل متوقع للقيم الديناميكية والشبيهة بـ JSON.',
    href: 'https://github.com/redjadet/ilkersevim_safe_parse',
  },
  {
    id: 'async-utils',
    title: 'أدوات دمج غير متزامن',
    blurb:
      'أدوات Dart بلا تبعيات لدمج العمل ورفض النتائج القديمة.',
    href: 'https://github.com/redjadet/ilkersevim_async_utils',
  },
] as const satisfies readonly OpenSourceProject[]

export const openSourceProjectsJa = [
  {
    id: 'type-safe-bloc',
    title: '型安全な BLoC ヘルパー',
    blurb:
      'BLoC / Cubit 向けの型付きセレクタ・ビルダー・リスナーを備えた公開 Flutter パッケージ。',
    href: 'https://github.com/redjadet/ilkersevim_type_safe_bloc',
  },
  {
    id: 'platform-comparison',
    title: 'クロスプラットフォーム比較研究',
    blurb:
      'SwiftUI・Jetpack Compose・Flutter で同一サンプル製品を実装し、トレードオフを整理。',
    href: 'https://github.com/redjadet/iOS_Android_Flutter_Comparison',
  },
  {
    id: 'safe-parse',
    title: '安全なパースユーティリティ',
    blurb:
      '動的・JSON 風の値を予測可能にパースする Dart ヘルパー。',
    href: 'https://github.com/redjadet/ilkersevim_safe_parse',
  },
  {
    id: 'async-utils',
    title: '非同期合体ユーティリティ',
    blurb:
      '作業の合体と古い結果の棄却のための依存なし Dart ユーティリティ。',
    href: 'https://github.com/redjadet/ilkersevim_async_utils',
  },
] as const satisfies readonly OpenSourceProject[]

export const projectsEs: Project[] = [
  {
    id: 'flutter-bloc-app',
    title: 'Portafolio de ingeniería Flutter',
    blurb:
      'Aplicación de referencia multiplataforma con BLoC / Cubit, sincronización sin conexión e integración nativa Swift / Kotlin.',
    tags: ['Flutter', 'Dart', 'Clean Architecture'],
    evidence: [
      'Funciones en capas y estado predecible',
      'Datos sin conexión e integración de plataforma',
      'Pruebas unitarias, de widget, golden y de integración',
    ],
    links: [
      {
        label: 'Demo en vivo',
        href: 'https://redjadet.github.io/flutter_bloc_app/',
      },
      {
        label: 'Revisión de 3 minutos',
        href: 'https://github.com/redjadet/flutter_bloc_app#3-minute-review',
      },
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.ilkersevim.blocflutter',
      },
      {
        label: 'Código y arquitectura',
        href: 'https://github.com/redjadet/flutter_bloc_app',
      },
    ],
  },
  {
    id: 'super-demo-ios',
    title: 'Portafolio nativo de iOS e iPadOS',
    blurb:
      'Ejemplo SwiftUI / SwiftData con feed sin conexión, concurrencia e interoperabilidad con UIKit.',
    tags: ['SwiftUI', 'SwiftData', 'iOS / iPadOS'],
    evidence: [
      'Capas de funciones e inyección de dependencias',
      'Caché sin conexión y red con URLSession',
      'Pruebas de UI y puente Flutter opcional',
    ],
    links: [
      {
        label: 'Ruta de 3 minutos',
        href: 'https://github.com/redjadet/super_demo_ios#3-minute-path',
      },
      {
        label: 'Código y guía de revisión',
        href: 'https://github.com/redjadet/super_demo_ios',
      },
    ],
  },
  {
    id: 'react-website',
    title: 'Sitio personal con React y TypeScript',
    blurb:
      'Este sitio responsive: contenido tipado, navegación accesible y un pequeño sistema de componentes reutilizables.',
    tags: ['React', 'TypeScript', 'Vite', 'CSS Modules'],
    evidence: [
      'Diseño accesible y responsive',
      'Contenido tipado y componentes reutilizables',
      'Build optimizado y estructura de proyecto clara',
    ],
    links: [
      {
        label: 'Ver el código fuente',
        href: 'https://github.com/redjadet/react-web-portfolio',
      },
    ],
  },
]

export const openSourceProjectsEs = [
  {
    id: 'type-safe-bloc',
    title: 'Helpers BLoC tipados',
    blurb:
      'Paquete Flutter publicado con selectores, builders y listeners tipados para BLoC / Cubit.',
    href: 'https://github.com/redjadet/ilkersevim_type_safe_bloc',
  },
  {
    id: 'platform-comparison',
    title: 'Estudio comparativo multiplataforma',
    blurb:
      'Un mismo producto de ejemplo en SwiftUI, Jetpack Compose y Flutter, con los compromisos de implementación.',
    href: 'https://github.com/redjadet/iOS_Android_Flutter_Comparison',
  },
  {
    id: 'safe-parse',
    title: 'Utilidades de análisis seguro',
    blurb:
      'Helpers Dart para el análisis predecible de valores dinámicos y de tipo JSON.',
    href: 'https://github.com/redjadet/ilkersevim_safe_parse',
  },
  {
    id: 'async-utils',
    title: 'Utilidades de coalescencia asíncrona',
    blurb:
      'Utilidades Dart sin dependencias para coalescer trabajo y rechazar resultados obsoletos.',
    href: 'https://github.com/redjadet/ilkersevim_async_utils',
  },
] as const satisfies readonly OpenSourceProject[]

export const projectsDe: Project[] = [
  {
    id: 'flutter-bloc-app',
    title: 'Flutter-Engineering-Portfolio',
    blurb:
      'Eine plattformübergreifende Referenz-App mit BLoC / Cubit, Offline-Synchronisation und nativer Swift- / Kotlin-Integration.',
    tags: ['Flutter', 'Dart', 'Clean Architecture'],
    evidence: [
      'Geschichtete Features und vorhersagbarer State',
      'Offline-Daten und Plattformintegration',
      'Unit-, Widget-, Golden- und Integrationstests',
    ],
    links: [
      {
        label: 'Live-Demo',
        href: 'https://redjadet.github.io/flutter_bloc_app/',
      },
      {
        label: '3-Minuten-Review',
        href: 'https://github.com/redjadet/flutter_bloc_app#3-minute-review',
      },
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.ilkersevim.blocflutter',
      },
      {
        label: 'Quellcode & Architektur',
        href: 'https://github.com/redjadet/flutter_bloc_app',
      },
    ],
  },
  {
    id: 'super-demo-ios',
    title: 'Natives iOS- & iPadOS-Portfolio',
    blurb:
      'Ein SwiftUI- / SwiftData-Beispiel mit Offline-Feed, Concurrency und UIKit-Interoperabilität.',
    tags: ['SwiftUI', 'SwiftData', 'iOS / iPadOS'],
    evidence: [
      'Feature-Schichten und Dependency Injection',
      'Offline-Cache und URLSession-Networking',
      'UI-Tests und optionale Flutter-Bridge',
    ],
    links: [
      {
        label: '3-Minuten-Pfad',
        href: 'https://github.com/redjadet/super_demo_ios#3-minute-path',
      },
      {
        label: 'Quellcode & Reviewer-Guide',
        href: 'https://github.com/redjadet/super_demo_ios',
      },
    ],
  },
  {
    id: 'react-website',
    title: 'Persönliche Website mit React & TypeScript',
    blurb:
      'Diese responsive Website: typisierte Inhalte, barrierefreie Navigation und ein kleines, wiederverwendbares Komponentensystem.',
    tags: ['React', 'TypeScript', 'Vite', 'CSS Modules'],
    evidence: [
      'Barrierefreies und responsives Design',
      'Typisierte Inhalte und wiederverwendbare Komponenten',
      'Optimierter Build und klare Projektstruktur',
    ],
    links: [
      {
        label: 'Quellcode ansehen',
        href: 'https://github.com/redjadet/react-web-portfolio',
      },
    ],
  },
]

export const openSourceProjectsDe = [
  {
    id: 'type-safe-bloc',
    title: 'Typsichere BLoC-Helfer',
    blurb:
      'Veröffentlichtes Flutter-Paket mit typisierten Selectors, Builders und Listeners für BLoC / Cubit.',
    href: 'https://github.com/redjadet/ilkersevim_type_safe_bloc',
  },
  {
    id: 'platform-comparison',
    title: 'Plattformübergreifende Vergleichsstudie',
    blurb:
      'Ein Beispielprodukt in SwiftUI, Jetpack Compose und Flutter — inklusive Implementierungs-Tradeoffs.',
    href: 'https://github.com/redjadet/iOS_Android_Flutter_Comparison',
  },
  {
    id: 'safe-parse',
    title: 'Sichere Parse-Utilities',
    blurb:
      'Dart-Helfer für vorhersagbares Parsen dynamischer und JSON-ähnlicher Werte.',
    href: 'https://github.com/redjadet/ilkersevim_safe_parse',
  },
  {
    id: 'async-utils',
    title: 'Async-Coalescing-Utilities',
    blurb:
      'Abhängigkeitsfreie Dart-Utilities zum Zusammenführen von Arbeit und Ablehnen veralteter Ergebnisse.',
    href: 'https://github.com/redjadet/ilkersevim_async_utils',
  },
] as const satisfies readonly OpenSourceProject[]

export const projectsIt: Project[] = [
  {
    id: 'flutter-bloc-app',
    title: 'Portfolio di ingegneria Flutter',
    blurb:
      'App di riferimento multipiattaforma con BLoC / Cubit, sincronizzazione offline e integrazione nativa Swift / Kotlin.',
    tags: ['Flutter', 'Dart', 'Clean Architecture'],
    evidence: [
      'Feature a livelli e stato prevedibile',
      'Dati offline e integrazione di piattaforma',
      'Test unitari, widget, golden e di integrazione',
    ],
    links: [
      {
        label: 'Demo live',
        href: 'https://redjadet.github.io/flutter_bloc_app/',
      },
      {
        label: 'Review in 3 minuti',
        href: 'https://github.com/redjadet/flutter_bloc_app#3-minute-review',
      },
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.ilkersevim.blocflutter',
      },
      {
        label: 'Codice e architettura',
        href: 'https://github.com/redjadet/flutter_bloc_app',
      },
    ],
  },
  {
    id: 'super-demo-ios',
    title: 'Portfolio nativo iOS e iPadOS',
    blurb:
      'Esempio SwiftUI / SwiftData con feed offline, concurrency e interoperabilità UIKit.',
    tags: ['SwiftUI', 'SwiftData', 'iOS / iPadOS'],
    evidence: [
      'Livelli di feature e dependency injection',
      'Cache offline e networking con URLSession',
      'Test UI e bridge Flutter opzionale',
    ],
    links: [
      {
        label: 'Percorso in 3 minuti',
        href: 'https://github.com/redjadet/super_demo_ios#3-minute-path',
      },
      {
        label: 'Codice e guida per reviewer',
        href: 'https://github.com/redjadet/super_demo_ios',
      },
    ],
  },
  {
    id: 'react-website',
    title: 'Sito personale con React e TypeScript',
    blurb:
      'Questo sito responsive: contenuti tipizzati, navigazione accessibile e un piccolo sistema di componenti riusabili.',
    tags: ['React', 'TypeScript', 'Vite', 'CSS Modules'],
    evidence: [
      'Design accessibile e responsive',
      'Contenuti tipizzati e componenti riusabili',
      'Build ottimizzata e struttura di progetto chiara',
    ],
    links: [
      {
        label: 'Vedi il codice sorgente',
        href: 'https://github.com/redjadet/react-web-portfolio',
      },
    ],
  },
]

export const openSourceProjectsIt = [
  {
    id: 'type-safe-bloc',
    title: 'Helper BLoC type-safe',
    blurb:
      'Pacchetto Flutter pubblicato con selector, builder e listener tipizzati per BLoC / Cubit.',
    href: 'https://github.com/redjadet/ilkersevim_type_safe_bloc',
  },
  {
    id: 'platform-comparison',
    title: 'Studio comparativo multipiattaforma',
    blurb:
      'Lo stesso prodotto di esempio in SwiftUI, Jetpack Compose e Flutter, con i trade-off di implementazione.',
    href: 'https://github.com/redjadet/iOS_Android_Flutter_Comparison',
  },
  {
    id: 'safe-parse',
    title: 'Utility di parsing sicuro',
    blurb:
      'Helper Dart per il parsing prevedibile di valori dinamici e simili a JSON.',
    href: 'https://github.com/redjadet/ilkersevim_safe_parse',
  },
  {
    id: 'async-utils',
    title: 'Utility di coalescenza asincrona',
    blurb:
      'Utility Dart senza dipendenze per coalescere il lavoro e rifiutare risultati obsoleti.',
    href: 'https://github.com/redjadet/ilkersevim_async_utils',
  },
] as const satisfies readonly OpenSourceProject[]

export const projectsZh: Project[] = [
  {
    id: 'flutter-bloc-app',
    title: 'Flutter 工程作品集',
    blurb:
      '跨平台参考应用，采用 BLoC / Cubit、离线同步以及原生 Swift / Kotlin 集成。',
    tags: ['Flutter', 'Dart', 'Clean Architecture'],
    evidence: [
      '分层功能与可预测状态',
      '离线数据与平台集成',
      '单元、Widget、Golden 与集成测试',
    ],
    links: [
      {
        label: '在线演示',
        href: 'https://redjadet.github.io/flutter_bloc_app/',
      },
      {
        label: '三分钟评审',
        href: 'https://github.com/redjadet/flutter_bloc_app#3-minute-review',
      },
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.ilkersevim.blocflutter',
      },
      {
        label: '源码与架构',
        href: 'https://github.com/redjadet/flutter_bloc_app',
      },
    ],
  },
  {
    id: 'super-demo-ios',
    title: '原生 iOS 与 iPadOS 作品集',
    blurb: 'SwiftUI / SwiftData 示例，含离线信息流、并发与 UIKit 互操作。',
    tags: ['SwiftUI', 'SwiftData', 'iOS / iPadOS'],
    evidence: [
      '功能分层与依赖注入',
      '离线缓存与 URLSession 网络',
      'UI 测试与可选 Flutter 桥接',
    ],
    links: [
      {
        label: '三分钟路径',
        href: 'https://github.com/redjadet/super_demo_ios#3-minute-path',
      },
      {
        label: '源码与评审指南',
        href: 'https://github.com/redjadet/super_demo_ios',
      },
    ],
  },
  {
    id: 'react-website',
    title: 'React 与 TypeScript 个人网站',
    blurb: '本响应式网站：类型化内容、无障碍导航与小型可复用组件系统。',
    tags: ['React', 'TypeScript', 'Vite', 'CSS Modules'],
    evidence: [
      '无障碍与响应式设计',
      '类型化内容与可复用组件',
      '优化构建与清晰项目结构',
    ],
    links: [
      {
        label: '查看源码',
        href: 'https://github.com/redjadet/react-web-portfolio',
      },
    ],
  },
]

export const openSourceProjectsZh = [
  {
    id: 'type-safe-bloc',
    title: '类型安全的 BLoC 辅助工具',
    blurb: '已发布的 Flutter 包，为 BLoC / Cubit 提供类型化选择器、构建器与监听器。',
    href: 'https://github.com/redjadet/ilkersevim_type_safe_bloc',
  },
  {
    id: 'platform-comparison',
    title: '跨平台对比研究',
    blurb:
      '同一示例产品分别用 SwiftUI、Jetpack Compose 与 Flutter 实现，并说明实现取舍。',
    href: 'https://github.com/redjadet/iOS_Android_Flutter_Comparison',
  },
  {
    id: 'safe-parse',
    title: '安全解析工具',
    blurb: '用于可预测解析动态值与类 JSON 值的 Dart 辅助工具。',
    href: 'https://github.com/redjadet/ilkersevim_safe_parse',
  },
  {
    id: 'async-utils',
    title: '异步合并工具',
    blurb: '无依赖的 Dart 工具，用于合并工作并拒绝过期结果。',
    href: 'https://github.com/redjadet/ilkersevim_async_utils',
  },
] as const satisfies readonly OpenSourceProject[]

/** @deprecated Prefer locale-aware copies via `useLocale().t.projects`. */
export const projects = projectsEn

/** @deprecated Prefer locale-aware copies via `useLocale().t.openSourceProjects`. */
export const openSourceProjects = openSourceProjectsEn
