import React from "react";
import ArticleCarousel from "../components/Homepage/BlogCarousel";
import LatestNews from "../components/Homepage/LatestNews";

const imgs = [
  "https://gloneuro.org/wp-content/uploads/2022/04/ISCHEMIC-STROKE-1.jpg",
  "https://gloneuro.org/wp-content/uploads/2022/04/anxiety-min-1086x1536.jpg",
  "https://gloneuro.org/wp-content/uploads/2022/04/Alzheimers-Disease-min-1086x1536.jpg",
  "https://images.pexels.com/photos/1121097/pexels-photo-1121097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

function Explore() {
  return (
    <div className="min-h-screen">
      <div
        style={{
          backgroundPosition: "center",
          backgroundImage:
            "url(https://images.pexels.com/photos/1121097/pexels-photo-1121097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
        }}
        className="inner-page-hero"
      >
        <h1 className="inner-page-hero-text">Explore</h1>
      </div>
      <div className="page-container">
        <h1 className=" text-4xl text-base-50">Posters</h1>
        <div className="w-screen grid grid-flow-col gap-2 items-start overflow-scroll">
          {imgs.map((item, index) => {
            return (
              <div key={index} className="w-96 h-96">
                <img
                  src={item}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            );
          })}
        </div>
        <br />
        <h1 className=" text-4xl text-base-50">Neuroblogs</h1>
        <ArticleCarousel />
        <br />
        <h1 className=" text-4xl text-base-50">Neuroblogs</h1>
        <LatestNews />
      </div>
    </div>
  );
}

export default Explore;
