import React, { Fragment } from "react";

import ServicesComponent from "../../components/ServicesComponent/ServicesComponent";

import IndustrieSection from "../../components/IndustrieSection/IndustrieSection";
import WorkProcess from "../../components/It-Services-Components/WorkProcess/WorkProcess";
import HelpDeskBlogSection from "../../components/Help-Desk-Components/HelpDeskBlogSection/HelpDeskBlogSection";
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";
import { ManufacturingServices } from "../../api/cardService";
import pImg1 from "../../images/shape/process-shape01.png";
import pImg2 from "../../images/shape/process-shape01.png";
import sIcon1 from "../../images/process/image01.png";
import sIcon2 from "../../images/process/image02.png";
import sIcon3 from "../../images/process/image03.png";
import sIcon4 from "../../images/process/image04.png";
import sIcon5 from "../../images/process/image05.png";
import IndustriesSimple from "../../components/LuminCards/IndustriesSimpleold";

const processList = [
  {
    id: "01",
    title: "Operational Assessment & Digital Readiness",
    subTitle:
      "We analyze your plant or product ecosystem to identify digital gaps, integration potential, and automation goals.",
    icon: sIcon1,
  },
  {
    id: "02",
    title: "Smart Strategy & Architecture Design",
    subTitle:
      "We architect solutions for factory automation, MES integration, connected devices, or embedded systems tailored to your business.",
    icon: sIcon2,
  },
  {
    id: "03",
    title: "IoT & Software Implementation",
    subTitle:
      "We deploy IoT sensors, PLC software, edge computing, or embedded systems that connect machines, lines, and vehicles.",
    icon: sIcon3,
  },
  {
    id: "04",
    title: "System Testing & Predictive Maintenance Setup",
    subTitle:
      "We test for industrial stability, integrate predictive analytics for uptime, and validate across real production loads.",
    icon: sIcon4,
  },
  {
    id: "05",
    title: "Deployment, Training & Continuous Optimization",
    subTitle:
      "Our team supports go-live, trains your teams, and refines systems with continuous feedback loops from the shop floor or field.",
    icon: sIcon5,
  },
];

const shapeImages = [pImg1, pImg2];

const MenufacturingAndAutomotive = () => {
  return (
    <Fragment>
      <div className="body_wrap sco_agency">
       
        <HeroSectionTitle
          title="Manufacturing & Automotive IT"
          subtitle="Build. Evaluate. Generate."
          buttonText="TALK TO OUR EXPERTS"
          buttonLink="#contact"
          backgroundImage="/Manufacturing-and-Automotive.webp"
        />
        <WorkProcess
          heading="Digitizing Manufacturing & Automotive Workflows"
          description="From factory floors to connected cars, our 5-step process enables Industry 4.0 transformation with robust systems, scalable platforms, and intelligent automation."
          buttonText="Talk to a Manufacturing Tech Expert"
          buttonLink="/contact"
          processList={processList}
          shapeImages={shapeImages}
        />
        <ServicesComponent
          services={ManufacturingServices}
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

export default MenufacturingAndAutomotive;
