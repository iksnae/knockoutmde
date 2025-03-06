import { browser } from '$app/environment';
import { init, register, locale, _ } from 'svelte-i18n';

register('en', () => import('./locales/en.json'));
register('es', () => import('./locales/es.json'));

export const defaultLocale = 'en';

export function startClient() {
  init({
    fallbackLocale: defaultLocale,
    initialLocale: browser ? window.navigator.language : defaultLocale,
  });
}

export { _, locale };