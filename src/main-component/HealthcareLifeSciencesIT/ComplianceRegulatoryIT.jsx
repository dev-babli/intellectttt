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
import GavelIcon from "@mui/icons-material/Gavel";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import InsightsIcon from "@mui/icons-material/Insights";
import ChecklistIcon from "@mui/icons-material/Checklist";
import PolicyIcon from "@mui/icons-material/Policy";

import ShieldIcon from "@mui/icons-material/Shield";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import RuleIcon from "@mui/icons-material/Rule";

const features = [
  {
    icon: <GavelIcon sx={{ color: "#E53935", fontSize: 34 }} />,
    title: "Regulatory Compliance Automation",
    description:
      "Digitize and automate compliance processes across HIPAA, 21 CFR Part 11, GDPR, and other regional or global standards.",
  },
  {
    icon: <VerifiedUserIcon sx={{ color: "#43A047", fontSize: 34 }} />,
    title: "Secure Identity & Access Management",
    description:
      "Implement role-based access controls, SSO, MFA, and audit logs to safeguard sensitive data and meet security mandates.",
  },
  {
    icon: (
      <IntegrationInstructionsIcon sx={{ color: "#1976D2", fontSize: 34 }} />
    ),
    title: "System Validation & Integration",
    description:
      "Ensure your platforms are validated and compliant by design, from EHR integrations to laboratory and research systems.",
  },
  {
    icon: <InsightsIcon sx={{ color: "#FBC02D", fontSize: 34 }} />,
    title: "Audit-Ready Reporting & Analytics",
    description:
      "Gain real-time visibility into compliance KPIs, incidents, and workflows with built-in dashboards and evidence trails.",
  },
  {
    icon: <ChecklistIcon sx={{ color: "#00ACC1", fontSize: 34 }} />,
    title: "GxP-Aligned IT Systems",
    description:
      "Design IT infrastructure aligned with Good Clinical, Laboratory, and Manufacturing Practices (GxP) for life sciences.",
  },
  {
    icon: <PolicyIcon sx={{ color: "#9C27B0", fontSize: 34 }} />,
    title: "Policy Management & SOP Tracking",
    description:
      "Digitize your policies and SOP workflows with automated reminders, version control, and employee training logs.",
  },
];
const Datafeatures = [
  {
    icon: <ShieldIcon sx={{ color: "#0288D1", fontSize: 36 }} />,
    title: "Data Security & Risk Mitigation",
    description:
      "Protect sensitive health, research, and patient data with advanced encryption, monitoring, and incident response protocols.",
  },
  {
    icon: <LibraryBooksIcon sx={{ color: "#43A047", fontSize: 36 }} />,
    title: "Compliance Documentation Management",
    description:
      "Streamline compliance documentation including audit trails, change control logs, validation records, and SOPs.",
  },
  {
    icon: <RuleIcon sx={{ color: "#FBC02D", fontSize: 36 }} />,
    title: "Ongoing Regulatory Alignment",
    description:
      "Stay up to date with evolving regulations like HIPAA, GDPR, and FDA guidelines through automated alerts and updates.",
  },
];
const ComplianceRegulatoryIT = () => {
  // Scroll to top when component mounts
  useScrollToTop();
  return (
    <Fragment>
      <div className="sco_agency">
        <div className="page_content service-single-page">
          <HeroSectionTitle
            title="Compliance & Regulatory IT"
            subtitle=" Empowering organizations to meet regulatory demands with secure, audit-ready IT solutions. "
            buttonText="TALK TO OUR EXPERTS"
            buttonLink="#contact"
            backgroundImage="/Compleance-and-Regulatory-IT.webp"
          />
          <CssBaseline />
          <FeaturesSection features={features} />
          <DataSection
            title="Simplify Compliance. Strengthen Trust."
            description={`We help healthcare, pharma, and regulated industries navigate complex compliance requirements through robust, scalable IT systems.

Our solutions ensure alignment with HIPAA, FDA 21 CFR Part 11, GDPR, and other global regulations—while enhancing operational efficiency and data integrity.

From policy-driven automation to audit-ready infrastructure, we implement secure digital ecosystems that reduce risk, support regulatory audits, and ensure uninterrupted operations.`}
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

export default ComplianceRegulatoryIT;
