import React from "react";

const StyleObject = () => {
  const headingCSS = {
    color: "red",
    fontSize: "80px",
    textDecoration: "line-through",
    textAlign: "center",
  };
  return (
    <div>
      <h1 style={headingCSS}>Style Object</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo excepturi
        fugit atque ut sint accusantium illum architecto a. Obcaecati adipisci
        laboriosam aut a, est voluptates esse officiis facere similique hic.
      </p>
    </div>
  );
};

export default StyleObject;
