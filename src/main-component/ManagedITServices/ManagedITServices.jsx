import React, { Fragment, useState } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import Footer from "../../components/footer/Footer";
import OptimizedBlogSection from "../../components/OptimizedBlogSection/OptimizedBlogSection";
import OptimizedCaseStudySection from "../../components/OptimizedCaseStudySection/OptimizedCaseStudySection";

import IndustrieSection from "../../components/IndustrieSection/IndustrieSection";
import About from "../../components/It-Services-Components/about/about";
import About2 from "../../components/Cyber-Security-Components/about/AboutSection";
import ManagedITServicesHero from "../../components/ManagedITServicesHero/ManagedITServicesHero";
import AboutSection from "../../components/Cyber-Security-Components/about/AboutSection";
import icon from "../../images/icon/magic02.svg";
import about1 from "../../images/bg/image-belowhero.webp";
import about2 from "../../images/bg/abt-cnt_bg.png";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import AlliancesSection from "../../components/AlliancesSection/AlliancesSection";

const sampleCards = [
  {
    title: "Application Support (L1–L3)",
    description: "End-to-end support across app lifecycles.",
    buttonText: "Explore",
    image: "/images/1m.webp",
    url: "/service/managed-it-services/support",
  },
  {
    title: "Infra & Network Monitoring",
    description: "Real-time visibility into IT systems.",
    buttonText: "Explore",
    image: "/images/2m.webp",
    url: "/service/managed-it-services/itsm",
  },
  {
    title: "ITSM (IT Service Management)",
    description: "Streamlined IT services for better uptime.",
    buttonText: "Explore",
    image: "/images/3m.webp",
    url: "/service/managed-it-services/infra",
  },
  {
    title: "Managed Resource Services",
    description: "Skilled IT resources, deployed on demand.",
    buttonText: "Explore",
    image: "/images/4m.webp",
    url: "/service/managed-it-services/tms",
  },
];

const ManagedITServices = () => {
  // Scroll to top when component mounts
  useScrollToTop();

  return (
    <Fragment>
      <div className="sco_agency">
        <div className="page_content service-single-page">
          <ManagedITServicesHero />

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

          <ServiceCard cards={sampleCards} />
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
