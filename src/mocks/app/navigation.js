import { vi } from 'vitest';

/**
 * Mock for $app/navigation
 */
export const goto = vi.fn();
export const invalidate = vi.fn();
export const preloadData = vi.fn();
export const preloadCode = vi.fn();
