import { describe, it, expect, vi, beforeAll, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import LanguageSwitcher from './LanguageSwitcher.svelte';
import { writable } from 'svelte/store';

// Make sure mocks are set up before importing components
const mockLocale = writable('en'); 

// Mock the i18n module 
vi.mock('$lib/i18n', () => {
  return {
    locale: {
      subscribe: mockLocale.subscribe,
      set: vi.fn((value) => mockLocale.set(value))
    }
  };
});

describe('LanguageSwitcher', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockLocale.set('en');
  });

  it('should render language buttons', () => {
    render(LanguageSwitcher);
    
    // Check if both language buttons are present
    expect(screen.getByText('EN')).toBeInTheDocument();
    expect(screen.getByText('ES')).toBeInTheDocument();
  });

  it('should change locale when a language button is clicked', async () => {
    const { locale } = await import('$lib/i18n');
    const user = userEvent.setup();
    
    render(LanguageSwitcher);
    
    // Click the Spanish language button
    const esButton = screen.getByText('ES');
    await user.click(esButton);
    
    // Verify that locale.set was called with 'es'
    expect(locale.set).toHaveBeenCalledWith('es');
    
    // Update the mock locale value to simulate the change
    mockLocale.set('es');
    
    // Re-render the component to reflect the state change
    render(LanguageSwitcher);
    
    // Click the English language button
    const enButton = screen.getByText('EN');
    await user.click(enButton);
    
    // Verify that locale.set was called with 'en'
    expect(locale.set).toHaveBeenCalledWith('en');
  });

  it('should apply different styles to active and inactive languages', () => {
    const { container } = render(LanguageSwitcher);
    
    // Find the EN button (should be active in our mock)
    const enButton = screen.getByText('EN');
    
    // Find the ES button (should be inactive in our mock)
    const esButton = screen.getByText('ES');
    
    // Check that the active button has the correct styling class
    expect(enButton.className).toContain('from-red-500 to-red-600 text-white');
    
    // Check that the inactive button has the correct styling class
    expect(esButton.className).toContain('from-zinc-800 to-zinc-700 text-gray-300');
    
    // Now let's change the locale and verify styling updates
    mockLocale.set('es');
    
    // Re-render to apply the updated locale
    const { container: updatedContainer } = render(LanguageSwitcher);
    
    const enButtonAfter = screen.getAllByText('EN')[1]; // Get the second instance after re-render
    const esButtonAfter = screen.getAllByText('ES')[1]; // Get the second instance after re-render
    
    // Check that style classes have flipped
    expect(esButtonAfter.className).toContain('from-red-500 to-red-600 text-white');
    expect(enButtonAfter.className).toContain('from-zinc-800 to-zinc-700 text-gray-300');
  });
});
