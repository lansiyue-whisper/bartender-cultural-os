/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        archive: '#030405',
        ink: '#f4f7ff',
        muted: '#8b92a3',
        klein: '#002fa7',
        electric: '#2f7dff',
        herb: '#42b7a9',
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 32px rgba(47, 125, 255, 0.25)',
      },
    },
  },
  plugins: [],
};
