import React, { Fragment } from "react";
import Footer from "../../components/footer/Footer";
import FaqSection from "../../components/FaqSection/FaqSection";
import GallerySection from "../CareerPage/Gallery";
import WhyChoose from "../../main-component/AboutUsPage/WhyChoose";
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";

const LifeAtCompany = () => {
  return (
    <Fragment>
      <div className="body_wrap sco_agency">
        <HeroSectionTitle
          title="Life at Intellectt"
          subtitle="Join Intellectt where we are leveraging the latest technologies to create a meaningful impact."
          buttonText="TALK TO OUR EXPERTS"
          buttonLink="#contact"
          backgroundImage="/Life-at-company.webp"
        />
        <WhyChoose />
        <GallerySection pClass={"pt-130"} />
        <FaqSection />
      </div>
          <Footer />

        </Fragment>
  );
};

export default LifeAtCompany;
