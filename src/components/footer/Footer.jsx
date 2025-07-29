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
  style={{ backgroundColor: "#355ca8" }}
>
  <div className="container">
    <div className="xb-footer pt-10">
      
      {/* === Footer Inner (Main 4 Columns) === */}
      <div className="footer-inner mt-40 mb-40 row g-4 align-items-start">
        <div className="col-md-6 col-lg-3">
          <div className="sa-newslatter footer-widget">
            <span className="xb-item--sub-title">Newsletter</span>
            <p className="xb-item--content clr-white">
              Sign up to techco weekly newsletter to get the latest updates.
            </p>
            <form className="xb-item--input_field pos-rel" onSubmit={SubmitHandler}>
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
            <span className="xb-item--text">
              By continuing, you agree to Intellectt{" "}
              <Link onClick={ClickHandler} to="/terms-conditions">Terms</Link>{" "}
              of Use and{" "}
              <Link onClick={ClickHandler} to="/privacy-policy">Privacy Policy</Link>
            </span>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="footer-widget">
            <span className="xb-item--sub-title">Company</span>
            <ul className="xb-item--holder list-unstyled">
              <li className="xb-item--list">
                <Link onClick={ClickHandler} to="/about">About Us</Link>
              </li>
              <li className="xb-item--list">
                <Link onClick={ClickHandler} to="/contact">Global Presence</Link>
              </li>
              <li className="xb-item--list">
                <Link onClick={ClickHandler} to="/pricing">Leadership Team</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="footer-widget">
            <span className="xb-item--sub-title">Our Services</span>
            <ul className="xb-item--holder list-unstyled">
              <li className="xb-item--list">
                <Link onClick={ClickHandler} to="/service/ai-and-gen-ai">AI & GenAI Practice</Link>
              </li>
              <li className="xb-item--list">
                <Link onClick={ClickHandler} to="/service/cloud-and-application-services">Cloud & Application Services</Link>
              </li>
              <li className="xb-item--list">
                <Link onClick={ClickHandler} to="/service/sap-services">SAP Services</Link>
              </li>
              <li className="xb-item--list">
                <Link onClick={ClickHandler} to="/service/managed-it-services">Managed IT Services</Link>
              </li>
              <li className="xb-item--list">
                <Link onClick={ClickHandler} to="/service/data-and-analytics">Data & Analytics</Link>
              </li>
              <li className="xb-item--list">
                <Link onClick={ClickHandler} to="/service/engineering-and-manufacturing-it">Engineering & Manufacturing IT</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="footer-widget">
            <span className="xb-item--sub-title">Our Industries</span>
            <ul className="xb-item--holder list-unstyled">
              <li className="xb-item--list">
                <Link onClick={ClickHandler} to="/industries/helthcare-and-life-sciences">Healthcare & Life Sciences</Link>
              </li>
              <li className="xb-item--list">
                <Link onClick={ClickHandler} to="/industries/menufacturing-and-automotive">Manufacturing & Automotive</Link>
              </li>
              <li className="xb-item--list">
                <Link onClick={ClickHandler} to="/industries/aerospace-and-defense">Aerospace & Defense</Link>
              </li>
              <li className="xb-item--list">
                <Link onClick={ClickHandler} to="/industries/banking-and-financial-services">Banking & Financial Services</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* === Info Items Row === */}
      <div className="footer-info row g-4 mt-4">
        <div className="col-md-6 col-lg-4">
          <div className="info-item ul_li">
            <div className="xb-item--icon">
              <span><img src={icon1} alt="" /></span>
            </div>
            <div className="xb-item--holder">
              <p className="xb-item--content">Write to us</p>
              <h4 className="xb-item--title">Intellectt@gmail.com</h4>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="info-item ul_li">
            <div className="xb-item--icon clr-blue">
              <span><img src={icon2} alt="" /></span>
            </div>
            <div className="xb-item--holder">
              <p className="xb-item--content">Call Us (USA)</p>
              <h4 className="xb-item--title">+(1) 1230 452 8597</h4>
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
      <div className="row mt-4 footer-copyright">
        <div className="col-md-6 mt-20">
          <p className="copyright">
            Copyright © 2025{" "}
            <Link onClick={ClickHandler} to="/">Intellectt</Link>. All rights reserved.
          </p>
        </div>
        <div className="col-md-6 mt-20">
          <ul className="footer-link ul_li justify-content-md-end d-flex gap-3">
            <li><span>Follow us :</span></li>
            <li><Link onClick={ClickHandler} to="/"><i className="fab fa-twitter"></i></Link></li>
            <li><Link onClick={ClickHandler} to="/"><i className="fab fa-facebook-f"></i></Link></li>
            <li><Link onClick={ClickHandler} to="/"><i className="fab fa-linkedin-in"></i></Link></li>
            <li><Link onClick={ClickHandler} to="/"><i className="fab fa-youtube"></i></Link></li>
          </ul>
        </div>
      </div>
      
    </div>
  </div>
</footer>
  );
};

export default Footer;
