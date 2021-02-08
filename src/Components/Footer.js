import React from "react";
import { Link } from "react-router-dom";
// STYLES
import logo from "../Images/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="nav__logo-wrapper">
          <Link to="/">
            <img src={logo} alt="The Guardian Logo" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
