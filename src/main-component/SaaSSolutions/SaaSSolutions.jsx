import React from "react";
import IndustryTemplate from "../../components/templates/IndustryTemplate";
import { 
  Cloud, 
  Speed, 
  TrendingUp, 
  AutoAwesome,
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
  Subscription,
  Monetization,
  Scalability
} from '@mui/icons-material';

const SaaSSolutions = () => {
  return (
    <IndustryTemplate
      // Hero Section
      heroTitle="SaaS Development Solutions"
      heroSubtitle="Scalable SaaS"
      heroDescription="Transform your business idea into a successful SaaS product with our comprehensive development services. From MVP to enterprise-scale applications, we build scalable, secure, and user-friendly SaaS solutions."
      heroButtonText="Build Your SaaS"
      heroButtonLink="/contact"
      heroBackgroundImage="/SaaS-Solutions.webp"
      heroFeatures={[
        "SaaS Product Development",
        "Multi-Tenant Architecture",
        "Subscription Management",
        "Cloud-Native Solutions"
      ]}

      // Services Component Props - Industry Solutions
      showServicesComponent={true}
      services={[
        {
          title: "SaaS MVP Development",
          description: "Rapid development of minimum viable products to validate business ideas and attract early adopters.",
          image: "/images/saas-mvp.webp",
          features: ["Rapid Prototyping", "Core Features", "User Testing", "Market Validation"],
          link: "/services/saas-mvp",
          badge: "MVP"
        },
        {
          title: "Multi-Tenant SaaS Platforms",
          description: "Scalable multi-tenant applications with efficient resource sharing and data isolation capabilities.",
          image: "/images/multi-tenant-saas.webp",
          features: ["Tenant Isolation", "Resource Sharing", "Customization", "Scalability"],
          link: "/services/multi-tenant-saas",
          badge: "Multi-Tenant"
        },
        {
          title: "Subscription Management Systems",
          description: "Comprehensive subscription and billing management with flexible pricing models and payment processing.",
          image: "/images/subscription-management.webp",
          features: ["Flexible Pricing", "Payment Processing", "Billing Automation", "Revenue Analytics"],
          link: "/services/subscription-management",
          badge: "Billing"
        },
        {
          title: "SaaS Analytics & Reporting",
          description: "Advanced analytics and reporting systems to track user behavior, business metrics, and growth indicators.",
          image: "/images/saas-analytics.webp",
          features: ["User Analytics", "Business Intelligence", "Custom Dashboards", "Real-time Reporting"],
          link: "/services/saas-analytics",
          badge: "Analytics"
        },
        {
          title: "SaaS Security & Compliance",
          description: "Enterprise-grade security measures and compliance frameworks to protect customer data and ensure trust.",
          image: "/images/saas-security.webp",
          features: ["Data Encryption", "Access Controls", "Compliance Frameworks", "Security Audits"],
          link: "/services/saas-security",
          badge: "Security"
        },
        {
          title: "SaaS Integration Services",
          description: "Seamless integration with third-party services, APIs, and enterprise systems for enhanced functionality.",
          image: "/images/saas-integration.webp",
          features: ["API Integration", "Third-party Services", "Enterprise Systems", "Data Synchronization"],
          link: "/services/saas-integration",
          badge: "Integration"
        }
      ]}
      servicesLimit={6}
      servicesShowButton={true}
      servicesButtonText="Schedule a Strategy Call"
      servicesButtonLink="/contact"
    />
  );
};

export default SaaSSolutions;
