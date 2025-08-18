import React from "react";
import IndustryTemplate from "../../components/templates/IndustryTemplate";
import { 
  Code, 
  BugReport, 
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
  IntegrationInstructions
} from '@mui/icons-material';

const SoftwareDevelopment = () => {
  return (
    <IndustryTemplate
      // Hero Section
      heroTitle="Software Development Solutions"
      heroSubtitle="Custom Development"
      heroDescription="Transform your business with custom software solutions built with cutting-edge technologies. From web applications to enterprise systems, we deliver scalable, secure, and innovative software that drives growth."
      heroButtonText="Build Custom Software"
      heroButtonLink="/contact"
      heroBackgroundImage="/Software-Development.webp"
      heroFeatures={[
        "Custom Software Development",
        "Web & Mobile Applications",
        "Enterprise Software Solutions",
        "AI & Machine Learning Integration"
      ]}

      // Services Component Props - Industry Solutions
      showServicesComponent={true}
      services={[
        {
          title: "Custom Web Applications",
          description: "Scalable web applications built with modern frameworks and technologies for optimal performance and user experience.",
          image: "/images/web-applications.webp",
          features: ["Responsive Design", "Modern Frameworks", "API Integration", "Performance Optimization"],
          link: "/services/web-applications",
          badge: "Web"
        },
        {
          title: "Mobile App Development",
          description: "Native and cross-platform mobile applications with advanced features and seamless user experiences.",
          image: "/images/mobile-apps.webp",
          features: ["Native Development", "Cross-Platform", "Push Notifications", "Offline Capabilities"],
          link: "/services/mobile-apps",
          badge: "Mobile"
        },
        {
          title: "Enterprise Software Solutions",
          description: "Large-scale enterprise applications with complex business logic, integrations, and workflow automation.",
          image: "/images/enterprise-software.webp",
          features: ["Business Process Automation", "System Integration", "Workflow Management", "Reporting & Analytics"],
          link: "/services/enterprise-software",
          badge: "Enterprise"
        },
        {
          title: "Cloud-Native Applications",
          description: "Cloud-native applications designed for scalability, reliability, and optimal performance in cloud environments.",
          image: "/images/cloud-native.webp",
          features: ["Microservices Architecture", "Containerization", "Auto-scaling", "Cloud Optimization"],
          link: "/services/cloud-native",
          badge: "Cloud"
        },
        {
          title: "AI & ML Integration",
          description: "Intelligent software solutions with AI and machine learning capabilities for automation and insights.",
          image: "/images/ai-ml-integration.webp",
          features: ["Machine Learning Models", "Natural Language Processing", "Predictive Analytics", "Automation"],
          link: "/services/ai-ml-integration",
          badge: "AI"
        },
        {
          title: "API Development & Integration",
          description: "Robust API development and integration services for seamless connectivity between systems and applications.",
          image: "/images/api-development.webp",
          features: ["RESTful APIs", "GraphQL", "Third-party Integration", "API Management"],
          link: "/services/api-development",
          badge: "API"
        }
      ]}
      servicesLimit={6}
      servicesShowButton={true}
      servicesButtonText="Schedule a Strategy Call"
      servicesButtonLink="/contact"
    />
  );
};

export default SoftwareDevelopment;
