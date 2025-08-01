import React, { Fragment } from "react";
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";
import AboutSection from "../../components/Cyber-Security-Components/about/AboutSection";
import { industry40SolutionCards } from "../../api/cardService";
import ServicesComponent from "../../components/ServicesComponent/ServicesComponent";
import icon from "../../images/icon/magic02.svg";
import about1 from "../../images/about/img04.png";
import about2 from "../../images/bg/abt-cnt_bg.png";
import TechnologyLogos from "../../components/TechnologyLogos/TechnologyLogos";
import ContactSection from "../../components/It-Services-Components/ContactSection";
const Industry4Solutions = () => {
  return (
    <Fragment>
      <div className="sco_agency">
        <div className="page_content service-single-page">
          <HeroSectionTitle
            title="Industry 4.0 Solutions"
            subtitle="Accelerating Industry 4.0 with Digital Twins & Smart Factory Solutions"
            buttonText="TALK TO OUR EXPERTS"
            buttonLink="#contact"
            backgroundImage="/Industry-4.0.webp"
          />
          <AboutSection
            subtitleIcon={icon}
            subtitle="About Us"
            title="Driving Smart Manufacturing with Industry 4.0 Solutions"
            content="At Intellectt, we empower manufacturers to embrace the fourth industrial revolution by delivering integrated Industry 4.0 solutions. From IoT-enabled production lines and AI-driven analytics to digital twins and end-to-end system integration, we help transform traditional operations into intelligent, connected, and data-driven ecosystems. Our solutions optimize productivity, improve quality, and accelerate time-to-market—enabling resilient, future-ready manufacturing."
            buttonText="Explore Our Industry 4.0 Capabilities"
            buttonLink="/contact"
            image={about1}
            badgeImage={about2}
            badgeNumber="40+"
            badgeText="Digital Transformation Programs Delivered Globally"
          />
          <ServicesComponent
            services={industry40SolutionCards}
            limit={6}
            showButton={true}
            buttonText="Schedule a Strategy Call"
            buttonLink="/contact"
            sectionStyle={{ backgroundColor: "#f8f9fa" }}
          />
          <TechnologyLogos />
          <ContactSection />
        </div>
      </div>
    </Fragment>
  );
};

export default Industry4Solutions;
