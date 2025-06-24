import React, { createContext } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Services from "./Components/Services";
import Login from "./Components/Login";
import { allRoutes } from "./AllRoutes";
import { BrowserRouter, Routes, Route } from "react-router";

export const example = createContext();

const App = () => {
  const renderAllRoutes = () => {
    return allRoutes.map((route, index) => {
      return <Route key={index} path={route.path} element={route.component} />;
    });
  };
  return (
    // <div>
    //   <BrowserRouter>
    //     <Navbar />
    //     {/* <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/about-us" element={<AboutUs />} />
    //       <Route path="/contact-us" element={<ContactUs />} />
    //       <Route path="/services" element={<Services />} />
    //       <Route path="/login" element={<Login />} />
    //     </Routes> */}
    //     <Routes>{renderAllRoutes()}</Routes>
    //   </BrowserRouter>
    // </div>
    <div>
      <example.Provider value={{ name: "Nexcent" }}>
        <BrowserRouter>
          <Navbar />
          <Routes>{renderAllRoutes()}</Routes>
        </BrowserRouter>
      </example.Provider>
    </div>
  );
};

export default App;
