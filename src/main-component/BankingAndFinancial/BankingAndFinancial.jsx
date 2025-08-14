import React from "react";
import MasterIndustryTemplate from "../../components/templates/MasterIndustryTemplate";
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
    <MasterIndustryTemplate
      // Hero Section
      heroTitle="Banking & Financial Services"
      heroSubtitle="Build. Evaluate. Generate."
      heroDescription="Empowering financial institutions with secure, compliant, and innovative technology solutions. Transform banking operations with AI-powered fraud detection, digital payment systems, and regulatory compliance solutions."
      heroButtonText="TALK TO OUR EXPERTS"
      heroButtonLink="/contact"
      heroBackgroundImage="/Banking-and-Finance-new.png"
      heroFeatures={[
        "Core Banking Modernization",
        "Digital Wallet & UPI Integration",
        "AI-Powered Fraud Detection",
        "RegTech & Compliance"
      ]}

      // Problem/Solution Section (Industry Challenges)
      showProblemSolution={true}
      problemSolutionTitle="Banking & Financial Services Industry Challenges & Solutions"
      problemSolutionSubtitle="We understand the unique challenges facing financial institutions and provide innovative solutions"
      problems={[
        {
          title: "Legacy System Modernization",
          description: "Outdated core banking systems that lack scalability, security, and modern digital capabilities."
        },
        {
          title: "Regulatory Compliance Burden",
          description: "Complex regulatory requirements including RBI, PCI-DSS, GDPR, and other compliance standards."
        },
        {
          title: "Cybersecurity Threats",
          description: "Sophisticated cyber threats targeting financial data and transaction systems."
        },
        {
          title: "Digital Payment Integration",
          description: "Complex integration requirements for UPI, digital wallets, and modern payment systems."
        },
        {
          title: "Fraud Detection & Prevention",
          description: "Traditional fraud detection methods are inefficient and often miss sophisticated fraudulent activities."
        },
        {
          title: "Customer Experience Modernization",
          description: "Outdated customer interfaces and limited self-service capabilities impact user experience."
        }
      ]}
      solutions={[
        {
          title: "Core Banking Modernization",
          description: "Modern, scalable core banking systems with cloud-native architecture and microservices."
        },
        {
          title: "Automated Compliance Management",
          description: "AI-driven compliance monitoring and automated regulatory reporting for all standards."
        },
        {
          title: "Advanced Security Framework",
          description: "Multi-layered security with AI-powered threat detection, encryption, and real-time monitoring."
        },
        {
          title: "Digital Payment Platform",
          description: "Comprehensive digital payment solutions with UPI integration and modern payment APIs."
        },
        {
          title: "AI-Powered Fraud Detection",
          description: "Machine learning algorithms for real-time fraud detection and prevention."
        },
        {
          title: "Digital Customer Experience",
          description: "Modern, intuitive digital banking platforms with personalized customer experiences."
        }
      ]}

      // Service Offerings Section (Industry Solutions)
      showServiceOfferings={true}
      serviceOfferingsTitle="Banking & Financial Services Technology Solutions"
      serviceOfferingsSubtitle="Comprehensive digital solutions designed specifically for banking and financial industry challenges"
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

      // Benefits Section (Industry Process)
      showBenefits={true}
      benefitsTitle="Our Banking Development Approach"
      benefitsSubtitle="Proven methodology for delivering secure, compliant, and innovative banking solutions"
      benefits={[
        {
          title: "Security-First Development",
          description: "Security integrated into every development phase with comprehensive testing and compliance validation.",
          features: ["Security Architecture", "Penetration Testing", "Compliance Validation", "Security Audits"]
        },
        {
          title: "Regulatory Compliance Framework",
          description: "Development process designed around regulatory compliance with automated monitoring and reporting.",
          features: ["Regulatory Planning", "Compliance Monitoring", "Automated Reporting", "Audit Preparation"]
        },
        {
          title: "Agile Banking Development",
          description: "Iterative development approach with continuous integration and rapid deployment capabilities.",
          features: ["Agile Methodology", "Continuous Integration", "Rapid Deployment", "Quality Assurance"]
        }
      ]}

      // Stats Section (Industry Results)
      showStats={true}
      statsTitle="Banking Technology Results"
      statsSubtitle="Proven outcomes for financial institutions implementing our solutions"
      stats={[
        {
          metric: { value: "99.9%", label: "Uptime" },
          description: "High availability for critical banking systems"
        },
        {
          metric: { value: "100%", label: "Compliance" },
          description: "Full regulatory compliance with automated monitoring"
        },
        {
          metric: { value: "85%", label: "Fraud Detection" },
          description: "Improved fraud detection accuracy with AI"
        },
        {
          metric: { value: "60%", label: "Cost Reduction" },
          description: "Reduced operational costs with automation"
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Transform Banking Technology?"
      finalCtaSubtitle="Let's discuss how our banking expertise can help you modernize operations and enhance customer experience"
      finalCtaButtonText="Schedule Banking Consultation"
      finalCtaButtonLink="/contact"
    />
  );
};

export default BankingAndFinancial;
