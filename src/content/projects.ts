import { buildProjects } from './projectCatalog'

export type ProjectLink = { label: string; href: string }
export type Project = {
  id: string
  title: string
  blurb: string
  tags: string[]
  evidence: string[]
  links: ProjectLink[]
  proof: ProjectLink[]
  image?: { src: string; width: number; height: number; alt: string; caption: string }
}

export type OpenSourceProject = {
  id: string
  title: string
  blurb: string
  href: string
}

export const projectsEn: Project[] = buildProjects({
  "flutter-bloc-app": {
    "title": "Flutter engineering portfolio",
    "blurb": "A Flutter reference app for iOS, Android, web and macOS, with a persistent counter, offline synchronization and native Swift / Kotlin bridges.",
    "evidence": [
      "Problem → Offline counter changes must survive restarts and a late remote read.",
      "Decision → Persist changes and queue writes locally; re-read local state before saving remote data, then replay queued writes.",
      "Proof → Queue replay and stale-read regression tests; the dated run below records their execution."
    ],
    "imageAlt": "Counter with local increment and decrement controls.",
    "imageCaption": "Counter with local increment and decrement controls."
  },
  "super-demo-ios": {
    "title": "Apple platforms portfolio",
    "blurb": "A SwiftUI / SwiftData feed for iOS and iPadOS, plus a macOS demo and local watchOS / tvOS companion demos. Companion snapshots do not sync with a phone.",
    "evidence": [
      "Problem → Removing a bookmark during an in-flight request can lose the latest intent.",
      "Decision → Save the optimistic change and outbox atomically; preserve and drain the successor when the earlier request completes.",
      "Proof → An in-memory SwiftData regression checks set → clear in one flush; the dated run records it. macOS build evidence and companion scope are documented separately."
    ],
    "imageAlt": "iPhone feed with bookmark actions.",
    "imageCaption": "iPhone feed with bookmark actions."
  },
  "super-demo-android": {
    "title": "Android portfolio · personal project",
    "blurb": "A Kotlin / Compose app with an offline feed, persistent CRUD and post deep links, built as a personal engineering project.",
    "evidence": [
      "Problem → A feed refresh can overwrite a bookmark toggled while the network is waiting.",
      "Decision → Read the latest bookmark state inside a Room transaction after the response; keep bookmarks local and expose updates through Flow.",
      "Proof → Direct links cover the race, offline feed, CRUD and deep links; dated records show unit and emulator execution."
    ],
    "imageAlt": "Android feed with cached posts.",
    "imageCaption": "Android feed with cached posts."
  },
  "react-website": {
    "title": "React website · personal project",
    "blurb": "This React / TypeScript site: nine languages, theme switching and responsive navigation.",
    "evidence": [
      "Problem → Percentage observer margins can erase the active navigation area on wide screens.",
      "Decision → Calculate a nonempty reading band in viewport-height pixels; rebuild it when the viewport or sticky header changes.",
      "Proof → Regression tests cover resize and observer state; the browser report records real geometry, keyboard, 200% text enlargement and locale checks."
    ],
    "imageAlt": "",
    "imageCaption": ""
  }
}, {
  "demo": "Live demo",
  "review": "Technical review",
  "source": "Source",
  "mac": "macOS demo",
  "companions": "watchOS / tvOS demos",
  "case": "Design & evidence",
  "queue": "Queue replay test",
  "stale": "Stale-read test",
  "race": "Race regression",
  "offline": "Offline feed tests",
  "crud": "CRUD tests",
  "deepLink": "Deep-link tests",
  "run": "Passing run",
  "unitRun": "Passing unit run",
  "emulatorRun": "Passing emulator run",
  "navigation": "Navigation regression",
  "qa": "Browser validation"
})

