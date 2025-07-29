import React, { Fragment, useState } from "react";
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";
import AboutSection from "../../components/Cyber-Security-Components/about/AboutSection";
import { engineering } from "../../api/cardService";
import ServicesComponent from "../../components/ServicesComponent/ServicesComponent";
import icon from "../../images/icon/magic02.svg";
import about1 from "../../images/about/img04.png";
import about2 from "../../images/bg/abt-cnt_bg.png";
import TechnologyLogos from "../../components/TechnologyLogos/TechnologyLogos";
import ContactSection from "../../components/It-Services-Components/ContactSection";


const CloudEngineering = () => {
  return (
    <Fragment>
      <div className="sco_agency">
        <div className="page_content service-single-page">
          <HeroSectionTitle
            title="Gen AI & LLM Integration Consulting"
            subtitle="We help companies harness the power of Gen AI and LLM to unlock new growth opportunities, automate complex tasks, and make smarter, faster decisions."
            buttonText="TALK TO OUR EXPERTS"
            buttonLink="#contact"
            backgroundImage="/azure.webp"
          />
          <AboutSection
            subtitleIcon={icon}
            subtitle="About Us"
            title="Cloud Engineering Expertise Across Azure, AWS & GCP"
            content="With deep expertise across Azure, AWS, and GCP, Intellectt empowers organizations to modernize, migrate, and manage mission-critical workloads at scale. From cloud-native development and multi-cloud strategies to infrastructure automation and compliance—we help you unlock the full potential of the cloud while reducing costs and increasing agility."
            buttonText="Book a free consultation"
            buttonLink="/contact"
            image={about1}
            badgeImage={about2}
            badgeNumber="50+"
            badgeText="Successful cloud transformations delivered"
          />
          <ServicesComponent
            services={engineering}
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

export default CloudEngineering;
