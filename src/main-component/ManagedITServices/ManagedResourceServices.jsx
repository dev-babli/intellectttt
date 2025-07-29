import React, { Fragment } from "react";
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";
import AboutSection from "../../components/Cyber-Security-Components/about/AboutSection";
import { managedResourceServicesCard } from "../../api/cardService";
import ServicesComponent from "../../components/ServicesComponent/ServicesComponent";
import icon from "../../images/icon/magic02.svg";
import about1 from "../../images/about/img04.png";
import about2 from "../../images/bg/abt-cnt_bg.png";
import TechnologyLogos from "../../components/TechnologyLogos/TechnologyLogos";
import ContactSection from "../../components/It-Services-Components/ContactSection";
const ManagedResourceServices = () => {
  return (
    <Fragment>
      <div className="sco_agency">
        <div className="page_content service-single-page">
          <HeroSectionTitle
            title="Managed Resource Services (TMS)"
            subtitle="Streamlined ITSM, Service Desk & CoE Solutions for Operational Excellence"
            buttonText="TALK TO OUR EXPERTS"
            buttonLink="#contact"
            backgroundImage="/Managed-Resources.webp"
          />
          <AboutSection
            subtitleIcon={icon}
            subtitle="About Us"
            title="Agile Managed Resource Services (TMS) for Scalable Workforce Solutions"
            content="At Intellectt, we deliver tailored Talent Management Services (TMS) designed to scale with your business needs. Our Managed Resource Services model enables organizations to access skilled professionals across IT, healthcare, and life sciences—on-demand and cost-effectively. From staff augmentation to outcome-based engagements, we ensure workforce agility, operational continuity, and reduced hiring overhead through streamlined talent deployment and governance."
            buttonText="Discover Our TMS Capabilities"
            buttonLink="/contact"
            image={about1}
            badgeImage={about2}
            badgeNumber="500+"
            badgeText="Resources deployed across global client programs"
          />
          <ServicesComponent
            services={managedResourceServicesCard}
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

export default ManagedResourceServices;