export const projectsTr: Project[] = buildProjects({
  "flutter-bloc-app": {
    "title": "Flutter mühendislik portfolyosu",
    "blurb": "iOS, Android, web ve macOS için Flutter referans uygulaması: kalıcı sayaç, çevrimdışı senkronizasyon ve Swift / Kotlin köprüleri.",
    "evidence": [
      "Sorun → Çevrimdışı sayaç değişiklikleri yeniden başlatmada ve geç gelen uzak okumada korunmalı.",
      "Karar → Değişiklikleri ve yazma kuyruğunu yerelde sakla; uzak veriyi kaydetmeden yerel durumu tekrar oku, sonra kuyruğu yeniden gönder.",
      "Kanıt → Kuyruk gönderimi ve eski okuma regresyonları doğrudan bağlı; tarihli kayıt testlerin çalıştırıldığını gösterir."
    ],
    "imageAlt": "Yerel artırma ve azaltma kontrolleriyle sayaç.",
    "imageCaption": "Yerel artırma ve azaltma kontrolleriyle sayaç."
  },
  "super-demo-ios": {
    "title": "Apple platformları portfolyosu",
    "blurb": "iOS ve iPadOS için SwiftUI / SwiftData akışı; macOS demosu ve yerel watchOS / tvOS companion demoları. Companion anlık görüntüleri telefonla senkronize olmaz.",
    "evidence": [
      "Sorun → İstek sürerken bookmark kaldırmak son kullanıcı niyetini kaybettirebilir.",
      "Karar → İyimser değişikliği ve outbox kaydını atomik sakla; önceki istek tamamlandığında sonraki işlemi koru ve gönder.",
      "Kanıt → Bellek içi SwiftData testi aynı turda ekle → kaldır sırasını doğrular; tarihli çalışma kaydı bağlı. macOS derleme kanıtı ve companion kapsamı ayrı belgelerde."
    ],
    "imageAlt": "Bookmark işlemleriyle iPhone akışı.",
    "imageCaption": "Bookmark işlemleriyle iPhone akışı."
  },
  "super-demo-android": {
    "title": "Android portfolyosu · kişisel proje",
    "blurb": "Çevrimdışı akış, kalıcı CRUD ve gönderi deep link’leri içeren Kotlin / Compose uygulaması; kişisel mühendislik projesi.",
    "evidence": [
      "Sorun → Ağ yanıtı beklenirken değişen bookmark, akış yenilenince eski değerle ezilebilir.",
      "Karar → Yanıttan sonra güncel bookmark durumunu Room işlemi içinde oku; bookmark’ları yerelde tut, değişiklikleri Flow ile ilet.",
      "Kanıt → Yarış, çevrimdışı akış, CRUD ve deep link testlerine doğrudan bağlantılar; tarihli birim testi ve emülatör çalıştırma kayıtları."
    ],
    "imageAlt": "Önbellekteki gönderilerle Android akışı.",
    "imageCaption": "Önbellekteki gönderilerle Android akışı."
  },
  "react-website": {
    "title": "React web sitesi · kişisel proje",
    "blurb": "Bu React / TypeScript sitesi: dokuz dil, tema seçimi ve farklı ekranlara uyarlanan gezinme.",
    "evidence": [
      "Sorun → Yüzdelik gözlem marjinleri geniş ekranlarda aktif menü alanını boşaltabilir.",
      "Karar → Okuma alanını ekran yüksekliğinden piksel olarak hesapla; ekran veya sabit başlık değişince yeniden kur.",
      "Kanıt → Yeniden boyutlandırma ve gözlemci durumu regresyonları; gerçek geometri, klavye, %200 metin büyütme ve dil kontrolleri tarayıcı raporunda."
    ],
    "imageAlt": "",
    "imageCaption": ""
  }
}, {
  "demo": "Canlı demo",
  "review": "Teknik inceleme",
  "source": "Kaynak kod",
  "mac": "macOS demosu",
  "companions": "watchOS / tvOS demoları",
  "case": "Karar ve kanıt",
  "queue": "Kuyruk gönderimi testi",
  "stale": "Eski okuma testi",
  "race": "Yarış regresyonu",
  "offline": "Çevrimdışı akış testleri",
  "crud": "CRUD testleri",
  "deepLink": "Deep link testleri",
  "run": "Başarılı çalışma",
  "unitRun": "Başarılı birim testi çalışması",
  "emulatorRun": "Başarılı emülatör çalışması",
  "navigation": "Menü regresyonu",
  "qa": "Tarayıcı doğrulaması"
})

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

