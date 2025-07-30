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
      style={{ backgroundColor: "#1a1a1a", padding: "10px 0" }}
    >
      <div className="container">
        <div className="xb-footer pt-0">
          {/* === Footer Inner (Main 4 Columns) === */}
          <div className="footer-inner mt-0 mb-0 row g-0 align-items-start">
            <div className="col-md-6 col-lg-3">
              <div className="sa-newslatter footer-widget">
                <span
                  className="xb-item--sub-title"
                  style={{ color: "#ffffff", fontSize: "16px", fontWeight: "600" }}
                >
                  Newsletter
                </span>
                                  <p
                    className="xb-item--content"
                    style={{
                      color: "#cccccc",
                      fontSize: "14px",
                      marginBottom: "2px",
                    }}
                  >
                    Sign up for our weekly newsletter.
                  </p>
                <form
                  className="xb-item--input_field pos-rel"
                  onSubmit={SubmitHandler}
                >
                  <input
                    type="email"
                    name="gmail"
                    id="text6"
                    placeholder="enter your email"
                    style={{ fontSize: "14px", padding: "10px" }}
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
                  style={{ color: "#cccccc", fontSize: "12px" }}
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

            <div className="col-md-6 col-lg-3">
              <div className="footer-widget">
                <span
                  className="xb-item--sub-title"
                  style={{ color: "#ffffff", fontSize: "16px", fontWeight: "600" }}
                >
                  Company
                </span>
                <ul className="xb-item--holder list-unstyled">
                  <li className="xb-item--list" style={{ marginBottom: "2px" }}>
                    <Link
                      onClick={ClickHandler}
                      to="/about"
                      style={{ color: "#cccccc", fontSize: "14px" }}
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="xb-item--list" style={{ marginBottom: "2px" }}>
                    <Link
                      onClick={ClickHandler}
                      to="/contact"
                      style={{ color: "#cccccc", fontSize: "14px" }}
                    >
                      Global Presence
                    </Link>
                  </li>
                  <li className="xb-item--list" style={{ marginBottom: "2px" }}>
                    <Link
                      onClick={ClickHandler}
                      to="/pricing"
                      style={{ color: "#cccccc", fontSize: "14px" }}
                    >
                      Leadership Team
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="footer-widget">
                <span
                  className="xb-item--sub-title"
                  style={{ color: "#ffffff", fontSize: "16px", fontWeight: "600" }}
                >
                  Our Services
                </span>
                <ul className="xb-item--holder list-unstyled">
                  <li className="xb-item--list" style={{ marginBottom: "8px" }}>
                    <Link
                      onClick={ClickHandler}
                      to="/service/ai-and-gen-ai"
                      style={{ color: "#cccccc", fontSize: "14px" }}
                    >
                      AI & GenAI Practice
                    </Link>
                  </li>
                  <li className="xb-item--list" style={{ marginBottom: "8px" }}>
                    <Link
                      onClick={ClickHandler}
                      to="/service/cloud-and-application-services"
                      style={{ color: "#cccccc", fontSize: "14px" }}
                    >
                      Cloud & Application Services
                    </Link>
                  </li>
                  <li className="xb-item--list" style={{ marginBottom: "8px" }}>
                    <Link
                      onClick={ClickHandler}
                      to="/service/sap-services"
                      style={{ color: "#cccccc", fontSize: "14px" }}
                    >
                      SAP Services
                    </Link>
                  </li>
                  <li className="xb-item--list" style={{ marginBottom: "8px" }}>
                    <Link
                      onClick={ClickHandler}
                      to="/service/managed-it-services"
                      style={{ color: "#cccccc", fontSize: "14px" }}
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

            <div className="col-md-6 col-lg-3">
              <div className="footer-widget">
                <span
                  className="xb-item--sub-title"
                  style={{ color: "#ffffff", fontSize: "16px", fontWeight: "600" }}
                >
                  Our Industries
                </span>
                <ul className="xb-item--holder list-unstyled">
                  <li className="xb-item--list" style={{ marginBottom: "8px" }}>
                    <Link
                      onClick={ClickHandler}
                      to="/industries/helthcare-and-life-sciences"
                      style={{ color: "#cccccc", fontSize: "14px" }}
                    >
                      Healthcare & Life Sciences
                    </Link>
                  </li>
                  <li className="xb-item--list" style={{ marginBottom: "8px" }}>
                    <Link
                      onClick={ClickHandler}
                      to="/industries/menufacturing-and-automotive"
                      style={{ color: "#cccccc", fontSize: "14px" }}
                    >
                      Manufacturing & Automotive
                    </Link>
                  </li>
                  <li className="xb-item--list" style={{ marginBottom: "8px" }}>
                    <Link
                      onClick={ClickHandler}
                      to="/industries/aerospace-and-defense"
                      style={{ color: "#cccccc", fontSize: "14px" }}
                    >
                      Aerospace & Defense
                    </Link>
                  </li>
                  <li className="xb-item--list" style={{ marginBottom: "8px" }}>
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
          </div>

          {/* === Info Items Row === */}
          <div className="footer-info row g-0 mt-0">
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
                      marginBottom: "5px",
                    }}
                  >
                    Write to us
                  </p>
                  <h4
                    className="xb-item--title"
                    style={{ color: "#ffffff", fontSize: "16px" }}
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
                      marginBottom: "5px",
                    }}
                  >
                    Call Us (USA)
                  </p>
                  <h4
                    className="xb-item--title"
                    style={{ color: "#ffffff", fontSize: "16px" }}
                  >
                    +(1) 1230 452 8597
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* === Copyright Row === */}
          <div className="row mt-0 footer-copyright">
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
              <ul className="footer-link ul_li justify-content-md-end d-flex gap-3">
                <li>
                  <span style={{ color: "#cccccc", fontSize: "14px" }}>
                    Follow us :
                  </span>
                </li>
                <li>
                  <Link
                    onClick={ClickHandler}
                    to="/"
                    style={{ color: "#ffffff" }}
                  >
                    <i className="fab fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={ClickHandler}
                    to="/"
                    style={{ color: "#ffffff" }}
                  >
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={ClickHandler}
                    to="/"
                    style={{ color: "#ffffff" }}
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={ClickHandler}
                    to="/"
                    style={{ color: "#ffffff" }}
                  >
                    <i className="fab fa-youtube"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


