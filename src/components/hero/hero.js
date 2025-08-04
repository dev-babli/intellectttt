import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Bg from "../../images/bg/hero-bg02.jpg";
import heroImg from "../../images/hero/about-us-poster-image.webp";
import heroImg2 from "../../images/hero/hero-img03.png";
import heroImg3 from "../../images/hero/hero-img04.png";

const Hero = () => {
  return (
    <section className="hero o-hidden hero-style-two pos-rel pt-120 bg_img">
      <div className="container">
        <div className="hero_wrap pt-40">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="xb-hero">
                <Fade
                  direction="up"
                  triggerOnce={"false"}
                  duration={1000}
                  delay={9}
                >
                  <div>
                    <h1
                      className="xb-item--title wow fadeInUp"
                      data-wow-duration="600ms"
                    >
                      Grow your business
                      <br /> with{" "}
                      <span> Intellectt’s strategic workforce solutions</span>
                    </h1>
                  </div>
                </Fade>
                <Fade
                  direction="up"
                  triggerOnce={"false"}
                  duration={1200}
                  delay={9}
                >
                  <div>
                    <p
                      className="xb-item--content wow fadeInUp"
                      data-wow-delay="100ms"
                      data-wow-duration="600ms"
                    >
                      (Think: scaling from uncertainty to unstoppable
                      growth—fast)
                    </p>
                  </div>
                </Fade>
                <Fade
                  direction="up"
                  triggerOnce={"false"}
                  duration={1400}
                  delay={9}
                >
                  <div>
                    <ul
                      className="xb-item--item list-unstyled wow fadeInUp"
                      data-wow-delay="200ms"
                      data-wow-duration="600ms"
                    >
                      <li>
                        <i className="far fa-check"></i> Recover lost
                        productivity with expert staffing
                      </li>
                      <li>
                        <i className="far fa-check"></i> Boost operational
                        efficiency across departments
                      </li>
                      <li>
                        <i className="far fa-check"></i> Strengthen your team
                        with industry-ready talent
                      </li>
                      <li>
                        <i className="far fa-check"></i> Achieve global reach
                        with presence in 30+ countries
                      </li>
                      <li>
                        <i className="far fa-check"></i> Accelerate project
                        delivery through agile resourcing
                      </li>
                      <li>
                        <i className="far fa-check"></i> Optimize costs without
                        compromising on quality
                      </li>
                      <li>
                        <i className="far fa-check"></i> Build a resilient
                        workforce for long-term success
                      </li>
                    </ul>
                  </div>
                </Fade>
                <Fade
                  direction="up"
                  triggerOnce={"false"}
                  duration={1600}
                  delay={9}
                >
                  <div>
                    <div
                      className="xb-btn mt-60 wow fadeInUp"
                      data-wow-delay="300ms"
                      data-wow-duration="600ms"
                    >
                      <Link
                        to="/contact"
                        className="thm-btn thm-btn--aso thm-btn--aso_yellow"
                      >
                        Book a free consultation
                      </Link>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-right_img pos-rel">
                <Fade
                  direction="right"
                  triggerOnce={"false"}
                  duration={1200}
                  delay={9}
                >
                  <img
                    className="wow fadeInRight"
                    data-wow-duration="600ms"
                    src={heroImg}
                    alt=""
                  />
                </Fade>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-scroll-down active">
          <AnchorLink href="#" className="scrollspy-btn">
            <span></span>
            <span></span>
            <span></span>
          </AnchorLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