export const projectsFr: Project[] = buildProjects({
  "flutter-bloc-app": {
    "title": "Portfolio Flutter",
    "blurb": "App Flutter pour iOS, Android, web et macOS : compteur persistant, synchronisation hors ligne et ponts Swift / Kotlin.",
    "evidence": [
      "Problème → Préserver les modifications du compteur hors ligne après redémarrage et lecture distante tardive.",
      "Décision → Persister les changements et la file localement ; relire l’état local avant d’enregistrer la réponse distante, puis rejouer les écritures.",
      "Preuve → Tests de rejeu et de lecture périmée ; l’exécution datée atteste leur passage."
    ],
    "imageAlt": "Compteur avec commandes locales d’incrément et de décrément.",
    "imageCaption": "Compteur avec commandes locales d’incrément et de décrément."
  },
  "super-demo-ios": {
    "title": "Portfolio plateformes Apple",
    "blurb": "Fil SwiftUI / SwiftData pour iOS et iPadOS, démo macOS et démos compagnons locales watchOS / tvOS. Leurs instantanés ne sont pas synchronisés avec un téléphone.",
    "evidence": [
      "Problème → Retirer un favori pendant une requête peut perdre la dernière intention.",
      "Décision → Enregistrer le changement optimiste et l’outbox atomiquement ; préserver puis traiter l’opération suivante après la réponse.",
      "Preuve → Test SwiftData en mémoire : ajout → retrait dans un même cycle, avec exécution datée. Build macOS et périmètre des compagnons documentés séparément."
    ],
    "imageAlt": "Fil iPhone avec favoris.",
    "imageCaption": "Fil iPhone avec favoris."
  },
  "super-demo-android": {
    "title": "Portfolio Android · projet personnel",
    "blurb": "App Kotlin / Compose personnelle : fil hors ligne, CRUD persistant et liens profonds vers les publications.",
    "evidence": [
      "Problème → Un rafraîchissement peut écraser un favori modifié pendant l’attente réseau.",
      "Décision → Relire les favoris dans une transaction Room après la réponse ; les garder locaux et publier les changements via Flow.",
      "Preuve → Tests de concurrence, hors ligne, CRUD et liens profonds ; exécutions datées des tests unitaires et sur émulateur."
    ],
    "imageAlt": "Fil Android et publications en cache.",
    "imageCaption": "Fil Android et publications en cache."
  },
  "react-website": {
    "title": "Site React · projet personnel",
    "blurb": "Ce site React / TypeScript : neuf langues, thèmes et navigation responsive.",
    "evidence": [
      "Problème → Les marges en pourcentage peuvent vider la zone de navigation active sur écran large.",
      "Décision → Calculer une zone de lecture en pixels selon la hauteur ; la recréer si l’écran ou l’en-tête change.",
      "Preuve → Régressions de redimensionnement et état des observateurs ; géométrie réelle, clavier, agrandissement du texte à 200 % et langues dans le rapport navigateur."
    ],
    "imageAlt": "",
    "imageCaption": ""
  }
}, {
  "demo": "Démo",
  "review": "Revue technique",
  "source": "Code source",
  "mac": "Démo macOS",
  "companions": "Démos watchOS / tvOS",
  "case": "Conception et preuves",
  "queue": "Test de rejeu",
  "stale": "Test de lecture périmée",
  "race": "Test de concurrence",
  "offline": "Tests hors ligne",
  "crud": "Tests CRUD",
  "deepLink": "Tests de liens profonds",
  "run": "Exécution réussie",
  "unitRun": "Tests unitaires réussis",
  "emulatorRun": "Tests sur émulateur réussis",
  "navigation": "Test de navigation",
  "qa": "Validation navigateur"
})

