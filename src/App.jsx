import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar/";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Gallery from "./Components/Gallery/Gallery";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
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
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
