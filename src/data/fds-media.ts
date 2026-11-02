import { url } from './site';

/**
 * Images and videos for the Figma Design System case study, stored in
 * public/media/figma-design-system/. Pass a file name; returns the full URL.
 */
export const m = (file: string) => url(`media/figma-design-system/${file}`);
