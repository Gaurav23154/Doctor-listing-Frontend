const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',
        secondary: '#10B981',
        'primary-dark': '#3730A3',
        'gray-light': '#F3F4F6',
      },
    },
  },
  plugins: ["@tailwindcss/postcss"],
};

export default config;
