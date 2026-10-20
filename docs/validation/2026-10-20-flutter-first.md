# Flutter-first portfolio validation — 2026-10-20

This record covers the production build preview and published website for the Flutter-first portfolio update, based on `923fd4da8edfc2ffddd03aaaf37ef9775b36afce`. Application commit `829ecf2bcc3a2262e622647e144552f6231725f6` was merged as `451c49a8009bff06155d4d93617bb5714b2aabf3`. Local checks, hosted checks and live publication verification passed; deployment evidence is recorded below.

## Environment and automated checks

- Node 24, pnpm 12.8.1, Chromium 155.0.8059.85 through Playwright.
- `pnpm install --frozen-lockfile` succeeded; the lockfile was unchanged.
- `pnpm check` succeeded at 14:17 UTC: lint, 7 Vitest files / 39 tests, TypeScript and Vite production build.
- New regressions cover viewport-height observer margins, viewport resize and cleanup, a wrapped header, partial observer callbacks, all nine locales' identity metadata, and the visible email name / CV download links.
- The browser checks used `pnpm preview --host 127.0.0.1 --port 43123 --strictPort`, serving `dist`.

## Browser results

| Area | Checked result |
| --- | --- |
| Identity | Flutter-first role, Flutter → Apple → Android → React project and skill order, explicit remote-from-Istanbul / Istanbul-hybrid preference. Android and React are personal projects. |
| Locales | EN, TR, FR, ES, DE, IT, AR, JA and ZH at both 320 × 844 and 390 × 844: 18 scenarios passed. Four project cards, two named CV downloads, localized title / metadata / `Person.jobTitle`, selected language visible, no horizontal overflow or clipped main links. |
| RTL | Arabic sets `lang="ar"`, `dir="rtl"`; header, language strip, actions and project copy remain readable. The language strip intentionally scrolls. |
| Keyboard | Skip link moves focus to `main`. Header links, all nine language buttons and theme control are reachable at 320px with visible 3px focus outlines. Project evidence and both CV links are reachable; the email button's accessible name is exactly its visible English text, “Email me”. |
| Enlargement | Root text at 200% (computed 32px), at 1280 × 900 and 320 × 900: no horizontal overflow or clipped interactive content. Contact grid and email wrapping were corrected after this check initially found overflow. This was text enlargement, not a native browser zoom or screen-reader test. |
| Theme | Light and dark views inspected. The theme control updates `data-theme`, stores `localStorage.theme` and preserves dark mode on reload. |
| JavaScript disabled | English fallback includes the new role, all four platforms, work preference and both working CV links. Static title, sharing metadata and structured data use the new identity. |
| Assets | All three app PNGs and the 1200 × 630 sharing image return HTTP 200 with correct dimensions. Both PDF downloads return HTTP 200 and match their original SHA-256 hashes. See [asset provenance](../portfolio-assets.md). |
| Console | No browser errors or warnings during the preview session. |

### Button contrast

Computed foreground/background colors were sampled after transitions settled. Ratios use WCAG relative luminance and exceed the [4.5:1 normal-text requirement](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).

| Button / theme | Normal | Hover |
| --- | --- | --- |
| Primary / light | 5.49:1 | 7.64:1 |
| Primary / dark | 7.08:1 | 8.51:1 |
| Email / light | 14.08:1 | 12.34:1 |
| Email / dark | 16.11:1 | 14.06:1 |

The email hover background also needed a dark-theme correction. Removing the email button's redundant `aria-label` keeps its [visible label in its accessible name](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html).

### Real navigation geometry

The browser used its native IntersectionObserver. A forwarding subclass recorded actual options and callback `rootBounds`; it did not replace intersection calculations. Each header link (`work`, `skills`, `about`, `contact`) activated the corresponding menu item at all three viewport sizes. Anchor content cleared the measured sticky header. Observer rebuilding was also checked after viewport changes.

| Viewport | Root margin | Actual reading-band height |
| --- | --- | --- |
| 2560 × 1080 | `-432px 0px -486px 0px` | 162px |
| 320 × 900 | `-360px 0px -405px 0px` | 135px |
| 1440 × 700 | `-280px 0px -315px 0px` | 105px |

