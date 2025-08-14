import React from "react";
import MasterIndustryTemplate from "../../components/templates/MasterIndustryTemplate";
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
    <MasterIndustryTemplate
      // Hero Section
      heroTitle="SaaS Development Solutions"
      heroSubtitle="Build Scalable SaaS Applications"
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

      // Problem/Solution Section (Industry Challenges)
      showProblemSolution={true}
      problemSolutionTitle="SaaS Development Challenges & Solutions"
      problemSolutionSubtitle="We understand the unique challenges facing SaaS companies and provide innovative solutions"
      problems={[
        {
          title: "Multi-Tenant Architecture Complexity",
          description: "Building scalable multi-tenant applications that efficiently serve multiple customers with data isolation."
        },
        {
          title: "Subscription & Billing Management",
          description: "Complex subscription models, billing cycles, and payment processing require sophisticated systems."
        },
        {
          title: "Scalability & Performance",
          description: "SaaS applications must handle growing user bases while maintaining optimal performance and uptime."
        },
        {
          title: "Security & Data Privacy",
          description: "Protecting customer data and ensuring compliance with privacy regulations is critical for SaaS success."
        },
        {
          title: "User Onboarding & Adoption",
          description: "Creating seamless user experiences that drive adoption and reduce churn rates."
        },
        {
          title: "Analytics & Business Intelligence",
          description: "Gathering insights from user behavior and business metrics to drive product decisions and growth."
        }
      ]}
      solutions={[
        {
          title: "Scalable Multi-Tenant Architecture",
          description: "Cloud-native architecture designed for multi-tenancy with efficient resource utilization and data isolation."
        },
        {
          title: "Advanced Subscription Management",
          description: "Comprehensive subscription and billing systems with flexible pricing models and automated payment processing."
        },
        {
          title: "Performance Optimization",
          description: "Optimized infrastructure and application performance to handle high user loads and ensure fast response times."
        },
        {
          title: "Enterprise-Grade Security",
          description: "Robust security measures including encryption, access controls, and compliance with industry standards."
        },
        {
          title: "User Experience Design",
          description: "Intuitive user interfaces and seamless onboarding processes that maximize user adoption and retention."
        },
        {
          title: "Advanced Analytics Platform",
          description: "Comprehensive analytics and reporting systems to track user behavior and business metrics."
        }
      ]}

      // Service Offerings Section (Industry Solutions)
      showServiceOfferings={true}
      serviceOfferingsTitle="SaaS Development Services"
      serviceOfferingsSubtitle="Comprehensive SaaS development solutions designed for modern business needs"
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

      // Benefits Section (Industry Process)
      showBenefits={true}
      benefitsTitle="Our SaaS Development Approach"
      benefitsSubtitle="Proven methodology for delivering successful SaaS products"
      benefits={[
        {
          title: "Lean Startup Methodology",
          description: "Rapid iteration and validation approach to build, measure, and learn from user feedback.",
          features: ["MVP Development", "User Testing", "Iterative Improvement", "Market Validation"]
        },
        {
          title: "Cloud-Native Architecture",
          description: "Scalable, resilient cloud infrastructure designed for SaaS applications and growth.",
          features: ["Microservices", "Auto-scaling", "Load Balancing", "Disaster Recovery"]
        },
        {
          title: "Continuous Deployment",
          description: "Automated deployment and monitoring systems for rapid feature delivery and updates.",
          features: ["CI/CD Pipelines", "Automated Testing", "Feature Flags", "Rollback Capabilities"]
        }
      ]}

      // Stats Section (Industry Results)
      showStats={true}
      statsTitle="SaaS Development Results"
      statsSubtitle="Proven outcomes for SaaS companies implementing our solutions"
      stats={[
        {
          metric: { value: "60%", label: "Faster Time to Market" },
          description: "Reduced development time with lean methodology"
        },
        {
          metric: { value: "99.9%", label: "Uptime" },
          description: "High availability for SaaS applications"
        },
        {
          metric: { value: "40%", label: "Reduced Churn" },
          description: "Improved user retention with better UX"
        },
        {
          metric: { value: "3x", label: "Revenue Growth" },
          description: "Increased revenue with optimized SaaS metrics"
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Build Your SaaS Product?"
      finalCtaSubtitle="Let's discuss how our SaaS development expertise can help you create a successful software product"
      finalCtaButtonText="Schedule SaaS Consultation"
      finalCtaButtonLink="/contact"
    />
  );
};

export default SaaSSolutions;
