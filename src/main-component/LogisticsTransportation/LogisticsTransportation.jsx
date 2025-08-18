import React from "react";
import IndustryTemplate from "../../components/templates/IndustryTemplate";
import { 
  LocalShipping, 
  Speed, 
  TrendingUp, 
  AutoAwesome,
  Cloud,
  Security,
  Analytics,
  DataUsage,
  Assessment,
  Compliance,
  Logistics,
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
  SupplyChain,
  Transportation
} from '@mui/icons-material';

const LogisticsTransportation = () => {
  return (
    <IndustryTemplate
      // Hero Section
      heroTitle="Logistics & Transportation"
      heroSubtitle="Supply Chain Solutions"
      heroDescription="Optimize logistics with intelligent supply chain solutions, real-time tracking, and predictive analytics. Transform transportation operations with IoT, AI, and automation for maximum efficiency."
      heroButtonText="TALK TO OUR EXPERTS"
      heroButtonLink="/contact"
      heroBackgroundImage="/SAP.webp"
      heroFeatures={[
        "Supply Chain Optimization",
        "Real-time Tracking",
        "Predictive Analytics",
        "Fleet Management"
      ]}

      // Services Component Props - Industry Solutions
      showServicesComponent={true}
      services={[
        {
          title: "Supply Chain Management",
          description: "End-to-end supply chain visibility with real-time tracking, inventory management, and demand forecasting.",
          image: "/images/supply-chain.webp",
          features: ["Real-time Tracking", "Inventory Management", "Demand Forecasting", "Supplier Management"],
          link: "/services/supply-chain",
          badge: "Supply Chain"
        },
        {
          title: "Fleet Management Systems",
          description: "Comprehensive fleet management with GPS tracking, route optimization, and vehicle maintenance scheduling.",
          image: "/images/fleet-management.webp",
          features: ["GPS Tracking", "Route Optimization", "Maintenance Scheduling", "Driver Management"],
          link: "/services/fleet-management",
          badge: "Fleet"
        },
        {
          title: "Warehouse Management",
          description: "Intelligent warehouse management systems with automation, inventory control, and order fulfillment optimization.",
          image: "/images/warehouse-management.webp",
          features: ["Automation", "Inventory Control", "Order Fulfillment", "Space Optimization"],
          link: "/services/warehouse-management",
          badge: "Warehouse"
        },
        {
          title: "Transportation Analytics",
          description: "Advanced analytics platforms for transportation optimization, cost analysis, and performance monitoring.",
          image: "/images/transportation-analytics.webp",
          features: ["Cost Analysis", "Performance Monitoring", "Route Analytics", "Predictive Insights"],
          link: "/services/transportation-analytics",
          badge: "Analytics"
        },
        {
          title: "Last-Mile Delivery Solutions",
          description: "Optimized last-mile delivery with real-time tracking, customer notifications, and delivery optimization.",
          image: "/images/last-mile-delivery.webp",
          features: ["Real-time Tracking", "Customer Notifications", "Delivery Optimization", "Proof of Delivery"],
          link: "/services/last-mile-delivery",
          badge: "Delivery"
        },
        {
          title: "Logistics Automation",
          description: "Automated logistics processes with robotics, AI-powered decision making, and intelligent workflow optimization.",
          image: "/images/logistics-automation.webp",
          features: ["Robotics", "AI Decision Making", "Workflow Optimization", "Process Automation"],
          link: "/services/logistics-automation",
          badge: "Automation"
        }
      ]}
      servicesLimit={6}
      servicesShowButton={true}
      servicesButtonText="Schedule a Strategy Call"
      servicesButtonLink="/contact"
    />
  );
};

export default LogisticsTransportation;
