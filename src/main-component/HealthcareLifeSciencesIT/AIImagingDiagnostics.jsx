import React, { Fragment, useState } from "react";
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";
import ContactSection from "../../components/It-Services-Components/ContactSection";
import FeaturesSection from "../../components/FeaturesSectionSub/FeaturesSection";
import { CssBaseline } from "@mui/material";
import DataSection from "../../components/DataSection/DataSection";
import TechnologyLogos from "../../components/TechnologyLogos/TechnologyLogos";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import SearchIcon from "@mui/icons-material/Search";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import InsightsIcon from "@mui/icons-material/Insights";
import CloudSyncIcon from "@mui/icons-material/CloudSync";
import ShieldIcon from "@mui/icons-material/Shield";

import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import PsychologyIcon from "@mui/icons-material/Psychology";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";

const features = [
  {
    icon: <PrecisionManufacturingIcon sx={{ color: "#1976D2", fontSize: 34 }} />,
    title: "AI-Powered Image Analysis",
    description:
      "Leverage deep learning models to detect patterns, anomalies, and pathologies in radiology, pathology, and other diagnostic images.",
  },
  {
    icon: <SearchIcon sx={{ color: "#4CAF50", fontSize: 34 }} />,
    title: "Faster & More Accurate Diagnoses",
    description:
      "Assist clinicians with faster, more consistent interpretations by using AI to prioritize urgent cases and highlight key findings.",
  },
  {
    icon: <QueryStatsIcon sx={{ color: "#FFC107", fontSize: 34 }} />,
    title: "Predictive & Prognostic Insights",
    description:
      "Use AI to predict disease progression and treatment outcomes by analyzing imaging trends and clinical metadata together.",
  },
  {
    icon: <InsightsIcon sx={{ color: "#00ACC1", fontSize: 34 }} />,
    title: "Decision Support Integration",
    description:
      "Embed AI insights directly into PACS, RIS, or EHR workflows to support radiologists and diagnosticians in real time.",
  },
  {
    icon: <CloudSyncIcon sx={{ color: "#9C27B0", fontSize: 34 }} />,
    title: "Cloud-Based Scalability",
    description:
      "Scale diagnostic AI services across facilities with cloud-native models that support fast training, deployment, and updates.",
  },
  {
    icon: <ShieldIcon sx={{ color: "#E53935", fontSize: 34 }} />,
    title: "Ethics, Security & Compliance",
    description:
      "Ensure AI models meet regulatory standards and ethical guidelines with explainability, audit trails, and HIPAA/GDPR compliance.",
  },
];
const Datafeatures = [
  {
    icon: <PhotoLibraryIcon sx={{ color: "#0288D1", fontSize: 36 }} />,
    title: "Automated Medical Imaging",
    description:
      "Accelerate image interpretation with AI algorithms trained to detect anomalies across X-rays, CTs, MRIs, and pathology slides.",
  },
  {
    icon: <PsychologyIcon sx={{ color: "#43A047", fontSize: 36 }} />,
    title: "AI-Driven Clinical Decision Making",
    description:
      "Support diagnostics with predictive models that assist in disease detection, staging, and patient risk stratification.",
  },
  {
    icon: <IntegrationInstructionsIcon sx={{ color: "#FBC02D", fontSize: 36 }} />,
    title: "Seamless System Integration",
    description:
      "Deploy AI within your existing diagnostic infrastructure—integrated with PACS, LIS, or EHR for uninterrupted workflows.",
  },
];
const AIImagingDiagnostics = () => {
  return (
<Fragment>
      <div className="sco_agency">
        <div className="page_content service-single-page">
          <HeroSectionTitle
            title="AI in Imaging & Diagnostics"
            subtitle="Accelerate your diagnostic workflow with AI-powered image analysis and decision support tools."
            buttonText="TALK TO OUR EXPERTS"
            buttonLink="#contact"
            backgroundImage="/AI-in-Imaging-and-Diagnotics.webp"
          />
          <CssBaseline />
          <FeaturesSection features={features} />
          <DataSection
            title="AI in Imaging & Diagnostics"
  description={`Empower your diagnostics teams with AI-driven image analysis and decision support tools. Our solutions help healthcare organizations improve accuracy, reduce turnaround time, and prioritize critical cases using advanced machine learning.

From radiology to pathology, we build and integrate AI platforms that transform imaging workflows—enhancing early detection, triaging, and predictive diagnosis at scale.`}
            features={Datafeatures}
            ctaText="Contact Us"
            ctaLink="/contact"
          />
          <TechnologyLogos />
          <ContactSection />
        </div>
      </div>
    </Fragment>
  )
}

export default AIImagingDiagnostics
