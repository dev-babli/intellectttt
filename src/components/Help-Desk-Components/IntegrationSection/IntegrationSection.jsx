import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sIcon1 from "../../../images/icon/int-icon.svg";
import sIcon2 from "../../../images/icon/arrow-black.png";
import Icon1 from "../../../images/icon/Abbott.webp";
import Icon2 from "../../../images/icon/Bayer.webp";
import Icon3 from "../../../images/icon/Cordis.webp";
import Icon4 from "../../../images/icon/Embecta.webp";
import Icon5 from "../../../images/icon/Exel.webp";
import Icon6 from "../../../images/icon/Integra.webp";
import Icon7 from "../../../images/icon/Livanova.webp";
import Icon8 from "../../../images/icon/Medline.webp";
import Icon9 from "../../../images/icon/Philips.webp";
import Icon10 from "../../../images/icon/ThermoFisher.webp";
import Icon11 from "../../../images/icon/Terumo.webp";
import Icon12 from "../../../images/icon/Xylem.webp";
import Icon13 from "../../../images/icon/Alkermes.webp";
import Icon14 from "../../../images/icon/PSB.webp";
import Icon15 from "../../../images/icon/MTRN.webp";
import Icon16 from "../../../images/icon/Aya.webp";
import Icon17 from "../../../images/icon/Rentschler.webp";
// New logos from Logo's folder - using public URLs
const Icon18 = "/logos/Logo's/elevance health.webp";
const Icon19 = "/logos/Logo's/TechM.webp";
const Icon20 = "/logos/Logo's/HCL .webp";
const Icon21 = "/logos/Logo's/LTT.webp";
const Icon22 = "/logos/Logo's/L N T.webp";
const Icon23 = "/logos/Logo's/aBTHEM.webp";
const Icon24 = "/logos/Logo's/Diageo.webp";
const Icon25 = "/logos/Logo's/xylem-logo-social-sharing.jpg";
const Icon26 = "/logos/Logo's/terumo-aortic-1080x1080-1.png";
const Icon27 = "/logos/Logo's/unnamed.jpg";
const Icon28 = "/logos/Logo's/logo-aya-primary.jpg";
const Icon29 = "/logos/Logo's/logo-rentschler.jpg";
const Icon30 = "/logos/Logo's/images.png";
const Icon31 = "/logos/Logo's/livanova-logo.jpg";
const Icon32 = "/logos/Logo's/exel-logo.jpg";
const Icon33 = "/logos/Logo's/cordis-logo-black.jpg";
const Icon34 = "/logos/Logo's/embecta.jpg";
const Icon35 = "/logos/Logo's/Thermo_Fisher_Scientific_Logo.svg.png";
const Icon36 = "/logos/Logo's/abbott-logo.jpg";
const Icon37 = "/logos/Logo's/PSB-INDUSTRIES-LOGO-2023.jpg";
const Icon38 = "/logos/Logo's/Philips.png";
const Icon39 = "/logos/Logo's/MTRN_BIG.jpg";
const Icon40 = "/logos/Logo's/Medline-logo.svg.png";
const Icon41 = "/logos/Logo's/Logo_Bayer.jpg";
const Icon42 = "/logos/Logo's/Integra_LifeSciences_logo.jpg";
const Icon43 = "/logos/Logo's/Alkermes_plc_Logo.jpg";
const Icon44 = "/logos/Logo's/1631334329392.jpg";

