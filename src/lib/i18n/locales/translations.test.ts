import { describe, it, expect } from 'vitest';
import en from './en.json';
import es from './es.json';

// Helper function to check if an object has the same structure (keys) as another
function hasSameStructure(obj1: any, obj2: any, path = ''): string[] {
  const errors: string[] = [];
  
  // Check keys in obj1 that might be missing in obj2
  for (const key of Object.keys(obj1)) {
    const newPath = path ? `${path}.${key}` : key;
    
    if (!(key in obj2)) {
      errors.push(`Key "${newPath}" exists in first object but not in second object`);
      continue;
    }
    
    // If both are objects (but not arrays), check recursively
    if (
      typeof obj1[key] === 'object' && 
      typeof obj2[key] === 'object' &&
      !Array.isArray(obj1[key]) && 
      !Array.isArray(obj2[key])
    ) {
      errors.push(...hasSameStructure(obj1[key], obj2[key], newPath));
    }
  }
  
  // Check keys in obj2 that might be missing in obj1
  for (const key of Object.keys(obj2)) {
    const newPath = path ? `${path}.${key}` : key;
    if (!(key in obj1)) {
      errors.push(`Key "${newPath}" exists in second object but not in first object`);
    }
  }
  
  return errors;
}

describe('Translation files', () => {
  it('should have the same structure across all languages', () => {
    const enToEsErrors = hasSameStructure(en, es);
    const esToEnErrors = hasSameStructure(es, en);
    
    // Combine all errors
    const allErrors = [...enToEsErrors, ...esToEnErrors];
    
    // Expect no errors (i.e., all keys present in both languages)
    expect(allErrors).toEqual([]);
  });
  
  it('should have app title that matches across languages', () => {
    // The app title should be the same in all languages
    expect(en.app.title).toBe(es.app.title);
  });
  
  it('should have all required navigation items in each language', () => {
    // Check that critical navigation items exist in both languages
    const navItems = ['home', 'about', 'collections', 'custom', 'contact'];
    
    for (const item of navItems) {
      expect(en.nav[item]).toBeDefined();
      expect(es.nav[item]).toBeDefined();
    }
  });
  
  it('should have consistent address information across languages', () => {
    // The address should be the same in all languages
    expect(en.contact.address.line1).toBe(es.contact.address.line1);
    expect(en.contact.address.line2).toBe(es.contact.address.line2);
    expect(en.contact.address.line3).toBe(es.contact.address.line3);
  });
  
  it('should have email and contact information that matches across languages', () => {
    // Email and phone formats should be consistent
    expect(en.contact.phone.split(':')[1].trim()).toBe(
      es.contact.phone.split(':')[1].trim()
    );
    
    expect(en.contact.email.split(':')[1].trim()).toBe(
      es.contact.email.split(':')[1].trim()
    );
    
    expect(en.contact.instagram.split(':')[1].trim()).toBe(
      es.contact.instagram.split(':')[1].trim()
    );
  });
});
