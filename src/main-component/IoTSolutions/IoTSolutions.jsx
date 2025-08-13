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
  Wifi,
  Storage,
  Build
} from '@mui/icons-material';

const IoTSolutions = () => {
  return (
    <MasterMainServiceTemplate
      // Hero Section - Minimal
      heroTitle="IoT Solutions"
      heroSubtitle="Connected Intelligence"
      heroDescription="Connect devices and drive automation with next-gen IoT technology. Transform your business with comprehensive IoT solutions that connect devices, collect data, and drive intelligent automation across industries."
      heroButtonText="TALK TO OUR EXPERTS"
      heroButtonLink="/contact"
      heroBackgroundImage="/herosectionimages/Sliders/3.webp"
      heroTextColor="white"
      heroFeatures={[
        "Industrial IoT & Smart Factories",
        "Connected Devices & Sensors",
        "Data Analytics & Insights",
        "Automation & Control Systems"
      ]}

      // Problem/Solution Section
      problemSolutionTitle="The IoT Challenge & Our Solution"
      problemSolutionSubtitle="We understand the complexities of IoT implementation and have the expertise to connect your world"
      problems={[
        {
          title: "Device Connectivity Issues",
          description: "Complex integration challenges and communication protocols that prevent seamless device connectivity and data flow."
        },
        {
          title: "Data Management Complexity",
          description: "Overwhelming amounts of IoT data that are difficult to collect, process, and transform into actionable insights."
        },
        {
          title: "Security & Scalability Concerns",
          description: "Security vulnerabilities in connected devices and infrastructure that can't scale with business growth."
        }
      ]}
      solutions={[
        {
          title: "Seamless Device Integration",
          description: "End-to-end IoT connectivity solutions with standardized protocols and reliable communication networks."
        },
        {
          title: "Intelligent Data Processing",
          description: "Advanced data analytics and processing capabilities that transform raw IoT data into actionable business insights."
        },
        {
          title: "Secure & Scalable Architecture",
          description: "Enterprise-grade security measures and scalable infrastructure that grows with your IoT ecosystem."
        }
      ]}
      problemSolutionVariant="split"

      // Service Offerings
      serviceOfferingsTitle="Our IoT Solutions"
      serviceOfferingsSubtitle="Comprehensive IoT solutions designed to connect devices and drive intelligent automation"
      services={[
        {
          icon: <Sensors />,
          title: "Industrial IoT & Smart Factories",
          description: "Transform manufacturing with connected sensors, predictive maintenance, and intelligent automation.",
          features: [
            "Predictive maintenance",
            "Real-time monitoring",
            "Process optimization"
          ],
          badge: "Most Popular",
          link: "/service/iot-solutions/industrial",
          ctaText: "Industrial IoT"
        },
        {
          icon: <Wifi />,
          title: "Connected Devices & Sensors",
          description: "Comprehensive device connectivity solutions with reliable communication protocols and network management.",
          features: [
            "Device connectivity",
            "Network management",
            "Protocol integration"
          ],
          badge: "Trending",
          link: "/service/iot-solutions/devices",
          ctaText: "Connected Devices"
        },
        {
          icon: <Analytics />,
          title: "Data Analytics & Insights",
          description: "Advanced analytics and machine learning for IoT data processing and business intelligence.",
          features: [
            "Data processing",
            "Machine learning",
            "Business intelligence"
          ],
          link: "/service/iot-solutions/analytics",
          ctaText: "IoT Analytics"
        },
        {
          icon: <AutoFixHigh />,
          title: "Automation & Control Systems",
          description: "Intelligent automation and control systems that optimize operations and improve efficiency.",
          features: [
            "Process automation",
            "Control systems",
            "Efficiency optimization"
          ],
          link: "/service/iot-solutions/automation",
          ctaText: "Automation"
        }
      ]}
      serviceOfferingsVariant="default"

      // Benefits Section
      benefitsTitle="Why Choose Our IoT Solutions"
      benefitsSubtitle="Discover the tangible benefits and outcomes you can expect from our IoT transformation"
      benefits={[
        {
          icon: <Speed />,
          title: "40% Efficiency Improvement",
          description: "IoT-driven automation and optimization that significantly improve operational efficiency and productivity.",
          features: [
            "Process optimization",
            "Automated workflows",
            "Performance monitoring"
          ],
          metric: {
            value: "40%",
            label: "Efficiency Gain"
          }
        },
        {
          icon: <TrendingUp />,
          title: "Predictive Maintenance",
          description: "Real-time monitoring and predictive analytics that prevent equipment failures and reduce downtime.",
          features: [
            "Failure prevention",
            "Downtime reduction",
            "Cost optimization"
          ],
          metric: {
            value: "60%",
            label: "Downtime Reduction"
          }
        },
        {
          icon: <Analytics />,
          title: "Data-Driven Insights",
          description: "Comprehensive data analytics that provide actionable insights for better decision-making and optimization.",
          features: [
            "Real-time insights",
            "Predictive analytics",
            "Performance optimization"
          ],
          metric: {
            value: "50+",
            label: "IoT Implementations"
          }
        }
      ]}

      // Stats Section
      statsTitle="Proven IoT Results"
      statsSubtitle="Numbers that speak for themselves - real outcomes from our IoT implementations"
      stats={[
        {
          icon: <Speed />,
          value: "40%",
          label: "Efficiency Improvement",
          description: "Average efficiency gain across IoT implementations"
        },
        {
          icon: <TrendingUp />,
          value: "60%",
          label: "Downtime Reduction",
          description: "Average reduction in equipment downtime"
        },
        {
          icon: <Analytics />,
          value: "50+",
          label: "IoT Implementations",
          description: "Successful IoT projects across industries"
        },
        {
          icon: <CheckCircle />,
          value: "Real-time",
          label: "Data Processing",
          description: "Real-time data processing and analytics"
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Connect Your World?"
      finalCtaSubtitle="Join hundreds of companies that have already transformed their operations with our IoT solutions. Let's discuss how we can help you achieve similar results."
      finalCtaButtonText="Schedule IoT Consultation"
      finalCtaButtonLink="/contact"

      // Blog & Case Studies
      blogTitle="IoT Insights & Updates"
      blogSubtitle="Stay informed with our latest IoT research, industry trends, and thought leadership content"
      caseStudyTitle="IoT Success Stories"
      caseStudySubtitle="Discover how we've helped businesses achieve remarkable results with IoT implementation"

      // Theme
      theme="light"
    />
  );
};

export default IoTSolutions;
