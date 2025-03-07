import { describe, it, expect, vi, beforeEach } from 'vitest';
import userEvent from '@testing-library/user-event';
import { writable } from 'svelte/store';

// Create locale store for mocking
const mockLocale = writable('en'); 

// Mock the i18n module before importing the component
vi.mock('$lib/i18n', () => {
  return {
    locale: {
      subscribe: mockLocale.subscribe,
      set: vi.fn((value) => mockLocale.set(value))
    }
  };
});

// Import after mocks
import LanguageSwitcher from './LanguageSwitcher.svelte';

// Custom render helper for Svelte 5 components
function renderComponent(Component: any) {
  // Create a container
  const container = document.createElement('div');
  document.body.appendChild(container);

  // Instantiate the component
  new Component({
    target: container
  });

  return { container };
}

describe('LanguageSwitcher component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockLocale.set('en');
    
    // Reset the DOM between tests
    document.body.innerHTML = '';
  });

  it('should render language buttons', () => {
    const { container } = renderComponent(LanguageSwitcher);
    
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
    
    const { container } = renderComponent(LanguageSwitcher);
    
    // Find buttons by text
    const buttons = container.querySelectorAll('button');
    const esButton = buttons[0]; // Spanish button
    
    // Click the Spanish button
    await user.click(esButton);
    
    // Check that locale.set was called with 'es'
    expect(locale.set).toHaveBeenCalledWith('es');
  });

  it('should apply different styles to active and inactive languages', async () => {
    // First render with 'en' active
    const { container } = renderComponent(LanguageSwitcher);
    
    const buttons = container.querySelectorAll('button');
    const esButton = buttons[0];
    const enButton = buttons[1];
    
    // Check English button has active class
    expect(enButton.className).toContain('from-red-500 to-red-600 text-white');
    // Check Spanish button has inactive class
    expect(esButton.className).toContain('from-zinc-800 to-zinc-700 text-gray-300');
    
    // Change locale to Spanish
    mockLocale.set('es');
    
    // Reset and re-render to reflect the change
    document.body.innerHTML = '';
    const { container: updatedContainer } = renderComponent(LanguageSwitcher);
    
    const updatedButtons = updatedContainer.querySelectorAll('button');
    const updatedEsButton = updatedButtons[0];
    const updatedEnButton = updatedButtons[1];
    
    // Now Spanish should be active
    expect(updatedEsButton.className).toContain('from-red-500 to-red-600 text-white');
    // And English should be inactive
    expect(updatedEnButton.className).toContain('from-zinc-800 to-zinc-700 text-gray-300');
  });
});
