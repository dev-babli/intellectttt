import React, { Fragment } from "react";
import Footer from "../../components/footer/Footer";

import ServicesComponent from "../../components/ServicesComponent/ServicesComponent";
import { LogisticsTransportationServices } from "../../api/cardService";
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
    title: "Logistics Infrastructure Assessment & Strategy",
    subTitle:
      "We analyze your current supply chain operations, fleet management, and technology stack to design a comprehensive digital transformation roadmap.",
    icon: sIcon1,
  },
  {
    id: "02",
    title: "Smart Logistics Platform Architecture",
    subTitle:
      "Our experts design intelligent transportation and warehouse management systems with real-time tracking, route optimization, and automated workflows.",
    icon: sIcon2,
  },
  {
    id: "03",
    title: "IoT & Supply Chain Visibility Implementation",
    subTitle:
      "We deploy IoT sensors, GPS tracking, and real-time monitoring systems to provide end-to-end visibility across your entire supply chain network.",
    icon: sIcon3,
  },
  {
    id: "04",
    title: "Predictive Analytics & Route Optimization",
    subTitle:
      "We implement AI-powered analytics to predict demand, optimize routes, reduce costs, and improve delivery performance through data-driven insights.",
    icon: sIcon4,
  },
  {
    id: "05",
    title: "Deployment, Integration & Continuous Optimization",
    subTitle:
      "From system launch to ongoing operations, we ensure seamless integration, comprehensive testing, and continuous optimization for maximum efficiency.",
    icon: sIcon5,
  },
];

const shapeImages = [pImg1, pImg2];

const LogisticsTransportation = () => {
  return (
    <Fragment>
      <div className="body_wrap sco_agency">
        <HeroSectionTitle
          title="Logistics & Transportation"
          subtitle="Optimize logistics with intelligent supply chain solutions"
          buttonText="TALK TO OUR EXPERTS"
          buttonLink="#contact"
          backgroundImage="/images/Transportation-andLogistics.webp"
        />
        <WorkProcess
          heading="Intelligent Logistics Transformation"
          description="Our proven 5-step process helps logistics and transportation companies optimize operations, reduce costs, and deliver superior customer experiences."
          buttonText="Connect with Logistics Experts"
          buttonLink="/contact"
          processList={processList}
          shapeImages={shapeImages}
        />
        <ServicesComponent
          services={LogisticsTransportationServices}
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

export default LogisticsTransportation;
