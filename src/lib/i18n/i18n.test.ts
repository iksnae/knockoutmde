import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { get } from 'svelte/store';

// Mock the locale module for direct testing
vi.mock('svelte-i18n', () => {
  const mockSet = vi.fn();
  const mockSubscribe = vi.fn();
  
  return {
    init: vi.fn(),
    register: vi.fn(),
    _: {
      subscribe: vi.fn(fn => {
        fn(() => 'translated');
        return () => {};
      })
    },
    locale: {
      set: mockSet,
      subscribe: mockSubscribe
    },
    dictionary: {
      set: vi.fn()
    },
    getLocaleFromNavigator: vi.fn(() => 'en')
  };
});

// Mock localStorage
const mockLocalStorage = (() => {
  let store = {};
  return {
    getItem: vi.fn(key => store[key] || null),
    setItem: vi.fn((key, value) => {
      store[key] = String(value);
    }),
    clear: vi.fn(() => {
      store = {};
    })
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: mockLocalStorage
});

describe('i18n module', () => {
  beforeEach(() => {
    vi.resetModules();
    mockLocalStorage.clear();
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.resetModules();
  });

  it('should have a default locale defined', async () => {
    const i18n = await import('./index');
    expect(i18n.defaultLocale).toBeDefined();
  });
  
  it('should have a startClient function', async () => {
    const i18n = await import('./index');
    expect(typeof i18n.startClient).toBe('function');
  });
  
  it('should export translation helpers', async () => {
    const i18n = await import('./index');
    expect(i18n.t).toBeDefined();
    expect(i18n._).toBeDefined();
    expect(i18n.locale).toBeDefined();
  });
  
  it('should set locale from localStorage in startClient', async () => {
    // Setup localStorage with a value
    mockLocalStorage.setItem('preferred-locale', 'es');
    
    // Import and run startClient
    const i18n = await import('./index');
    const { locale } = await import('svelte-i18n');
    
    i18n.startClient();
    
    expect(mockLocalStorage.getItem).toHaveBeenCalledWith('preferred-locale');
    expect(locale.set).toHaveBeenCalledWith('es');
  });
});
