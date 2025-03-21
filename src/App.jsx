import React from "react";
import Navbar from "./Components/Navbar/Navbar/";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Gallery from "./Components/Gallery/Gallery";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
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
        <About />
        <Title title="We guarantee customer satisfaction" />
        <Gallery />
        <Title title="Discover what our customers are saying" />
        <Testimonials />
        <Title title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
