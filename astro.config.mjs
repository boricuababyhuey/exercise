import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // ... other configurations ...

  integrations: [tailwind()],

  pages: {
    '/netlify/:anything/*': { src: '/.astro/functions/proxy.js', statusCode: 200 },
  },
});
