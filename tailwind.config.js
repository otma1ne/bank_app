/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#644FF6",
        "dark-bg": "#030614",
      },
      backgroundImage: {
        hero: "url('src/assets/images/3D-Morph-Lines-7.png')",
      },
      padding: {
        maxWidth: "0 160px",
        maxWidthXl: "0 120px",
        maxWidthL: "0 80px",
        maxWidthM: "0 40px",
        maxWidthS: "0 20px",
      },
    },
    fontFamily: {
      sans: [
        "Montserrat, sans-serif",
        { fontFeatureSettings: '"cv11", "ss01"' },
      ],
    },
  },
  plugins: [],
};
