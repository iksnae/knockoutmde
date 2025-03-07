import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import userEvent from '@testing-library/user-event';
import { render, cleanup } from '../../test-utils';
import { writable } from 'svelte/store';

// This is the factory function pattern that fixes hoisting issues
vi.mock('$lib/i18n', () => {
  // Factory functions should not reference any variables from outer scope
  return {
    locale: {
      subscribe: (cb: any) => {
        // Create a new writable store in the factory (not referencing outer scope)
        const store = writable('en');
        const unsubscribe = store.subscribe(cb);
        
        return {
          unsubscribe,
          store // Expose the store for tests to use
        };
      },
      set: vi.fn((value) => {
        // This mock doesn't need to do anything real
      })
    }
  };
});

// Now import the component
import LanguageSwitcher from './LanguageSwitcher.svelte';

describe('LanguageSwitcher component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    
    // Reset mocks before each test
    const { locale } = vi.mocked(import('$lib/i18n'), { partial: true });
    vi.clearAllMocks();
  });
  
  afterEach(() => {
    cleanup();
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

  it('should have proper button styling', () => {
    const { container } = render(LanguageSwitcher);
    
    const buttons = container.querySelectorAll('button');

    // There should be a button with active styling and one with inactive
    expect(buttons.length).toBe(2);
    
    // At least one button should have each class (without relying on specific ordering)
    const buttonClasses = Array.from(buttons).map(b => b.className);
    expect(
      buttonClasses.some(classes => classes.includes('from-red-500 to-red-600 text-white'))
    ).toBe(true);
    
    expect(
      buttonClasses.some(classes => classes.includes('from-zinc-800 to-zinc-700 text-gray-300'))
    ).toBe(true);
  });
});
