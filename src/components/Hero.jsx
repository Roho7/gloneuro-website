import React from "react";
import LatestBlog from "./HeroLatestBlog";
import HeroPodcast from "./HeroPodcast";
import { ArrowRight, ArrowUpRight, Bookmark } from "react-feather";

function Hero() {
  return (
    <div className="relative m-4 mt-20 h-screen grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-4">
      <HeroTop />
      <div className="flex flex-col row-span-3 gap-4">
        <LatestBlog />
        <HeroPodcast />
        <HeroDiscover />
      </div>
      <HeroBanner />
    </div>
  );
}

const HeroTop = () => {
  return (
    <div className="hero-top p-4 w-full bg-hero-img bg-cover text-base-50 col-span-2 row-span-2 rounded-2xl">
      <div className="mb-4 relative z-10">
        <h1 className="text-8xl ">GloNeuro</h1>
        <p className=" text-2xl">Inspiring Brains to Understand the Brain</p>
      </div>
      <button className="relative flex gap-2 z-10 rounded-full bg-grass-100 px-4 py-2 text-base-800 font-bold">
        Learn more <ArrowRight />
      </button>
    </div>
  );
};
const HeroBanner = () => {
  return (
    <div className="p-4 bg-grass-100 col-span-2 rounded-2xl flex flex-col gap-2 justify-center">
      <Bookmark />
      <h1>Discover 100+ Neuroscience Articles</h1>
      <span>
        Discover Blogs <ArrowUpRight />
      </span>
    </div>
  );
};

const HeroDiscover = () => {
  return (
    <div className="w-full h-full p-4 rounded-2xl bg-widget-img bg-[size:100%] hover:bg-[size:110%] transition-all ease-linear">
      <p className="text-4xl text-base-100">See all Categories</p>
    </div>
  );
};

export default Hero;
