import React, { Fragment } from "react";
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";
import ResponsiveImage from "../../components/ResponsiveImage/ResponsiveImage";

const OurJourny = () => {
  return (
    <Fragment>
      <div className="body_wrap sco_agency">
        <HeroSectionTitle
          title="Our Journey"
          subtitle="From a small startup to a global leader, our journey is a testament to innovation, resilience, and excellence. "
          buttonText="TALK TO OUR EXPERTS"
          buttonLink="#contact"
          backgroundImage="/Our-journey-header.webp"
        />

        <div style={{ padding: "2rem" }}>
          <ResponsiveImage
            src="/page-image.png"
            alt="A beautiful placeholder"
            maxWidth="800px"
            borderRadius={4}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default OurJourny;
