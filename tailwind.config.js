/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "main-red": "#942023",
        "hover-text": "#8B0000",
        "text-white": "#FCF8EB",
        "btn-bg": "#8B0000",
        "sec-btn-bg": "#D0665F",
        "bgc-white": "#FBF8EB"
      },
      screens: {
        tablet: { max: "949px" },
        laptop: { min: "950px", max: "1130px" },
        mac: { min: "1131px", max: "1440px" },
        desktop: { min: "1441px" },
        mobile: { max: "800px" },
      },
      height: {
        't': 'calc( 100vh - 190px )',
        'p': 'calc( 100vh - 120px )'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
