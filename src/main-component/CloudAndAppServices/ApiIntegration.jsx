import React, { Fragment, useState } from "react";
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";
import AboutSection from "../../components/Cyber-Security-Components/about/AboutSection";
import { apiIntegrationServices } from "../../api/cardService";
import ServicesComponent from "../../components/ServicesComponent/ServicesComponent";
import icon from "../../images/icon/magic02.svg";
import about1 from "../../images/about/img04.png";
import about2 from "../../images/bg/abt-cnt_bg.png";
import TechnologyLogos from "../../components/TechnologyLogos/TechnologyLogos";
import ContactSection from "../../components/It-Services-Components/ContactSection";
const ApiIntegration = () => {
  return (
    <Fragment>
      <div className="sco_agency">
        <div className="page_content service-single-page">
          <HeroSectionTitle
            title="Gen AI & LLM Integration Consulting"
            subtitle="We help companies harness the power of Gen AI and LLM to unlock new growth opportunities, automate complex tasks, and make smarter, faster decisions."
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
          <ContactSection />
        </div>
      </div>
    </Fragment>
  );
};

export default ApiIntegration;
