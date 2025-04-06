import React from "react";
import { Link } from "react-router-dom"; // 👈 Make sure you have this
import "./Services.css";

import service_1 from "../../assets/service1.png";
import service_2 from "../../assets/service2.png";
import service_3 from "../../assets/service3.png";
import service_icon_1 from "../../assets/service1_icon.png";
import service_icon_2 from "../../assets/service2_icon.png";
import service_icon_3 from "../../assets/service3_icon.png";

const Services = () => {
  return (
    <div className="services">
      <div className="service">
        <img src={service_1} alt="Navigation Systems" />
        <div className="caption">
          <img src={service_icon_1} alt="Icon 1" />
          <p>Navigation Systems</p>
        </div>
      </div>

      <div className="service">
        <img src={service_2} alt="Communication Systems" />
        <div className="caption">
          <img src={service_icon_2} alt="Icon 2" />
          <p>Communication Systems</p>
        </div>
      </div>

      <div className="service">
        <img src={service_3} alt="Entertainment Systems" />
        <div className="caption">
          <img src={service_icon_3} alt="Icon 3" />
          <p>Entertainment Systems</p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="services-cta">
        <Link to="/services" className="services-button">
          View All Services
        </Link>
      </div>
    </div>
  );
};

export default Services;
