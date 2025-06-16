import React from "react";
import style from "./example.module.css";

const Example = () => {
  return (
    <div id={style.example}>
      <h1 className={style.heading}>Module CSS</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  );
};

export default Example;
