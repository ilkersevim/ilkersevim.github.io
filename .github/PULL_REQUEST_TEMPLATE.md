## Summary

<!-- What changed and why (1–3 sentences). -->

## Pre-merge checklist

- [ ] `pnpm lint` passes
- [ ] `pnpm test:run` passes (unit + integration)
- [ ] `pnpm build` passes (or `pnpm check` = lint + test + build)
- [ ] Locale message key parity with EN (covered by tests; no missing keys for new copy)
- [ ] RTL smoke: Arabic (`ar`) sets `lang`/`dir` and readable layout
- [ ] Theme: toggle updates `data-theme`, persists, no FOUC on reload
- [ ] Responsive: header + language strip usable at ~320–390px and desktop
- [ ] Triple-remote tip sync when shipping: `origin` (`react-web-portfolio`), `usersite` (`redjadet.github.io`), and `orgsite` (`ilkersevim.github.io`)
- [ ] Legacy redirects still target `https://ilkersevim.github.io/` (`redirect-pages/`, `redirect-usersite/`)
- [ ] No secrets, tokens, or private credentials in the diff

## CI

GitHub Actions workflow **CI** must be green on this PR before merge. Enable branch protection on `main` to require the **quality** check (see `docs/pre-merge-checklist.md` if rulesets cannot be set via API).

## Test plan

<!-- How you verified (commands, locales, viewport notes). -->
