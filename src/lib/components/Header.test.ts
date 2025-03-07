import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';

// Set up mocks before importing the component
vi.mock('$app/navigation', () => ({
  goto: vi.fn()
}));

vi.mock('$lib/utils/path', () => ({
  path: vi.fn((url) => `/knockoutmde${url}`)
}));

// Import after mocks are defined
import Header from './Header.svelte';

describe('Header component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    
    // Mock window properties and methods
    Object.defineProperty(window, 'innerWidth', { value: 1024, writable: true });
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
    
    // Mock setTimeout
    vi.stubGlobal('setTimeout', vi.fn((fn) => fn()));
    
    // Reset scroll position
    window.dispatchEvent(new Event('scroll'));
  });
  
  it('should render the logo', () => {
    const { container } = render(Header);
    
    // Find logo sections by class and content
    const logoElements = container.querySelectorAll('.text-2xl, .text-lg');
    
    // Check text content of elements
    expect(Array.from(logoElements).some(el => 
      el.textContent?.includes('KNOCK OUT')
    )).toBe(true);
    
    expect(Array.from(logoElements).some(el => 
      el.textContent?.includes('MDE')
    )).toBe(true);
  });
  
  it('should render navigation links', () => {
    const { container } = render(Header);
    
    // Check for navigation links container
    const nav = container.querySelector('nav');
    expect(nav).toBeTruthy();
    
    // Check that we have at least 5 links (home, about, collections, custom, contact)
    const navLinks = nav?.querySelectorAll('a');
    expect(navLinks?.length).toBeGreaterThanOrEqual(5);
  });
  
  it('should initially have mobile menu closed', () => {
    // Set viewport to mobile width
    Object.defineProperty(window, 'innerWidth', { value: 640 });
    
    const { container } = render(Header);
    
    // Mobile menu should not be visible
    const mobileMenu = container.querySelector('#mobile-menu');
    expect(mobileMenu).toBeFalsy();
  });
  
  it('should toggle mobile menu when hamburger button is clicked', async () => {
    // Set viewport to mobile width
    Object.defineProperty(window, 'innerWidth', { value: 640 });
    
    const { container } = render(Header);
    const user = userEvent.setup();
    
    // Find hamburger button
    const hamburgerButton = container.querySelector('#hamburger-button');
    expect(hamburgerButton).toBeTruthy();
    
    // Click the hamburger button
    if (hamburgerButton) {
      await user.click(hamburgerButton);
    }
    
    // Mobile menu should now be visible
    const mobileMenu = container.querySelector('#mobile-menu');
    expect(mobileMenu).toBeTruthy();
  });
});
