import React, { Fragment } from "react";
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";
import AboutSection from "../../components/Cyber-Security-Components/about/AboutSection";
import { AutomationServices } from "../../api/cardService";
import ServicesComponent from "../../components/ServicesComponent/ServicesComponent";
import icon from "../../images/icon/magic02.svg";
import about1 from "../../images/about/img04.png";
import about2 from "../../images/bg/abt-cnt_bg.png";
import TechnologyLogos from "../../components/TechnologyLogos/TechnologyLogos";
import ContactSection from "../../components/It-Services-Components/ContactSection";
const PLMCADAutomation = () => {
  return (
    <Fragment>
      <div className="sco_agency">
        <div className="page_content service-single-page">
          <HeroSectionTitle
            title="PLM, CAD/CAE Automation"
            subtitle="Streamlined ITSM, Service Desk & CoE Solutions for Operational Excellence"
            buttonText="TALK TO OUR EXPERTS"
            buttonLink="#contact"
            backgroundImage="/PLM-CAD-CAE-Automation.webp"
          />
          <AboutSection
            subtitleIcon={icon}
            subtitle="About Us"
            title="Empowering Digital Engineering with PLM, CAD & CAE Automation"
            content="At Intellectt, we specialize in delivering cutting-edge solutions in Product Lifecycle Management (PLM), CAD/CAE Automation, and digital engineering. Our expertise helps organizations streamline product development, enhance design accuracy, and reduce time-to-market. Whether it’s automating repetitive CAD/CAE tasks, customizing PLM platforms, or integrating simulation tools, we enable engineering teams to innovate faster with greater precision and control."
            buttonText="Explore Our Engineering Solutions"
            buttonLink="/contact"
            image={about1}
            badgeImage={about2}
            badgeNumber="50+"
            badgeText="PLM & CAD Automation projects delivered across industries"
          />
          <ServicesComponent
            services={AutomationServices}
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

export default PLMCADAutomation
