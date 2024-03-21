/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        'text-des': '18px',
      },
      width: {
        'banner-width': '786px',
      },
      lineHeight: {
        'des-line-hight': '30px',
        'big-line': '4rem',
      },
      colors: {
        'dim-white': '#fff',
        customBlue: '#0000ff',
      },
    },
  },
  plugins: [require('daisyui')],
};
