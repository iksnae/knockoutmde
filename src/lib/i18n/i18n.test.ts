import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { get } from 'svelte/store';

// Mock browser environment
vi.mock('$app/environment', () => ({
  browser: true
}));

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: vi.fn((key: string) => store[key] || null),
    setItem: vi.fn((key: string, value: string) => {
      store[key] = value;
    }),
    clear: vi.fn(() => {
      store = {};
    })
  };
})();

Object.defineProperty(global, 'localStorage', {
  value: localStorageMock,
  writable: true
});

// Mock svelte-i18n
const mockInitFn = vi.fn();
const mockRegisterFn = vi.fn();
const mockDictionarySet = vi.fn();
const mockLocaleSvelte = {
  subscribe: vi.fn(),
  set: vi.fn()
};
const mockTranslate = vi.fn((key) => `translated_${key}`);

vi.mock('svelte-i18n', () => ({
  init: mockInitFn,
  register: mockRegisterFn,
  locale: mockLocaleSvelte,
  _: {
    subscribe: (callback: Function) => {
      callback(mockTranslate);
      return () => {};
    }
  },
  dictionary: {
    set: mockDictionarySet
  }
}));

describe('i18n module', () => {
  beforeEach(() => {
    vi.resetModules();
    vi.clearAllMocks();
    localStorageMock.clear();
  });

  afterEach(() => {
    vi.resetModules();
  });

  it('should initialize with default locale', async () => {
    const { defaultLocale } = await import('./index');
    
    // Re-import to trigger the init
    await import('./index');
    
    expect(mockInitFn).toHaveBeenCalledWith({
      fallbackLocale: defaultLocale,
      initialLocale: defaultLocale
    });
    
    expect(mockLocaleSvelte.set).toHaveBeenCalledWith(defaultLocale);
  });

  it('should register locales', async () => {
    await import('./index');
    
    expect(mockRegisterFn).toHaveBeenCalledWith('es', expect.any(Function));
    expect(mockRegisterFn).toHaveBeenCalledWith('en', expect.any(Function));
  });

  it('should set dictionaries', async () => {
    await import('./index');
    
    expect(mockDictionarySet).toHaveBeenCalledWith(expect.objectContaining({
      en: expect.any(Object),
      es: expect.any(Object)
    }));
  });

  it('should load locale from localStorage in startClient', async () => {
    localStorageMock.setItem('preferred-locale', 'en');
    
    const { startClient } = await import('./index');
    startClient();
    
    expect(localStorageMock.getItem).toHaveBeenCalledWith('preferred-locale');
    expect(mockLocaleSvelte.set).toHaveBeenCalledWith('en');
  });

  it('should fall back to default locale if localStorage is empty', async () => {
    const { startClient, defaultLocale } = await import('./index');
    startClient();
    
    expect(localStorageMock.getItem).toHaveBeenCalledWith('preferred-locale');
    expect(mockLocaleSvelte.set).toHaveBeenCalledWith(defaultLocale);
  });

  it('should save locale to localStorage when it changes', async () => {
    const { startClient } = await import('./index');
    startClient();
    
    // Simulate locale change
    const localeSubscriberFn = mockLocaleSvelte.subscribe.mock.calls[0][0];
    localeSubscriberFn('fr');
    
    expect(localStorageMock.setItem).toHaveBeenCalledWith('preferred-locale', 'fr');
  });

  it('t function should handle translation keys', async () => {
    const { t } = await import('./index');
    const translationFn = get(t);
    
    const result = translationFn('some.key');
    expect(result).toBe('translated_some.key');
  });
});
