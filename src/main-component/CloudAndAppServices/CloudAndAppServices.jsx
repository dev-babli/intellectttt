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
  Api,
  Storage,
  Code,
  Build
} from '@mui/icons-material';

const CloudAndAppServices = () => {
  return (
    <MasterMainServiceTemplate
      // Hero Section - Minimal
      heroTitle="Cloud & Application Services"
      heroSubtitle="Digital Transformation"
      heroDescription="Accelerate transformation with cloud migration and modern app development."
      heroButtonText="Start Your Journey"
      heroButtonLink="/contact"
      heroBackgroundImage="/cloud-computing.webp"
      heroTextColor="white"
      heroFeatures={[
        "Cloud Migration & Modernization",
        "Application Development",
        "DevOps & Automation",
        "API & Integration"
      ]}

      // Alliances Section - Enable for this important service
      showAlliances={true}
      
      // Problem/Solution Section
      problemSolutionTitle="The Cloud & App Challenge & Our Solution"
      problemSolutionSubtitle="We understand the complexities of digital transformation and have the expertise to make it work for your business"
      problems={[
        {
          title: "Legacy System Limitations",
          description: "Outdated systems that can't scale, are expensive to maintain, and prevent innovation and growth."
        },
        {
          title: "Cloud Migration Complexity",
          description: "Overwhelming technical requirements, integration challenges, and uncertainty about cloud strategy and costs."
        },
        {
          title: "Development Bottlenecks",
          description: "Slow development cycles, manual deployment processes, and lack of automation that delays time-to-market."
        }
      ]}
      solutions={[
        {
          title: "End-to-End Cloud Strategy",
          description: "Complete cloud transformation services from assessment to migration, with proven methodologies and cost optimization."
        },
        {
          title: "Modern Application Development",
          description: "Agile development with microservices, containers, and cloud-native architectures for scalable, maintainable applications."
        },
        {
          title: "DevOps & Automation Excellence",
          description: "Streamlined CI/CD pipelines, infrastructure as code, and automated deployment processes for faster delivery."
        }
      ]}
      problemSolutionVariant="split"

      // Service Offerings
      serviceOfferingsTitle="Our Cloud & Application Services"
      serviceOfferingsSubtitle="Comprehensive cloud and application services designed to accelerate your digital transformation"
      services={[
        {
          icon: <Api />,
          title: "API & Integration Services",
          description: "Connect systems with seamless API solutions and microservices architecture.",
          features: [
            "REST APIs & GraphQL",
            "Microservices design",
            "API Gateway implementation"
          ],
          badge: "Most Popular",
          link: "/service/cloud-and-application-services/api",
          ctaText: "Explore APIs"
        },
        {
          icon: <Code />,
          title: "App Modernization & Microservices",
          description: "Upgrade legacy applications with modern microservice architecture and cloud-native design.",
          features: [
            "Legacy migration",
            "Microservices architecture",
            "Containerization"
          ],
          badge: "Trending",
          link: "/service/cloud-and-application-services/modernization",
          ctaText: "Modernize Apps"
        },
        {
          icon: <Cloud />,
          title: "Azure, AWS & GCP Engineering",
          description: "Multi-cloud engineering and infrastructure management across major cloud platforms.",
          features: [
            "Multi-cloud strategy",
            "Infrastructure as Code",
            "Cloud security"
          ],
          link: "/service/cloud-and-application-services/engineering",
          ctaText: "Cloud Engineering"
        },
        {
          icon: <Build />,
          title: "DevOps & DevSecOps",
          description: "Automate and secure your development pipeline with modern DevOps practices.",
          features: [
            "CI/CD pipelines",
            "Security integration",
            "Automation & monitoring"
          ],
          link: "/service/cloud-and-application-services/devops",
          ctaText: "DevOps Solutions"
        }
      ]}
      serviceOfferingsVariant="default"

      // Benefits Section
      benefitsTitle="Why Choose Our Cloud & App Solutions"
      benefitsSubtitle="Discover the tangible benefits and outcomes you can expect from our cloud and application transformation"
      benefits={[
        {
          icon: <Speed />,
          title: "50% Faster Deployment",
          description: "Accelerate application delivery with automated CI/CD pipelines and cloud-native development practices.",
          features: [
            "Automated deployments",
            "Continuous integration",
            "Rapid scaling"
          ],
          metric: {
            value: "50%",
            label: "Faster Delivery"
          }
        },
        {
          icon: <TrendingUp />,
          title: "40% Cost Reduction",
          description: "Optimize cloud costs and reduce infrastructure overhead through intelligent resource management.",
          features: [
            "Cost optimization",
            "Resource management",
            "Pay-as-you-go"
          ],
          metric: {
            value: "40%",
            label: "Cost Savings"
          }
        },
        {
          icon: <Security />,
          title: "Enterprise Security",
          description: "Implement robust security measures and compliance frameworks for cloud and application protection.",
          features: [
            "Security by design",
            "Compliance frameworks",
            "Threat protection"
          ],
          metric: {
            value: "99.9%",
            label: "Uptime SLA"
          }
        }
      ]}

      // Stats Section
      statsTitle="Proven Cloud Results"
      statsSubtitle="Numbers that speak for themselves - real outcomes from our cloud implementations"
      stats={[
        {
          icon: <Speed />,
          value: "50%",
          label: "Faster Deployment",
          description: "Average improvement in deployment speed across all cloud projects"
        },
        {
          icon: <TrendingUp />,
          value: "40%",
          label: "Cost Reduction",
          description: "Average cost savings for our cloud migration clients"
        },
        {
          icon: <Security />,
          value: "99.9%",
          label: "Uptime SLA",
          description: "Guaranteed uptime for all cloud infrastructure deployments"
        },
        {
          icon: <CheckCircle />,
          value: "150+",
          label: "Cloud Projects",
          description: "Successful cloud projects delivered across various industries"
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Transform Your Applications?"
      finalCtaSubtitle="Join hundreds of companies that have already revolutionized their operations with our cloud and application services. Let's discuss how we can help you achieve similar results."
      finalCtaButtonText="Schedule Cloud Consultation"
      finalCtaButtonLink="/contact"

      // Blog & Case Studies
      blogTitle="Cloud & App Insights & Updates"
      blogSubtitle="Stay informed with our latest cloud research, industry trends, and thought leadership content"
      caseStudyTitle="Cloud Success Stories"
      caseStudySubtitle="Discover how we've helped businesses achieve remarkable results with cloud implementation"

      // Theme
      theme="light"
    />
  );
};

export default CloudAndAppServices;
