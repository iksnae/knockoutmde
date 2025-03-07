# Knock Out MDE

Official website for Knock Out MDE, a premium boxing apparel and costume design company based in Medellín, Colombia.

## Features

- Built with SvelteKit 2 and Svelte 5
- Responsive design using Tailwind CSS
- Multi-language support (English, Spanish, French) using svelte-i18n
- GitHub Pages deployment
- Comprehensive test coverage with Vitest

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

## Testing

The project uses Vitest for unit and component testing with custom testing utilities for Svelte 5 compatibility. The test coverage includes:

- **Utilities**: Tests for path handling and metadata utilities
- **i18n Module**: Tests for localization setup and functionality
- **Components**: Tests for core UI components
  - Header
  - Footer
  - LanguageSwitcher

### Svelte 5 Testing Notes

Svelte 5 has introduced breaking changes to component instantiation. Our approach:

1. Use `createRoot` instead of `new Component()` to instantiate components
2. Handle hoisting issues in `vi.mock()` by using factory functions without referencing outer variables
3. Use a custom test utilities (`src/test-utils.ts`) that work with Svelte 5

```typescript
// Example for mocking with hoisting consideration
vi.mock('$lib/i18n', () => {
  // Don't reference variables from the outer scope in this factory function
  return {
    locale: {
      subscribe: (cb) => { ... },
      set: vi.fn()
    }
  };
});

// Always import components AFTER defining mocks
import MyComponent from './MyComponent.svelte';

// Use createRoot-based render function
import { render } from '../../test-utils';

it('should render correctly', () => {
  const { container } = render(MyComponent);
  // Test against the container
});
```

## Deployment

The site is automatically deployed to GitHub Pages using GitHub Actions when changes are pushed to the main branch.

## License

Copyright © 2025 Knock Out MDE. All rights reserved.
