/**
 * Test utilities for Svelte 5 components
 */

/**
 * Custom render function for Svelte 5 components
 */
export function render(Component: any, props = {}) {
  // Create a container
  const container = document.createElement('div');
  document.body.appendChild(container);

  // Instantiate the component
  new Component({
    target: container,
    props
  });

  return { container };
}

/**
 * Find elements by text content
 */
export function getByText(container: HTMLElement, text: string) {
  return Array.from(container.querySelectorAll('*')).find(
    el => el.textContent === text
  );
}

/**
 * Query for elements by their accessible name
 */
export function getByRole(container: HTMLElement, role: string, options: { name?: string } = {}) {
  const elements = container.querySelectorAll(`[role="${role}"]`);
  
  if (options.name) {
    return Array.from(elements).find(
      el => el.getAttribute('aria-label') === options.name || 
           el.textContent === options.name
    );
  }
  
  return elements[0];
}

/**
 * Clean up the DOM after tests
 */
export function cleanup() {
  document.body.innerHTML = '';
}