export const projectsAr: Project[] = buildProjects({
  "flutter-bloc-app": {
    "title": "ملف أعمال Flutter",
    "blurb": "تطبيق Flutter على iOS وAndroid والويب وmacOS، بعدّاد دائم ومزامنة دون اتصال وجسور Swift / Kotlin.",
    "evidence": [
      "المشكلة ← حفظ تغييرات العدّاد دون اتصال بعد إعادة التشغيل والقراءات البعيدة المتأخرة.",
      "القرار ← حفظ التغييرات وطابور الكتابة محلياً؛ إعادة قراءة الحالة المحلية قبل حفظ الرد، ثم إعادة إرسال الكتابات.",
      "الدليل ← اختبارات إعادة الإرسال والقراءة القديمة؛ سجل مؤرخ يثبت تشغيلها."
    ],
    "imageAlt": "العدّاد مع أزرار محلية للزيادة والنقصان.",
    "imageCaption": "العدّاد مع أزرار محلية للزيادة والنقصان."
  },
  "super-demo-ios": {
    "title": "ملف أعمال منصات Apple",
    "blurb": "موجز SwiftUI / SwiftData على iOS وiPadOS، وعرض macOS وعروض مرافقة محلية على watchOS / tvOS. اللقطات لا تتزامن مع الهاتف.",
    "evidence": [
      "المشكلة ← إزالة إشارة مرجعية أثناء الطلب قد تفقد أحدث نية للمستخدم.",
      "القرار ← حفظ التغيير المتفائل وoutbox ذرياً؛ الاحتفاظ بالعملية اللاحقة وتنفيذها بعد اكتمال الطلب السابق.",
      "الدليل ← اختبار SwiftData في الذاكرة يراجع إضافة ثم إزالة في دورة واحدة، مع سجل مؤرخ. بناء macOS ونطاق العروض المرافقة موثقان منفصلين."
    ],
    "imageAlt": "موجز iPhone مع الإشارات المرجعية.",
    "imageCaption": "موجز iPhone مع الإشارات المرجعية."
  },
  "super-demo-android": {
    "title": "ملف أعمال Android · مشروع شخصي",
    "blurb": "تطبيق Kotlin / Compose شخصي، بموجز دون اتصال وعمليات CRUD دائمة وروابط عميقة للمنشورات.",
    "evidence": [
      "المشكلة ← تحديث الموجز قد يستبدل إشارة مرجعية تغيرت أثناء انتظار الشبكة.",
      "القرار ← قراءة أحدث الإشارات في معاملة Room بعد الرد؛ حفظها محلياً وبث التحديثات عبر Flow.",
      "الدليل ← روابط اختبارات السباق والعمل دون اتصال وCRUD والروابط العميقة؛ سجلات مؤرخة لاختبارات الوحدة والمحاكي."
    ],
    "imageAlt": "موجز Android بمنشورات مخزنة مؤقتاً.",
    "imageCaption": "موجز Android بمنشورات مخزنة مؤقتاً."
  },
  "react-website": {
    "title": "موقع React · مشروع شخصي",
    "blurb": "هذا الموقع بـReact / TypeScript: تسع لغات وسمات وتنقل متجاوب.",
    "evidence": [
      "المشكلة ← هوامش المراقب النسبية قد تفرغ منطقة التنقل النشط على الشاشات العريضة.",
      "القرار ← حساب نطاق قراءة بالبكسل حسب ارتفاع الشاشة؛ إعادة إنشائه عند تغير الشاشة أو الرأس الثابت.",
      "الدليل ← اختبارات تغيير الحجم وحالة المراقب؛ تقرير المتصفح يسجل الهندسة الفعلية ولوحة المفاتيح وتكبير النص إلى 200٪ واللغات."
    ],
    "imageAlt": "",
    "imageCaption": ""
  }
}, {
  "demo": "عرض مباشر",
  "review": "مراجعة تقنية",
  "source": "الكود المصدري",
  "mac": "عرض macOS",
  "companions": "عروض watchOS / tvOS",
  "case": "التصميم والدليل",
  "queue": "اختبار إعادة الإرسال",
  "stale": "اختبار القراءة القديمة",
  "race": "اختبار السباق",
  "offline": "اختبارات دون اتصال",
  "crud": "اختبارات CRUD",
  "deepLink": "اختبارات الروابط العميقة",
  "run": "تشغيل ناجح",
  "unitRun": "اختبارات وحدة ناجحة",
  "emulatorRun": "اختبارات محاكي ناجحة",
  "navigation": "اختبار التنقل",
  "qa": "تحقق المتصفح"
})

