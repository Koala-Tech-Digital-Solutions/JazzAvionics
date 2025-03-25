import React from "react";
import Title from "../Components/Title/Title.jsx";
import About from "../Components/About/About.jsx";

const AboutPage = ({ setPlayState }) => {
  return (
    <div className="container">
      <Title title="About Us" />
      <About setPlayState={setPlayState} />
    </div>
  );
};

export default AboutPage;
