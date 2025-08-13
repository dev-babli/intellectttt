import React from "react";
import MasterSubServiceTemplate from "../../components/templates/MasterSubServiceTemplate";
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
  Code,
  Storage,
  Build,
  Update
} from '@mui/icons-material';

const AppModernization = () => {
  return (
    <MasterSubServiceTemplate
      // Hero Section - Minimal
      heroTitle="App Modernization & Microservices"
      heroSubtitle="Legacy Transformation"
      heroDescription="Upgrade legacy applications with modern microservice architecture and cloud-native design. Transform your applications with modern architecture, improved performance, and enhanced user experience."
      heroButtonText="Modernize Your Apps"
      heroButtonLink="/contact"
      heroBackgroundImage="/herosectionimages/Sliders/cloud.webp"
      heroTextColor="white"
      heroFeatures={[
        "Legacy Migration",
        "Microservices Architecture",
        "Containerization",
        "Cloud-Native Design"
      ]}

      // Problem/Solution Section
      problemSolutionTitle="The App Modernization Challenge & Our Solution"
      problemSolutionSubtitle="We understand the complexities of legacy application transformation and have the expertise to modernize your systems"
      problems={[
        {
          title: "Legacy System Limitations",
          description: "Outdated applications that can't scale, are expensive to maintain, and prevent innovation and growth."
        },
        {
          title: "Monolithic Architecture",
          description: "Rigid monolithic systems that are difficult to update, scale, and maintain with modern development practices."
        },
        {
          title: "Technology Debt",
          description: "Accumulated technical debt that makes applications slow, unreliable, and difficult to enhance."
        }
      ]}
      solutions={[
        {
          title: "Modern Architecture Design",
          description: "Transform legacy applications into modern, scalable microservices architecture with cloud-native design."
        },
        {
          title: "Containerization & Orchestration",
          description: "Containerize applications and implement orchestration for improved deployment and scalability."
        },
        {
          title: "Cloud-Native Migration",
          description: "Migrate applications to cloud-native platforms for improved performance, scalability, and cost efficiency."
        }
      ]}
      problemSolutionVariant="split"

      // Service Offerings
      serviceOfferingsTitle="Our App Modernization Services"
      serviceOfferingsSubtitle="Comprehensive application modernization services designed to transform your legacy systems"
      services={[
        {
          icon: <Update />,
          title: "Legacy Migration",
          description: "Seamlessly migrate legacy applications to modern platforms with minimal disruption and maximum benefits.",
          features: [
            "Zero-downtime migration",
            "Data migration",
            "System integration"
          ],
          badge: "Most Popular",
          link: "/contact",
          ctaText: "Legacy Migration"
        },
        {
          icon: <Code />,
          title: "Microservices Architecture",
          description: "Transform monolithic applications into flexible, scalable microservices architecture.",
          features: [
            "Service decomposition",
            "API design",
            "Service communication"
          ],
          badge: "Trending",
          link: "/contact",
          ctaText: "Microservices"
        },
        {
          icon: <Storage />,
          title: "Containerization",
          description: "Containerize applications for improved deployment, scaling, and management capabilities.",
          features: [
            "Docker containers",
            "Kubernetes orchestration",
            "DevOps integration"
          ],
          link: "/contact",
          ctaText: "Containerization"
        },
        {
          icon: <Cloud />,
          title: "Cloud-Native Design",
          description: "Design and implement cloud-native applications that leverage modern cloud services and capabilities.",
          features: [
            "Cloud-native patterns",
            "Serverless architecture",
            "Auto-scaling"
          ],
          link: "/contact",
          ctaText: "Cloud-Native"
        }
      ]}
      serviceOfferingsVariant="default"

      // Benefits Section
      benefitsTitle="Why Choose Our App Modernization Services"
      benefitsSubtitle="Discover the tangible benefits and outcomes you can expect from our modernization solutions"
      benefits={[
        {
          icon: <Speed />,
          title: "60% Performance Improvement",
          description: "Modernized applications deliver significantly better performance, scalability, and user experience.",
          features: [
            "Faster response times",
            "Improved scalability",
            "Better user experience"
          ],
          metric: {
            value: "60%",
            label: "Performance Gain"
          }
        },
        {
          icon: <TrendingUp />,
          title: "40% Cost Reduction",
          description: "Modern architecture reduces maintenance costs and improves operational efficiency.",
          features: [
            "Reduced maintenance",
            "Lower infrastructure costs",
            "Improved efficiency"
          ],
          metric: {
            value: "40%",
            label: "Cost Savings"
          }
        },
        {
          icon: <CheckCircle />,
          title: "Future-Ready Architecture",
          description: "Modern applications are built to adapt to future technologies and business requirements.",
          features: [
            "Technology flexibility",
            "Business agility",
            "Innovation readiness"
          ],
          metric: {
            value: "100%",
            label: "Future Ready"
          }
        }
      ]}

      // Stats Section
      statsTitle="Proven Modernization Results"
      statsSubtitle="Numbers that speak for themselves - real outcomes from our app modernization implementations"
      stats={[
        {
          icon: <Speed />,
          value: "60%",
          label: "Performance Improvement",
          description: "Average performance gain across modernized applications"
        },
        {
          icon: <TrendingUp />,
          value: "40%",
          label: "Cost Reduction",
          description: "Average cost savings for modernization projects"
        },
        {
          icon: <CheckCircle />,
          value: "100%",
          label: "Migration Success",
          description: "Successful application modernizations with zero data loss"
        },
        {
          icon: <Update />,
          value: "Zero Downtime",
          label: "Migration Strategy",
          description: "Zero-downtime migration approach for business continuity"
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Modernize Your Applications?"
      finalCtaSubtitle="Join hundreds of companies that have already transformed their applications with our modernization services. Let's discuss how we can help you achieve similar results."
      finalCtaButtonText="Schedule Modernization Consultation"
      finalCtaButtonLink="/contact"

      // Blog & Case Studies
      blogTitle="App Modernization Insights & Updates"
      blogSubtitle="Stay informed with our latest modernization research, industry trends, and thought leadership content"
      caseStudyTitle="Modernization Success Stories"
      caseStudySubtitle="Discover how we've helped businesses achieve remarkable results with application modernization"

      // Theme
      theme="light"
    />
  );
};

export default AppModernization;
