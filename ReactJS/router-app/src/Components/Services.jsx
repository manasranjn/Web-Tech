import React, { useContext } from "react";
import { example } from "../App";

const Services = () => {
  const value = useContext(example);
  console.log(value);
  return (
    <div>
      <h1>Services</h1>
      <h2>{value.name}</h2>
    </div>
  );
};

export default Services;
