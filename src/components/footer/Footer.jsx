import React from "react";
import { Link } from "react-router-dom";
import icon1 from "../../images/icon/sms-white.svg";
import icon2 from "../../images/icon/call-white.svg";
import icon3 from "../../images/icon/location.svg";
import icon4 from "../../images/icon/sms02.svg";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const SubmitHandler = (e) => {
  e.preventDefault();
};

const Footer = (props) => {
  return (
    <footer
      className="footer-section"
      style={{ backgroundColor: "#f8f9fa", color: "#333333" }}
    >
      <div className="container">
        {/* Compact Main Content */}
        <div className="row" style={{ padding: "40px 0 30px 0" }}>
          {/* Company Info */}
          <div
            className="col-lg-4 col-md-6 col-sm-12 mb-4"
            style={{ paddingRight: "40px" }}
          >
            <h4
              style={{
                color: "#2c3e50",
                fontSize: "20px",
                fontWeight: "700",
                marginBottom: "15px",
              }}
            >
              Intellectt
            </h4>
            <p
              style={{
                color: "#5a6c7d",
                fontSize: "14px",
                lineHeight: "1.5",
                marginBottom: "20px",
              }}
            >
              Empowering businesses with cutting-edge technology solutions.
            </p>

            {/* Contact Info */}
            <div style={{ marginBottom: "20px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <img
                  src={icon1}
                  alt=""
                  style={{ width: "16px", height: "16px", marginRight: "10px" }}
                />
                <span style={{ color: "#5a6c7d", fontSize: "13px" }}>
                  Intellectt@gmail.com
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={icon2}
                  alt=""
                  style={{ width: "16px", height: "16px", marginRight: "10px" }}
                />
                <span style={{ color: "#5a6c7d", fontSize: "13px" }}>
                  +(1) 1230 452 8597
                </span>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h5
                style={{
                  color: "#2c3e50",
                  fontSize: "16px",
                  fontWeight: "600",
                  marginBottom: "12px",
                }}
              >
                Newsletter
              </h5>
              <form onSubmit={SubmitHandler} style={{ marginBottom: "10px" }}>
                <div style={{ position: "relative" }}>
                  <input
                    type="email"
                    placeholder="Email"
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      border: "1px solid #d1d5db",
                      borderRadius: "6px",
                      backgroundColor: "#ffffff",
                      color: "#374151",
                      fontSize: "13px",
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      position: "absolute",
                      right: "8px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "none",
                      border: "none",
                      color: "#6b7280",
                      cursor: "pointer",
                      fontSize: "14px",
                    }}
                  >
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Quick Links */}
          <div
            className="col-lg-2 col-md-6 col-sm-6 mb-4"
            style={{ paddingLeft: "20px" }}
          >
            <h5
              style={{
                color: "#2c3e50",
                fontSize: "16px",
                fontWeight: "600",
                marginBottom: "15px",
              }}
            >
              Company
            </h5>
            <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
              <li style={{ marginBottom: "8px" }}>
                <Link
                  onClick={ClickHandler}
                  to="/about"
                  style={{
                    color: "#5a6c7d",
                    fontSize: "13px",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#2c3e50")}
                  onMouseLeave={(e) => (e.target.style.color = "#5a6c7d")}
                >
                  About Us
                </Link>
              </li>
              <li style={{ marginBottom: "8px" }}>
                <Link
                  onClick={ClickHandler}
                  to="/career"
                  style={{
                    color: "#5a6c7d",
                    fontSize: "13px",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#2c3e50")}
                  onMouseLeave={(e) => (e.target.style.color = "#5a6c7d")}
                >
                  Careers
                </Link>
              </li>
              <li style={{ marginBottom: "8px" }}>
                <Link
                  onClick={ClickHandler}
                  to="/contact"
                  style={{
                    color: "#5a6c7d",
                    fontSize: "13px",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#2c3e50")}
                  onMouseLeave={(e) => (e.target.style.color = "#5a6c7d")}
                >
                  Let's Connect
                </Link>
              </li>
              <li>
                <Link
                  onClick={ClickHandler}
                  to="/blog"
                  style={{
                    color: "#5a6c7d",
                    fontSize: "13px",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#2c3e50")}
                  onMouseLeave={(e) => (e.target.style.color = "#5a6c7d")}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
            <h5
              style={{
                color: "#2c3e50",
                fontSize: "16px",
                fontWeight: "600",
                marginBottom: "15px",
              }}
            >
              Services
            </h5>
            <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
              <li style={{ marginBottom: "8px" }}>
                <Link
                  onClick={ClickHandler}
                  to="/service/ai-and-gen-ai"
                  style={{
                    color: "#5a6c7d",
                    fontSize: "13px",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#2c3e50")}
                  onMouseLeave={(e) => (e.target.style.color = "#5a6c7d")}
                >
                  AI & GenAI
                </Link>
              </li>
              <li style={{ marginBottom: "8px" }}>
                <Link
                  onClick={ClickHandler}
                  to="/service/cloud-and-application"
                  style={{
                    color: "#5a6c7d",
                    fontSize: "13px",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#2c3e50")}
                  onMouseLeave={(e) => (e.target.style.color = "#5a6c7d")}
                >
                  Cloud & App
                </Link>
              </li>
              <li style={{ marginBottom: "8px" }}>
                <Link
                  onClick={ClickHandler}
                  to="/service/sap-services"
                  style={{
                    color: "#5a6c7d",
                    fontSize: "13px",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#2c3e50")}
                  onMouseLeave={(e) => (e.target.style.color = "#5a6c7d")}
                >
                  SAP Services
                </Link>
              </li>
              <li style={{ marginBottom: "8px" }}>
                <Link
                  onClick={ClickHandler}
                  to="/service/managed-it-services"
                  style={{
                    color: "#5a6c7d",
                    fontSize: "13px",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#2c3e50")}
                  onMouseLeave={(e) => (e.target.style.color = "#5a6c7d")}
                >
                  Managed IT
                </Link>
              </li>
              <li>
                <Link
                  onClick={ClickHandler}
                  to="/service/data-and-analytics"
                  style={{
                    color: "#5a6c7d",
                    fontSize: "13px",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#2c3e50")}
                  onMouseLeave={(e) => (e.target.style.color = "#5a6c7d")}
                >
                  Data & Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <h5
              style={{
                color: "#2c3e50",
                fontSize: "16px",
                fontWeight: "600",
                marginBottom: "15px",
              }}
            >
              Industries
            </h5>
            <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
              <li style={{ marginBottom: "8px" }}>
                <Link
                  onClick={ClickHandler}
                  to="/industries/helthcare-and-life-sciences"
                  style={{
                    color: "#5a6c7d",
                    fontSize: "13px",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#2c3e50")}
                  onMouseLeave={(e) => (e.target.style.color = "#5a6c7d")}
                >
                  Healthcare
                </Link>
              </li>
              <li style={{ marginBottom: "8px" }}>
                <Link
                  onClick={ClickHandler}
                  to="/industries/menufacturing-and-automotive"
                  style={{
                    color: "#5a6c7d",
                    fontSize: "13px",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#2c3e50")}
                  onMouseLeave={(e) => (e.target.style.color = "#5a6c7d")}
                >
                  Manufacturing
                </Link>
              </li>
              <li style={{ marginBottom: "8px" }}>
                <Link
                  onClick={ClickHandler}
                  to="/industries/aerospace-and-defense"
                  style={{
                    color: "#5a6c7d",
                    fontSize: "13px",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#2c3e50")}
                  onMouseLeave={(e) => (e.target.style.color = "#5a6c7d")}
                >
                  Aerospace
                </Link>
              </li>
              <li>
                <Link
                  onClick={ClickHandler}
                  to="/industries/banking-and-financial-services"
                  style={{
                    color: "#5a6c7d",
                    fontSize: "13px",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#2c3e50")}
                  onMouseLeave={(e) => (e.target.style.color = "#5a6c7d")}
                >
                  Banking
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Compact Bottom Section */}
        <div
          style={{ borderTop: "1px solid #e5e7eb", padding: "20px 0 15px 0" }}
        >
          <div className="row align-items-center">
            <div className="col-md-6 col-sm-12 mb-3 mb-md-0">
              <p
                style={{
                  color: "#6b7280",
                  fontSize: "13px",
                  margin: "0",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                © 2024 Intellectt. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 col-sm-12">
              <div
                style={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-end" },
                  gap: "20px",
                  flexWrap: "wrap",
                }}
              >
                <Link
                  to="/privacy-policy"
                  onClick={ClickHandler}
                  style={{
                    color: "#6b7280",
                    fontSize: "13px",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#2c3e50")}
                  onMouseLeave={(e) => (e.target.style.color = "#6b7280")}
                >
                  Privacy
                </Link>
                <Link
                  to="/terms-conditions"
                  onClick={ClickHandler}
                  style={{
                    color: "#6b7280",
                    fontSize: "13px",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#2c3e50")}
                  onMouseLeave={(e) => (e.target.style.color = "#6b7280")}
                >
                  Terms
                </Link>
                <div style={{ display: "flex", gap: "12px" }}>
                  <Link
                    to="https://linkedin.com/company/intellectt"
                    style={{
                      color: "#6b7280",
                      fontSize: "16px",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#0077B5")}
                    onMouseLeave={(e) => (e.target.style.color = "#6b7280")}
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                  <Link
                    to="https://twitter.com/intellectt"
                    style={{
                      color: "#6b7280",
                      fontSize: "16px",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#1DA1F2")}
                    onMouseLeave={(e) => (e.target.style.color = "#6b7280")}
                  >
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link
                    to="https://facebook.com/intellectt"
                    style={{
                      color: "#6b7280",
                      fontSize: "16px",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#1877F2")}
                    onMouseLeave={(e) => (e.target.style.color = "#6b7280")}
                  >
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
