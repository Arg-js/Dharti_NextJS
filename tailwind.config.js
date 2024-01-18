/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        primary_background: {
          DEFAULT: 'hsl(var(--primary_background))',
        },
        primary_background_200: {
          DEFAULT: 'hsl(var(--primary_background_200))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        black: {
          DEFAULT: 'hsl(var(--black))',
          foreground: 'hsl(var(--black-foreground))',
        },
        light_blue: {
          DEFAULT: 'hsl(var(--light-blue))',
        },
        blue_background: {
          DEFAULT: 'hsl(var(--blue-background))',
        },
        blue_gray: {
          DEFAULT: 'hsl(var(--blue_gray))',
        },
        blue_gray500: {
          DEFAULT: 'hsl(var(--blue_gray500))',
        },
        gray_500: {
          DEFAULT: 'hsl(var(--gray-500))',
        },
        gray_700: {
          DEFAULT: 'hsl(var(--gray-700))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        foundation_gray_B200: {
          DEFAULT: 'hsl(var(--foundation-gray-B200))',
        },
        gray_900: {
          DEFAULT: 'hsl(var(--gray-900))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      // todo: check if instead of providing path here we can provide a constant
      // backgroundImage: {
      //   'hero-section-about': "url('./src/assets/svg/heroSectionAboutBg.svg')",
      // },
      boxShadow: {
        primary_background_200: '-8px 8px 2px -1px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
