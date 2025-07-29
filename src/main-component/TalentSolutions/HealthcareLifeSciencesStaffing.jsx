import React, { Fragment } from "react";
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";
import AboutSection from "../../components/Cyber-Security-Components/about/AboutSection";
import { healthcareStaffingCards } from "../../api/cardService";
import ServicesComponent from "../../components/ServicesComponent/ServicesComponent";
import icon from "../../images/icon/magic02.svg";
import about1 from "../../images/about/img04.png";
import about2 from "../../images/bg/abt-cnt_bg.png";
import TechnologyLogos from "../../components/TechnologyLogos/TechnologyLogos";
import ContactSection from "../../components/It-Services-Components/ContactSection";
const HealthcareLifeSciencesStaffing = () => {
  return (
    <Fragment>
      <div className="sco_agency">
        <div className="page_content service-single-page">
          <HeroSectionTitle
            title="Healthcare & Life Sciences Staffing"
            subtitle=" From clinical trials to healthcare innovation—staff with precision, compliance, and speed. "
            buttonText="TALK TO OUR EXPERTS"
            buttonLink="#contact"
            backgroundImage="/Hhealthcare-Lifesciences.webp"
          />
          <AboutSection
            subtitleIcon={icon}
            subtitle="About Us"
            title="Specialized Staffing for Healthcare & Life Sciences"
            content="At Intellectt, we provide highly skilled, compliance-ready professionals to support healthcare, pharmaceutical, biotechnology, and life sciences organizations. Our domain-aligned staffing solutions ensure access to talent that understands regulatory frameworks, patient safety protocols, and the complexities of modern clinical, R&D, and digital health environments. Whether you're augmenting your team for product development, clinical trials, or regulatory operations, we deliver resources who are ready to contribute from day one."
            buttonText="Find Specialized Talent"
            buttonLink="/contact"
            image={about1}
            badgeImage={about2}
            badgeNumber="80+"
            badgeText="Healthcare & Life Sciences Clients Served Across the Globe"
          />
          <ServicesComponent
            services={healthcareStaffingCards}
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

export default HealthcareLifeSciencesStaffing;
