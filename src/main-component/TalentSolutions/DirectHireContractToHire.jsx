import React, { Fragment } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";
import AboutSection from "../../components/Cyber-Security-Components/about/AboutSection";
import { directHireCards } from "../../api/cardService";
import ServicesComponent from "../../components/ServicesComponent/ServicesComponent";
import icon from "../../images/icon/magic02.svg";
import about1 from "../../images/about/img04.png";
import about2 from "../../images/bg/abt-cnt_bg.png";
import TechnologyLogos from "../../components/TechnologyLogos/TechnologyLogos";
import Footer from "../../components/footer/Footer";
const DirectHireContractToHire = () => {
  // Scroll to top when component mounts
  useScrollToTop();
  return (
    <Fragment>
      <div className="sco_agency">
        <div className="page_content service-single-page">
          <HeroSectionTitle
            title="Direct Hire & Contract-to-Hire"
            subtitle=" Direct Hire & Contract-to-Hire Services for Long-Term Workforce Stability"
            buttonText="TALK TO OUR EXPERTS"
            buttonLink="#contact"
            backgroundImage="/IT-Staff-Augmentation.webp"
          />
          <AboutSection
            subtitleIcon={icon}
            subtitle="Talent Acquisition Simplified"
            title="Direct Hire & Contract-to-Hire Services for Long-Term Workforce Stability"
            content="At Intellectt, we bridge the talent gap with precision-driven Direct Hire and Contract-to-Hire solutions tailored for the IT, healthcare, and life sciences industries. Our approach ensures you get culturally aligned, technically sound professionals—whether you're filling niche roles or scaling long-term teams. With access to a pre-vetted candidate network and a flexible hiring model, we help reduce time-to-hire, lower recruitment risks, and drive consistent project delivery without compromise."
            buttonText="Explore Our Hiring Models"
            buttonLink="/contact"
            image={about1} // Replace with your actual image import
            badgeImage={about2} // Optional badge graphic
            badgeNumber="92%"
            badgeText="Conversion rate from contract-to-hire to full-time roles"
          />
          <ServicesComponent
            services={directHireCards}
            limit={6}
            showButton={true}
            buttonText="Schedule a Strategy Call"
            buttonLink="/contact"
            sectionStyle={{ backgroundColor: "#f8f9fa" }}
          />
          <TechnologyLogos />
        </div>
      </div>
      <Footer />

        </Fragment>
  );
};

export default DirectHireContractToHire;
