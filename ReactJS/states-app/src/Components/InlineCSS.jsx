import React from "react";

const InlineCSS = () => {
  return (
    <div>
      <h1
        style={{
          color: "red",
          fontSize: "80px",
          textDecoration: "line-through",
          textAlign: "center",
        }}
      >
        Inline CSS
      </h1>
      <p style={{ color: "green", fontSize: "40px", fontWeight: "lighter" }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
        consequatur consectetur pariatur quo, obcaecati repudiandae voluptate
        dignissimos unde! Nesciunt nulla esse dolorum beatae repudiandae
        temporibus repellat provident. In, excepturi vel.
      </p>
    </div>
  );
};

export default InlineCSS;
