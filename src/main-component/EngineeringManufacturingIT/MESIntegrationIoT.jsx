import React, { Fragment } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";
import AboutSection from "../../components/Cyber-Security-Components/about/AboutSection";
import { digitalTwinSmartFactoryCards } from "../../api/cardService";
import ServicesComponent from "../../components/ServicesComponent/ServicesComponent";
import icon from "../../images/icon/magic02.svg";
import TechnologyLogos from "../../components/TechnologyLogos/TechnologyLogos";
import OptimizedBlogSection from "../../components/OptimizedBlogSection/OptimizedBlogSection";
import OptimizedCaseStudySection from "../../components/OptimizedCaseStudySection/OptimizedCaseStudySection";
import Footer from "../../components/footer/Footer";
const MESIntegrationIoT = () => {
  // Scroll to top when component mounts
  useScrollToTop();
  return (
    <Fragment>
      <div className="sco_agency">
        <div className="page_content service-single-page">
          <HeroSectionTitle
            title="Digital Twins & Smart Factory Solutions"
            subtitle="Accelerating Industry 4.0 with Digital Twins & Smart Factory Solutions"
            buttonText="TALK TO OUR EXPERTS"
            buttonLink="#contact"
            backgroundImage="/images/Smart-Factory.webp"
          />
          <AboutSection
            subtitleIcon={icon}
            subtitle="About Us"
            title="Accelerating Industry 4.0 with Digital Twins & Smart Factory Solutions"
            content="At Intellectt, we help manufacturers create intelligent, connected, and responsive operations using Digital Twin and Smart Factory technologies. By bridging the physical and digital worlds, we enable real-time monitoring, predictive analytics, and continuous optimization across production lines. Our solutions empower organizations to simulate, visualize, and control manufacturing environments with unmatched precision and agility."
            buttonText="Explore Our Industry 4.0 Solutions"
            buttonLink="/contact"
            image="/images/Smart-Factory.webp"
            badgeImage="/images/Industry.webp"
            badgeNumber="25+"
            badgeText="Smart Factory & Digital Twin Implementations Across Industries"
          />
          <ServicesComponent
            services={digitalTwinSmartFactoryCards}
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

export default MESIntegrationIoT;
