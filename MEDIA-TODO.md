# Recruitment SaaS case study: media to add

The page `src/pages/work/recruitment-saas.astro` is built from the original case-study canvas
(https://claude.ai/artifact/KXNLYEQuHsqvryYdBUjekF) on the warm base with the navy accent.
Its images and videos still need to be added.

1. Put each file in `public/media/recruitment/`.
2. Name it after its asset id from the canvas (the id in `/_blob/<id>`), e.g. `dd50ea8876b033d0e9d6cae97f5959c9.jpg`,
   or use any name and update the mapping in `src/data/recruitment-media.ts`.
3. Videos are `.mp4`; the full-size IA image is `.png`; everything else is `.jpg` (change the extension in the mapping if not).

The ids the page uses are listed in `src/data/recruitment-media.ts`.
When every file is in place, merge this branch into `main` to publish.
