import React, { Fragment, useState } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import Footer from "../../components/footer/Footer";
import OptimizedBlogSection from "../../components/OptimizedBlogSection/OptimizedBlogSection";
import OptimizedCaseStudySection from "../../components/OptimizedCaseStudySection/OptimizedCaseStudySection";
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";
import AboutSection from "../../components/Cyber-Security-Components/about/AboutSection";
import { apiIntegrationServices } from "../../api/cardService";
import ServicesComponent from "../../components/ServicesComponent/ServicesComponent";
import icon from "../../images/icon/magic02.svg";
import about1 from "../../images/about/img04.png";
import about2 from "../../images/bg/abt-cnt_bg.png";
import TechnologyLogos from "../../components/TechnologyLogos/TechnologyLogos";
const ApiIntegration = () => {
  // Scroll to top when component mounts
  useScrollToTop();
  return (
    <Fragment>
      <div className="sco_agency">
        <div className="page_content service-single-page">
          <HeroSectionTitle
            title="API & Integration Services"
            subtitle="Connect systems seamlessly with robust API development and integration solutions."
            buttonText="TALK TO OUR EXPERTS"
            buttonLink="#contact"
            backgroundImage="/AP-Integration.webp"
          />
          <AboutSection
            subtitleIcon={icon}
            subtitle="About Us"
            title="Unlock Seamless Connectivity with API & Integration Services"
            content="At Intellectt, we enable businesses to build connected ecosystems through robust API development and seamless integration strategies. From REST and GraphQL APIs to enterprise service buses (ESBs) and cloud-native integrations, we ensure secure, scalable, and efficient data flow across modern and legacy systems."
            buttonText="Book a free consultation"
            buttonLink="/contact"
            image={about1}
            badgeImage={about2}
            badgeNumber="250+"
            badgeText="Enterprise integrations deployed across platforms"
          />
          <ServicesComponent
            services={apiIntegrationServices}
            limit={6}
            showButton={true}
            buttonText="Schedule a Strategy Call"
            buttonLink="/contact"
            sectionStyle={{ backgroundColor: "#f8f9fa" }}
          />
          <TechnologyLogos />
          {}
        </div>
      </div>
          
        <OptimizedBlogSection 
          title="Latest Insights & Updates"
          subtitle="Stay informed with our latest industry insights, technical articles, and thought leadership content"
        />
        <OptimizedCaseStudySection 
          title="Success Stories"
          subtitle="Discover how we've helped businesses achieve their digital transformation goals"
        /><Footer />

        </Fragment>
  );
};

export default ApiIntegration;
