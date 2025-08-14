import React from "react";
import MasterIndustryTemplate from "../../components/templates/MasterIndustryTemplate";
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
    <MasterIndustryTemplate
      // Hero Section
      heroTitle="Software Development Solutions"
      heroSubtitle="Custom Software Development Services"
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

      // Problem/Solution Section (Industry Challenges)
      showProblemSolution={true}
      problemSolutionTitle="Software Development Challenges & Solutions"
      problemSolutionSubtitle="We understand the unique challenges facing software development projects and provide innovative solutions"
      problems={[
        {
          title: "Complex Development Requirements",
          description: "Complex business requirements and rapidly changing needs make software development projects challenging to manage."
        },
        {
          title: "Technology Stack Selection",
          description: "Choosing the right technology stack for scalability, performance, and future maintenance is critical but complex."
        },
        {
          title: "Quality Assurance & Testing",
          description: "Ensuring software quality, performance, and security across multiple platforms and environments is challenging."
        },
        {
          title: "Scalability & Performance",
          description: "Building software that can scale with business growth while maintaining optimal performance is essential."
        },
        {
          title: "Security & Compliance",
          description: "Implementing robust security measures and ensuring compliance with industry standards is increasingly complex."
        },
        {
          title: "Maintenance & Support",
          description: "Ongoing maintenance, updates, and support for software applications require dedicated resources and expertise."
        }
      ]}
      solutions={[
        {
          title: "Agile Development Methodology",
          description: "Iterative development approach with continuous feedback and rapid delivery of working software solutions."
        },
        {
          title: "Modern Technology Architecture",
          description: "Scalable, cloud-native architecture with microservices and modern development frameworks for optimal performance."
        },
        {
          title: "Comprehensive Testing Strategy",
          description: "Automated testing, continuous integration, and quality assurance processes ensure reliable software delivery."
        },
        {
          title: "Performance Optimization",
          description: "Performance monitoring, optimization, and scalability planning to handle growing user demands."
        },
        {
          title: "Security-First Development",
          description: "Security integrated into every development phase with regular audits and compliance monitoring."
        },
        {
          title: "Managed Support Services",
          description: "Ongoing maintenance, monitoring, and support services to ensure software reliability and performance."
        }
      ]}

      // Service Offerings Section (Industry Solutions)
      showServiceOfferings={true}
      serviceOfferingsTitle="Software Development Services"
      serviceOfferingsSubtitle="Comprehensive software development solutions designed for modern business needs"
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

      // Benefits Section (Industry Process)
      showBenefits={true}
      benefitsTitle="Our Software Development Approach"
      benefitsSubtitle="Proven methodology for delivering high-quality software solutions"
      benefits={[
        {
          title: "Agile Development Process",
          description: "Iterative development with continuous feedback, rapid prototyping, and regular stakeholder collaboration.",
          features: ["Sprint Planning", "Daily Standups", "Sprint Reviews", "Retrospectives"]
        },
        {
          title: "Quality Assurance & Testing",
          description: "Comprehensive testing strategy including unit testing, integration testing, and automated quality assurance.",
          features: ["Automated Testing", "Continuous Integration", "Performance Testing", "Security Testing"]
        },
        {
          title: "DevOps & Deployment",
          description: "Modern DevOps practices with continuous deployment, monitoring, and automated infrastructure management.",
          features: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Logging", "Automated Deployment"]
        }
      ]}

      // Stats Section (Industry Results)
      showStats={true}
      statsTitle="Software Development Results"
      statsSubtitle="Proven outcomes for companies implementing our software development solutions"
      stats={[
        {
          metric: { value: "40%", label: "Faster Development" },
          description: "Reduced development time with agile methodology"
        },
        {
          metric: { value: "99.9%", label: "Uptime" },
          description: "High availability for critical applications"
        },
        {
          metric: { value: "50%", label: "Cost Reduction" },
          description: "Lower development costs with efficient processes"
        },
        {
          metric: { value: "100%", label: "Client Satisfaction" },
          description: "Consistent delivery of high-quality software"
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Build Your Custom Software?"
      finalCtaSubtitle="Let's discuss how our software development expertise can help transform your business"
      finalCtaButtonText="Schedule Development Consultation"
      finalCtaButtonLink="/contact"
    />
  );
};

export default SoftwareDevelopment;
