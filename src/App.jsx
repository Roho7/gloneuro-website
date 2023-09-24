import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LatestNews from "./components/LatestNews";
import ArticleCarousel from "./components/ArticleCarousel";
import Catagories from "./components/Catagories";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <br />
      <LatestNews />
      <br />
      <ArticleCarousel />
      <br />
      <Catagories />
    </div>
  );
}

export default App;
