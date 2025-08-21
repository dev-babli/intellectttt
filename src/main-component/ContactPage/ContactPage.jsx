import React, { Fragment } from "react";
import Footer from "../../components/footer/Footer";
import ContactSection from "../../components/ContactSection";

import Bg from "../../images/bg/page_bg01.jpg";

import icon from "../../images/icon/music-icon.svg";
import bImg1 from "../../images/hero/contact-logo.jpg";
import bImg2 from "../../images/shape/brd_shape.png";
// import CtaSection from '../../components/CtaSection/CtaSection';

const TeamPage = (props) => {
  return (
    <Fragment>
      <div className="body_wrap sco_agency" style={{ overflow: 'visible' }}>
        <section
          className="page-title  pt-200 pos-rel bg_img"
          style={{ backgroundImage: `url(${Bg})` }}
        >
          <div className="container">
            <div className="page-title-wrap sd-title-wrap">
              <div className="row mt-none-30 align-items-end">
                <div className="col-lg-9 mt-30">
                  <div className="page-title-box">
                    <span className="sub-title">
                      <img src={icon} alt="" /> Contact us
                    </span>
                    <h2 className="title">
                      Connect with our team for <br /> innovative solutions and{" "}
                      <br /> your digital success
                    </h2>
                  </div>
                </div>
                <div className="col-lg-3 mt-30">
                  <div className="sd-right-img pos-rel">
                    <img src={bImg1} alt="" />
                    <div className="sd-arrow-shape style-3">
                      <img className="xbzoominzoomup" src={bImg2} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ContactSection />
      </div>
      {/* <CtaSection /> */}
      <Footer />

        </Fragment>
  );
};
export default TeamPage;
