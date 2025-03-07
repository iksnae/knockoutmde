import { describe, it, expect, vi, beforeEach } from 'vitest';
import { pageTitle, metaDescription } from '$lib/utils/metadata';

// Mock the i18n module
vi.mock('$lib/i18n', () => {
  return {
    t: {
      subscribe: (cb: Function) => {
        // Simple callback that provides a mock translation function
        cb((key: string) => {
          // Route-specific meta translations
          if (key === 'meta.home') return 'Home';
          if (key === 'meta.about') return 'About Us';
          if (key === 'meta.collections') return 'Collections';
          if (key === 'meta.custom') return 'Custom Orders';
          if (key === 'meta.contact') return 'Contact Us';
          
          // App-level translations
          if (key === 'app.title') return 'Knock Out MDE';
          if (key === 'app.description') return 'Premium boxing apparel from Medellín';
          
          // Page-specific descriptions
          if (key === 'home.description') return 'Premium boxing apparel and costume design from Medellín, Colombia';
          if (key === 'about.description') return 'Learn about our story and mission at Knock Out MDE';
          if (key === 'collections.description') return 'Explore our latest boxing apparel collections';
          if (key === 'custom.description') return 'Request custom boxing apparel designs';
          if (key === 'contact.description') return 'Get in touch with our team';
          
          return key;
        });
        
        // Return unsubscribe function
        return () => {};
      }
    }
  };
});

describe('Route metadata usage', () => {
  describe('Page titles', () => {
    it('should format the home page title correctly', () => {
      expect(pageTitle('home')).toBe('Knock Out MDE - Home');
    });
    
    it('should format the about page title correctly', () => {
      expect(pageTitle('about')).toBe('Knock Out MDE - About Us');
    });
    
    it('should format the collections page title correctly', () => {
      expect(pageTitle('collections')).toBe('Knock Out MDE - Collections');
    });
    
    it('should format the custom page title correctly', () => {
      expect(pageTitle('custom')).toBe('Knock Out MDE - Custom Orders');
    });
    
    it('should format the contact page title correctly', () => {
      expect(pageTitle('contact')).toBe('Knock Out MDE - Contact Us');
    });
  });
  
  describe('Page descriptions', () => {
    it('should return the correct home page description', () => {
      expect(metaDescription('home.description')).toBe('Premium boxing apparel and costume design from Medellín, Colombia');
    });
    
    it('should return the correct about page description', () => {
      expect(metaDescription('about.description')).toBe('Learn about our story and mission at Knock Out MDE');
    });
    
    it('should return the correct collections page description', () => {
      expect(metaDescription('collections.description')).toBe('Explore our latest boxing apparel collections');
    });
    
    it('should return the correct custom page description', () => {
      expect(metaDescription('custom.description')).toBe('Request custom boxing apparel designs');
    });
    
    it('should return the correct contact page description', () => {
      expect(metaDescription('contact.description')).toBe('Get in touch with our team');
    });
    
    it('should fall back to the app description when no key is provided', () => {
      expect(metaDescription('')).toBe('Premium boxing apparel from Medellín');
    });
  });
});
