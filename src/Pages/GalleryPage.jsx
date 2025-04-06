import React, { useState, useEffect } from "react";
import "./Pages.css";

const images = [
  "/assets/gallery-1.png",
  "/assets/gallery-2.png",
  "/assets/gallery-3.png",
  "/assets/gallery-4.png",
  "/assets/gallery-5.png",
  "/assets/gallery-6.png",
  "/assets/gallery-7.png",
  "/assets/gallery-8.png",
  "/assets/gallery-9.png",
  "/assets/gallery-10.png",
  "/assets/gallery-11.png",
  "/assets/gallery-12.png",
  "/assets/gallery-13.png",
  "/assets/gallery-14.png",
  "/assets/gallery-15.png",
  "/assets/gallery-16.png",
  "/assets/gallery-17.png",
  "/assets/gallery-18.png",
  "/assets/gallery-20.png",
  "/assets/gallery-21.png",
  "/assets/gallery-22.png",
  "/assets/gallery-23.png",
  "/assets/gallery-24.png",
  "/assets/gallery-25.png",
  "/assets/gallery-26.png",
  "/assets/gallery-27.png",
  "/assets/gallery-28.png",
  "/assets/gallery-29.png",
  "/assets/gallery-30.png",
  "/assets/gallery-31.png",
  "/assets/gallery-32.png",
  "/assets/gallery-33.png",
  "/assets/gallery-34.png",
  "/assets/gallery-35.png",
  "/assets/gallery-36.png",
  "/assets/gallery-37.png",
  "/assets/gallery-38.png",
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const visible = images.map((_, i) => {
        const el = document.getElementById(`gallery-item-${i}`);
        const rect = el?.getBoundingClientRect();
        return rect && rect.top < window.innerHeight * 0.9;
      });
      setVisibleItems(visible);
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedIndex(null);
      } else if (e.key === "ArrowRight" && selectedIndex !== null) {
        setSelectedIndex((prev) => (prev + 1) % images.length);
      } else if (e.key === "ArrowLeft" && selectedIndex !== null) {
        setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  return (
    <div className="services-page">
      <div className="header-section">
        <h2>Our Work in Action</h2>
        <p>Explore recent avionics upgrades and maintenance projects.</p>
      </div>

      <div className="gallery-grid">
        {images.map((src, index) => (
          <div
            id={`gallery-item-${index}`}
            className={`gallery-item ${visibleItems[index] ? "visible" : ""}`}
            key={index}
            onClick={() => setSelectedIndex(index)}
          >
            <img src={src} alt={`Gallery ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="lightbox" onClick={() => setSelectedIndex(null)}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="lightbox-close"
              onClick={() => setSelectedIndex(null)}
            >
              &times;
            </button>

            <button
              className="lightbox-nav left"
              onClick={() =>
                setSelectedIndex(
                  (selectedIndex - 1 + images.length) % images.length
                )
              }
            >
              ‹
            </button>

            <img
              src={images[selectedIndex]}
              alt="Enlarged"
              className="lightbox-img"
            />

            <button
              className="lightbox-nav right"
              onClick={() =>
                setSelectedIndex((selectedIndex + 1) % images.length)
              }
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
