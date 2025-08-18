import React, { Fragment, useState } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import Footer from "../../components/footer/Footer";
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";
import FeaturesSection from "../../components/FeaturesSectionSub/FeaturesSection";
import { CssBaseline } from "@mui/material";
import DataSection from "../../components/DataSection/DataSection";

import HubIcon from "@mui/icons-material/Hub";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import CloudSyncIcon from "@mui/icons-material/CloudSync";
import SecurityIcon from "@mui/icons-material/Security";

import StorageIcon from "@mui/icons-material/Storage";
// import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import InsightsIcon from "@mui/icons-material/Insights";

const features = [
  {
    icon: <HubIcon sx={{ color: "#1976D2", fontSize: 34 }} />,
    title: "Unified Data Architecture",
    description:
      "Integrate structured and unstructured clinical data from EHRs, labs, imaging, and patient-generated sources into a centralized platform.",
  },
  {
    icon: <FactCheckIcon sx={{ color: "#43A047", fontSize: 34 }} />,
    title: "Data Quality & Governance",
    description:
      "Ensure accuracy, standardization, and validation of clinical data with robust governance frameworks and terminology mapping.",
  },
  {
    icon: <HealthAndSafetyIcon sx={{ color: "#E53935", fontSize: 34 }} />,
    title: "FHIR-Enabled Interoperability",
    description:
      "Leverage FHIR standards to enable seamless data sharing across systems, providers, and digital health apps.",
  },
  {
    icon: <QueryStatsIcon sx={{ color: "#FBC02D", fontSize: 34 }} />,
    title: "Advanced Clinical Analytics",
    description:
      "Gain insights into outcomes, care variability, and operational efficiency through real-time and retrospective analysis.",
  },
  {
    icon: <CloudSyncIcon sx={{ color: "#00ACC1", fontSize: 34 }} />,
    title: "Scalable Cloud Infrastructure",
    description:
      "Deploy on secure, compliant cloud platforms with elastic storage, compute scalability, and real-time streaming capabilities.",
  },
  {
    icon: <SecurityIcon sx={{ color: "#8E24AA", fontSize: 34 }} />,
    title: "Compliance & Security",
    description:
      "Maintain HIPAA, HITRUST, and GDPR compliance with strong encryption, access controls, and audit-ready infrastructure.",
  },
];

const Datafeatures = [
  {
    icon: <StorageIcon sx={{ color: "#0288D1", fontSize: 36 }} />,
    title: "Centralized Clinical Data Repository",
    description:
      "Consolidate EHR, lab, imaging, and patient-generated data into a unified, scalable platform for consistent access and management.",
  },
  {
    icon: <HealthAndSafetyIcon sx={{ color: "#43A047", fontSize: 36 }} />,
    title: "Standards-Based Interoperability",
    description:
      "Support HL7, FHIR, and other healthcare standards to enable seamless and secure data exchange across clinical systems and applications.",
  },
  {
    icon: <InsightsIcon sx={{ color: "#FBC02D", fontSize: 36 }} />,
    title: "Actionable Clinical Intelligence",
    description:
      "Turn raw clinical data into real-time insights with integrated analytics that support decision-making, research, and patient outcomes.",
  },
];
const ClinicalDataPlatforms = () => {
  // Scroll to top when component mounts
  useScrollToTop();
  return (
    <Fragment>
      <div className="sco_agency">
        <div className="page_content service-single-page">
          <HeroSectionTitle
            title="Clinical Data Platforms"
            subtitle="Transform Clinical Data into Actionable Intelligence with Scalable Clinical Data Platforms"
            buttonText="TALK TO OUR EXPERTS"
            buttonLink="#contact"
            backgroundImage="/Clinical-Data-Platforms.webp"
          />
          <CssBaseline />
          <FeaturesSection features={features} />
          <DataSection
            title="Transform Clinical Data into Actionable Intelligence"
            description={`Modernize your healthcare data infrastructure with scalable Clinical Data Platforms that unify, manage, and analyze patient information across systems.

We help organizations consolidate data from EHRs, labs, wearables, and third-party sources into interoperable platforms that support care delivery, research, and operations.

From secure ingestion to real-time analytics, we design end-to-end solutions that empower clinicians, administrators, and researchers to make informed decisions. Whether you're building clinical registries, enabling precision medicine, or integrating with FHIR-based APIs—our platforms are built to scale with your goals.`}
            features={Datafeatures}
            ctaText="Let's Connect"
            ctaLink="/contact"
          />
        </div>
      </div>
      <Footer />

        </Fragment>
  );
};

export default ClinicalDataPlatforms;
