// src/components/common/WorkProcess.jsx
import React from 'react';
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom';

const WorkProcess = ({
  heading,
  description,
  buttonText ,
  buttonLink,
  processList = [],
  shapeImages = [],
}) => {
  return (
    <section className="process pt-140 pb-40 pos-rel" style={{ backgroundColor: "#fff" }}>
      <div className="container">
        <div className="row justify-content-center">
          {/* Left Section */}
          <div className="col-lg-5 col-md-8">
            <div className="process-left pt-70">
              <div className="sec-title">
                <Fade direction="down" triggerOnce={false} duration={1000} delay={9}>
                  <h2 className="title mb-40">{heading}</h2>
                </Fade>
                <Fade direction="up" triggerOnce={false} duration={1200} delay={9}>
                  <span className="content">{description}</span>
                </Fade>
              </div>

              {/* Button */}
              <Fade direction="up" triggerOnce={false} duration={1200} delay={9}>
                <div className="xb-btn mt-55">
                  <Link to={buttonLink} className="thm-btn thm-btn--fill_icon">
                    <div className="xb-item--hidden-text"><span className="text">{buttonText}</span></div>
                    <div className="xb-item--holder">
                      <span className="xb-item--text">{buttonText}</span>
                      <div className="xb-item--icon"><i className="far fa-long-arrow-right"></i></div>
                      <span className="xb-item--text">{buttonText}</span>
                    </div>
                  </Link>
                </div>
              </Fade>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-lg-7 col-md-8">
            <div className="process-right f-right">
              {processList.map((process, index) => (
                <div className="process-item" key={index}>
                  <span className="xb-item--number">{process.id}</span>
                  <div className="xb-item--img">
                    <img src={process.icon} alt={process.title} />
                  </div>
                  <div className="xb-item--holder">
                    <h3 className="xb-item--title">{process.title}</h3>
                    <span className="xb-item--content">{process.subTitle}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Shapes */}
      {shapeImages.length > 0 && (
        <div className="peocess-shape">
          {shapeImages.map((img, i) => (
            <div className={`shape shape--${i + 1}`} key={i}>
              <img src={img} alt={`shape-${i + 1}`} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default WorkProcess;
