/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      clean: "General Sans', sans-serif;",
    },
    extend: {
      dropShadow: {
        glow: "0 0 25px rgba(252, 196, 241, 0.5)",
      },
      colors: {
        salmon: {
          100: "#FCC4F1",
          200: "#E5A5D9",
          300: "#BA69AA",
          500: "#9C3488",
          800: "#301B2C",
        },
        screens: {
          mm: { max: "639px" },
        },
        base: {
          50: "#C7C0FA",
          100: "#9289DA",
          300: "#3C366C",
          500: "#2F276C",
          800: "#1B182F",
        },
        pale: {
          100: "#D0B0C4",
        },
        grass: {
          100: "#D5FBA5",
        },
        egg: {
          100: "#F7FCFE",
          200: "#E4E8EA",
          500: "#646B6F",
          800: "#22292D",
        },
      },
      backgroundImage: {
        "hero-img":
          "url('https://images.pexels.com/photos/17483869/pexels-photo-17483869/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-represents-how-machine-learning-is-inspired-by-neuroscience-and-the-human-brain-it-was-created-by-novoto-studio-as-par.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        "widget-img":
          "url('https://images.pexels.com/photos/5063450/pexels-photo-5063450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        "network-tex":
          "url('https://img.freepik.com/premium-vector/abstract-network-technology-geometric-dots-network-clipart-connecting-dots-lines-global-network-connection-digital-technology-with-plexus-background-vector-illustration_561158-1688.jpg')",
      },
    },
  },
  plugins: [],
};
