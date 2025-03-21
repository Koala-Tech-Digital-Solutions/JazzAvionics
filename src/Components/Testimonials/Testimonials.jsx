import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-icon.png";
import user_2 from "../../assets/user-icon.png";
import user_3 from "../../assets/user-icon.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>María González</h3>
                  <span>FL, USA</span>
                </div>
              </div>
              <p>
                AvionicUpdate provided exceptional service when upgrading my
                aircraft's navigation system. I am very pleased with the end
                result.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Carlos Pérez</h3>
                  <span>FL, USA</span>
                </div>
              </div>
              <p>
                I highly recommend AvionicUpdate for their excellent customer
                service and expertise in Avionics systems. I will definitely
                hire them again in the future.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Juan Martínez</h3>
                  <span>FL, USA</span>
                </div>
              </div>
              <p>
                AvionicUpdatemade sure my communication system was working
                properly before my next flight. Their team of experts did an
                exceptional job.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
