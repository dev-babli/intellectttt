import React, { Fragment } from "react";
import Footer from "../../components/footer/Footer";
import OptimizedBlogSection from "../../components/OptimizedBlogSection/OptimizedBlogSection";
import OptimizedCaseStudySection from "../../components/OptimizedCaseStudySection/OptimizedCaseStudySection";

import ServicesComponent from "../../components/ServicesComponent/ServicesComponent";
import { RetailEcommerceServices } from "../../api/cardService";
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
    title: "Digital Commerce Strategy & Assessment",
    subTitle:
      "We analyze your current retail operations, customer journey, and technology stack to design a comprehensive digital transformation roadmap.",
    icon: sIcon1,
  },
  {
    id: "02",
    title: "Omnichannel Platform Architecture",
    subTitle:
      "Our experts design scalable, secure e-commerce platforms that seamlessly integrate online, mobile, and physical store experiences.",
    icon: sIcon2,
  },
  {
    id: "03",
    title: "AI-Powered Personalization & Analytics",
    subTitle:
      "We implement intelligent recommendation engines, customer analytics, and personalized marketing systems to boost engagement and sales.",
    icon: sIcon3,
  },
  {
    id: "04",
    title: "Supply Chain & Inventory Optimization",
    subTitle:
      "We develop smart inventory management, demand forecasting, and supply chain visibility solutions for operational efficiency.",
    icon: sIcon4,
  },
  {
    id: "05",
    title: "Deployment, Testing & Continuous Optimization",
    subTitle:
      "From launch to ongoing optimization, we ensure seamless deployment, comprehensive testing, and data-driven improvements for sustained growth.",
    icon: sIcon5,
  },
];

const shapeImages = [pImg1, pImg2];

const RetailEcommerce = () => {
  return (
    <Fragment>
      <div className="body_wrap sco_agency">
        <HeroSectionTitle
          title="Retail & E-Commerce"
          subtitle="Accelerate retail transformation with digital commerce solutions"
          buttonText="TALK TO OUR EXPERTS"
          buttonLink="#contact"
          backgroundImage="/retail-ecommerce-hero.webp"
        />
        <WorkProcess
          heading="Digital Commerce Transformation"
          description="Our proven 5-step process helps retailers and e-commerce businesses deliver seamless, personalized, and scalable digital shopping experiences."
          buttonText="Connect with Retail Experts"
          buttonLink="/contact"
          processList={processList}
          shapeImages={shapeImages}
        />
        <ServicesComponent
          services={RetailEcommerceServices}
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

export default RetailEcommerce;
