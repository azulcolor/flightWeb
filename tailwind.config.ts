import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        lexend: ['lexend', 'sans-serif'],
      },
      colors: {
        title: '#0098D5',
        text: '#6E7881',
        background: '#F5F8FA',
        secondary: '#018E68',
      },
    },
  },
  plugins: [],
}
export default config
