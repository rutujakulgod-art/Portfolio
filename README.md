# Rutuja Kulgod · Portfolio

Astro site built from the approved Portfolio Site canvas and the Portfolio Style Kit.

## Run it locally

Needs Node 22.12 or newer (24 recommended).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Put it on GitHub Pages

1. Create a repository on GitHub and push this folder to its `main` branch.
   - Name it `<your-username>.github.io` for the address `https://<your-username>.github.io/`.
   - Any other name (for example `portfolio`) gives `https://<your-username>.github.io/portfolio/`.
2. In the repository, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and publishes the site.
   It works out the address and sub-path itself, so both repository names work without changes.

## Where things live

| What | File |
| --- | --- |
| Colours, type, spacing (style kit tokens) | `src/styles/global.css` |
| Name, email, LinkedIn, résumé, case-study list and accents | `src/data/site.ts` |
| Header (shared) | `src/components/Header.astro` |
| Footer (shared) | `src/components/Footer.astro` |
| Button with the orange arrow chip | `src/components/Button.astro` |
| Home sections | `src/components/home/` |
| Pages | `src/pages/index.astro`, `src/pages/about.astro` |
| Images, video, résumé PDF | `public/` |

## Header and footer

Every page uses `BaseLayout`, which renders the same `<Header>` and `<Footer>`.
The only things that change per page are:

- `accent`: the case study's colour. It fills the fourth logo tile, the active-link underline and the footer dots.
  Home and About leave it empty (ink tile, orange dots).
- `active`: `work` on case studies, `about` on About, nothing on Home.

## Adding a designed case study

1. Create `src/pages/work/<slug>.astro`, for example `src/pages/work/figma-design-system.astro`:

   ```astro
   ---
   import CaseStudyLayout from '../../layouts/CaseStudyLayout.astro';
   ---
   <CaseStudyLayout title="Figma Design System" description="…" accent="#1E3A7B">
     <!-- sections designed in the case-study conversation -->
   </CaseStudyLayout>
   ```

2. The new file takes over that address from the temporary placeholder in `src/pages/work/[slug].astro`.
   Once all three are done, delete `[slug].astro`.
3. The slug and accent must match the entry in `src/data/site.ts`, which drives the home cards and footer links.

Accent rules: white text must reach 4.5:1 on it, and it must not be orange, amber or gold.
Current accents: Recruitment SaaS `#0A2C55`, Figma Design System `#1E3A7B`, Loan Origination System `#006D75`.

## Accessibility notes

- The hero video has a pause button and does not autoplay when the visitor prefers reduced motion.
- The pixel animations and the hero zoom are switched off under reduced motion.
- Orange is only used for short eyebrow labels, never body text.
