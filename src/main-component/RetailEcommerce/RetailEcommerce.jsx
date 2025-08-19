import React from "react";
import IndustryTemplate from "../../components/templates/IndustryTemplate";
import { 
  ShoppingCart, 
  Speed, 
  TrendingUp, 
  AutoAwesome,
  Cloud,
  Security,
  Analytics,
  DataUsage,
  Assessment,
  Compliance,
  CustomerExperience,
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
  Inventory,
  LocalShipping
} from '@mui/icons-material';

const RetailEcommerce = () => {
  return (
    <IndustryTemplate
      // Hero Section
      heroTitle="Retail & E-Commerce"
      heroSubtitle="Digital Commerce"
      heroDescription="Transform retail operations with omnichannel commerce solutions, AI-powered personalization, and intelligent inventory management. Build seamless digital shopping experiences that drive growth and customer loyalty."
      heroButtonText="TALK TO OUR EXPERTS"
      heroButtonLink="/contact"
      heroBackgroundImage="/shutter-speed-BQ9usyzHx_w-unsplash.jpg"
      heroFeatures={[
        "Omnichannel Commerce",
        "AI-Powered Personalization",
        "Inventory Optimization",
        "Digital Customer Experience"
      ]}

      // Services Component Props - Industry Solutions
      showServicesComponent={true}
      services={[
        {
          title: "Omnichannel Commerce Platform",
          description: "Unified commerce platform integrating online, mobile, and physical store experiences.",
          image: "/images/omnichannel-commerce.webp",
          features: ["Unified Experience", "Cross-channel Integration", "Real-time Sync", "Customer Journey"],
          link: "/services/omnichannel-commerce",
          badge: "Omnichannel"
        },
        {
          title: "AI-Powered Personalization",
          description: "Intelligent personalization and recommendation engines for enhanced customer engagement.",
          image: "/images/ai-personalization.webp",
          features: ["Recommendation Engine", "Customer Segmentation", "Behavioral Analytics", "Dynamic Content"],
          link: "/services/ai-personalization",
          badge: "AI"
        },
        {
          title: "Inventory Management System",
          description: "Smart inventory management with demand forecasting and automated replenishment.",
          image: "/images/inventory-management.webp",
          features: ["Demand Forecasting", "Automated Replenishment", "Real-time Tracking", "Stock Optimization"],
          link: "/services/inventory-management",
          badge: "Inventory"
        },
        {
          title: "E-commerce Platform Development",
          description: "Scalable e-commerce platforms with modern features and high-performance architecture.",
          image: "/images/ecommerce-platform.webp",
          features: ["Scalable Architecture", "Modern Features", "High Performance", "Mobile-First"],
          link: "/services/ecommerce-platform",
          badge: "E-commerce"
        },
        {
          title: "Supply Chain Optimization",
          description: "Intelligent supply chain management with real-time visibility and analytics.",
          image: "/images/supply-chain-optimization.webp",
          features: ["Real-time Visibility", "Supply Chain Analytics", "Demand Planning", "Logistics Optimization"],
          link: "/services/supply-chain-optimization",
          badge: "Supply Chain"
        },
        {
          title: "Customer Analytics & Insights",
          description: "Advanced analytics and business intelligence for customer behavior and business insights.",
          image: "/images/customer-analytics.webp",
          features: ["Customer Analytics", "Business Intelligence", "Performance Metrics", "Predictive Analytics"],
          link: "/services/customer-analytics",
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

export default RetailEcommerce;
