# Pre-merge checklist

Gate merges to `main` on quality checks. Prefer `pnpm check` locally before opening or updating a PR.

## Required commands

```bash
pnpm install --frozen-lockfile
pnpm lint
pnpm test:run
pnpm build
# or:
pnpm check   # lint + test:run + build
```

## Product / content smoke

| Check | What “good” looks like |
| --- | --- |
| Locales | Every locale keeps the same message shape as EN (Vitest parity suite). New strings added for all locales. |
| RTL | Switching to `ar` sets `document.documentElement.lang="ar"` and `dir="rtl"`; header/lang strip remain usable. |
| Theme | Toggle flips `data-theme` / `color-scheme`, writes `localStorage.theme`, survives reload (no FOUC flash of wrong theme). |
| Responsive | Header and language strip work at 320–390px and desktop; no clipped controls. |
| Redirect | `redirect-pages/` and `redirect-usersite/` send legacy Pages traffic to `https://ilkersevim.github.io/`. |
| Secrets | No tokens, credentials, or private keys in commits. |

## Remotes (shipping)

Working clone remotes:

- `origin` → `redjadet/react-web-portfolio` (source / PRs; project Pages redirect)
- `usersite` → `redjadet/redjadet.github.io` (legacy user site redirect)
- `orgsite` → `ilkersevim/ilkersevim.github.io` (live org Pages site)

When shipping a tip to production, push the same commit to **all three** remotes’ `main` (owner-only lockdown still applies). Live tip should match across remotes.

## CI workflow

Workflow name: **CI** (`.github/workflows/ci.yml`)

Runs on pull requests and pushes to `main`: `pnpm lint`, `pnpm test:run`, `pnpm build`.

Pages deploy remains `.github/workflows/deploy-pages.yml` and also runs lint + tests + build before uploading artifacts. Do not remove those gates from deploy.

## Branch protection (required status checks)

Preferred: require the **CI** / **quality** status check on `main` (and optionally block force-pushes for everyone except owners).

If `gh` / API scopes cannot update rulesets (owner-only lockdown), set this in the GitHub UI:

1. Open https://github.com/redjadet/react-web-portfolio/settings/rules
2. Create or edit a branch ruleset targeting `main`
3. Enable **Require status checks to pass**
4. Add check name **quality** (job from `.github/workflows/ci.yml`)
5. Optionally require a linear history / dismiss stale approvals
6. Save the ruleset (owners only)

Repeat for `ilkersevim/ilkersevim.github.io` and `redjadet/redjadet.github.io` if those repos accept direct pushes to `main` outside the mirror flow.

## PR template

`.github/PULL_REQUEST_TEMPLATE.md` mirrors this checklist on every PR.
