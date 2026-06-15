/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        forest: {
          50:  '#E6F1FB',
          100: '#B5D4F4',
          200: '#85B7EB',
          300: '#378ADD',
          400: '#2272C3',
          500: '#185FA5',
          600: '#1d6fb5',
          700: '#0C447C',
          800: '#063263',
          900: '#042C53',
          950: '#021A33',
        },
        ivory: {
          50:  '#fefdf8',
          100: '#fdf9ed',
          200: '#fbf3d5',
          300: '#f7e9b2',
          400: '#f2da85',
          500: '#ecc84e',
          600: '#d4a822',
        },
        gold: {
          300: '#f0c87a',
          400: '#e8b84d',
          500: '#d4971e',
          600: '#b87d12',
          700: '#8f5f0a',
        },
        ink: {
          900: '#021A33',
          800: '#042C53',
          700: '#063263',
        }
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.05' }],
        '8xl': ['6rem',   { lineHeight: '1' }],
        '9xl': ['8rem',   { lineHeight: '0.95' }],
      },
      animation: {
        'float':        'float 6s ease-in-out infinite',
        'float-slow':   'float 9s ease-in-out infinite',
        'float-slower': 'float 12s ease-in-out infinite',
        'ink-spread':   'inkSpread 1.2s ease-out forwards',
        'fade-up':      'fadeUp 0.8s ease-out forwards',
        'shimmer':      'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%':       { transform: 'translateY(-14px) rotate(2deg)' },
          '66%':       { transform: 'translateY(-8px) rotate(-1deg)' },
        },
        inkSpread: {
          '0%':   { opacity: '0', transform: 'scale(0.85) translateY(12px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition:  '200% center' },
        },
      },
      backgroundImage: {
        'paper-texture': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'gold':    '0 4px 24px -4px rgba(212, 151, 30, 0.35)',
        'forest':  '0 4px 24px -4px rgba(24, 95, 165, 0.3)',
        'ink':     '0 8px 40px -8px rgba(2, 26, 51, 0.5)',
        'card':    '0 2px 16px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.05)',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
}