import React from "react";
import "./Services.css";
import service_1 from "../../assets/service1.png";
import service_2 from "../../assets/service2.png";
import service_3 from "../../assets/service3.png";
// import service_4 from "../../assets/service4.png";
// import service_5 from "../../assets/service5.png";
// import service_6 from "../../assets/service6.png";
import service_icon_1 from "../../assets/service1_icon.png";
import service_icon_2 from "../../assets/service2_icon.png";
import service_icon_3 from "../../assets/service3_icon.png";

const Services = () => {
  return (
    <div className="services">
      <div className="service">
        <img src={service_1} alt="" />
        <div className="caption">
          <img src={service_icon_1} alt="" />
          <p>Navigation Systems</p>
        </div>
      </div>

      <div className="service">
        <img src={service_2} alt="" />
        <div className="caption">
          <img src={service_icon_2} alt="" />
          <p>Communication Systems</p>
        </div>
      </div>

      <div className="service">
        <img src={service_3} alt="" />
        <div className="caption">
          <img src={service_icon_3} alt="" />
          <p>Entertainment Systems</p>
        </div>
      </div>
      {/* <div className="service">
        <img src={service_4} alt="" />
      </div>
      <div className="service">
        <img src={service_5} alt="" />
      </div>
      <div className="service">
        <img src={service_6} alt="" />
      </div> */}
    </div>
  );
};

export default Services;
