import { browser } from '$app/environment';
import { init, register, locale, _ } from 'svelte-i18n';
import { writable } from 'svelte/store';

register('es', () => import('./locales/es.json'));
register('en', () => import('./locales/en.json'));

export const defaultLocale = 'es';

// Create a loading state to track when i18n is ready
export const isLocaleLoaded = writable(true);

/**
 * Function to setup i18n
 */
function setupI18n() {
  init({
    fallbackLocale: defaultLocale,
    initialLocale: browser ? getPreferredLocale() : defaultLocale
  });
}

/**
 * Get preferred locale with Spanish as default
 */
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

/**
 * Sets up client-side locale handling and persistence
 */
export function startClient() {
  // Set the locale persistently when changed
  locale.subscribe((newLocale) => {
    if (browser && newLocale) {
      localStorage.setItem('preferred-locale', newLocale);
    }
  });
}

export { _, locale };