import React, { Fragment, useState } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import Footer from "../../components/footer/Footer";
import OptimizedBlogSection from "../../components/OptimizedBlogSection/OptimizedBlogSection";
import OptimizedCaseStudySection from "../../components/OptimizedCaseStudySection/OptimizedCaseStudySection";
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";
import AboutSection from "../../components/Cyber-Security-Components/about/AboutSection";
import { nocSupport } from "../../api/cardService";
import ServicesComponent from "../../components/ServicesComponent/ServicesComponent";
import icon from "../../images/icon/magic02.svg";
import about1 from "../../images/about/img04.png";
import about2 from "../../images/bg/abt-cnt_bg.png";
import TechnologyLogos from "../../components/TechnologyLogos/TechnologyLogos";
const ApplicationSupport = () => {
  // Scroll to top when component mounts
  useScrollToTop();
  return (
    <Fragment>
      <div className="sco_agency">
        <div className="page_content service-single-page">
          <HeroSectionTitle
            title="Application Support (L1-L3)"
            subtitle="We provide comprehensive application support for business continuity."
            buttonText="TALK TO OUR EXPERTS"
            buttonLink="#contact"
            backgroundImage="/Application-Support.webp"
          />
          <AboutSection
            subtitleIcon={icon}
            subtitle="About Us"
            title="Comprehensive Application Support (L1–L3) for Business Continuity"
            content="At Intellectt, we offer multi-tiered application support—from first-level incident resolution to expert-level troubleshooting and enhancements. Our L1–L3 support model ensures timely resolution, user satisfaction, and minimal disruptions. Whether it's managing tickets, performing root-cause analysis, or deploying fixes and optimizations, our team guarantees reliable, end-to-end coverage for your critical applications."
            buttonText="Connect with Our Support Team"
            buttonLink="/contact"
            image={about1}
            badgeImage={about2}
            badgeNumber="99.9%"
            badgeText="Application uptime ensured with expert L1–L3 support"
          />
          <ServicesComponent
            services={nocSupport}
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

export default ApplicationSupport;
