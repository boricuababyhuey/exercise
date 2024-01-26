// astro.config.mjs

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // ... other configurations ...

  integrations: [
    tailwind(),
    {
      name: 'astro/functions', // Name of the integration
    },
  ],

  pages: {
    '/netlify/:anything/*': { file: '/src/functions/proxy.js', statusCode: 200 },
  },
});
