import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, getByText, getByRole, cleanup } from './test-utils';

// Create a dummy component for testing
const DummyComponent = {};

describe('Test utilities', () => {
  beforeEach(() => {
    // Reset the document body before each test
    document.body.innerHTML = '';
  });
  
  afterEach(() => {
    // Clean up after each test
    cleanup();
  });
  
  it('render should create a container with a mock component', () => {
    const { container } = render(DummyComponent);
    
    // Check that container is created
    expect(container).toBeTruthy();
    expect(container instanceof HTMLDivElement).toBe(true);
    
    // Check that container is added to document body
    expect(document.body.contains(container)).toBe(true);
    
    // Check that mock component placeholder is created
    const mockComponent = container.querySelector('.mock-svelte-component');
    expect(mockComponent).toBeTruthy();
  });
  
  it('getByText should find elements by text content', () => {
    // Create a test container with some elements
    const { container } = render(DummyComponent);
    
    // Add some elements with text
    const div1 = document.createElement('div');
    div1.textContent = 'Hello World';
    container.appendChild(div1);
    
    const div2 = document.createElement('div');
    div2.textContent = 'Test Text';
    container.appendChild(div2);
    
    // Test getByText function
    const found1 = getByText(container, 'Hello World');
    const found2 = getByText(container, 'Test Text');
    const notFound = getByText(container, 'Not There');
    
    expect(found1).toBe(div1);
    expect(found2).toBe(div2);
    expect(notFound).toBeUndefined();
  });
  
  it('getByRole should find elements by role and accessible name', () => {
    // Create a test container with some elements
    const { container } = render(DummyComponent);
    
    // Add some elements with roles
    const button1 = document.createElement('button');
    button1.setAttribute('role', 'button');
    button1.setAttribute('aria-label', 'Submit');
    container.appendChild(button1);
    
    const button2 = document.createElement('button');
    button2.setAttribute('role', 'button');
    button2.textContent = 'Cancel';
    container.appendChild(button2);
    
    // Test getByRole function
    const foundByRole = getByRole(container, 'button');
    const foundByName = getByRole(container, 'button', { name: 'Submit' });
    const foundByContent = getByRole(container, 'button', { name: 'Cancel' });
    
    expect(foundByRole).toBe(button1); // First button found
    expect(foundByName).toBe(button1);
    expect(foundByContent).toBe(button2);
  });
  
  it('cleanup should remove all elements from document body', () => {
    // Create some test containers
    render(DummyComponent);
    render(DummyComponent);
    
    // Check that document body has children
    expect(document.body.children.length).toBeGreaterThan(0);
    
    // Run cleanup
    cleanup();
    
    // Check that document body is empty
    expect(document.body.children.length).toBe(0);
  });
});
