// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    // @ts-expect-error Astro 6 y @tailwindcss/vite resuelven tipos de Vite distintos, pero el build es valido.
    plugins: tailwindcss()
  },

  // Reemplaza con tu usuario y el nombre exacto de tu repositorio
  site: 'https://raulcadierno.github.io',
  base: '/rumbo-norte',
});
