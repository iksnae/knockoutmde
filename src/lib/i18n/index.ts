import { browser } from '$app/environment';
import { init, register, locale, _ } from 'svelte-i18n';
import { writable } from 'svelte/store';

// Register locales with Spanish first
register('es', () => import('./locales/es.json'));
register('en', () => import('./locales/en.json'));

// Set Spanish as the default locale
export const defaultLocale = 'es';

// Create a loading state to track when i18n is ready
export const isLocaleLoaded = writable(false);

/**
 * Function to setup i18n
 */
function setupI18n() {
  init({
    fallbackLocale: defaultLocale,
    initialLocale: defaultLocale
  });
  
  // Mark as loaded after initialization
  isLocaleLoaded.set(true);
}

// Initialize immediately
setupI18n();

/**
 * Sets up client-side locale handling and persistence
 */
export function startClient() {
  if (!browser) return;
  
  // Set locale based on stored preference or default to Spanish
  try {
    const storedLocale = localStorage.getItem('preferred-locale');
    if (storedLocale) {
      locale.set(storedLocale);
    } else {
      locale.set(defaultLocale);
    }
  } catch (e) {
    console.warn('Error accessing localStorage:', e);
    locale.set(defaultLocale);
  }

  // Set the locale persistently when changed
  locale.subscribe((newLocale) => {
    if (browser && newLocale) {
      try {
        localStorage.setItem('preferred-locale', newLocale);
      } catch (e) {
        console.warn('Error saving locale to localStorage:', e);
      }
    }
  });
}

// Export the locale and _ (translation function)
export { _, locale };