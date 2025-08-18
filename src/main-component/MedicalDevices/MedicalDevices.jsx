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
  IoT,
  Sensors,
  Cloud,
  MobileFriendly,
  API,
  IntegrationInstructions,
  Quality,
  Safety,
  Innovation
} from '@mui/icons-material';

const MedicalDevices = () => {
  return (
    <IndustryTemplate
      // Hero Section
      heroTitle="Medical Device Technology Solutions"
      heroSubtitle="Medical Technology"
      heroDescription="Transform medical device development with cutting-edge software solutions, IoT integration, and AI-powered diagnostics. Build secure, compliant, and innovative medical technologies that improve patient care."
      heroButtonText="Innovate Medical Devices"
      heroButtonLink="/contact"
      heroBackgroundImage="/herosectionimages/8.webp"
      heroFeatures={[
        "Medical Device Software",
        "IoT & Connected Devices",
        "AI-Powered Diagnostics",
        "Regulatory Compliance"
      ]}

      // Services Component Props - Industry Solutions
      showServicesComponent={true}
      services={[
        {
          title: "Medical Device Software Development",
          description: "Safety-critical software development for medical devices with comprehensive testing and validation.",
          image: "/images/medical-software.webp",
          features: ["Safety-Critical Development", "Comprehensive Testing", "Regulatory Compliance", "Quality Assurance"],
          link: "/services/medical-software",
          badge: "Medical"
        },
        {
          title: "IoT & Connected Medical Devices",
          description: "Connected medical device solutions with real-time monitoring, data collection, and remote management.",
          image: "/images/connected-devices.webp",
          features: ["Real-time Monitoring", "Data Collection", "Remote Management", "Device Connectivity"],
          link: "/services/connected-devices",
          badge: "IoT"
        },
        {
          title: "AI-Powered Medical Diagnostics",
          description: "Artificial intelligence solutions for medical imaging, diagnostics, and clinical decision support.",
          image: "/images/ai-diagnostics.webp",
          features: ["Medical Imaging AI", "Diagnostic Algorithms", "Clinical Decision Support", "Predictive Analytics"],
          link: "/services/ai-diagnostics",
          badge: "AI"
        },
        {
          title: "Healthcare System Integration",
          description: "Seamless integration with EHR systems, PACS, and healthcare infrastructure using standard protocols.",
          image: "/images/healthcare-integration.webp",
          features: ["EHR Integration", "HL7 FHIR", "DICOM Support", "Interoperability"],
          link: "/services/healthcare-integration",
          badge: "Integration"
        },
        {
          title: "Medical Data Analytics",
          description: "Advanced analytics and reporting systems for medical data analysis and clinical insights.",
          image: "/images/medical-analytics.webp",
          features: ["Clinical Analytics", "Patient Monitoring", "Trend Analysis", "Reporting"],
          link: "/services/medical-analytics",
          badge: "Analytics"
        },
        {
          title: "Medical Device Cybersecurity",
          description: "Comprehensive cybersecurity solutions to protect medical devices and patient data from threats.",
          image: "/images/medical-security.webp",
          features: ["Threat Detection", "Encryption", "Access Controls", "Security Audits"],
          link: "/services/medical-security",
          badge: "Security"
        }
      ]}
      servicesLimit={6}
      servicesShowButton={true}
      servicesButtonText="Schedule a Strategy Call"
      servicesButtonLink="/contact"
    />
  );
};

export default MedicalDevices;

