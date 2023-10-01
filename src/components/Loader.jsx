import React from "react";
import { Circle } from "react-feather";

function Loader() {
  return (
    <div className="fixed left-1/2 top-1/2 w-screen h-screen z-50 -translate-x-1/2 -translate-y-1/2 bg-base-100 flex items-center justify-center">
      <Circle /> Loading...
    </div>
  );
}

export default Loader;
