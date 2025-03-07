import { describe, it, expect, vi, beforeEach } from 'vitest';
import { pageTitle, metaDescription } from './metadata';

// Mock the translation function more simply 
vi.mock('$lib/i18n', () => {
  return {
    t: {
      subscribe: (cb: Function) => {
        // Simple callback that provides a mock translation function
        cb((key: string) => {
          if (key === 'app.title') return 'Knockout MDE';
          if (key === 'meta.about') return 'About Us';
          if (key === 'meta.contact') return 'Contact';
          if (key === 'app.description') return 'Default app description';
          if (key === 'about.description') return 'About page description';
          return key;
        });
        
        // Return unsubscribe function
        return () => {};
      }
    }
  };
});

describe('metadata utilities', () => {
  describe('pageTitle', () => {
    it('should format title with app name and page title', () => {
      expect(pageTitle('about')).toBe('Knockout MDE - About Us');
      expect(pageTitle('contact')).toBe('Knockout MDE - Contact');
    });

    it('should handle unknown keys by using the key itself', () => {
      expect(pageTitle('unknown')).toBe('Knockout MDE - meta.unknown');
    });
  });

  describe('metaDescription', () => {
    it('should return the translated description for specific key', () => {
      expect(metaDescription('about.description')).toBe('About page description');
    });

    it('should fallback to app description when no key provided', () => {
      expect(metaDescription('')).toBe('Default app description');
    });

    it('should handle unknown keys by returning the key itself', () => {
      expect(metaDescription('unknown.key')).toBe('unknown.key');
    });
  });
});
