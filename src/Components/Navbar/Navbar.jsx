import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "/assets/logo.png";
import menu_icon from "/assets/menu-icon.png";
import close_icon from "/assets/close-icon.png";

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

  useEffect(() => {
    setMobileMenu(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "auto";
  }, [mobileMenu]);

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <NavLink
        to="/"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img src={logo} alt="Logo" className="logo" />
      </NavLink>

      <ul
        className={`nav-links ${
          mobileMenu ? "show" : "hide-mobile-menu"
        } nav-links-desktop`}
      >
        <li onClick={() => setMobileMenu(false)}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Home
          </NavLink>
        </li>
        <li onClick={() => setMobileMenu(false)}>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Services
          </NavLink>
        </li>
        <li onClick={() => setMobileMenu(false)}>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            About Us
          </NavLink>
        </li>
        <li onClick={() => setMobileMenu(false)}>
          <NavLink
            to="/gallery"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Gallery
          </NavLink>
        </li>
        <li onClick={() => setMobileMenu(false)}>
          <NavLink
            to="/contact"
            className={({ isActive }) => `btn ${isActive ? "active-link" : ""}`}
          >
            Contact Us
          </NavLink>
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
