# Knock Out MDE

Official website for Knock Out MDE, a premium boxing apparel and costume design company based in Medellín, Colombia.

## Features

- Built with SvelteKit 2 and Svelte 5
- Responsive design using Tailwind CSS
- Multi-language support (English, Spanish, French) using svelte-i18n
- GitHub Pages deployment
- Basic test structure with Vitest

## Project Structure

- `src/lib/i18n` - Localization files and configuration
- `src/lib/components` - Reusable UI components
- `src/lib/utils` - Utility functions
- `src/routes` - SvelteKit routes and pages
- `src/mocks` - Test mocks for SvelteKit modules
- `src/test-utils.ts` - Custom testing utilities for Svelte 5

## Development Guide for AI Agents

This section provides guidance for AI agents contributing to this project via GitHub APIs without local cloning.

### Exploring the Codebase

When exploring the codebase, start by examining these key files:

1. **Configuration Files**:
   - `package.json` - Project dependencies and scripts
   - `svelte.config.js` - SvelteKit configuration
   - `tsconfig.json` - TypeScript configuration
   - `vite.config.ts` - Vite bundler configuration 

2. **Main Components**:
   - `src/lib/components/Header.svelte`
   - `src/lib/components/Footer.svelte`
   - `src/lib/components/LanguageSwitcher.svelte`

3. **Routes**:
   - `src/routes/+layout.ts` - Main layout configuration
   - `src/routes/+layout.svelte` - Main layout component
   - `src/routes/+page.svelte` - Home page
   - Route directories (`about`, `collections`, etc.)

4. **Utilities**:
   - `src/lib/utils/metadata.ts` - Page metadata utilities
   - `src/lib/utils/path.js` - Path handling utilities

### Svelte 5 Specific Notes

This project uses Svelte 5, which has significant differences from Svelte 4:

1. **Reactive Syntax**:
   - Avoid using `$:` reactive statements as they are not allowed
   - Use modern Svelte 5 reactive syntax instead
   - Use `$effect` for side effects
   - Use `$derived` for derived values

2. **Component Testing Challenges**:
   - Svelte 5 component testing has limitations
   - Direct component instantiation (`new Component()`) is no longer supported
   - We use a simplified testing approach described in the Testing section

### Making Changes

When working with this codebase:

1. **Create dedicated branches** for each feature or fix
2. **Make small, focused commits** rather than large changes
3. **Update tests** alongside code changes
4. **Document API changes** in code comments
5. **Follow the existing code style** and structure

### Testing Strategy

Currently, we have a limited testing setup due to Svelte 5 compatibility issues:

1. **Utility Tests**:
   - Located in `src/lib/utils/*.test.ts`
   - These are fully functional and should be maintained/expanded

2. **Route Tests**:
   - Located in `src/routes/*.test.ts`
   - Focus on testing route configuration and data loading

3. **Component Tests**:
   - Currently limited due to Svelte 5 compatibility
   - Will be expanded when proper Svelte 5 testing tools mature

### CI/CD Pipeline

The project uses GitHub Actions for continuous integration and deployment:

1. **Workflow File**: `.github/workflows/deploy.yml`

2. **Testing Process**:
   - All tests must pass before deployment
   - Run tests locally with `npm test` to verify before pushing

3. **Deployment Process**:
   - Automated deployment to GitHub Pages
   - Only deploys from the `main` branch
   - Deployment happens after successful tests and build

4. **Important Notes**:
   - Never push failing tests to `main`
   - All feature branches should have tests passing before merging
   - Manual deployments can be triggered via GitHub Actions interface

### Important Considerations

1. **Internationalization**:
   - All user-facing strings should use the `$t('key')` format
   - Locale files are in `src/lib/i18n/locales/`
   - New strings should be added to all locale files

2. **Routing**:
   - Uses SvelteKit's file-based routing
   - Trailing slashes are enforced (`trailingSlash: 'always'`)
   - Site is prerendered (`prerender: true`)

3. **GitHub API Constraints**:
   - When evaluating large files, request specific paths rather than entire directories
   - Use targeted API calls to minimize rate limiting
   - Chain edits together in logical, atomic groupings

## Development Commands

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
```

## Deployment

The site is automatically deployed to GitHub Pages using GitHub Actions when changes are pushed to the main branch. The deployment process includes:

1. Running all tests
2. Building the production version
3. Deploying to GitHub Pages

Deployment only occurs if all tests pass and only from the main branch.

## License

Copyright © 2025 Knock Out MDE. All rights reserved.