export const projectsJa: Project[] = buildProjects({
  "flutter-bloc-app": {
    "title": "Flutter ポートフォリオ",
    "blurb": "iOS・Android・Web・macOS 向け Flutter アプリ。永続カウンター、オフライン同期、Swift / Kotlin ブリッジを実装。",
    "evidence": [
      "課題 → オフラインのカウンター変更を再起動や遅いリモート読み込みから守る。",
      "判断 → 変更と書き込みキューをローカル保存。リモート応答の保存前にローカル状態を再確認し、キューを再送する。",
      "根拠 → キュー再送と古い読み込みの回帰テスト。日付付き記録で実行結果を確認可能。"
    ],
    "imageAlt": "ローカルの増減操作ができるカウンター。",
    "imageCaption": "ローカルの増減操作ができるカウンター。"
  },
  "super-demo-ios": {
    "title": "Apple プラットフォームのポートフォリオ",
    "blurb": "iOS・iPadOS 向け SwiftUI / SwiftData フィード、macOS デモ、watchOS / tvOS のローカル companion デモ。スナップショットは電話と同期しません。",
    "evidence": [
      "課題 → リクエスト中のブックマーク解除で最新の意図が失われる。",
      "判断 → 楽観的更新と outbox を不可分に保存。先行リクエスト完了後も後続操作を保持し処理する。",
      "根拠 → メモリ内 SwiftData テストで同一サイクルの追加 → 解除を検証。日付付き記録あり。macOS ビルドと companion の範囲は別資料に記載。"
    ],
    "imageAlt": "ブックマーク操作のある iPhone フィード。",
    "imageCaption": "ブックマーク操作のある iPhone フィード。"
  },
  "super-demo-android": {
    "title": "Android ポートフォリオ・個人開発",
    "blurb": "オフラインフィード、永続 CRUD、投稿へのディープリンクを備えた Kotlin / Compose の個人プロジェクト。",
    "evidence": [
      "課題 → 通信待ち中に変えたブックマークがフィード更新で上書きされる。",
      "判断 → 応答後に Room トランザクション内で最新状態を読み、ローカルに保持して Flow で更新を配信。",
      "根拠 → 競合、オフライン、CRUD、ディープリンクのテストと、日付付きの単体テスト・エミュレーター実行記録。"
    ],
    "imageAlt": "キャッシュ済み投稿を表示する Android フィード。",
    "imageCaption": "キャッシュ済み投稿を表示する Android フィード。"
  },
  "react-website": {
    "title": "React サイト・個人開発",
    "blurb": "この React / TypeScript サイト。9 言語、テーマ切替、レスポンシブなナビゲーション。",
    "evidence": [
      "課題 → 割合指定のマージンが横長画面のナビゲーション判定領域を消す。",
      "判断 → 高さ基準のピクセルで読み取り帯を計算し、画面や固定ヘッダーの変更で再構築。",
      "根拠 → リサイズと observer 状態の回帰テスト。実際の形状、キーボード、テキストの 200% 拡大、言語はブラウザー記録で検証。"
    ],
    "imageAlt": "",
    "imageCaption": ""
  }
}, {
  "demo": "デモ",
  "review": "技術レビュー",
  "source": "ソース",
  "mac": "macOS デモ",
  "companions": "watchOS / tvOS デモ",
  "case": "設計と根拠",
  "queue": "キュー再送テスト",
  "stale": "古い読み込みテスト",
  "race": "競合回帰テスト",
  "offline": "オフラインテスト",
  "crud": "CRUD テスト",
  "deepLink": "ディープリンクテスト",
  "run": "成功した実行",
  "unitRun": "単体テスト成功記録",
  "emulatorRun": "エミュレーターテスト成功記録",
  "navigation": "ナビゲーション回帰",
  "qa": "ブラウザー検証"
})

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

