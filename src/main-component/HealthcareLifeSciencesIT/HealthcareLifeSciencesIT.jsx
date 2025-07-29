import React, { Fragment } from "react";

import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import ServicesComponent from "../../components/ServicesComponent/ServicesComponent";

import Header5 from "../../components/header5/Header5";
import IndustrieSection from "../../components/IndustrieSection/IndustrieSection";
import WorkProcess from "../../components/It-Services-Components/WorkProcess/WorkProcess";
import HelpDeskBlogSection from "../../components/Help-Desk-Components/HelpDeskBlogSection/HelpDeskBlogSection";
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";
import CtaSection from "../../components/Help-Desk-Components/CtaSection/CtaSection";
import { HealthcareServices} from "../../api/cardService";

// import pImg1 from '../../../images/shape/process-shape01.png'
import pImg1 from "../../images/shape/process-shape01.png";
import pImg2 from "../../images/shape/process-shape01.png";
import sIcon1 from "../../images/shape/c1.jpg";
import sIcon2 from "../../images/shape/c2.jpg";
import sIcon3 from "../../images/shape/c3.jpg";
import sIcon4 from "../../images/shape/c4.jpg";
import sIcon5 from "../../images/shape/c5.jpg";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import IndustriesSimple from "../../components/LuminCards/IndustriesSimpleold";
import ContactSection from "../../components/It-Services-Components/ContactSection";

const sampleCards = [
  {
    title: "Compliance & Regulatory IT",
    description: "Streamline compliance with robust IT frameworks.",
    buttonText: "Explore",
    image: "/images/CompleianceandRegulatory-IT.webp",
    url:"/service/healthcare-and-life-sciences-it/compliance"
  },
  {
    title: "Clinical Data Platforms",
    description: "Power insights with unified clinical data systems.",
    buttonText: "Explore",
    image: "/images/Clinicaldataplatforms.webp",
    url:"/service/healthcare-and-life-sciences-it/data"
  },
  {
    title: "AI in Imaging & Diagnostics",
    description: "Accelerate detection with AI-driven diagnostics.",
    buttonText: "Explore",
    image: "/images/AIinImaginganDiagnostics.webp",
    url:"/service/healthcare-and-life-sciences-it/ai"
  },
  {
    title: "HL7 & FHIR Integration",
    description: "Enable seamless health data exchange with HL7 & FHIR.",
    buttonText: "Explore",
    image: "/images/HL7FHIRIntegration.webp",
    url:"/service/healthcare-and-life-sciences-it/hl7"
  },
];


const HealthcareLifeSciencesIT = () => {
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
                  Accelerate innovation and efficiency in Engineering & Manufacturing
                </h2>
                <p className="sd-content text-center">
                 In today’s competitive landscape, engineering and manufacturing companies must continuously evolve to meet rising demands for quality, speed, and sustainability. Our specialized solutions help modernize operations, streamline supply chains, and enhance product development.
                </p>
                <p className="sd-content text-center">
                 We integrate advanced technologies—such as IoT, digital twins, PLM systems, and smart automation—to enable intelligent design, predictive maintenance, and real-time production monitoring. From optimizing factory floors to digitizing engineering workflows, we tailor solutions to drive agility and performance.
                </p>
                <br />
                <p className="sd-content text-center">
                 Our approach combines deep domain knowledge with cutting-edge tools to deliver scalable, industry-specific results. Whether you're building a smart factory or modernizing legacy systems, we focus on measurable outcomes that improve productivity, quality, and time-to-market.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white">
             <ServiceCard cards={sampleCards} />
          </div>
         
          <IndustriesSimple />
          <ContactSection />
      </div>
      
    </Fragment>
  );
};

export default HealthcareLifeSciencesIT;
