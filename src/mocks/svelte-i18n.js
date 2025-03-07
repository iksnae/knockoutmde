import { readable, writable } from 'svelte/store';
import { vi } from 'vitest';

/**
 * Mock for svelte-i18n
 */
export const locale = writable('en');

export const _ = readable((key) => `translated_${key}`);

export const t = readable((key) => `translated_${key}`);

export const dictionary = {
  set: vi.fn()
};

export const init = vi.fn();
export const register = vi.fn();
export const getLocaleFromNavigator = vi.fn(() => 'en');
