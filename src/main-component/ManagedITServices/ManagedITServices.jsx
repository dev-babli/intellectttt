import React, { Fragment, useState } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import Footer from "../../components/footer/Footer";
import OptimizedBlogSection from "../../components/OptimizedBlogSection/OptimizedBlogSection";
import OptimizedCaseStudySection from "../../components/OptimizedCaseStudySection/OptimizedCaseStudySection";

import IndustrieSection from "../../components/IndustrieSection/IndustrieSection";
import About from "../../components/It-Services-Components/about/about";
import About2 from "../../components/Cyber-Security-Components/about/AboutSection";
import ModernHeroSection from "../../components/common/ModernHeroSection";
import AboutSection from "../../components/Cyber-Security-Components/about/AboutSection";
import icon from "../../images/icon/magic02.svg";
import about1 from "../../images/bg/image-belowhero.webp";
import about2 from "../../images/bg/abt-cnt_bg.png";
import ModernServiceCard from "../../components/common/ModernServiceCard";
import AlliancesSection from "../../components/AlliancesSection/AlliancesSection";

const sampleCards = [
  {
    title: "Application Support (L1–L3)",
    description: "End-to-end support across application lifecycles with proactive monitoring and rapid issue resolution.",
    buttonText: "Explore",
    image: "/images/1m.webp",
    url: "/service/managed-it-services/support",
    features: ["24/7 monitoring", "Proactive support", "Rapid resolution"]
  },
  {
    title: "Infra & Network Monitoring",
    description: "Real-time visibility into IT systems with comprehensive monitoring and alerting capabilities.",
    buttonText: "Explore",
    image: "/images/2m.webp",
    url: "/service/managed-it-services/itsm",
    features: ["Real-time monitoring", "Performance tracking", "Alert management"]
  },
  {
    title: "ITSM (IT Service Management)",
    description: "Streamlined IT services for better uptime with standardized processes and service level agreements.",
    buttonText: "Explore",
    image: "/images/3m.webp",
    url: "/service/managed-it-services/infra",
    features: ["Service desk", "Incident management", "Change control"]
  },
  {
    title: "Managed Resource Services",
    description: "Skilled IT resources deployed on demand with flexible staffing solutions and expertise scaling.",
    buttonText: "Explore",
    image: "/images/4m.webp",
    url: "/service/managed-it-services/tms",
    features: ["Flexible staffing", "Expertise scaling", "On-demand resources"]
  },
];

const ManagedITServices = () => {
  // Scroll to top when component mounts
  useScrollToTop();

  return (
    <Fragment>
      <div className="sco_agency">
        <div className="page_content service-single-page">
          <ModernHeroSection
            title="Managed IT Services"
            subtitle="IT Operations Excellence"
            description="Build. Evaluate. Generate. Optimize your IT operations with our comprehensive managed services. From infrastructure monitoring to application support, we provide reliable, scalable IT solutions that keep your business running smoothly."
            buttonText="Get Started"
            buttonLink="/contact"
            backgroundImage="/images/bg/image-belowhero.webp"
            features={[
              "24/7 Infrastructure Monitoring",
              "Application Support & Maintenance",
              "IT Service Management",
              "Managed Resource Services"
            ]}
          />

          <AboutSection
            subtitleIcon={icon}
            subtitle="About Us"
            title="Managed IT Services"
            content="Optimize your IT operations with our comprehensive managed services. From infrastructure monitoring and application support to service desk management and resource services—we provide reliable, scalable IT solutions that keep your business running smoothly."
            buttonText="Book a free consultation"
            buttonLink="/contact"
            image={about1}
            badgeImage={about2}
            badgeNumber="150+"
            badgeText="IT environments managed successfully"
          />

          <ModernServiceCard 
            cards={sampleCards} 
            title="Managed IT Solutions"
            subtitle="Comprehensive managed IT services designed to optimize your operations and ensure business continuity"
          />
          <AlliancesSection />
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

      {/* <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="7e90gBu4pas"
        onClose={() => setOpen(false)}
      /> */}
    </Fragment>
  );
};

export default ManagedITServices;
