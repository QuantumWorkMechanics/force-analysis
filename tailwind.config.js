/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui"), require("tailwindcss-animated")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#09497B",

          secondary: "#0da7db",

          accent: "#ffbc17",

          neutral: "#CCCCCC",

          "base-100": "#ffffff",

          info: "#0da7db",

          success: "#FFCB18",

          warning: "#FFCB18",

          error: "#f87272",
        },
      },
    ],
  },

  // use below if you need animation package.
  // run this in terminal: npm install -D tailwindcss-animated
  //uncomment below plugins, comment out above plugins
  //There is also a nice configurator for it here: https://www.tailwindcss-animated.com/configurator.html
  // plugins: [require("tailwindcss-animated")],
};
