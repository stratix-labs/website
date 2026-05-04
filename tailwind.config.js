/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: 'var(--teal)',
          700: 'var(--teal-700)',
          600: 'var(--teal-600)',
        },
        orange: {
          DEFAULT: 'var(--orange)',
          600: 'var(--orange-600)',
        },
        cream: 'var(--cream)',
        sand: 'var(--sand)',
        snow: 'var(--white)',
        ink: 'var(--ink)',
      },
      fontFamily: {
        display: ['"Montserrat"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        serif: ['"Instrument Serif"', '"Times New Roman"', 'serif'],
      },
      maxWidth: { site: 'var(--max)' },
      borderRadius: { site: 'var(--radius)' },
    },
  },
  plugins: [],
};

