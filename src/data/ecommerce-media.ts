import { url } from './site';

/**
 * Images and videos for the CityMusic E-commerce case study,
 * stored in public/media/E-commerce/. Pass the file name.
 */
export const m = (file: string) => url(`media/E-commerce/${file}`);

/** Accent for this case study (holds white text at 5.1:1). */
export const ACCENT = '#BD4444';
export const ACCENT_HOVER = '#9A3434';
