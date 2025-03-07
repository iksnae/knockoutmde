import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render } from '@testing-library/svelte-svelte5';
import userEvent from '@testing-library/user-event';
import { writable } from 'svelte/store';

// Mock the i18n module before importing the component
vi.mock('$lib/i18n', () => {
  const mockLocale = writable('en');
  return {
    locale: {
      subscribe: mockLocale.subscribe,
      set: vi.fn((value) => mockLocale.set(value))
    }
  };
});

// Import component after mocks
import LanguageSwitcher from './LanguageSwitcher.svelte';

describe('LanguageSwitcher component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Reset the locale mock before each test
    const { locale } = vi.mocked(import('$lib/i18n'));
    if (locale && locale.set) {
      locale.set('en');
    }
  });

  it('should render language buttons', () => {
    const { container } = render(LanguageSwitcher);
    
    // Get all buttons
    const buttons = container.querySelectorAll('button');
    
    // Check we have two buttons
    expect(buttons.length).toBe(2);
    
    // Check button text
    expect(buttons[0].textContent?.trim()).toBe('ES');
    expect(buttons[1].textContent?.trim()).toBe('EN');
  });

  it('should call locale.set when a language button is clicked', async () => {
    const { locale } = await import('$lib/i18n');
    const user = userEvent.setup();
    
    const { container } = render(LanguageSwitcher);
    
    // Find buttons by text
    const buttons = container.querySelectorAll('button');
    const esButton = buttons[0]; // Spanish button
    
    // Click the Spanish button
    await user.click(esButton);
    
    // Check that locale.set was called with 'es'
    expect(locale.set).toHaveBeenCalledWith('es');
  });

  it('should apply different styles to active and inactive languages', async () => {
    const { locale } = await import('$lib/i18n');
    const originalSet = locale.set;
    
    // First render with 'en' active
    const { container } = render(LanguageSwitcher);
    
    const buttons = container.querySelectorAll('button');
    const esButton = buttons[0];
    const enButton = buttons[1];
    
    // Check English button has active class
    expect(enButton.className).toContain('from-red-500 to-red-600 text-white');
    // Check Spanish button has inactive class
    expect(esButton.className).toContain('from-zinc-800 to-zinc-700 text-gray-300');
    
    // Change locale to Spanish by calling the set function directly
    originalSet('es');
    
    // Re-render to reflect the change
    const { container: updatedContainer } = render(LanguageSwitcher);
    
    const updatedButtons = updatedContainer.querySelectorAll('button');
    const updatedEsButton = updatedButtons[0];
    const updatedEnButton = updatedButtons[1];
    
    // Now Spanish should be active
    expect(updatedEsButton.className).toContain('from-red-500 to-red-600 text-white');
    // And English should be inactive
    expect(updatedEnButton.className).toContain('from-zinc-800 to-zinc-700 text-gray-300');
  });
});
