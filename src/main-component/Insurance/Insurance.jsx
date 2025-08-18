import React from "react";
import IndustryTemplate from "../../components/templates/IndustryTemplate";
import { 
  Security, 
  Analytics, 
  Cloud, 
  Speed, 
  TrendingUp, 
  AutoAwesome,
  Shield,
  Assessment,
  Policy,
  Claims,
  RiskManagement,
  Compliance,
  FraudDetection,
  CustomerExperience,
  DigitalTransformation,
  Automation,
  DataAnalytics,
  Blockchain,
  AI,
  MachineLearning
} from '@mui/icons-material';

const Insurance = () => {
  return (
    <IndustryTemplate
      // Hero Section
      heroTitle="Insurance Technology Solutions"
      heroSubtitle="Digital Insurance"
      heroDescription="Transform your insurance operations with AI-powered solutions, automated claims processing, and intelligent risk assessment. Drive efficiency, reduce costs, and enhance customer experience."
      heroButtonText="Transform Insurance"
      heroButtonLink="/contact"
      heroBackgroundImage="/Insurance.webp"
      heroFeatures={[
        "AI-Powered Claims Processing",
        "Risk Assessment & Analytics",
        "Customer Experience Optimization",
        "Compliance & Regulatory Solutions"
      ]}

      // Services Component Props - Industry Solutions
      showServicesComponent={true}
      services={[
        {
          title: "Claims Processing Automation",
          description: "AI-powered claims processing with intelligent document analysis, fraud detection, and automated decision-making.",
          image: "/images/claims-automation.webp",
          features: ["Document Processing", "Fraud Detection", "Automated Decisions", "Real-time Analytics"],
          link: "/services/claims-automation",
          badge: "AI-Powered"
        },
        {
          title: "Risk Assessment & Analytics",
          description: "Advanced analytics and machine learning for accurate risk assessment, pricing optimization, and underwriting decisions.",
          image: "/images/risk-analytics.webp",
          features: ["Predictive Modeling", "Risk Scoring", "Pricing Optimization", "Portfolio Analysis"],
          link: "/services/risk-analytics",
          badge: "Analytics"
        },
        {
          title: "Customer Experience Platform",
          description: "Digital customer experience solutions with self-service portals, mobile apps, and personalized interactions.",
          image: "/images/customer-experience.webp",
          features: ["Self-Service Portal", "Mobile Apps", "Personalization", "Omnichannel Support"],
          link: "/services/customer-experience",
          badge: "Digital"
        },
        {
          title: "Compliance & Regulatory Solutions",
          description: "Automated compliance monitoring and regulatory reporting systems to ensure adherence to industry standards.",
          image: "/images/compliance-solutions.webp",
          features: ["Regulatory Monitoring", "Automated Reporting", "Audit Trails", "Policy Management"],
          link: "/services/compliance-solutions",
          badge: "Compliance"
        },
        {
          title: "Fraud Detection & Prevention",
          description: "Advanced fraud detection systems using AI and machine learning to identify and prevent fraudulent activities.",
          image: "/images/fraud-detection.webp",
          features: ["Real-time Detection", "Pattern Recognition", "Risk Scoring", "Alert Management"],
          link: "/services/fraud-detection",
          badge: "Security"
        },
        {
          title: "Data Integration & Analytics",
          description: "Unified data platform with advanced analytics for comprehensive insights and data-driven decision making.",
          image: "/images/data-analytics.webp",
          features: ["Data Integration", "Business Intelligence", "Predictive Analytics", "Reporting"],
          link: "/services/data-analytics",
          badge: "Data"
        }
      ]}
      servicesLimit={6}
      servicesShowButton={true}
      servicesButtonText="Schedule a Strategy Call"
      servicesButtonLink="/contact"
    />
  );
};

export default Insurance;
