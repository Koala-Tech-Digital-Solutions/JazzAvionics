import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>Update and Maintenance of Avionics Systems</h1>
        <p>
          Get on board and buckle up for this new adventure of modernizing your
          aircraft with the best team.
        </p>
        <Link to="/contact" className="btn">
          Get a Quote
        </Link>
      </div>
    </div>
  );
};

export default Hero;
