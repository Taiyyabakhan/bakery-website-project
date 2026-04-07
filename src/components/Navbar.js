import React, { useState} from "react";
import { Link, useLocation } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  const closeMobileMenu = () => {
    setOpenLinks(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <div className="logo">
          <span className="logoIcon">🥐</span>
          <h2>Soft Bakery</h2>
        </div>
        <div className="navLinks">
          <Link to="/" className={`navLink ${isActive("/") ? "active" : ""}`}>Home</Link>
          <Link to="/menu" className={`navLink ${isActive("/menu") ? "active" : ""}`}>Menu</Link>
          <Link to="/about" className={`navLink ${isActive("/about") ? "active" : ""}`}>About</Link>
          <Link to="/contact" className={`navLink ${isActive("/contact") ? "active" : ""}`}>Contact</Link>
        </div>
        <div className="hiddenLinks">
          <Link to="/" className={`navLink ${isActive("/") ? "active" : ""}`} onClick={closeMobileMenu}>Home</Link>
          <Link to="/menu" className={`navLink ${isActive("/menu") ? "active" : ""}`} onClick={closeMobileMenu}>Menu</Link>
          <Link to="/about" className={`navLink ${isActive("/about") ? "active" : ""}`} onClick={closeMobileMenu}>About</Link>
          <Link to="/contact" className={`navLink ${isActive("/contact") ? "active" : ""}`} onClick={closeMobileMenu}>Contact</Link>
        </div>
      </div>
      <div className="rightSide">
        <div className="searchBar">
          <input type="text" placeholder="Search our bakery..." />
          <button type="button">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </button>
        </div>
        <div className="actionButtons">
          <Link to="/contact" className="orderBtn">Order Now</Link>
        </div>
        <button className="menuToggle" onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
