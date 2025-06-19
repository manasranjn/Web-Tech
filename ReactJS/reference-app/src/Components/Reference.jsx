import React, { useRef } from "react";

const Reference = () => {
  const reference = useRef();

  console.log(reference); // {current: undefined}
  let changeColor = () => {
    reference.current.style.color = "red";
    reference.current.innerHTML = "Hello";
  };

  return (
    <div>
      <h1 ref={reference}>Reference</h1>
      <button onClick={changeColor}>Click</button>
    </div>
  );
};

export default Reference;
