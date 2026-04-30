/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-nomad)'],
        serif: ['var(--font-nomad)'],
        mono: ['var(--font-nomad)']
      },
      colors: {
        'nomad-primary': '#0B1121',
        'nomad-bg': '#101729',
        'nomad-secondary': '#1E293B',
        'nomad-cta': '#2563EB',
        'nomad-hover': '#3B82F6',
        'nomad-text-main': '#FFFFFF',
        'nomad-text-muted': '#94A3B8',
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
