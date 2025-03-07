import { describe, it, expect, vi, beforeEach } from 'vitest';
import userEvent from '@testing-library/user-event';
import Header from './Header.svelte';

// Set up mocks before importing the component
vi.mock('$app/navigation', () => ({
  goto: vi.fn()
}));

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
    
    // Reset the DOM between tests
    document.body.innerHTML = '';
  });
  
  it('should render the logo', () => {
    const { container } = renderComponent(Header);
    
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
    const { container } = renderComponent(Header);
    
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
    
    const { container } = renderComponent(Header);
    
    // Mobile menu should not be visible
    const mobileMenu = container.querySelector('#mobile-menu');
    expect(mobileMenu).toBeFalsy();
  });
  
  it('should toggle mobile menu when hamburger button is clicked', async () => {
    // Set viewport to mobile width
    Object.defineProperty(window, 'innerWidth', { value: 640 });
    
    const { container } = renderComponent(Header);
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
