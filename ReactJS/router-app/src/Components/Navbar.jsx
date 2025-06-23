import React from "react";
import { Link, useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div id="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about-us">AboutUs</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact-us">ContactUs</Link>
        </li>
      </ul>
      <button onClick={() => navigate("/login")}>Login</button>
    </div>
  );
};

export default Navbar;
