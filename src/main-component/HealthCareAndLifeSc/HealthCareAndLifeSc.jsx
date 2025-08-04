import React, { Fragment } from "react";

import ServicesComponent from "../../components/ServicesComponent/ServicesComponent";

import IndustrieSection from "../../components/IndustrieSection/IndustrieSection";
import WorkProcess from "../../components/It-Services-Components/WorkProcess/WorkProcess";
import HelpDeskBlogSection from "../../components/Help-Desk-Components/HelpDeskBlogSection/HelpDeskBlogSection";
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";
import { HealthcareServicesIT } from "../../api/cardService";

import pImg1 from "../../images/shape/process-shape01.png";
import pImg2 from "../../images/shape/process-shape01.png";
import sIcon1 from "../../images/process/1.webp";
import sIcon2 from "../../images/process/2.webp";
import sIcon3 from "../../images/process/3.webp";
import sIcon4 from "../../images/process/4.webp";
import sIcon5 from "../../images/process/image05.png";
import IndustriesSimple from "../../components/LuminCards/IndustriesSimpleold";

const processList = [
  {
    id: "01",
    title: "Needs Assessment & Regulatory Analysis",
    subTitle:
      "We begin by identifying clinical, research, or operational needs while ensuring alignment with HIPAA, FDA, and regional regulations.",
    icon: sIcon1,
  },
  {
    id: "02",
    title: "Solution Architecture & Compliance Design",
    subTitle:
      "Our experts craft secure, interoperable system designs that support EHR, HL7, FHIR, and 21st Century Cures Act compliance.",
    icon: sIcon2,
  },
  {
    id: "03",
    title: "Development, Integration & Interoperability",
    subTitle:
      "We build and integrate scalable digital health systems using modern frameworks and seamless connectivity across devices and platforms.",
    icon: sIcon3,
  },
  {
    id: "04",
    title: "Testing, Validation & Clinical Data Integrity",
    subTitle:
      "Rigorous testing ensures system accuracy, patient safety, data privacy, and readiness for real-world clinical environments.",
    icon: sIcon4,
  },
  // {
  //   id: "05",
  //   title: "Deployment, Monitoring & Continuous Improvement",
  //   subTitle:
  //     "From go-live to long-term optimization, we support 24/7 monitoring, updates, and enhancements to meet evolving care needs.",
  //   icon: sIcon5,
  // },
];

const shapeImages = [pImg1, pImg2];

const HealthCareAndLifeSc = () => {
  return (
    <Fragment>
      <div className="body_wrap sco_agency">
        <HeroSectionTitle
          title="Healthcare & Life Sciences"
          subtitle="Secure, Scalable & Mission-Focused IT Solutions"
          buttonText="TALK TO OUR EXPERTS"
          buttonLink="#contact"
          backgroundImage="/HealthcareandLifeciences.webp"
        />
        <WorkProcess
          heading="Next-Gen IT for Healthcare & Life Sciences"
          description="Empowering Providers, Researchers, and Innovators with Secure and Scalable Digital Platforms"
          buttonText="Speak to a Defense Consultant"
          buttonLink="/contact"
          processList={processList}
          shapeImages={shapeImages}
        />
        <ServicesComponent
          services={HealthcareServicesIT}
          limit={6}
          showButton={true}
          buttonText="Schedule a Strategy Call"
          buttonLink="/contact"
          sectionStyle={{ backgroundColor: "#f8f9fa" }}
        />
        <IndustriesSimple />
        <HelpDeskBlogSection />
      </div>
    </Fragment>
  );
};

export default HealthCareAndLifeSc;
