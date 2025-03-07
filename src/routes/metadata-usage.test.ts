import { describe, it, expect, vi } from 'vitest';
import { readable } from 'svelte/store';

// Mock the i18n dependency
vi.mock('$lib/i18n', () => ({
  t: readable((key) => `translated_${key}`),
  _: readable((key) => `translated_${key}`)
}));

// Import metadata functions
import { pageTitle, metaDescription } from '$lib/utils/metadata';

describe('Route metadata usage', () => {
  // Test that page titles are correctly formatted
  it('should format page titles correctly', () => {
    // Test home page title
    const homeTitle = pageTitle('home');
    expect(homeTitle).toContain('home');
    
    // Test about page title
    const aboutTitle = pageTitle('about');
    expect(aboutTitle).toContain('about');
    
    // Test contact page title
    const contactTitle = pageTitle('contact');
    expect(contactTitle).toContain('contact');
  });
  
  // Test that descriptions are handled correctly
  it('should handle page descriptions correctly', () => {
    // Test app description
    const appDesc = metaDescription('app.description');
    expect(appDesc).toContain('app.description');
    
    // Test about page description
    const aboutDesc = metaDescription('about.description');
    expect(aboutDesc).toContain('about.description');
  });
  
  // Test with empty description (should fall back to app description)
  it('should fall back to app description when no specific description provided', () => {
    const fallbackDesc = metaDescription('');
    expect(fallbackDesc).toContain('app.description');
  });
});
