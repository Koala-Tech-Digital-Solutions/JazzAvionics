import React from "react";
import Title from "../Components/Title/Title.jsx";
import Services from "../Components/Services/Services.jsx";

const ServicesPage = () => {
  return (
    <div className="container">
      <Title title="Our Services" />
      <Services />
    </div>
  );
};

export default ServicesPage;
