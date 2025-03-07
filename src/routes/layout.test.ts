import { describe, it, expect } from 'vitest';

describe('Layout configuration', () => {
  it('should export the correct prerender and trailingSlash values', async () => {
    // Import the layout configuration
    const layoutConfig = await import('./+layout');
    
    // Test the prerender configuration
    expect(layoutConfig.prerender).toBe(true);
    
    // Test the trailingSlash configuration
    expect(layoutConfig.trailingSlash).toBe('always');
  });
});
