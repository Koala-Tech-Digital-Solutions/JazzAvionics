import React from "react";
import Title from "../Components/Title/Title.jsx";
import Gallery from "../Components/Gallery/Gallery.jsx";

const GalleryPage = () => {
  return (
    <div className="container">
      <Title title="Our Gallery" />
      <Gallery />
    </div>
  );
};

export default GalleryPage;
