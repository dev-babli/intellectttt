// src/components/LuminCards.jsx
import React, { useState, useEffect } from "react";
import "./LuminCards.css";

const LuminCards = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [currentSlideIndex2, setCurrentSlideIndex2] = useState(0);

  // Company website URLs
  const luminInnovationsUrl = "https://lumin-innovations.com";
  const luminIncUrl = "https://lumininc.com";

  // Handle logo clicks
  const handleLuminInnovationsClick = () => {
    window.open(luminInnovationsUrl, "_blank");
  };

  const handleLuminIncClick = () => {
    window.open(luminIncUrl, "_blank");
  };

  // Handle carousel image clicks
  const handleCarouselImageClick = (company) => {
    if (company === "innovations") {
      window.open(luminInnovationsUrl, "_blank");
    } else if (company === "inc") {
      window.open(luminIncUrl, "_blank");
    }
  };

  // All images from Lumin wire folder
  const luminInnovationsSlides = [
    {
      image: "/Lumin%20wire/harness-testing-1.jpg",
      title: "Wire Harness Testing",
      description:
        "Advanced testing facilities for aerospace and automotive wire harness systems",
    },
    {
      image: "/Lumin%20wire/CAD-New.jpg",
      title: "CAD Design Services",
      description:
        "Professional CAD engineering for complex wire harness design and development",
    },
    {
      image: "/Lumin%20wire/Solution-Accelerators.jpg",
      title: "Solution Accelerators",
      description:
        "Innovation-driven development frameworks for rapid deployment",
    },
    {
      image: "/Lumin%20wire/Harness-Cables-1.jpg",
      title: "Harness Cables & Systems",
      description:
        "Comprehensive wire harness solutions for industrial applications",
    },
    {
      image: "/Lumin%20wire/Products-EV-Cables.jpg",
      title: "EV Cable Solutions",
      description:
        "Specialized electric vehicle cable solutions for modern automotive",
    },
    {
      image: "/Lumin%20wire/Technician.jpg",
      title: "Expert Technician Services",
      description:
        "Certified technicians providing quality assurance and technical excellence",
    },
    {
      image: "/Lumin%20wire/Products-Infotainment-Systems.jpg",
      title: "Infotainment Systems",
      description:
        "Advanced automotive entertainment and connectivity solutions",
    },
    {
      image: "/Lumin%20wire/Harness-Facility-02.jpg",
      title: "Manufacturing Facility",
      description:
        "State-of-the-art production capabilities with quality control systems",
    },
    {
      image: "/Lumin%20wire/Homepage-CAD.jpg",
      title: "CAD Engineering Excellence",
      description:
        "Comprehensive CAD engineering services for complex wire harness design",
    },
  ];

  // All images from Lumin medical folder
  const luminIncSlides = [
    {
      image: "/Lumin%20medical/1724761777_3d8754c6c64fe94e60c3.jpg",
      title: "Medical Equipment Solutions",
      description:
        "Advanced medical equipment and diagnostic solutions for healthcare",
    },
    {
      image: "/Lumin%20medical/1724761777_9d64ed1ee47edde005c2.png",
      title: "Advanced Medical Technology",
      description:
        "Precision medical technology ensuring accuracy and reliability",
    },
    {
      image: "/Lumin%20medical/1731096269_badfd5ce5d5b83bb7494.png",
      title: "Precision Medical Systems",
      description:
        "Advanced medical systems for optimal diagnostic performance",
    },
    {
      image: "/Lumin%20medical/1724850316_587c0c62d485d5de531f.jpg",
      title: "Diagnostic Imaging Solutions",
      description:
        "High-precision diagnostic imaging technology for medical assessments",
    },
    {
      image: "/Lumin%20medical/1724649292_a36eb25d498166d32fba.png",
      title: "Healthcare Technology",
      description:
        "Innovative healthcare technology solutions for modern facilities",
    },
    {
      image: "/Lumin%20medical/1723800960_fda15e9f46a90c025a17.png",
      title: "Medical Display Technology",
      description:
        "Advanced display technology for medical imaging applications",
    },
    {
      image: "/Lumin%20medical/services1.png",
      title: "Medical Services Excellence",
      description:
        "Professional medical services and support for healthcare institutions",
    },
    {
      image: "/Lumin%20medical/services2.png",
      title: "Advanced Medical Services",
      description:
        "Specialized medical services for advanced healthcare applications",
    },
    {
      image: "/Lumin%20medical/services3.png",
      title: "Medical Technology Services",
      description:
        "Cutting-edge medical technology services for healthcare delivery",
    },
  ];

  // Auto-advance carousel every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex(
        (prevIndex) => (prevIndex + 1) % luminInnovationsSlides.length
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [luminInnovationsSlides.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex2(
        (prevIndex) => (prevIndex + 1) % luminIncSlides.length
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [luminIncSlides.length]);

  const nextSlide = () => {
    setCurrentSlideIndex(
      (prevIndex) => (prevIndex + 1) % luminInnovationsSlides.length
    );
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? luminInnovationsSlides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide2 = () => {
    setCurrentSlideIndex2(
      (prevIndex) => (prevIndex + 1) % luminIncSlides.length
    );
  };

  const prevSlide2 = () => {
    setCurrentSlideIndex2((prevIndex) =>
      prevIndex === 0 ? luminIncSlides.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="lumin-showcase">
      <div className="showcase-container">
        {/* Professional Header */}
        <div className="section-header">
          <div className="header-content">
            <h2 className="section-title">Our Companies</h2>
            <p className="section-subtitle">
              Delivering innovative solutions across specialized industries with
              expertise and precision
            </p>
          </div>
        </div>

        <div className="cards-grid">
          {/* Lumin Innovations Card */}
          <div className="company-card manufacturing">
            <div className="card-content">
              {/* Top Section - Logo & Certifications */}
              <div className="card-top-section">
                {/* Company Header */}
                <div className="card-header">
                  <div className="company-logo-section">
                    <div className="logo-container">
                      <img
                        src="/images/lumin-innovations-horizontal.png"
                        alt="Lumin Innovations"
                        className="logo-image clickable-logo"
                        onClick={handleLuminInnovationsClick}
                        title="Visit Lumin Innovations Website"
                      />
                    </div>
                  </div>
                </div>

                {/* Certifications Section */}
                <div className="certifications-section">
                  <div className="certifications">
                    <span className="cert-badge">ISO 9001:2015</span>
                    <span className="cert-badge">AS9100D</span>
                  </div>
                </div>
              </div>

              {/* Bottom Section - Carousel */}
              <div className="card-carousel-section">
                <div className="carousel-container">
                  <div className="carousel-slide">
                    <div
                      className="carousel-background clickable-carousel"
                      style={{
                        backgroundImage: `url(${luminInnovationsSlides[currentSlideIndex].image})`,
                      }}
                      onClick={() => handleCarouselImageClick("innovations")}
                      title="Visit Lumin Innovations Website"
                    >
                      <div className="carousel-overlay">
                        <div className="carousel-content">
                          <h4 className="carousel-title">
                            {luminInnovationsSlides[currentSlideIndex].title}
                          </h4>
                          <p className="carousel-description">
                            {
                              luminInnovationsSlides[currentSlideIndex]
                                .description
                            }
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hero-style Navigation */}
                <div className="carousel-navigation">
                  <button
                    className="carousel-button prev-button"
                    onClick={prevSlide}
                    aria-label="Previous slide"
                  >
                    ‹
                  </button>
                  <button
                    className="carousel-button next-button"
                    onClick={nextSlide}
                    aria-label="Next slide"
                  >
                    ›
                  </button>

                  {/* Progress Line */}
                  <div className="carousel-progress">
                    <div
                      className="carousel-progress-fill"
                      style={{
                        width: `${
                          ((currentSlideIndex + 1) /
                            luminInnovationsSlides.length) *
                          100
                        }%`,
                      }}
                    />
                  </div>

                  {/* Slide Counter */}
                  <div className="carousel-counter">
                    {currentSlideIndex + 1}/{luminInnovationsSlides.length}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lumin Inc Card */}
          <div className="company-card healthcare">
            <div className="card-content">
              {/* Top Section - Logo & Certifications */}
              <div className="card-top-section">
                {/* Company Header */}
                <div className="card-header">
                  <div className="company-logo-section">
                    <div className="logo-container">
                      <img
                        src="/images/lumin-logo.png"
                        alt="Lumin Inc"
                        className="logo-image clickable-logo"
                        onClick={handleLuminIncClick}
                        title="Visit Lumin Inc Website"
                      />
                    </div>
                  </div>
                </div>

                {/* Certifications Section */}
                <div className="certifications-section">
                  <div className="certifications">
                    <span className="cert-badge">ISO 13485</span>
                    <span className="cert-badge">Medical Certified</span>
                  </div>
                </div>
              </div>

              {/* Bottom Section - Carousel */}
              <div className="card-carousel-section">
                <div className="carousel-container">
                  <div className="carousel-slide">
                    <div
                      className="carousel-background clickable-carousel"
                      style={{
                        backgroundImage: `url(${luminIncSlides[currentSlideIndex2].image})`,
                      }}
                      onClick={() => handleCarouselImageClick("inc")}
                      title="Visit Lumin Inc Website"
                    >
                      <div className="carousel-overlay">
                        <div className="carousel-content">
                          <h4 className="carousel-title">
                            {luminIncSlides[currentSlideIndex2].title}
                          </h4>
                          <p className="carousel-description">
                            {luminIncSlides[currentSlideIndex2].description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hero-style Navigation */}
                <div className="carousel-navigation">
                  <button
                    className="carousel-button prev-button"
                    onClick={prevSlide2}
                    aria-label="Previous slide"
                  >
                    ‹
                  </button>
                  <button
                    className="carousel-button next-button"
                    onClick={nextSlide2}
                    aria-label="Next slide"
                  >
                    ›
                  </button>

                  {/* Progress Line */}
                  <div className="carousel-progress">
                    <div
                      className="carousel-progress-fill"
                      style={{
                        width: `${
                          ((currentSlideIndex2 + 1) / luminIncSlides.length) *
                          100
                        }%`,
                      }}
                    />
                  </div>

                  {/* Slide Counter */}
                  <div className="carousel-counter">
                    {currentSlideIndex2 + 1}/{luminIncSlides.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuminCards;
