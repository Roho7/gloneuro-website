import React from "react";

function ResearchCard(props) {
  const data = props.data;
  return (
    <div className="glass bg-salmon-500 w-96 h-full p-4 rounded-xl text-base-50">
      <h1 className="text-egg-100">{data?.heading}</h1>
      <div className="flex gap-4">
        <div>
          <p>
            INSTITUTION:{" "}
            <strong className="text-egg-100">{data?.institution}</strong>
          </p>
          <p>
            POSITION: <strong className="text-egg-100">{data?.position}</strong>
          </p>
          <p>
            DEADLINE: <strong className="text-egg-100">{data?.deadline}</strong>
          </p>
          <p>{data.description}</p>
          <a href={data.link}>Read More</a>
        </div>
      </div>
    </div>
  );
}

export default ResearchCard;
