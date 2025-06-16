import React from "react";
import "./App.css";
import Counter from "./Components/Counter";
import InlineCSS from "./Components/InlineCSS";
import StyleObject from "./Components/StyleObject";
import GlobalCSS from "./Components/GlobalCSS";
import Example from "./Components/Example";
import Details from "./Components/Details";

const App = () => {
  return (
    <div>
      {/* <h1>States</h1>
      <Counter /> */}

      <InlineCSS />
      <StyleObject />
      <GlobalCSS />
      <Example />
      <Details />
    </div>
  );
};

export default App;
