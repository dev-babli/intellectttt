import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Services from "../../api/service";
import sIcon from "../../images/icon/arrow-black.svg";


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
            <div className="col-lg-4 col-md-6 mt-30" key={index}>
              <div className="service-box">
                {service.title && (
                  <div className="service-item">
                    <div className="xb-item--holder mb-85">
                      <h3 className="xb-item--title">{service.title}</h3>
                      <span className="xb-item--contact">{service.description}</span>
                    </div>
                    <div className="xb-item--icon ul_li_between">
                      {/* <div className="xb-item--img">
                        <img src={service.sImg} alt={service.title} />
                      </div> */}
                      <Link
                        onClick={ClickHandler}
                        to={`/service-single/${service.slug}`}
                        className="xb-item--arrow"
                      >
                        <img src={sIcon} alt="arrow" />
                      </Link>
                    </div>
                    <Link
                      onClick={ClickHandler}
                      to={`/service-single/${service.slug}`}
                      className="xb-overlay"
                    ></Link>
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
