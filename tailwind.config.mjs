/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        // Definimos "font-display" para los títulos de aventura
				display: ['Syne', 'sans-serif'],
				// Definimos "font-sans" para el cuerpo de texto profesional
				sans: ['"Plus Jakarta Sans Variable"', 'sans-serif'],
      },
      colors: {
        'nomad-primary': '#2D3436',
        'nomad-bg': '#FDFDFD',
        'nomad-secondary': '#F5EFE8',
        'nomad-cta': '#C4A484',
        'nomad-cta-hover': '#B39373',
        'nomad-hover': '#B39373',
        'nomad-text-main': '#2D3436',
        'nomad-text-muted': '#6B7280',
        brand: {
          bg: 'var(--color-bg)',
          primary: 'var(--color-primary)',
          secondary: 'var(--color-secondary)',
          cta: 'var(--color-cta)',
          'link-hover': 'var(--color-link-hover)',
          text: 'var(--color-text)',
          'text-main': 'var(--color-text-main)',
          'text-muted': 'var(--color-text-muted)'
        }
      }
    }
  },
  plugins: []
};
