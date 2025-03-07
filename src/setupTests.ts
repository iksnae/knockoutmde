import '@testing-library/jest-dom';
import { vi } from 'vitest';
import { readable } from 'svelte/store';

// We don't need to mock these modules here anymore as we're using the mock files
// in the src/mocks directory that are resolved via the vitest.config.ts aliases
