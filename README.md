# Knock Out MDE

Official website for Knock Out MDE, a premium boxing apparel and costume design company based in Medellín, Colombia.

## Features

- Built with SvelteKit 2 and Svelte 5
- Responsive design using Tailwind CSS
- Multi-language support (English, Spanish, French) using svelte-i18n
- GitHub Pages deployment
- Basic test structure with Vitest (with Svelte 5 limitations)

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm test

# Run tests with watch mode
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

## Project Structure

- `src/lib/i18n` - Localization files and configuration
- `src/lib/components` - Reusable UI components
- `src/routes` - SvelteKit routes and pages
- `src/mocks` - Test mocks for SvelteKit modules
- `src/test-utils.ts` - Custom testing utilities for Svelte 5

## Testing Notes

### Current Testing Limitations with Svelte 5

Svelte 5 introduces significant API changes that make traditional component testing difficult:

1. The standard component API has changed completely, and `new Component()` is no longer supported
2. Direct DOM rendering of components (even with the internal API) is challenging in test environments
3. As of the time of writing, there isn't a fully compatible testing library for Svelte 5 components

Our current approach uses a simplified testing strategy:
- We've set up the basic test infrastructure and mocks for SvelteKit modules
- We're using a simplified DOM-based testing approach that verifies test setup works
- We can test utility functions and module mocks fully
- Component tests are currently limited to checking test framework functionality

### Testing Structure

The current test suite includes:
- **Utilities**: Full tests for path handling and metadata utilities
- **i18n Module**: Tests for localization setup and functionality
- **Components**: Framework tests for core UI components
  - Header
  - Footer
  - LanguageSwitcher

### Future Testing Improvements

As Svelte 5 testing tools mature, we plan to:
1. Implement proper component rendering and testing
2. Add interaction testing for UI components
3. Increase overall test coverage
4. Potentially add end-to-end tests using Playwright or Cypress

### Mock Setup Example

```typescript
// Example for mocking with hoisting consideration
vi.mock('$lib/i18n', () => {
  // Factory functions should not reference any variables from outer scope
  return {
    locale: {
      subscribe: (cb) => {
        cb('en');
        return { unsubscribe: () => {} };
      },
      set: vi.fn()
    }
  };
});

// Always import components AFTER defining mocks
import MyComponent from './MyComponent.svelte';

// Use the simplified render function from test-utils
import { render, cleanup } from '../../test-utils';

describe('Component tests', () => {
  afterEach(() => {
    cleanup();
  });

  it('should work with the test setup', () => {
    const { container } = render(MyComponent);
    expect(container).toBeTruthy();
  });
});
```

## Deployment

The site is automatically deployed to GitHub Pages using GitHub Actions when changes are pushed to the main branch.

## License

Copyright © 2025 Knock Out MDE. All rights reserved.
