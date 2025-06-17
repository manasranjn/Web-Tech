import React from "react";
import "./App.css";
import TopNavbar from "./Components/TopNavbar";
import MainNavbar from "./Components/MainNavbar";
import AboutUs from "./Components/AboutUs";

const App = () => {
  return (
    <div>
      <TopNavbar />
      <MainNavbar />
      <AboutUs />
    </div>
  );
};

export default App;
