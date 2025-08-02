import React, { useState } from "react";
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

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

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
    },
    {
      company: "Moderna",
      companyLogo: Icon13,
      text: "The team at Intellectt demonstrated exceptional technical expertise and deep understanding of our industry challenges. Their innovative solutions and commitment to excellence have been instrumental in our digital transformation journey.",
      author: "Michael Chen",
      title: "VP of Engineering, Moderna",
    },
    {
      company: "Deloitte",
      companyLogo: Icon4,
      text: "Intellectt's strategic approach and technical capabilities have consistently delivered outstanding results for our organization. Their collaborative partnership model and innovative solutions have been key to our success.",
      author: "Emily Rodriguez",
      title: "Senior Director, Deloitte",
    },
    {
      company: "IBM",
      companyLogo: Icon9,
      text: "Working with Intellectt has been transformative for our technology initiatives. Their expertise in AI and cloud solutions has accelerated our digital transformation and positioned us for future growth.",
      author: "David Thompson",
      title: "CTO, IBM",
    },
  ];

  return (
    <section
      id="integration"
      className="integration-section"
      style={{
        backgroundColor: "#ffffff",
        padding: "80px 0 60px 0",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <div
        className="container"
        style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 40px" }}
      >
        {/* Header Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "60px",
            flexWrap: "wrap",
            gap: "30px",
          }}
        >
          <div style={{ flex: "1", maxWidth: "600px" }}>
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "700",
                color: "#1a1a1a",
                margin: "0",
                lineHeight: "1.1",
                whiteSpace: "nowrap",
                textAlign: "left",
              }}
            >
              400+ Leading Companies Partner with Intellectt
            </h2>
          </div>
        </div>

        {/* Main Content Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "start",
            marginBottom: "60px",
          }}
        >
          {/* Partner Logos Grid - 9 logos in 3x3 */}
          <div>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                color: "#1a1a1a",
                margin: "0 0 40px 0",
                textAlign: "left",
              }}
            >
              Featured Partners
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "25px",
              }}
            >
              {mainPartners.map((partner, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: "#f8fafc",
                    borderRadius: "16px",
                    padding: "30px 20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "140px",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                    transition: "all 0.4s ease",
                    cursor: "pointer",
                    border: "1px solid #e5e7eb",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-8px)";
                    e.target.style.boxShadow = "0 12px 35px rgba(0,0,0,0.15)";
                    e.target.style.borderColor = "#0199d3";
                    e.target.style.backgroundColor = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "0 6px 20px rgba(0,0,0,0.08)";
                    e.target.style.borderColor = "#e5e7eb";
                    e.target.style.backgroundColor = "#f8fafc";
                  }}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "70px",
                      objectFit: "contain",
                      filter: "none",
                      opacity: "1",
                      transition: "all 0.4s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "scale(1.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "scale(1)";
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial Section - Bigger and Better */}
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "24px",
              padding: "50px",
              boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
              position: "relative",
              border: "1px solid #e5e7eb",
              minHeight: "520px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {/* Company Logo */}
            <div style={{ marginBottom: "30px", textAlign: "left" }}>
              <img
                src={testimonials[currentTestimonial].companyLogo}
                alt={testimonials[currentTestimonial].company}
                style={{
                  height: "60px",
                  objectFit: "contain",
                  filter: "none",
                  opacity: "1",
                }}
              />
            </div>

            {/* Testimonial Text - Bigger */}
            <div style={{ marginBottom: "30px", flex: "1" }}>
              <p
                style={{
                  fontSize: "1.3rem",
                  lineHeight: "1.8",
                  color: "#374151",
                  margin: "0",
                  fontStyle: "italic",
                  fontWeight: "400",
                  textAlign: "left",
                }}
              >
                "{testimonials[currentTestimonial].text}"
              </p>
            </div>

            {/* Author Information */}
            <div style={{ marginBottom: "30px", textAlign: "center" }}>
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  color: "#1a1a1a",
                  margin: "0 0 8px 0",
                }}
              >
                {testimonials[currentTestimonial].author}
              </p>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#6b7280",
                  margin: "0",
                  fontWeight: "500",
                }}
              >
                {testimonials[currentTestimonial].title}
              </p>
            </div>

            {/* Pagination Dots */}
            <div
              style={{
                display: "flex",
                gap: "10px",
                justifyContent: "center",
              }}
            >
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    border: "none",
                    backgroundColor:
                      index === currentTestimonial ? "#0199d3" : "#d1d5db",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (index !== currentTestimonial) {
                      e.target.style.backgroundColor = "#9ca3af";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (index !== currentTestimonial) {
                      e.target.style.backgroundColor = "#d1d5db";
                    }
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Additional Partners Row */}
        <div
          style={{
            marginBottom: "60px",
            textAlign: "left",
          }}
        >
          <h3
            style={{
              fontSize: "1.8rem",
              fontWeight: "600",
              color: "#1a1a1a",
              margin: "0 0 20px 0",
            }}
          >
            Trusted by Industry Leaders Worldwide
          </h3>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#6b7280",
              marginBottom: "50px",
              fontWeight: "500",
            }}
          >
            Join hundreds of companies that trust Intellectt for their digital
            transformation
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
                  height: "40px",
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
              backgroundColor: "#0199d3",
              color: "#ffffff",
              padding: "16px 32px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "1.1rem",
              fontWeight: "600",
              transition: "all 0.3s ease",
              border: "2px solid #0199d3",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#dc2626";
              e.target.style.borderColor = "#dc2626";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#0199d3";
              e.target.style.borderColor = "#0199d3";
              e.target.style.transform = "translateY(0)";
            }}
          >
            Explore Partners
          </Link>
        </div>
      </div>

      {/* Responsive Design */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .integration-section {
            padding: 100px 0 80px 0;
          }

          .container {
            padding: 0 30px;
          }

          h2 {
            font-size: 3rem !important;
          }

          .main-content-grid {
            grid-template-columns: 1fr !important;
            gap: 80px !important;
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
            padding: 80px 0 60px 0;
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
