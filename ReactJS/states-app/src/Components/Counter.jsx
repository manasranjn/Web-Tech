import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="counter">
      <h1>Count : {counter}</h1>

      <div className="buttons">
        <button onClick={increment}>Increment</button>
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        <button onClick={() => setCounter(0)}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
