import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "../src/Components/Navbar/Navbar.jsx";
import Footer from "../src/Components/Footer/Footer.jsx";
import VideoPlayer from "../src/Components/VideoPlayer/VideoPlayer.jsx";

// Pages
import Home from "./Pages/Home.jsx";
import ServicesPage from "./Pages/ServicesPage.jsx";
import AboutPage from "./Pages/AboutPage.jsx";
import GalleryPage from "./Pages/GalleryPage.jsx";

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home setPlayState={setPlayState} />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route
          path="/about"
          element={<AboutPage setPlayState={setPlayState} />}
        />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
      <Footer />
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </Router>
  );
};

export default App;
