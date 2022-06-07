import React from "react";
import Toggle from "../toggle/Toggle";
import "./Navbar.css";
// import { Link } from "react-scroll";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-left">
        <div className="navbar-left-name">
          <h2>Raviteja Boddu</h2>
        </div>
        <Toggle />
      </div>
      <div className="navbar-right">
        <div className="navbar-list">
          <ul>
            <li>
              <Link to="home">Home</Link>
            </li>
            <li>
              <Link to="main-services">Services</Link>
            </li>
            <li>Experience</li>
            <li>Portfolio</li>
            <li>
              <Link to="blog">Blog</Link>
            </li>
          </ul>
        </div>
        {/* <Link to="contact" spy={true} smooth={true}>
            <button className="navbar-button button">Contact</button>
        </Link> */}
        <a href="#contact">
          <button className="navbar-button button">Contact</button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
