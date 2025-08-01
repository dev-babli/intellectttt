import React, { Fragment, useState } from "react";
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";
import AboutSection from "../../components/Cyber-Security-Components/about/AboutSection";
import { serviceDesk } from "../../api/cardService";
import ServicesComponent from "../../components/ServicesComponent/ServicesComponent";
import icon from "../../images/icon/magic02.svg";
import about1 from "../../images/about/img04.png";
import about2 from "../../images/bg/abt-cnt_bg.png";
import TechnologyLogos from "../../components/TechnologyLogos/TechnologyLogos";
import ContactSection from "../../components/It-Services-Components/ContactSection";
const ITSMServiceDesk = () => {
  return (
    <Fragment>
      <div className="sco_agency">
        <div className="page_content service-single-page">
          <HeroSectionTitle
            title="ITSM, Service Desk & CoE"
            subtitle="Streamlined ITSM, Service Desk & CoE Solutions for Operational Excellence"
            buttonText="TALK TO OUR EXPERTS"
            buttonLink="#contact"
            backgroundImage="/ITSM-Service-desk.webp"
          />
          <AboutSection
            subtitleIcon={icon}
            subtitle="About Us"
            title="Streamlined ITSM, Service Desk & CoE Solutions for Operational Excellence"
            content="At Intellectt, we specialize in IT Service Management (ITSM), offering centralized Service Desk solutions and robust Centers of Excellence (CoEs). Our tailored frameworks ensure incident, request, change, and problem management align with ITIL best practices. From enhancing user support experiences to driving governance and continuous improvement, we help enterprises build agile, resilient, and service-driven IT ecosystems."
            buttonText="Explore Our ITSM Solutions"
            buttonLink="/contact"
            image={about1}
            badgeImage={about2}
            badgeNumber="1M+"
            badgeText="Service requests handled annually with precision"
          />
          <ServicesComponent
            services={serviceDesk}
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

export default ITSMServiceDesk;
