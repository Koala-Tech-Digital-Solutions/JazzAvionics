import React from "react";
import "./About.css";
import about_img from "/assets/about.png";
import play_icon from "/assets/play-icon.png";
import { Link } from "react-router-dom";

const About = ({ setPlayState }) => {
  return (
    <>
      <div className="about">
        <div className="about-left">
          <img src={about_img} alt="" className="about-img" />
          <img
            src={play_icon}
            alt=""
            className="play-icon"
            onClick={() => {
              setPlayState(true);
            }}
          />
        </div>
        <div className="about-right">
          <h3>About Avionic Update</h3>
          <h2>Experts who help you get the best out of your aircraft.</h2>
          <p>
            Our expertise lies in inspecting and upgrading navigation,
            communication, and all essential aircraft systems, delivering
            top-tier care for your aircraft.
          </p>
          <p>
            As Fault Hunter, we design custom panels tailored to your needs,
            ensuring comfort and ease of use—just like being at home.
          </p>
          <p>
            For over 10 years, we have been a trusted leader in avionics system
            upgrades and maintenance. Our team of highly trained experts is
            dedicated to providing exceptional, personalized service. We are
            committed to ensuring the safety and efficiency of your aircraft
            with personalized, high-quality solutions. Contact us for more
            information or to request our services.
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        <Link to="/about" className="btn">
          Our team
        </Link>
      </div>
    </>
  );
};

export default About;