export const projectsEs: Project[] = buildProjects({
  "flutter-bloc-app": {
    "title": "Portfolio Flutter",
    "blurb": "App Flutter para iOS, Android, web y macOS: contador persistente, sincronización sin conexión y puentes Swift / Kotlin.",
    "evidence": [
      "Problema → Conservar cambios del contador sin conexión tras reinicios y lecturas remotas tardías.",
      "Decisión → Persistir cambios y cola localmente; releer el estado local antes de guardar la respuesta y reenviar las escrituras.",
      "Prueba → Regresiones de reenvío y lectura obsoleta; la ejecución fechada acredita su resultado."
    ],
    "imageAlt": "Contador con controles locales para sumar y restar.",
    "imageCaption": "Contador con controles locales para sumar y restar."
  },
  "super-demo-ios": {
    "title": "Portfolio de plataformas Apple",
    "blurb": "Feed SwiftUI / SwiftData para iOS y iPadOS, demo macOS y demos locales de watchOS / tvOS. Sus instantáneas no se sincronizan con un teléfono.",
    "evidence": [
      "Problema → Quitar un marcador durante una solicitud puede perder la última intención.",
      "Decisión → Guardar el cambio optimista y el outbox de forma atómica; conservar y procesar la operación posterior al completar la primera.",
      "Prueba → SwiftData en memoria comprueba añadir → quitar en un ciclo, con ejecución fechada. La compilación macOS y el alcance de los companions se documentan aparte."
    ],
    "imageAlt": "Feed de iPhone con marcadores.",
    "imageCaption": "Feed de iPhone con marcadores."
  },
  "super-demo-android": {
    "title": "Portfolio Android · proyecto personal",
    "blurb": "App personal Kotlin / Compose: feed sin conexión, CRUD persistente y enlaces profundos a publicaciones.",
    "evidence": [
      "Problema → Una actualización puede sobrescribir un marcador cambiado durante la espera de red.",
      "Decisión → Releer los marcadores en una transacción Room tras la respuesta; mantenerlos locales y emitir cambios con Flow.",
      "Prueba → Tests de concurrencia, datos sin conexión, CRUD y enlaces profundos; ejecuciones fechadas de tests unitarios y en emulador."
    ],
    "imageAlt": "Feed Android con publicaciones en caché.",
    "imageCaption": "Feed Android con publicaciones en caché."
  },
  "react-website": {
    "title": "Sitio React · proyecto personal",
    "blurb": "Este sitio React / TypeScript: nueve idiomas, temas y navegación adaptable.",
    "evidence": [
      "Problema → Los márgenes porcentuales pueden vaciar el área de navegación activa en pantallas anchas.",
      "Decisión → Calcular una franja de lectura en píxeles según la altura; recrearla al cambiar pantalla o cabecera.",
      "Prueba → Regresiones de tamaño y observadores; geometría real, teclado, ampliación del texto al 200 % e idiomas en el informe del navegador."
    ],
    "imageAlt": "",
    "imageCaption": ""
  }
}, {
  "demo": "Demo",
  "review": "Revisión técnica",
  "source": "Código fuente",
  "mac": "Demo macOS",
  "companions": "Demos watchOS / tvOS",
  "case": "Diseño y evidencia",
  "queue": "Test de reenvío",
  "stale": "Test de lectura obsoleta",
  "race": "Regresión de concurrencia",
  "offline": "Tests sin conexión",
  "crud": "Tests CRUD",
  "deepLink": "Tests de enlaces profundos",
  "run": "Ejecución correcta",
  "unitRun": "Tests unitarios correctos",
  "emulatorRun": "Tests en emulador correctos",
  "navigation": "Regresión de navegación",
  "qa": "Validación del navegador"
})

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

export const projectsDe: Project[] = buildProjects({
  "flutter-bloc-app": {
    "title": "Flutter-Portfolio",
    "blurb": "Flutter-App für iOS, Android, Web und macOS: persistenter Zähler, Offline-Synchronisierung und Swift-/Kotlin-Bridges.",
    "evidence": [
      "Problem → Offline-Zähleränderungen müssen Neustarts und verspätete Remote-Lesevorgänge überstehen.",
      "Entscheidung → Änderungen und Warteschlange lokal speichern; lokalen Stand vor dem Speichern der Antwort erneut lesen, dann Schreibvorgänge wiederholen.",
      "Beleg → Tests für Queue-Replay und veraltete Antworten; datierter Lauf belegt die Ausführung."
    ],
    "imageAlt": "Zähler mit lokalen Plus- und Minus-Schaltflächen.",
    "imageCaption": "Zähler mit lokalen Plus- und Minus-Schaltflächen."
  },
  "super-demo-ios": {
    "title": "Apple-Plattformen-Portfolio",
    "blurb": "SwiftUI-/SwiftData-Feed für iOS und iPadOS, macOS-Demo und lokale watchOS-/tvOS-Begleitdemos. Deren Snapshots werden nicht mit einem Telefon synchronisiert.",
    "evidence": [
      "Problem → Entfernen eines Lesezeichens während einer Anfrage kann die letzte Absicht verlieren.",
      "Entscheidung → Optimistische Änderung und Outbox atomar speichern; Nachfolgeoperation nach Abschluss der Anfrage erhalten und abarbeiten.",
      "Beleg → SwiftData-Test im Speicher prüft Setzen → Löschen in einem Durchlauf, mit datiertem Lauf. macOS-Build und Begleitdemos separat dokumentiert."
    ],
    "imageAlt": "iPhone-Feed mit Lesezeichen.",
    "imageCaption": "iPhone-Feed mit Lesezeichen."
  },
  "super-demo-android": {
    "title": "Android-Portfolio · persönliches Projekt",
    "blurb": "Persönliche Kotlin-/Compose-App: Offline-Feed, persistentes CRUD und Deep Links zu Beiträgen.",
    "evidence": [
      "Problem → Ein Feed-Refresh kann ein während der Netzwerkanfrage geändertes Lesezeichen überschreiben.",
      "Entscheidung → Aktuelle Lesezeichen nach der Antwort in einer Room-Transaktion lesen; lokal halten und Änderungen per Flow ausgeben.",
      "Beleg → Tests für Race, Offline-Feed, CRUD und Deep Links; datierte Unit- und Emulator-Testläufe."
    ],
    "imageAlt": "Android-Feed mit zwischengespeicherten Beiträgen.",
    "imageCaption": "Android-Feed mit zwischengespeicherten Beiträgen."
  },
  "react-website": {
    "title": "React-Website · persönliches Projekt",
    "blurb": "Diese React-/TypeScript-Website: neun Sprachen, Themes und responsive Navigation.",
    "evidence": [
      "Problem → Prozentuale Observer-Ränder können den aktiven Navigationsbereich auf breiten Bildschirmen leeren.",
      "Entscheidung → Leseband anhand der Höhe in Pixeln berechnen; bei Änderungen an Bildschirm oder Kopfzeile erneuern.",
      "Beleg → Regressionen für Größenänderung und Observer-Zustand; echte Geometrie, Tastatur, Textvergrößerung auf 200 % und Sprachen im Browserbericht."
    ],
    "imageAlt": "",
    "imageCaption": ""
  }
}, {
  "demo": "Live-Demo",
  "review": "Technische Prüfung",
  "source": "Quellcode",
  "mac": "macOS-Demo",
  "companions": "watchOS-/tvOS-Demos",
  "case": "Entwurf und Belege",
  "queue": "Queue-Replay-Test",
  "stale": "Stale-Read-Test",
  "race": "Race-Regression",
  "offline": "Offline-Tests",
  "crud": "CRUD-Tests",
  "deepLink": "Deep-Link-Tests",
  "run": "Erfolgreicher Lauf",
  "unitRun": "Erfolgreiche Unit-Tests",
  "emulatorRun": "Erfolgreicher Emulatorlauf",
  "navigation": "Navigationstest",
  "qa": "Browserprüfung"
})

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

