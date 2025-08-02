// src/components/LuminCards.jsx
import React, { useState, useEffect } from "react";
import "./LuminCards.css";

const LuminCards = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Carousel images for each company - using new folders
  const manufacturingImages = [
    "/Lumin wire/harness-testing-1.jpg",
    "/Lumin wire/CAD-New.jpg",
    "/Lumin wire/Solution-Accelerators.jpg",
    "/Lumin wire/Harness-Cables-1.jpg",
    "/Lumin wire/Products-EV-Cables.jpg",
    "/Lumin wire/Technician.jpg",
    "/Lumin wire/Products-Infotainment-Systems.jpg",
    "/Lumin wire/Harness-Facility-02.jpg",
    "/Lumin wire/Homepage-CAD.jpg",
  ];

  const healthcareImages = [
    "/Lumin medical/1724761777_3d8754c6c64fe94e60c3.jpg",
    "/Lumin medical/1724761777_9d64ed1ee47edde005c2.png",
    "/Lumin medical/1731096269_badfd5ce5d5b83bb7494.png",
    "/Lumin medical/1724850316_587c0c62d485d5de531f.jpg",
    "/Lumin medical/1724649292_a36eb25d498166d32fba.png",
    "/Lumin medical/1723800960_fda15e9f46a90c025a17.png",
    "/Lumin medical/services1.png",
    "/Lumin medical/services2.png",
    "/Lumin medical/services3.png",
  ];

  const galleryImages = [
    "/Lumin wire/harness-testing-1.jpg",
    "/Lumin medical/1724761777_3d8754c6c64fe94e60c3.jpg",
    "/Lumin wire/CAD-New.jpg",
    "/Lumin medical/1724761777_9d64ed1ee47edde005c2.png",
    "/Lumin wire/Solution-Accelerators.jpg",
    "/Lumin medical/1731096269_badfd5ce5d5b83bb7494.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % galleryImages.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [galleryImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const getCurrentImages = (cardType) => {
    return cardType === "manufacturing"
      ? manufacturingImages
      : healthcareImages;
  };

  return (
    <>
      <div className="section-header">
        <h2 className="section-title">Our Companies</h2>
      </div>

      <section className="lumin-showcase">
        <div className="showcase-container">
          {/* Subsidiaries Grid */}
          <div className="subsidiaries-section">
            {/* Minimal Header - Moved above cards */}
            <div className="modern-header">
              <div className="header-content">
                <div className="logo-section">
                  <div className="logo-container">
                    <img
                      src="/logos/Intellectt-Logo.webp"
                      alt="Intellectt"
                      className="main-logo"
                    />
                    <div className="logo-glow"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Connection Line */}
            <div className="connection-line">
              <div className="connection-dot"></div>
              <div className="connection-path"></div>
              <div className="connection-dot"></div>
            </div>

            <div className="cards-grid">
              {/* Lumin Innovations Card */}
              <div
                className={`company-card manufacturing ${
                  hoveredCard === "manufacturing" ? "hovered" : ""
                }`}
                onMouseEnter={() => setHoveredCard("manufacturing")}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="card-background">
                  <div className="card-pattern"></div>
                  <div className="card-overlay"></div>
                </div>

                {/* Pixelation Transition */}
                <div className="pixelation-overlay">
                  <div className="pixel-grid"></div>
                </div>

                {/* Hover Image Gallery */}
                <div className="hover-gallery">
                  <div className="gallery-grid">
                    {getCurrentImages("manufacturing").map((image, index) => (
                      <div key={index} className="gallery-item">
                        <img
                          src={image}
                          alt={`Wire Harness ${index + 1}`}
                          className="gallery-image"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="gallery-overlay">
                    <a
                      href="https://lumin-innovations.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gallery-action-btn"
                    >
                      Visit Lumin Innovations
                    </a>
                  </div>
                </div>

                <div className="card-content">
                  <div className="card-header">
                    <div className="company-logo">
                      <img
                        src="/images/lumin-innovations-horizontal.png"
                        alt="Lumin Innovations"
                        className="logo-image"
                      />
                    </div>
                    /<div className="company-info">
                               </div>
                  </div>

                  <div className="card-body">
                    <h4 className="card-title">
                      Advanced Wire Harness Design & Manufacturing
                    </h4>
                    <p className="card-description">
                      Specialized in precision wire harness solutions for
                      aerospace, automotive, and industrial applications.
                    </p>

                    <div className="capabilities-grid">
                      <div className="capability">
                        <div className="capability-icon">⚡</div>
                        <span className="capability-text">
                          Systems & Architecture
                        </span>
                      </div>
                      <div className="capability">
                        <div className="capability-icon">🔧</div>
                        <span className="capability-text">
                          Prototype & Validation
                        </span>
                      </div>
                      <div className="capability">
                        <div className="capability-icon">🚀</div>
                        <span className="capability-text">
                          Aerospace Solutions
                        </span>
                      </div>
                    </div>

                    <div className="certifications">
                      <span className="cert-badge">ISO 9001:2015</span>
                      <span className="cert-badge">AS9100D</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lumin Inc Card */}
              <div
                className={`company-card healthcare ${
                  hoveredCard === "healthcare" ? "hovered" : ""
                }`}
                onMouseEnter={() => setHoveredCard("healthcare")}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="card-background">
                  <div className="card-pattern"></div>
                  <div className="card-overlay"></div>
                </div>

                {/* Pixelation Transition */}
                <div className="pixelation-overlay">
                  <div className="pixel-grid"></div>
                </div>

                {/* Hover Image Gallery */}
                <div className="hover-gallery">
                  <div className="gallery-grid">
                    {getCurrentImages("healthcare").map((image, index) => (
                      <div key={index} className="gallery-item">
                        <img
                          src={image}
                          alt={`Medical Equipment ${index + 1}`}
                          className="gallery-image"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="gallery-overlay">
                    <a
                      href="https://lumininc.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gallery-action-btn"
                    >
                      Visit Lumin Inc
                    </a>
                  </div>
                </div>

                <div className="card-content">
                  <div className="card-header">
                    <div className="company-logo">
                      <img
                        src="/images/lumin-logo.png"
                        alt="Lumin Inc"
                        className="logo-image"
                      />
                    </div>
                    {/* <div className="company-info">
                      <h3 className="company-name">Lumin Inc</h3>
                      <span className="company-type">
                        Medical Equipment Division
                      </span>
                    </div> */}
                  </div>

                  <div className="card-body">
                    <h4 className="card-title">
                      Precision Medical Equipment & Display Technology
                    </h4>
                    <p className="card-description">
                      Leading provider of medical equipment and display
                      solutions for diagnostic imaging, ensuring accuracy and
                      reliability in healthcare environments.
                    </p>

                    <div className="capabilities-grid">
                      <div className="capability">
                        <div className="capability-icon">🏥</div>
                        <span className="capability-text">
                          Medical Equipment
                        </span>
                      </div>
                      <div className="capability">
                        <div className="capability-icon">📊</div>
                        <span className="capability-text">
                          Diagnostic Imaging
                        </span>
                      </div>
                      <div className="capability">
                        <div className="capability-icon">🔬</div>
                        <span className="capability-text">
                          Precision Technology
                        </span>
                      </div>
                    </div>

                    <div className="certifications">
                      <span className="cert-badge">ISO 13485</span>
                      <span className="cert-badge">Medical Certified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Gallery */}
          <div className="gallery-section">
            <div className="gallery-header">
              <h2 className="gallery-title">Technology Gallery</h2>
              <p className="gallery-description">
                Discover our innovative solutions and cutting-edge technology
              </p>
            </div>

            <div className="gallery-carousel">
              <button
                className="carousel-button prev-button"
                onClick={prevImage}
                aria-label="Previous image"
              >
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className="carousel-container">
                <div className="carousel-slide">
                  <img
                    src={galleryImages[currentImageIndex]}
                    alt={`Lumin Technology ${currentImageIndex + 1}`}
                    className="carousel-image"
                  />
                  <div className="slide-overlay">
                    <div className="slide-content">
                      <h3 className="slide-title">
                        {currentImageIndex === 0 && "Wire Harness Testing"}
                        {currentImageIndex === 1 &&
                          "Medical Equipment Solutions"}
                        {currentImageIndex === 2 && "CAD Design & Engineering"}
                        {currentImageIndex === 3 &&
                          "Advanced Medical Technology"}
                        {currentImageIndex === 4 && "Solution Accelerators"}
                        {currentImageIndex === 5 && "Precision Medical Systems"}
                      </h3>
                      <p className="slide-description">
                        {currentImageIndex === 0 &&
                          "Advanced wire harness testing and validation for aerospace and automotive industries"}
                        {currentImageIndex === 1 &&
                          "Cutting-edge medical equipment and diagnostic solutions for healthcare professionals"}
                        {currentImageIndex === 2 &&
                          "Professional CAD design and engineering services for complex wire harness systems"}
                        {currentImageIndex === 3 &&
                          "State-of-the-art medical technology ensuring accuracy and reliability in healthcare"}
                        {currentImageIndex === 4 &&
                          "Innovative solution accelerators for rapid development and deployment"}
                        {currentImageIndex === 5 &&
                          "Precision medical systems designed for optimal diagnostic performance"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <button
                className="carousel-button next-button"
                onClick={nextImage}
                aria-label="Next image"
              >
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="carousel-indicators">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${
                    index === currentImageIndex ? "active" : ""
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LuminCards;
