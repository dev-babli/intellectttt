import React, { Fragment, useState } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import Footer from "../../components/footer/Footer";
import OptimizedBlogSection from "../../components/OptimizedBlogSection/OptimizedBlogSection";
import OptimizedCaseStudySection from "../../components/OptimizedCaseStudySection/OptimizedCaseStudySection";
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";
import AboutSection from "../../components/Cyber-Security-Components/about/AboutSection";
import { appModernization } from "../../api/cardService";
import ServicesComponent from "../../components/ServicesComponent/ServicesComponent";
import icon from "../../images/icon/magic02.svg";
import about1 from "../../images/about/img04.png";
import about2 from "../../images/bg/abt-cnt_bg.png";
import TechnologyLogos from "../../components/TechnologyLogos/TechnologyLogos";
const AppModernization = () => {
  // Scroll to top when component mounts
  useScrollToTop();
  return (
    <Fragment>
      <div className="sco_agency">
        <div className="page_content service-single-page">
          <HeroSectionTitle
            title="App Modernization & Microservices"
            subtitle="Transform legacy applications with modern microservices architecture and cloud-native development."
            buttonText="TALK TO OUR EXPERTS"
            buttonLink="#contact"
            backgroundImage="/modernisation.webp"
          />
          <AboutSection
            subtitleIcon={icon}
            subtitle="About Us"
            title="Modernize Legacy Systems with Microservices Architecture"
            content="At Intellectt, we help enterprises transform monolithic legacy applications into agile, scalable microservices-based systems. Our application modernization services leverage containerization, API-first design, and cloud-native technologies to boost performance, improve maintainability, and accelerate innovation across Azure, AWS, and GCP."
            buttonText="Book a free consultation"
            buttonLink="/contact"
            image={about1}
            badgeImage={about2}
            badgeNumber="100+"
            badgeText="Applications modernized with microservices architecture"
          />
          <ServicesComponent
            services={appModernization}
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

export default AppModernization;
