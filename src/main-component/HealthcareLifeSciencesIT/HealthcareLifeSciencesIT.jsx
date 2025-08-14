import React from "react";
import MasterMainServiceTemplate from "../../components/templates/MasterMainServiceTemplate";
import { 
  Speed, 
  TrendingUp, 
  Cloud, 
  Security, 
  Analytics, 
  AutoAwesome,
  SmartToy,
  DataUsage,
  Psychology,
  CheckCircle,
  Memory,
  IntegrationInstructions,
  Sensors,
  Autorenew,
  RocketLaunch,
  Lightbulb,
  AutoFixHigh,
  HealthAndSafety,
  Build,
  Monitor,
  LocalHospital
} from '@mui/icons-material';

const HealthcareLifeSciencesIT = () => {
  return (
    <MasterMainServiceTemplate
      // Hero Section - Minimal
      heroTitle="Healthcare & Life Sciences IT"
      heroSubtitle="Digital Health Innovation"
      heroDescription="Empowering Better Healthcare Through Technology. Transform healthcare delivery with advanced technology solutions that improve patient care, streamline operations, and ensure compliance in the rapidly evolving healthcare landscape."
      heroButtonText="Healthcare IT"
      heroButtonLink="/contact"
      heroBackgroundImage="/herosectionimages/Sliders/5.webp"
      heroTextColor="white"
      heroFeatures={[
        "Compliance & Regulatory IT",
        "Clinical Data Platforms",
        "AI in Imaging & Diagnostics",
        "HL7 & FHIR Integration"
      ]}

      // Problem/Solution Section
      problemSolutionTitle="The Healthcare IT Challenge & Our Solution"
      problemSolutionSubtitle="We understand the complexities of healthcare IT and have the expertise to build innovative healthcare solutions"
      problems={[
        {
          title: "Compliance Complexity",
          description: "Complex regulatory requirements and compliance standards that are difficult to implement and maintain across healthcare systems."
        },
        {
          title: "Data Interoperability",
          description: "Poor data interoperability between healthcare systems that prevents seamless patient care coordination."
        },
        {
          title: "Patient Care Optimization",
          description: "Lack of advanced analytics and AI capabilities that prevent optimal patient care and treatment outcomes."
        }
      ]}
      solutions={[
        {
          title: "Compliance & Regulatory IT",
          description: "Comprehensive compliance frameworks and regulatory management systems for healthcare organizations."
        },
        {
          title: "Clinical Data Platforms",
          description: "Unified clinical data systems and advanced analytics for patient care optimization and insights."
        },
        {
          title: "AI in Imaging & Diagnostics",
          description: "AI-driven diagnostics and intelligent imaging systems for improved patient outcomes and detection."
        }
      ]}
      problemSolutionVariant="split"

      // Service Offerings
      serviceOfferingsTitle="Our Healthcare & Life Sciences IT Services"
      serviceOfferingsSubtitle="Comprehensive healthcare IT services designed to transform patient care and drive medical innovation"
      services={[
        {
          icon: <Security />,
          title: "Compliance & Regulatory IT",
          description: "Streamline compliance with robust IT frameworks and regulatory management systems for healthcare organizations.",
          features: [
            "Regulatory compliance",
            "Audit management",
            "Risk assessment"
          ],
          badge: "Most Popular",
          link: "/service/healthcare-and-life-sciences-it/compliance",
          ctaText: "Compliance & Regulatory"
        },
        {
          icon: <Analytics />,
          title: "Clinical Data Platforms",
          description: "Power insights with unified clinical data systems and advanced analytics for patient care optimization.",
          features: [
            "Clinical analytics",
            "Patient data management",
            "Interoperability"
          ],
          badge: "Trending",
          link: "/service/healthcare-and-life-sciences-it/data",
          ctaText: "Clinical Data Platforms"
        },
        {
          icon: <SmartToy />,
          title: "AI in Imaging & Diagnostics",
          description: "Accelerate detection with AI-driven diagnostics and intelligent imaging systems for improved patient outcomes.",
          features: [
            "AI diagnostics",
            "Medical imaging",
            "Predictive analytics"
          ],
          link: "/service/healthcare-and-life-sciences-it/ai",
          ctaText: "AI Imaging & Diagnostics"
        },
        {
          icon: <IntegrationInstructions />,
          title: "HL7 & FHIR Integration",
          description: "Enable seamless health data exchange with HL7 & FHIR standards for improved care coordination.",
          features: [
            "Data interoperability",
            "Care coordination",
            "Standards compliance"
          ],
          link: "/service/healthcare-and-life-sciences-it/hl7",
          ctaText: "HL7 & FHIR Integration"
        }
      ]}
      serviceOfferingsVariant="default"

      // Benefits Section
      benefitsTitle="Why Choose Our Healthcare & Life Sciences IT Services"
      benefitsSubtitle="Discover the tangible benefits and outcomes you can expect from our healthcare IT solutions"
      benefits={[
        {
          icon: <Speed />,
          title: "40% Faster Diagnosis",
          description: "Accelerate diagnosis by 40% with AI-powered imaging and diagnostic tools for improved patient outcomes.",
          features: [
            "Faster diagnosis",
            "AI-powered tools",
            "Improved outcomes"
          ],
          metric: {
            value: "40%",
            label: "Faster Diagnosis"
          }
        },
        {
          icon: <TrendingUp />,
          title: "50% Better Patient Care",
          description: "Improve patient care by 50% with unified data platforms and advanced analytics for personalized treatment.",
          features: [
            "Better patient care",
            "Unified data platforms",
            "Personalized treatment"
          ],
          metric: {
            value: "50%",
            label: "Better Patient Care"
          }
        },
        {
          icon: <CheckCircle />,
          title: "100% Compliance",
          description: "Ensure 100% regulatory compliance with comprehensive frameworks and audit management systems.",
          features: [
            "Regulatory compliance",
            "Comprehensive frameworks",
            "Audit management"
          ],
          metric: {
            value: "100%",
            label: "Compliance"
          }
        }
      ]}

      // Stats Section
      statsTitle="Proven Healthcare IT Results"
      statsSubtitle="Numbers that speak for themselves - real outcomes from our healthcare IT implementations"
      stats={[
        {
          icon: <Speed />,
          value: "40%",
          label: "Faster Diagnosis",
          description: "Average improvement in diagnosis speed"
        },
        {
          icon: <TrendingUp />,
          value: "50%",
          label: "Better Patient Care",
          description: "Average improvement in patient care"
        },
        {
          icon: <CheckCircle />,
          value: "100%",
          label: "Compliance",
          description: "Regulatory compliance achieved"
        },
        {
          icon: <LocalHospital />,
          value: "100+",
          label: "Healthcare Organizations",
          description: "Healthcare organizations served"
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Transform Healthcare Delivery?"
      finalCtaSubtitle="Join hundreds of healthcare organizations that have already improved patient care with our IT solutions. Let's discuss how we can help you achieve similar results."
      finalCtaButtonText="Schedule Healthcare IT Consultation"
      finalCtaButtonLink="/contact"



      // Theme
      theme="light"
    />
  );
};

export default HealthcareLifeSciencesIT;
