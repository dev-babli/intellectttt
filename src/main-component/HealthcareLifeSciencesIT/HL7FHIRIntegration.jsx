import React, { Fragment, useState } from "react";
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";
import ContactSection from "../../components/It-Services-Components/ContactSection";
import FeaturesSection from "../../components/FeaturesSectionSub/FeaturesSection";
import { CssBaseline } from "@mui/material";
import DataSection from "../../components/DataSection/DataSection";
import TechnologyLogos from "../../components/TechnologyLogos/TechnologyLogos";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import LockIcon from "@mui/icons-material/Lock";
import InsightsIcon from "@mui/icons-material/Insights";
import LanIcon from "@mui/icons-material/Lan";

// import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import HubIcon from "@mui/icons-material/Hub";
import SecurityIcon from "@mui/icons-material/Security";

const features = [
  {
    icon: <HubIcon sx={{ color: "#4CAF50", fontSize: 34 }} />,
    title: "FHIR & HL7 Integration",
    description:
      "Implement seamless communication between legacy HL7 systems and modern FHIR APIs for true interoperability.",
  },
  {
    icon: <LocalHospitalIcon sx={{ color: "#1976D2", fontSize: 34 }} />,
    title: "EHR System Connectivity",
    description:
      "Integrate with leading EHR platforms to exchange clinical data in real-time and enhance care coordination.",
  },
  {
    icon: <SyncAltIcon sx={{ color: "#FF5722", fontSize: 34 }} />,
    title: "Real-Time Data Exchange",
    description:
      "Enable bidirectional, real-time data sync across providers, labs, and payers with minimal latency and high reliability.",
  },
  {
    icon: <LockIcon sx={{ color: "#9C27B0", fontSize: 34 }} />,
    title: "HIPAA & Security Compliance",
    description:
      "Ensure protected health information (PHI) is securely transmitted with full compliance to HIPAA and security best practices.",
  },
  {
    icon: <InsightsIcon sx={{ color: "#FBC02D", fontSize: 34 }} />,
    title: "Patient-Centric Insights",
    description:
      "Leverage integrated health data to provide clinicians and patients with actionable insights for personalized care.",
  },
  {
    icon: <LanIcon sx={{ color: "#00BCD4", fontSize: 34 }} />,
    title: "Scalable Interface Engine",
    description:
      "Deploy flexible, standards-based integration engines to manage large-scale HL7/FHIR transactions effortlessly.",
  },
];

const Datafeatures = [
  {
    icon: <HubIcon sx={{ color: "#4CAF50", fontSize: 36 }} />,
    title: "Seamless HL7/FHIR Integration",
    description:
      "Bridge legacy HL7 systems with modern FHIR APIs to ensure secure and real-time data exchange across healthcare platforms.",
  },
  {
    icon: <LocalHospitalIcon sx={{ color: "#1976D2", fontSize: 36 }} />,
    title: "Clinical System Connectivity",
    description:
      "Connect EHRs, labs, payers, and third-party health apps with robust interface engines and standardized healthcare protocols.",
  },
  {
    icon: <SecurityIcon sx={{ color: "#FF9800", fontSize: 36 }} />,
    title: "Compliance & Security",
    description:
      "Ensure HIPAA-compliant integrations with end-to-end encryption, access control, and audit logging for all patient data flows.",
  },
];
const HL7FHIRIntegration = () => {
  return (
    <Fragment>
      <div className="sco_agency">
        <div className="page_content service-single-page">
          <HeroSectionTitle
            title="HL7/FHIR Integration"
            subtitle="Maximize the value of your data with a modern analytics ecosystem powered by Azure Data Lake, Snowflake, and Power BI."
            buttonText="TALK TO OUR EXPERTS"
            buttonLink="#contact"
            backgroundImage="/HL7-FHIR-Integration.webp"
          />
          <CssBaseline />
          <FeaturesSection features={features} />
          <DataSection
            title="Integrate. Interoperate. Innovate."
            description={`Unlock seamless healthcare data exchange with advanced HL7 and FHIR integration solutions.

We help healthcare organizations connect siloed systems, ensure interoperability across platforms, and enable real-time, secure data flow between EHRs, labs, payers, and third-party apps.

From mapping legacy HL7 messages to modern FHIR APIs, to building scalable data exchange pipelines and ensuring HIPAA-compliant integration—we handle the complexities so your teams can focus on care delivery.

Whether you're building patient apps, connecting clinical systems, or scaling health data exchange across partners—our experts streamline your path to a fully interoperable digital health ecosystem.`}
            features={Datafeatures}
            ctaText="Let's Connect"
            ctaLink="/contact"
          />
          <TechnologyLogos />
          <ContactSection />
        </div>
      </div>
    </Fragment>
  );
};

export default HL7FHIRIntegration;
