import React, { Fragment } from "react";
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";
import AboutSection from "../../components/Cyber-Security-Components/about/AboutSection";
import { itStaffAugmentationCards } from "../../api/cardService";
import ServicesComponent from "../../components/ServicesComponent/ServicesComponent";
import icon from "../../images/icon/magic02.svg";
import about1 from "../../images/about/img04.png";
import about2 from "../../images/bg/abt-cnt_bg.png";
import TechnologyLogos from "../../components/TechnologyLogos/TechnologyLogos";
import ContactSection from "../../components/It-Services-Components/ContactSection";
const ITStaffAugmentation = () => {
  return (
    <Fragment>
      <div className="sco_agency">
        <div className="page_content service-single-page">
          <HeroSectionTitle
            title="IT Staff Augmentation"
            subtitle=" IT Staff Augmentation Services for Scalable Workforce Solutions in the Digital Age"
            buttonText="TALK TO OUR EXPERTS"
            buttonLink="#contact"
            backgroundImage="/IT-Staff-Augmentation.webp"
          />
          <AboutSection
            subtitleIcon={icon}
            subtitle="About Us"
            title="Flexible & Scalable IT Staff Augmentation Services"
            content="At Intellectt, we help businesses scale their technology teams quickly and efficiently with our IT Staff Augmentation services. Whether you need niche skillsets, project-based support, or long-term engineering capacity, we provide access to pre-vetted IT professionals across technologies and domains. Our flexible engagement models ensure faster time-to-hire, reduced overheads, and complete control over team management—empowering you to accelerate delivery and innovation."
            buttonText="Get the Right Talent Now"
            buttonLink="/contact"
            image={about1}
            badgeImage={about2}
            badgeNumber="100+"
            badgeText="Skilled IT Professionals Deployed Across Global Projects"
          />
          <ServicesComponent
            services={itStaffAugmentationCards}
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

export default ITStaffAugmentation;
