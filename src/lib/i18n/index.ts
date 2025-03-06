import { browser } from '$app/environment';
import { init, register, locale, _ } from 'svelte-i18n';

register('en', () => import('./locales/en.json'));
register('es', () => import('./locales/es.json'));

export const defaultLocale = 'en';

// Initialize for both server-side and client-side rendering
function setupI18n() {
  init({
    fallbackLocale: defaultLocale,
    initialLocale: browser ? window.navigator.language.split('-')[0] : defaultLocale
  });
}

// Call setupI18n immediately for server-side rendering
setupI18n();

export function startClient() {
  // No need to re-initialize on client if it's already done
  if (!browser) {
    setupI18n();
  }
}

export { _, locale };