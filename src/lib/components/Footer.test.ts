import { describe, it, expect, vi, beforeEach } from 'vitest';
import { compile } from 'svelte/compiler';
import Footer from './Footer.svelte';

// Mock dependencies before importing the component
vi.mock('$lib/utils/path', () => ({
  path: vi.fn((url) => `/knockoutmde${url}`)
}));

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

describe('Footer component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    
    // Mock the Date constructor to return a consistent date
    const mockDate = new Date('2025-01-01');
    vi.spyOn(global, 'Date').mockImplementation(() => mockDate);

    // Reset the DOM between tests
    document.body.innerHTML = '';
  });
  
  it('should render the logo', () => {
    const { container } = renderComponent(Footer);
    
    // Look for logo elements
    const logoElements = container.querySelectorAll('.bg-gradient-to-r');
    
    // Check if any element contains the text
    expect(Array.from(logoElements).some(el => 
      el.textContent?.includes('KNOCK OUT')
    )).toBe(true);
    
    // Find the MDE text
    const mdeElement = container.querySelectorAll('.text-white');
    expect(Array.from(mdeElement).some(el => 
      el.textContent?.includes('MDE')
    )).toBe(true);
  });
  
  it('should render the footer sections', () => {
    const { container } = renderComponent(Footer);
    
    // Look for section headings
    const headings = container.querySelectorAll('h3');
    expect(headings.length).toBeGreaterThanOrEqual(3);
  });
  
  it('should render social media icons with proper accessibility', () => {
    const { container } = renderComponent(Footer);
    
    // Find social media links
    const socialLinks = container.querySelectorAll('a[href="#"]');
    expect(socialLinks.length).toBeGreaterThanOrEqual(3);
    
    // Check for screen reader text 
    const srElements = container.querySelectorAll('.sr-only');
    
    // Check that we have screen reader elements for accessibility
    expect(srElements.length).toBeGreaterThanOrEqual(3);
    
    // Check for at least one of the expected sr-only text
    const srTexts = Array.from(srElements).map(el => el.textContent);
    expect(srTexts.some(text => 
      text === 'Instagram' || text === 'Email' || text === 'WhatsApp'
    )).toBe(true);
  });
  
  it('should render the address information', () => {
    const { container } = renderComponent(Footer);
    
    // Check for address content
    const footerText = container.textContent;
    
    expect(footerText).toContain('Calle 10 #30-50');
    expect(footerText).toContain('El Poblado, Medellín');
    expect(footerText).toContain('Colombia');
  });
  
  it('should display the current year in the copyright text', () => {
    const { container } = renderComponent(Footer);
    
    // Get the current year from our mocked date
    const year = new Date().getFullYear();
    
    // Check for the copyright text
    const copyrightElement = container.querySelector('.text-gray-400');
    expect(copyrightElement?.textContent).toContain(`© ${year} Knock Out MDE`);
  });
});
