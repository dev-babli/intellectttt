import React, { Fragment, useState } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import Footer from "../../components/footer/Footer";
import OptimizedBlogSection from "../../components/OptimizedBlogSection/OptimizedBlogSection";
import OptimizedCaseStudySection from "../../components/OptimizedCaseStudySection/OptimizedCaseStudySection";

import IndustrieSection from "../../components/IndustrieSection/IndustrieSection";
import FeatureSection from '../../components/It-Services-Components/FeatureSection';

import About3 from '../../components/about/about';
import SAPServicesHero from "../../components/SAPServicesHero/SAPServicesHero";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import AboutSection from "../../components/Cyber-Security-Components/about/AboutSection";
import icon from "../../images/icon/magic02.svg";
import about1 from "../../images/bg/image-belowhero.webp";
import about2 from "../../images/bg/abt-cnt_bg.png";
import AlliancesSection from "../../components/AlliancesSection/AlliancesSection";


const sampleCards = [
  {
    title: "SAP S/4HANA Migration",
    description: "Seamless upgrade to S/4HANA for modern ERP.",
    buttonText: "Explore",
    image: "/images/1.webp",
    url:"/service/sap-services/s4hana"
  },
  {
    title: "SAP BTP, ABAP & Fiori Development",
    description: "Smart apps with BTP, ABAP & Fiori.",
    buttonText: "Explore",
    image: "/images/2.webp",
    url:"/service/sap-services/btp"
  },
  {
    title: "SAP AMS & Managed Support",
    description: "Reliable SAP support for smooth operations.",
    buttonText: "Explore",
    image: "/images/3.webp",
    url:"/service/sap-services/s4hana"
  },
  {
    title: "DevOps & DevSecOps",
    description: "Automate and secure your dev pipeline.",
    buttonText: "Explore",
    image: "/images/3ser.webp",
    url:"/service/sap-services/s4hana"
  },
];

const SAPServices = () => {
  // Scroll to top when component mounts
  useScrollToTop();

  return (
   <Fragment>
      <div className="sco_agency">
       
        <div className="page_content service-single-page">
          <SAPServicesHero />
          {/* <div className="video pt-70 pb-65">
            <div className="container">
              <div className="xb-video sd-video pos-rel">
                <img src={vImg} alt="" />
                <button
                  className="popup-video btn-video"
                  onClick={() => setOpen(true)}
                >
                  <img src={vImg2} alt="" />
                </button>
              </div>
            </div>
          </div> */}
          <div className="sd-ser-content_wrap pb-110">
            <div className="container">
              <div className="sd-ser-content">
                <h2 className="sd-title text-center mt-5">
                  Accelerate Business Growth with Intelligent SAP Solutions
                </h2>
                <p className="sd-content text-center">
                  Unlock enterprise agility and operational excellence with our comprehensive SAP services. From SAP S/4HANA transformation and cloud migration to analytics and business process automation, we help organizations modernize their ERP landscape.
                </p>
                <p className="sd-content text-center">
                  Our SAP experts combine deep functional knowledge with industry-specific insights to streamline operations, enhance decision-making, and drive measurable results. Whether you're starting your SAP journey or optimizing existing investments, we deliver scalable, secure, and future-ready solutions tailored to your business goals.
                </p>
                <br />
                <p className="sd-content text-center">
                                  Our approach combines deep SAP expertise with industry-specific insights to deliver scalable, secure, and future-ready ERP solutions. From S/4HANA migration to BTP development, we focus on measurable results that create lasting business value.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white">
             <FeatureSection />
          </div>
           <ServiceCard cards={sampleCards} />
          {/* <WorkProcess /> */}
           {/* <About3 /> */}
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
  )
}

export default SAPServices
