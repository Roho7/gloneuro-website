import React from "react";

function ResearchCard(props) {
  const data = props.data;
  return (
    <div className="glass bg-base-100 w-72 p-4 rounded-xl text-base-100">
      <h1 className="text-base-50">{data?.heading}</h1>
      <div className="flex gap-4">
        <div>
          <p>
            INSTITUTION:{" "}
            <strong className="text-base-50">{data?.institution}</strong>
          </p>
          <p>
            POSITION: <strong className="text-base-50">{data?.position}</strong>
          </p>
          <p>
            DEADLINE: <strong className="text-base-50">{data?.deadline}</strong>
          </p>
          <p>{data.description}</p>
          <a href={data.link}>Read More</a>
        </div>
      </div>
    </div>
  );
}

export default ResearchCard;
