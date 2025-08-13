import React from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import IndustryTemplate from "../../components/templates/IndustryTemplate";
import { BankingServices } from "../../api/cardService";
import pImg1 from "../../images/shape/process-shape01.png";
import sIcon1 from "../../images/process/image01.png";
import sIcon2 from "../../images/process/image02.png";
import sIcon3 from "../../images/process/image03.png";
import sIcon4 from "../../images/process/image04.png";
import sIcon5 from "../../images/process/image05.png";

const BankingAndFinancial = () => {
  // Scroll to top when component mounts
  useScrollToTop();

  const processList = [
    {
      id: "01",
      title: "Discovery & Regulatory Alignment",
      subTitle:
        "We begin with deep discovery of your digital infrastructure, risk posture, and regulatory landscape (e.g., RBI, PCI-DSS, GDPR).",
      icon: sIcon1,
    },
    {
      id: "02",
      title: "Solution Architecture & Data Strategy",
      subTitle:
        "We define your data pipelines, system architecture, API ecosystem, and compliance mechanisms tailored to your banking needs.",
      icon: sIcon2,
    },
    {
      id: "03",
      title: "Secure Platform Development",
      subTitle:
        "From core banking to neo-banking apps, we build secure, high-availability systems with encrypted transactions and audit trails.",
      icon: sIcon3,
    },
    {
      id: "04",
      title: "Testing, Compliance & Risk Mitigation",
      subTitle:
        "We conduct penetration testing, KYC/AML compliance checks, and automated risk analysis with secure sandbox environments.",
      icon: sIcon4,
    },
    {
      id: "05",
      title: "Deployment, Monitoring & Regulatory Reporting",
      subTitle:
        "We deploy with full rollback plans, provide real-time monitoring, and automate reporting for audits and regulators.",
      icon: sIcon5,
    },
  ];

  const shapeImages = [pImg1, pImg1]; // Using same image twice as in original

  return (
    <IndustryTemplate
      // Hero Section Props
      heroTitle="Banking & Financial Services"
      heroSubtitle="Build. Evaluate. Generate."
      heroDescription="Empowering financial institutions with secure, compliant, and innovative technology solutions."
      heroButtonText="TALK TO OUR EXPERTS"
      heroButtonLink="/contact"
      heroBackgroundImage="/Banking-and-Finance.webp"
      heroFeatures={[
        "Core Banking Modernization",
        "Digital Wallet & UPI Integration",
        "AI-Powered Fraud Detection",
        "RegTech & Compliance"
      ]}
      
      // Work Process Props
      showWorkProcess={true}
      workProcessHeading="Securing Financial Innovation with Technology"
      workProcessDescription="Our proven 5-step process helps banks and fintechs deliver secure, compliant, and scalable digital financial experiences."
      workProcessButtonText="Connect with Fintech Experts"
      workProcessButtonLink="/contact"
      workProcessList={processList}
      workProcessShapeImages={shapeImages}
      
      // Services Component Props
      showServicesComponent={true}
      services={BankingServices}
      servicesLimit={6}
      servicesShowButton={true}
      servicesButtonText="Schedule a Strategy Call"
      servicesButtonLink="/contact"
      servicesSectionStyle={{ backgroundColor: "#f8f9fa" }}
      
      // CTA Section Props
      showCtaSection={true}
      ctaTitle="Transform Your Financial Operations"
      ctaDescription="Let's discuss how our industry expertise can drive your digital transformation"
      ctaButtonText="Get Industry Insights"
      ctaButtonLink="/contact"
      
      // Alliances Section Props
      showAlliancesSection={true}
      
      // Blog & Case Study Props
      blogTitle="Industry Insights & Updates"
      blogSubtitle="Stay informed with our latest industry-specific insights, trends, and thought leadership content"
      caseStudyTitle="Industry Success Stories"
      caseStudySubtitle="Discover how we've helped businesses in your industry achieve their digital transformation goals"
    />
  );
};

export default BankingAndFinancial;
