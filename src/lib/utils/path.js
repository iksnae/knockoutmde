import { base } from '$app/paths';

/**
 * Creates a proper URL path with the base path prepended
 * @param {string} path - The path to navigate to, without the base
 * @returns {string} - The full path including the base
 */
export function path(path) {
  // If the path already starts with the base, return it as is
  if (path.startsWith(base)) {
    return path;
  }
  
  // Make sure the path starts with a / but doesn't have multiple slashes
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // Return the combined path
  return `${base}${normalizedPath}`;
}