import React from "react";

function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute top-16 left-0 p-8 z-10">
        <h1 className="text-base-50 text-8xl">
          Inspiring Brains to Understand The Brain
        </h1>
      </div>
      <div className="hero-img h-full w-full relative">
        <img
          src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  );
}

export default Hero;
