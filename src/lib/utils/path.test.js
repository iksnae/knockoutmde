import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock the $app/paths module before importing the path utility
vi.mock('$app/paths', () => ({
  base: '/knockoutmde'
}));

// Import after mocking
import { path } from './path';

describe('path utility', () => {
  it('should add base path to a simple path', () => {
    expect(path('about')).toBe('/knockoutmde/about');
  });

  it('should add base path to a path with leading slash', () => {
    expect(path('/about')).toBe('/knockoutmde/about');
  });

  it('should not modify path that already includes base path', () => {
    expect(path('/knockoutmde/about')).toBe('/knockoutmde/about');
  });

  it('should handle empty paths correctly', () => {
    expect(path('')).toBe('/knockoutmde/');
    expect(path('/')).toBe('/knockoutmde/');
  });
});
