import React, { Fragment } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";
import AboutSection from "../../components/Cyber-Security-Components/about/AboutSection";
import { corpToCorpCards } from "../../api/cardService";
import ServicesComponent from "../../components/ServicesComponent/ServicesComponent";
import icon from "../../images/icon/magic02.svg";
import about1 from "../../images/about/img04.png";
import about2 from "../../images/bg/abt-cnt_bg.png";
import TechnologyLogos from "../../components/TechnologyLogos/TechnologyLogos";
import OptimizedBlogSection from "../../components/OptimizedBlogSection/OptimizedBlogSection";
import OptimizedCaseStudySection from "../../components/OptimizedCaseStudySection/OptimizedCaseStudySection";
import Footer from "../../components/footer/Footer";
const CorpToCorpW2 = () => {
  // Scroll to top when component mounts
  useScrollToTop();
  return (
    <Fragment>
      <div className="sco_agency">
        <div className="page_content service-single-page">
          <HeroSectionTitle
            title="Corp-to-Corp & W2"
            subtitle=" We bridge the talent gap with precision-driven Direct Hire and Contract-to-Hire solutions tailored for the IT, healthcare, and life sciences industries."
            buttonText="TALK TO OUR EXPERTS"
            buttonLink="#contact"
            backgroundImage="/Corp-to-Corp-W2.webp"
          />
          <AboutSection
            subtitleIcon={icon}
            subtitle="Flexible Employment Solutions"
            title="Corp-to-Corp & W2 Staffing Models for Compliance and Scalability"
            content="At Intellectt, we offer Corp-to-Corp (C2C) and W2 staffing services that provide businesses with the flexibility to engage top-tier professionals based on project scope, budget, and compliance needs. Whether you're looking to onboard specialized consultants through their own entities or hire talent under our W2 payroll structure, we ensure complete transparency, adherence to tax and legal standards, and a seamless onboarding experience. Our dual-model approach empowers enterprises to scale quickly, reduce risk, and stay focused on outcomes—while we handle the workforce complexities."
            buttonText="Learn More About Our Staffing Models"
            buttonLink="/contact"
            image={about1} // Replace with your actual image import
            badgeImage={about2} // Optional badge graphic
            badgeNumber="100%"
            badgeText="Compliance rate across all client engagements"
          />
          <ServicesComponent
            services={corpToCorpCards}
            limit={6}
            showButton={true}
            buttonText="Schedule a Strategy Call"
            buttonLink="/contact"
            sectionStyle={{ backgroundColor: "#f8f9fa" }}
          />
          <TechnologyLogos />
          {}
        </div>
      </div>
          
        <OptimizedBlogSection 
          title="Latest Insights & Updates"
          subtitle="Stay informed with our latest industry insights, technical articles, and thought leadership content"
        />
        <OptimizedCaseStudySection 
          title="Success Stories"
          subtitle="Discover how we've helped businesses achieve their digital transformation goals"
        /><Footer />

        </Fragment>
  );
};

export default CorpToCorpW2;
