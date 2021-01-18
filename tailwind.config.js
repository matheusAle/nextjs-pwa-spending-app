
module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionTimingFunction: {
        'bounce-out': 'cubic-bezier(.75,1.18,.66,1.14)',
      },
      keyframes: {
        'slide-down': {
          '0%': { transform: 'translateY(-0.5rem)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
      animation: {
        'slide-down': 'slide-down 150ms cubic-bezier(.75,1.18,.66,1.14) forwards',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
