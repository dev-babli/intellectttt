import React, { Fragment, useState } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import Footer from "../../components/footer/Footer";
import OptimizedBlogSection from "../../components/OptimizedBlogSection/OptimizedBlogSection";
import OptimizedCaseStudySection from "../../components/OptimizedCaseStudySection/OptimizedCaseStudySection";
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";
import AboutSection from "../../components/Cyber-Security-Components/about/AboutSection";
import { managedITServices } from "../../api/cardService";
import ServicesComponent from "../../components/ServicesComponent/ServicesComponent";
import icon from "../../images/icon/magic02.svg";
import about1 from "../../images/about/img04.png";
import about2 from "../../images/bg/abt-cnt_bg.png";
import TechnologyLogos from "../../components/TechnologyLogos/TechnologyLogos";
const InfraNetworkMonitoring = () => {
  // Scroll to top when component mounts
  useScrollToTop();
  return (
    <Fragment>
      <div className="sco_agency">
        <div className="page_content service-single-page">
          <HeroSectionTitle
            title="Infra & Network Monitoring (24/7 NOC)"
            subtitle="We ensure your critical systems stay secure, available, and high-performing—day and night."
            buttonText="TALK TO OUR EXPERTS"
            buttonLink="#contact"
            backgroundImage="/Infra-Network.webp"
          />
          <AboutSection
            subtitleIcon={icon}
            subtitle="About Us"
            title="24/7 Infra & Network Monitoring for Maximum Uptime"
            content="At Intellectt, we deliver round-the-clock infrastructure and network monitoring through our dedicated Network Operations Center (NOC). Our proactive monitoring, real-time alerts, and rapid incident response ensure your servers, networks, and critical systems stay secure, available, and high-performing—day and night. From anomaly detection to performance tuning, we help minimize downtime and maximize efficiency."
            buttonText="Speak with a Monitoring Expert"
            buttonLink="/contact"
            image={about1}
            badgeImage={about2}
            badgeNumber="500+"
            badgeText="Critical systems proactively monitored worldwide"
          />
          <ServicesComponent
            services={managedITServices}
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

export default InfraNetworkMonitoring;
