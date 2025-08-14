import React from "react";
import MasterIndustryTemplate from "../../components/templates/MasterIndustryTemplate";
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
    <MasterIndustryTemplate
      // Hero Section
      heroTitle="Retail & E-Commerce"
      heroSubtitle="Accelerate retail transformation with digital commerce solutions"
      heroDescription="Transform retail operations with omnichannel commerce solutions, AI-powered personalization, and intelligent inventory management. Build seamless digital shopping experiences that drive growth and customer loyalty."
      heroButtonText="TALK TO OUR EXPERTS"
      heroButtonLink="/contact"
      heroBackgroundImage="/Retail-and-Ecommerce.webp"
      heroFeatures={[
        "Omnichannel Commerce",
        "AI-Powered Personalization",
        "Inventory Optimization",
        "Digital Customer Experience"
      ]}

      // Problem/Solution Section (Industry Challenges)
      showProblemSolution={true}
      problemSolutionTitle="Retail & E-Commerce Industry Challenges & Solutions"
      problemSolutionSubtitle="We understand the unique challenges facing retail and e-commerce businesses and provide innovative solutions"
      problems={[
        {
          title: "Omnichannel Integration Complexity",
          description: "Complex integration requirements between online, mobile, and physical store systems."
        },
        {
          title: "Customer Experience Fragmentation",
          description: "Inconsistent customer experiences across different channels and touchpoints."
        },
        {
          title: "Inventory Management Challenges",
          description: "Inefficient inventory management leading to stockouts, overstock, and lost sales."
        },
        {
          title: "Personalization & Customer Engagement",
          description: "Limited personalization capabilities and poor customer engagement across channels."
        },
        {
          title: "Supply Chain Visibility",
          description: "Lack of real-time visibility into supply chain operations and inventory levels."
        },
        {
          title: "Performance & Scalability",
          description: "E-commerce platforms that can't handle high traffic and seasonal demand spikes."
        }
      ]}
      solutions={[
        {
          title: "Unified Omnichannel Platform",
          description: "Seamless integration of online, mobile, and physical store experiences with unified data."
        },
        {
          title: "Personalized Customer Experience",
          description: "AI-powered personalization and recommendation engines for enhanced customer engagement."
        },
        {
          title: "Intelligent Inventory Management",
          description: "Smart inventory management with demand forecasting and automated replenishment."
        },
        {
          title: "Real-time Supply Chain Visibility",
          description: "Comprehensive supply chain visibility with real-time tracking and analytics."
        },
        {
          title: "Scalable E-commerce Architecture",
          description: "Cloud-native e-commerce platforms designed for high performance and scalability."
        },
        {
          title: "Advanced Analytics & Insights",
          description: "Comprehensive analytics and business intelligence for data-driven decision making."
        }
      ]}

      // Service Offerings Section (Industry Solutions)
      showServiceOfferings={true}
      serviceOfferingsTitle="Retail & E-Commerce Technology Solutions"
      serviceOfferingsSubtitle="Comprehensive digital solutions designed specifically for retail and e-commerce industry challenges"
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

      // Benefits Section (Industry Process)
      showBenefits={true}
      benefitsTitle="Our Retail Development Approach"
      benefitsSubtitle="Proven methodology for delivering innovative retail and e-commerce solutions"
      benefits={[
        {
          title: "Customer-Centric Design",
          description: "Design process focused on customer experience with user research and iterative improvement.",
          features: ["User Research", "Customer Journey Mapping", "Iterative Design", "User Testing"]
        },
        {
          title: "Agile Development Methodology",
          description: "Rapid development cycles with continuous integration and deployment for fast-to-market solutions.",
          features: ["Sprint Planning", "Continuous Integration", "Automated Testing", "Rapid Deployment"]
        },
        {
          title: "Data-Driven Optimization",
          description: "Continuous optimization based on data insights and performance metrics.",
          features: ["Performance Monitoring", "Data Analytics", "A/B Testing", "Continuous Improvement"]
        }
      ]}

      // Stats Section (Industry Results)
      showStats={true}
      statsTitle="Retail & E-Commerce Technology Results"
      statsSubtitle="Proven outcomes for retail and e-commerce businesses implementing our solutions"
      stats={[
        {
          metric: { value: "40%", label: "Revenue Growth" },
          description: "Increased revenue with personalized experiences"
        },
        {
          metric: { value: "60%", label: "Customer Engagement" },
          description: "Improved customer engagement and retention"
        },
        {
          metric: { value: "30%", label: "Inventory Optimization" },
          description: "Reduced inventory costs with smart management"
        },
        {
          metric: { value: "50%", label: "Conversion Rate" },
          description: "Enhanced conversion rates with omnichannel"
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Transform Retail Operations?"
      finalCtaSubtitle="Let's discuss how our retail expertise can help you create seamless digital shopping experiences"
      finalCtaButtonText="Schedule Retail Consultation"
      finalCtaButtonLink="/contact"
    />
  );
};

export default RetailEcommerce;
