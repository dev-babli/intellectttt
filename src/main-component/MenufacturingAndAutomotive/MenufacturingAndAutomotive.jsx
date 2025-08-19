import React from "react";
import IndustryTemplate from "../../components/templates/IndustryTemplate";
import { 
  Factory, 
  Engineering, 
  Speed, 
  TrendingUp, 
  AutoAwesome,
  Cloud,
  Security,
  Analytics,
  DataUsage,
  Assessment,
  Compliance,
  Automation,
  DataAnalytics,
  AI,
  MachineLearning,
  IoT,
  Sensors,
  PrecisionManufacturing,
  Build,
  Memory,
  IntegrationInstructions,
  Autorenew,
  RocketLaunch
} from '@mui/icons-material';

const MenufacturingAndAutomotive = () => {
  return (
    <IndustryTemplate
      // Hero Section
      heroTitle="Manufacturing & Automotive"
      heroSubtitle="Build. Evaluate."
      heroDescription="Transform manufacturing operations with Industry 4.0 technologies, IoT integration, and digital twin solutions. Build intelligent factories with advanced automation, real-time monitoring, and data-driven insights."
      heroButtonText="TALK TO OUR EXPERTS"
      heroButtonLink="/contact"
      heroBackgroundImage="/Manufacturing-and-Automotive.webp"
      heroFeatures={[
        "Industry 4.0 Solutions",
        "IoT & Connected Manufacturing",
        "Digital Twin Technology",
        "Smart Factory Automation"
      ]}

      // Services Component Props - Industry Solutions
      showServicesComponent={true}
      services={[
        {
          title: "Industry 4.0 Solutions",
          description: "Comprehensive Industry 4.0 implementation with smart manufacturing and digital transformation.",
          image: "/images/industry-4.webp",
          features: ["Smart Manufacturing", "Digital Transformation", "Process Automation", "Real-time Monitoring"],
          link: "/services/industry-4",
          badge: "Industry 4.0"
        },
        {
          title: "IoT & Connected Manufacturing",
          description: "IoT solutions for connected manufacturing with real-time data collection and operational visibility.",
          image: "/images/iot-manufacturing.webp",
          features: ["Device Connectivity", "Real-time Data", "Operational Visibility", "Remote Monitoring"],
          link: "/services/iot-manufacturing",
          badge: "IoT"
        },
        {
          title: "Digital Twin Technology",
          description: "Digital twin solutions for virtual modeling and simulation of manufacturing processes and products.",
          image: "/images/digital-twin.webp",
          features: ["Virtual Modeling", "Process Simulation", "Predictive Analytics", "Performance Optimization"],
          link: "/services/digital-twin",
          badge: "Digital Twin"
        },
        {
          title: "MES Integration & Automation",
          description: "Manufacturing Execution System integration with automated workflows and real-time production control.",
          image: "/images/mes-integration.webp",
          features: ["Production Control", "Workflow Automation", "Real-time Monitoring", "Quality Management"],
          link: "/services/mes-integration",
          badge: "MES"
        },
        {
          title: "Predictive Maintenance",
          description: "AI-powered predictive maintenance solutions to prevent downtime and optimize equipment performance.",
          image: "/images/predictive-maintenance.webp",
          features: ["Equipment Monitoring", "Predictive Analytics", "Downtime Prevention", "Performance Optimization"],
          link: "/services/predictive-maintenance",
          badge: "AI"
        },
        {
          title: "Supply Chain Optimization",
          description: "Intelligent supply chain management with real-time tracking, analytics, and optimization.",
          image: "/images/supply-chain.webp",
          features: ["Real-time Tracking", "Supply Chain Analytics", "Inventory Optimization", "Demand Forecasting"],
          link: "/services/supply-chain",
          badge: "Analytics"
        }
      ]}
      servicesLimit={6}
      servicesShowButton={true}
      servicesButtonText="Schedule a Strategy Call"
      servicesButtonLink="/contact"
    />
  );
};

export default MenufacturingAndAutomotive;
