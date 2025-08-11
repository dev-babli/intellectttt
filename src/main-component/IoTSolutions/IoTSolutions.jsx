import React, { Fragment } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";
import AboutSection from "../../components/Cyber-Security-Components/about/AboutSection";
import ServicesComponent from "../../components/ServicesComponent/ServicesComponent";
import TechnologyLogos from "../../components/TechnologyLogos/TechnologyLogos";
import OptimizedBlogSection from "../../components/OptimizedBlogSection/OptimizedBlogSection";
import OptimizedCaseStudySection from "../../components/OptimizedCaseStudySection/OptimizedCaseStudySection";
import Footer from "../../components/footer/Footer";
import icon from "../../images/icon/magic02.svg";
import about1 from "../../images/about/img04.png";
import about2 from "../../images/bg/abt-cnt_bg.png";

// Import IoT service cards from cardService
import { IoTServices } from "../../api/cardService";

const IoTSolutions = () => {
  // Scroll to top when component mounts
  useScrollToTop();

  return (
    <Fragment>
      <div className="sco_agency">
        <div className="page_content service-single-page">
          <HeroSectionTitle
            title="IoT Solutions"
            subtitle="Connect devices and drive automation with next-gen IoT technology"
            buttonText="TALK TO OUR EXPERTS"
            buttonLink="#contact"
            backgroundImage="/images/Smart-Factory.webp"
          />
          <AboutSection
            subtitleIcon={icon}
            subtitle="About Our IoT Solutions"
            title="Transform Your Business with Connected Intelligence"
            content="At Intellectt, we deliver comprehensive IoT solutions that connect devices, collect data, and drive intelligent automation across industries. From industrial IoT and smart factories to healthcare wearables and smart cities, our expertise spans the entire IoT ecosystem. We help organizations harness the power of connected devices to improve efficiency, reduce costs, and create new business opportunities."
            buttonText="Explore Our IoT Solutions"
            buttonLink="/contact"
            image={about1}
            badgeImage={about2}
            badgeNumber="50+"
            badgeText="IoT Implementations Across Industries"
          />
          <ServicesComponent
            services={IoTServices}
            limit={12}
            showButton={true}
            buttonText="Schedule a Strategy Call"
            buttonLink="/contact"
            sectionStyle={{ backgroundColor: "#f8f9fa" }}
          />
          <TechnologyLogos />
        </div>
      </div>
          
      <OptimizedBlogSection 
        title="Latest IoT Insights & Updates"
        subtitle="Stay informed with our latest IoT industry insights, technical articles, and thought leadership content"
      />
      <OptimizedCaseStudySection 
        title="IoT Success Stories"
        subtitle="Discover how we've helped businesses achieve their IoT transformation goals"
      />
      <Footer />
    </Fragment>
  );
};

export default IoTSolutions;
