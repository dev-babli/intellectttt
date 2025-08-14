import React from "react";
import MasterIndustryTemplate from "../../components/templates/MasterIndustryTemplate";
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
    <MasterIndustryTemplate
      // Hero Section
      heroTitle="Insurance Technology Solutions"
      heroSubtitle="Digital Transformation for Insurance"
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

      // Problem/Solution Section (Industry Challenges)
      showProblemSolution={true}
      problemSolutionTitle="Insurance Industry Challenges & Solutions"
      problemSolutionSubtitle="We understand the unique challenges facing insurance companies and provide innovative solutions"
      problems={[
        {
          title: "Manual Claims Processing",
          description: "Time-consuming manual claims processing leads to delays, errors, and increased operational costs."
        },
        {
          title: "Fraud Detection Complexity",
          description: "Traditional fraud detection methods are inefficient and often miss sophisticated fraudulent activities."
        },
        {
          title: "Customer Experience Gaps",
          description: "Outdated systems create poor customer experiences with long wait times and limited self-service options."
        },
        {
          title: "Regulatory Compliance Burden",
          description: "Complex regulatory requirements require constant monitoring and updates to ensure compliance."
        },
        {
          title: "Risk Assessment Limitations",
          description: "Traditional risk assessment models lack the sophistication needed for accurate pricing and underwriting."
        },
        {
          title: "Data Silos & Integration Issues",
          description: "Fragmented data systems prevent comprehensive insights and hinder decision-making processes."
        }
      ]}
      solutions={[
        {
          title: "AI-Powered Claims Automation",
          description: "Intelligent automation streamlines claims processing, reducing time-to-resolution and improving accuracy."
        },
        {
          title: "Advanced Fraud Detection",
          description: "Machine learning algorithms detect fraudulent patterns in real-time, protecting against financial losses."
        },
        {
          title: "Digital Customer Experience",
          description: "Modern digital platforms provide seamless self-service options and personalized customer interactions."
        },
        {
          title: "Automated Compliance Monitoring",
          description: "AI-driven compliance systems ensure regulatory adherence and reduce compliance-related risks."
        },
        {
          title: "Predictive Risk Analytics",
          description: "Advanced analytics provide accurate risk assessment for better pricing and underwriting decisions."
        },
        {
          title: "Unified Data Platform",
          description: "Integrated data solutions provide comprehensive insights and enable data-driven decision making."
        }
      ]}

      // Service Offerings Section (Industry Solutions)
      showServiceOfferings={true}
      serviceOfferingsTitle="Insurance Technology Solutions"
      serviceOfferingsSubtitle="Comprehensive digital solutions designed specifically for insurance industry challenges"
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

      // Benefits Section (Industry Process)
      showBenefits={true}
      benefitsTitle="Our Insurance Technology Approach"
      benefitsSubtitle="Proven methodology for delivering digital transformation in the insurance sector"
      benefits={[
        {
          title: "Digital Transformation Strategy",
          description: "Comprehensive assessment and roadmap for modernizing insurance operations with digital technologies.",
          features: ["Current State Analysis", "Technology Roadmap", "Change Management", "Implementation Plan"]
        },
        {
          title: "AI & Machine Learning Integration",
          description: "Seamless integration of AI and ML technologies to automate processes and improve decision-making.",
          features: ["Model Development", "System Integration", "Training & Support", "Continuous Improvement"]
        },
        {
          title: "Cloud & Security Implementation",
          description: "Secure cloud infrastructure with robust security measures to protect sensitive insurance data.",
          features: ["Cloud Migration", "Security Architecture", "Compliance Framework", "Disaster Recovery"]
        }
      ]}

      // Stats Section (Industry Results)
      showStats={true}
      statsTitle="Insurance Technology Results"
      statsSubtitle="Proven outcomes for insurance companies implementing our solutions"
      stats={[
        {
          metric: { value: "60%", label: "Faster Claims Processing" },
          description: "Reduced claims processing time with AI automation"
        },
        {
          metric: { value: "40%", label: "Cost Reduction" },
          description: "Lower operational costs through process automation"
        },
        {
          metric: { value: "85%", label: "Fraud Detection Rate" },
          description: "Improved fraud detection accuracy with ML algorithms"
        },
        {
          metric: { value: "90%", label: "Customer Satisfaction" },
          description: "Enhanced customer experience with digital solutions"
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Transform Your Insurance Operations?"
      finalCtaSubtitle="Let's discuss how our technology solutions can help your insurance company thrive in the digital age"
      finalCtaButtonText="Schedule Insurance Consultation"
      finalCtaButtonLink="/contact"
    />
  );
};

export default Insurance;
