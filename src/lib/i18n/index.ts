import { browser } from '$app/environment';
import { init, register, locale, _ } from 'svelte-i18n';

register('es', () => import('./locales/es.json'));
register('en', () => import('./locales/en.json'));

export const defaultLocale = 'es';

/**
 * Creates a proper URL path with the base path prepended
 * @param {string} path - The path to navigate to, without the base
 * @returns {string} - The full path including the base
 */
// Function to setup i18n
function setupI18n() {
  init({
    fallbackLocale: defaultLocale,
    initialLocale: browser ? getPreferredLocale() : defaultLocale
  });
}

// Get preferred locale with Spanish as default
function getPreferredLocale() {
  // Default to Spanish
  if (!browser) return defaultLocale;

  const storedLocale = localStorage.getItem('preferred-locale');
  if (storedLocale) return storedLocale;

  // Check for browser language preference, but default to Spanish if not Spanish or English
  const browserLang = window.navigator.language.split('-')[0];
  if (browserLang === 'en') return browserLang;
  
  // For all other cases, default to Spanish
  return defaultLocale;
}

// Initialize immediately
setupI18n();

// Create a derived store that only returns the message if locale is loaded
export const isLocaleLoaded = writable(true);

export function startClient() {
  // Set the locale persistently when changed
  locale.subscribe((newLocale) => {
    if (browser && newLocale) {
      localStorage.setItem('preferred-locale', newLocale);
    }
  });
}

export { _, locale };