const IntegrationSection = (props) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Partner companies data - only 9 for the main grid
  const mainPartners = [
    { name: "Abbott", logo: Icon1 },
    { name: "Bayer", logo: Icon2 },
    { name: "Cordis", logo: Icon3 },
    { name: "Embecta", logo: Icon4 },
    { name: "Exel", logo: Icon5 },
    { name: "Integra", logo: Icon6 },
    { name: "Livanova", logo: Icon7 },
    { name: "Medline", logo: Icon8 },
    { name: "Philips", logo: Icon9 },
  ];

  // All partners for bottom section
  const allPartners = [
    { name: "Abbott", logo: Icon1 },
    { name: "Bayer", logo: Icon2 },
    { name: "Cordis", logo: Icon3 },
    { name: "Embecta", logo: Icon4 },
    { name: "Exel", logo: Icon5 },
    { name: "Integra", logo: Icon6 },
    { name: "Livanova", logo: Icon7 },
    { name: "Medline", logo: Icon8 },
    { name: "Philips", logo: Icon9 },
    { name: "Thermo Fisher", logo: Icon10 },
    { name: "Terumo", logo: Icon11 },
    { name: "Xylem", logo: Icon12 },
    { name: "Alkermes", logo: Icon13 },
    { name: "PSB Industries", logo: Icon14 },
    { name: "MTRN", logo: Icon15 },
    { name: "Aya", logo: Icon16 },
    { name: "Rentschler", logo: Icon17 },
    // New logos from Logo's folder (unique ones only)
    { name: "Elevance Health", logo: Icon18 },
    { name: "TechM", logo: Icon19 },
    { name: "HCL", logo: Icon20 },
    { name: "LTT", logo: Icon21 },
    { name: "L&T", logo: Icon22 },
    { name: "ABTHEM", logo: Icon23 },
    { name: "Diageo", logo: Icon24 },
    { name: "Terumo Aortic", logo: Icon26 },
    { name: "Company", logo: Icon27 },
    { name: "Company", logo: Icon30 },
  ];

  // Testimonials data
  const testimonials = [
    {
      company: "Abbott",
      companyLogo: Icon1,
      text: "Intellectt has been a pleasure to work with. They quickly understood our business needs and embedded talented technologists into our engineering teams to help build our modern data platform. Their thoroughness, collaborative working style, and flexibility were greatly appreciated throughout the duration of this engagement and we look forward to opportunities for continued partnership.",
      author: "Sarah Johnson",
      title: "Chief Technology Officer, Abbott",
      rating: 5,
    },
    {
      company: "Bayer",
      companyLogo: Icon2,
      text: "The team at Intellectt demonstrated exceptional technical expertise and deep understanding of our industry challenges. Their innovative solutions and commitment to excellence have been instrumental in our digital transformation journey.",
      author: "Michael Chen",
      title: "VP of Engineering, Bayer",
      rating: 5,
    },
    {
      company: "Cordis",
      companyLogo: Icon3,
      text: "Intellectt's strategic approach and technical capabilities have consistently delivered outstanding results for our organization. Their collaborative partnership model and innovative solutions have been key to our success.",
      author: "Emily Rodriguez",
      title: "Senior Director, Cordis",
      rating: 5,
    },
    {
      company: "Philips",
      companyLogo: Icon9,
      text: "Working with Intellectt has been transformative for our technology initiatives. Their expertise in AI and cloud solutions has accelerated our digital transformation and positioned us for future growth.",
      author: "David Thompson",
      title: "CTO, Philips",
      rating: 5,
    },
  ];

  const handleTestimonialChange = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentTestimonial(index);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, i) => (
      <span key={i} style={{ color: "#fbbf24", fontSize: "1.2rem" }}>
        ★
      </span>
    ));
  };

  return (
    <section
      id="integration"
      className="integration-section"
      style={{
        backgroundColor: "#ffffff",
        padding: "60px 0 40px 0",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >


      <div
        className="container"
        style={{ 
          maxWidth: "1400px", 
          margin: "0 auto", 
          padding: "0 40px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header Section */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          <h2
            style={{
              fontSize: "2.25rem",
              fontWeight: "700",
              color: "#000000",
              margin: "0 0 20px 0",
              lineHeight: "1.1",
            }}
          >
            Client Testimonials
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "#64748b",
              fontWeight: "400",
              margin: "0",
              maxWidth: "600px",
              margin: "0 auto",
              whiteSpace: "nowrap",
            }}
          >
            Trust Intellectt for their digital transformation journey
          </p>
        </div>

        {/* Main Slide Show Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            alignItems: "center",
            marginBottom: "40px",
            minHeight: "400px",
          }}
        >
          {/* Left Side - Current Company Logo */}
          <div
            className="left-side-section"
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "300px",
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                color: "#1e293b",
                margin: "0 0 20px 0",
                textAlign: "center",
              }}
            >
              Featured Partner
            </h3>
            
            {/* Current Company Logo - Large and Centered */}
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(20px)",
                borderRadius: "20px",
                padding: "30px 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "200px",
                width: "100%",
                maxWidth: "300px",
                boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                opacity: isAnimating ? 0.7 : 1,
              }}
            >
              <img
                src={testimonials[currentTestimonial].companyLogo}
                alt={testimonials[currentTestimonial].company}
                style={{
                  maxWidth: "100%",
                  maxHeight: "120px",
                  objectFit: "contain",
                  filter: "none",
                  opacity: "1",
                  transition: "all 0.4s ease",
                }}
              />
            </div>

            {/* Company Name */}
            <div
              style={{
                marginTop: "30px",
                textAlign: "center",
                opacity: isAnimating ? 0.7 : 1,
                transition: "opacity 0.3s ease",
              }}
            >
              <h4
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  color: "#1e293b",
                  margin: "0 0 10px 0",
                }}
              >
                {testimonials[currentTestimonial].company}
              </h4>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#64748b",
                  margin: "0",
                  fontWeight: "500",
                }}
              >
                Industry Leader
              </p>
            </div>

            {/* Progress Indicator */}
            <div
              style={{
                display: "flex",
                gap: "8px",
                marginTop: "40px",
                justifyContent: "center",
              }}
            >
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: index === currentTestimonial ? "#0199d3" : "#cbd5e1",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onClick={() => handleTestimonialChange(index)}
                  onMouseEnter={(e) => {
                    if (index !== currentTestimonial) {
                      e.target.style.backgroundColor = "#94a3b8";
                      e.target.style.transform = "scale(1.2)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (index !== currentTestimonial) {
                      e.target.style.backgroundColor = "#cbd5e1";
                      e.target.style.transform = "scale(1)";
                    }
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Testimonial Slide Show */}
          <div
            className="right-side-section"
            style={{
              position: "relative",
              minHeight: "500px",
            }}
          >
            <div
                          style={{
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(20px)",
              borderRadius: "20px",
              padding: "35px",
              boxShadow: "0 15px 60px rgba(0,0,0,0.15)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              position: "relative",
              overflow: "hidden",
              minHeight: "400px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
            >
              {/* Company Logo */}
              <div 
                style={{ 
                  marginBottom: "30px", 
                  textAlign: "left",
                  opacity: isAnimating ? 0.7 : 1,
                  transition: "opacity 0.3s ease",
                }}
              >
                <img
                  src={testimonials[currentTestimonial].companyLogo}
                  alt={testimonials[currentTestimonial].company}
                  style={{
                    height: "50px",
                    objectFit: "contain",
                    filter: "none",
                    opacity: "1",
                  }}
                />
              </div>

              {/* Quote Icon */}
              <div
                style={{
                  position: "absolute",
                  top: "25px",
                  right: "25px",
                  fontSize: "3rem",
                  color: "#e2e8f0",
                  opacity: "0.5",
                }}
              >
                "
              </div>

              {/* Testimonial Text */}
              <div 
                style={{ 
                  marginBottom: "30px", 
                  flex: "1",
                  opacity: isAnimating ? 0.7 : 1,
                  transition: "opacity 0.3s ease",
                }}
              >
                <p
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: "1.6",
                    color: "#334155",
                    margin: "0",
                    fontStyle: "italic",
                    fontWeight: "400",
                    textAlign: "left",
                  }}
                >
                  "{testimonials[currentTestimonial].text}"
                </p>
              </div>

              {/* Rating Stars */}
              <div 
                style={{ 
                  marginBottom: "20px",
                  opacity: isAnimating ? 0.7 : 1,
                  transition: "opacity 0.3s ease",
                }}
              >
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>

              {/* Author Information */}
              <div 
                style={{ 
                  marginBottom: "30px", 
                  textAlign: "left",
                  opacity: isAnimating ? 0.7 : 1,
                  transition: "opacity 0.3s ease",
                }}
              >
                <p
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "700",
                    color: "#1e293b",
                    margin: "0 0 6px 0",
                  }}
                >
                  {testimonials[currentTestimonial].author}
                </p>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "#64748b",
                    margin: "0",
                    fontWeight: "500",
                  }}
                >
                  {testimonials[currentTestimonial].title}
                </p>
              </div>

              {/* Navigation Arrows */}
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <button
                  onClick={() => handleTestimonialChange((currentTestimonial - 1 + testimonials.length) % testimonials.length)}
                  style={{
                    background: "rgba(255, 255, 255, 0.9)",
                    border: "none",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    boxShadow: "0 3px 15px rgba(0,0,0,0.1)",
                    transition: "all 0.3s ease",
                    fontSize: "1.2rem",
                    color: "#64748b",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.1)";
                    e.target.style.boxShadow = "0 8px 30px rgba(0,0,0,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                    e.target.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
                  }}
                >
                  ‹
                </button>
                <button
                  onClick={() => handleTestimonialChange((currentTestimonial + 1) % testimonials.length)}
                  style={{
                    background: "rgba(255, 255, 255, 0.9)",
                    border: "none",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    boxShadow: "0 3px 15px rgba(0,0,0,0.1)",
                    transition: "all 0.3s ease",
                    fontSize: "1.2rem",
                    color: "#64748b",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.1)";
                    e.target.style.boxShadow = "0 8px 30px rgba(0,0,0,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                    e.target.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
                  }}
                >
                  ›
                </button>
              </div>


            </div>
          </div>
        </div>

        {/* Additional Partners Row */}
        <div
          className="additional-partners-section"
          style={{
            marginBottom: "60px",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontSize: "2.2rem",
              fontWeight: "700",
              color: "#1e293b",
              margin: "0 0 20px 0",
            }}
          >
            Trusted by Industry Leaders Worldwide
          </h3>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#64748b",
              marginBottom: "50px",
              fontWeight: "500",
            }}
          >
            Join hundreds of companies that trust Intellectt for their digital transformation
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "60px",
              opacity: "0.9",
              maxWidth: "1200px",
              margin: "0 auto",
              alignItems: "center",
            }}
          >
            {allPartners.map((partner, index) => (
              <div
                key={index}
                style={{
                  height: "60px",
                  width: "120px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "8px",
                  boxSizing: "border-box",
                  transition: "all 0.3s ease",
                }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "45px",
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                    filter: "none",
                    opacity: "1",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.1)";
                    e.target.style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                    e.target.style.opacity = "1";
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Explore Partners Button */}
        <div
          className="explore-partners-button"
          style={{
            textAlign: "center",
            marginTop: "60px",
          }}
        >
          <Link
            to="/partners"
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #0199d3 0%, #1e40af 100%)",
              color: "#ffffff",
              padding: "18px 40px",
              borderRadius: "50px",
              textDecoration: "none",
              fontSize: "1.2rem",
              fontWeight: "600",
              transition: "all 0.3s ease",
              border: "none",
              boxShadow: "0 8px 30px rgba(1, 153, 211, 0.3)",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-3px)";
              e.target.style.boxShadow = "0 15px 40px rgba(1, 153, 211, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 8px 30px rgba(1, 153, 211, 0.3)";
            }}
          >
            Explore All Partners
          </Link>
        </div>
      </div>

      {/* Responsive Design */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .integration-section {
            padding: 80px 0 60px 0;
          }

          .container {
            padding: 0 30px;
          }

          h2 {
            font-size: 3rem !important;
          }

          .main-content-grid {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }

          .partner-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 20px !important;
          }

          .testimonial-section {
            padding: 40px !important;
          }
        }

        @media (max-width: 768px) {
          .integration-section {
            padding: 60px 0 40px 0;
          }

          .container {
            padding: 0 20px;
          }

          /* Reduce header text sizes for mobile */
          h2 {
            font-size: 1.8rem !important;
            margin-bottom: 15px !important;
          }

          h2 + p {
            font-size: 0.9rem !important;
            white-space: normal !important;
          }

          /* Hide left side and bottom section on mobile */
          .left-side-section {
            display: none !important;
          }

          .additional-partners-section {
            display: none !important;
          }

          /* Make right side take full width */
          .right-side-section {
            grid-column: 1 / -1 !important;
          }

          /* Adjust main grid to single column */
          .main-content-grid {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }

          /* Reduce testimonial card padding and text sizes */
          .right-side-section > div {
            padding: 30px 25px !important;
            min-height: 400px !important;
          }

          /* Reduce company logo size */
          .right-side-section img {
            height: 50px !important;
          }

          /* Reduce quote icon size */
          .right-side-section > div > div:nth-child(3) {
            font-size: 2.5rem !important;
            top: 20px !important;
            right: 20px !important;
          }

          /* Reduce testimonial text size */
          .right-side-section p {
            font-size: 1rem !important;
            line-height: 1.6 !important;
          }

          /* Reduce author name size */
          .right-side-section > div > div:nth-child(6) p:first-child {
            font-size: 1rem !important;
          }

          /* Reduce author title size */
          .right-side-section > div > div:nth-child(6) p:last-child {
            font-size: 0.85rem !important;
          }

          /* Reduce star rating size */
          .right-side-section > div > div:nth-child(5) span {
            font-size: 1rem !important;
          }

          /* Reduce navigation button size */
          .right-side-section button {
            width: 40px !important;
            height: 40px !important;
            font-size: 1.2rem !important;
          }

          .partner-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 15px !important;
          }

          .testimonial-section {
            padding: 30px !important;
          }

          .cta-buttons {
            flex-direction: column !important;
            align-items: center !important;
          }

          /* Keep explore partners button visible and reduce size */
          .explore-partners-button {
            display: block !important;
            margin-top: 40px !important;
          }

          .explore-partners-button a {
            padding: 14px 30px !important;
            font-size: 1rem !important;
          }
        }

        @media (max-width: 480px) {
          .partner-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
          }

          /* Further reduce text sizes for very small screens */
          h2 {
            font-size: 1.5rem !important;
          }

          h2 + p {
            font-size: 0.8rem !important;
          }

          .container {
            padding: 0 15px;
          }

          /* Ensure right side takes full width on very small screens */
          .right-side-section {
            grid-column: 1 / -1 !important;
            width: 100% !important;
          }

          /* Further reduce testimonial card padding */
          .right-side-section > div {
            padding: 25px 20px !important;
            min-height: 350px !important;
          }

          /* Further reduce testimonial text */
          .right-side-section p {
            font-size: 0.9rem !important;
            line-height: 1.5 !important;
          }

          /* Further reduce author info */
          .right-side-section > div > div:nth-child(6) p:first-child {
            font-size: 0.9rem !important;
          }

          .right-side-section > div > div:nth-child(6) p:last-child {
            font-size: 0.75rem !important;
          }

          /* Further reduce button size */
          .explore-partners-button a {
            padding: 12px 25px !important;
            font-size: 0.9rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default IntegrationSection;

