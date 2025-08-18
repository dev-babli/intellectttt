import React from "react";
import MasterSubServiceTemplate from "../../components/templates/MasterSubServiceTemplate";
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
  Support,
  Build,
  Monitor,
  Assignment
} from '@mui/icons-material';

const ITSMServiceDesk = () => {
  return (
    <MasterSubServiceTemplate
      // Hero Section - Minimal
      heroTitle="ITSM, Service Desk & CoE"
      heroSubtitle="Service Desk"
      heroDescription="Streamlined IT Service Management with centralized Service Desk solutions and robust Centers of Excellence. Build agile, resilient, and service-driven IT ecosystems."
      heroButtonText="ITSM Solutions"
      heroButtonLink="/contact"
      heroBackgroundImage="/ITSM-Service-desk.webp"
      heroTextColor="white"
      heroFeatures={[
        "ITSM Framework",
        "Service Desk",
        "Centers of Excellence",
        "ITIL Best Practices"
      ]}

      // Problem/Solution Section
      problemSolutionTitle="The ITSM Challenge & Our Solution"
      problemSolutionSubtitle="We understand the complexities of IT Service Management and have the expertise to build service-driven IT ecosystems"
      problems={[
        {
          title: "Disconnected IT Services",
          description: "Fragmented IT services and lack of centralized management that reduce efficiency and user satisfaction."
        },
        {
          title: "Poor Service Delivery",
          description: "Inconsistent service delivery, slow response times, and lack of standardized processes across IT operations."
        },
        {
          title: "Limited Governance",
          description: "Lack of proper governance, compliance, and continuous improvement processes in IT service management."
        }
      ]}
      solutions={[
        {
          title: "Centralized Service Desk",
          description: "Centralized service desk with standardized processes and improved user support experiences."
        },
        {
          title: "ITIL Best Practices",
          description: "Implementation of ITIL best practices for incident, request, change, and problem management."
        },
        {
          title: "Centers of Excellence",
          description: "Robust Centers of Excellence for governance and continuous improvement."
        }
      ]}
      problemSolutionVariant="split"

      // Service Offerings
      serviceOfferingsTitle="Our ITSM & Service Desk Services"
      serviceOfferingsSubtitle="Comprehensive ITSM services designed to build service-driven IT ecosystems"
      services={[
        {
          icon: <Support />,
          title: "Service Desk Implementation",
          description: "Design and implement centralized service desk solutions with standardized processes.",
          features: [
            "Centralized management",
            "Standardized processes",
            "User support"
          ],
          badge: "Most Popular",
          link: "/contact",
          ctaText: "Service Desk"
        },
        {
          icon: <Assignment />,
          title: "ITIL Framework",
          description: "Implement ITIL best practices for incident, request, change, and problem management.",
          features: [
            "ITIL compliance",
            "Process optimization",
            "Best practices"
          ],
          badge: "Trending",
          link: "/contact",
          ctaText: "ITIL Framework"
        },
        {
          icon: <Build />,
          title: "Centers of Excellence",
          description: "Establish Centers of Excellence for governance and continuous improvement.",
          features: [
            "Governance framework",
            "Continuous improvement",
            "Service optimization"
          ],
          link: "/contact",
          ctaText: "CoE Setup"
        },
        {
          icon: <Monitor />,
          title: "Service Management",
          description: "Comprehensive service management with monitoring and performance tracking.",
          features: [
            "Service monitoring",
            "Performance tracking",
            "Quality assurance"
          ],
          link: "/contact",
          ctaText: "Service Management"
        }
      ]}
      serviceOfferingsVariant="default"

      // Benefits Section
      benefitsTitle="Why Choose Our ITSM & Service Desk Services"
      benefitsSubtitle="Discover the tangible benefits and outcomes you can expect from our ITSM solutions"
      benefits={[
        {
          icon: <Speed />,
          title: "1M+ Requests Handled",
          description: "Efficiently handle over 1 million service requests annually with precision and accuracy.",
          features: [
            "High volume handling",
            "Precision processing",
            "Efficient workflows"
          ],
          metric: {
            value: "1M+",
            label: "Requests Handled"
          }
        },
        {
          icon: <TrendingUp />,
          title: "40% Faster Resolution",
          description: "Reduce service request resolution times by 40% with streamlined processes and automation.",
          features: [
            "Faster resolution",
            "Streamlined processes",
            "Automation"
          ],
          metric: {
            value: "40%",
            label: "Faster Resolution"
          }
        },
        {
          icon: <CheckCircle />,
          title: "100% ITIL Compliance",
          description: "Achieve 100% ITIL compliance with best practices and standardized service management.",
          features: [
            "ITIL compliance",
            "Best practices",
            "Standardized processes"
          ],
          metric: {
            value: "100%",
            label: "ITIL Compliance"
          }
        }
      ]}

      // Stats Section
      statsTitle="Proven ITSM Results"
      statsSubtitle="Numbers that speak for themselves - real outcomes from our ITSM implementations"
      stats={[
        {
          icon: <Speed />,
          value: "1M+",
          label: "Requests Handled",
          description: "Service requests processed annually"
        },
        {
          icon: <TrendingUp />,
          value: "40%",
          label: "Faster Resolution",
          description: "Average improvement in resolution time"
        },
        {
          icon: <CheckCircle />,
          value: "100%",
          label: "ITIL Compliance",
          description: "ITIL best practices compliance achieved"
        },
        {
          icon: <Support />,
          value: "24/7",
          label: "Service Available",
          description: "Round-the-clock service desk support"
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Transform Your IT Services?"
      finalCtaSubtitle="Join hundreds of companies that have already improved their IT service management with our ITSM solutions. Let's discuss how we can help you achieve similar results."
      finalCtaButtonText="Schedule ITSM Consultation"
      finalCtaButtonLink="/contact"

      // Blog & Case Studies
      blogTitle="ITSM Insights & Updates"
      blogSubtitle="Stay informed with our latest ITSM research, industry trends, and thought leadership content"
      caseStudyTitle="ITSM Success Stories"
      caseStudySubtitle="Discover how we've helped businesses achieve remarkable results with ITSM"

      // Theme
      theme="light"
    />
  );
};

export default ITSMServiceDesk;
