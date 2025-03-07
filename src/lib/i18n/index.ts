import { browser } from '$app/environment';
import { init, register, locale, _, dictionary } from 'svelte-i18n';
import { derived, get, writable } from 'svelte/store';

// Import translations directly to ensure they're available immediately
import es from './locales/es.json';
import en from './locales/en.json';

// Set Spanish as the default locale
export const defaultLocale = 'es';

// Create a loading state to track when i18n is ready
export const isLocaleLoaded = writable(false);

// Add dictionaries synchronously for immediate access
dictionary.set({ es, en });

// Create a safe _ function that works even before locale is set
export const t = derived(
  [_, locale],
  ([tf, currentLocale]) => 
    (key: string, vars?: Record<string, any>) => {
      try {
        return tf(key, vars);
      } catch (e) {
        // If translation fails, try to get from dictionary directly
        try {
          const parts = key.split('.');
          let result = currentLocale === 'es' ? es : en;
          
          for (const part of parts) {
            if (result[part] === undefined) {
              return key; // Key doesn't exist, return the key itself
            }
            result = result[part];
          }
          
          return typeof result === 'string' ? result : key;
        } catch (err) {
          return key; // Fallback to key if all else fails
        }
      }
    }
);

/**
 * Function to setup i18n
 */
function setupI18n() {
  // Register locales with deferred loading
  register('es', () => Promise.resolve(es));
  register('en', () => Promise.resolve(en));
  
  // Initialize with default locale for both client and server
  init({
    fallbackLocale: defaultLocale,
    initialLocale: defaultLocale
  });
  
  // Set locale to ensure it's immediately available
  locale.set(defaultLocale);
  
  // Mark as loaded after initialization
  isLocaleLoaded.set(true);
}

// Initialize immediately for SSR
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
