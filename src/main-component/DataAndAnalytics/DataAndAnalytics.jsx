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
    title: "Azure Data Lake, Snowflake & Power BI",
    description: "Unify, store, and visualize data at scale.",
    buttonText: "Explore",
    image: "/images/1d.webp",
    url:"/service/data-and-analytics/tools"
  },
  {
    title: "Business Intelligence & Dashboards",
    description: "Turn raw data into powerful insights.",
    buttonText: "Explore",
    image: "/images/2d.webp",
     url:"/service/data-and-analytics/bi"
  },
  {
    title: "Data Engineering & ETL",
    description: "Build and streamline trusted data pipelines.",
    buttonText: "Explore",
    image: "/images/3d.webp",
     url:"/service/data-and-analytics/etl"
  },
  {
    title: "Data Governance & Security",
    description: "Ensure compliant, secure, and reliable data.",
    buttonText: "Explore",
    image: "/images/4d.webp",
     url:"/service/data-and-analytics/governance"
  },
];


const DataAndAnalytics = () => {
  return (
   <Fragment>
      <div className="sco_agency">
       
        <div className="page_content service-single-page">
          <DataAndAnalyticsHero />
          
          <div className="sd-ser-content_wrap pb-110">
            <div className="container">
              <div className="sd-ser-content">
                <h2 className="sd-title text-center mt-5">
                  Drive smarter decisions with data-powered insights
                </h2>
                <p className="sd-content text-center">
                 In today’s data-driven world, organizations need more than just raw information—they need actionable insights. Our Data & Analytics services help businesses harness the full value of their data to improve performance, reduce risks, and uncover new growth opportunities.
                </p>
                <p className="sd-content text-center">
                 We offer end-to-end solutions—from data integration and warehousing to advanced analytics, business intelligence, and AI-powered forecasting. Whether you're building dashboards, modernizing data infrastructure, or enabling real-time reporting, we tailor strategies to meet your specific goals.
                </p>
                <br />
                <p className="sd-content text-center">
                 Our approach combines cutting-edge tools with deep domain expertise to deliver scalable, secure, and insight-rich analytics solutions. From cloud-native platforms to predictive models, we empower you to make confident, data-backed decisions that drive measurable impact.
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

export default DataAndAnalytics
