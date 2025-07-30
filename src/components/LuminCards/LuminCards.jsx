// src/components/LuminCards.jsx
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import "./LuminCards.css";

const LuminCards = () => {
  const containerRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Minimal title animation
      gsap.fromTo(
        ".cards-section-title",
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".title-wrapper",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Minimal card animations
      const cards = [card1Ref.current, card2Ref.current];
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Subtle hover effects
      cards.forEach((card) => {
        if (card) {
          card.addEventListener("mouseenter", () => {
            gsap.to(card, {
              scale: 1.02,
              duration: 0.3,
              ease: "power2.out",
            });
          });

          card.addEventListener("mouseleave", () => {
            gsap.to(card, {
              scale: 1,
              duration: 0.3,
              ease: "power2.out",
            });
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="lumin-container" ref={containerRef}>
      <motion.div
        className="title-wrapper"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* <img src="/images/left.png" alt="Left Corner" className="title-decoration left" /> */}
        <h5 className="cards-section-title">
          Intellectt brings unique strengths together under a shared purpose
        </h5>
        {/* <img src="/images/right.png" alt="Right Corner" className="title-decoration right" /> */}
      </motion.div>

      <div className="cards-wrapper">
        {/* Healthcare Card */}
        <div className="lumin-card flip-card" ref={card1Ref}>
          <div className="flip-card-inner">
            <div
              className="flip-card-front"
              style={{
                backgroundImage: "url('/lumin-inc.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onClick={() => window.open("https://lumininc.com/", "_blank")}
            >
              <div className="card-content">
                <div className="logo-section">
                  <img
                    src="/images/lumin-logo.png"
                    alt="Lumin Healthcare"
                    className="company-logo"
                  />
                </div>
                <div className="badges">
                  <span className="badge">ESTD. 1994</span>
                  <span className="badge">ISO 13485 certified</span>
                </div>
                <h2 className="card-title" style={{ color: "white" }}>
                  Empowering Precision Healthcare Through
                  <span className="highlight">
                    {" "}
                    Innovative Display Solutions
                  </span>
                </h2>
                <a href="https://lumininc.com/" target="_blank">
                  <button className="explore-btn">Explore More</button>
                </a>
              </div>
              <div className="card-glow"></div>
            </div>

            <div className="flip-card-back">
              <div className="card-content back">
                <h2 style={{ color: "white", marginBottom: "1rem" }}>
                  What We Offer
                </h2>
                <ul
                  style={{
                    textAlign: "left",
                    paddingLeft: "1rem",
                    color: "#fff",
                    fontSize: "0.9rem",
                    lineHeight: 1.6,
                  }}
                >
                  <li>Mammography Displays</li>
                  <li>General Radiology Displays</li>
                  <li>Modality Displays</li>
                  <li>Medical Displays</li>
                  <li>Software Products</li>
                  <li>Custom Medical Displays</li>
                  <li>Wire Harness</li>
                </ul>
                <a href="https://lumininc.com/" target="_blank">
                  <button
                    className="explore-btn"
                    style={{ marginTop: "1.2rem" }}
                  >
                    Know More
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Center Divider Image */}
        <div className="card-divider-image">
          <img src="/Intellectt-Inc.png" alt="Divider" />
        </div>

        {/* Manufacturing Card */}
        <div className="lumin-card flip-card" ref={card2Ref}>
          <div className="flip-card-inner">
            <div
              className="flip-card-front"
              style={{
                backgroundImage: "url('/Lumin-Innovation.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onClick={() =>
                window.open("https://lumin-innovations.com/", "_blank")
              }
            >
              <div className="card-content">
                <div className="logo-section">
                  <img
                    src="/images/lumin-innovations-horizontal.png"
                    alt="Lumin Manufacturing"
                    className="company-banner"
                  />
                </div>
                <div className="badges">
                  <span className="badge">ESTD. 1994</span>
                  <span className="badge">ISO 9001:2015</span>
                  <span className="badge">AS9100D certified</span>
                </div>
                <h2 className="card-title" style={{ color: "white" }}>
                  Your ultimate partner in
                  <span className="highlight">
                    {" "}
                    Wire Harness Design & Manufacturing
                  </span>
                </h2>
                <a href="https://lumin-innovations.com/" target="_blank">
                  <button className="explore-btn">Explore More</button>
                </a>
              </div>
              <div className="card-glow"></div>
            </div>

            <div className="flip-card-back">
              <div className="card-content back">
                <h2 style={{ color: "white", marginBottom: "1rem" }}>
                  What We Offer
                </h2>
                <ul
                  style={{
                    textAlign: "left",
                    paddingLeft: "1rem",
                    color: "#fff",
                    fontSize: "0.9rem",
                    lineHeight: 1.6,
                  }}
                >
                  <li>Systems & Architecture</li>
                  <li>Schematic & Harness</li>
                  <li>Prototype & Validation</li>
                  <li>HV & Component Engineering</li>
                  <li>EE Installation & Illustration</li>
                  <li>VAS (VAVE, Automation, Simulation)</li>
                </ul>
                <a href="https://lumin-innovations.com/" target="_blank">
                  <button
                    className="explore-btn"
                    style={{ marginTop: "1.2rem" }}
                  >
                    Discover More
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuminCards;
