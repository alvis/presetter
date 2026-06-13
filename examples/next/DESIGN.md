# ACME Inc Design System

## 1. Visual Theme and Atmosphere

ACME Inc is a launch creative studio, so the site uses an editorial agency rhythm rather than a SaaS dashboard. The first viewport is sky-washed and cinematic, with a large serif headline, a painterly landscape, and a warm coral signature word that anchors the brand.

## 2. Color Palette and Roles

| Token | Value | Role |
| --- | --- | --- |
| `--color-ink` | `oklch(19% 0.032 242)` | Primary text, dark surfaces, primary CTAs |
| `--color-ink-soft` | `oklch(31% 0.045 238)` | Body copy and secondary text |
| `--color-paper` | `oklch(98% 0.018 88)` | Warm page and card surface |
| `--color-sky` | `oklch(82% 0.111 220)` | Hero atmosphere |
| `--color-moss` | `oklch(42% 0.096 154)` | Section kickers and service chips |
| `--color-coral` | `oklch(66% 0.156 34)` | Signature accent and key metrics |
| `--color-line` | `oklch(79% 0.042 79)` | Dividers and input borders |
| `--color-success` | `oklch(45% 0.11 152)` | Form success feedback |

## 3. Typography Rules

Display type uses Georgia as a deliberate editorial serif with high contrast and launch-studio character. Body/UI text uses the platform sans stack for fast loading and clear controls. Headings use balanced wrapping, body copy uses 1.55-1.58 line height, and numeric proof points use tabular numbers.

## 4. Component Stylings

Buttons are dark ink for primary actions, warm paper for secondary actions, and moss chips for contextual links. Interactive controls define hover, focus-visible, and active scale states. Form fields are fully labeled, have visible focus rings, and keep the success message in a live status region.

## 5. Layout Principles

Sections use a 4px/8px spacing scale with asymmetric editorial grids. Consecutive sections avoid repeating the same structure: hero art, ticker, proof metrics, work rows, bento-like capabilities, staggered process, pricing, FAQ, and contact all use different rhythms.

## 6. Depth and Elevation

The page uses textured atmospheric backgrounds, warm translucent surfaces, and two shadows: `--shadow-soft` for floating editorial surfaces and `--shadow-crisp` for decisive controls. Borders are reserved for dividers and form boundaries.

## 7. Do's and Don'ts

Do keep ACME copy concrete with launches, timelines, outputs, and business outcomes. Do preserve the coral signature accent above the fold. Do use card treatments only where content needs a contained unit. Do not introduce purple-blue gradients, generic stock UI, unlabelled controls, or new typefaces.

## 8. Responsive Behavior

At tablet widths, navigation collapses to brand plus CTA, grids become single column, and work rows stack. At phone widths, CTAs become full width, hero art intentionally bleeds beyond the viewport without horizontal scroll, and touch targets remain at least 44px.

## 9. Agent Prompt Guide

When extending this example, use the existing exported React sections in `src/app/LandingPage.tsx`, keep new spacing on the token scale, use the ACME ink/moss/coral palette, and add a Storybook story with a `play` assertion for every new representative section.

## 10. Follow-ups from audit-next-1778600681

Audit run after the post-fix CSS landed (nav `box-shadow` removed, mobile footer centering added). Overall score 55, risk HIGH driven entirely by P1/P2 findings; **0 P0/critical** findings. Report: `audit-next-1778600681/report.md`.

### P1 (high) — single finding

- **mobile-body-text-size** at `#about` — body text renders at 13px on mobile. Lift to >=14px (`--text-xs` token) for the `#about` section paragraphs to meet readability minimum. (`src/app/LandingPage.tsx` `#about` block; styles in `src/app/globals.css` `.about-*` / shared `p` rules.)

### P2 (medium/low) — grouped follow-ups

- **spacing-arbitrary-value** (12x) — multiple sections expose `margin-left` values off the 4px grid (e.g. 278.5px, 328.5px, 398.5px, 57.6px, plus `nav-row` `column-gap` 24.6px). Most stem from `auto` centering inside a wider grid; remedy by removing per-section `margin-left: auto` where unnecessary or aligning container max-widths to 4px multiples. (`src/app/globals.css`: `.hero`, `.proof-section`, `#work`, `#services`, `#process`, `#pricing`, `.faq-section`, `#contact`, `.service-strip`, `.site-nav`, `.hero-copy`, `.nav-links`.)
- **element-offset-asymmetry** (5x) — hero copy and hero actions report asymmetric left/right gaps (e.g. `.hero-copy` left=64px / right=0px; `.primary-action` left=0px / right=719px). Likely a false positive from `align-items: flex-start` in `.hero-actions`; consider symmetric padding or `justify-self` to clear the warning. (`src/app/globals.css` `.hero-copy`, `.hero-actions`, `.script-word`, `.lede`.)
- **excessive-unique-colors** (1x) — 12 unique color values detected on `body`. Audit raw rgb/hex usages and route through the `--color-*` token set. (`src/app/globals.css` token block.)
- **type-scale-ratio** (1x) — consecutive font-size steps vary >20%. Re-tune `--text-*` ladder toward a 1.25 ratio (Major Third). (`src/app/globals.css` typography tokens.)
- **line-length-narrow** (1x) — `.site-footer-tagline` < 30 chars/line. Allow tagline to grow on wider viewports or raise the `min-width`. (`src/components/layout/footer/site-footer.tsx`.)
- **line-length-wide** (1x) — `#about` paragraphs exceed 75 chars/line. Cap `.about *` `max-width` at ~70ch. (`src/app/LandingPage.tsx` `#about` block.)
- **unused-stylesheet-selector** (1x) — 3/215 selectors unused in served `globals.css`. Prune dead selectors. (`src/app/globals.css`.)
- **unused-css-variable** (1x) — 16 custom properties declared but never referenced. Prune dead tokens after recent palette collapse. (`src/app/globals.css` `:root`.)
- **boundary-proximity** (1x) — `.primary-action` 0px from left edge of `.hero` on one viewport. Add hero inline padding so the CTA breathes. (`src/app/globals.css` `.hero`/`.hero-actions`.)
