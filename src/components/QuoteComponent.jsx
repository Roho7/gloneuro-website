import React from "react";
import { Italic } from "react-feather";

function QuoteComponent() {
  return (
    <div className="m-4 lg:mx-32 bg-salmon-100 p-8 rounded-xl relative z-0 overflow-clip shadow-xl">
      <p className="mb-2 font-light italic text-xl lg:text-3xl">
        "If the human brain were so simple that we could understand it, we would
        be so simple that we couldn't."
      </p>
      <p className="font-bold">Emerson Pugh</p>
      <Italic className="absolute -top-10 text-salmon-200 w-64 h-64 bg-blend-overlay z-[-1]" />
    </div>
  );
}

export default QuoteComponent;
