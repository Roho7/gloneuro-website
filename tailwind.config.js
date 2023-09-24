/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      clean: "General Sans', sans-serif;",
    },
    extend: {
      colors: {
        salmon: {
          100: "#F8DADA",
        },
        base: {
          50: "#F7F7F7",
          100: "#E9E8EE",
          300: "#B8B7BD",
          800: "#3D3E44",
        },
        pale: {
          100: "#EFEFF1",
        },
      },
      backgroundImage: {
        "hero-img":
          "url('https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      },
    },
  },
  plugins: [],
};
