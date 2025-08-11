import React from "react";
import Footer from "../../components/footer/Footer";
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";
import CaseStudySection from '../../main-component/CaseStudyPage/CaseSection';

const Whitepapers = () => {
  return (
    <>
      <HeroSectionTitle
        title="Whitepaper and Case Studys"
        subtitle="Explore our comprehensive collection of whitepapers and case studies that delve into the latest trends, technologies, and strategies shaping the future of business. Gain insights from industry experts and discover how we can help you achieve your goals."
        buttonText="TALK TO OUR EXPERTS"
        buttonLink="#contact"
        backgroundImage="/Blog-header.webp"
      />
      <CaseStudySection />
    </>
  );
};

export default Whitepapers;
