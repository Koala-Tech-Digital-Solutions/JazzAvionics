import React from "react";
import "./Pages.css";
import garminLogo from "/assets/garmin.png";
import dynonLogo from "/assets/dynon.png";
import avidyneLogo from "/assets/avidyne.png";

const services = [
  "On-Site Avionics Maintenance and Troubleshooting",
  "Remote Technical Support for Avionics Integration",
  "Custom Instrument Panel Design and Project Consulting",
  "Precision-Cut, Custom-Built Instrument Panels",
  "Custom Aircraft Wiring Harness Fabrication",
  "IFR (Instrument Flight Rules) System Certification",
  "Aircraft Weight and Balance Analysis and Reports",
  "Avionics System Upgrades and Modernization",
  "Configuration and Programming of Garmin, Dynon, and Avidyne Systems",
];

const EnhancedServicesPage = () => {
  return (
    <div className="services-page">
      <div className="header-section">
        <h2>Our Services</h2>
        <p>
          We provide a comprehensive suite of avionics services designed to
          ensure performance, safety, and custom integration for your aircraft.
        </p>
      </div>

      <div className="logo-banner">
        <img src={garminLogo} alt="Garmin" />
        <img src={dynonLogo} alt="Dynon" />
        <img src={avidyneLogo} alt="Avidyne" />
      </div>

      <div className="services-grid">
        {services.map((text, i) => (
          <div
            className="service-card"
            key={i}
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <span className="icon">⚙️</span> {text}
          </div>
        ))}
      </div>

      <div className="cta-section">
        <h3>Not sure what you need?</h3>
        <p>
          <a href="/contact">Contact us</a> for a free avionics consultation.
        </p>
      </div>
    </div>
  );
};

export default EnhancedServicesPage;
