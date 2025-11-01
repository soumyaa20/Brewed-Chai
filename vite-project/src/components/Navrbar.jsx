import React from "react";
import "./Navbar.css";
import { FaMugHot } from "react-icons/fa";


const Navbar = () => {
  
  return (
    <nav className="navbar">
      <div className="logo">
        <FaMugHot className="logo-icon" />
        <span className="logo-text">चाय</span>
      </div>
      <ul className="nav-links">
        <li><nav>Home</nav></li>
        <li
          onClick={() => {
            const section = document.querySelector("#section1");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}
              style={{ cursor: "pointer" }}
            >
              Menu
        </li>
        <li
          onClick={() => {
            const section = document.querySelector("#section2");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}
              style={{ cursor: "pointer" }}
            >
              About
        </li>
        <li>Contact</li>
      </ul>
      <button className="cta-btn">Order Now</button>
    </nav>
  );
};

export default Navbar;
