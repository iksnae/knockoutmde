import { readable, writable } from 'svelte/store';

/**
 * Mock for $app/stores
 */
export const page = readable({
  url: new URL('http://localhost'),
  params: {},
  route: { id: '/' }
});

export const navigating = readable(null);
export const updated = writable(false);
