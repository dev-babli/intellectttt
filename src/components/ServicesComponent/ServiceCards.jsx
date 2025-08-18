import React from "react";
import { Link } from "react-router-dom";
import Services from "../../api/service";
import sIcon from "../../images/icon/arrow-black.svg";
import Bg from "../../images/bg/page_bg01.jpg";
import icon from "../../images/icon/ser-01.svg";

const ServiceCards = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="service pt-65 pb-130">
      <div className="container">
        <div className="row mt-none-30">
          {Services.slice(0, 3).map((service, srv) => (
            <div className="col-lg-4 col-md-6 mt-30" key={srv}>
              <div className="service-box">
                {service.title ? (
                  <div className="service-item">
                    <div className="xb-item--holder mb-85">
                      <h3 className="xb-item--title">{service.title}</h3>
                      <span className="xb-item--contact">
                        {service.description}
                      </span>
                    </div>
                    <div className="xb-item--icon ul_li_between">
                      <div className="xb-item--arrow">
                        <img src={sIcon} alt="" />
                      </div>
                    </div>
                    <div className="xb-overlay"></div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
        </div>
        <div
          className="xb-btn text-center mt-60 wow fadeInUp"
          data-wow-delay="450ms"
          data-wow-duration="600ms"
        >
          <Link
            onClick={ClickHandler}
            to="/contact"
            className="thm-btn thm-btn--aso thm-btn--aso_yellow"
          >
            Book a free consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
