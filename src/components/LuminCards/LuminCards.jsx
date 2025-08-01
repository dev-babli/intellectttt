// src/components/LuminCards.jsx
import React from "react";
import "./LuminCards.css";

const LuminCards = () => {
  return (
    <section className="enterprise-section">
      <div className="container">
        {/* Hero Section */}
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="hero-title">
              <span className="intellectt-brand">Intellectt</span>
              <span className="hero-subtitle">Global Technology Solutions</span>
            </h2>
            <p className="hero-description">
              We bring together specialized expertise across healthcare,
              manufacturing, and digital transformation to deliver innovative
              solutions that drive business growth.
            </p>
          </div>
        </div>

        {/* Companies Showcase */}
        <div className="companies-showcase">
          <div className="showcase-header">
            <h3 className="showcase-title">Our Specialized Companies</h3>
            <p className="showcase-subtitle">
              Each company focuses on delivering excellence in their respective
              domains
            </p>
          </div>

          <div className="companies-grid">
            {/* Lumin Innovations */}
            <div className="company-tile innovations-tile">
              <div className="tile-background">
                <div className="tile-overlay"></div>
              </div>

              <div className="tile-content">
                <div className="company-brand">
                  <div className="brand-logo">
                    <img
                      src="/images/lumin-innovations-horizontal.png"
                      alt="Lumin Innovations"
                      className="logo"
                    />
                  </div>
                  <div className="brand-info">
                    <h4 className="brand-name">Lumin Innovations</h4>
                    <span className="brand-tag">Advanced Manufacturing</span>
                  </div>
                </div>

                <div className="company-details">
                  <h5 className="company-headline">
                    Your ultimate partner in Wire Harness Design & Manufacturing
                  </h5>
                  <p className="company-summary">
                    Specialized in advanced wire harness solutions for
                    aerospace, automotive, and industrial applications with
                    precision engineering.
                  </p>

                  <div className="capabilities">
                    <div className="capability">
                      <div className="capability-icon">⚡</div>
                      <span>Systems & Architecture</span>
                    </div>
                    <div className="capability">
                      <div className="capability-icon">🔧</div>
                      <span>Prototype & Validation</span>
                    </div>
                    <div className="capability">
                      <div className="capability-icon">🚀</div>
                      <span>Aerospace Solutions</span>
                    </div>
                  </div>

                  <div className="credentials">
                    <span className="credential">ISO 9001:2015</span>
                    <span className="credential">AS9100D</span>
                    <span className="credential">EST. 1994</span>
                  </div>
                </div>

                <div className="tile-action">
                  <a
                    href="https://lumin-innovations.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-link"
                  >
                    <span>Explore Solutions</span>
                    <svg className="arrow" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Lumin Inc */}
            <div className="company-tile medtech-tile">
              <div className="tile-background">
                <div className="tile-overlay"></div>
              </div>

              <div className="tile-content">
                <div className="company-brand">
                  <div className="brand-logo">
                    <img
                      src="/images/lumin-logo.png"
                      alt="Lumin Inc"
                      className="logo"
                    />
                  </div>
                  <div className="brand-info">
                    <h4 className="brand-name">Lumin Inc</h4>
                    <span className="brand-tag">Healthcare Technology</span>
                  </div>
                </div>

                <div className="company-details">
                  <h5 className="company-headline">
                    Empowering Precision Healthcare Through Innovative Display
                    Solutions
                  </h5>
                  <p className="company-summary">
                    Leading provider of medical display solutions for diagnostic
                    imaging, ensuring accuracy and reliability in healthcare
                    environments worldwide.
                  </p>

                  <div className="capabilities">
                    <div className="capability">
                      <div className="capability-icon">🏥</div>
                      <span>Medical Displays</span>
                    </div>
                    <div className="capability">
                      <div className="capability-icon">📊</div>
                      <span>Diagnostic Imaging</span>
                    </div>
                    <div className="capability">
                      <div className="capability-icon">🔬</div>
                      <span>Precision Technology</span>
                    </div>
                  </div>

                  <div className="credentials">
                    <span className="credential">ISO 13485</span>
                    <span className="credential">Medical Certified</span>
                    <span className="credential">EST. 1994</span>
                  </div>
                </div>

                <div className="tile-action">
                  <a
                    href="https://lumininc.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-link"
                  >
                    <span>View Solutions</span>
                    <svg className="arrow" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
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
