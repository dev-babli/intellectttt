import React, { Fragment, useState } from "react";

import IndustrieSection from "../../components/IndustrieSection/IndustrieSection";

import ManagedITServicesHero from "../../components/ManagedITServicesHero/ManagedITServicesHero";
import ServiceSection from "../../components/data-solutions-components/ServiceSection/ServiceSection";
import IndustriesSimple from "../../components/LuminCards/IndustriesSimpleold";
import ContactSection from "../../components/It-Services-Components/ContactSection";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";
// import Testimonial from "../../components/data-solutions-components/Testimonial/Testimonial";

const sampleCards = [
  {
    title: "Application Support (L1–L3)",
    description: "End-to-end support across app lifecycles.",
    buttonText: "Explore",
    image: "/images/1m.webp",
    url: "/service/managed-it-services/support",
  },
  {
    title: "Infra & Network Monitoring",
    description: "Real-time visibility into IT systems.",
    buttonText: "Explore",
    image: "/images/2m.webp",
    url: "/service/managed-it-services/itsm",
  },
  {
    title: "ITSM (IT Service Management)",
    description: "Streamlined IT services for better uptime.",
    buttonText: "Explore",
    image: "/images/3m.webp",
    url: "/service/managed-it-services/infra",
  },
  {
    title: "Managed Resource Services",
    description: "Skilled IT resources, deployed on demand.",
    buttonText: "Explore",
    image: "/images/4m.webp",
    url: "/service/managed-it-services/tms",
  },
];

const ManagedITServices = () => {
  return (
    <Fragment>
      <div className="sco_agency">
        <div className="page_content service-single-page">
          <HeroSectionTitle
            title="Managed IT Services (TMS)"
            subtitle="Streamlined ITSM, Service Desk & CoE Solutions for Operational Excellence"
            buttonText="TALK TO OUR EXPERTS"
            buttonLink="#contact"
            backgroundImage="/Managed-IT-header.webp"
          />

          <div className="sd-ser-content_wrap pb-110">
            <div className="container">
              <div className="sd-ser-content">
                <h2 className="sd-title text-center mt-5">
                  Enhance reliability and performance with Managed IT Services
                </h2>
                <p className="sd-content text-center">
                  In today’s always-on digital ecosystem, businesses need
                  uninterrupted, secure, and scalable IT operations. Our Managed
                  IT Services are designed to help organizations offload
                  day-to-day IT management so they can focus on core business
                  priorities.
                </p>
                <p className="sd-content text-center">
                  We offer end-to-end solutions—from data integration and
                  warehousing to advanced analytics, business intelligence, and
                  AI-powered forecasting. Whether you're building dashboards,
                  modernizing data infrastructure, or enabling real-time
                  reporting, we tailor strategies to meet your specific
                  goals.From infrastructure monitoring and network security to
                  helpdesk support and ITSM integration, we deliver end-to-end
                  IT services tailored to your operational needs. Whether you're
                  looking to reduce downtime, increase agility, or improve
                  service delivery, our solutions ensure optimal IT performance.
                </p>
                <br />
                <p className="sd-content text-center">
                  Our approach blends deep technical expertise with proactive
                  service models to provide reliable, cost-effective, and
                  future-ready IT support. Backed by industry best practices and
                  24/7 monitoring, we help you maintain business continuity,
                  reduce risks, and scale with confidence.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white">
            <ServiceCard cards={sampleCards} />
            {/* <Testimonial /> */}
          </div>

          <IndustriesSimple />
          <ContactSection />
        </div>
      </div>
    </Fragment>
  );
};

export default ManagedITServices;
