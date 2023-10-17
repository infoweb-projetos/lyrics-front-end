/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        darkBlue: '#10395F',
        borderColor: '#424242'
      },
      textColor :{
        darkBlue: '#10395F'
      },
      borderColor: {
        offWhite: '#B8B8B8'
      }
    },
  },
  plugins: [],
}
