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
      style={{ backgroundColor: "#C9C8C7" }}
    >
      <div className="container">
        <div className="xb-footer pt-0">
          {/* === Footer Inner (Main 4 Columns) === */}
          <div className="footer-inner mt-1 mb-1 row g-1 align-items-start">
            <div className="col-md-6 col-lg-3">
              <div className="sa-newslatter footer-widget">
                <span
                  className="xb-item--sub-title"
                  style={{ color: "#000000", fontSize: "11px" }}
                >
                  Newsletter
                </span>
                <p
                  className="xb-item--content"
                  style={{
                    color: "#000000",
                    fontSize: "9px",
                    marginBottom: "3px",
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
                  style={{ color: "#000000", fontSize: "7px" }}
                >
                  By continuing, you agree to Intellectt{" "}
                  <Link
                    onClick={ClickHandler}
                    to="/terms-conditions"
                    style={{ color: "#000000" }}
                  >
                    Terms
                  </Link>{" "}
                  of Use and{" "}
                  <Link
                    onClick={ClickHandler}
                    to="/privacy-policy"
                    style={{ color: "#000000" }}
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
                  style={{ color: "#000000", fontSize: "11px" }}
                >
                  Company
                </span>
                <ul className="xb-item--holder list-unstyled">
                  <li className="xb-item--list" style={{ marginBottom: "4px" }}>
                    <Link
                      onClick={ClickHandler}
                      to="/about"
                      style={{ color: "#000000", fontSize: "9px" }}
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="xb-item--list" style={{ marginBottom: "2px" }}>
                    <Link
                      onClick={ClickHandler}
                      to="/contact"
                      style={{ color: "#000000", fontSize: "9px" }}
                    >
                      Global Presence
                    </Link>
                  </li>
                  <li className="xb-item--list" style={{ marginBottom: "2px" }}>
                    <Link
                      onClick={ClickHandler}
                      to="/pricing"
                      style={{ color: "#000000", fontSize: "9px" }}
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
                  style={{ color: "#000000", fontSize: "11px" }}
                >
                  Our Services
                </span>
                <ul className="xb-item--holder list-unstyled">
                  <li className="xb-item--list" style={{ marginBottom: "4px" }}>
                    <Link
                      onClick={ClickHandler}
                      to="/service/ai-and-gen-ai"
                      style={{ color: "#000000", fontSize: "9px" }}
                    >
                      AI & GenAI Practice
                    </Link>
                  </li>
                  <li className="xb-item--list" style={{ marginBottom: "2px" }}>
                    <Link
                      onClick={ClickHandler}
                      to="/service/cloud-and-application-services"
                      style={{ color: "#000000", fontSize: "9px" }}
                    >
                      Cloud & Application Services
                    </Link>
                  </li>
                  <li className="xb-item--list" style={{ marginBottom: "2px" }}>
                    <Link
                      onClick={ClickHandler}
                      to="/service/sap-services"
                      style={{ color: "#000000", fontSize: "9px" }}
                    >
                      SAP Services
                    </Link>
                  </li>
                  <li className="xb-item--list" style={{ marginBottom: "2px" }}>
                    <Link
                      onClick={ClickHandler}
                      to="/service/managed-it-services"
                      style={{ color: "#000000", fontSize: "9px" }}
                    >
                      Managed IT Services
                    </Link>
                  </li>
                  <li className="xb-item--list" style={{ marginBottom: "2px" }}>
                    <Link
                      onClick={ClickHandler}
                      to="/service/data-and-analytics"
                      style={{ color: "#000000", fontSize: "9px" }}
                    >
                      Data & Analytics
                    </Link>
                  </li>
                  <li className="xb-item--list" style={{ marginBottom: "2px" }}>
                    <Link
                      onClick={ClickHandler}
                      to="/service/engineering-and-manufacturing-it"
                      style={{ color: "#000000", fontSize: "9px" }}
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
                  style={{ color: "#000000", fontSize: "11px" }}
                >
                  Our Industries
                </span>
                <ul className="xb-item--holder list-unstyled">
                  <li className="xb-item--list" style={{ marginBottom: "4px" }}>
                    <Link
                      onClick={ClickHandler}
                      to="/industries/helthcare-and-life-sciences"
                      style={{ color: "#000000", fontSize: "9px" }}
                    >
                      Healthcare & Life Sciences
                    </Link>
                  </li>
                  <li className="xb-item--list" style={{ marginBottom: "2px" }}>
                    <Link
                      onClick={ClickHandler}
                      to="/industries/menufacturing-and-automotive"
                      style={{ color: "#000000", fontSize: "9px" }}
                    >
                      Manufacturing & Automotive
                    </Link>
                  </li>
                  <li className="xb-item--list" style={{ marginBottom: "2px" }}>
                    <Link
                      onClick={ClickHandler}
                      to="/industries/aerospace-and-defense"
                      style={{ color: "#000000", fontSize: "9px" }}
                    >
                      Aerospace & Defense
                    </Link>
                  </li>
                  <li className="xb-item--list" style={{ marginBottom: "2px" }}>
                    <Link
                      onClick={ClickHandler}
                      to="/industries/banking-and-financial-services"
                      style={{ color: "#000000", fontSize: "9px" }}
                    >
                      Banking & Financial Services
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* === Info Items Row === */}
          <div className="footer-info row g-1 mt-0">
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
                      color: "#000000",
                      fontSize: "9px",
                      marginBottom: "0px",
                    }}
                  >
                    Write to us
                  </p>
                  <h4
                    className="xb-item--title"
                    style={{ color: "#000000", fontSize: "9px" }}
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
                      color: "#000000",
                      fontSize: "9px",
                      marginBottom: "0px",
                    }}
                  >
                    Call Us (USA)
                  </p>
                  <h4
                    className="xb-item--title"
                    style={{ color: "#000000", fontSize: "9px" }}
                  >
                    +(1) 1230 452 8597
                  </h4>
                </div>
              </div>
            </div>

            {/* You can uncomment this if needed */}
            {/* <div className="col-md-6 col-lg-4">
          <div className="info-item ul_li">
            <ul className="footer-link ul_li mt-20">
              <li><span>Follow us :</span></li>
              <li><Link onClick={ClickHandler} to="/"><i className="fab fa-twitter"></i></Link></li>
              <li><Link onClick={ClickHandler} to="/"><i className="fab fa-facebook-f"></i></Link></li>
              <li><Link onClick={ClickHandler} to="/"><i className="fab fa-linkedin-in"></i></Link></li>
              <li><Link onClick={ClickHandler} to="/"><i className="fab fa-youtube"></i></Link></li>
            </ul>
          </div>
        </div> */}
          </div>

          {/* === Copyright Row === */}
          <div className="row mt-0 footer-copyright">
            <div className="col-md-6 mt-1">
              <p
                className="copyright"
                style={{ color: "#000000", fontSize: "8px" }}
              >
                Copyright © 2025{" "}
                <Link
                  onClick={ClickHandler}
                  to="/"
                  style={{ color: "#000000" }}
                >
                  Intellectt
                </Link>
                . All rights reserved.
              </p>
            </div>
            <div className="col-md-6 mt-1">
              <ul className="footer-link ul_li justify-content-md-end d-flex gap-3">
                <li>
                  <span style={{ color: "#000000", fontSize: "8px" }}>
                    Follow us :
                  </span>
                </li>
                <li>
                  <Link
                    onClick={ClickHandler}
                    to="/"
                    style={{ color: "#000000" }}
                  >
                    <i className="fab fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={ClickHandler}
                    to="/"
                    style={{ color: "#000000" }}
                  >
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={ClickHandler}
                    to="/"
                    style={{ color: "#000000" }}
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={ClickHandler}
                    to="/"
                    style={{ color: "#000000" }}
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
