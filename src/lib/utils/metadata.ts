import { t } from '$lib/i18n';
import { get } from 'svelte/store';

/**
 * Helper to generate page title with app name
 * @param pageTitleKey The i18n key for the page title
 * @returns Formatted page title with app name
 */
export function pageTitle(pageTitleKey: string): string {
  const translatedTitle = get(t)(`meta.${pageTitleKey}`);
  const appTitle = get(t)('app.title');
  return `${appTitle} - ${translatedTitle}`;
}

/**
 * Helper to get translated description
 * @param descriptionKey The i18n key for the description
 * @returns Translated description text
 */
export function metaDescription(descriptionKey: string): string {
  // If a specific description is provided, use it, otherwise use the app description
  if (descriptionKey) {
    return get(t)(descriptionKey);
  }
  return get(t)('app.description');
}
