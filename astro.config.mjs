import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // ... other configurations ...

  integrations: [
    tailwind(),
    require('@astrojs/functions'),
  ],

  pages: {
    '/netlify/:anything/*': { file: '/src/functions/proxy.js', statusCode: 200 },
  },
});
