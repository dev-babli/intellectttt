import React from "react";
import IndustryTemplate from "../../components/templates/IndustryTemplate";
import { 
  Power, 
  Speed, 
  TrendingUp, 
  AutoAwesome,
  Cloud,
  Security,
  Analytics,
  DataUsage,
  Assessment,
  Compliance,
  Energy,
  DigitalTransformation,
  Automation,
  DataAnalytics,
  AI,
  MachineLearning,
  API,
  MobileFriendly,
  Web,
  Storage,
  IntegrationInstructions,
  SmartGrid,
  RenewableEnergy
} from '@mui/icons-material';

const EnergyUtilities = () => {
  return (
    <IndustryTemplate
      // Hero Section
      heroTitle="Energy & Utilities"
      heroSubtitle="Smart Grid Solutions"
      heroDescription="Power energy systems with smart grid technology, renewable energy integration, and intelligent energy management solutions. Transform utilities with IoT, AI, and predictive analytics for sustainable power delivery."
      heroButtonText="TALK TO OUR EXPERTS"
      heroButtonLink="/contact"
      heroBackgroundImage="/Manufacturing-and-Automotive.webp"
      heroFeatures={[
        "Smart Grid Technology",
        "Renewable Energy Integration",
        "Predictive Analytics",
        "Energy Management"
      ]}

      // Services Component Props - Industry Solutions
      showServicesComponent={true}
      services={[
        {
          title: "Smart Grid Infrastructure",
          description: "Intelligent grid systems with IoT sensors, real-time monitoring, and automated demand response capabilities.",
          image: "/images/smart-grid.webp",
          features: ["IoT Sensors", "Real-time Monitoring", "Demand Response", "Grid Automation"],
          link: "/services/smart-grid",
          badge: "Smart Grid"
        },
        {
          title: "Renewable Energy Integration",
          description: "Platforms for renewable energy integration, storage optimization, and grid balancing systems.",
          image: "/images/renewable-energy.webp",
          features: ["Solar Integration", "Wind Power", "Energy Storage", "Grid Balancing"],
          link: "/services/renewable-energy",
          badge: "Renewable"
        },
        {
          title: "Energy Management Systems",
          description: "Comprehensive energy management platforms with monitoring, analytics, and optimization capabilities.",
          image: "/images/energy-management.webp",
          features: ["Energy Monitoring", "Analytics Dashboard", "Optimization", "Cost Management"],
          link: "/services/energy-management",
          badge: "Management"
        },
        {
          title: "Predictive Analytics & Forecasting",
          description: "AI-powered analytics to predict energy demand, optimize generation, and improve grid reliability.",
          image: "/images/energy-analytics.webp",
          features: ["Demand Forecasting", "Generation Optimization", "Grid Reliability", "Predictive Maintenance"],
          link: "/services/energy-analytics",
          badge: "Analytics"
        },
        {
          title: "Utility Operations Management",
          description: "End-to-end utility operations management with asset tracking, maintenance, and performance optimization.",
          image: "/images/utility-operations.webp",
          features: ["Asset Management", "Maintenance Planning", "Performance Monitoring", "Operational Efficiency"],
          link: "/services/utility-operations",
          badge: "Operations"
        },
        {
          title: "Energy Trading & Markets",
          description: "Advanced energy trading platforms with market analysis, risk management, and automated trading capabilities.",
          image: "/images/energy-trading.webp",
          features: ["Market Analysis", "Risk Management", "Automated Trading", "Portfolio Optimization"],
          link: "/services/energy-trading",
          badge: "Trading"
        }
      ]}
      servicesLimit={6}
      servicesShowButton={true}
      servicesButtonText="Schedule a Strategy Call"
      servicesButtonLink="/contact"
    />
  );
};

export default EnergyUtilities;
