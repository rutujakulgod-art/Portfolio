// Shared content and links. Edit here once, and every page picks it up.

/** Prefixes a site path with the GitHub Pages base path. */
export const url = (path = '') => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
};

export const site = {
  name: 'Rutuja Kulgod',
  email: 'rutujakulgod@gmail.com',
  linkedin: 'https://www.linkedin.com/in/rutuk',
  linkedinLabel: 'linkedin.com/in/rutuk',
  resume: 'Rutuja_Kulgod_Resume_2026.pdf',
  description:
    'Rutuja Kulgod, product designer. I design systems the way architects design buildings: structural, not decorative.',
};

/** Brand colours. These never change between pages. */
export const brand = {
  orange: '#F48D16',
  tile2: '#F7B267',
  tile3: '#E3A008',
  ink: '#251F19',
};

/**
 * Case studies. `accent` is the only colour that changes per page:
 * it must hold white text at 4.5:1 and must not be orange, amber or gold.
 */
export const caseStudies = [
  {
    slug: 'recruitment-saas',
    title: 'SaaS Platform',
    navLabel: 'Recruitment SaaS',
    accent: '#0A2C55',
    summary:
      'Led UX strategy for a complex B2B SaaS portal aligning business objectives with user centric solutions across enterprise and recruitment-tech platforms.',
    image: 'media/work-saas.webp',
    imageSize: [1587, 1090],
  },
  {
    slug: 'figma-design-system',
    title: 'Figma Design System',
    navLabel: 'Figma Design System',
    accent: '#1E3A7B',
    summary:
      'Architected the Figma design system and visual library for Singapore’s largest newsroom.',
    image: 'media/work-design-system.webp',
    imageSize: [597, 317],
  },
  {
    slug: 'sustainability-intelligence',
    title: 'Sustainability Intelligence',
    navLabel: 'Sustainability Intelligence',
    accent: '#0E5A63',
    summary:
      'A combined view of energy, ESG, water and public building performance for West Tower.',
    image: 'media/work-sustainability.webp',
    imageSize: [1740, 979],
  },
] as const;

export type CaseStudy = (typeof caseStudies)[number];
