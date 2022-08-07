/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        'short' : {'raw': '(max-height: 768px) and (max-width: 1024px)'},
        'mobile' : {'raw': '(max-width: 360px)'}
      }
    },
  },
  plugins: [],
};
