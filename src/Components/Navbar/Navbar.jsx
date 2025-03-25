import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"; // updated Link import
import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";

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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenu(false);
  }, [location.pathname]);

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/#testimonials">Testimonials</Link>
        </li>
        <li>
          <Link to="/#contact" className="btn">
            Contact Us
          </Link>
        </li>
      </ul>
      <img
        src={menu_icon}
        alt="Menu"
        className="menu-icon"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
