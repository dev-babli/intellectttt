import React, { Fragment } from "react";
import Footer from "../../components/footer/Footer";

import ServicesComponent from "../../components/ServicesComponent/ServicesComponent";
import { EnergyUtilitiesServices } from "../../api/cardService";
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

const processList = [
  {
    id: "01",
    title: "Energy Infrastructure Assessment & Strategy",
    subTitle:
      "We evaluate your current energy systems, regulatory requirements, and sustainability goals to design a comprehensive digital transformation strategy.",
    icon: sIcon1,
  },
  {
    id: "02",
    title: "Smart Grid & IoT Architecture Design",
    subTitle:
      "Our experts design intelligent grid systems with IoT sensors, real-time monitoring, and automated demand response capabilities for optimal energy management.",
    icon: sIcon2,
  },
  {
    id: "03",
    title: "Renewable Energy Integration & Management",
    subTitle:
      "We develop platforms for renewable energy integration, storage optimization, and grid balancing to support sustainable power systems and reduce carbon footprint.",
    icon: sIcon3,
  },
  {
    id: "04",
    title: "Predictive Analytics & Energy Forecasting",
    subTitle:
      "We implement AI-powered analytics to predict energy demand, optimize generation, and improve grid reliability and efficiency through data-driven insights.",
    icon: sIcon4,
  },
  {
    id: "05",
    title: "Deployment, Security & Continuous Monitoring",
    subTitle:
      "From implementation to ongoing operations, we ensure secure deployment, comprehensive monitoring, and continuous optimization of energy management systems.",
    icon: sIcon5,
  },
];

const shapeImages = [pImg1, pImg2];

const EnergyUtilities = () => {
  return (
    <Fragment>
      <div className="body_wrap sco_agency">
        <HeroSectionTitle
          title="Energy & Utilities"
          subtitle="Power energy systems with smart grid and renewable solutions"
          buttonText="TALK TO OUR EXPERTS"
          buttonLink="#contact"
          backgroundImage="/Energy-and-Utilities.webp"
        />
        <WorkProcess
          heading="Smart Energy Transformation"
          description="Our proven 5-step process helps energy and utility companies modernize infrastructure, integrate renewables, and deliver reliable, sustainable power solutions."
          buttonText="Connect with Energy Experts"
          buttonLink="/contact"
          processList={processList}
          shapeImages={shapeImages}
        />
        <ServicesComponent
          services={EnergyUtilitiesServices}
          limit={6}
          showButton={true}
          buttonText="Schedule a Strategy Call"
          buttonLink="/contact"
          sectionStyle={{ backgroundColor: "#f8f9fa" }}
        />
        <HelpDeskBlogSection />
      </div>
      <Footer />

     
        </Fragment>
  );
};

export default EnergyUtilities;
