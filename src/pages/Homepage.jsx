import Hero from "../components/Hero";
import LatestNews from "../components/LatestNews";
import ArticleCarousel from "../components/ArticleCarousel";
import Catagories from "../components/Catagories";
import Footer from "../components/Footer";
import QuoteComponent from "../components/QuoteComponent";
import StatsSection from "../components/StatsSection";
import { motion, useScroll } from "framer-motion";

function Homepage() {
  const { scrollYProgress } = useScroll();
  return (
    <div>
      <div className="relative z-[1]">
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
        <StatsSection />
        <br />
        <Footer />
      </div>
      <motion.div
        className="absolute top-[50vh] z-0 opacity-30"
        style={{ scale: scrollYProgress }}
      >
        <img src="src/assets/bg-vector-1png.png" className="" />
      </motion.div>
    </div>
  );
}

export default Homepage;
