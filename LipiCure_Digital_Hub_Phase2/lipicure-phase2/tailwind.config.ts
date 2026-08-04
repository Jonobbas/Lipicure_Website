import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ocean: {
          950: '#020b14',
          900: '#031525',
          800: '#06243c',
          700: '#0a3654'
        },
        cyanx: '#45e8f2',
        tealx: '#18bfc0'
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif']
      }
    }
  },
  plugins: []
};
export default config;
