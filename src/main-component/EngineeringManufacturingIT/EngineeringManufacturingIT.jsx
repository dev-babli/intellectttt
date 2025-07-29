import React, { Fragment, useState } from "react";

import IndustrieSection from "../../components/IndustrieSection/IndustrieSection";

import DataAndAnalyticsHero from "../../components/DataAndAnalyticsHero/DataAndAnalyticsHero";
import AwardSection from "../AboutUsPage/AwardSection";
import FunFactSection from '../../components/It-Services-Components/FunFact/FunFact';
import IndustriesSimple from "../../components/LuminCards/IndustriesSimpleold";
import ContactSection from "../../components/It-Services-Components/ContactSection";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

const sampleCards = [
  {
    title: "Industry 4.0",
    description: "Digitize operations with smart, connected systems.",
    buttonText: "Explore",
    image: "/images/Industry.webp",
    url:"/service/engineering-and-manufacturing-it/industry4"
  },
  {
    title: "MES Integration & IoT",
    description: "Unify shop floors with IoT and MES connectivity.",
    buttonText: "Explore",
    image: "/images/mes.webp",
    url:"/service/engineering-and-manufacturing-it/mes"
  },
  {
    title: "PLM, CAD & CAE Automation",
    description: "Streamline design and engineering with automation.",
    buttonText: "Explore",
    image: "/images/PLM.webp",
    url:"/service/engineering-and-manufacturing-it/plm"
  },
  {
    title: "Smart Factory",
    description: "Enable agile, data-driven manufacturing at scale.",
    buttonText: "Explore",
    image: "/images/Smart-Factory.webp",
    url:"/service/engineering-and-manufacturing-it/twins"
  },
];

const EngineeringManufacturingIT = () => {
  return (
   <Fragment>
      <div className="sco_agency">
       
        <div className="page_content service-single-page">
          <DataAndAnalyticsHero />
          
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
      </div>
    </Fragment>
  )
}

export default EngineeringManufacturingIT
