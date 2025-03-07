import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Footer from './Footer.svelte';

// Mock path utility
vi.mock('$lib/utils/path', () => ({
  path: vi.fn((url) => `/knockoutmde${url}`)
}));

describe('Footer component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    
    // Mock the Date constructor to return a consistent date for testing
    const mockDate = new Date('2025-01-01');
    vi.spyOn(global, 'Date').mockImplementation(() => mockDate);
  });
  
  it('should render the logo', () => {
    render(Footer);
    
    // Check logo text is rendered
    expect(screen.getByText('KNOCK OUT')).toBeInTheDocument();
    expect(screen.getByText('MDE')).toBeInTheDocument();
  });
  
  it('should render the footer sections', () => {
    render(Footer);
    
    // Check for section headings (using translated mock values)
    expect(screen.getByText('translated_footer.connect')).toBeInTheDocument();
    expect(screen.getByText('translated_footer.visitUs')).toBeInTheDocument();
  });
  
  it('should render social media icons with proper accessibility', () => {
    render(Footer);
    
    // Check for social media icons with screen reader text
    expect(screen.getByText('Instagram')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('WhatsApp')).toBeInTheDocument();
  });
  
  it('should render the address information', () => {
    render(Footer);
    
    // Check for address components
    expect(screen.getByText('Calle 10 #30-50')).toBeInTheDocument();
    expect(screen.getByText('El Poblado, Medellín')).toBeInTheDocument();
    expect(screen.getByText('Colombia')).toBeInTheDocument();
  });
  
  it('should display the current year in the copyright text', () => {
    render(Footer);
    
    // Check for copyright text with the mocked year
    const year = new Date().getFullYear();
    expect(screen.getByText(`© ${year} Knock Out MDE. translated_footer.allRights`)).toBeInTheDocument();
  });
});
