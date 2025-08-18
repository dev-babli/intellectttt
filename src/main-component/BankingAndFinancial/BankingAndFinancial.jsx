import React from "react";
import IndustryTemplate from "../../components/templates/IndustryTemplate";
import { 
  AccountBalance, 
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
  Payment,
  Blockchain,
  DataUsage
} from '@mui/icons-material';

const BankingAndFinancial = () => {
  return (
    <IndustryTemplate
      // Hero Section
      heroTitle="Banking & Financial Services"
      heroSubtitle="Build. Evaluate."
      heroDescription="Empower financial institutions with secure and innovative technology solutions."
      heroButtonText="TALK TO OUR EXPERTS"
      heroButtonLink="/contact"
      heroBackgroundImage="/Banking-and-Finance-new.png"
      heroFeatures={[
        "Core Banking Modernization",
        "Digital Wallet & UPI Integration",
        "AI-Powered Fraud Detection",
        "RegTech & Compliance"
      ]}

      // Services Component Props - Industry Solutions
      showServicesComponent={true}
      services={[
        {
          title: "Core Banking Modernization",
          description: "Modern core banking systems with cloud-native architecture, microservices, and real-time processing.",
          image: "/images/core-banking.webp",
          features: ["Cloud-Native Architecture", "Microservices", "Real-time Processing", "Scalability"],
          link: "/services/core-banking",
          badge: "Core Banking"
        },
        {
          title: "Digital Payment Solutions",
          description: "Comprehensive digital payment platforms with UPI integration, digital wallets, and payment APIs.",
          image: "/images/digital-payments.webp",
          features: ["UPI Integration", "Digital Wallets", "Payment APIs", "Multi-channel Support"],
          link: "/services/digital-payments",
          badge: "Payments"
        },
        {
          title: "AI-Powered Fraud Detection",
          description: "Advanced fraud detection systems using machine learning and real-time analytics.",
          image: "/images/fraud-detection.webp",
          features: ["Machine Learning", "Real-time Detection", "Pattern Recognition", "Risk Scoring"],
          link: "/services/fraud-detection",
          badge: "AI"
        },
        {
          title: "Regulatory Compliance Platform",
          description: "Automated compliance monitoring and regulatory reporting for RBI, PCI-DSS, and GDPR.",
          image: "/images/compliance-platform.webp",
          features: ["Regulatory Monitoring", "Automated Reporting", "Audit Trails", "Compliance Dashboards"],
          link: "/services/compliance-platform",
          badge: "Compliance"
        },
        {
          title: "Digital Banking Platform",
          description: "Modern digital banking applications with mobile-first design and personalized experiences.",
          image: "/images/digital-banking.webp",
          features: ["Mobile Banking", "Personalization", "Self-service", "Omnichannel"],
          link: "/services/digital-banking",
          badge: "Digital"
        },
        {
          title: "Financial Analytics & BI",
          description: "Advanced analytics and business intelligence for financial insights and decision-making.",
          image: "/images/financial-analytics.webp",
          features: ["Financial Analytics", "Business Intelligence", "Risk Analytics", "Performance Metrics"],
          link: "/services/financial-analytics",
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

export default BankingAndFinancial;
