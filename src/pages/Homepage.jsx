import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LatestNews from "../components/LatestNews";
import ArticleCarousel from "../components/ArticleCarousel";
import Catagories from "../components/Catagories";
import Footer from "../components/Footer";
import QuoteComponent from "../components/QuoteComponent";

function Homepage() {
  return (
    <div>
      <div>
        <Hero />
        <br />
        <QuoteComponent />
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
