import { browser } from '$app/environment';
import { init, register, locale, _ } from 'svelte-i18n';
import { derived, writable } from 'svelte/store';

// Register locales
register('en', () => import('./locales/en.json'));
register('es', () => import('./locales/es.json'));

export const defaultLocale = 'en';
export const initialLocale = defaultLocale;

// Create a loading state to track when i18n is ready
export const isLocaleLoaded = writable(false);

// Initialize i18n
export function setupI18n() {
  // Set the initial locale
  locale.set(initialLocale);

  init({
    fallbackLocale: defaultLocale,
    initialLocale
  });

  // Mark as loaded after initialization
  isLocaleLoaded.set(true);
}

// Initialize immediately
setupI18n();

// Create a derived store that only returns the message if locale is loaded
export const t = derived(
  [_, isLocaleLoaded],
  ([$_, $isLocaleLoaded], set) => {
    if ($isLocaleLoaded) {
      set($_);
    }
  }
);

export { _, locale };