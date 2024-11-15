/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'GlobalHeaderFont':['Edu AU VIC WA NT Pre', 'cursive'],
        'GeneralFont':['Poppins', 'serif'],
      },
      colors:{
        'GlobalBG': '#2596be',
        'borderColor':'#b7b7b7',
        'StarGold':'#fcba03',
      },
      width:{
        'BlogWidth':'420px',
        'gap5Width':'300px',
      },
      height:{
        'BlogHeight':'300px',
      },
      margin:{
        'HypeMargin':'1250px',
      },
    },
  },
  plugins: [],
}

