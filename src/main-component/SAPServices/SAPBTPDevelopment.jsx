import React, { Fragment, useState } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import Footer from "../../components/footer/Footer";
import OptimizedBlogSection from "../../components/OptimizedBlogSection/OptimizedBlogSection";
import OptimizedCaseStudySection from "../../components/OptimizedCaseStudySection/OptimizedCaseStudySection";
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";
import FeaturesSection from "../../components/FeaturesSectionSub/FeaturesSection";
import { CssBaseline } from "@mui/material";
import DataSection from "../../components/DataSection/DataSection";
import TechnologyLogos from "../../components/TechnologyLogos/TechnologyLogos";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import BrushIcon from "@mui/icons-material/Brush";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import BugReportIcon from "@mui/icons-material/BugReport";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

import CodeIcon from "@mui/icons-material/Code";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import CloudSyncIcon from "@mui/icons-material/CloudSync";

const features = [
  {
    icon: (
      <IntegrationInstructionsIcon sx={{ color: "#e85d04", fontSize: 34 }} />
    ),
    title: "Custom ABAP Development",
    description:
      "Enhance standard SAP functionality with custom ABAP programs, reports, interfaces, and workflows tailored to your business needs.",
  },
  {
    icon: <BrushIcon sx={{ color: "#e85d04", fontSize: 34 }} />,
    title: "Responsive Fiori UI Design",
    description:
      "Deliver seamless user experiences with SAP Fiori apps that are fast, intuitive, and consistent across all devices.",
  },
  {
    icon: <CloudDoneIcon sx={{ color: "#e85d04", fontSize: 34 }} />,
    title: "Cloud Extensibility with BTP",
    description:
      "Utilize SAP BTP to build and deploy scalable cloud-native extensions that connect core systems with next-gen services.",
  },
  {
    icon: <BugReportIcon sx={{ color: "#e85d04", fontSize: 34 }} />,
    title: "Debugging & Performance Tuning",
    description:
      "Accelerate system performance with detailed ABAP debugging, memory optimization, and runtime diagnostics.",
  },
  {
    icon: <DeveloperModeIcon sx={{ color: "#e85d04", fontSize: 34 }} />,
    title: "DevOps & CI/CD for SAP",
    description:
      "Implement DevOps best practices including automated testing, transport management, and continuous delivery for SAP projects.",
  },
  {
    icon: <TipsAndUpdatesIcon sx={{ color: "#e85d04", fontSize: 34 }} />,
    title: "Innovation-Driven Support",
    description:
      "Go beyond break-fix with strategic enhancements, modern UI conversions, and value-added recommendations.",
  },
];

const Datafeatures = [
  {
    icon: <CodeIcon sx={{ color: "#5b5fc7", fontSize: 36 }} />,
    title: "Advanced ABAP Development",
    description:
      "Design and enhance core SAP functionalities with optimized ABAP code, supporting custom logic, performance tuning, and modular reusability across ECC and S/4HANA.",
  },
  {
    icon: <WebAssetIcon sx={{ color: "#f5b400", fontSize: 36 }} />,
    title: "Modern Fiori UX Design",
    description:
      "Build sleek, user-centric applications using SAP Fiori and UI5 that boost productivity and deliver consistent, responsive user experiences across devices.",
  },
  {
    icon: <CloudSyncIcon sx={{ color: "#fb5607", fontSize: 36 }} />,
    title: "BTP-Driven Innovation",
    description:
      "Leverage SAP Business Technology Platform for real-time integration, cloud extensibility, and intelligent services—accelerating digital transformation with minimal disruption.",
  },
];
const SAPBTPDevelopment = () => {
  // Scroll to top when component mounts
  useScrollToTop();
  return (
    <Fragment>
      <div className="sco_agency">
        <div className="page_content service-single-page">
          <HeroSectionTitle
            title="SAP BTP, ABAP, Fiori Development & Support"
            subtitle="Unlock the Power of Intelligent Automation with Our Expertise in SAP BTP, ABAP, Fiori Development and Support."
            buttonText="TALK TO OUR EXPERTS"
            buttonLink="#contact"
            backgroundImage="/BTP.webp"
          />
          <CssBaseline />
          <FeaturesSection features={features} />
          <DataSection
            title="Empower Innovation with SAP BTP, ABAP & Fiori Development & Support"
            description={`In today’s digital-first enterprise landscape, success hinges on more than standard SAP support—it requires agile, intelligent platforms that accelerate innovation.

Our SAP BTP, ABAP & Fiori Development & Support services deliver next-gen application development, seamless user experiences, and real-time integration across your SAP ecosystem.

From custom ABAP enhancements and modern Fiori UI design to extensibility using SAP Business Technology Platform (BTP), we help you build, deploy, and scale intelligent applications faster.

With certified SAP developers, DevOps best practices, and ongoing support—we ensure your SAP apps are responsive, intuitive, and aligned with your evolving business goals.`}
            features={Datafeatures}
            ctaText="Let's Connect"
            ctaLink="/contact"
          />
          <TechnologyLogos />
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

        </Fragment>
  );
};

export default SAPBTPDevelopment;
