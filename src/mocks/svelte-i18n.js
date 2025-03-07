import { readable, writable } from 'svelte/store';
import { vi } from 'vitest';

/**
 * Mock for svelte-i18n
 */
export const locale = {
  ...writable('en'),
  set: vi.fn((val) => writable('en').set(val))
};

export const _ = {
  subscribe: (callback) => {
    callback((key) => `translated_${key}`);
    return () => {};
  }
};

export const t = {
  subscribe: (callback) => {
    callback((key) => `translated_${key}`);
    return () => {};
  }
};

export const dictionary = {
  set: vi.fn()
};

export const init = vi.fn();
export const register = vi.fn();
export const getLocaleFromNavigator = vi.fn(() => 'en');
