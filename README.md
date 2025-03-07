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

## Testing

The project uses Vitest and Testing Library (with Svelte 5 support) for unit and component testing. The test coverage includes:

- **Utilities**: Tests for path handling and metadata utilities
- **i18n Module**: Tests for localization setup and functionality
- **Components**: Tests for core UI components
  - Header
  - Footer
  - LanguageSwitcher

To add more tests, follow these guidelines:

1. Use the `@testing-library/svelte-svelte5` package for testing Svelte 5 components
2. Always define vi.mock() before importing the modules you're testing
3. Use the appropriate mock modules from `src/mocks` when testing code that depends on SvelteKit modules
4. Write tests that use DOM queries directly for more reliable component testing
5. Group related tests using describe blocks
6. Use test doubles (mocks and spies) for external dependencies

### Common Testing Patterns

```typescript
// Always mock dependencies before importing tested modules
vi.mock('$lib/i18n', () => ({
  // Mock implementation
}));

// Import after mocks
import { ComponentToTest } from './component';

describe('Component tests', () => {
  it('should do something', () => {
    const { container } = render(ComponentToTest);
    // Test using container queries
  });
});
```

## Deployment

The site is automatically deployed to GitHub Pages using GitHub Actions when changes are pushed to the main branch.

## License

Copyright © 2025 Knock Out MDE. All rights reserved.
