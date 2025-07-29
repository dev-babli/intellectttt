import React, { Fragment, useState } from "react";
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";
import AboutSection from "../../components/Cyber-Security-Components/about/AboutSection";
import { appModernization } from "../../api/cardService";
import ServicesComponent from "../../components/ServicesComponent/ServicesComponent";
import icon from "../../images/icon/magic02.svg";
import about1 from "../../images/about/img04.png";
import about2 from "../../images/bg/abt-cnt_bg.png";
import TechnologyLogos from "../../components/TechnologyLogos/TechnologyLogos";
import ContactSection from "../../components/It-Services-Components/ContactSection";
const AppModernization = () => {
  return (
    <Fragment>
      <div className="sco_agency">
        <div className="page_content service-single-page">
          <HeroSectionTitle
            title="Gen AI & LLM Integration Consulting"
            subtitle="We help companies harness the power of Gen AI and LLM to unlock new growth opportunities, automate complex tasks, and make smarter, faster decisions."
            buttonText="TALK TO OUR EXPERTS"
            buttonLink="#contact"
            backgroundImage="/modernisation.webp"
          />
          <AboutSection
            subtitleIcon={icon}
            subtitle="About Us"
            title="Modernize Legacy Systems with Microservices Architecture"
            content="At Intellectt, we help enterprises transform monolithic legacy applications into agile, scalable microservices-based systems. Our application modernization services leverage containerization, API-first design, and cloud-native technologies to boost performance, improve maintainability, and accelerate innovation across Azure, AWS, and GCP."
            buttonText="Book a free consultation"
            buttonLink="/contact"
            image={about1}
            badgeImage={about2}
            badgeNumber="100+"
            badgeText="Applications modernized with microservices architecture"
          />
          <ServicesComponent
            services={appModernization}
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

export default AppModernization;
