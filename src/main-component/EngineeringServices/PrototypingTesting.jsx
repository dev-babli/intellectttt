import React from "react";
import MasterSubServiceTemplate from "../../components/templates/MasterSubServiceTemplate";
import { 
  Science,
  TrendingUp,
  Business,
  CheckCircle,
  Speed,
  AutoAwesome,
  Cloud,
  Memory,
  Settings,
  Verified
} from '@mui/icons-material';

const PrototypingTesting = () => {
  return (
    <MasterSubServiceTemplate
      // Hero Section
      heroTitle="Prototyping & Testing"
      heroSubtitle="Validation Excellence"
      heroDescription="Bringing ideas to life, faster and more reliably. We offer full-cycle prototyping and validation services to accelerate go-to-market and meet global certification standards."
      heroButtonText="Start Testing"
      heroButtonLink="/contact"
      heroBackgroundImage="/Manufacturing-and-Automotive.webp"
      heroTextColor="white"
      heroFeatures={[
        "Functional & Regulatory Testing",
        "Hardware-in-the-Loop Testing",
        "Digital Test Planning",
        "AR/VR-based SOPs"
      ]}

      // Problem/Solution Section
      problemSolutionTitle="The Testing Challenge & Our Solution"
      problemSolutionSubtitle="We understand the complexities of product validation and have the expertise to ensure quality and compliance"
      problems={[
        {
          title: "Complex Validation Requirements",
          description: "Complex validation requirements that need comprehensive testing across multiple domains and regulatory standards."
        },
        {
          title: "Time-to-Market Pressure",
          description: "Time-to-market pressure that requires efficient testing processes without compromising quality or compliance."
        },
        {
          title: "Regulatory Compliance",
          description: "Stringent regulatory compliance requirements that vary across industries and geographies."
        }
      ]}
      solutions={[
        {
          title: "Comprehensive Testing Framework",
          description: "Comprehensive testing framework that covers functional, regulatory, and performance validation."
        },
        {
          title: "Accelerated Validation",
          description: "Accelerated validation processes that reduce time-to-market while maintaining quality standards."
        },
        {
          title: "Regulatory Expertise",
          description: "Deep regulatory expertise for FDA, ISO, CE, and other global certification standards."
        }
      ]}
      problemSolutionVariant="split"

      // Service Offerings
      serviceOfferingsTitle="Our Prototyping & Testing Services"
      serviceOfferingsSubtitle="Comprehensive prototyping and testing services designed for validation excellence"
      services={[
        {
          icon: <Verified />,
          title: "Functional & Regulatory Testing",
          description: "Comprehensive functional testing and regulatory compliance validation for FDA, ISO, CE standards.",
          features: [
            "Functional testing protocols",
            "Regulatory compliance testing",
            "Pre-compliance validation",
            "Certification support"
          ],
          badge: "Most Popular",
          link: "/contact",
          ctaText: "Functional Testing"
        },
        {
          icon: <Memory />,
          title: "Hardware-in-the-Loop Testing",
          description: "Advanced HiL and SiL test benches for comprehensive system validation and verification.",
          features: [
            "Hardware-in-the-loop (HiL)",
            "Software-in-loop (SiL)",
            "System integration testing",
            "Real-time validation"
          ],
          badge: "Advanced",
          link: "/contact",
          ctaText: "HiL Testing"
        },
        {
          icon: <Settings />,
          title: "Digital Test Planning",
          description: "Comprehensive digital test planning and automation frameworks for efficient validation.",
          features: [
            "Test plan development",
            "Automation frameworks",
            "V&V methodologies",
            "Test execution management"
          ],
          link: "/contact",
          ctaText: "Test Planning"
        },
        {
          icon: <AutoAwesome />,
          title: "AR/VR-based SOPs",
          description: "Advanced AR/VR-based standard operating procedures and operator guidance platforms.",
          features: [
            "AR/VR SOP development",
            "Operator training platforms",
            "Interactive guidance systems",
            "Remote assistance solutions"
          ],
          link: "/contact",
          ctaText: "AR/VR SOPs"
        }
      ]}

      // Benefits Section
      benefitsTitle="Why Choose Our Testing Services"
      benefitsSubtitle="Discover the advantages of partnering with our expert testing team"
      benefits={[
        {
          icon: <CheckCircle />,
          title: "Comprehensive Validation",
          description: "End-to-end validation services that cover functional, regulatory, and performance testing."
        },
        {
          icon: <Speed />,
          title: "Accelerated Testing",
          description: "Fast testing processes that reduce time-to-market while maintaining quality standards."
        },
        {
          icon: <AutoAwesome />,
          title: "Advanced Technologies",
          description: "Cutting-edge testing technologies including AR/VR, automation, and digital platforms."
        },
        {
          icon: <Cloud />,
          title: "Global Compliance",
          description: "Expertise in global regulatory standards including FDA, ISO, CE, and industry-specific requirements."
        }
      ]}

      // Stats Section
      statsTitle="Testing Excellence"
      statsSubtitle="Numbers that demonstrate our testing capabilities"
      stats={[
        {
          number: "1000+",
          label: "Tests Completed",
          description: "Comprehensive validation tests"
        },
        {
          number: "99.9%",
          label: "Accuracy Rate",
          description: "Testing accuracy and reliability"
        },
        {
          number: "50+",
          label: "Standards Supported",
          description: "Regulatory standards and certifications"
        },
        {
          number: "24/7",
          label: "Testing Support",
          description: "Round-the-clock testing capabilities"
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Validate Your Products with Excellence?"
      finalCtaSubtitle="Let's discuss how our testing expertise can help ensure quality, compliance, and successful market launch"
      finalCtaButtonText="Start Testing Project"
      finalCtaButtonLink="/contact"
    />
  );
};

export default PrototypingTesting;
