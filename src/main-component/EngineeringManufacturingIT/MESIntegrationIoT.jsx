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
  Build,
  Engineering,
  Factory,
  Wifi
} from '@mui/icons-material';

const MESIntegrationIoT = () => {
  return (
    <MasterSubServiceTemplate
      // Hero Section - Minimal
      heroTitle="MES Integration & IoT"
      heroSubtitle="Smart Manufacturing"
      heroDescription="Bridge the gap between operational technology (OT) and information technology (IT) through robust MES integration and Industrial IoT solutions. Enable real-time visibility, production optimization, and data-driven decision-making."
      heroButtonText="MES & IoT"
      heroButtonLink="/contact"
      heroBackgroundImage="/MES-Integration-IOT.webp"
      heroTextColor="black"
      heroFeatures={[
        "MES Integration",
        "Industrial IoT",
        "Real-time Visibility",
        "Production Optimization"
      ]}

      // Problem/Solution Section
      problemSolutionTitle="The Manufacturing Integration Challenge & Our Solution"
      problemSolutionSubtitle="We understand the complexities of manufacturing system integration and have the expertise to create seamless OT/IT solutions"
      problems={[
        {
          title: "OT/IT Gap",
          description: "Disconnect between operational technology and information technology that prevents seamless data flow and optimization."
        },
        {
          title: "Legacy System Limitations",
          description: "Outdated manufacturing systems that lack real-time capabilities and prevent modern optimization strategies."
        },
        {
          title: "Data Fragmentation",
          description: "Fragmented data across multiple systems that prevents comprehensive analysis and decision-making."
        }
      ]}
      solutions={[
        {
          title: "MES Integration Solutions",
          description: "Comprehensive MES integration that bridges OT and IT systems for seamless data flow and optimization."
        },
        {
          title: "Industrial IoT Implementation",
          description: "Advanced IoT solutions that modernize legacy systems and enable real-time monitoring and control."
        },
        {
          title: "Unified Data Platform",
          description: "Integrated data platforms that consolidate information and enable comprehensive analysis and insights."
        }
      ]}
      problemSolutionVariant="split"

      // Service Offerings
      serviceOfferingsTitle="Our MES Integration & IoT Services"
      serviceOfferingsSubtitle="Comprehensive manufacturing integration services designed to optimize production and enable smart manufacturing"
      services={[
        {
          icon: <IntegrationInstructions />,
          title: "MES System Integration",
          description: "Integrate MES systems with existing manufacturing infrastructure for seamless data flow and control.",
          features: [
            "System integration",
            "Data flow optimization",
            "Seamless control"
          ],
          badge: "Most Popular",
          link: "/contact",
          ctaText: "MES Integration"
        },
        {
          icon: <Wifi />,
          title: "Industrial IoT Solutions",
          description: "Implement IoT sensors and connected devices for real-time monitoring and automation.",
          features: [
            "IoT sensors",
            "Connected devices",
            "Real-time monitoring"
          ],
          badge: "Trending",
          link: "/contact",
          ctaText: "Industrial IoT"
        },
        {
          icon: <Analytics />,
          title: "Production Analytics",
          description: "Leverage advanced analytics to optimize production processes and improve efficiency.",
          features: [
            "Production optimization",
            "Process analytics",
            "Efficiency improvement"
          ],
          link: "/contact",
          ctaText: "Production Analytics"
        },
        {
          icon: <Factory />,
          title: "Smart Factory Solutions",
          description: "Transform traditional factories into intelligent, connected manufacturing environments.",
          features: [
            "Factory transformation",
            "Intelligent systems",
            "Connected environments"
          ],
          link: "/contact",
          ctaText: "Smart Factory"
        }
      ]}
      serviceOfferingsVariant="default"

      // Benefits Section
      benefitsTitle="Why Choose Our MES Integration & IoT Services"
      benefitsSubtitle="Discover the tangible benefits and outcomes you can expect from our manufacturing integration solutions"
      benefits={[
        {
          icon: <Speed />,
          title: "40% Faster Production",
          description: "Accelerate production processes by 40% with integrated MES systems and IoT automation.",
          features: [
            "Faster production",
            "Integrated systems",
            "IoT automation"
          ],
          metric: {
            value: "40%",
            label: "Faster Production"
          }
        },
        {
          icon: <TrendingUp />,
          title: "35% Cost Reduction",
          description: "Reduce manufacturing costs by 35% with optimized processes and real-time monitoring.",
          features: [
            "Cost reduction",
            "Optimized processes",
            "Real-time monitoring"
          ],
          metric: {
            value: "35%",
            label: "Cost Reduction"
          }
        },
        {
          icon: <CheckCircle />,
          title: "100% Visibility",
          description: "Achieve 100% visibility into manufacturing operations with comprehensive integration solutions.",
          features: [
            "Complete visibility",
            "Comprehensive integration",
            "Operational transparency"
          ],
          metric: {
            value: "100%",
            label: "Visibility"
          }
        }
      ]}

      // Stats Section
      statsTitle="Proven MES Integration & IoT Results"
      statsSubtitle="Numbers that speak for themselves - real outcomes from our manufacturing integration implementations"
      stats={[
        {
          icon: <Speed />,
          value: "40%",
          label: "Faster Production",
          description: "Average improvement in production speed"
        },
        {
          icon: <TrendingUp />,
          value: "35%",
          label: "Cost Reduction",
          description: "Average reduction in manufacturing costs"
        },
        {
          icon: <CheckCircle />,
          value: "100%",
          label: "Visibility",
          description: "Complete operational visibility achieved"
        },
        {
          icon: <Factory />,
          value: "30+",
          label: "Manufacturing Plants",
          description: "MES & IoT deployments completed"
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Transform Your Manufacturing Operations?"
      finalCtaSubtitle="Join hundreds of manufacturers that have already improved their production with our MES integration and IoT solutions. Let's discuss how we can help you achieve similar results."
      finalCtaButtonText="Schedule Manufacturing Consultation"
      finalCtaButtonLink="/contact"

      // Blog & Case Studies
      blogTitle="Manufacturing Integration Insights & Updates"
      blogSubtitle="Stay informed with our latest manufacturing integration research, industry trends, and thought leadership content"
      caseStudyTitle="Manufacturing Integration Success Stories"
      caseStudySubtitle="Discover how we've helped manufacturers achieve remarkable results with MES integration and IoT"

      // Theme
      theme="light"
    />
  );
};

export default MESIntegrationIoT;
