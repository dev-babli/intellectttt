import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sIcon1 from "../../../images/icon/int-icon.svg";
import sIcon2 from "../../../images/icon/arrow-black.png";
import Icon1 from "../../../images/icon/BD.webp";
import Icon2 from "../../../images/icon/Catalent.webp";
import Icon3 from "../../../images/icon/Cordis.webp";
import Icon4 from "../../../images/icon/Deloitte.webp";
import Icon5 from "../../../images/icon/Edwards-Lifesciences.webp";
import Icon6 from "../../../images/icon/Fidelity.webp";
import Icon7 from "../../../images/icon/Getinge.webp";
import Icon8 from "../../../images/icon/HCL.webp";
import Icon9 from "../../../images/icon/IBM.webp";
import Icon10 from "../../../images/icon/johnson and johnson.webp";
import Icon11 from "../../../images/icon/L&T.webp";
import Icon12 from "../../../images/icon/Livanova.webp";
import Icon13 from "../../../images/icon/Moderna.webp";
import Icon14 from "../../../images/icon/Satate-Street.webp";
import Icon15 from "../../../images/icon/Terumo.webp";
import Icon16 from "../../../images/icon/Vertex.webp";
import Icon17 from "../../../images/icon/Zimmer-Biomet.webp";

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
    { name: "BD", logo: Icon1 },
    { name: "Deloitte", logo: Icon4 },
    { name: "IBM", logo: Icon9 },
    { name: "Johnson & Johnson", logo: Icon10 },
    { name: "Moderna", logo: Icon13 },
    { name: "Fidelity", logo: Icon6 },
    { name: "HCL", logo: Icon8 },
    { name: "L&T", logo: Icon11 },
    { name: "Vertex", logo: Icon16 },
  ];

  // All partners for bottom section
  const allPartners = [
    { name: "BD", logo: Icon1 },
    { name: "Catalent", logo: Icon2 },
    { name: "Cordis", logo: Icon3 },
    { name: "Deloitte", logo: Icon4 },
    { name: "Edwards Lifesciences", logo: Icon5 },
    { name: "Fidelity", logo: Icon6 },
    { name: "Getinge", logo: Icon7 },
    { name: "HCL", logo: Icon8 },
    { name: "IBM", logo: Icon9 },
    { name: "Johnson & Johnson", logo: Icon10 },
    { name: "L&T", logo: Icon11 },
    { name: "LivaNova", logo: Icon12 },
    { name: "Moderna", logo: Icon13 },
    { name: "State Street", logo: Icon14 },
    { name: "Terumo", logo: Icon15 },
    { name: "Vertex", logo: Icon16 },
    { name: "Zimmer Biomet", logo: Icon17 },
  ];

  // Testimonials data
  const testimonials = [
    {
      company: "Johnson & Johnson",
      companyLogo: Icon10,
      text: "Intellectt has been a pleasure to work with. They quickly understood our business needs and embedded talented technologists into our engineering teams to help build our modern data platform. Their thoroughness, collaborative working style, and flexibility were greatly appreciated throughout the duration of this engagement and we look forward to opportunities for continued partnership.",
      author: "Sarah Johnson",
      title: "Chief Technology Officer, Johnson & Johnson",
      rating: 5,
    },
    {
      company: "Moderna",
      companyLogo: Icon13,
      text: "The team at Intellectt demonstrated exceptional technical expertise and deep understanding of our industry challenges. Their innovative solutions and commitment to excellence have been instrumental in our digital transformation journey.",
      author: "Michael Chen",
      title: "VP of Engineering, Moderna",
      rating: 5,
    },
    {
      company: "Deloitte",
      companyLogo: Icon4,
      text: "Intellectt's strategic approach and technical capabilities have consistently delivered outstanding results for our organization. Their collaborative partnership model and innovative solutions have been key to our success.",
      author: "Emily Rodriguez",
      title: "Senior Director, Deloitte",
      rating: 5,
    },
    {
      company: "IBM",
      companyLogo: Icon9,
      text: "Working with Intellectt has been transformative for our technology initiatives. Their expertise in AI and cloud solutions has accelerated our digital transformation and positioned us for future growth.",
      author: "David Thompson",
      title: "CTO, IBM",
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
        padding: "100px 0 80px 0",
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
            marginBottom: "80px",
          }}
        >
          <h2
            style={{
              fontSize: "3.5rem",
              fontWeight: "800",
              color: "#000000",
              margin: "0 0 20px 0",
              lineHeight: "1.1",
            }}
          >
            400+ Leading Companies
          </h2>
          <p
            style={{
              fontSize: "1.3rem",
              color: "#64748b",
              fontWeight: "500",
              margin: "0",
              maxWidth: "600px",
              margin: "0 auto",
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
            gap: "80px",
            alignItems: "center",
            marginBottom: "80px",
            minHeight: "600px",
          }}
        >
          {/* Left Side - Current Company Logo */}
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "500px",
            }}
          >
            <h3
              style={{
                fontSize: "2rem",
                fontWeight: "700",
                color: "#1e293b",
                margin: "0 0 40px 0",
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
                borderRadius: "30px",
                padding: "60px 40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "300px",
                width: "100%",
                maxWidth: "400px",
                boxShadow: "0 20px 80px rgba(0,0,0,0.15)",
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
            style={{
              position: "relative",
              minHeight: "500px",
            }}
          >
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(20px)",
                borderRadius: "30px",
                padding: "50px",
                boxShadow: "0 20px 80px rgba(0,0,0,0.15)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                position: "relative",
                overflow: "hidden",
                minHeight: "500px",
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
                    height: "70px",
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
                  top: "30px",
                  right: "30px",
                  fontSize: "4rem",
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
                    fontSize: "1.4rem",
                    lineHeight: "1.8",
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
                    fontSize: "1.3rem",
                    fontWeight: "700",
                    color: "#1e293b",
                    margin: "0 0 8px 0",
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
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                    transition: "all 0.3s ease",
                    fontSize: "1.5rem",
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
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                    transition: "all 0.3s ease",
                    fontSize: "1.5rem",
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
            }}
          >
            {allPartners.map((partner, index) => (
              <img
                key={index}
                src={partner.logo}
                alt={partner.name}
                style={{
                  height: "45px",
                  objectFit: "contain",
                  filter: "none",
                  opacity: "1",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.3)";
                  e.target.style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.opacity = "1";
                }}
              />
            ))}
          </div>
        </div>

        {/* Explore Partners Button */}
        <div
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

          h2 {
            font-size: 2.5rem !important;
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
        }

        @media (max-width: 480px) {
          .partner-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
          }

          h2 {
            font-size: 2rem !important;
          }

          .container {
            padding: 0 15px;
          }
        }
      `}</style>
    </section>
  );
};

export default IntegrationSection;

