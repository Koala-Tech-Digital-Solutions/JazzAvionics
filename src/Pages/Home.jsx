import React from "react";
import Hero from "../Components/Hero/Hero.jsx";
import Services from "../Components/Services/Services.jsx";
import Title from "../Components/Title/Title.jsx";
import About from "../Components/About/About.jsx";
import Gallery from "../Components/Gallery/Gallery.jsx";
import Testimonials from "../Components/Testimonials/Testimonials.jsx";
import Contact from "../Components/Contact/Contact.jsx";

const Home = ({ setPlayState }) => (
  <div className="container">
    <Hero />
    <Title
      subTitle="See The Full Range Of Our Services"
      title="What We Offer"
    />
    <Services />
    <About setPlayState={setPlayState} />
    <Title title="We guarantee customer satisfaction" />
    <Gallery />
    <Title title="Discover what our customers are saying" />
    <Testimonials />
    <Title title="Get in Touch" />
    <Contact />
  </div>
);

export default Home;
