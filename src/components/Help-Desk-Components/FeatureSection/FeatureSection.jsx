import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import icon from "../../../images/icon/magic-black.svg";
import icon1 from "../../../images/feature/pic-with-computer.png";
import icon2 from "../../../images/feature/img01.png";

const FeatureSection = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const accordionData = [
    {
      title: "AI & Machine Learning Solutions",
      content:
        "Designing and implementing AI-driven systems to automate processes, enhance decision-making, and create intelligent products.",
    },
    {
      title: "Data Engineering & Advanced Analytics",
      content:
        "Building robust data pipelines, scalable architectures, and actionable analytics to drive real-time insights and smarter business operations.",
    },
    {
      title: "Diversity & Inclusion",
      content:
        "Digital Transformation Consulting Partnering with enterprises to modernize their technology landscape, streamline operations, and achieve digital excellence.",
    },
    {
      title: "Cloud Solutions & Infrastructure",
      content:
        "Providing secure, scalable, and optimized cloud environments that support agility, efficiency, and innovation.",
    },
    {
      title: "Product Development & IT Consulting",
      content:
        "From ideation to deployment, we engineer future-ready software solutions that align with your business goals.",
    },
  ];

  return (
    <section className="feature pb-100 ">
      <div className="container">
        <div className="feature-wrap">
          <div className="row align-items-center mt-none-30">
            <div className="col-lg-6 mt-30">
              <div className="feature-left-item pos-rel">
                <div className="xb-img">
                  <img src={icon1} alt="" />
                </div>
                <div className="xb-img-two">
                  <img className="updown-2" src={icon2} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-30">
              <div className="feature-right-item mt-30">
                <div className="sec-title--two sec-title--four mb-40">
                  {/* <Fade direction='down' triggerOnce={'false'} duration={1000} delay={9}>
                                        <div>
                                            <div className="sub-title wow fadeInDown" data-wow-delay="150ms" data-wow-duration="600ms"><img src={icon} alt="" />Impressive feature</div>
                                        </div>
                                    </Fade> */}
                  <Fade
                    direction="down"
                    triggerOnce={"false"}
                    duration={1500}
                    delay={9}
                  >
                    <div>
                      <h2
                        className="title mb-15 wow skewIn"
                        data-wow-duration="600ms"
                      >
                        What We Do?
                      </h2>
                    </div>
                  </Fade>
                  <p>
                    Transforming Businesses Through Technology
At Intellectt, we believe technology is more than a tool—it's a catalyst for change. Our services are designed to help businesses navigate disruption, unlock innovation, and achieve measurable outcomes.

                  </p>
                  <h5 className="my-4">Our Core Services Include</h5>
                </div>
                <div className="xb-faq xb-faq-two">
                  <ul className="accordion_box clearfix list-unstyled">
                    {accordionData.map((item, index) => (
                      <li
                        className={`accordion block ${
                          activeIndex === index ? "active-block" : ""
                        }`}
                        key={index}
                      >
                        <div
                          className={`acc-btn ${
                            activeIndex === index ? "active" : ""
                          }`}
                          onClick={() => toggleAccordion(index)}
                        >
                          {item.title}
                          <span className="arrow"></span>
                        </div>
                        <div
                          className={`acc_body ${
                            activeIndex === index ? "current" : ""
                          }`}
                          style={{
                            display: activeIndex === index ? "block" : "none",
                          }}
                        >
                          <div className="content">
                            <p>{item.content}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
