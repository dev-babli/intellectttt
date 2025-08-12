import React, { Fragment } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";

import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import OptimizedBlogSection from "../../components/OptimizedBlogSection/OptimizedBlogSection";
import OptimizedCaseStudySection from "../../components/OptimizedCaseStudySection/OptimizedCaseStudySection";
import ServicesComponent from "../../components/ServicesComponent/ServicesComponent";

import Header5 from "../../components/header5/Header5";
import IndustrieSection from "../../components/IndustrieSection/IndustrieSection";
import WorkProcess from "../../components/It-Services-Components/WorkProcess/WorkProcess";
import HelpDeskBlogSection from "../../components/Help-Desk-Components/HelpDeskBlogSection/HelpDeskBlogSection";
import ModernHeroSection from "../../components/common/ModernHeroSection";
import CtaSection from "../../components/Help-Desk-Components/CtaSection/CtaSection";
import { HealthcareServices } from "../../api/cardService";

// import pImg1 from '../../../images/shape/process-shape01.png'
import pImg1 from "../../images/shape/process-shape01.png";
import pImg2 from "../../images/shape/process-shape01.png";
import sIcon1 from "../../images/shape/c1.jpg";
import sIcon2 from "../../images/shape/c2.jpg";
import sIcon3 from "../../images/shape/c3.jpg";
import sIcon4 from "../../images/shape/c4.jpg";
import sIcon5 from "../../images/shape/c5.jpg";
import ModernServiceCard from "../../components/common/ModernServiceCard";

const sampleCards = [
  {
    title: "Compliance & Regulatory IT",
    description: "Streamline compliance with robust IT frameworks and regulatory management systems for healthcare organizations.",
    buttonText: "Explore",
    image: "/images/CompleianceandRegulatory-IT.webp",
    url: "/service/healthcare-and-life-sciences-it/compliance",
    features: ["Regulatory compliance", "Audit management", "Risk assessment"]
  },
  {
    title: "Clinical Data Platforms",
    description: "Power insights with unified clinical data systems and advanced analytics for patient care optimization.",
    buttonText: "Explore",
    image: "/images/Clinicaldataplatforms.webp",
    url: "/service/healthcare-and-life-sciences-it/data",
    features: ["Clinical analytics", "Patient data management", "Interoperability"]
  },
  {
    title: "AI in Imaging & Diagnostics",
    description: "Accelerate detection with AI-driven diagnostics and intelligent imaging systems for improved patient outcomes.",
    buttonText: "Explore",
    image: "/images/AIinImaginganDiagnostics.webp",
    url: "/service/healthcare-and-life-sciences-it/ai",
    features: ["AI diagnostics", "Medical imaging", "Predictive analytics"]
  },
  {
    title: "HL7 & FHIR Integration",
    description: "Enable seamless health data exchange with HL7 & FHIR standards for improved care coordination.",
    buttonText: "Explore",
    image: "/images/HL7FHIRIntegration.webp",
    url: "/service/healthcare-and-life-sciences-it/hl7",
    features: ["Data interoperability", "Care coordination", "Standards compliance"]
  },
];

const HealthcareLifeSciencesIT = () => {
  // Scroll to top when component mounts
  useScrollToTop();
  return (
    <Fragment>
      <div className="body_wrap sco_agency">
        {/* <SAPServicesHero /> */}
        <ModernHeroSection
          title="Healthcare & Life Sciences IT"
          subtitle="Digital Health Innovation"
          description="Empowering Better Healthcare Through Technology. Transform healthcare delivery with advanced technology solutions that improve patient care, streamline operations, and ensure compliance in the rapidly evolving healthcare landscape."
          buttonText="Talk to Our Experts"
          buttonLink="/contact"
          backgroundImage="/Healthcare-and-Life-sciences.webp"
          features={[
            "Compliance & Regulatory IT",
            "Clinical Data Platforms",
            "AI in Imaging & Diagnostics",
            "HL7 & FHIR Integration"
          ]}
        />
        <div className="sd-ser-content_wrap pb-110">
          <div className="container">
            <div className="sd-ser-content">
              <h2 className="sd-title text-center mt-5">
                Transform Healthcare Delivery with Advanced Technology Solutions
              </h2>
              <p className="sd-content text-center">
                In today's rapidly evolving healthcare landscape, organizations need innovative technology solutions to improve patient care, streamline operations, and ensure compliance. Our specialized healthcare IT services help modernize clinical workflows, enhance data interoperability, and accelerate medical research.
              </p>
              <p className="sd-content text-center">
                We integrate cutting-edge technologies—such as AI-powered diagnostics, HL7/FHIR integration, clinical data platforms, and regulatory compliance systems—to enable better patient outcomes, operational efficiency, and research capabilities. From digital health platforms to intelligent imaging systems, we tailor solutions to drive healthcare innovation.
              </p>
              <br />
              <p className="sd-content text-center">
                Our approach combines deep healthcare domain knowledge with advanced technology expertise to deliver secure, compliant, and scalable solutions. Whether you're modernizing clinical systems or implementing AI-driven diagnostics, we focus on measurable outcomes that improve patient care, operational efficiency, and regulatory compliance.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <ModernServiceCard 
            cards={sampleCards} 
            title="Healthcare & Life Sciences Solutions"
            subtitle="Comprehensive healthcare IT services designed to transform patient care and drive medical innovation"
          />
        </div>

        {}
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

export default HealthcareLifeSciencesIT;
