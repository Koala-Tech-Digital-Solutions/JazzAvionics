import React from "react";
import "./Pages.css";
import Contact from "../Components/Contact/Contact";

const ContactPage = () => {
  return (
    <div className="services-page">
      <div className="header-section">
        <h2>Contact Us</h2>
        <p>
          Have questions or need a custom avionics solution? Reach out and we'll
          respond shortly.
        </p>
      </div>
      <Contact />
    </div>
  );
};

export default ContactPage;
