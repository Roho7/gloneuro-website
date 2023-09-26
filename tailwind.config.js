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
        grass: {
          100: "#D5FBA5",
        },
      },
      backgroundImage: {
        "hero-img":
          "url('https://images.pexels.com/photos/17483869/pexels-photo-17483869/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-represents-how-machine-learning-is-inspired-by-neuroscience-and-the-human-brain-it-was-created-by-novoto-studio-as-par.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        "widget-img":
          "url('https://images.pexels.com/photos/5063450/pexels-photo-5063450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      },
    },
  },
  plugins: [],
};
