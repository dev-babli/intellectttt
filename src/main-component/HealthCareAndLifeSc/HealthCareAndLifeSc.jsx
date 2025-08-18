import React from "react";
import IndustryTemplate from "../../components/templates/IndustryTemplate";
import { 
  MedicalServices, 
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

const HealthCareAndLifeSc = () => {
  return (
    <IndustryTemplate
      // Hero Section
      heroTitle="Healthcare & Life Sciences"
      heroSubtitle="Secure IT Solutions"
      heroDescription="Transform healthcare with digital solutions and AI-powered diagnostics."
      heroButtonText="TALK TO OUR EXPERTS"
      heroButtonLink="/contact"
      heroBackgroundImage="/Healthcare-and-Life-sciences.webp"
      heroFeatures={[
        "Digital Health Platforms",
        "AI-Powered Diagnostics",
        "Regulatory Compliance",
        "Patient Data Security"
      ]}

      // Services Component Props - Industry Solutions
      showServicesComponent={true}
      services={[
        {
          title: "Digital Health Platforms",
          description: "Comprehensive digital health platforms with patient portals, telemedicine, and care management systems.",
          image: "/images/digital-health.webp",
          features: ["Patient Portals", "Telemedicine", "Care Management", "Mobile Health"],
          link: "/services/digital-health",
          badge: "Digital"
        },
        {
          title: "AI-Powered Diagnostics",
          description: "Advanced AI solutions for medical imaging, diagnostics, and clinical decision support systems.",
          image: "/images/ai-diagnostics.webp",
          features: ["Medical Imaging AI", "Diagnostic Algorithms", "Clinical Decision Support", "Predictive Analytics"],
          link: "/services/ai-diagnostics",
          badge: "AI"
        },
        {
          title: "EHR Integration & Interoperability",
          description: "Seamless integration with EHR systems, PACS, and healthcare infrastructure using HL7 FHIR standards.",
          image: "/images/ehr-integration.webp",
          features: ["HL7 FHIR", "EHR Integration", "PACS Integration", "Data Interoperability"],
          link: "/services/ehr-integration",
          badge: "Integration"
        },
        {
          title: "Clinical Data Analytics",
          description: "Advanced analytics and reporting systems for clinical research, patient monitoring, and healthcare insights.",
          image: "/images/clinical-analytics.webp",
          features: ["Clinical Analytics", "Patient Monitoring", "Research Analytics", "Quality Metrics"],
          link: "/services/clinical-analytics",
          badge: "Analytics"
        },
        {
          title: "Healthcare Security & Compliance",
          description: "Comprehensive security and compliance solutions for healthcare data protection and regulatory adherence.",
          image: "/images/healthcare-security.webp",
          features: ["HIPAA Compliance", "Data Encryption", "Access Controls", "Audit Trails"],
          link: "/services/healthcare-security",
          badge: "Security"
        },
        {
          title: "Medical Device Integration",
          description: "IoT and connected medical device solutions with real-time monitoring and data collection.",
          image: "/images/medical-devices.webp",
          features: ["Device Connectivity", "Real-time Monitoring", "Data Collection", "Remote Management"],
          link: "/services/medical-devices",
          badge: "IoT"
        }
      ]}
      servicesLimit={6}
      servicesShowButton={true}
      servicesButtonText="Schedule a Strategy Call"
      servicesButtonLink="/contact"
    />
  );
};

export default HealthCareAndLifeSc;
