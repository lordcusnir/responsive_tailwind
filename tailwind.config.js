/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'bg-1': '#FF8482',
        'bg-2': '#FFF2DD',
        'pink-text': '#BE6361',
        'grey-text': '#333333',
      },
      fontFamily: {
        'alfa-slab-one': ["Alfa Slab One", "serif"],
        'dm-sans': ["DM Sans", "serif",]
      },
      height: {
        '27r': '27rem',
        '18': '18px',
      },
      width: {
        '24': '24px',
      },
      screens:{
        'xs': '600px'
      },
    },
  },
}