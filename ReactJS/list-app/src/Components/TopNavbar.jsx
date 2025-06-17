import React from "react";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";

const TopNavbar = () => {
  return (
    <div className="top-navbar">
      <div className="contact">
        <div className="email">
          <MdOutlineEmail style={{ color: "green", fontSize: "20px" }} />
          <a href="mailto:example@example.com">example@example.com</a>
        </div>
        <div className="location">
          <MdOutlineLocationOn style={{ color: "green", fontSize: "20px" }} />
          <p>Bhubaneswaer, Odisha</p>
        </div>
      </div>

      <div className="social">
        <FaFacebookF />
        <FaTwitter />
        <FaInstagram />
        <FaYoutube />
        <FaPinterest />
      </div>
    </div>
  );
};

export default TopNavbar;
