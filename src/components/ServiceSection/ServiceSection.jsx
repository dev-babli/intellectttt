import React from "react";
import Services from "../../api/service";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import sIcon from "../../images/icon/arrow-black.svg";
import hIcon from "../../images/icon/ser-01.svg";

const ServiceSection = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="service pt-65 pb-65" style={{ background: "#ffffff" }}>
      <div className="container">
        <div className="row mt-none-30">
          <div className="col-lg-4 mt-30">
            <div className="service-info">
              <div className="sec-title--two text-left">
                <Fade
                  direction="down"
                  triggerOnce={"false"}
                  duration={1000}
                  delay={9}
                >
                  <div>
                    <span className="sub-title">
                      <img src={hIcon} alt="" />
                      Feature-services
                    </span>
                  </div>
                </Fade>
                <Fade
                  direction="up"
                  triggerOnce={"false"}
                  duration={1200}
                  delay={9}
                >
                  <div>
                    <h2 className="title"> AI-First, Future-Focused</h2>
                  </div>
                </Fade>
                <Fade
                  direction="up"
                  triggerOnce={"false"}
                  duration={1400}
                  delay={9}
                >
                  <div>
                    <p className="content">
                      At Intellectt, we are redefining what's possible with AI
                      and Generative AI—pushing the boundaries of innovation,
                      not just following trends.
                    </p>
                    <p className="content">
                      Our mission is to help businesses unlock the full
                      potential of intelligent systems—building scalable,
                      adaptive, and secure solutions powered by cutting-edge AI
                      technologies.
                    </p>
                    <p className="content">
                      From predictive analytics to natural language generation,
                      our work in AI and GenAI is transforming industries,
                      automating workflows, and driving smarter decision-making
                      at every level.
                    </p>
                    <p className="content">
                      With deep expertise in Machine Learning, Large Language
                      Models, Data Engineering, and Cloud Integration, we
                      deliver next-gen digital ecosystems that are not only
                      intelligent—but future-ready..
                    </p>
                  </div>
                </Fade>
              </div>
              <div className="xb-btn mt-50">
                <Fade
                  direction="up"
                  triggerOnce={"false"}
                  duration={1600}
                  delay={9}
                >
                  <div>
                    <Link
                      onClick={ClickHandler}
                      to="#"
                      className="thm-btn thm-btn--aso thm-btn--aso_yellow"
                    >
                      View more services
                    </Link>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-30">
            <div className="service-all_item">
              {Services.slice(0, 3).map((service, srv) => (
                <div className="service-box" key={srv}>
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
              ))}
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-30">
            <div className="service-all_item">
              {Services.slice(3, 6).map((service, srv) => (
                <div className="service-box" key={srv}>
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
