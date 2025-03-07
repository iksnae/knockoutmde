import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import LanguageSwitcher from './LanguageSwitcher.svelte';
import { readable, writable } from 'svelte/store';

// Mock the i18n module
vi.mock('$lib/i18n', () => {
  const localeMock = writable('en');
  return {
    locale: {
      ...localeMock,
      // Add a spy to the set method
      set: vi.fn((value) => localeMock.set(value))
    },
    // Mock the $ prefix access
    $locale: 'en'
  };
});

describe('LanguageSwitcher', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render language buttons', () => {
    render(LanguageSwitcher);
    
    // Check if both language buttons are present
    expect(screen.getByText('EN')).toBeInTheDocument();
    expect(screen.getByText('ES')).toBeInTheDocument();
  });

  it('should call changeLocale when a language button is clicked', async () => {
    const { locale } = await import('$lib/i18n');
    const user = userEvent.setup();
    
    render(LanguageSwitcher);
    
    // Click the Spanish language button
    const esButton = screen.getByText('ES');
    await user.click(esButton);
    
    // Verify that locale.set was called with 'es'
    expect(locale.set).toHaveBeenCalledWith('es');
    
    // Click the English language button
    const enButton = screen.getByText('EN');
    await user.click(enButton);
    
    // Verify that locale.set was called with 'en'
    expect(locale.set).toHaveBeenCalledWith('en');
  });

  it('should apply different styles to active and inactive languages', () => {
    const { container } = render(LanguageSwitcher);
    
    // In our mock, 'en' is the active locale
    const buttons = container.querySelectorAll('button');
    
    // Find the EN button (should be active)
    const enButton = screen.getByText('EN');
    // Find the ES button (should be inactive)
    const esButton = screen.getByText('ES');
    
    // Check that the active button has the correct styling class
    expect(enButton.className).toContain('from-red-500 to-red-600 text-white');
    
    // Check that the inactive button has the correct styling class
    expect(esButton.className).toContain('from-zinc-800 to-zinc-700 text-gray-300');
  });
});
