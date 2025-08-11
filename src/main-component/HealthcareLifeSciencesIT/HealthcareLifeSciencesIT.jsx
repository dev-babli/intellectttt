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
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";
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
import ServiceCard from "../../components/ServiceCard/ServiceCard";

const sampleCards = [
  {
    title: "Compliance & Regulatory IT",
    description: "Streamline compliance with robust IT frameworks.",
    buttonText: "Explore",
    image: "/images/CompleianceandRegulatory-IT.webp",
    url: "/service/healthcare-and-life-sciences-it/compliance",
  },
  {
    title: "Clinical Data Platforms",
    description: "Power insights with unified clinical data systems.",
    buttonText: "Explore",
    image: "/images/Clinicaldataplatforms.webp",
    url: "/service/healthcare-and-life-sciences-it/data",
  },
  {
    title: "AI in Imaging & Diagnostics",
    description: "Accelerate detection with AI-driven diagnostics.",
    buttonText: "Explore",
    image: "/images/AIinImaginganDiagnostics.webp",
    url: "/service/healthcare-and-life-sciences-it/ai",
  },
  {
    title: "HL7 & FHIR Integration",
    description: "Enable seamless health data exchange with HL7 & FHIR.",
    buttonText: "Explore",
    image: "/images/HL7FHIRIntegration.webp",
    url: "/service/healthcare-and-life-sciences-it/hl7",
  },
];

const HealthcareLifeSciencesIT = () => {
  // Scroll to top when component mounts
  useScrollToTop();
  return (
    <Fragment>
      <div className="body_wrap sco_agency">
        {/* <SAPServicesHero /> */}
        <HeroSectionTitle
          title="Healthcare & Life Sciences IT"
          subtitle="Empowering Better Healthcare Through Technology"
          buttonText="TALK TO OUR EXPERTS"
          buttonLink="#contact"
          backgroundImage="/Healthcare-and-Life-sciences.webp"
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
          <ServiceCard cards={sampleCards} />
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
