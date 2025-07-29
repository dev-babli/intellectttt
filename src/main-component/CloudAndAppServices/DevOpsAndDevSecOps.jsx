import React, { Fragment, useState } from "react";
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";
import AboutSection from "../../components/Cyber-Security-Components/about/AboutSection";
import { devOpsAndDevsec } from "../../api/cardService";
import ServicesComponent from "../../components/ServicesComponent/ServicesComponent";
import icon from "../../images/icon/magic02.svg";
import about1 from "../../images/about/img04.png";
import about2 from "../../images/bg/abt-cnt_bg.png";
import TechnologyLogos from "../../components/TechnologyLogos/TechnologyLogos";
import ContactSection from "../../components/It-Services-Components/ContactSection";
const DevOpsAndDevSecOps = () => {
  return (
    <Fragment>
      <div className="sco_agency">
        <div className="page_content service-single-page">
          <HeroSectionTitle
            title="Gen AI & LLM Integration Consulting"
            subtitle="We help companies harness the power of Gen AI and LLM to unlock new growth opportunities, automate complex tasks, and make smarter, faster decisions."
            buttonText="TALK TO OUR EXPERTS"
            buttonLink="#contact"
            backgroundImage="/dev.webp"
          />
          <AboutSection
            subtitleIcon={icon}
            subtitle="About Us"
            title="DevOps & DevSecOps for Scalable, Secure Cloud Operations"
            content="Intellectt enables enterprises to accelerate software delivery and enhance security with modern DevOps and DevSecOps practices. From CI/CD automation and infrastructure as code to proactive security integration and cloud compliance, we streamline your development lifecycle while ensuring robust protection across Azure, AWS, and GCP."
            buttonText="Book a free consultation"
            buttonLink="/contact"
            image={about1}
            badgeImage={about2}
            badgeNumber="80+"
            badgeText="Enterprise-grade DevOps solutions deployed"
          />
          <ServicesComponent
            services={devOpsAndDevsec}
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

export default DevOpsAndDevSecOps;
