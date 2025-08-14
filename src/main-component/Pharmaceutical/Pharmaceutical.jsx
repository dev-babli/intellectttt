import React from "react";
import MasterIndustryTemplate from "../../components/templates/MasterIndustryTemplate";
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
    <MasterIndustryTemplate
      // Hero Section
      heroTitle="Pharmaceutical Technology Solutions"
      heroSubtitle="Digital Innovation in Pharma"
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

      // Problem/Solution Section (Industry Challenges)
      showProblemSolution={true}
      problemSolutionTitle="Pharmaceutical Industry Challenges & Solutions"
      problemSolutionSubtitle="We understand the unique challenges facing pharmaceutical companies and provide innovative solutions"
      problems={[
        {
          title: "Drug Discovery Complexity",
          description: "Traditional drug discovery processes are time-consuming, expensive, and have high failure rates."
        },
        {
          title: "Clinical Trial Management",
          description: "Complex clinical trial processes with multiple stakeholders, data collection, and regulatory requirements."
        },
        {
          title: "Regulatory Compliance Burden",
          description: "Stringent FDA, EMA, and other regulatory requirements create significant compliance challenges."
        },
        {
          title: "Supply Chain Complexity",
          description: "Global supply chains with multiple stakeholders, temperature control, and traceability requirements."
        },
        {
          title: "Data Management & Analytics",
          description: "Massive amounts of clinical and research data requiring sophisticated analysis and insights."
        },
        {
          title: "Patient Safety & Pharmacovigilance",
          description: "Continuous monitoring of drug safety and adverse events across global markets."
        }
      ]}
      solutions={[
        {
          title: "AI-Powered Drug Discovery",
          description: "Machine learning algorithms accelerate drug discovery by predicting molecular interactions and optimizing compounds."
        },
        {
          title: "Digital Clinical Trial Platform",
          description: "Comprehensive clinical trial management with real-time data collection, monitoring, and analytics."
        },
        {
          title: "Automated Compliance Management",
          description: "AI-driven compliance monitoring and automated regulatory reporting for global markets."
        },
        {
          title: "Supply Chain Optimization",
          description: "Intelligent supply chain management with real-time tracking, temperature monitoring, and predictive analytics."
        },
        {
          title: "Advanced Data Analytics",
          description: "Comprehensive data analytics platform for clinical research, market analysis, and business intelligence."
        },
        {
          title: "Pharmacovigilance Systems",
          description: "Automated pharmacovigilance systems for real-time safety monitoring and adverse event reporting."
        }
      ]}

      // Service Offerings Section (Industry Solutions)
      showServiceOfferings={true}
      serviceOfferingsTitle="Pharmaceutical Technology Solutions"
      serviceOfferingsSubtitle="Comprehensive digital solutions designed specifically for pharmaceutical industry challenges"
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

      // Benefits Section (Industry Process)
      showBenefits={true}
      benefitsTitle="Our Pharmaceutical Development Approach"
      benefitsSubtitle="Proven methodology for delivering innovative pharmaceutical technology solutions"
      benefits={[
        {
          title: "AI-First Drug Development",
          description: "AI-powered approach to drug discovery and development with machine learning and predictive analytics.",
          features: ["Machine Learning Models", "Predictive Analytics", "Molecular Modeling", "Target Identification"]
        },
        {
          title: "Regulatory-Compliant Development",
          description: "Development process designed around regulatory compliance with documentation and validation at every stage.",
          features: ["Regulatory Planning", "Documentation Management", "Validation Testing", "Compliance Audits"]
        },
        {
          title: "Data-Driven Decision Making",
          description: "Comprehensive data analytics and business intelligence for informed decision-making across all operations.",
          features: ["Data Integration", "Advanced Analytics", "Business Intelligence", "Predictive Modeling"]
        }
      ]}

      // Stats Section (Industry Results)
      showStats={true}
      statsTitle="Pharmaceutical Technology Results"
      statsSubtitle="Proven outcomes for pharmaceutical companies implementing our solutions"
      stats={[
        {
          metric: { value: "50%", label: "Faster Drug Discovery" },
          description: "Accelerated drug discovery with AI algorithms"
        },
        {
          metric: { value: "30%", label: "Cost Reduction" },
          description: "Reduced clinical trial costs with digital solutions"
        },
        {
          metric: { value: "100%", label: "Regulatory Compliance" },
          description: "Full compliance with global regulatory requirements"
        },
        {
          metric: { value: "90%", label: "Data Accuracy" },
          description: "Improved data accuracy with automated systems"
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Transform Pharmaceutical Technology?"
      finalCtaSubtitle="Let's discuss how our pharmaceutical expertise can help you accelerate drug development and improve patient outcomes"
      finalCtaButtonText="Schedule Pharmaceutical Consultation"
      finalCtaButtonLink="/contact"
    />
  );
};

export default Pharmaceutical;
