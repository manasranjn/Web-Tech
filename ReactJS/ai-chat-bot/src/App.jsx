import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Components/Main/Home";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Home />
    </div>
  );
};

export default App;
