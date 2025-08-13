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
  Storage,
  Code,
  Build,
  Engineering
} from '@mui/icons-material';

const CloudEngineering = () => {
  return (
    <MasterSubServiceTemplate
      // Hero Section - Minimal
      heroTitle="Azure, AWS & GCP Engineering"
      heroSubtitle="Multi-Cloud Excellence"
      heroDescription="Cloud engineering on Azure, AWS & GCP. Build scalable, secure, and cost-effective cloud infrastructure across major cloud platforms with our expert engineering services."
      heroButtonText="Cloud Engineering"
      heroButtonLink="/contact"
      heroBackgroundImage="/herosectionimages/Sliders/cloud.webp"
      heroTextColor="white"
      heroFeatures={[
        "Multi-Cloud Strategy",
        "Infrastructure as Code",
        "DevOps Integration",
        "Cloud Security"
      ]}

      // Problem/Solution Section
      problemSolutionTitle="The Cloud Engineering Challenge & Our Solution"
      problemSolutionSubtitle="We understand the complexities of multi-cloud engineering and have the expertise to build robust cloud infrastructure"
      problems={[
        {
          title: "Cloud Platform Complexity",
          description: "Complex multi-cloud environments that are difficult to manage, optimize, and secure across different platforms."
        },
        {
          title: "Infrastructure Management",
          description: "Manual infrastructure provisioning and management that is error-prone, slow, and doesn't scale with business needs."
        },
        {
          title: "Cost Optimization",
          description: "Unoptimized cloud spending and lack of visibility into resource utilization and cost management."
        }
      ]}
      solutions={[
        {
          title: "Multi-Cloud Strategy",
          description: "Comprehensive multi-cloud strategy and implementation across Azure, AWS, and GCP platforms."
        },
        {
          title: "Infrastructure as Code",
          description: "Automated infrastructure provisioning and management using Infrastructure as Code practices."
        },
        {
          title: "Cloud Cost Optimization",
          description: "Advanced cost optimization strategies and tools to maximize cloud ROI and minimize waste."
        }
      ]}
      problemSolutionVariant="split"

      // Service Offerings
      serviceOfferingsTitle="Our Cloud Engineering Services"
      serviceOfferingsSubtitle="Comprehensive cloud engineering services designed to build robust, scalable infrastructure"
      services={[
        {
          icon: <Cloud />,
          title: "Multi-Cloud Strategy",
          description: "Design and implement comprehensive multi-cloud strategies across Azure, AWS, and GCP platforms.",
          features: [
            "Platform selection",
            "Architecture design",
            "Migration planning"
          ],
          badge: "Most Popular",
          link: "/contact",
          ctaText: "Multi-Cloud Strategy"
        },
        {
          icon: <Code />,
          title: "Infrastructure as Code",
          description: "Automate infrastructure provisioning and management using modern IaC tools and practices.",
          features: [
            "Terraform automation",
            "CloudFormation",
            "ARM templates"
          ],
          badge: "Trending",
          link: "/contact",
          ctaText: "IaC Solutions"
        },
        {
          icon: <Build />,
          title: "DevOps Integration",
          description: "Integrate cloud infrastructure with DevOps practices for continuous deployment and automation.",
          features: [
            "CI/CD pipelines",
            "Automated deployment",
            "Environment management"
          ],
          link: "/contact",
          ctaText: "DevOps Integration"
        },
        {
          icon: <Security />,
          title: "Cloud Security",
          description: "Implement comprehensive security measures and compliance frameworks for cloud infrastructure.",
          features: [
            "Security architecture",
            "Compliance frameworks",
            "Threat protection"
          ],
          link: "/contact",
          ctaText: "Cloud Security"
        }
      ]}
      serviceOfferingsVariant="default"

      // Benefits Section
      benefitsTitle="Why Choose Our Cloud Engineering Services"
      benefitsSubtitle="Discover the tangible benefits and outcomes you can expect from our cloud engineering solutions"
      benefits={[
        {
          icon: <Speed />,
          title: "70% Faster Deployment",
          description: "Automated infrastructure provisioning and deployment that accelerates time-to-market and reduces manual errors.",
          features: [
            "Automated provisioning",
            "Rapid deployment",
            "Error reduction"
          ],
          metric: {
            value: "70%",
            label: "Faster Deployment"
          }
        },
        {
          icon: <TrendingUp />,
          title: "50% Cost Reduction",
          description: "Optimized cloud infrastructure and cost management strategies that significantly reduce cloud spending.",
          features: [
            "Cost optimization",
            "Resource management",
            "Waste reduction"
          ],
          metric: {
            value: "50%",
            label: "Cost Savings"
          }
        },
        {
          icon: <CheckCircle />,
          title: "Enterprise Security",
          description: "Enterprise-grade security measures and compliance frameworks that protect your cloud infrastructure.",
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
      statsTitle="Proven Cloud Engineering Results"
      statsSubtitle="Numbers that speak for themselves - real outcomes from our cloud engineering implementations"
      stats={[
        {
          icon: <Speed />,
          value: "70%",
          label: "Faster Deployment",
          description: "Average improvement in deployment speed"
        },
        {
          icon: <TrendingUp />,
          value: "50%",
          label: "Cost Reduction",
          description: "Average cost savings for cloud optimization"
        },
        {
          icon: <CheckCircle />,
          value: "99.9%",
          label: "Uptime SLA",
          description: "Guaranteed uptime for cloud infrastructure"
        },
        {
          icon: <Cloud />,
          value: "3",
          label: "Cloud Platforms",
          description: "Azure, AWS, and GCP expertise"
        }
      ]}

      // Final CTA
      finalCtaTitle="Ready to Build Your Cloud Infrastructure?"
      finalCtaSubtitle="Join hundreds of companies that have already transformed their infrastructure with our cloud engineering services. Let's discuss how we can help you achieve similar results."
      finalCtaButtonText="Schedule Cloud Engineering Consultation"
      finalCtaButtonLink="/contact"

      // Blog & Case Studies
      blogTitle="Cloud Engineering Insights & Updates"
      blogSubtitle="Stay informed with our latest cloud research, industry trends, and thought leadership content"
      caseStudyTitle="Cloud Engineering Success Stories"
      caseStudySubtitle="Discover how we've helped businesses achieve remarkable results with cloud infrastructure"

      // Theme
      theme="light"
    />
  );
};

export default CloudEngineering;
