import React from "react";

const Navbar = () => {
  return (
    <div id="navbar">
      <div className="logo">
        <h1>Swiggy</h1>
      </div>
      <div className="navlinks">
        <ul>
          <li>
            <a href="#">Swiggy Corporate</a>
          </li>
          <li>
            <a href="#">Partner with us</a>
          </li>
        </ul>
        <button id="app">Get the App</button>
        <button id="signin">Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
