import React from "react";
import Slider from "react-slick";
import "./Gallery.css";
import { Link } from "react-router-dom";

import gallery_3 from "/assets/antes:despues 1.png";
import gallery_4 from "/assets/antes:despues 2.png";
import gallery_5 from "/assets/antes:despues 3.png";
import gallery_6 from "/assets/antes:despues 4.png";
import gallery_7 from "/assets/antes:despues 5.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom arrow components (bigger, always visible, accessible)
const NextArrow = ({ onClick }) => (
  <button
    className="slick-custom-arrow slick-custom-next"
    onClick={onClick}
    aria-label="Next slide"
    type="button"
  >
    ›
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="slick-custom-arrow slick-custom-prev"
    onClick={onClick}
    aria-label="Previous slide"
    type="button"
  >
    ‹
  </button>
);

const Gallery = () => {
  const settings = {
    dots: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // <— show ONE at a time
    slidesToScroll: 1,
    swipeToSlide: true,
    adaptiveHeight: true,
    lazyLoad: "ondemand",
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  const images = [gallery_3, gallery_4, gallery_5, gallery_6, gallery_7];

  return (
    <div className="campus">
      <div className="gallery-carousel">
        <Slider {...settings}>
          {images.map((src, i) => (
            <div key={i} className="carousel-slide">
              <img src={src} alt={`Gallery item ${i + 1}`} />
            </div>
          ))}
        </Slider>
      </div>

      <Link to="/gallery" className="btn view-more">
        View More
      </Link>
    </div>
  );
};

export default Gallery;
