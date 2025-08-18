import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Services from "../../api/service";
import sIcon from "../../images/icon/arrow-black.svg";
import "./ServicesComponent.css";


const ServicesComponent = ({
  services = [],
  limit = 6,
  sectionStyle = { backgroundColor: "#ffffff" },
  showButton = false,
  buttonText = "Book a free consultation",
  buttonLink = "/contact",
}) => {

  
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  

  return (
    <section className="service pt-65 pb-50" style={sectionStyle}>
      <div className="container">
        <div className="row mt-none-30">
          {services.slice(0, limit).map((service, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12 mt-30" key={index}>
              <div className="service-box">
                {service.title && (
                  <div className="service-item">
                    <div className="xb-item--holder mb-85">
                      <h3 className="xb-item--title" style={{
                        fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                        lineHeight: '1.3',
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word',
                        hyphens: 'auto',
                        whiteSpace: 'normal'
                      }}>{service.title}</h3>
                      <span className="xb-item--contact" style={{
                        fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                        lineHeight: '1.4',
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word',
                        hyphens: 'auto',
                        whiteSpace: 'normal'
                      }}>{service.description}</span>
                    </div>
                    <div className="xb-item--icon ul_li_between">
                      <div className="xb-item--arrow">
                        <img src={sIcon} alt="arrow" />
                      </div>
                    </div>
                    <div className="xb-overlay"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* {showButton && (
          <div className="xb-btn text-center mt-60 wow fadeInUp" data-wow-delay="450ms" data-wow-duration="600ms">
            <Link onClick={ClickHandler} to={buttonLink} className="thm-btn thm-btn--aso thm-btn--aso_yellow">
              {buttonText}
            </Link>
          </div>
        )} */}
      </div>
    </section>
  );
};

export default ServicesComponent;
