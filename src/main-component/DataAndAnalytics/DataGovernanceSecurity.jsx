import React, { Fragment, useState } from "react";
import HeroSectionTitle from "../../components/HeroSectionTitle/HeroSectionTitle";
import ContactSection from "../../components/It-Services-Components/ContactSection";
import FeaturesSection from "../../components/FeaturesSectionSub/FeaturesSection";
import { CssBaseline } from "@mui/material";
import DataSection from "../../components/DataSection/DataSection";
import TechnologyLogos from "../../components/TechnologyLogos/TechnologyLogos";
import SecurityIcon from "@mui/icons-material/Security";
import GppGoodIcon from "@mui/icons-material/GppGood";
import PolicyIcon from "@mui/icons-material/Policy";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";


import LockPersonIcon from "@mui/icons-material/LockPerson";
import GavelIcon from "@mui/icons-material/Gavel";
import VisibilityIcon from "@mui/icons-material/Visibility";
const features = [
  {
    icon: <SecurityIcon sx={{ color: "#0288d1", fontSize: 34 }} />,
    title: "Robust Access Control",
    description:
      "Enforce role-based access and authentication policies to safeguard data across all platforms and environments.",
  },
  {
    icon: <GppGoodIcon sx={{ color: "#0288d1", fontSize: 34 }} />,
    title: "Compliance-Ready Systems",
    description:
      "Ensure alignment with GDPR, HIPAA, and other regulatory frameworks through automated compliance checks and auditing.",
  },
  {
    icon: <PolicyIcon sx={{ color: "#0288d1", fontSize: 34 }} />,
    title: "Policy Enforcement",
    description:
      "Centralize and automate data retention, classification, and protection policies for consistent governance.",
  },
  {
    icon: <ManageAccountsIcon sx={{ color: "#0288d1", fontSize: 34 }} />,
    title: "User Identity Management",
    description:
      "Streamline user onboarding, provisioning, and deprovisioning with secure identity lifecycle management.",
  },
  {
    icon: <EnhancedEncryptionIcon sx={{ color: "#0288d1", fontSize: 34 }} />,
    title: "Data Encryption",
    description:
      "Protect sensitive data at rest and in transit using strong encryption and secure key management practices.",
  },
  {
    icon: <VerifiedUserIcon sx={{ color: "#0288d1", fontSize: 34 }} />,
    title: "Continuous Monitoring",
    description:
      "Monitor data usage, anomalies, and threats in real time to proactively detect and mitigate risks.",
  },
];

const Datafeatures = [
  {
    icon: <LockPersonIcon sx={{ color: "#5b5fc7", fontSize: 36 }} />,
    title: "Secure Data Framework",
    description:
      "Build a foundational data architecture focused on privacy, encryption, access control, and minimal exposure of sensitive data.",
  },
  {
    icon: <GavelIcon sx={{ color: "#f5b400", fontSize: 36 }} />,
    title: "Regulatory Compliance",
    description:
      "Automate compliance workflows and maintain detailed audit trails to meet legal standards like SOC 2, PCI-DSS, and ISO 27001.",
  },
  {
    icon: <VisibilityIcon sx={{ color: "#fb5607", fontSize: 36 }} />,
    title: "Data Visibility & Auditing",
    description:
      "Gain full transparency into who accessed what data, when, and why—backed by tamper-proof logging and real-time auditing.",
  },
];
const DataGovernanceSecurity = () => {
  return (
    <Fragment>
         <div className="sco_agency">
           <div className="page_content service-single-page">
             <HeroSectionTitle
               title="Data Governance & Security"
               subtitle="We provide data governance and security solutions to help organizations protect their data from unauthorized access, data breaches, and privacy violations."
               buttonText="TALK TO OUR EXPERTS"
               buttonLink="#contact"
               backgroundImage="/Data-Governance-and-Securuty.webp"
             />
             <CssBaseline />
             <FeaturesSection features={features} />
             <DataSection
               title="Protect. Govern. Trust."
description={`In an era of increasing data breaches and strict regulations, robust Data Governance & Security are non-negotiable.

Our solutions help organizations establish data ownership, enforce compliance, and safeguard critical assets through policies, access controls, and audit trails.

We implement industry best practices in governance frameworks, data lineage, role-based access, and encryption—ensuring your data is accurate, secure, and trusted across its lifecycle.

With our expertise in regulatory alignment (GDPR, HIPAA, etc.), risk mitigation, and metadata management, we empower businesses to make confident, compliant, and secure data decisions.`}
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

export default DataGovernanceSecurity
