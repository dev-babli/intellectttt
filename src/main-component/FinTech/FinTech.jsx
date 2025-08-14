import React from "react";
import MasterIndustryTemplate from "../../components/templates/MasterIndustryTemplate";
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
    <MasterIndustryTemplate
      // Hero Section
      heroTitle="FinTech Technology Solutions"
      heroSubtitle="Innovation in Financial Technology"
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

      // Problem/Solution Section (Industry Challenges)
      showProblemSolution={true}
      problemSolutionTitle="FinTech Industry Challenges & Solutions"
      problemSolutionSubtitle="We understand the unique challenges facing FinTech companies and provide innovative solutions"
      problems={[
        {
          title: "Regulatory Compliance Complexity",
          description: "Complex and evolving regulatory requirements create significant compliance burdens for FinTech companies."
        },
        {
          title: "Security & Fraud Prevention",
          description: "Financial applications face sophisticated cyber threats and fraud attempts requiring advanced security measures."
        },
        {
          title: "Scalability & Performance",
          description: "Financial systems must handle high transaction volumes with real-time processing and 99.9% uptime."
        },
        {
          title: "Customer Trust & Experience",
          description: "Building trust while providing seamless, intuitive user experiences is critical for FinTech success."
        },
        {
          title: "Data Integration & Analytics",
          description: "Fragmented data sources and legacy systems hinder comprehensive financial insights and decision-making."
        },
        {
          title: "Technology Infrastructure",
          description: "Outdated infrastructure limits innovation and prevents rapid deployment of new financial products."
        }
      ]}
      solutions={[
        {
          title: "Compliance Automation Platform",
          description: "AI-driven compliance monitoring and automated regulatory reporting to ensure adherence to financial regulations."
        },
        {
          title: "Advanced Security Framework",
          description: "Multi-layered security with AI-powered fraud detection, encryption, and real-time threat monitoring."
        },
        {
          title: "Scalable Cloud Architecture",
          description: "Cloud-native architecture designed for high performance, scalability, and reliability in financial applications."
        },
        {
          title: "Digital Experience Platform",
          description: "Modern, intuitive user interfaces with personalized experiences that build trust and engagement."
        },
        {
          title: "Unified Data Analytics",
          description: "Integrated data platform with real-time analytics for comprehensive financial insights and decision-making."
        },
        {
          title: "Modern Technology Stack",
          description: "Cutting-edge technology infrastructure enabling rapid innovation and deployment of financial products."
        }
      ]}

      // Service Offerings Section (Industry Solutions)
      showServiceOfferings={true}
      serviceOfferingsTitle="FinTech Technology Solutions"
      serviceOfferingsSubtitle="Comprehensive digital solutions designed specifically for FinTech industry challenges"
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

      // Benefits Section (Industry Process)
      showBenefits={true}
      benefitsTitle="Our FinTech Development Approach"
      benefitsSubtitle="Proven methodology for delivering innovative financial technology solutions"
      benefits={[
        {
          title: "Agile Development Methodology",
          description: "Rapid development cycles with continuous integration and deployment for fast-to-market FinTech solutions.",
          features: ["Sprint Planning", "Continuous Integration", "Automated Testing", "Rapid Deployment"]
        },
        {
          title: "Security-First Development",
          description: "Security integrated into every development phase with comprehensive testing and compliance validation.",
          features: ["Security Architecture", "Penetration Testing", "Compliance Validation", "Security Audits"]
        },
        {
          title: "Cloud-Native Architecture",
          description: "Scalable, resilient cloud infrastructure designed for high-performance financial applications.",
          features: ["Microservices Architecture", "Auto-scaling", "Load Balancing", "Disaster Recovery"]
        }
      ]}

      // Stats Section (Industry Results)
      showStats={true}
      statsTitle="FinTech Technology Results"
      statsSubtitle="Proven outcomes for FinTech companies implementing our solutions"
      stats={[
        {
          metric: { value: "99.9%", label: "Uptime" },
          description: "High availability for critical financial applications"
        },
        {
          metric: { value: "50%", label: "Faster Development" },
          description: "Reduced time-to-market with agile development"
        },
        {
          metric: { value: "100%", label: "Compliance" },
          description: "Full regulatory compliance with automated monitoring"
        },
        {
          metric: { value: "10M+", label: "Transactions/Day" },
          description: "Scalable architecture handling high transaction volumes"
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Transform Financial Technology?"
      finalCtaSubtitle="Let's discuss how our technology solutions can help your FinTech company innovate and grow"
      finalCtaButtonText="Schedule FinTech Consultation"
      finalCtaButtonLink="/contact"
    />
  );
};

export default FinTech;
