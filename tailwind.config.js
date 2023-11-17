/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      mont: ["Montserrat", "sans-serif"],
    },
    fontSize: {
      14: "0.75rem",
      32: "2rem",
      "2.5xl": [
        "2.5rem",
        {
          lineHeight: "3rem",
          // letterSpacing: "-0.01em",
          fontWeight: "400",
        },
      ],
      "6.5xl": [
        "3.25rem",
        {
          lineHeight: "4rem",
          // letterSpacing: "-0.01em",
          fontWeight: "400",
        },
      ],
    },
    extend: {
      flexBasis: {
        "1/7": "14.2857143%",
        "2/7": "28.5714286%",
        "3/7": "42.8571429%",
        47: "47.6728571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
      },
      height: {
        31: "125px",
        26: "26px",
        60: "60px",
        625: "625px",
        702: "702px",
        1500: "1500px",
      },
      width: {
        250: "250px",
        60: "60px",
        200: "200px",
        106: "106px",
        140: "140px",
        282: "282px",
        442: "442px",
        570: "570px",
        120: "120px",
        135: "135px",
        136: "136px",
        151: "151px",
        "7px": "7px",
      },
      padding: {
        4.5: "15px",
        7: "5px",
        7.5: "30px",
      },
      margin: {
        88: "88px",
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")({ prefix: "ui" })],
};
