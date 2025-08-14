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
    <MasterIndustryTemplate
      // Hero Section
      heroTitle="Healthcare & Life Sciences"
      heroSubtitle="Secure, Scalable & Mission-Focused IT Solutions"
      heroDescription="Transform healthcare delivery with cutting-edge digital solutions, AI-powered diagnostics, and secure patient care systems. Build innovative healthcare technologies that improve patient outcomes and streamline clinical operations."
      heroButtonText="TALK TO OUR EXPERTS"
      heroButtonLink="/contact"
      heroBackgroundImage="/Healthcare-and-Life-sciences.webp"
      heroFeatures={[
        "Digital Health Platforms",
        "AI-Powered Diagnostics",
        "Regulatory Compliance",
        "Patient Data Security"
      ]}

      // Problem/Solution Section (Industry Challenges)
      showProblemSolution={true}
      problemSolutionTitle="Healthcare & Life Sciences Industry Challenges & Solutions"
      problemSolutionSubtitle="We understand the unique challenges facing healthcare organizations and provide innovative solutions"
      problems={[
        {
          title: "Regulatory Compliance Complexity",
          description: "Complex HIPAA, FDA, and regional regulations create significant compliance burdens for healthcare systems."
        },
        {
          title: "Data Security & Privacy",
          description: "Protecting sensitive patient data and ensuring privacy compliance is critical for healthcare applications."
        },
        {
          title: "System Interoperability",
          description: "Healthcare systems must integrate with existing EHR, PACS, and other clinical systems seamlessly."
        },
        {
          title: "Clinical Workflow Optimization",
          description: "Outdated systems create inefficient clinical workflows and impact patient care delivery."
        },
        {
           title: "Real-time Data Analytics",
           description: "Healthcare organizations need real-time analytics for clinical decision-making and patient monitoring."
        },
        {
          title: "AI Integration & Adoption",
          description: "Implementing AI solutions in clinical environments requires careful validation and regulatory approval."
        }
      ]}
      solutions={[
        {
          title: "Compliance-First Development",
          description: "Development process designed around regulatory compliance with HIPAA, FDA, and regional requirements."
        },
        {
          title: "Advanced Security Framework",
          description: "Multi-layered security with encryption, access controls, and audit trails for patient data protection."
        },
        {
          title: "Healthcare System Integration",
          description: "Seamless integration with EHR systems, PACS, and healthcare infrastructure using standard protocols."
        },
        {
          title: "Digital Workflow Optimization",
          description: "Modern digital platforms that streamline clinical workflows and improve patient care efficiency."
        },
        {
          title: "Real-time Analytics Platform",
          description: "Advanced analytics and monitoring systems for real-time clinical insights and patient care."
        },
        {
          title: "AI-Powered Clinical Solutions",
          description: "Validated AI solutions for clinical decision support, diagnostics, and patient monitoring."
        }
      ]}

      // Service Offerings Section (Industry Solutions)
      showServiceOfferings={true}
      serviceOfferingsTitle="Healthcare & Life Sciences Technology Solutions"
      serviceOfferingsSubtitle="Comprehensive digital solutions designed specifically for healthcare industry challenges"
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

      // Benefits Section (Industry Process)
      showBenefits={true}
      benefitsTitle="Our Healthcare Development Approach"
      benefitsSubtitle="Proven methodology for delivering secure, compliant, and innovative healthcare solutions"
      benefits={[
        {
          title: "Regulatory-First Development",
          description: "Development process designed around regulatory compliance with documentation and validation at every stage.",
          features: ["Regulatory Planning", "Documentation Management", "Validation Testing", "Compliance Audits"]
        },
        {
          title: "Security & Privacy by Design",
          description: "Security and privacy integrated into every development phase with comprehensive testing and validation.",
          features: ["Security Architecture", "Privacy Controls", "Penetration Testing", "Security Audits"]
        },
        {
          title: "Clinical Validation & Testing",
          description: "Rigorous clinical validation and testing processes to ensure safety and effectiveness in healthcare environments.",
          features: ["Clinical Testing", "Safety Validation", "Performance Testing", "User Acceptance"]
        }
      ]}

      // Stats Section (Industry Results)
      showStats={true}
      statsTitle="Healthcare Technology Results"
      statsSubtitle="Proven outcomes for healthcare organizations implementing our solutions"
      stats={[
        {
          metric: { value: "100%", label: "HIPAA Compliance" },
          description: "Full compliance with healthcare privacy regulations"
        },
        {
          metric: { value: "50%", label: "Workflow Efficiency" },
          description: "Improved clinical workflow efficiency"
        },
        {
          metric: { value: "90%", label: "Patient Satisfaction" },
          description: "Enhanced patient experience and satisfaction"
        },
        {
          metric: { value: "99.9%", label: "System Uptime" },
          description: "High availability for critical healthcare systems"
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Transform Healthcare Technology?"
      finalCtaSubtitle="Let's discuss how our healthcare expertise can help you create innovative patient care solutions"
      finalCtaButtonText="Schedule Healthcare Consultation"
      finalCtaButtonLink="/contact"
    />
  );
};

export default HealthCareAndLifeSc;