export const projectsIt: Project[] = buildProjects({
  "flutter-bloc-app": {
    "title": "Portfolio Flutter",
    "blurb": "App Flutter per iOS, Android, web e macOS: contatore persistente, sincronizzazione offline e bridge Swift / Kotlin.",
    "evidence": [
      "Problema → Conservare le modifiche offline al contatore dopo riavvii e letture remote tardive.",
      "Decisione → Salvare modifiche e coda localmente; rileggere lo stato locale prima di salvare la risposta, poi reinviare le scritture.",
      "Prova → Test di reinvio e lettura obsoleta; l’esecuzione datata ne documenta il risultato."
    ],
    "imageAlt": "Contatore con controlli locali di incremento e decremento.",
    "imageCaption": "Contatore con controlli locali di incremento e decremento."
  },
  "super-demo-ios": {
    "title": "Portfolio piattaforme Apple",
    "blurb": "Feed SwiftUI / SwiftData per iOS e iPadOS, demo macOS e demo companion locali watchOS / tvOS. Le istantanee non si sincronizzano con un telefono.",
    "evidence": [
      "Problema → Rimuovere un segnalibro durante una richiesta può perdere l’ultima intenzione.",
      "Decisione → Salvare modifica ottimistica e outbox atomicamente; conservare ed elaborare l’operazione successiva dopo la risposta.",
      "Prova → Test SwiftData in memoria: aggiunta → rimozione nello stesso ciclo, con esecuzione datata. Build macOS e ambito companion documentati separatamente."
    ],
    "imageAlt": "Feed iPhone con segnalibri.",
    "imageCaption": "Feed iPhone con segnalibri."
  },
  "super-demo-android": {
    "title": "Portfolio Android · progetto personale",
    "blurb": "App personale Kotlin / Compose: feed offline, CRUD persistente e deep link ai post.",
    "evidence": [
      "Problema → Un refresh può sovrascrivere un segnalibro cambiato durante l’attesa di rete.",
      "Decisione → Rileggere i segnalibri in una transazione Room dopo la risposta; mantenerli locali e pubblicare i cambiamenti con Flow.",
      "Prova → Test di concorrenza, offline, CRUD e deep link; esecuzioni datate dei test unitari e su emulatore."
    ],
    "imageAlt": "Feed Android con post in cache.",
    "imageCaption": "Feed Android con post in cache."
  },
  "react-website": {
    "title": "Sito React · progetto personale",
    "blurb": "Questo sito React / TypeScript: nove lingue, temi e navigazione responsive.",
    "evidence": [
      "Problema → I margini percentuali possono svuotare l’area di navigazione attiva su schermi ampi.",
      "Decisione → Calcolare una fascia di lettura in pixel secondo l’altezza; ricrearla quando cambia schermo o intestazione.",
      "Prova → Regressioni di ridimensionamento e observer; geometria reale, tastiera, ingrandimento del testo al 200% e lingue nel rapporto browser."
    ],
    "imageAlt": "",
    "imageCaption": ""
  }
}, {
  "demo": "Demo",
  "review": "Revisione tecnica",
  "source": "Codice sorgente",
  "mac": "Demo macOS",
  "companions": "Demo watchOS / tvOS",
  "case": "Progetto e prove",
  "queue": "Test di reinvio",
  "stale": "Test lettura obsoleta",
  "race": "Regressione concorrenza",
  "offline": "Test offline",
  "crud": "Test CRUD",
  "deepLink": "Test deep link",
  "run": "Esecuzione riuscita",
  "unitRun": "Test unitari riusciti",
  "emulatorRun": "Test su emulatore riusciti",
  "navigation": "Regressione navigazione",
  "qa": "Verifica browser"
})

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

