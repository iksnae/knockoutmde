import { describe, it, expect } from 'vitest';
import { prerender, trailingSlash } from './+layout';

describe('Layout configuration', () => {
  it('should have prerender enabled', () => {
    expect(prerender).toBe(true);
  });
  
  it('should always use trailing slashes', () => {
    expect(trailingSlash).toBe('always');
  });
});
