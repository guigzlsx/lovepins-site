import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://lovepins.app',
  trailingSlash: 'ignore',
  build: { format: 'preserve' },
});
