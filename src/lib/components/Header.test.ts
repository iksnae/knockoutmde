import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import Header from './Header.svelte';

// Import needs to happen after mocks are set up
vi.mock('$app/navigation', () => ({
  goto: vi.fn()
}));

vi.mock('$lib/utils/path', () => ({
  path: vi.fn((url) => `/knockoutmde${url}`)
}));

describe('Header component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    
    // Mock DOM properties and methods
    Object.defineProperty(window, 'innerWidth', { value: 1024, writable: true });
    window.scrollY = 0;
    
    vi.stubGlobal('setTimeout', vi.fn((fn) => fn()));
    
    // Reset scroll position
    const scrollEvent = new Event('scroll');
    window.dispatchEvent(scrollEvent);
  });
  
  it('should render the logo', () => {
    render(Header);
    
    // Check for logo text
    expect(screen.getByText('KNOCK OUT')).toBeInTheDocument();
    expect(screen.getByText('MDE')).toBeInTheDocument();
  });
  
  it('should render navigation links', () => {
    render(Header);
    
    // All translations should use the mock values from svelte-i18n
    expect(screen.getByText('translated_nav.home')).toBeInTheDocument();
    expect(screen.getByText('translated_nav.about')).toBeInTheDocument();
    expect(screen.getByText('translated_nav.collections')).toBeInTheDocument();
    expect(screen.getByText('translated_nav.custom')).toBeInTheDocument();
    expect(screen.getByText('translated_nav.contact')).toBeInTheDocument();
  });
  
  it('should initially have mobile menu closed', () => {
    // Set viewport to mobile width
    Object.defineProperty(window, 'innerWidth', { value: 640 });
    
    const { container } = render(Header);
    
    // Check that mobile menu is not visible
    expect(container.querySelector('#mobile-menu')).not.toBeInTheDocument();
  });
  
  it('should toggle mobile menu when hamburger button is clicked', async () => {
    // Set viewport to mobile width
    Object.defineProperty(window, 'innerWidth', { value: 640 });
    
    const { container } = render(Header);
    const user = userEvent.setup();
    
    // Get hamburger button
    const hamburgerButton = container.querySelector('#hamburger-button');
    expect(hamburgerButton).toBeTruthy();
    
    // Click to open mobile menu
    if (hamburgerButton) {
      await user.click(hamburgerButton);
    }
    
    // Check that mobile menu is now visible
    const mobileMenu = container.querySelector('#mobile-menu');
    expect(mobileMenu).toBeInTheDocument();
  });
});
