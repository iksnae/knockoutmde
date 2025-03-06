#!/bin/bash

# Clean up build artifacts
rm -rf .svelte-kit
rm -rf build
rm -rf node_modules

# Remove the problematic +layout.ts file
rm -f src/routes/+layout.ts

# Clean npm cache
npm cache clean --force

# Reinstall dependencies
npm install

echo "Cleanup complete! Now you can run 'npm run build' again."
