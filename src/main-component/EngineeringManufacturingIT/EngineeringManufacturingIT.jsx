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
  Build,
  Engineering,
  Factory,
  PrecisionManufacturing
} from '@mui/icons-material';

const EngineeringManufacturingIT = () => {
  return (
    <MasterMainServiceTemplate
      // Hero Section - Minimal
      heroTitle="Engineering & Manufacturing IT"
      heroSubtitle="Smart Manufacturing"
      heroDescription="Transform manufacturing with Industry 4.0 technologies, IoT integration, and digital twin solutions. Build intelligent factories with advanced automation, real-time monitoring, and data-driven insights."
      heroButtonText="Smart Manufacturing"
      heroButtonLink="/contact"
      heroBackgroundImage="/Manufacturing-and-Automotive.webp"
      heroTextColor="white"
      heroFeatures={[
        "Industry 4.0",
        "IoT Integration",
        "Digital Twins",
        "Smart Automation"
      ]}

      // Problem/Solution Section
      problemSolutionTitle="The Manufacturing Challenge & Our Solution"
      problemSolutionSubtitle="We understand the complexities of modern manufacturing and have the expertise to build intelligent factory solutions"
      problems={[
        {
          title: "Legacy Manufacturing Systems",
          description: "Outdated manufacturing systems that lack connectivity, real-time monitoring, and data-driven decision making capabilities."
        },
        {
          title: "Operational Inefficiencies",
          description: "Manual processes, lack of automation, and disconnected systems that reduce productivity and increase costs."
        },
        {
          title: "Quality Control Issues",
          description: "Inconsistent quality control processes and lack of real-time monitoring that lead to defects and waste."
        }
      ]}
      solutions={[
        {
          title: "Industry 4.0 Transformation",
          description: "Complete digital transformation with IoT, automation, and data analytics for intelligent manufacturing."
        },
        {
          title: "Smart Factory Solutions",
          description: "Connected systems, real-time monitoring, and automated processes for maximum efficiency and productivity."
        },
        {
          title: "Digital Twin Technology",
          description: "Virtual replicas of physical systems for predictive maintenance, optimization, and quality control."
        }
      ]}
      problemSolutionVariant="split"

      // Service Offerings
      serviceOfferingsTitle="Our Engineering & Manufacturing Services"
      serviceOfferingsSubtitle="Comprehensive manufacturing solutions designed to build intelligent, connected factories"
      services={[
        {
          icon: <Factory />,
          title: "Industry 4.0 Solutions",
          description: "Transform manufacturing with IoT, automation, and data analytics for intelligent operations.",
          features: [
            "IoT connectivity",
            "Smart automation",
            "Data analytics"
          ],
          badge: "Most Popular",
          link: "/service/engineering-and-manufacturing-it/industry4",
          ctaText: "Industry 4.0"
        },
        {
          icon: <Sensors />,
          title: "MES Integration & IoT",
          description: "Connect shop floors with IoT and MES for real-time monitoring and process optimization.",
          features: [
            "MES integration",
            "Real-time monitoring",
            "Process optimization"
          ],
          badge: "Trending",
          link: "/service/engineering-and-manufacturing-it/mes",
          ctaText: "MES & IoT"
        },
        {
          icon: <Engineering />,
          title: "PLM, CAD & CAE Automation",
          description: "Streamline design and engineering with automation and integrated product lifecycle management.",
          features: [
            "PLM integration",
            "CAD automation",
            "Design optimization"
          ],
          link: "/service/engineering-and-manufacturing-it/plm",
          ctaText: "PLM & CAD"
        },
        {
          icon: <PrecisionManufacturing />,
          title: "Smart Factory",
          description: "Enable agile, data-driven manufacturing with intelligent factory solutions and digital twins.",
          features: [
            "Digital twins",
            "Data-driven insights",
            "Agile manufacturing"
          ],
          link: "/service/engineering-and-manufacturing-it/twins",
          ctaText: "Smart Factory"
        }
      ]}
      serviceOfferingsVariant="default"

      // Benefits Section
      benefitsTitle="Why Choose Our Engineering & Manufacturing Services"
      benefitsSubtitle="Discover the tangible benefits and outcomes you can expect from our manufacturing solutions"
      benefits={[
        {
          icon: <Speed />,
          title: "50% Faster Production",
          description: "Automated processes and real-time monitoring that increase production speed and reduce cycle times.",
          features: [
            "Automated processes",
            "Real-time monitoring",
            "Reduced cycle times"
          ],
          metric: {
            value: "50%",
            label: "Faster Production"
          }
        },
        {
          icon: <TrendingUp />,
          title: "30% Cost Reduction",
          description: "Optimized operations, reduced waste, and improved efficiency that significantly lower manufacturing costs.",
          features: [
            "Optimized operations",
            "Reduced waste",
            "Improved efficiency"
          ],
          metric: {
            value: "30%",
            label: "Cost Reduction"
          }
        },
        {
          icon: <CheckCircle />,
          title: "99.9% Quality Assurance",
          description: "Advanced quality control systems and real-time monitoring that ensure consistent product quality.",
          features: [
            "Quality control",
            "Real-time monitoring",
            "Consistent quality"
          ],
          metric: {
            value: "99.9%",
            label: "Quality Assurance"
          }
        }
      ]}

      // Stats Section
      statsTitle="Proven Manufacturing Results"
      statsSubtitle="Numbers that speak for themselves - real outcomes from our manufacturing implementations"
      stats={[
        {
          icon: <Speed />,
          value: "50%",
          label: "Faster Production",
          description: "Average improvement in production speed"
        },
        {
          icon: <TrendingUp />,
          value: "30%",
          label: "Cost Reduction",
          description: "Average reduction in manufacturing costs"
        },
        {
          icon: <CheckCircle />,
          value: "99.9%",
          label: "Quality Assurance",
          description: "Quality control and monitoring achieved"
        },
        {
          icon: <Factory />,
          value: "100+",
          label: "Factories Transformed",
          description: "Manufacturing facilities modernized"
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Transform Your Manufacturing?"
      finalCtaSubtitle="Join hundreds of companies that have already modernized their manufacturing with our Industry 4.0 solutions. Let's discuss how we can help you achieve similar results."
      finalCtaButtonText="Schedule Manufacturing Consultation"
      finalCtaButtonLink="/contact"

      // Blog & Case Studies
      blogTitle="Manufacturing Insights & Updates"
      blogSubtitle="Stay informed with our latest manufacturing research, industry trends, and thought leadership content"
      caseStudyTitle="Manufacturing Success Stories"
      caseStudySubtitle="Discover how we've helped businesses achieve remarkable results with smart manufacturing"

      // Theme
      theme="light"
    />
  );
};

export default EngineeringManufacturingIT;
