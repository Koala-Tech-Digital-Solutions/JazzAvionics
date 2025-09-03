import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-icons">
        <a
          href="https://www.facebook.com/jazzavionicsFL"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-facebook-f"></i>
        </a>

        <a
          href="https://www.instagram.com/jazz.avionics/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
      <p>
        &copy; 2025 Jazz Avionics Design by
        <a href="http://www.koalatech.dev" rel="nofollow">
          {" "}
          KoalaTech
        </a>
      </p>
    </div>
  );
};

export default Footer;
