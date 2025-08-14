// src/components/common/HeroSection.jsx
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../../css/heroSectionTitle.css";

const HeroSectionTitle = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  backgroundImage,
  customClass = "",
}) => {
  const [imageError, setImageError] = useState(false);
  const [fallbackImage] = useState("/herosectionimages/Sliders/Digital Technology.webp");

  useEffect(() => {
    // Preload the image to check if it exists
    const img = new Image();
    img.onload = () => setImageError(false);
    img.onerror = () => {
      console.error(`Hero image failed to load: ${backgroundImage}`);
      setImageError(true);
    };
    img.src = backgroundImage;
  }, [backgroundImage]);

  const currentBackgroundImage = imageError ? fallbackImage : backgroundImage;

  return (
    <section
      className={`reusable-hero-section d-flex align-items-center ${customClass}`}
      style={{
        background: `linear-gradient(to right, rgba(255, 255, 255, 0.85) 40%, rgba(0, 0, 255, 0.1) 100%), 
          url(${currentBackgroundImage}) no-repeat center center / cover`,
        minHeight: "90vh",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6" style={{ marginTop: "100px" }}>
            <h1 className="fw-bold text-dark mb-3">{title}</h1>
            <p className="lead text-dark lh-base ls-lg">{subtitle}</p>
            {/* <a href={buttonLink} className="btn btn-warning btn-lg mt-3 fw-semibold">
              {buttonText}
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

HeroSectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  backgroundImage: PropTypes.string.isRequired,
  customClass: PropTypes.string,
};

export default HeroSectionTitle;
