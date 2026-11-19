import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://davidhjolley.com',
  trailingSlash: 'never',
  build: { format: 'file' },
});
