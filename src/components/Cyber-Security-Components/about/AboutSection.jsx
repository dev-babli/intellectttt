// components/common/AboutSection.jsx

import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const AboutSection = ({
  subtitleIcon,
  subtitle,
  title,
  content,
  buttonText,
  buttonLink,
  image,
  badgeImage,
  badgeNumber,
  badgeText,
}) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="about pt-60 pb-100 overflow-hidden">
      <div className="container">
        <div className="cs-about-wrap pos-rel">
          <div className="row mt-none-60">
            <div className="col-lg-6 mt-60">
              <div className="cs-about_left">
                <div className="sec-title--two sec-title--three">
                  <Fade direction="up" triggerOnce={false} duration={1000}>
                    <div className="sub-title">
                      {subtitleIcon && <img src={subtitleIcon} alt="" />}
                      <span>{subtitle}</span>
                    </div>
                  </Fade>
                  <Fade direction="up" triggerOnce={false} duration={1200}>
                    <h2 className="title">{title}</h2>
                  </Fade>
                  <Fade direction="up" triggerOnce={false} duration={1400}>
                    <p className="content">{content}</p>
                  </Fade>
                </div>
                {buttonText && (
                  <Fade direction="up" triggerOnce={false} duration={1400}>
                    <div className="xb-btn mt-60">
                      <Link
                        onClick={ClickHandler}
                        to={buttonLink}
                        className="thm-btn thm-btn--aso"
                      >
                        {buttonText}
                      </Link>
                    </div>
                  </Fade>
                )}
              </div>
            </div>

            <div className="col-lg-6 mt-60">
              <Fade direction="right" triggerOnce={false} duration={1400}>
                <div className="cs-about_right">
                  <div className="xb-img">
                    <img src={image} alt="about visual" />
                  </div>
                  <div className="xb-content">
                    <div className="xb-item--img">
                      <img src={badgeImage} alt="badge bg" />
                    </div>
                    <div className="xb-item--inner">
                      <h3 className="xb-item--number">{badgeNumber}</h3>
                      <span className="xb-item--content">{badgeText}</span>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
