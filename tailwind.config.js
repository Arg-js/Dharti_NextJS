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
        // white: 'hsl(var(--white))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          50: 'hsl(var(--primary-50))',
          400: 'hsl(var(--primary-400))',
          500: 'hsl(var(--primary-500))',
          600: 'hsl(var(--primary-600))',
          650: 'hsl(var(--primary-650))',
          700: 'hsl(var(--primary-700))',
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
        gray_50: {
          DEFAULT: 'hsl(var(--gray-50))',
        },
        gray_100: {
          DEFAULT: 'hsl(var(--gray-100))',
        },
        gray_200: {
          DEFAULT: 'hsl(var(--gray-200))',
        },
        gray_300: {
          DEFAULT: 'hsl(var(--gray-300))',
        },
        gray_400: {
          DEFAULT: 'hsl(var(--gray-400))',
        },
        gray_450: {
          DEFAULT: 'hsl(var(--gray-450))',
        },
        gray_500: {
          DEFAULT: 'hsl(var(--gray-500))',
        },
        gray_600: {
          DEFAULT: 'hsl(var(--gray-600))',
        },
        gray_700: {
          DEFAULT: 'hsl(var(--gray-700))',
        },
        gray_800: {
          DEFAULT: 'hsl(var(--gray-800))',
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
      gridTemplateColumns: {
        card: 'repeat(auto-fit,minmax(340px,1fr))',
        card_sm: 'repeat(auto-fit,minmax(300px,1fr))',
        card_base: 'repeat(auto-fit,minmax(240px,1fr))',
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

        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'marquee-infinite': 'marquee 20s linear infinite',
      },
      boxShadow: {
        primary_background_200: '-8px 8px 2px -1px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
