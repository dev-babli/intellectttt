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
  Api,
  Storage,
  Code,
  Build
} from '@mui/icons-material';

const ApiIntegration = () => {
  return (
    <MasterSubServiceTemplate
      // Hero Section - Minimal
      heroTitle="API & Integration Services"
      heroSubtitle="System Connectivity"
      heroDescription="Connect systems seamlessly with robust API development and integration solutions. Unlock seamless connectivity with API & Integration Services that enable businesses to build connected ecosystems through robust API development and seamless integration strategies."
      heroButtonText="TALK TO OUR EXPERTS"
      heroButtonLink="/contact"
      heroBackgroundImage="/API-Integration.webp"
      heroTextColor="black"
      heroFeatures={[
        "REST & GraphQL APIs",
        "Enterprise Service Bus",
        "Cloud-Native Integration",
        "Microservices Architecture"
      ]}

      // Problem/Solution Section
      problemSolutionTitle="The API Integration Challenge & Our Solution"
      problemSolutionSubtitle="We understand the complexities of system integration and have the expertise to connect your ecosystem"
      problems={[
        {
          title: "System Silos & Fragmentation",
          description: "Disconnected systems and applications that prevent data flow and create operational inefficiencies."
        },
        {
          title: "Integration Complexity",
          description: "Complex integration requirements between legacy and modern systems with different protocols and data formats."
        },
        {
          title: "API Management & Security",
          description: "Difficulty managing multiple APIs, ensuring security, and maintaining consistent performance across integrations."
        }
      ]}
      solutions={[
        {
          title: "Unified API Strategy",
          description: "Comprehensive API development and management strategy that connects all systems seamlessly."
        },
        {
          title: "Modern Integration Architecture",
          description: "Cloud-native integration solutions with microservices architecture and enterprise service bus capabilities."
        },
        {
          title: "Secure & Scalable APIs",
          description: "Enterprise-grade API management with security, monitoring, and scalability built-in."
        }
      ]}
      problemSolutionVariant="split"

      // Service Offerings
      serviceOfferingsTitle="Our API & Integration Services"
      serviceOfferingsSubtitle="Comprehensive API and integration services designed to connect your entire ecosystem"
      services={[
        {
          icon: <Api />,
          title: "REST & GraphQL APIs",
          description: "Design and develop robust REST and GraphQL APIs for seamless data exchange and system communication.",
          features: [
            "API design & development",
            "GraphQL implementation",
            "RESTful architecture"
          ],
          badge: "Most Popular",
          link: "/contact",
          ctaText: "API Development"
        },
        {
          icon: <IntegrationInstructions />,
          title: "Enterprise Service Bus",
          description: "Implement enterprise service bus solutions for centralized integration and message routing.",
          features: [
            "Message routing",
            "Centralized integration",
            "Service orchestration"
          ],
          badge: "Trending",
          link: "/contact",
          ctaText: "ESB Solutions"
        },
        {
          icon: <Cloud />,
          title: "Cloud-Native Integration",
          description: "Build cloud-native integration solutions that scale with your business and leverage modern cloud services.",
          features: [
            "Cloud integration",
            "Scalable architecture",
            "Modern cloud services"
          ],
          link: "/contact",
          ctaText: "Cloud Integration"
        },
        {
          icon: <Code />,
          title: "Microservices Architecture",
          description: "Design and implement microservices-based integration patterns for flexible and maintainable systems.",
          features: [
            "Microservices design",
            "Service decomposition",
            "Container orchestration"
          ],
          link: "/contact",
          ctaText: "Microservices"
        }
      ]}
      serviceOfferingsVariant="default"

      // Benefits Section
      benefitsTitle="Why Choose Our API & Integration Services"
      benefitsSubtitle="Discover the tangible benefits and outcomes you can expect from our integration solutions"
      benefits={[
        {
          icon: <Speed />,
          title: "50% Faster Integration",
          description: "Streamlined integration processes that reduce development time and accelerate system connectivity.",
          features: [
            "Rapid development",
            "Standardized processes",
            "Reusable components"
          ],
          metric: {
            value: "50%",
            label: "Faster Integration"
          }
        },
        {
          icon: <TrendingUp />,
          title: "Seamless Data Flow",
          description: "Unified data flow across all systems with real-time synchronization and consistent data quality.",
          features: [
            "Real-time sync",
            "Data consistency",
            "Quality assurance"
          ],
          metric: {
            value: "100%",
            label: "Data Connectivity"
          }
        },
        {
          icon: <Security />,
          title: "Enterprise Security",
          description: "Enterprise-grade security measures with API authentication, authorization, and data protection.",
          features: [
            "API security",
            "Authentication",
            "Data protection"
          ],
          metric: {
            value: "250+",
            label: "Integrations Deployed"
          }
        }
      ]}

      // Stats Section
      statsTitle="Proven Integration Results"
      statsSubtitle="Numbers that speak for themselves - real outcomes from our API integration implementations"
      stats={[
        {
          icon: <Speed />,
          value: "50%",
          label: "Faster Integration",
          description: "Average reduction in integration development time"
        },
        {
          icon: <TrendingUp />,
          value: "100%",
          label: "Data Connectivity",
          description: "Successful system connectivity achieved"
        },
        {
          icon: <Security />,
          value: "250+",
          label: "Integrations Deployed",
          description: "Enterprise integrations across platforms"
        },
        {
          icon: <CheckCircle />,
          value: "99.9%",
          label: "Uptime SLA",
          description: "Guaranteed uptime for all integrations"
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Connect Your Systems?"
      finalCtaSubtitle="Join hundreds of companies that have already transformed their system connectivity with our API and integration services. Let's discuss how we can help you achieve similar results."
      finalCtaButtonText="Schedule Integration Consultation"
      finalCtaButtonLink="/contact"

      // Blog & Case Studies
      blogTitle="API & Integration Insights & Updates"
      blogSubtitle="Stay informed with our latest integration research, industry trends, and thought leadership content"
      caseStudyTitle="Integration Success Stories"
      caseStudySubtitle="Discover how we've helped businesses achieve remarkable results with API integration"

      // Theme
      theme="light"
    />
  );
};

export default ApiIntegration;
