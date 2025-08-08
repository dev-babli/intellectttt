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
      style={{
        backgroundColor: "#f8f9fa",
        color: "#333333",
        borderTop: "1px solid #e5e7eb",
      }}
    >
      <style>
        {`
           @media (min-width: 768px) {
             .footer-row {
               display: flex !important;
               flex-wrap: nowrap !important;
             }
             .footer-col {
               flex: 0 0 20% !important;
               min-width: 0 !important;
             }
           }
         `}
      </style>
      <div className="container">
        {/* Main Content */}
        <div
          className="row footer-row"
          style={{
            padding: "30px 0 20px 0",
            display: "flex",
            flexWrap: "nowrap",
          }}
        >
          {/* Company Info */}
          <div
            className="col-lg-3 col-md-2 col-sm-12 mb-4 mb-lg-0 footer-col"
            style={{ flex: "0 0 20%", minWidth: "0" }}
          >
            <h4
              style={{
                color: "#1f2937",
                fontSize: "20px",
                fontWeight: "700",
                marginBottom: "12px",
              }}
            >
              Intellectt
            </h4>
            <p
              style={{
                color: "#6b7280",
                fontSize: "14px",
                lineHeight: "1.5",
                marginBottom: "12px",
                maxWidth: "300px",
              }}
            >
              Empowering businesses with cutting-edge AI and technology
              solutions that drive innovation and accelerate growth.
            </p>

            {/* Contact Info */}
            <div style={{ marginBottom: "12px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <i
                  className="fas fa-envelope"
                  style={{
                    color: "#e53e3e",
                    fontSize: "16px",
                    marginRight: "12px",
                    width: "16px",
                  }}
                ></i>
                <span style={{ color: "#6b7280", fontSize: "14px" }}>
                  contact@intellectt.com
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <i
                  className="fas fa-phone"
                  style={{
                    color: "#e53e3e",
                    fontSize: "16px",
                    marginRight: "12px",
                    width: "16px",
                  }}
                ></i>
                <span style={{ color: "#6b7280", fontSize: "14px" }}>
                  +17324126999
                </span>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h5
                style={{
                  color: "#1f2937",
                  fontSize: "15px",
                  fontWeight: "600",
                  marginBottom: "10px",
                }}
              >
                Newsletter
              </h5>
              <form onSubmit={SubmitHandler}>
                <div style={{ position: "relative" }}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "1px solid #d1d5db",
                      borderRadius: "6px",
                      backgroundColor: "#ffffff",
                      color: "#374151",
                      fontSize: "14px",
                      outline: "none",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#e53e3e";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#d1d5db";
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      position: "absolute",
                      right: "6px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "#e53e3e",
                      border: "none",
                      color: "#ffffff",
                      cursor: "pointer",
                      padding: "6px 12px",
                      borderRadius: "4px",
                      fontSize: "13px",
                      fontWeight: "500",
                    }}
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* What We Do */}
          <div
            className="col-lg-3 col-md-2 col-sm-6 mb-4 mb-lg-0 footer-col"
            style={{ paddingLeft: "30px", flex: "0 0 20%", minWidth: "0" }}
          >
            <h5
              style={{
                color: "#1f2937",
                fontSize: "15px",
                fontWeight: "600",
                marginBottom: "12px",
              }}
            >
              What We Do
            </h5>
            <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
              {[
                { text: "AI & GenAI", link: "/service/ai-and-gen-ai" },
                { text: "Cloud & Application", link: "/service/cloud-and-application-services" },
                { text: "Data & Analytics", link: "/service/data-and-analytics" },
                { text: "SAP Services", link: "/service/sap-services" },
                { text: "Managed IT Services", link: "/service/managed-it-services" },
                { text: "Talent Solutions", link: "/service/talent-solutions" },
              ].map((item, index) => (
                <li key={index} style={{ marginBottom: "10px" }}>
                  <Link
                    onClick={ClickHandler}
                    to={item.link}
                    style={{
                      color: "#6b7280",
                      fontSize: "14px",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#e53e3e")}
                    onMouseLeave={(e) => (e.target.style.color = "#6b7280")}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Who We Work With */}
          <div
            className="col-lg-3 col-md-2 col-sm-6 mb-4 mb-lg-0 footer-col"
            style={{ paddingLeft: "30px", flex: "0 0 20%", minWidth: "0" }}
          >
            <h5
              style={{
                color: "#1f2937",
                fontSize: "15px",
                fontWeight: "600",
                marginBottom: "12px",
              }}
            >
              Who We Work With
            </h5>
            <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
              {[
                { text: "Healthcare & Life Sciences", link: "/industries/helthcare-and-life-sciences" },
                { text: "Manufacturing & Automotive", link: "/industries/menufacturing-and-automotive" },
                { text: "Aerospace & Defense", link: "/industries/aerospace-and-defense" },
                { text: "Banking & Financial Services", link: "/industries/banking-and-financial-services" },
              ].map((item, index) => (
                <li key={index} style={{ marginBottom: "10px" }}>
                  <Link
                    onClick={ClickHandler}
                    to={item.link}
                    style={{
                      color: "#6b7280",
                      fontSize: "14px",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#e53e3e")}
                    onMouseLeave={(e) => (e.target.style.color = "#6b7280")}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Insights */}
          <div
            className="col-lg-2 col-md-2 col-sm-6 mb-4 mb-lg-0 footer-col"
            style={{ paddingLeft: "30px", flex: "0 0 20%", minWidth: "0" }}
          >
            <h5
              style={{
                color: "#1f2937",
                fontSize: "15px",
                fontWeight: "600",
                marginBottom: "12px",
              }}
            >
              Insights
            </h5>
            <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
              {[
                { text: "Blog", link: "/blog" },
                { text: "Case Studies", link: "/case-studies" },
                { text: "Whitepapers", link: "/whitepapers" },
                { text: "Webinars", link: "/webinars" },
              ].map((item, index) => (
                <li key={index} style={{ marginBottom: "10px" }}>
                  <Link
                    onClick={ClickHandler}
                    to={item.link}
                    style={{
                      color: "#6b7280",
                      fontSize: "14px",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#e53e3e")}
                    onMouseLeave={(e) => (e.target.style.color = "#6b7280")}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Who We Are */}
          <div
            className="col-lg-2 col-md-2 col-sm-6 mb-4 mb-lg-0 footer-col"
            style={{ paddingLeft: "30px", flex: "0 0 20%", minWidth: "0" }}
          >
            <h5
              style={{
                color: "#1f2937",
                fontSize: "15px",
                fontWeight: "600",
                marginBottom: "12px",
              }}
            >
              Who We Are
            </h5>
            <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
              {[
                { text: "About Us", link: "/about" },
                { text: "Our Journey", link: "/company/our-journey" },
                { text: "Leadership Team", link: "/company/leadership-team" },
                { text: "Global Presence", link: "/company/global-presence" },
                { text: "Careers", link: "/careers" },
                { text: "Contact", link: "/contact" },
              ].map((item, index) => (
                <li key={index} style={{ marginBottom: "10px" }}>
                  <Link
                    onClick={ClickHandler}
                    to={item.link}
                    style={{
                      color: "#6b7280",
                      fontSize: "14px",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#e53e3e")}
                    onMouseLeave={(e) => (e.target.style.color = "#6b7280")}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          style={{
            borderTop: "1px solid #e5e7eb",
            padding: "12px 0",
          }}
        >
          <div className="row align-items-center">
            <div className="col-md-6 col-sm-12 mb-3 mb-md-0">
              <p
                style={{
                  color: "#9ca3af",
                  fontSize: "14px",
                  margin: "0",
                }}
              >
                Intellectt Inc
              </p>
            </div>
            <div className="col-md-6 col-sm-12">
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "24px",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <Link
                  to="/privacy-policy"
                  onClick={ClickHandler}
                  style={{
                    color: "#9ca3af",
                    fontSize: "14px",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#e53e3e")}
                  onMouseLeave={(e) => (e.target.style.color = "#9ca3af")}
                >
                  Privacy
                </Link>
                <Link
                  to="/terms-conditions"
                  onClick={ClickHandler}
                  style={{
                    color: "#9ca3af",
                    fontSize: "14px",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#e53e3e")}
                  onMouseLeave={(e) => (e.target.style.color = "#9ca3af")}
                >
                  Terms
                </Link>
                <div style={{ display: "flex", gap: "12px" }}>
                  {[
                    {
                      icon: "fab fa-linkedin-in",
                      link: "https://linkedin.com/company/intellectt",
                    },
                    {
                      icon: "fab fa-twitter",
                      link: "https://twitter.com/intellectt",
                    },
                    {
                      icon: "fab fa-facebook-f",
                      link: "https://facebook.com/intellectt",
                    },
                  ].map((social, index) => (
                    <Link
                      key={index}
                      to={social.link}
                      style={{
                        color: "#9ca3af",
                        fontSize: "16px",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = "#e53e3e")}
                      onMouseLeave={(e) => (e.target.style.color = "#9ca3af")}
                    >
                      <i className={social.icon}></i>
                    </Link>
                  ))}
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
