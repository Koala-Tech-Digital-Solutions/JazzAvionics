import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";
import close_icon from "../../assets/close-icon.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenu((prev) => !prev);
  };

  // Close menu on route change
  useEffect(() => {
    setMobileMenu(false);
  }, [location.pathname]);

  // Prevent scroll on mobile when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "auto";
  }, [mobileMenu]);

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>

      <ul
        className={`nav-links ${
          mobileMenu ? "show" : "hide-mobile-menu"
        } nav-links-desktop`}
      >
        <li onClick={toggleMenu}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={toggleMenu}>
          <Link to="/services">Services</Link>
        </li>
        <li onClick={toggleMenu}>
          <Link to="/about">About Us</Link>
        </li>
        <li onClick={toggleMenu}>
          <Link to="/gallery">Gallery</Link>
        </li>
        {/* <li onClick={toggleMenu}>
          <Link to="/testimonials">Testimonials</Link>
        </li> */}
        <li onClick={toggleMenu}>
          <Link to="/contact" className="btn">
            Contact Us
          </Link>
        </li>
      </ul>

      <img
        src={mobileMenu ? close_icon : menu_icon}
        alt="Menu"
        className="menu-icon"
        onClick={toggleMenu}
      />

      {mobileMenu && <div className="menu-overlay" onClick={toggleMenu}></div>}
    </nav>
  );
};

export default Navbar;
