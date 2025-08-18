import React from "react";
import IndustryTemplate from "../../components/templates/IndustryTemplate";
import { 
  AccountBalance, 
  Payment, 
  Security, 
  Analytics, 
  Speed, 
  TrendingUp, 
  AutoAwesome,
  Blockchain,
  MobileFriendly,
  Cloud,
  DataUsage,
  Assessment,
  Compliance,
  FraudDetection,
  CustomerExperience,
  DigitalTransformation,
  Automation,
  DataAnalytics,
  AI,
  MachineLearning,
  API
} from '@mui/icons-material';

const FinTech = () => {
  return (
    <IndustryTemplate
      // Hero Section
      heroTitle="FinTech Technology Solutions"
      heroSubtitle="Financial Innovation"
      heroDescription="Accelerate your FinTech innovation with cutting-edge AI, blockchain, and digital payment solutions. Build secure, scalable, and compliant financial applications that transform the industry."
      heroButtonText="Innovate FinTech"
      heroButtonLink="/contact"
      heroBackgroundImage="/FinTech.webp"
      heroFeatures={[
        "AI-Powered Financial Analytics",
        "Blockchain & Digital Payments",
        "Regulatory Compliance Solutions",
        "Secure Financial Applications"
      ]}

      // Services Component Props - Industry Solutions
      showServicesComponent={true}
      services={[
        {
          title: "Digital Payment Solutions",
          description: "Secure, scalable payment processing systems with support for multiple payment methods and real-time transactions.",
          image: "/images/digital-payments.webp",
          features: ["Payment Processing", "Multi-Currency Support", "Real-time Transactions", "Security Compliance"],
          link: "/services/digital-payments",
          badge: "Payments"
        },
        {
          title: "Blockchain & Cryptocurrency",
          description: "Blockchain development and cryptocurrency solutions for secure, transparent financial transactions.",
          image: "/images/blockchain-crypto.webp",
          features: ["Smart Contracts", "Cryptocurrency Wallets", "DeFi Platforms", "Token Development"],
          link: "/services/blockchain-crypto",
          badge: "Blockchain"
        },
        {
          title: "AI-Powered Financial Analytics",
          description: "Advanced analytics and machine learning for risk assessment, fraud detection, and financial insights.",
          image: "/images/financial-analytics.webp",
          features: ["Risk Assessment", "Fraud Detection", "Predictive Analytics", "Portfolio Management"],
          link: "/services/financial-analytics",
          badge: "AI"
        },
        {
          title: "Regulatory Compliance Platform",
          description: "Automated compliance monitoring and regulatory reporting systems for financial institutions.",
          image: "/images/compliance-platform.webp",
          features: ["Regulatory Monitoring", "Automated Reporting", "Audit Trails", "Policy Management"],
          link: "/services/compliance-platform",
          badge: "Compliance"
        },
        {
          title: "Mobile Banking Applications",
          description: "Secure, user-friendly mobile banking applications with advanced features and biometric authentication.",
          image: "/images/mobile-banking.webp",
          features: ["Biometric Authentication", "Real-time Banking", "Investment Tools", "Security Features"],
          link: "/services/mobile-banking",
          badge: "Mobile"
        },
        {
          title: "API & Integration Services",
          description: "Robust API development and integration services for seamless connectivity with financial systems.",
          image: "/images/api-integration.webp",
          features: ["API Development", "System Integration", "Third-party Connectors", "Data Synchronization"],
          link: "/services/api-integration",
          badge: "API"
        }
      ]}
      servicesLimit={6}
      servicesShowButton={true}
      servicesButtonText="Schedule a Strategy Call"
      servicesButtonLink="/contact"
    />
  );
};

export default FinTech;
