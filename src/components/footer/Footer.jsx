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
        position: "relative",
        zIndex: 2,
        marginTop: "2rem",
      }}
    >
      <style>
        {`
          @media (max-width: 768px) {
            .footer-container {
              padding: 0 1rem !important;
            }
            .footer-row {
              flex-direction: row !important;
              flex-wrap: wrap !important;
              gap: 1.5rem !important;
            }
            .footer-col {
              flex: 0 0 calc(50% - 0.75rem) !important;
              min-width: calc(50% - 0.75rem) !important;
              padding-left: 1rem !important;
              margin-bottom: 1.5rem !important;
            }
            .footer-col:first-child {
              flex: 0 0 100% !important;
              min-width: 100% !important;
            }
            .footer-bottom {
              flex-direction: column !important;
              text-align: center !important;
              gap: 1rem !important;
            }
            .footer-social {
              justify-content: center !important;
            }
            .footer-newsletter {
              margin-top: 1rem !important;
            }
          }
          
          /* Specific breakpoint for tablet screens (770px to 983px) */
          @media (min-width: 769px) and (max-width: 983px) {
            .footer-container {
              padding: 0 1.5rem !important;
            }
            .footer-row {
              flex-direction: row !important;
              flex-wrap: wrap !important;
              gap: 2rem !important;
            }
            .footer-col {
              flex: 0 0 calc(33.333% - 1.33rem) !important;
              min-width: calc(33.333% - 1.33rem) !important;
              padding-left: 1.5rem !important;
              margin-bottom: 2rem !important;
            }
            .footer-col:first-child {
              flex: 0 0 calc(50% - 1rem) !important;
              min-width: calc(50% - 1rem) !important;
            }
            .footer-col:nth-child(2) {
              flex: 0 0 calc(50% - 1rem) !important;
              min-width: calc(50% - 1rem) !important;
            }
            .footer-col:nth-child(3),
            .footer-col:nth-child(4),
            .footer-col:nth-child(5) {
              flex: 0 0 calc(33.333% - 1.33rem) !important;
              min-width: calc(33.333% - 1.33rem) !important;
            }
            .footer-bottom {
              flex-direction: row !important;
              text-align: left !important;
              gap: 0 !important;
            }
            .footer-social {
              justify-content: flex-end !important;
            }
            .footer-newsletter {
              margin-top: 0 !important;
            }
          }
          
          @media (min-width: 984px) {
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
      <div className="container footer-container">
        {/* Main Content */}
        <div
          className="row footer-row"
          style={{
            padding: "25px 0 20px 0",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {/* Company Info */}
          <div
            className="col-lg-3 col-md-6 col-sm-12 footer-col"
            style={{ flex: "0 0 20%", minWidth: "0" }}
          >
            <h4
              style={{
                color: "#1f2937",
                fontSize: "18px",
                fontWeight: "700",
                marginBottom: "10px",
              }}
            >
              Intellectt
            </h4>
            <p
              style={{
                color: "#6b7280",
                fontSize: "13px",
                lineHeight: "1.4",
                marginBottom: "10px",
                maxWidth: "280px",
              }}
            >
              Empowering businesses with cutting-edge AI and technology
              solutions that drive innovation and accelerate growth.
            </p>

            {/* Contact Info */}
            <div style={{ marginBottom: "10px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "6px",
                }}
              >
                <i
                  className="fas fa-envelope"
                  style={{
                    color: "#e53e3e",
                    fontSize: "14px",
                    marginRight: "10px",
                    width: "14px",
                  }}
                ></i>
                <span style={{ color: "#6b7280", fontSize: "13px" }}>
                  contact@intellectt.com
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <i
                  className="fas fa-phone"
                  style={{
                    color: "#e53e3e",
                    fontSize: "14px",
                    marginRight: "10px",
                    width: "14px",
                  }}
                ></i>
                <span style={{ color: "#6b7280", fontSize: "13px" }}>
                  +17324126999
                </span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="footer-newsletter">
              <h5
                style={{
                  color: "#1f2937",
                  fontSize: "14px",
                  fontWeight: "600",
                  marginBottom: "8px",
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
                      padding: "10px 14px",
                      border: "1px solid #d1d5db",
                      borderRadius: "6px",
                      backgroundColor: "#ffffff",
                      color: "#374151",
                      fontSize: "13px",
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
                      padding: "5px 10px",
                      borderRadius: "4px",
                      fontSize: "12px",
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
            className="col-lg-2 col-md-6 col-sm-6 footer-col"
            style={{ paddingLeft: "25px", flex: "0 0 20%", minWidth: "0" }}
          >
            <h5
              style={{
                color: "#1f2937",
                fontSize: "14px",
                fontWeight: "600",
                marginBottom: "10px",
              }}
            >
              What We Do
            </h5>
            <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
              {[
                { text: "AI & GenAI", link: "/service/ai-and-gen-ai" },
                { text: "Cloud & Application Services", link: "/service/cloud-and-application-services" },
                { text: "Data & Analytics", link: "/service/data-and-analytics" },
                { text: "IoT Solutions", link: "/iot" },
                { text: "Managed IT Services", link: "/service/managed-it-services" },
                { text: "SAP Services", link: "/service/sap-services" },
                { text: "Talent Solutions", link: "/service/talent-solutions" },
              ].map((item, index) => (
                <li key={index} style={{ marginBottom: "8px" }}>
                  <Link
                    onClick={ClickHandler}
                    to={item.link}
                    style={{
                      color: "#6b7280",
                      fontSize: "13px",
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
            className="col-lg-2 col-md-6 col-sm-6 footer-col"
            style={{ paddingLeft: "25px", flex: "0 0 20%", minWidth: "0" }}
          >
            <h5
              style={{
                color: "#1f2937",
                fontSize: "14px",
                fontWeight: "600",
                marginBottom: "10px",
              }}
            >
              Who We Work With
            </h5>
            <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
              {[
                { text: "Healthcare & Life Sciences", link: "/industries/helthcare-and-life-sciences" },
                { text: "Manufacturing & Automotive", link: "/industries/menufacturing-and-automotive" },
                { text: "Banking & Financial Services", link: "/industries/banking-and-financial-services" },
                { text: "Aerospace & Defense", link: "/industries/aerospace-and-defense" },
                { text: "Retail & E-Commerce", link: "/industries/retail-and-ecommerce" },
                { text: "Energy & Utilities", link: "/industries/energy-and-utilities" },
              ].map((item, index) => (
                <li key={index} style={{ marginBottom: "8px" }}>
                  <Link
                    onClick={ClickHandler}
                    to={item.link}
                    style={{
                      color: "#6b7280",
                      fontSize: "13px",
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
            className="col-lg-2 col-md-6 col-sm-6 footer-col"
            style={{ paddingLeft: "25px", flex: "0 0 20%", minWidth: "0" }}
          >
            <h5
              style={{
                color: "#1f2937",
                fontSize: "14px",
                fontWeight: "600",
                marginBottom: "10px",
              }}
            >
              Insights
            </h5>
            <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
              {[
                { text: "Blog", link: "/blog" },
                { text: "Articles", link: "/insights/blog" },
                { text: "Whitepapers & Case Studies", link: "/insights/whitepapers-and-case-studies" },
              ].map((item, index) => (
                <li key={index} style={{ marginBottom: "8px" }}>
                  <Link
                    onClick={ClickHandler}
                    to={item.link}
                    style={{
                      color: "#6b7280",
                      fontSize: "13px",
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
            className="col-lg-2 col-md-6 col-sm-6 footer-col"
            style={{ paddingLeft: "25px", flex: "0 0 20%", minWidth: "0" }}
          >
            <h5
              style={{
                color: "#1f2937",
                fontSize: "14px",
                fontWeight: "600",
                marginBottom: "10px",
              }}
            >
              Who We Are
            </h5>
            <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
              {[
                { text: "Overview", link: "/about" },
                { text: "Leadership Team", link: "/Company/leadership-team" },
                { text: "Our Companies", link: "/about" },
                { text: "Our Global Presence", link: "/company/global-presence" },
                { text: "Contact", link: "/contact" },
              ].map((item, index) => (
                <li key={index} style={{ marginBottom: "8px" }}>
                  <Link
                    onClick={ClickHandler}
                    to={item.link}
                    style={{
                      color: "#6b7280",
                      fontSize: "13px",
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
            padding: "4px 0",
          }}
        >
          <div className="row align-items-center footer-bottom">
            <div className="col-md-6 col-sm-12 mb-2 mb-md-0">
              <p
                style={{
                  color: "#9ca3af",
                  fontSize: "13px",
                  margin: "0",
                }}
              >
                Intellectt Inc
              </p>
            </div>
            <div className="col-md-6 col-sm-12">
              <div
                className="footer-social"
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "16px",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <Link
                  to="/privacy-policy"
                  onClick={ClickHandler}
                  style={{
                    color: "#9ca3af",
                    fontSize: "13px",
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
                    fontSize: "13px",
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
                        fontSize: "14px",
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
