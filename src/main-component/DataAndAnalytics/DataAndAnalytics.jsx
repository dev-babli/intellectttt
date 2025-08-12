import React, { Fragment, useState } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import Footer from "../../components/footer/Footer";
import OptimizedBlogSection from "../../components/OptimizedBlogSection/OptimizedBlogSection";
import OptimizedCaseStudySection from "../../components/OptimizedCaseStudySection/OptimizedCaseStudySection";

import IndustrieSection from "../../components/IndustrieSection/IndustrieSection";
import About from "../../components/It-Services-Components/about/about";
import About2 from "../../components/Cyber-Security-Components/about/AboutSection";
import ModernHeroSection from "../../components/common/ModernHeroSection";
import AboutSection from "../../components/Cyber-Security-Components/about/AboutSection";
import icon from "../../images/icon/magic02.svg";
import about1 from "../../images/bg/image-belowhero.webp";
import about2 from "../../images/bg/abt-cnt_bg.png";
import ModernServiceCard from "../../components/common/ModernServiceCard";
import AlliancesSection from "../../components/AlliancesSection/AlliancesSection";

const sampleCards = [
  {
    title: "Azure Data Lake, Snowflake & Power BI",
    description: "Unify, store, and visualize data at scale with enterprise-grade data platforms and advanced analytics.",
    buttonText: "Explore",
    image: "/images/1d.webp",
    url:"/service/data-and-analytics/tools",
    features: ["Data warehousing", "Real-time analytics", "Advanced visualization"]
  },
  {
    title: "Business Intelligence & Dashboards",
    description: "Turn raw data into powerful insights with interactive dashboards and real-time reporting solutions.",
    buttonText: "Explore",
    image: "/images/2d.webp",
     url:"/service/data-and-analytics/bi",
     features: ["Interactive dashboards", "Real-time reporting", "KPI tracking"]
  },
  {
    title: "Data Engineering & ETL",
    description: "Build and streamline trusted data pipelines with scalable ETL processes and data quality management.",
    buttonText: "Explore",
    image: "/images/3d.webp",
     url:"/service/data-and-analytics/etl",
     features: ["ETL pipelines", "Data quality", "Scalable architecture"]
  },
  {
    title: "Data Governance & Security",
    description: "Ensure compliant, secure, and reliable data with comprehensive governance frameworks and security protocols.",
    buttonText: "Explore",
    image: "/images/4d.webp",
     url:"/service/data-and-analytics/governance",
     features: ["Data governance", "Security compliance", "Privacy protection"]
  },
];


const DataAndAnalytics = () => {
  // Scroll to top when component mounts
  useScrollToTop();

  return (
    <Fragment>
      <div className="sco_agency">
        <div className="page_content service-single-page">
          <ModernHeroSection
            title="Data & Analytics Industrialization Consulting"
            subtitle="Data-Driven Insights"
            description="Build. Evaluate. Generate. Transform your data into actionable insights with our comprehensive data and analytics services. From data engineering to advanced analytics, we help organizations unlock the full potential of their data assets."
            buttonText="Explore Solutions"
            buttonLink="/contact"
            backgroundImage="/images/bg/image-belowhero.webp"
            features={[
              "Data Engineering & ETL",
              "Business Intelligence",
              "Advanced Analytics",
              "Data Governance"
            ]}
          />

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

          <ModernServiceCard 
            cards={sampleCards} 
            title="Data & Analytics Solutions"
            subtitle="Comprehensive data and analytics services designed to transform your business intelligence and decision-making"
          />
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
