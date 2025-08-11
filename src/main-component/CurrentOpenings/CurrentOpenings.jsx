import React, { Fragment } from "react";
import Footer from "../../components/footer/Footer";

import WorkSection from "../TeamPage/work";

import Video from "../../images/video.mp4";
import GallerySection from "../CareerPage/Gallery";
import Process from "../../main-component/CareerPage/Process";
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";

const CurrentOpenings = () => {
  return (
    <Fragment>
      <div className="body_wrap sco_agency">
        <HeroSectionTitle
          title="Build a Career You’ll Be Proud Of"
          subtitle="Join Intellectt as we harness the latest technologies to drive meaningful change and create lasting impact."
          buttonText="TALK TO OUR EXPERTS"
          buttonLink="#contact"
          backgroundImage="/Career.webp"
        />

        <WorkSection />
        <div className="about-video">
          <div className="container">
            <div className="career_video">
              <video loop muted playsInline autoPlay>
                <source src={Video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
        <Process />
        <GallerySection pClass={"pt-130"} />
      </div>
          <Footer />

        </Fragment>
  );
};

export default CurrentOpenings;
