import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const AuthNavbar = () => {
  return (
    <nav className="navbar auth-navbar">
      <div className="logo">CafeLove</div>
      <ul className="nav-links">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/signup" className="btn-highlight">Sign Up</Link></li>
      </ul>
    </nav>
  );
};

export default AuthNavbar;