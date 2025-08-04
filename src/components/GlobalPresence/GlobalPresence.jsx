import React, { Fragment } from "react";

import Scrollbar from "../scrollbar/scrollbar";
import Footer from "../footer/Footer";
import ServicesComponent from "../ServicesComponent/ServicesComponent";

import Header5 from "../header5/Header5";
import IndustrieSection from "../IndustrieSection/IndustrieSection";
import WorkProcess from "../It-Services-Components/WorkProcess/WorkProcess";
import HelpDeskBlogSection from "../Help-Desk-Components/HelpDeskBlogSection/HelpDeskBlogSection";
import HeroSectionTitle from "../HeroSectionTitle/HeroSectionTitle";
import CtaSection from "../Help-Desk-Components/CtaSection/CtaSection";
import { HealthcareServices } from "../../api/cardService";

// import pImg1 from '../../../images/shape/process-shape01.png'
import pImg1 from "../../images/shape/process-shape01.png";
import pImg2 from "../../images/shape/process-shape01.png";
import sIcon1 from "../../images/shape/c1.jpg";
import sIcon2 from "../../images/shape/c2.jpg";
import sIcon3 from "../../images/shape/c3.jpg";
import sIcon4 from "../../images/shape/c4.jpg";
import sIcon5 from "../../images/shape/c5.jpg";
import ServiceCard from "../ServiceCard/ServiceCard";
import IndustriesSimple from "../LuminCards/IndustriesSimpleold";
import ContactSection from "../It-Services-Components/ContactSection";
import GlobalMap from "../GlobalMap/GlobalMap";
import Flag from "../Flag/Flag";
import GlobalPresenceCards from "../GlobalPresenceCards/GlobalPresenceCards";

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

const GlobalPresence = () => {
  return (
    <Fragment>
      <div className="body_wrap sco_agency">
        <HeroSectionTitle
          title="Our Global Presence"
          subtitle="With a strong footprint across continents, we serve diverse markets, bridging cultures and delivering impactful solutions to clients worldwide."
          buttonText="TALK TO OUR EXPERTS"
          buttonLink="#contact"
          backgroundImage="/global.jpg"
        />

        <GlobalMap />
        {/* <Flag /> */}
        <GlobalPresenceCards />

        <IndustriesSimple />
        {/* <ContactSection /> */}
      </div>
    </Fragment>
  );
};

export default GlobalPresence;
