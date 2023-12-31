import Hero from "./Hero";
import LatestNews from "./LatestNews";
import ArticleCarousel from "./BlogCarousel";
import Catagories from "../Blog/Catagories";
import QuoteComponent from "./QuoteComponent";
import StatsSection from "./StatsSection";
import { motion } from "framer-motion";
import PreLoader from "../Animation/PreLoader";

function Homepage(props) {
  const width = props.width;
  return (
    <div className="">
      <div className=" p-4 lg:px-32 relative z-[1] flex flex-col gap-16 mb-16">
        <PreLoader />
        <Hero width={width} />
        <QuoteComponent />
        <LatestNews />
        <ArticleCarousel />
        <Catagories />
        <StatsSection />
      </div>
      <motion.svg
        style={{ width: "100%", height: "100%" }}
        viewBox="0 0 636 544"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[-50%] top-[120vh] lg:top-[200vh] z-0 opacity-30"
      >
        <motion.path
          d="M157.5 269L305.5 350.915M157.5 269H87.5M157.5 269L87.5 334.5M157.5 269L218.16 375.644M157.5 269L230.16 159.5M157.5 269V428.5M157.5 269L41 326.771M157.5 269L114.159 165.5M407 365.5L514 321M407 365.5L305.5 350.915M407 365.5L252.5 486M407 365.5L514 447M407 365.5H634.5M407 365.5L451.5 277L490 213M407 365.5L363.5 447M407 365.5L502.5 398.5M514 321L390 286.5M514 321L611.5 409M514 321L502.5 398.5M514 321L490 213M514 321L569.5 301.5M514 321L569.5 189.5M390 286.5L305.5 350.915M390 286.5L490 213M390 286.5L277.5 542L252.5 486M390 286.5L413 219.5M390 286.5L356 213M390 286.5L310.5 237.5M252.5 486L351 514.5M252.5 486L218.16 375.644M252.5 486L305.5 350.915M252.5 486L157.5 428.5M252.5 486L363.5 447M351 514.5L514 447M351 514.5L502.5 398.5M351 514.5L363.5 447M218.16 375.644L305.5 350.915M218.16 375.644L212 542M218.16 375.644L230.16 277M218.16 375.644L122.5 339M305.5 350.915L230.16 159.5M305.5 350.915L310.5 237.5M305.5 350.915L363.5 447M305.5 350.915L230.16 277M310.5 142.5L230.16 159.5M310.5 142.5L356 213M310.5 142.5V52M310.5 142.5L451.5 52M310.5 142.5L277.5 107M310.5 142.5L413 219.5M310.5 142.5L230.16 277M310.5 142.5V237.5M490 213L406 114M490 213L569.5 189.5M490 213L514 131M490 213L413 219.5M490 213L569.5 301.5M490 213L483 150M514 447L611.5 409M514 447L502.5 398.5M514 447H363.5M514 447L569.5 301.5M611.5 409L502.5 398.5M611.5 409L569.5 301.5M502.5 398.5L363.5 447M87.5 334.5V269M87.5 334.5L80.5 365.5M87.5 334.5L41 326.771M87.5 334.5L122.5 339M87.5 269L1 321M87.5 269L41 326.771M87.5 269L127.16 114M87.5 269L114.159 165.5M87.5 269L170 184.5M142 542H212M142 542L74.5 507L80.5 438.5M142 542L127.16 486M1 321L41 423.5M1 321L41 326.771M569.5 301.5L611.5 269M569.5 301.5V189.5M569.5 301.5L634.5 365.5M611.5 269L569.5 189.5M611.5 269L634.5 365.5M569.5 189.5L514 131M569.5 189.5L603 76M569.5 189.5L483 150M212 542L157.5 428.5M212 542L127.16 486M157.5 428.5L80.5 365.5M157.5 428.5L80.5 438.5M157.5 428.5L127.16 486M157.5 428.5L122.5 339M230.16 159.5L127.16 114M230.16 159.5L178.16 84.5M230.16 159.5L114.159 165.5M230.16 159.5L310.5 237.5M230.16 159.5L208.16 26M230.16 159.5L252.5 114L248.66 78.5M230.16 159.5L170 184.5M41 423.5V326.771M41 423.5L80.5 438.5M41 423.5L80.5 365.5M41 326.771L80.5 365.5M406 114L381.5 150M406 114L514 131M406 114L483 150M406 114L549 42M356 213L413 219.5M356 213L310.5 237.5M356 213L483 150M80.5 438.5L127.16 486M127.16 114L178.16 84.5M127.16 114L114.159 165.5M127.16 114L170 184.5M248.66 78.5L277.5 107M248.66 78.5L178.16 84.5M248.66 78.5L230.16 32.5M248.66 78.5L310.5 52M248.66 78.5L258.66 52M277.5 107L310.5 52M277.5 107L381.5 150M277.5 107L280.66 18M310.5 52H258.66M310.5 52L280.66 18M310.5 52L381.5 150M230.16 32.5L258.66 52M230.16 32.5L208.16 26M230.16 32.5L248.66 1.5M280.66 18L258.66 52M280.66 18L248.66 1.5M381.5 150L413 219.5M514 131L603 76M514 131L549 42M603 76L549 42M603 76L451.5 52M549 42L451.5 52M549 42L483 150M451.5 52L483 150M178.16 84.5L258.66 52M178.16 84.5L114.159 165.5M178.16 84.5V36L208.16 26M178.16 84.5L208.16 26M178.16 84.5L170 184.5M258.66 52L248.66 1.5M310.5 237.5L170 184.5M310.5 237.5L230.16 277M230.16 277L114.159 165.5M230.16 277L170 184.5"
          stroke="#D0B0C4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 50,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0,
          }}
          strokeWidth={2}
          strokeDasharray="0 1"
        />
      </motion.svg>
      <div className="absolute top-[20vh] lg:top-[40vh] z-[0] right-0 max-md:w-[200vw]">
        <motion.img
          initial={{ opacity: 1 }}
          animate={{ opacity: 0.4 }}
          transition={{
            repeat: Infinity,
            repeatDelay: 1,
            repeatType: "reverse",
            duration: 3,
          }}
          src="https://firebasestorage.googleapis.com/v0/b/gloneuro-website.appspot.com/o/bg-blob-1.png?alt=media&token=a4b988ec-f647-45a5-89a1-6681029c77a9&_gl=1*tik9xh*_ga*MjExOTg3NjYzMi4xNjk0MzMzMTIx*_ga_CW55HF8NVT*MTY5NzM0NzcxNy40Ny4xLjE2OTczNDkyMTkuMjIuMC4w"
          alt=""
        />
      </div>
      <div className="absolute top-[200vh]">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/gloneuro-website.appspot.com/o/bg-blob-2.png?alt=media&token=9790f5cd-6e0c-4a8a-98eb-8a158e1736d3&_gl=1*1siop9p*_ga*MjExOTg3NjYzMi4xNjk0MzMzMTIx*_ga_CW55HF8NVT*MTY5NzM0NzcxNy40Ny4xLjE2OTczNDkzNjQuNjAuMC4w"
          alt=""
        />
      </div>
    </div>
  );
}

export default Homepage;
