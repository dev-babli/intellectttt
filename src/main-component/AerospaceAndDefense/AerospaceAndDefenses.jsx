import React, { Fragment } from "react";
import Footer from "../../components/footer/Footer";
import OptimizedBlogSection from "../../components/OptimizedBlogSection/OptimizedBlogSection";
import OptimizedCaseStudySection from "../../components/OptimizedCaseStudySection/OptimizedCaseStudySection";

import ServicesComponent from "../../components/ServicesComponent/ServicesComponent";

import IndustrieSection from "../../components/IndustrieSection/IndustrieSection";
import WorkProcess from "../../components/It-Services-Components/WorkProcess/WorkProcess";
import HelpDeskBlogSection from "../../components/Help-Desk-Components/HelpDeskBlogSection/HelpDeskBlogSection";
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";
import { AerospaceServices } from "../../api/cardService";

import pImg1 from "../../images/shape/process-shape01.png";
import pImg2 from "../../images/shape/process-shape01.png";
import sIcon1 from "../../images/process/image01.png";
import sIcon2 from "../../images/process/image02.png";
import sIcon3 from "../../images/process/image03.png";
import sIcon4 from "../../images/process/image04.png";
import sIcon5 from "../../images/process/image05.png";

const processList = [
  {
    id: "01",
    title: "Requirement Discovery & Risk Assessment",
    subTitle:
      "We start by understanding your aerospace or defense mission needs while evaluating security, compliance, and risk exposure.",
    icon: sIcon1,
  },
  {
    id: "02",
    title: "System Architecture & Compliance Mapping",
    subTitle:
      "Our experts design robust architectures aligned with standards like ITAR, DFARS, NIST, and aerospace regulations.",
    icon: sIcon2,
  },
  {
    id: "03",
    title: "Secure Development & Integration",
    subTitle:
      "We build scalable, high-assurance software systems with secure-by-design principles and real-time system integration.",
    icon: sIcon3,
  },
  {
    id: "04",
    title: "Verification, Validation & Penetration Testing",
    subTitle:
      "Advanced testing including functional validation, stress testing, and red-team penetration assessments for defense readiness.",
    icon: sIcon4,
  },
  {
    id: "05",
    title: "Deployment, Monitoring & Long-Term Support",
    subTitle:
      "We ensure smooth deployment in air-gapped or hybrid environments with 24/7 monitoring and mission-critical SLAs.",
    icon: sIcon5,
  },
];


const shapeImages = [pImg1, pImg2];
const AerospaceAndDefenses = () => {
  return (
    <Fragment>
      <div className="body_wrap sco_agency">
      
        <HeroSectionTitle
          title="Areospace & Defense IT"
          subtitle="Secure, Scalable & Mission-Focused IT Solutions"
          buttonText="TALK TO OUR EXPERTS"
          buttonLink="#contact"
          backgroundImage="/Aerospace-and-Defense.webp"
        />
        <WorkProcess
          heading="Aerospace & Defense IT Solutions"
          description="Secure, Compliant, Mission-Critical Systems for the Most Demanding Environments"
          buttonText="Speak to a Defense Consultant"
          buttonLink="/contact"
          processList={processList}
          shapeImages={shapeImages}
        />
        <ServicesComponent
          services={AerospaceServices}
          limit={6}
          showButton={true}
          buttonText="Schedule a Strategy Call"
          buttonLink="/contact"
          sectionStyle={{ backgroundColor: "#f8f9fa" }}
        />
        <HelpDeskBlogSection />
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

export default AerospaceAndDefenses;
