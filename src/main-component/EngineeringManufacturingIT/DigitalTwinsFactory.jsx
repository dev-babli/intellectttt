import React, { Fragment } from "react";
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";
import AboutSection from "../../components/Cyber-Security-Components/about/AboutSection";
import { mesIotServiceCards } from "../../api/cardService";
import ServicesComponent from "../../components/ServicesComponent/ServicesComponent";
import icon from "../../images/icon/magic02.svg";
import about1 from "../../images/about/img04.png";
import about2 from "../../images/bg/abt-cnt_bg.png";
import TechnologyLogos from "../../components/TechnologyLogos/TechnologyLogos";
import ContactSection from "../../components/It-Services-Components/ContactSection";
const DigitalTwinsFactory = () => {
  return (
   <Fragment>
      <div className="sco_agency">
        <div className="page_content service-single-page">
          <HeroSectionTitle
            title="MES Integration & IoT"
            subtitle="Streamlined ITSM, Service Desk & CoE Solutions for Operational Excellence"
            buttonText="TALK TO OUR EXPERTS"
            buttonLink="#contact"
            backgroundImage="/MES-Integration-IOT.webp"
          />
          <AboutSection
            subtitleIcon={icon}
            subtitle="About Us"
            title="Smart Manufacturing with MES Integration & Industrial IoT"
            content="At Intellectt, we help enterprises bridge the gap between operational technology (OT) and information technology (IT) through robust MES integration and Industrial IoT solutions. Our services enable real-time visibility, production optimization, and data-driven decision-making across the shop floor. Whether you're modernizing legacy systems or building smart factories, we deliver scalable architectures and seamless integrations to power Industry 4.0 transformation."
            buttonText="Explore Our Smart Manufacturing Services"
            buttonLink="/contact"
            image={about1}
            badgeImage={about2}
            badgeNumber="30+"
            badgeText="Successful MES & IoT Deployments in Global Plants"
          />
          <ServicesComponent
            services={mesIotServiceCards}
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
  )
}

export default DigitalTwinsFactory
