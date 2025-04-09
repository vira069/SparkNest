/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'blue': '0 4px 6px rgba(79, 150, 346, 0.5)', // Custom blue shadow
      },
    },
  },
  plugins: [],
}