[IntersectionObserver percentage root margins resolve against root width](https://www.w3.org/TR/intersection-observer/#root-intersection-rectangle). The implementation now derives the band from viewport height in pixels and rebuilds it when the viewport or header changes. Unit observer mocks check lifecycle and state; the table above is the separate real-browser geometry evidence.

## Mobile project evidence and links

The mobile suites were not rerun for this React change. Each card links named regression source pinned to the commit of an existing successful run. Dates remain visible so these records are not mistaken for proof that the latest mobile `main` was tested here.

| Project | Design / regression | Verified successful execution |
| --- | --- | --- |
| Flutter | Offline counter persistence and queue replay; stale remote reads re-check local state before save. | [Flutter tests, 2026-10-09](https://github.com/redjadet/flutter_bloc_app/actions/runs/37902949216/job/113729610021), commit `5aa04771392fccf77dd3ea7fd0f11bb4a2cb6372`. |
| Apple | Atomic optimistic bookmark + outbox; preserve and drain a successor intent after an in-flight request. | [Unit tests, 2026-10-08](https://github.com/redjadet/super_demo_ios/actions/runs/37828018857/job/113485831800), commit `17d795f471aafae5010b5736d052b316cdedd02a`. macOS build evidence and local watchOS/tvOS snapshot scope have separate guide links; companion demos do not sync with a phone. |
| Android | Room transaction preserves a bookmark changed during refresh; separate offline feed, CRUD and deep-link regressions. | [Unit/lint/build CI](https://github.com/redjadet/super_demo_android/actions/runs/39417272605) and [API 34 emulator instrumentation](https://github.com/redjadet/super_demo_android/actions/runs/39417272616), 2026-10-20, commit `2d09e86001c73172a6dc4a4555197d9eaff346df`. |

GitHub contents and Markdown headings were checked for 15 reviewer/design/test targets. The Flutter link resolves to `#reviewer-path`; the Apple link resolves to `docs/portfolio.md#3-minute-path`. The Flutter web demo returns HTTP 200 with its Flutter bootstrap; its Google Play listing opens. After merging, GitHub's contents API also confirmed that the new React regression and validation files are available through their `main` URLs.

## Production preview captures

![English desktop at 1440 × 1000](assets/2026-10-20-desktop.png)

![Flutter screenshot, design decision and dated proof links](assets/2026-10-20-evidence.png)

![Turkish dark theme at 320 × 900](assets/2026-10-20-mobile-tr.png)

![Arabic RTL dark theme at 390 × 900](assets/2026-10-20-mobile-ar.png)

## Publication completed

The live publication path was inspected in `.github/workflows/deploy-pages.yml` and [the deployment checklist](../pre-merge-checklist.md):

| Repository | Uploaded Pages content |
| --- | --- |
| `ilkersevim/ilkersevim.github.io` | `dist` — the actual website |
| `redjadet/redjadet.github.io` | `redirect-usersite` — legacy redirect |
| `redjadet/react-web-portfolio` | `redirect-pages` — source/project redirect |

A pull request runs quality/build checks without deploying. A successful source-repository check alone does not establish that the public website changed.

After the owner's approval, [source PR #9](https://github.com/redjadet/react-web-portfolio/pull/9) and [org-site PR #1](https://github.com/ilkersevim/ilkersevim.github.io/pull/1) were merged. The initial application release synchronized all three `main` branches to `451c49a8009bff06155d4d93617bb5714b2aabf3`, preserving the reviewed application commit as an ancestor. Each run below completed successfully for that exact merge commit:

| Repository | CI | Pages build and deploy |
| --- | --- | --- |
| Source | [CI 39440139139](https://github.com/redjadet/react-web-portfolio/actions/runs/39440139139) | [Pages 39440139163](https://github.com/redjadet/react-web-portfolio/actions/runs/39440139163) |
| Legacy user site | [CI 39440197854](https://github.com/redjadet/redjadet.github.io/actions/runs/39440197854) | [Pages 39440197689](https://github.com/redjadet/redjadet.github.io/actions/runs/39440197689) |
| Actual org site | [CI 39440188158](https://github.com/ilkersevim/ilkersevim.github.io/actions/runs/39440188158) | [Pages 39440188409](https://github.com/ilkersevim/ilkersevim.github.io/actions/runs/39440188409) |

The org-site deployment finished at 14:33:34 UTC on 2026-10-20. All three CI logs record 7 test files / 39 tests passing, followed by a successful production build. Live checks ran against [ilkersevim.github.io](https://ilkersevim.github.io/) at 14:34–14:37 UTC (17:34–17:37 Istanbul), after deployment:

| Live check | Result |
| --- | --- |
| Shipped application | The public HTML has the Flutter-first title. JavaScript `index-C4XJXeaD.js` and CSS `index-DqPKTVV4.css` match the validated local production build byte for byte. |
| Locales and layout | All nine locales at 320 × 844 and 390 × 844 passed again: four projects and four leading skills in Flutter → Apple → Android → React order, matching sharing metadata and `Person.jobTitle`, two named CV links, selected language visible, correct RTL direction and no overflow or clipped main links. |
| Navigation | Native IntersectionObserver bands again measured 162px, 135px and 105px at the three viewport sizes above. All four navigation links activated correctly after viewport changes. |
| Keyboard and text | Sixteen initial keyboard stops remained visible with focus outlines at 320px; the skip link focused `main`. The email link's accessible name matched “Email me”. Text enlarged to 200% at 1280px and 320px without overflow or clipped links. |
| Theme and contrast | Dark theme survived reload through `localStorage.theme`. All eight normal/hover contrast measurements matched the table above; dark primary contrast was 7.08:1 / 8.51:1. Desktop and Turkish 320px captures were visually inspected. |
| Public files | Both actual browser-triggered PDF downloads succeeded and matched the source SHA-256 hashes in [asset provenance](../portfolio-assets.md). All three app PNGs and `og.png` returned HTTP 200 and matched the reviewed files byte for byte. |
| Fallback and new evidence | A separate JavaScript-disabled browser context showed the new title, all four platforms and both CV downloads. The newly merged React regression and QA document URLs were confirmed through GitHub's contents API. |
| Legacy publication paths | Both legacy URLs served the intended redirect documents. Browser navigation from each URL reached the org site and preserved `?publication-check=20261020#work`. The destination rendered four projects. |
| Browser diagnostics | No console errors or warnings across the validation session. |

This documentation follow-up records the completed application deployment; it does not change the validated application bundles or public assets.

Separate language URLs remain a later SEO step. Language selection still uses the same URL; this change does not claim separately indexed language versions. See [Google's multilingual URL guidance](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites).
