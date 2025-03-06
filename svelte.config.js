import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',
      precompress: false,
      strict: true
    }),
    paths: {
      // Set the correct base path for GitHub Pages
      base: process.env.NODE_ENV === 'production' ? '/knockoutmde' : '',
      relative: false
    },
    prerender: {
      handleHttpError: ({ path, referrer, message }) => {
        // Ignore path errors during prerendering
        if (path.startsWith('/')) {
          return;
        }
        
        // Otherwise, throw the error
        throw new Error(message);
      }
    }
  }
};

export default config;