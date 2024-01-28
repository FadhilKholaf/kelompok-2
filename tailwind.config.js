/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      Animation: {
        bouncev2: "1s infinite;",
      },
      keyframes: {
        bouncev2: {
          "0%, 100%": {
            transform: "translateY(-25%)",
            "animation-timing-function": "ease-in-out",
          },
          "50%": {
            transform: "translateY(0)",
            "animation-timing-function": "ease-in-out",
          },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
