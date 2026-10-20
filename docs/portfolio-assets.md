# Portfolio asset provenance

Reviewed on 2026-10-20. The app screenshots and CV PDFs are supplied assets, copied without editing. Screenshots illustrate the app UI; dated test runs provide execution evidence separately.

## App screenshots

| Site asset | Original source | Scope |
| --- | --- | --- |
| [`public/projects/flutter-counter.png`](../public/projects/flutter-counter.png) | [Flutter counter screenshot](https://github.com/redjadet/flutter_bloc_app/blob/2992342d210b3b567e4429c0e640b474ae9f55a0/apps/mobile/assets/screenshots/small/counter_home.png) | 294 × 640; local counter controls. Historical screenshot, including its original debug badge and displayed date. |
| [`public/projects/apple-feed.png`](../public/projects/apple-feed.png) | [Apple feed screenshot](https://github.com/redjadet/super_demo_ios/blob/e9d65eef2a996ef82a176db09bb7a16b8e100c7a/docs/screenshots/iphone/feed-light.png) | 1206 × 2622; iPhone reviewer feed fixture and bookmark actions. |
| [`public/projects/android-feed.png`](../public/projects/android-feed.png) | [Android feed screenshot](https://github.com/redjadet/super_demo_android/blob/78940311bfb1ac1c8b3048dc37e6e1efe73392f5/docs/screenshots/android/feed.png) | 1080 × 2400; cached feed posts and offline state. |

Each local image was compared with the source bytes at the linked commit and matched. SHA-256:

```text
37febc1b7de14b1b780aa70f0f22edbbbd30c29f034acb683b3c4bae1283beeb  public/projects/flutter-counter.png
0d5fa3002809bb4fe692e2e381da922ecb5106b1c328f1b3beecd678cd81665c  public/projects/apple-feed.png
21668885c87ecb5121aa3c6b271a336334b57fe9f0bf2e621b12e160ac707498  public/projects/android-feed.png
```

## CV downloads

The owner identified the external drive root as the source of the current PDFs:

| Supplied file | Public download | Pages | Bytes |
| --- | --- | --- | --- |
| `ilker Sevim Resume(CV) Flutter - Optimized.pdf` | [`ilker-sevim-flutter.pdf`](../public/cv/ilker-sevim-flutter.pdf) | 3 | 1,982,532 |
| `ilker Sevim Resume(CV) iOS - Optimized.pdf` | [`ilker-sevim-ios.pdf`](../public/cv/ilker-sevim-ios.pdf) | 3 | 1,982,393 |

Public-content review: all six pages were rendered and visually inspected. The PDFs contain professional contact details, including a phone number, education results and certificate/license identifiers as supplied. No street address, birth date, government identity document, credential, embedded attachment or automatic JavaScript action was found. Neither file is encrypted. Both documents rendered legibly without clipped text.

The download links were clicked in the production preview. Both returned `200 application/pdf`; the downloaded bytes matched the supplied originals and the committed copies:

```text
25884cd0a4f4d28a717519d9e29fe1049dc3966742e9568e37a7fdfb077e49eb  public/cv/ilker-sevim-flutter.pdf
d0336228df8a35c718d72626f6530d8bb067a2f861295f58b8b8955a5d8dd08c  public/cv/ilker-sevim-ios.pdf
```

The site copy follows the owner's requested career distinctions: 1.5 years of commercial Flutter work and a separate 3 years of personal development; professional Swift/UIKit/Objective-C work; portfolio Swift Concurrency; personal Android and React projects. WebRTC and audio/video experience is an owner-provided career fact. The PDFs were not rewritten to add or change those statements.

## Sharing image and website captures

[`scripts/og.html`](../scripts/og.html) is the source for the 1200 × 630 [`public/og.png`](../public/og.png). It was rendered in Chromium at that viewport size. The image uses the same Flutter-first identity, work preference and platform scope as the English page.

The [validation record](validation/2026-10-20-flutter-first.md) contains current website captures, separate from the supplied mobile app screenshots.
