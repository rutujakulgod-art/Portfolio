// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages:
// - For a user site (repo named <username>.github.io) leave BASE_PATH unset.
// - For a project site (repo named e.g. "portfolio") set BASE_PATH=/portfolio.
// The deploy workflow sets both values from the repository automatically.
export default defineConfig({
  site: process.env.SITE_URL || 'https://example.github.io',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
});
