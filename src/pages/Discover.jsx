import React from "react";
import Catagories from "../components/Blog/Catagories";

function Discover() {
  return (
    <div className="h-full">
      <div
        style={{
          backgroundPosition: "center",
          backgroundImage:
            "url(https://images.pexels.com/photos/1635935/pexels-photo-1635935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        }}
        className="inner-page-hero"
      >
        <h1 className="inner-page-hero-text">Discover</h1>
      </div>
      <div className="p-4">
        <h1 className="text-4xl text-base-50">Discover Blogs</h1>
        <Catagories />
        <h1 className="my-10 text-4xl text-base-50">Discover Podcasts</h1>
      </div>
    </div>
  );
}

export default Discover;