export const projectsZh: Project[] = buildProjects({
  "flutter-bloc-app": {
    "title": "Flutter 工程作品集",
    "blurb": "面向 iOS、Android、Web 和 macOS 的 Flutter 示例应用：持久化计数器、离线同步及 Swift / Kotlin 桥接。",
    "evidence": [
      "问题 → 离线计数器修改需在重启及延迟远程读取后保留。",
      "决策 → 在本地持久化修改及写入队列；保存远程响应前重新读取本地状态，再重放写入。",
      "证据 → 队列重放与过期读取回归测试；附日期的记录证明实际运行。"
    ],
    "imageAlt": "带本地增减控件的计数器。",
    "imageCaption": "带本地增减控件的计数器。"
  },
  "super-demo-ios": {
    "title": "Apple 平台作品集",
    "blurb": "iOS 和 iPadOS 的 SwiftUI / SwiftData 信息流，另含 macOS 演示与本地 watchOS / tvOS 配套演示。配套快照不与手机同步。",
    "evidence": [
      "问题 → 请求进行时取消书签，可能丢失最新意图。",
      "决策 → 原子保存乐观更新与 outbox；前一请求完成后保留并处理后续操作。",
      "证据 → 内存 SwiftData 测试验证同一轮添加 → 取消，附日期运行记录。macOS 构建证据与配套演示范围分别说明。"
    ],
    "imageAlt": "含书签操作的 iPhone 信息流。",
    "imageCaption": "含书签操作的 iPhone 信息流。"
  },
  "super-demo-android": {
    "title": "Android 作品集 · 个人项目",
    "blurb": "Kotlin / Compose 个人项目，含离线信息流、持久化 CRUD 和帖子深层链接。",
    "evidence": [
      "问题 → 网络等待期间变更的书签可能被信息流刷新覆盖。",
      "决策 → 响应后在 Room 事务内读取最新书签；书签保留本地，通过 Flow 推送更新。",
      "证据 → 竞争、离线、CRUD 和深层链接测试；附日期的单元测试与模拟器运行记录。"
    ],
    "imageAlt": "展示缓存帖子的 Android 信息流。",
    "imageCaption": "展示缓存帖子的 Android 信息流。"
  },
  "react-website": {
    "title": "React 网站 · 个人项目",
    "blurb": "本 React / TypeScript 网站：九种语言、主题切换与响应式导航。",
    "evidence": [
      "问题 → 百分比观察边距可能使宽屏上的活动导航区域为空。",
      "决策 → 按视口高度计算像素阅读带；视口或固定页头改变时重建。",
      "证据 → 尺寸变化与观察器状态回归；浏览器报告记录实际几何、键盘、200% 文字放大和语言检查。"
    ],
    "imageAlt": "",
    "imageCaption": ""
  }
}, {
  "demo": "在线演示",
  "review": "技术审阅",
  "source": "源码",
  "mac": "macOS 演示",
  "companions": "watchOS / tvOS 演示",
  "case": "设计与证据",
  "queue": "队列重放测试",
  "stale": "过期读取测试",
  "race": "竞争回归",
  "offline": "离线测试",
  "crud": "CRUD 测试",
  "deepLink": "深层链接测试",
  "run": "成功运行",
  "unitRun": "单元测试成功记录",
  "emulatorRun": "模拟器测试成功记录",
  "navigation": "导航回归",
  "qa": "浏览器验证"
})

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
