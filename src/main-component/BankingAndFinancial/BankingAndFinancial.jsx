import React, { Fragment } from "react";

import ServicesComponent from "../../components/ServicesComponent/ServicesComponent";
import {BankingServices} from "../../api/cardService";
import WorkProcess from "../../components/It-Services-Components/WorkProcess/WorkProcess";
import HelpDeskBlogSection from "../../components/Help-Desk-Components/HelpDeskBlogSection/HelpDeskBlogSection";
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";

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
    title: "Discovery & Regulatory Alignment",
    subTitle:
      "We begin with deep discovery of your digital infrastructure, risk posture, and regulatory landscape (e.g., RBI, PCI-DSS, GDPR).",
    icon: sIcon1,
  },
  {
    id: "02",
    title: "Solution Architecture & Data Strategy",
    subTitle:
      "We define your data pipelines, system architecture, API ecosystem, and compliance mechanisms tailored to your banking needs.",
    icon: sIcon2,
  },
  {
    id: "03",
    title: "Secure Platform Development",
    subTitle:
      "From core banking to neo-banking apps, we build secure, high-availability systems with encrypted transactions and audit trails.",
    icon: sIcon3,
  },
  {
    id: "04",
    title: "Testing, Compliance & Risk Mitigation",
    subTitle:
      "We conduct penetration testing, KYC/AML compliance checks, and automated risk analysis with secure sandbox environments.",
    icon: sIcon4,
  },
  {
    id: "05",
    title: "Deployment, Monitoring & Regulatory Reporting",
    subTitle:
      "We deploy with full rollback plans, provide real-time monitoring, and automate reporting for audits and regulators.",
    icon: sIcon5,
  },
];

const shapeImages = [pImg1, pImg2];
const BankingAndFinancial = () => {
  return (
    <Fragment>
      <div className="body_wrap sco_agency">
       
        <HeroSectionTitle
          title="Banking & Financial Services"
          subtitle="Build. Evaluate. Generate."
          buttonText="TALK TO OUR EXPERTS"
          buttonLink="#contact"
          backgroundImage="/Banking-and-Finance.webp"
        />
        <WorkProcess
          heading="Securing Financial Innovation with Technology"
          description="Our proven 5-step process helps banks and fintechs deliver secure, compliant, and scalable digital financial experiences."
          buttonText="Connect with Fintech Experts"
          buttonLink="/contact"
          processList={processList}
          shapeImages={shapeImages}
        />
        <ServicesComponent
          services={BankingServices}
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

export default BankingAndFinancial;
