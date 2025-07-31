import React from "react";
import { Link } from "react-router-dom";
import icon1 from "../../images/icon/sms-white.svg";
import icon2 from "../../images/icon/call-white.svg";
import icon3 from "../../images/icon/location.svg";
import icon4 from "../../images/icon/sms02.svg";
import Services from "../../api/service";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const SubmitHandler = (e) => {
  e.preventDefault();
};

const Footer = (props) => {
  return (
    <footer
      className="footer footer-style-two bg_img pos-rel"
      style={{ backgroundColor: "#1a1a1a", padding: "0", maxHeight: "450px" }}
    >
      <div className="container">
        <div className="xb-footer pt-0" style={{ padding: "0" }}>
          {/* === Footer Inner (Main 4 Columns) === */}
                    <div className="footer-inner mt-0 mb-0 row g-5 align-items-start" style={{ padding: "40px 0" }}>
            <div className="col-md-6 col-lg-2">
              <div className="footer-widget">
                <span
                  className="xb-item--sub-title"
                  style={{ color: "#ffffff", fontSize: "16px", fontWeight: "600", marginBottom: "12px", display: "block" }}
                >
                  Newsletter
                </span>
                <p
                  className="xb-item--content"
                  style={{
                    color: "#cccccc",
                    fontSize: "14px",
                    marginBottom: "12px",
                    lineHeight: "1.4",
                  }}
                >
                  Sign up for our weekly newsletter.
                </p>
                <form
                  className="xb-item--input_field pos-rel"
                  onSubmit={SubmitHandler}
                  style={{ marginBottom: "12px" }}
                >
                  <input
                    type="email"
                    name="gmail"
                    id="text6"
                    placeholder="enter your email"
                    style={{ fontSize: "14px", padding: "12px 16px", borderRadius: "6px", border: "1px solid #333", background: "#2a2a2a", color: "#ffffff", width: "100%" }}
                  />
                  <div className="img">
                    <img src={icon4} alt="" />
                  </div>
                  <button type="submit" className="xb-item--btn">
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </form>
                <span
                  className="xb-item--text"
                  style={{ color: "#cccccc", fontSize: "12px", marginTop: "8px", display: "block" }}
                >
                  By continuing, you agree to Intellectt{" "}
                  <Link
                    onClick={ClickHandler}
                    to="/terms-conditions"
                    style={{ color: "#ffffff" }}
                  >
                    Terms
                  </Link>{" "}
                  of Use and{" "}
                  <Link
                    onClick={ClickHandler}
                    to="/privacy-policy"
                    style={{ color: "#ffffff" }}
                  >
                    Privacy Policy
                  </Link>
                </span>
              </div>
            </div>

            <div className="col-md-6 col-lg-2">
              <div className="footer-widget">
                <span
                  className="xb-item--sub-title"
                  style={{ color: "#ffffff", fontSize: "16px", fontWeight: "600", marginBottom: "12px", display: "block" }}
                >
                  Company
                </span>
                                  <ul className="xb-item--holder list-unstyled">
                    <li className="xb-item--list" style={{ marginBottom: "8px" }}>
                      <Link
                        onClick={ClickHandler}
                        to="/about"
                        style={{ color: "#cccccc", fontSize: "14px", textDecoration: "none", transition: "color 0.2s ease", display: "block", marginBottom: "6px" }}
                      >
                        About Us
                      </Link>
                    </li>
                    <li className="xb-item--list" style={{ marginBottom: "8px" }}>
                      <Link
                        onClick={ClickHandler}
                        to="/contact"
                        style={{ color: "#cccccc", fontSize: "14px", textDecoration: "none", transition: "color 0.2s ease", display: "block", marginBottom: "6px" }}
                      >
                        Global Presence
                      </Link>
                    </li>
                    <li className="xb-item--list" style={{ marginBottom: "8px" }}>
                      <Link
                        onClick={ClickHandler}
                        to="/pricing"
                        style={{ color: "#cccccc", fontSize: "14px", textDecoration: "none", transition: "color 0.2s ease", display: "block", marginBottom: "6px" }}
                      >
                        Leadership Team
                      </Link>
                    </li>
                  </ul>
              </div>
            </div>

            <div className="col-md-6 col-lg-2">
              <div className="footer-widget">
                <span
                  className="xb-item--sub-title"
                  style={{ color: "#ffffff", fontSize: "16px", fontWeight: "600", marginBottom: "12px", display: "block" }}
                >
                  Our Services
                </span>
                <ul className="xb-item--holder list-unstyled">
                  <li className="xb-item--list" style={{ marginBottom: "8px" }}>
                    <Link
                      onClick={ClickHandler}
                      to="/service/ai-and-gen-ai"
                      style={{ color: "#cccccc", fontSize: "14px", display: "block", marginBottom: "6px" }}
                    >
                      AI & GenAI Practice
                    </Link>
                  </li>
                  <li className="xb-item--list" style={{ marginBottom: "8px" }}>
                    <Link
                      onClick={ClickHandler}
                      to="/service/cloud-and-application-services"
                      style={{ color: "#cccccc", fontSize: "12px" }}
                    >
                      Cloud & Application Services
                    </Link>
                  </li>
                  <li className="xb-item--list" style={{ marginBottom: "8px" }}>
                    <Link
                      onClick={ClickHandler}
                      to="/service/sap-services"
                      style={{ color: "#cccccc", fontSize: "12px" }}
                    >
                      SAP Services
                    </Link>
                  </li>
                  <li className="xb-item--list" style={{ marginBottom: "8px" }}>
                    <Link
                      onClick={ClickHandler}
                      to="/service/managed-it-services"
                      style={{ color: "#cccccc", fontSize: "12px" }}
                    >
                      Managed IT Services
                    </Link>
                  </li>
                  <li className="xb-item--list" style={{ marginBottom: "8px" }}>
                    <Link
                      onClick={ClickHandler}
                      to="/service/data-and-analytics"
                      style={{ color: "#cccccc", fontSize: "14px" }}
                    >
                      Data & Analytics
                    </Link>
                  </li>
                  <li className="xb-item--list" style={{ marginBottom: "8px" }}>
                    <Link
                      onClick={ClickHandler}
                      to="/service/engineering-and-manufacturing-it"
                      style={{ color: "#cccccc", fontSize: "14px" }}
                    >
                      Engineering & Manufacturing IT
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 col-lg-2">
              <div className="footer-widget">
                <span
                  className="xb-item--sub-title"
                  style={{ color: "#ffffff", fontSize: "16px", fontWeight: "600", marginBottom: "12px", display: "block" }}
                >
                  Our Industries
                </span>
                <ul className="xb-item--holder list-unstyled">
                  <li className="xb-item--list" style={{ marginBottom: "6px" }}>
                    <Link
                      onClick={ClickHandler}
                      to="/industries/helthcare-and-life-sciences"
                      style={{ color: "#cccccc", fontSize: "14px", display: "block" }}
                    >
                      Healthcare & Life Sciences
                    </Link>
                  </li>
                  <li className="xb-item--list" style={{ marginBottom: "4px" }}>
                    <Link
                      onClick={ClickHandler}
                      to="/industries/menufacturing-and-automotive"
                      style={{ color: "#cccccc", fontSize: "14px" }}
                    >
                      Manufacturing & Automotive
                    </Link>
                  </li>
                  <li className="xb-item--list" style={{ marginBottom: "4px" }}>
                    <Link
                      onClick={ClickHandler}
                      to="/industries/aerospace-and-defense"
                      style={{ color: "#cccccc", fontSize: "14px" }}
                    >
                      Aerospace & Defense
                    </Link>
                  </li>
                  <li className="xb-item--list" style={{ marginBottom: "4px" }}>
                    <Link
                      onClick={ClickHandler}
                      to="/industries/banking-and-financial-services"
                      style={{ color: "#cccccc", fontSize: "14px" }}
                    >
                      Banking & Financial Services
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Social Links Column */}
            <div className="col-md-6 col-lg-2">
              <div className="footer-widget">
                <span
                  className="xb-item--sub-title"
                  style={{ color: "#ffffff", fontSize: "16px", fontWeight: "600", marginBottom: "12px", display: "block" }}
                >
                  Follow Us
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Link
                      to="https://twitter.com/intellectt"
                      style={{ color: "#ffffff", fontSize: "16px", transition: "color 0.2s ease" }}
                      onMouseEnter={(e) => e.target.style.color = "#1DA1F2"}
                      onMouseLeave={(e) => e.target.style.color = "#ffffff"}
                    >
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <span style={{ color: "#cccccc", fontSize: "16px" }}>Twitter</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Link
                      to="https://facebook.com/intellectt"
                      style={{ color: "#ffffff", fontSize: "16px", transition: "color 0.2s ease" }}
                      onMouseEnter={(e) => e.target.style.color = "#1877F2"}
                      onMouseLeave={(e) => e.target.style.color = "#ffffff"}
                    >
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <span style={{ color: "#cccccc", fontSize: "16px" }}>Facebook</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Link
                      to="https://linkedin.com/company/intellectt"
                      style={{ color: "#ffffff", fontSize: "16px", transition: "color 0.2s ease" }}
                      onMouseEnter={(e) => e.target.style.color = "#0077B5"}
                      onMouseLeave={(e) => e.target.style.color = "#ffffff"}
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                    <span style={{ color: "#cccccc", fontSize: "16px" }}>LinkedIn</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Link
                      to="https://youtube.com/intellectt"
                      style={{ color: "#ffffff", fontSize: "16px", transition: "color 0.2s ease" }}
                      onMouseEnter={(e) => e.target.style.color = "#FF0000"}
                      onMouseLeave={(e) => e.target.style.color = "#ffffff"}
                    >
                      <i className="fab fa-youtube"></i>
                    </Link>
                    <span style={{ color: "#cccccc", fontSize: "16px" }}>YouTube</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Link
                      to="https://instagram.com/intellectt"
                      style={{ color: "#ffffff", fontSize: "16px", transition: "color 0.2s ease" }}
                      onMouseEnter={(e) => e.target.style.color = "#E4405F"}
                      onMouseLeave={(e) => e.target.style.color = "#ffffff"}
                    >
                      <i className="fab fa-instagram"></i>
                    </Link>
                    <span style={{ color: "#cccccc", fontSize: "16px" }}>Instagram</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* === Info Items Row === */}
          <div className="footer-info row g-4 mt-3" style={{ borderTop: "1px solid #333", paddingTop: "12px" }}>
            <div className="col-md-6 col-lg-4">
              <div className="info-item ul_li">
                <div className="xb-item--icon">
                  <span>
                    <img src={icon1} alt="" />
                  </span>
                </div>
                <div className="xb-item--holder">
                  <p
                    className="xb-item--content"
                    style={{
                      color: "#cccccc",
                      fontSize: "14px",
                      marginBottom: "8px",
                    }}
                  >
                    Write to us
                  </p>
                  <h4
                    className="xb-item--title"
                    style={{ color: "#ffffff", fontSize: "16px", fontWeight: "600" }}
                  >
                    Intellectt@gmail.com
                  </h4>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="info-item ul_li">
                <div className="xb-item--icon clr-blue">
                  <span>
                    <img src={icon2} alt="" />
                  </span>
                </div>
                <div className="xb-item--holder">
                  <p
                    className="xb-item--content"
                    style={{
                      color: "#cccccc",
                      fontSize: "14px",
                      marginBottom: "8px",
                    }}
                  >
                    Call Us (USA)
                  </p>
                  <h4
                    className="xb-item--title"
                    style={{ color: "#ffffff", fontSize: "16px", fontWeight: "600" }}
                  >
                    +(1) 1230 452 8597
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* === Copyright Row === */}
          <div className="row mt-3 footer-copyright" style={{ borderTop: "1px solid #333", paddingTop: "12px" }}>
            <div className="col-md-6">
              <p
                className="copyright"
                style={{ color: "#cccccc", fontSize: "14px" }}
              >
                Copyright © 2025{" "}
                <Link
                  onClick={ClickHandler}
                  to="/"
                  style={{ color: "#ffffff" }}
                >
                  Intellectt
                </Link>
                . All rights reserved.
              </p>
            </div>
            <div className="col-md-6">
              <div style={{ textAlign: "right" }}>
                <span
                  style={{ color: "#ffffff", fontSize: "16px", fontWeight: "600", marginBottom: "8px", display: "block" }}
                >
                  Follow Us
                </span>
                <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px" }}>
                  <Link
                    to="https://twitter.com/intellectt"
                    style={{ color: "#ffffff", fontSize: "16px", transition: "color 0.2s ease" }}
                    onMouseEnter={(e) => e.target.style.color = "#1DA1F2"}
                    onMouseLeave={(e) => e.target.style.color = "#ffffff"}
                  >
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link
                    to="https://facebook.com/intellectt"
                    style={{ color: "#ffffff", fontSize: "16px", transition: "color 0.2s ease" }}
                    onMouseEnter={(e) => e.target.style.color = "#1877F2"}
                    onMouseLeave={(e) => e.target.style.color = "#ffffff"}
                  >
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link
                    to="https://linkedin.com/company/intellectt"
                    style={{ color: "#ffffff", fontSize: "16px", transition: "color 0.2s ease" }}
                    onMouseEnter={(e) => e.target.style.color = "#0077B5"}
                    onMouseLeave={(e) => e.target.style.color = "#ffffff"}
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                  <Link
                    to="https://youtube.com/intellectt"
                    style={{ color: "#ffffff", fontSize: "16px", transition: "color 0.2s ease" }}
                    onMouseEnter={(e) => e.target.style.color = "#FF0000"}
                    onMouseLeave={(e) => e.target.style.color = "#ffffff"}
                  >
                    <i className="fab fa-youtube"></i>
                  </Link>
                  <Link
                    to="https://instagram.com/intellectt"
                    style={{ color: "#ffffff", fontSize: "16px", transition: "color 0.2s ease" }}
                    onMouseEnter={(e) => e.target.style.color = "#E4405F"}
                    onMouseLeave={(e) => e.target.style.color = "#ffffff"}
                  >
                    <i className="fab fa-instagram"></i>
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


