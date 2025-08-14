import React from "react";
import MasterIndustryTemplate from "../../components/templates/MasterIndustryTemplate";
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
    <MasterIndustryTemplate
      // Hero Section
      heroTitle="Medical Device Technology Solutions"
      heroSubtitle="Innovation in Medical Technology"
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

      // Problem/Solution Section (Industry Challenges)
      showProblemSolution={true}
      problemSolutionTitle="Medical Device Industry Challenges & Solutions"
      problemSolutionSubtitle="We understand the unique challenges facing medical device companies and provide innovative solutions"
      problems={[
        {
          title: "Regulatory Compliance Complexity",
          description: "Complex FDA, CE, and other regulatory requirements create significant compliance burdens for medical device development."
        },
        {
          title: "Software Safety & Reliability",
          description: "Medical device software must meet stringent safety and reliability standards with zero tolerance for failures."
        },
        {
          title: "Data Security & Privacy",
          description: "Protecting sensitive patient data and ensuring HIPAA compliance is critical for medical device applications."
        },
        {
          title: "Interoperability Standards",
          description: "Medical devices must integrate with existing healthcare systems and comply with interoperability standards."
        },
        {
          title: "Real-time Monitoring & Analytics",
          description: "Continuous monitoring and real-time analytics are essential for patient safety and clinical decision-making."
        },
        {
          title: "Cybersecurity Threats",
          description: "Connected medical devices face sophisticated cyber threats requiring advanced security measures."
        }
      ]}
      solutions={[
        {
          title: "Regulatory Compliance Framework",
          description: "Comprehensive compliance framework ensuring adherence to FDA, CE, and other regulatory requirements."
        },
        {
          title: "Safety-Critical Software Development",
          description: "Rigorous software development processes with comprehensive testing and validation for medical applications."
        },
        {
          title: "HIPAA-Compliant Data Security",
          description: "Advanced security measures with encryption, access controls, and audit trails for patient data protection."
        },
        {
          title: "Healthcare System Integration",
          description: "Seamless integration with EHR systems, PACS, and other healthcare infrastructure using standard protocols."
        },
        {
          title: "Real-time Analytics Platform",
          description: "Advanced analytics and monitoring systems for real-time patient data analysis and clinical insights."
        },
        {
          title: "Cybersecurity Protection",
          description: "Multi-layered cybersecurity measures to protect connected medical devices from cyber threats."
        }
      ]}

      // Service Offerings Section (Industry Solutions)
      showServiceOfferings={true}
      serviceOfferingsTitle="Medical Device Technology Solutions"
      serviceOfferingsSubtitle="Comprehensive software solutions designed specifically for medical device industry challenges"
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

      // Benefits Section (Industry Process)
      showBenefits={true}
      benefitsTitle="Our Medical Device Development Approach"
      benefitsSubtitle="Proven methodology for delivering safe, compliant, and innovative medical device solutions"
      benefits={[
        {
          title: "Regulatory-First Development",
          description: "Development process designed around regulatory compliance with documentation and validation at every stage.",
          features: ["Regulatory Planning", "Documentation Management", "Validation Testing", "Compliance Audits"]
        },
        {
          title: "Safety-Critical Engineering",
          description: "Rigorous engineering practices with comprehensive testing and validation for medical device safety.",
          features: ["Safety Analysis", "Risk Assessment", "Comprehensive Testing", "Quality Assurance"]
        },
        {
          title: "Agile Medical Development",
          description: "Iterative development approach with continuous feedback and rapid prototyping for medical applications.",
          features: ["Rapid Prototyping", "User Testing", "Iterative Improvement", "Clinical Validation"]
        }
      ]}

      // Stats Section (Industry Results)
      showStats={true}
      statsTitle="Medical Device Technology Results"
      statsSubtitle="Proven outcomes for medical device companies implementing our solutions"
      stats={[
        {
          metric: { value: "100%", label: "Regulatory Compliance" },
          description: "Full compliance with FDA, CE, and other regulations"
        },
        {
          metric: { value: "99.99%", label: "Software Reliability" },
          description: "High reliability for safety-critical medical applications"
        },
        {
          metric: { value: "50%", label: "Faster Development" },
          description: "Reduced development time with agile methodology"
        },
        {
          metric: { value: "100%", label: "Data Security" },
          description: "Complete HIPAA compliance and data protection"
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Innovate Medical Device Technology?"
      finalCtaSubtitle="Let's discuss how our medical device expertise can help you create innovative healthcare solutions"
      finalCtaButtonText="Schedule Medical Device Consultation"
      finalCtaButtonLink="/contact"
    />
  );
};

export default MedicalDevices;
