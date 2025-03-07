import '@testing-library/jest-dom';
import { vi } from 'vitest';
import { readable } from 'svelte/store';

// Mock SvelteKit navigation and page
vi.mock('$app/navigation', () => ({
  goto: vi.fn(),
  invalidate: vi.fn()
}));

vi.mock('$app/stores', () => ({
  page: readable({
    url: new URL('http://localhost'),
    params: {},
    route: { id: '/' }
  }),
  navigating: readable(null)
}));

// Mock svelte-i18n if needed
vi.mock('svelte-i18n', () => ({
  t: vi.fn((key) => key),
  locale: readable('en'),
  _, getLocaleFromNavigator: vi.fn(() => 'en')
}));
