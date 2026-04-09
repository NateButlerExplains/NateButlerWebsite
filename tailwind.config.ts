import type { Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Cyber Command Center palette
        surface: {
          DEFAULT: '#131318',
          container: {
            low: '#1a191f',
            high: '#252429',
            highest: '#2f2e35',
          },
        },
        primary: {
          DEFAULT: '#00e5ff',
          light: '#c3f5ff',
          container: '#004d5c',
        },
        secondary: {
          DEFAULT: '#7000ff',
          light: '#d1bcff',
          container: '#2d004d',
        },
        tertiary: {
          DEFAULT: '#ff00e5',
          light: '#fface8',
          container: '#5c004d',
        },
        neutral: {
          DEFAULT: '#0a0a0f',
          light: '#1a1a1f',
        },
      },
      backgroundColor: {
        'cyber-dark': '#131318',
        'cyber-darker': '#0a0a0f',
      },
      textColor: {
        'on-surface': '#fffbfe',
        'on-primary': '#000000',
        'on-secondary': '#ffffff',
        'on-tertiary': '#ffffff',
      },
      borderColor: {
        'outline-variant': 'rgba(255, 255, 255, 0.15)',
      },
      backdropBlur: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '24px',
      },
      boxShadow: {
        'neon-glow': '0 0 40px rgba(0, 229, 255, 0.1)',
        'neon-glow-secondary': '0 0 40px rgba(112, 0, 255, 0.1)',
        'neon-glow-tertiary': '0 0 40px rgba(255, 0, 229, 0.1)',
      },
      animation: {
        'gradient-shift': 'gradient-shift 4s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'data-flow': 'data-flow 3s ease-in-out infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
        'data-flow': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      fontFamily: {
        'space-grotesk': ['var(--font-space-grotesk)', 'sans-serif'],
        'manrope': ['var(--font-manrope)', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
      },
    },
  },
  plugins: [animate],
}

export default config
