import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';
import type { Config } from 'tailwindcss';

export default {
  content: ['**/*.vue'],
  darkMode: 'class',
  theme: {},
  plugins: [typography, forms],
} satisfies Config;
