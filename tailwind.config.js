/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
        ibm: ['"IBM Plex Sans KR"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

