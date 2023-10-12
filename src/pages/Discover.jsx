import React from "react";
import Catagories from "../components/Catagories";

function Discover() {
  return (
    <div className="h-full">
      <h1 className="mx-4 my-10 text-4xl text-base-50">Discover Blogs</h1>
      <Catagories />
      <h1 className="mx-4 my-10 text-4xl text-base-50">Discover Podcasts</h1>
    </div>
  );
}

export default Discover;
