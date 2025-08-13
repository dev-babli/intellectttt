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
  Storage,
  Code,
  Build,
  Support
} from '@mui/icons-material';

const SAPServices = () => {
  return (
    <MasterMainServiceTemplate
      // Hero Section - Minimal
      heroTitle="SAP Services"
      heroSubtitle="Enterprise Solutions"
      heroDescription="Transform your enterprise with comprehensive SAP solutions. From S/4HANA migration to custom development, we help organizations modernize their SAP landscape and drive digital transformation."
      heroButtonText="Talk to Our Experts"
      heroButtonLink="/contact"
      heroBackgroundImage="/images/bg/image-belowhero.webp"
      heroFeatures={[
        "SAP S/4HANA Migration",
        "BTP & Fiori Development",
        "SAP AMS & Support",
        "DevOps & DevSecOps"
      ]}

      // Problem/Solution Section
      problemSolutionTitle="The SAP Challenge & Our Solution"
      problemSolutionSubtitle="We understand the complexities of SAP transformation and have the expertise to modernize your enterprise"
      problems={[
        {
          title: "Legacy SAP Systems",
          description: "Outdated SAP systems that can't scale, are expensive to maintain, and prevent digital transformation."
        },
        {
          title: "Complex Migration Process",
          description: "Overwhelming technical requirements, data migration challenges, and uncertainty about S/4HANA transformation."
        },
        {
          title: "Limited Customization",
          description: "Rigid SAP systems that don't adapt to business needs and lack modern user experience capabilities."
        }
      ]}
      solutions={[
        {
          title: "Seamless S/4HANA Migration",
          description: "Zero-downtime migration strategies with comprehensive testing and performance optimization for modern ERP."
        },
        {
          title: "Modern SAP Development",
          description: "Custom Fiori applications, BTP integration, and ABAP development for enhanced user experience."
        },
        {
          title: "Comprehensive SAP Support",
          description: "24/7 SAP application management and support services with proactive monitoring and issue resolution."
        }
      ]}
      problemSolutionVariant="split"

      // Service Offerings
      serviceOfferingsTitle="Our SAP Services"
      serviceOfferingsSubtitle="Comprehensive SAP services designed to modernize your enterprise and drive digital transformation"
      services={[
        {
          icon: <Storage />,
          title: "SAP S/4HANA Migration",
          description: "Seamless upgrade to S/4HANA for modern ERP with zero-downtime migration strategies and comprehensive testing.",
          features: [
            "Zero-downtime migration",
            "Comprehensive testing",
            "Performance optimization"
          ],
          badge: "Most Popular",
          link: "/service/sap-services/s4hana",
          ctaText: "S/4HANA Migration"
        },
        {
          icon: <Code />,
          title: "SAP BTP, ABAP & Fiori Development",
          description: "Smart applications with BTP, ABAP & Fiori for enhanced user experience and business process automation.",
          features: [
            "Custom Fiori apps",
            "BTP integration",
            "ABAP development"
          ],
          badge: "Trending",
          link: "/service/sap-services/btp",
          ctaText: "SAP Development"
        },
        {
          icon: <Support />,
          title: "SAP AMS & Managed Support",
          description: "Reliable SAP support for smooth operations with 24/7 monitoring and proactive issue resolution.",
          features: [
            "24/7 monitoring",
            "Proactive support",
            "Performance tuning"
          ],
          link: "/service/sap-services/ams",
          ctaText: "SAP Support"
        },
        {
          icon: <Build />,
          title: "DevOps & DevSecOps",
          description: "Automate and secure your SAP development pipeline with CI/CD integration and security best practices.",
          features: [
            "CI/CD automation",
            "Security scanning",
            "Infrastructure as code"
          ],
          link: "/service/sap-services/devops",
          ctaText: "SAP DevOps"
        }
      ]}
      serviceOfferingsVariant="default"

      // Benefits Section
      benefitsTitle="Why Choose Our SAP Services"
      benefitsSubtitle="Discover the tangible benefits and outcomes you can expect from our SAP transformation"
      benefits={[
        {
          icon: <Speed />,
          title: "50% Faster Processing",
          description: "S/4HANA's in-memory computing delivers real-time processing and analytics for faster decision-making.",
          features: [
            "Real-time processing",
            "In-memory computing",
            "Instant analytics"
          ],
          metric: {
            value: "50%",
            label: "Performance Gain"
          }
        },
        {
          icon: <TrendingUp />,
          title: "30% Cost Reduction",
          description: "Modernized SAP landscape reduces maintenance costs and improves operational efficiency.",
          features: [
            "Reduced maintenance",
            "Operational efficiency",
            "Simplified architecture"
          ],
          metric: {
            value: "30%",
            label: "Cost Savings"
          }
        },
        {
          icon: <CheckCircle />,
          title: "Zero Downtime Migration",
          description: "Seamless migration strategies that ensure business continuity and minimal disruption to operations.",
          features: [
            "Business continuity",
            "Minimal disruption",
            "Risk mitigation"
          ],
          metric: {
            value: "100%",
            label: "Uptime Guarantee"
          }
        }
      ]}

      // Stats Section
      statsTitle="Proven SAP Results"
      statsSubtitle="Numbers that speak for themselves - real outcomes from our SAP implementations"
      stats={[
        {
          icon: <Speed />,
          value: "50%",
          label: "Performance Gain",
          description: "Average performance improvement with S/4HANA migration"
        },
        {
          icon: <TrendingUp />,
          value: "30%",
          label: "Cost Reduction",
          description: "Average cost savings for SAP modernization projects"
        },
        {
          icon: <CheckCircle />,
          value: "100%",
          label: "Migration Success",
          description: "Successful SAP migrations with zero data loss"
        },
        {
          icon: <Support />,
          value: "24/7",
          label: "Support Coverage",
          description: "Round-the-clock SAP support and monitoring"
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Transform Your SAP Landscape?"
      finalCtaSubtitle="Join hundreds of companies that have already modernized their SAP systems with our expertise. Let's discuss how we can help you achieve similar results."
      finalCtaButtonText="Schedule SAP Consultation"
      finalCtaButtonLink="/contact"

      // Blog & Case Studies
      blogTitle="SAP Insights & Updates"
      blogSubtitle="Stay informed with our latest SAP research, industry trends, and thought leadership content"
      caseStudyTitle="SAP Success Stories"
      caseStudySubtitle="Discover how we've helped businesses achieve remarkable results with SAP transformation"

      // Theme
      theme="light"
    />
  );
};

export default SAPServices;
