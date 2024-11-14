import { type Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    '{routes,islands,components,stories}/**/*.{ts,tsx,js,jsx}',
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(30deg, rgba(190, 37, 228, 1), rgba(0, 0, 255, 0))',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        'body': { overflow: 'hidden' },
      });
    }),
  ],
} satisfies Config;
