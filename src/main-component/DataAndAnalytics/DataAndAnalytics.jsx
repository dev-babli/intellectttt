import React, { Fragment, useState } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import Footer from "../../components/footer/Footer";
import OptimizedBlogSection from "../../components/OptimizedBlogSection/OptimizedBlogSection";
import OptimizedCaseStudySection from "../../components/OptimizedCaseStudySection/OptimizedCaseStudySection";

import IndustrieSection from "../../components/IndustrieSection/IndustrieSection";
import About from "../../components/It-Services-Components/about/about";
import About2 from "../../components/Cyber-Security-Components/about/AboutSection";
import DataAndAnalyticsHero from "../../components/DataAndAnalyticsHero/DataAndAnalyticsHero";
import AboutSection from "../../components/Cyber-Security-Components/about/AboutSection";
import icon from "../../images/icon/magic02.svg";
import about1 from "../../images/bg/image-belowhero.webp";
import about2 from "../../images/bg/abt-cnt_bg.png";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import AlliancesSection from "../../components/AlliancesSection/AlliancesSection";

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
  // Scroll to top when component mounts
  useScrollToTop();

  return (
    <Fragment>
      <div className="sco_agency">
        <div className="page_content service-single-page">
          <DataAndAnalyticsHero />

          <AboutSection
            subtitleIcon={icon}
            subtitle="About Us"
            title="Data & Analytics Solutions"
            content="Transform your data into actionable insights with our comprehensive data and analytics services. From data engineering and ETL pipelines to business intelligence dashboards and advanced analytics—we help organizations unlock the full potential of their data assets."
            image={about1}
            badgeImage={about2}
            badgeNumber="200+"
            badgeText="Data projects delivered successfully"
          />

          <ServiceCard cards={sampleCards} />
          <AlliancesSection />
          {}
        </div>
      </div>
      
        <OptimizedBlogSection 
          title="Latest Insights & Updates"
          subtitle="Stay informed with our latest industry insights, technical articles, and thought leadership content"
        />
        <OptimizedCaseStudySection 
          title="Success Stories"
          subtitle="Discover how we've helped businesses achieve their digital transformation goals"
        /><Footer />

      {/* <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="7e90gBu4pas"
        onClose={() => setOpen(false)}
      /> */}
    </Fragment>
  );
};

export default DataAndAnalytics;
