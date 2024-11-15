/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,tsx,ts}"
  ],
  theme: {
    extend: {
      colors: {
        // Define your custom colors here
        cbase: '#2563EB', // Example custom color
        
        
      },
    },
  },
  plugins: [],
}

