import React from "react";
import IndustryTemplate from "../../components/templates/IndustryTemplate";
import { 
  Science, 
  Security, 
  Analytics, 
  Speed, 
  TrendingUp, 
  AutoAwesome,
  Shield,
  Assessment,
  Policy,
  Compliance,
  DataAnalytics,
  AI,
  MachineLearning,
  Cloud,
  MobileFriendly,
  API,
  IntegrationInstructions,
  Quality,
  Safety,
  Innovation,
  Research,
  Laboratory
} from '@mui/icons-material';

const Pharmaceutical = () => {
  return (
    <IndustryTemplate
      // Hero Section
      heroTitle="Pharmaceutical Technology Solutions"
      heroSubtitle="Digital Pharma"
      heroDescription="Transform pharmaceutical operations with AI-powered drug discovery, clinical trial management, and regulatory compliance solutions. Accelerate drug development and improve patient outcomes with cutting-edge technology."
      heroButtonText="Transform Pharma"
      heroButtonLink="/contact"
      heroBackgroundImage="/herosectionimages/9.webp"
      heroFeatures={[
        "AI-Powered Drug Discovery",
        "Clinical Trial Management",
        "Regulatory Compliance",
        "Supply Chain Optimization"
      ]}

      // Services Component Props - Industry Solutions
      showServicesComponent={true}
      services={[
        {
          title: "AI Drug Discovery Platform",
          description: "Machine learning-powered drug discovery platform for molecular modeling, target identification, and compound optimization.",
          image: "/images/ai-drug-discovery.webp",
          features: ["Molecular Modeling", "Target Identification", "Compound Optimization", "Predictive Analytics"],
          link: "/services/ai-drug-discovery",
          badge: "AI"
        },
        {
          title: "Clinical Trial Management System",
          description: "Comprehensive clinical trial management with patient recruitment, data collection, and real-time monitoring.",
          image: "/images/clinical-trials.webp",
          features: ["Patient Recruitment", "Data Collection", "Real-time Monitoring", "Regulatory Compliance"],
          link: "/services/clinical-trials",
          badge: "Clinical"
        },
        {
          title: "Regulatory Compliance Platform",
          description: "Automated regulatory compliance monitoring and reporting for FDA, EMA, and global markets.",
          image: "/images/pharma-compliance.webp",
          features: ["Regulatory Monitoring", "Automated Reporting", "Document Management", "Audit Trails"],
          link: "/services/pharma-compliance",
          badge: "Compliance"
        },
        {
          title: "Supply Chain Management",
          description: "Intelligent supply chain management with real-time tracking, temperature monitoring, and predictive analytics.",
          image: "/images/pharma-supply-chain.webp",
          features: ["Real-time Tracking", "Temperature Monitoring", "Predictive Analytics", "Quality Control"],
          link: "/services/pharma-supply-chain",
          badge: "Supply Chain"
        },
        {
          title: "Pharmacovigilance System",
          description: "Automated pharmacovigilance systems for real-time safety monitoring and adverse event reporting.",
          image: "/images/pharmacovigilance.webp",
          features: ["Safety Monitoring", "Adverse Event Reporting", "Risk Assessment", "Global Compliance"],
          link: "/services/pharmacovigilance",
          badge: "Safety"
        },
        {
          title: "Pharmaceutical Analytics",
          description: "Advanced analytics and business intelligence for clinical research, market analysis, and operational insights.",
          image: "/images/pharma-analytics.webp",
          features: ["Clinical Analytics", "Market Analysis", "Operational Insights", "Predictive Modeling"],
          link: "/services/pharma-analytics",
          badge: "Analytics"
        }
      ]}
      servicesLimit={6}
      servicesShowButton={true}
      servicesButtonText="Schedule a Strategy Call"
      servicesButtonLink="/contact"
    />
  );
};

export default Pharmaceutical;

