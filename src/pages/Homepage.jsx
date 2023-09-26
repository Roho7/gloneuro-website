import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LatestNews from "../components/LatestNews";
import ArticleCarousel from "../components/ArticleCarousel";
import Catagories from "../components/Catagories";
import Footer from "../components/Footer";

function Homepage() {
  return (
    <div>
      <div>
        <Navbar />
        <Hero />
        <br />
        <LatestNews />
        <br />
        <ArticleCarousel />
        <br />
        <Catagories />
        <br />
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
