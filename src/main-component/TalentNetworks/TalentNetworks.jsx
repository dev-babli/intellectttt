import React, { Fragment } from "react";

import Bg from "../../images/bg/page_bg01.jpg";
import icon from "../../images/icon/magic.svg";
import gImg1 from "../../images/gallery/1.webp";
import gImg2 from "../../images/gallery/2.webp";
import gImg3 from "../../images/gallery/3.webp";
import gImg4 from "../../images/gallery/4.webp";
import gImg5 from "../../images/gallery/5.webp";
import gImg6 from "../../images/gallery/6.webp";

import CareerTeam from "../../main-component/CareerPage/CareerTeam";

const TalentNetworks = () => {
  return (
    <Fragment>
      <div className="body_wrap sco_agency">
        <section
          className="page-title cp-page-title pt-200 pos-rel bg_img"
          style={{ backgroundImage: `url(${Bg})` }}
        >
          <div className="container">
            <div className="page-title-wrap">
              <div className="row mt-none-30 align-items-center">
                <div className="col-lg-8 mt-30">
                  <div className="page-title-box">
                    <span className="sub-title">
                      <img src={icon} alt="" />
                      Careers
                    </span>
                    <h2 className="title">
                      Be a part of <br /> shaping the future & career
                      opportunities at Intellectt today.
                    </h2>
                  </div>
                </div>
                <div className="col-lg-4 mt-30">
                  <div className="cp-img-slide">
                    <div className="cp-img-inner ul_li">
                      <div className="cp-item marquee-first">
                        <div className="xb-img">
                          <img src={gImg1} alt="" />
                        </div>
                        <div className="xb-img">
                          <img src={gImg2} alt="" />
                        </div>
                        <div className="xb-img">
                          <img src={gImg3} alt="" />
                        </div>
                        <div className="xb-img">
                          <img src={gImg1} alt="" />
                        </div>
                        <div className="xb-img">
                          <img src={gImg2} alt="" />
                        </div>
                        <div className="xb-img">
                          <img src={gImg3} alt="" />
                        </div>
                      </div>
                      <div className="cp-item marquee-2">
                        <div className="xb-img">
                          <img src={gImg4} alt="" />
                        </div>
                        <div className="xb-img">
                          <img src={gImg5} alt="" />
                        </div>
                        <div className="xb-img">
                          <img src={gImg6} alt="" />
                        </div>
                        <div className="xb-img">
                          <img src={gImg4} alt="" />
                        </div>
                        <div className="xb-img">
                          <img src={gImg5} alt="" />
                        </div>
                        <div className="xb-img">
                          <img src={gImg6} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CareerTeam />
      </div>
    </Fragment>
  );
};

export default TalentNetworks;
